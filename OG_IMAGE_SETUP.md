# OpenGraph Image Setup

## ✅ What's Configured

Your website now uses **real screenshots** of your actual homepage as the OpenGraph preview image for social media sharing!

## 📸 Current Setup

- **Image Location**: `public/opengraph-image.png`
- **Dimensions**: 1200x630px (OpenGraph standard)
- **Quality**: High DPI (2x device pixel ratio)
- **File Size**: ~383KB

## 🔄 How to Update

Whenever you make significant changes to your homepage design, regenerate the OpenGraph image:

```bash
# Make sure dev server is running (npm run dev)
npm run generate:og
```

This will:
1. Launch a headless Chrome browser
2. Navigate to `http://localhost:3000`
3. Take a 1200x630px screenshot
4. Save it as `public/opengraph-image.png`

## 🧪 Testing Your Preview

After regenerating, test how your link preview looks on:

- **LinkedIn**: [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)
- **Facebook**: [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- **Twitter**: [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- **WhatsApp**: Just paste the link in a chat (preview appears automatically)

## 📱 What Social Media Users See

When someone shares your website link, they'll see:
- Your actual homepage hero section
- The KIT Consulting logo and branding
- Professional vortex background
- Real content from your site

## 🎨 Customization

To capture a different section or page:

1. Edit `scripts/generate-og-image.js`
2. Change the URL or add custom scroll/interactions
3. Run `npm run generate:og`

Example:
```javascript
// Capture the services page instead
await page.goto('http://localhost:3000/services', {
  waitUntil: 'networkidle0',
});
```

## 🚀 Before Deployment

Run `npm run generate:og` one final time with your production-ready design to ensure the OpenGraph image matches your live site!

