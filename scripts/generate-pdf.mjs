import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';
import { PDFDocument } from 'pdf-lib';
import fs from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generatePDF() {
    console.log('🚀 Starting PDF export (screen media mode)...');

    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    try {
        const page = await browser.newPage();

        // Set viewport
        await page.setViewport({
            width: 1240,
            height: 2000,
            deviceScaleFactor: 2,
        });

        // CRITICAL: Force screen media to preserve exact screen layout
        await page.emulateMediaType('screen');

        console.log('📡 Navigating to report page...');
        await page.goto('http://localhost:3000', {
            waitUntil: 'networkidle2',
            timeout: 60000
        });

        // Wait for fonts to load
        await page.evaluateHandle('document.fonts.ready');
        await new Promise(r => setTimeout(r, 500));

        // Hide Next.js dev overlays and any debug elements
        await page.evaluate(() => {
            // Hide Next.js dev indicator
            const nextIndicator = document.querySelector('nextjs-portal');
            if (nextIndicator) nextIndicator.style.display = 'none';

            // Hide any element with data-nextjs attributes
            document.querySelectorAll('[data-nextjs-scroll-focus-boundary]').forEach(el => el.style.display = 'none');

            // Hide the "N" logo overlay (common in Next.js dev mode)
            const overlays = document.querySelectorAll('body > div:not(.report-container)');
            overlays.forEach(el => {
                if (el.querySelector('svg') || el.textContent?.trim() === 'N') {
                    el.style.display = 'none';
                }
            });
        });

        // Get page count and dimensions
        console.log('📏 Measuring all pages...');
        const pageData = await page.evaluate(() => {
            const pages = document.querySelectorAll('.page');
            const data = [];
            pages.forEach((p, i) => {
                const rect = p.getBoundingClientRect();
                data.push({
                    index: i,
                    width: Math.ceil(rect.width),
                    height: Math.ceil(rect.height)
                });
            });
            return data;
        });

        console.log(`📄 Found ${pageData.length} pages to export.`);

        // Create temp directory
        const tempDir = path.join(__dirname, '..', 'temp_pdfs');
        await fs.mkdir(tempDir, { recursive: true });

        // Create merged PDF document
        const mergedPdf = await PDFDocument.create();

        // Generate PDF for each page
        for (let i = 0; i < pageData.length; i++) {
            const pd = pageData[i];
            console.log(`  📄 Page ${i + 1}/${pageData.length} (${pd.width}x${pd.height}px)...`);

            // Hide all pages except current one, remove margin/shadow
            await page.evaluate((index) => {
                const pages = document.querySelectorAll('.page');
                pages.forEach((p, j) => {
                    if (j === index) {
                        p.style.display = 'flex';
                        p.style.margin = '0';
                        p.style.boxShadow = 'none';
                    } else {
                        p.style.display = 'none';
                    }
                });
                document.body.style.padding = '0';
                document.body.style.margin = '0';
                document.body.style.background = 'white';
            }, i);

            // Set viewport to exact page dimensions for proper centering
            await page.setViewport({
                width: pd.width,
                height: pd.height,
                deviceScaleFactor: 2,
            });

            await new Promise(r => setTimeout(r, 100));

            // Generate PDF for this page - NO headers/footers, NO margins
            const tempPdfPath = path.join(tempDir, `page_${i}.pdf`);
            await page.pdf({
                path: tempPdfPath,
                width: `${pd.width}px`,
                height: `${pd.height}px`,
                printBackground: true,
                margin: { top: 0, right: 0, bottom: 0, left: 0 },
                displayHeaderFooter: false, // No extra page numbers
            });

            // Merge into final PDF
            const tempPdfBytes = await fs.readFile(tempPdfPath);
            const tempPdfDoc = await PDFDocument.load(tempPdfBytes);
            const [copiedPage] = await mergedPdf.copyPages(tempPdfDoc, [0]);
            mergedPdf.addPage(copiedPage);

            await fs.unlink(tempPdfPath);
        }

        // Save merged PDF
        const pdfPath = path.join(__dirname, '..', 'Fieldsman_Strategic_Report.pdf');
        const pdfBytes = await mergedPdf.save();
        await fs.writeFile(pdfPath, pdfBytes);

        await fs.rmdir(tempDir);

        console.log(`✅ Success! PDF saved to: ${pdfPath}`);
        console.log(`   Total pages: ${pageData.length}`);

    } catch (error) {
        console.error('❌ Error generating PDF:', error);
    } finally {
        await browser.close();
    }
}

generatePDF();
