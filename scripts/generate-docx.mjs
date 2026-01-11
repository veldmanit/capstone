import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs/promises';
import HTMLtoDOCX from 'html-to-docx';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generateDocx() {
    console.log('🚀 Starting Word (DOCX) export...');

    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    try {
        const page = await browser.newPage();
        await page.setViewport({ width: 1200, height: 1600, deviceScaleFactor: 2 });

        console.log('📡 Navigating to report page...');
        await page.goto('http://localhost:3000', {
            waitUntil: 'networkidle0',
            timeout: 60000
        });

        await page.evaluateHandle('document.fonts.ready');

        // 1. Snapshot Visuals - Capture complex components as images
        console.log('📸 Snapshotting complex visuals...');
        const visualElements = await page.$$('[data-export-as-image="true"]');
        console.log(`   Found ${visualElements.length} visuals to capture.`);

        for (const element of visualElements) {
            try {
                const boundingBox = await element.boundingBox();
                if (boundingBox && boundingBox.width > 0 && boundingBox.height > 0) {
                    const screenshotBuffer = await element.screenshot({ encoding: 'base64' });
                    const base64Image = `data:image/png;base64,${screenshotBuffer}`;

                    await page.evaluate((el, imgSrc, width) => {
                        const img = document.createElement('img');
                        img.src = imgSrc;
                        img.style.width = '100%';
                        img.style.maxWidth = width + 'px';
                        img.style.height = 'auto';
                        el.parentNode.replaceChild(img, el);
                    }, element, base64Image, boundingBox.width);
                }
            } catch (err) {
                console.warn('   ⚠️ Failed to capture a visual:', err.message);
            }
        }

        // 2. Prepare HTML for Export
        console.log('📝 Extracting content for Word...');
        const sectionsHtml = await page.evaluate(() => {
            const cleanup = () => {
                document.querySelectorAll('script, style, link, nav, .hidden-print').forEach(e => e.remove());
                document.querySelectorAll('nextjs-portal, [data-nextjs-scroll-focus-boundary]').forEach(e => e.remove());
                // Remove SVGs that html-to-docx cannot handle
                document.querySelectorAll('svg').forEach(e => e.remove());
            };
            cleanup();

            const container = document.querySelector('.report-container');
            if (!container) return [document.body.innerHTML];

            return Array.from(container.children).map(child => child.outerHTML);
        });

        console.log(`   Found ${sectionsHtml.length} sections.`);

        // 3. Convert sections to DOCX (skip any that fail)
        let safeHtml = '';
        for (let i = 0; i < sectionsHtml.length; i++) {
            const section = sectionsHtml[i];
            try {
                await HTMLtoDOCX(section, null, { font: 'Arial' });
                safeHtml += section;
            } catch (e) {
                console.warn(`   ⚠️ Section ${i + 1} skipped (incompatible HTML).`);
            }
        }

        console.log('💾 Converting to DOCX...');
        if (!safeHtml) {
            throw new Error('No content could be converted!');
        }

        const docxBuffer = await HTMLtoDOCX(safeHtml, null, {
            table: { row: { cantSplit: true } },
            footer: true,
            pageNumber: true,
            font: 'Arial',
        });

        const outputPath = path.join(process.cwd(), 'Fieldsman_Strategic_Report.docx');
        await fs.writeFile(outputPath, docxBuffer);

        console.log(`✅ Success! Word document saved to: ${outputPath}`);

    } catch (error) {
        console.error('❌ Error generating DOCX:', error);
    } finally {
        await browser.close();
    }
}

generateDocx();
