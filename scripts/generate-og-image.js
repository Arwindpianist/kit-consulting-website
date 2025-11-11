const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function generateOGImage() {
  console.log('🚀 Launching browser...');
  
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    
    // Set viewport to OG image dimensions
    await page.setViewport({
      width: 1200,
      height: 630,
      deviceScaleFactor: 2, // Higher quality (retina)
    });

    console.log('📱 Viewport set to 1200x630');

    // Navigate to localhost (make sure dev server is running)
    const url = 'http://localhost:3000';
    console.log(`🌐 Navigating to ${url}...`);
    
    await page.goto(url, {
      waitUntil: 'networkidle0',
      timeout: 30000,
    });

    // Wait for animations to settle
    console.log('⏳ Waiting for page to settle (9s)...');
    await new Promise(resolve => setTimeout(resolve, 9000));

    // Optional: Execute JS to remove any unwanted elements
    await page.evaluate(() => {
      // Hide header if you only want hero section
      // const header = document.querySelector('header');
      // if (header) header.style.display = 'none';
      
      // Scroll to show the hero properly
      window.scrollTo(0, 0);
    });

    // Take screenshot
    const outputPath = path.join(__dirname, '../public/opengraph-image.png');
    console.log('📸 Taking screenshot...');
    
    await page.screenshot({
      path: outputPath,
      type: 'png',
      clip: {
        x: 0,
        y: 0,
        width: 1200,
        height: 630,
      },
    });

    console.log('✅ OG image generated successfully!');
    console.log(`📁 Saved to: ${outputPath}`);

    // Verify file exists
    if (fs.existsSync(outputPath)) {
      const stats = fs.statSync(outputPath);
      console.log(`📊 File size: ${(stats.size / 1024).toFixed(2)} KB`);
    }

  } catch (error) {
    console.error('❌ Error generating OG image:', error);
    throw error;
  } finally {
    await browser.close();
    console.log('🔒 Browser closed');
  }
}

// Run the script
generateOGImage()
  .then(() => {
    console.log('🎉 Done!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('💥 Failed:', error);
    process.exit(1);
  });
