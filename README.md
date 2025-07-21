# 🎨 Preeti Arts Portfolio

A stunning, modern art portfolio website built with Next.js 15 frontend and Node.js/Express backend, featuring a beautiful public gallery, commission system, contact functionality, and a comprehensive admin dashboard for content management.

## ✨ Features

### 🎯 **Public Features**
- **Elegant Home Page:** Hero section with artist introduction, about section, skills showcase, mission & values, and client testimonials
- **Dynamic Gallery:** Browse artworks by category (Graphite & Charcoal, Watercolor, Acrylic) with responsive masonry layout
- **Commission System:** Complete commission request form with file upload, pricing information, and detailed process explanation
- **Contact Form:** Direct communication with the artist through an intuitive contact form
- **Responsive Design:** Fully optimized for desktop, tablet, and mobile devices
- **Social Media Integration:** Links to Instagram, Facebook, TikTok, and email

### 🛠️ **Admin Dashboard**
- **Secure Authentication:** Protected admin login with JWT token-based authentication
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
- **MongoDB** (Local installation or MongoDB Atlas)
- **Cloudinary Account** (For image storage)
- **npm**, **yarn**, **pnpm**, or **bun**

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd preeti-arts-portfolio
   ```

2. **Backend Setup**
   ```bash
   cd Artportfolio_backend
   npm install
   ```

3. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   ```

### Environment Configuration

#### Backend Environment Variables
Create a `.env` file in the `Artportfolio_backend` directory:

```env
# Database Configuration
DATABASE_URL=mongodb://localhost:27017
# OR for MongoDB Atlas:
# DATABASE_URL=mongodb+srv://username:password@cluster.mongodb.net

# Server Configuration
PORT=8000
NODE_ENV=development

# JWT Configuration
JWT_SECRET=your_super_secure_jwt_secret_key_here

# Admin Credentials (Hashed)
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=your_hashed_bcrypt_password

# Cloudinary Configuration
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret

# CORS Configuration
FRONTEND_HOSTS=http://localhost:3000,https://yourdomain.com
```

#### Frontend Configuration
No additional environment variables are required for the frontend by default. API endpoints are configured to point to:
```
https://artportfolio-backend.onrender.com/api/
```

### Development

1. **Start the Backend Server**
   ```bash
   cd Artportfolio_backend
   npm run dev
   # Server will run on http://localhost:8000
   ```

2. **Start the Frontend Development Server**
   ```bash
   cd frontend
   npm run dev
   # Frontend will run on http://localhost:3000
   ```

### Production Build

#### Backend Deployment
```bash
cd Artportfolio_backend
npm start
```

#### Frontend Deployment
```bash
cd frontend
npm run build
npm start
```

## 📁 Project Structure

