# KIT Consulting Official Website

A modern, responsive, and production-ready website for KIT Consulting - an engineering consultancy specializing in construction execution, tendering, and process optimization.

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Custom SVG components
- **Email**: Nodemailer + Zoho SMTP
- **Notifications**: Sonner (Toast notifications)
- **Hosting**: Vercel

## 🎨 Features

- ✅ **Fully Responsive Design** - Mobile-first approach with beautiful UI
- ✅ **SEO Optimized** - Comprehensive metadata and sitemap
- ✅ **Contact Form** - Functional email integration with Zoho SMTP
- ✅ **Static Site Generation** - Fast loading times and excellent performance
- ✅ **Modern Animations** - Smooth transitions and micro-interactions
- ✅ **Professional Design** - Corporate blue theme (#003366, #0066CC)
- ✅ **Accessibility** - WCAG compliant with semantic HTML

## 📦 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── api/contact/       # Contact form API route
│   ├── contact/           # Contact page
│   ├── projects/          # Projects portfolio
│   ├── services/          # Services page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── ContactForm.tsx   # Contact form with validation
│   ├── Header.tsx        # Sticky navigation header
│   ├── Footer.tsx        # Site footer
│   └── ...               # Other components
├── lib/                   # Utilities and types
│   ├── data/             # Static data (projects.json)
│   ├── types.ts          # TypeScript type definitions
│   └── utils.ts          # Utility functions
└── public/               # Static assets

```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd kit-consulting-website
```

2. Install dependencies:
```bash
npm install --legacy-peer-deps
# or
pnpm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` and add your Zoho Mail credentials:
```env
ZOHO_USER=your-email@zoho.com
ZOHO_PASS=your-app-specific-password
```

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📧 Zoho Mail Setup

To enable the contact form, you need to configure Zoho Mail:

1. Go to [Zoho Accounts](https://accounts.zoho.com)
2. Navigate to **Security** > **App Passwords**
3. Generate a new app-specific password for "Mail"
4. Use that password as `ZOHO_PASS` in your `.env.local` file

The contact form will send submissions to `kit.engineering.consulting@gmail.com`.

## 🚀 Deployment to Vercel

### Option 1: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Go to [Vercel Dashboard](https://vercel.com/new)
3. Import your repository
4. Configure:
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
5. Add environment variables:
   - `ZOHO_USER`
   - `ZOHO_PASS`
6. Click **Deploy**

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Set environment variables
vercel env add ZOHO_USER
vercel env add ZOHO_PASS

# Deploy to production
vercel --prod
```

## 📝 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `ZOHO_USER` | Your Zoho email address | Yes (for contact form) |
| `ZOHO_PASS` | Zoho app-specific password | Yes (for contact form) |

**Note**: The contact form will work in development mode without credentials (logs to console instead).

## 🎨 Customization

### Brand Colors

The website uses KIT Consulting's brand colors defined in `app/globals.css`:

```css
--color-primary: #003366;    /* Primary Blue */
--color-secondary: #0066cc;  /* Secondary Blue */
--color-accent-gray: #f5f7fa; /* Light Gray */
```

### Content Updates

- **Projects**: Edit `lib/data/projects.json`
- **Services**: Edit `app/services/page.tsx`
- **About**: Edit `app/about/page.tsx`
- **Contact Info**: Update in `components/Footer.tsx` and `components/CTABanner.tsx`

## 📊 Performance

The website is optimized for excellent performance:

- ✅ Static Site Generation (SSG)
- ✅ Optimized images with Next.js Image component
- ✅ Minimal client-side JavaScript
- ✅ Server Components by default
- ✅ Lighthouse score > 90

## 🔍 SEO

SEO optimization includes:

- ✅ Metadata on all pages
- ✅ Open Graph tags
- ✅ Twitter Card tags
- ✅ Sitemap (`/sitemap.xml`)
- ✅ Robots.txt (`/robots.txt`)
- ✅ Semantic HTML structure
- ✅ Alt text for images

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🐛 Troubleshooting

### Build Errors

If you encounter peer dependency errors during installation:
```bash
npm install --legacy-peer-deps
```

### Contact Form Not Sending Emails

1. Verify `ZOHO_USER` and `ZOHO_PASS` are set correctly
2. Ensure you're using an **app-specific password**, not your regular password
3. Check Vercel logs for detailed error messages

### TypeScript Errors

Ensure you're using Node.js 18.x or higher:
```bash
node --version
```

## 📄 License

Copyright © 2025 KIT Consulting. All rights reserved.

## 🤝 Support

For questions or issues, contact:
- **Email**: kit.engineering.consulting@gmail.com
- **Phone**: 012-9100 417

---

**Built with ❤️ using Next.js 15 and Tailwind CSS**
