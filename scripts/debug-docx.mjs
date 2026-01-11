import puppeteer from 'puppeteer';
import fs from 'fs/promises';

async function debug() {
    console.log('🚀 Starting Debug Script...');
    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    try {
        const page = await browser.newPage();
        console.log('📡 Navigating...');
        await page.goto('http://localhost:3000', { waitUntil: 'networkidle0', timeout: 60000 });

        console.log('✅ Page Loaded.');
        const content = await page.content();
        console.log(`📄 Content Length: ${content.length}`);

        await fs.writeFile('debug-output.html', content);
        console.log('💾 Saved debug-output.html');

    } catch (error) {
        console.error('❌ Error:', error);
    } finally {
        await browser.close();
    }
}

debug();
