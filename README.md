# 🌸 Nueng Day Care — Website

Professional website for **Nueng Day Care LLC**, built with React + Vite.

Live site: https://nuengdaycare.com

---

## Quick Start

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build → /dist
```

---

## Project Structure

```
src/components/
  Logo.jsx          ← SVG brand logo
  Navbar.jsx        ← Top navigation
  Hero.jsx          ← Landing hero
  Services.jsx      ← Programs
  Hours.jsx         ← Schedule & rates
  Gallery.jsx       ← Photos & videos
  Notifications.jsx ← Announcements board
  Contact.jsx       ← Inquiry form
  Footer.jsx
public/gallery/     ← Drop photos here
.github/workflows/deploy.yml  ← Auto-deploy to GitHub Pages
```

---

## Customization Cheat Sheet

### Update phone / email
Edit `Contact.jsx` and `Footer.jsx` — search for `(XXX) XXX-XXXX`

### Update hours
Edit the `SCHEDULE` array in `Hours.jsx`

### Add photos
1. Copy images to `public/gallery/`
2. Add entries to `PHOTOS` array in `Gallery.jsx`:
```js
{ src: '/gallery/photo.jpg', alt: 'Art time', category: 'art', emoji: '🎨' }
```

### Add YouTube video
Uncomment the `<iframe>` in `Gallery.jsx` and replace `YOUR_VIDEO_ID`

### Post announcement
Add object at TOP of `NOTIFICATIONS` array in `Notifications.jsx`:
```js
{ id: 5, type: 'event', date: 'June 1, 2025',
  title: '🎉 Title', body: 'Body text...', pinned: false }
```

### Enable contact form
1. Sign up at https://formspree.io (free)
2. Replace `YOUR_FORMSPREE_ID` in `Contact.jsx`

### Update rates
Find `ratesCard` section in `Hours.jsx`, replace "Contact Us" with real rates

---

## Deploy to GitHub Pages (Free)

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/nuengdaycare.git
git push -u origin main
```

Then: GitHub repo → Settings → Pages → Source: **GitHub Actions**

Every push to `main` auto-deploys. ✅

### Connect nuengdaycare.com via Cloudflare DNS
Add these A records pointing to GitHub Pages:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```
Add CNAME: `www` → `YOUR_USERNAME.github.io`

Then set custom domain in GitHub Pages settings and enable HTTPS.

---

*Built with ❤️ for Nueng Day Care LLC — Denton County, Texas*
