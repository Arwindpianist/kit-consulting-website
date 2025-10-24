const puppeteer = require('puppeteer');
const path = require('path');

async function generateOGImage() {
  console.log('🚀 Launching browser...');
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  
  // Set viewport to OpenGraph image dimensions
  await page.setViewport({
    width: 1200,
    height: 630,
    deviceScaleFactor: 2, // High DPI for better quality
  });

  console.log('📱 Loading website...');
  // Load your local dev server or production URL
  await page.goto('http://localhost:3000', {
    waitUntil: 'networkidle0',
    timeout: 30000
  });

  // Wait a bit for animations to settle
  await new Promise(resolve => setTimeout(resolve, 2000));

  console.log('📸 Taking screenshot...');
  const screenshotPath = path.join(__dirname, '../public/opengraph-image.png');
  await page.screenshot({
    path: screenshotPath,
    type: 'png',
  });

  console.log(`✅ OpenGraph image saved to: ${screenshotPath}`);

  await browser.close();
}

generateOGImage().catch(err => {
  console.error('❌ Error generating image:', err);
  process.exit(1);
});

