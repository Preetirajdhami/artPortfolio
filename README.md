# 🎨 Preeti Arts Portfolio

A stunning, modern art portfolio website built with Next.js 15, featuring a beautiful public gallery, commission system, contact functionality, and a comprehensive admin dashboard for content management.

## ✨ Features

### 🎯 **Public Features**
- **Elegant Home Page:** Hero section with artist introduction, about section, skills showcase, mission & values, and client testimonials
- **Dynamic Gallery:** Browse artworks by category (Graphite & Charcoal, Watercolor, Acrylic) with responsive masonry layout
- **Commission System:** Complete commission request form with file upload, pricing information, and detailed process explanation
- **Contact Form:** Direct communication with the artist through an intuitive contact form
- **Responsive Design:** Fully optimized for desktop, tablet, and mobile devices
- **Social Media Integration:** Links to Instagram, Facebook, TikTok, and email

### 🛠️ **Admin Dashboard**
- **Secure Authentication:** Protected admin login with token-based authentication
- **Gallery Management:** Upload, edit, and delete artworks with image preview and categorization
- **Commission Management:** View, track, and update commission status with client details
- **Contact Management:** View, respond to, and manage customer inquiries
- **Dashboard Analytics:** Overview of artworks, commissions, messages, and recent activity

### 🎨 **Design & UX**
- **Modern UI/UX:** Clean, artistic design with smooth animations and transitions
- **Dark/Light Themes:** Sophisticated color palette with artist-focused aesthetics
- **Loading States:** Elegant loading animations and skeleton screens
- **Interactive Elements:** Hover effects, smooth scrolling, and micro-interactions

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v18+ recommended)
- **npm**, **yarn**, **pnpm**, or **bun**

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd preeti-arts-portfolio
   ```

2. **Navigate to the frontend directory**
   ```bash
   cd frontend
   ```

3. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

### Development

Start the development server with Turbopack for faster builds:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the application.

### Production Build

```bash
npm run build
npm start
```

### Code Quality

```bash
npm run lint
```

## 📁 Project Structure

```
frontend/
├── src/
│   ├── app/
│   │   ├── admin/                 # Admin authentication & dashboard
│   │   │   ├── dashboard/         # Admin dashboard pages
│   │   │   │   ├── gallery/       # Gallery management
│   │   │   │   ├── comission/     # Commission management  
│   │   │   │   └── contact/       # Contact management
│   │   │   └── login/             # Admin login
│   │   ├── components/            # Reusable UI components
│   │   │   ├── Dashboard/         # Admin dashboard components
│   │   │   └── Home/              # Public page components
│   │   ├── gallery/               # Public gallery pages
│   │   │   └── [category]/        # Dynamic category pages
│   │   ├── commission/            # Commission request page
│   │   ├── contact/               # Contact page
│   │   ├── globals.css            # Global styles
│   │   ├── layout.tsx             # Root layout
│   │   └── page.tsx               # Home page
│   └── ...
├── public/                        # Static assets
│   ├── images/                    # Image assets
│   └── ...
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

## 🛡️ Tech Stack

### **Frontend**
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React + React Icons
- **HTTP Client:** Axios
- **Image Optimization:** Next.js Image component with Cloudinary integration

### **Backend Integration**
- **API:** RESTful API integration
- **File Upload:** Cloudinary for image storage and optimization
- **Authentication:** JWT token-based authentication

## 🎨 Design System

### **Color Palette**
- **Primary:** `#154930` (Forest Green)
- **Background:** `#ECE3CE` (Warm Beige)
- **Text:** `#3A4D39` (Dark Green)

### **Typography**
- **Headings:** Serif fonts for artistic elegance
- **Body:** Sans-serif for readability

### **Components**
- Consistent spacing and sizing
- Smooth hover transitions
- Accessible color contrasts
- Mobile-first responsive design

## 🔧 Configuration

### **API Endpoints**
The frontend communicates with the backend API hosted at:
```
https://artportfolio-backend.onrender.com/api/
```

**Key endpoints:**
- `GET /gallery` - Fetch all artworks
- `POST /gallery/upload` - Upload new artwork (Admin)
- `GET /comissions` - Fetch all commissions (Admin)
- `POST /comissions` - Submit commission request
- `GET /contact` - Fetch contact messages (Admin)
- `POST /contact` - Submit contact form
- `POST /admin/login` - Admin authentication

### **Environment Variables**
No environment variables are required for the frontend by default. All API URLs are configured in the code.

### **Image Optimization**
- **Cloudinary Integration:** Automatic image optimization and delivery
- **Next.js Image:** Built-in image optimization with lazy loading
- **Responsive Images:** Multiple sizes for different screen resolutions

## 📱 Features Deep Dive

### **Gallery System**
- **Category Filtering:** Separate pages for different art mediums
- **Responsive Layouts:** Masonry grid for desktop, swipe carousel for mobile
- **Image Optimization:** Automatic resizing and format optimization
- **Lazy Loading:** Performance-optimized image loading

### **Commission Workflow**
1. **Client Submission:** Form with project details and reference images
2. **Admin Review:** Dashboard for managing and updating commission status
3. **Status Tracking:** Real-time status updates (Pending → In Progress → Completed)
4. **File Management:** Secure image upload and storage

### **Admin Dashboard**
- **Analytics Overview:** Key metrics and recent activity
- **Content Management:** CRUD operations for artworks
- **Customer Relations:** Message and commission management
- **User Experience:** Intuitive interface with real-time updates

## 🚀 Deployment

### **Vercel (Recommended)**
1. Connect your repository to Vercel
2. Configure build settings (auto-detected for Next.js)
3. Deploy with automatic CI/CD

### **Other Platforms**
- **Netlify:** Configure build command as `npm run build`
- **AWS Amplify:** Use the Next.js deployment template
- **Docker:** Use the included Dockerfile for containerized deployment

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### **Development Guidelines**
- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Maintain responsive design principles
- Write descriptive commit messages
- Test on multiple devices and browsers

## 🌟 Acknowledgments

- **Design Inspiration:** Modern art portfolio aesthetics
- **Technical Foundation:** Next.js and React ecosystem
- **Image Hosting:** Cloudinary for optimized media delivery
- **Icons:** Lucide React and React Icons libraries

## 👨‍💻 Authors

- **Manoj Shrestha** - Frontend Developer
  - [LinkedIn](https://www.linkedin.com/in/manoj-shrestha-43a64b177/)
  - [Instagram](https://www.instagram.com/manoj_sthaa)
- **Preeti Rajdhami** - Backend Developer
  - [LinkedIn](https://www.linkedin.com/in/preeti-rajdhami-103803244/)
  - [Instagram](https://www.instagram.com/pre.ettiii)

## 📞 Contact & Support

- **Artist:** Preeti Arts
- **Instagram:** [@_preetiarts](https://www.instagram.com/_preetiarts?igsh=b3l5dHM4aWZvZmVu)
- **TikTok:** [@pretti.rajdhami](https://www.tiktok.com/@pretti.rajdhami?_t=ZS-8xuP7k6Ifbe&_r=1)
- **Email:** preetirajdhami2@gmail.com

---

## 🔄 Version History

- **v1.0.0** - Initial release with full portfolio functionality
- **v1.1.0** - Enhanced admin dashboard and mobile responsiveness
- **v1.2.0** - Improved gallery system and commission workflow

---

*Built with ❤️ for artists and art enthusiasts worldwide.*