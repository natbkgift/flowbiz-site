# FlowBiz Website Deployment Guide

## Overview

This guide covers deployment of the **Phase 1 static website only**.

The FlowBiz website is built with Astro in static site generation mode. It produces pure HTML/CSS files with no server-side dependencies.

## What Gets Deployed

- **Source**: `web/astro/`
- **Output**: `web/astro/dist/` (static HTML/CSS files)
- **Mode**: Static only (no SSR, no API routes, no server functions)

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

## Build Process

```bash
# Navigate to the website directory
cd web/astro

# Install dependencies
npm install

# Build the static site
npm run build

# Preview the built site locally (optional)
npm run preview
```

The build creates a `dist/` directory containing all static assets ready for deployment.

## Deployment Options

### Option 1: Cloudflare Pages (Recommended)

**Why Cloudflare Pages?**
- Free tier available
- Global CDN
- Automatic HTTPS
- Zero configuration

**Deployment steps:**

1. Connect your GitHub repository to Cloudflare Pages
2. Configure build settings:
   - **Build command**: `cd web/astro && npm install && npm run build`
   - **Build output directory**: `web/astro/dist`
   - **Root directory**: `/` (repository root)
3. Deploy

Cloudflare will automatically build and deploy on every push to your main branch.

### Option 2: Vercel

**Deployment steps:**

1. Import your GitHub repository in Vercel
2. Configure project:
   - **Framework Preset**: Astro
   - **Root Directory**: `web/astro`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
3. Deploy

### Option 3: Netlify

**Deployment steps:**

1. Connect repository to Netlify
2. Configure build settings:
   - **Base directory**: `web/astro`
   - **Build command**: `npm run build`
   - **Publish directory**: `web/astro/dist`
3. Deploy

### Option 4: Static Hosting (S3, GCS, Azure Storage)

For cloud storage-based hosting:

1. Build the site locally:
   ```bash
   cd web/astro
   npm run build
   ```

2. Upload `dist/` contents to your storage bucket:
   ```bash
   # Example with AWS S3
   aws s3 sync dist/ s3://your-bucket-name/ --delete
   ```

3. Configure bucket for static website hosting
4. Set up CloudFront or CDN as needed

## Custom Domain

All deployment platforms above support custom domains. Configure your DNS:

```
Type: CNAME or A
Name: @
Value: [your-platform-domain]
```

For `www` subdomain:
```
Type: CNAME
Name: www
Value: [your-main-domain]
```

## Environment Considerations

### Phase 1 Scope

**This deployment is website only**:
- No backend API deployment
- No database setup
- No server configuration
- No authentication setup

The backend services (`apps/api`, `packages/core`) are **NOT** deployed in Phase 1.

### Future Phases

When backend deployment is needed (Phase 2+), the backend will be deployed separately:
- Backend: Traditional VPS or container hosting
- Website: Static hosting (as described above)

The website and backend are independent deployments.

## Verification

After deployment, verify:

1. All pages load correctly:
   - `/` (Home)
   - `/building` (What We're Building)
   - `/services` (Services)
   - `/contact` (Contact)

2. Navigation works
3. Responsive design on mobile
4. Meta tags are correct (check view source)
5. Favicon and OG image load

## Troubleshooting

### Build fails with "command not found"

Ensure Node.js 18+ is installed:
```bash
node --version  # Should be 18.0.0 or higher
```

### Assets not loading (404)

Check that your deployment platform is serving from the correct directory (`web/astro/dist`).

### Fonts not loading

The site uses Google Fonts CDN. Ensure your deployment platform allows external font resources.

## Contact Form Note

The contact page currently uses a `mailto:` fallback. For production:

1. Set up a form handler (Formspree, Tally, etc.)
2. Replace the form action with the handler endpoint
3. Remove the TODO comment

## Monitoring

Consider setting up:
- Uptime monitoring (e.g., UptimeRobot, Pingdom)
- Analytics (optional, if requested)
- Error tracking for JavaScript (if any is added later)

## Phase 1 Complete

Once deployed, Phase 1 is complete. The website is live, static, and ready to establish FlowBiz's presence.

**No further work should be done until Phase 2 requirements are defined.**
