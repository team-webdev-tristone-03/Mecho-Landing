# MECHO - Waterless Car Wash Service

A modern, responsive React web application for MECHO waterless car wash service built with React, Tailwind CSS, and React Router.

## Features

### 🏠 **Home Page (Landing)**
- **Navigation Bar**: Logo, menu (Home, About, Pricing, Contact), Sign In/Sign Up buttons
- **Hero Section**: Large title with tagline, eco-friendly messaging, car wash icon, CTA button
- **About Service**: Waterless car wash explanation with highlighted pricing "15 Minutes Car Wash Per Day — Just ₹75!"
- **Testimonials**: Auto-scrolling carousel with customer reviews (yellow stroke borders)
- **Mini Footer CTA**: "Drive Clean. Save Water." with Book Now button
- **Main Footer**: Social media links, navigation, contact info

### ℹ️ **About Page**
- Company information and waterless car wash benefits
- CEO section with placeholder image and description
- Mission statement and eco-friendly advantages

### 💰 **Pricing Page**
- 3 subscription plans: Silver (₹499), Gold (₹899), Platinum (₹1499)
- Interactive plan selection with calendar popup
- Feature comparison and booking functionality

### 📞 **Contact Page**
- Business email, phone, operating hours
- Contact form with validation
- Google Maps placeholder section

### 🔐 **Authentication Pages**
- **Sign In**: Email/password with "Create account" link
- **Sign Up**: Name, email, password, confirm password with validation

## Tech Stack

- **React 19** - Frontend framework
- **Tailwind CSS v4** - Styling and responsive design
- **React Router DOM** - Client-side routing
- **Vite** - Build tool and development server

## Brand Colors

- `#FFF5E6` - Navbar background (brand-cream)
- `#FF6A00` - Primary buttons/accent (brand-orange)
- `#FFB60A` - Highlights (brand-yellow)
- `#111827` - Text (brand-dark)
- `#0D0D16` - Footer (brand-footer)

## Installation & Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation component with mobile menu
│   └── Footer.jsx          # Footer with social links
├── pages/
│   ├── Home.jsx           # Landing page with hero, testimonials
│   ├── About.jsx          # Company info and CEO section
│   ├── Pricing.jsx        # Subscription plans with calendar
│   ├── Contact.jsx        # Contact form and business info
│   ├── SignIn.jsx         # Authentication - Sign In
│   └── SignUp.jsx         # Authentication - Sign Up
├── App.jsx                # Main app with routing
├── main.jsx              # React entry point
└── index.css             # Tailwind imports and custom styles
```

## Features Implemented

✅ **Responsive Design** - Mobile to desktop layouts  
✅ **Component-based Architecture** - Reusable React components  
✅ **Modern UI** - Clean design with brand colors  
✅ **Smooth Animations** - Hover effects, transitions, fade-ins  
✅ **Auto-scrolling Testimonials** - Carousel with indicators  
✅ **Interactive Pricing** - Plan selection with calendar popup  
✅ **Form Validation** - Sign up/sign in with password confirmation  
✅ **Mobile Navigation** - Hamburger menu for mobile devices  

## Bonus Features

- **Smooth scroll animations** for page sections
- **Hover animations** for buttons and cards
- **Auto-scroll testimonials** carousel
- **Mobile-responsive** navigation menu
- **Form validation** with user feedback
- **Loading states** and transitions

## Usage

The application includes:
- **Navigation** between all pages using React Router
- **Responsive design** that works on mobile and desktop
- **Interactive elements** like testimonial carousel and pricing calendar
- **Form handling** for authentication and contact forms
- **Modern animations** and smooth transitions

## Development

To customize the application:
1. Modify brand colors in `tailwind.config.js`
2. Update content in respective page components
3. Add new routes in `App.jsx`
4. Extend styling in `index.css` for custom animations

The application is ready for deployment and can be easily extended with additional features like backend integration, payment processing, or booking management.