# 🚀 KIT Consulting Website - Deployment Guide

This guide will help you deploy the KIT Consulting website to Vercel.

## Prerequisites

- [x] GitHub account
- [x] Vercel account (free tier is sufficient)
- [x] Zoho Mail account with app-specific password

## Step 1: Prepare Your Repository

1. **Initialize Git** (if not already done):
```bash
cd /path/to/kit-consulting-website
git init
git add .
git commit -m "Initial commit - KIT Consulting website"
```

2. **Create GitHub Repository**:
   - Go to https://github.com/new
   - Name: `kit-consulting-website`
   - Keep it private (recommended)
   - Don't initialize with README (you already have one)

3. **Push to GitHub**:
```bash
git remote add origin https://github.com/YOUR_USERNAME/kit-consulting-website.git
git branch -M main
git push -u origin main
```

## Step 2: Set Up Zoho Mail

1. **Generate App-Specific Password**:
   - Go to https://accounts.zoho.com
   - Navigate to **Security** → **App Passwords**
   - Click **Generate New Password**
   - Select **Mail** as the application
   - Copy the generated password (you won't see it again!)

2. **Save Credentials**:
   - Email: Your Zoho email address (e.g., `contact@kitconsulting.com`)
   - Password: The app-specific password you just generated

## Step 3: Deploy to Vercel

### Option A: Via Vercel Dashboard (Recommended)

1. **Go to Vercel**:
   - Visit https://vercel.com/new
   - Sign in with GitHub

2. **Import Project**:
   - Click **Import Git Repository**
   - Select your `kit-consulting-website` repository
   - Click **Import**

3. **Configure Project**:
   - **Framework Preset**: Next.js (should auto-detect)
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next` (should auto-populate)
   - **Install Command**: `npm install --legacy-peer-deps`

4. **Add Environment Variables**:
   Click **Environment Variables** and add:
   ```
   ZOHO_USER = your-email@zoho.com
   ZOHO_PASS = your-app-specific-password
   ```
   
   ⚠️ **Important**: Make sure to add these to all environments (Production, Preview, Development)

5. **Deploy**:
   - Click **Deploy**
   - Wait 2-3 minutes for the build to complete
   - Your site will be live at `your-project-name.vercel.app`

### Option B: Via Vercel CLI

1. **Install Vercel CLI**:
```bash
npm i -g vercel
```

2. **Login**:
```bash
vercel login
```

3. **Deploy**:
```bash
vercel
```

4. **Set Environment Variables**:
```bash
vercel env add ZOHO_USER
# Enter your Zoho email when prompted

vercel env add ZOHO_PASS
# Enter your app-specific password when prompted
```

5. **Deploy to Production**:
```bash
vercel --prod
```

## Step 4: Configure Custom Domain (Optional)

1. **In Vercel Dashboard**:
   - Go to your project settings
   - Navigate to **Domains**
   - Click **Add Domain**
   - Enter `kitconsulting.com`

2. **Update DNS Records**:
   Add these records to your domain registrar:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

3. **Wait for Verification**:
   - DNS propagation takes 24-48 hours
   - Vercel will automatically issue an SSL certificate

## Step 5: Verify Deployment

### Test the Website

1. **Homepage**: Check that all sections load properly
2. **Navigation**: Test all menu links
3. **Contact Form**: 
   - Fill out the form
   - Submit and verify you receive the email at `kit.engineering.consulting@gmail.com`
   - Check for toast notification on success

4. **Responsive Design**:
   - Test on mobile (Chrome DevTools)
   - Test on tablet
   - Test on desktop

5. **Performance**:
   - Run Lighthouse audit in Chrome DevTools
   - Aim for scores > 90

### Common Issues & Solutions

#### Issue: Contact form not sending emails

**Solution**:
1. Check Vercel environment variables are set correctly
2. Verify Zoho credentials:
   ```bash
   vercel env ls
   ```
3. Check Vercel function logs for errors
4. Ensure you're using app-specific password, not regular password

#### Issue: Build fails with "peer dependency" error

**Solution**:
Update build command in Vercel:
```bash
npm install --legacy-peer-deps && npm run build
```

#### Issue: Images not loading

**Solution**:
Ensure all images are in the `public/` folder and referenced correctly:
```tsx
// Correct
<Image src="/logo.png" alt="Logo" />

// Incorrect
<Image src="logo.png" alt="Logo" />
```

## Step 6: Set Up Continuous Deployment

Vercel automatically deploys when you push to GitHub:

1. **Main Branch** → Production deployment
2. **Other Branches** → Preview deployments

To update the website:
```bash
git add .
git commit -m "Update content"
git push
```

Vercel will automatically build and deploy within 2-3 minutes.

## Step 7: Monitor & Maintain

### Vercel Dashboard

Monitor your deployment:
- **Analytics**: View traffic and performance
- **Logs**: Check function logs for errors
- **Deployments**: View deployment history

### Email Monitoring

Test the contact form regularly:
1. Submit a test inquiry
2. Verify email delivery
3. Check response time

### Performance Monitoring

Run monthly Lighthouse audits:
```bash
npx lighthouse https://kitconsulting.com --view
```

## Security Checklist

- [x] Environment variables are set (not hardcoded)
- [x] Using app-specific password (not regular password)
- [x] Repository is private (if sensitive)
- [x] SSL certificate is active (automatic with Vercel)
- [x] Contact form has validation
- [x] Email addresses are not exposed in client-side code

## Backup & Rollback

### Create Backup

```bash
git tag -a v1.0.0 -m "Production release"
git push origin v1.0.0
```

### Rollback Deployment

In Vercel Dashboard:
1. Go to **Deployments**
2. Find the previous working deployment
3. Click **⋯** → **Promote to Production**

## Support & Resources

- **Vercel Documentation**: https://vercel.com/docs
- **Next.js Documentation**: https://nextjs.org/docs
- **Zoho Mail Help**: https://www.zoho.com/mail/help/

## Post-Deployment Checklist

- [ ] Website loads on `kitconsulting.com`
- [ ] SSL certificate is active (https://)
- [ ] All pages are accessible
- [ ] Contact form sends emails successfully
- [ ] Mobile responsive design works
- [ ] Google Analytics tracking (if added)
- [ ] SEO meta tags are present
- [ ] Social media previews work (Open Graph)
- [ ] Performance score > 90 (Lighthouse)
- [ ] No console errors

---

**Congratulations! 🎉**

Your KIT Consulting website is now live and production-ready!

For updates or issues, contact the development team or refer to the main README.md.


