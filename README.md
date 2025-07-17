# Preeti Arts Portfolio

A modern, full-featured art portfolio built with [Next.js](https://nextjs.org), showcasing the works and commission process of Preeti Arts. This project features a public gallery, commission and contact forms, and an admin dashboard for managing artworks, commissions, and messages.

## Features

- **Beautiful Home Page:** Hero section, About, Skills, Mission & Values, and Testimonials.
- **Gallery:** Browse artworks by category (Graphite & Charcoal, Watercolor, Acrylic, etc.).
- **Commission Requests:** Submit custom art commission requests with file upload and details.
- **Contact Form:** Reach out directly for inquiries.
- **Admin Dashboard:** Secure login for managing gallery, commissions, and contact messages.
- **Responsive Design:** Fully responsive and mobile-friendly.
- **Social Links:** Instagram, Facebook, TikTok, and email.

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm, yarn, pnpm, or bun

### Installation

```bash
cd frontend
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### Development

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the app.

### Build for Production

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## Project Structure

- `src/app/` — Main app pages (home, gallery, commission, contact, admin)
- `src/app/components/` — UI components (Navbar, Footer, Home sections, Dashboard sidebar, etc.)
- `src/app/gallery/` — Gallery pages and category filtering
- `src/app/commission/` — Commission request form and info
- `src/app/contact/` — Contact form
- `src/app/admin/` — Admin dashboard, login, and management pages
- `public/` — Static assets (artwork images, icons, etc.)

## Configuration

- **API Endpoints:** The frontend communicates with a backend API (see code for endpoints like `https://artportfolio-backend.onrender.com/api/...`). If you deploy your own backend, update these URLs accordingly.
- **No environment variables are required for the frontend by default.**

## Deployment

The easiest way to deploy is via [Vercel](https://vercel.com/). See [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for more options.

## Contribution

Contributions are welcome! Please fork the repo and submit a pull request. For major changes, open an issue first to discuss what you’d like to change.


## Contact

- **Instagram:** [@_preetiarts](https://www.instagram.com/_preetiarts?igsh=b3l5dHM4aWZvZmVu)
- **Facebook:** [Your Profile](https://www.facebook.com/your-profile)
- **TikTok:** [@pretti.rajdhami](https://www.tiktok.com/@pretti.rajdhami?_t=ZS-8xuP7k6Ifbe&_r=1)
- **Email:** preetirajdhami2@gmail.com

---

© 2025 Preeti Arts. All Rights Reserved.