```
preeti-arts-portfolio/
├── frontend/                          # Next.js Frontend Application
│   ├── src/
│   │   ├── app/
│   │   │   ├── admin/                 # Admin authentication & dashboard
│   │   │   │   ├── dashboard/         # Admin dashboard pages
│   │   │   │   │   ├── gallery/       # Gallery management
│   │   │   │   │   ├── comission/     # Commission management  
│   │   │   │   │   └── contact/       # Contact management
│   │   │   │   └── login/             # Admin login
│   │   │   ├── components/            # Reusable UI components
│   │   │   │   ├── Dashboard/         # Admin dashboard components
│   │   │   │   └── Home/              # Public page components
│   │   │   ├── gallery/               # Public gallery pages
│   │   │   │   └── [category]/        # Dynamic category pages
│   │   │   ├── commission/            # Commission request page
│   │   │   ├── contact/               # Contact page
│   │   │   ├── globals.css            # Global styles
│   │   │   ├── layout.tsx             # Root layout
│   │   │   └── page.tsx               # Home page
│   │   └── ...
│   ├── public/                        # Static assets
│   │   ├── images/                    # Image assets
│   │   └── ...
│   ├── package.json
│   ├── tailwind.config.ts
│   ├── tsconfig.json
│   └── next.config.ts
│
└── Artportfolio_backend/              # Node.js/Express Backend API
    ├── config/
    │   └── connectdb.js               # MongoDB connection configuration
    ├── controllers/                   # Business logic controllers
    │   ├── adminControllers.js        # Admin authentication logic
    │   ├── comissionController.js     # Commission management logic
    │   ├── contactController.js       # Contact form handling
    │   └── galleryControllers.js      # Gallery CRUD operations
    ├── middleware/                    # Express middleware functions
    │   ├── authMiddleware.js          # JWT token verification
    │   ├── comissionUpload.js         # Multer config for commission images
    │   └── multer.js                  # Multer config for gallery images
    ├── models/                        # Mongoose database schemas
    │   ├── Comission.js               # Commission data model
    │   ├── Contact.js                 # Contact message model
    │   └── Gallery.js                 # Gallery artwork model
    ├── routes/                        # Express route definitions
    │   ├── adminRoutes.js             # Admin authentication routes
    │   ├── comissionRoutes.js         # Commission management routes
    │   ├── contactRoutes.js           # Contact form routes
    │   └── galleryRoutes.js           # Gallery CRUD routes
    ├── utils/
    │   └── cloudinary.js              # Cloudinary configuration
    ├── server.js                      # Main application entry point
    ├── swagger.js                     # Swagger API documentation config
    ├── package.json                   # Backend dependencies
    └── .env                           # Environment variables (not in repo)
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

### **Backend**
- **Runtime:** Node.js
- **Framework:** Express.js
- **Language:** JavaScript (ES6+ Modules)
- **Database:** MongoDB with Mongoose ODM
- **Authentication:** JWT (JSON Web Tokens)
- **Password Hashing:** bcryptjs
- **File Upload:** Multer with Cloudinary storage
- **API Documentation:** Swagger UI Express
- **CORS:** Express CORS middleware
- **Environment:** dotenv for configuration

### **Database Schema**

#### Gallery Model
```javascript
{
  title: String (required),
  category: String (enum: ['Graphite & Charcoal', 'Watercolor', 'Acrylic', 'Pastel']),
  url: String (Cloudinary URL),
  createdAt: Date,
  updatedAt: Date
}
```

#### Commission Model
```javascript
{
  firstName: String (required),
  lastName: String (required), 
  email: String (required),
  portraitImage: String (Cloudinary URL),
  numberOfPortraits: Number (min: 1),
  size: String (enum: ['A5', 'A4', 'A3', 'A2']),
  shippingDestination: String,
  deadline: Date,
  additionalInfo: String,
  status: String (enum: ['pending', 'in progress', 'completed', 'cancelled']),
  createdAt: Date,
  updatedAt: Date
}
```

#### Contact Model
```javascript
{
  firstName: String (required),
  lastName: String (required),
  email: String (required),
  subject: String (required),
  message: String (required),
  archived: Boolean (default: false),
  createdAt: Date,
  updatedAt: Date
}
```

## 🔧 API Documentation

The backend provides a comprehensive RESTful API with Swagger documentation available at:
```
http://localhost:8000/api-docs
```

### **Core API Endpoints**

#### Admin Authentication
- `POST /api/admin/login` - Admin login with JWT token generation
- `GET /api/admin/dashboard` - Protected dashboard access (requires JWT)

#### Gallery Management
- `GET /api/gallery` - Fetch all artworks
- `GET /api/gallery/:id` - Fetch specific artwork
- `POST /api/gallery/upload` - Upload new artwork (Admin only)
- `PUT /api/gallery/:id` - Update artwork (Admin only)
- `DELETE /api/gallery/:id` - Delete artwork (Admin only)

#### Commission System
- `GET /api/comissions` - Fetch all commissions (Admin only)
- `POST /api/comissions` - Submit new commission request
- `PUT /api/comissions/:id/status` - Update commission status (Admin only)

#### Contact Management
- `GET /api/contact` - Fetch all messages (Admin only)
- `POST /api/contact` - Submit contact form
- `DELETE /api/contact/:id` - Delete message (Admin only)
- `PATCH /api/contact/:id/archive` - Toggle message archive status (Admin only)

### **Authentication & Security**

#### JWT Token Authentication
The backend uses JWT tokens for admin authentication:
- Tokens expire after 1 hour
- Protected routes require `Authorization: Bearer <token>` header
- Admin credentials are stored as environment variables with bcrypt hashing

#### CORS Configuration
- Configurable allowed origins via `FRONTEND_HOSTS` environment variable
- Supports credentials for secure cookie handling
- Production-ready CORS setup for cross-origin requests

#### Image Upload Security
- File type validation through Multer
- Cloudinary integration for secure image storage
- Automatic image optimization and CDN delivery
- Separate upload folders for gallery and commission images

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

## 📱 Features Deep Dive

### **Gallery System**
- **Category Filtering:** Separate pages for different art mediums
- **Responsive Layouts:** Masonry grid for desktop, swipe carousel for mobile
- **Image Optimization:** Automatic resizing and format optimization via Cloudinary
- **Lazy Loading:** Performance-optimized image loading
- **Admin Management:** Full CRUD operations for artwork management

### **Commission Workflow**
1. **Client Submission:** Form with project details and reference images
2. **File Upload:** Secure image upload to Cloudinary with validation
3. **Admin Review:** Dashboard for managing and updating commission status
4. **Status Tracking:** Real-time status updates (Pending → In Progress → Completed)
5. **Database Storage:** Comprehensive commission data with timestamps

### **Contact System**
- **Form Validation:** Client and server-side validation
- **Message Management:** Admin dashboard for viewing and managing inquiries
- **Archive System:** Mark messages as archived for organization
- **Email Integration:** Store contact details for follow-up communication

### **Admin Dashboard**
- **Protected Routes:** JWT-based authentication for all admin functions
- **Real-time Updates:** Live data from MongoDB database
- **Content Management:** Full control over gallery, commissions, and messages
- **User-friendly Interface:** Intuitive design for efficient content management

## 🚀 Deployment

### **Backend Deployment (Render)**
1. Set up environment variables in your hosting platform
2. Configure MongoDB Atlas connection string
3. Set up Cloudinary environment variables
4. Deploy with automatic builds from Git repository

### **Frontend Deployment (Vercel)**
1. Connect your repository to Vercel
2. Configure build settings (auto-detected for Next.js)
3. Update API endpoints to point to your deployed backend
4. Deploy with automatic CI/CD

### **Database Setup (MongoDB Atlas)**
1. Create a MongoDB Atlas cluster
2. Configure network access and database users
3. Update `DATABASE_URL` in environment variables
4. Database collections will be created automatically

### **Image Storage (Cloudinary)**
1. Create a Cloudinary account
2. Get your cloud name, API key, and API secret
3. Configure environment variables
4. Images will be automatically uploaded and optimized

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
- Follow TypeScript best practices for frontend
- Use ES6+ modules for backend
- Implement proper error handling
- Write descriptive commit messages
- Test on multiple devices and browsers
- Maintain consistent code formatting

### **Backend Development Guidelines**
- Follow RESTful API conventions
- Implement proper input validation
- Use appropriate HTTP status codes
- Maintain security best practices
- Document new endpoints in Swagger
- Write clean, readable controller logic

## 🌟 Acknowledgments

- **Design Inspiration:** Modern art portfolio aesthetics
- **Technical Foundation:** Next.js and Node.js ecosystem
- **Image Hosting:** Cloudinary for optimized media delivery
- **Database:** MongoDB for flexible document storage
- **Icons:** Lucide React and React Icons libraries
- **Documentation:** Swagger UI for comprehensive API docs

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

## 📊 API Status & Monitoring

- **Backend API:** https://artportfolio-backend.onrender.com/api/
- **API Documentation:** https://artportfolio-backend.onrender.com/api-docs
- **Health Check:** https://artportfolio-backend.onrender.com/

---

## 🔄 Version History

- **v1.0.0** - Initial release with full portfolio functionality
- **v1.1.0** - Enhanced admin dashboard and mobile responsiveness
- **v1.2.0** - Improved gallery system and commission workflow
- **v1.3.0** - Added comprehensive backend API and database integration

---

*Built with ❤️ for artists and art enthusiasts worldwide.*

