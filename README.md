# SAVITEX (Pty) Ltd - Professional Website

Premium knitted garments manufacturer with integrated production facilities. Wholesale distribution of T-shirts, hoodies, track pants, and golfers across South Africa.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with modern UI/UX
- **Product Showcase**: Comprehensive product catalog with detailed specifications
- **Contact System**: Email-based contact forms and quote requests
- **Blog Section**: Industry insights and company updates
- **SEO Optimized**: Meta tags, structured data, and performance optimized
- **Fast Loading**: Optimized builds with code splitting

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: GitHub Actions → Hostinger

## 📦 Installation

```bash
# Clone the repository
git clone <repository-url>
cd savitex-website

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🚀 Deployment

### Automatic Deployment (Hostinger)

The website automatically deploys to Hostinger when you push to the main branch:

1. **Push to main** → Triggers GitHub Actions
2. **Build process** → Creates optimized production build
3. **Deploy to build branch** → Pushes build output to `build` branch
4. **Hostinger auto-deploy** → Automatically deploys from `build` branch

### Hostinger Setup

1. Connect your repository to Hostinger
2. Set the deploy branch to `build`
3. Enable auto-deployment
4. Set build command to: (leave empty)
5. Set output directory to: `/` (root)

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── about/          # About page components
│   ├── blog/           # Blog-related components
│   ├── contact/        # Contact form components
│   ├── hero/           # Hero section components
│   ├── layout/         # Layout components (Navbar, Footer)
│   └── products/       # Product showcase components
├── data/               # Static data and content
├── pages/              # Page components
├── utils/              # Utility functions
├── config/             # Configuration files
└── styles/             # Global styles and Tailwind config
```

## 🎨 Customization

### Colors
Update the color scheme in `tailwind.config.js`:
```javascript
colors: {
  primary: { /* Your primary colors */ },
  secondary: { /* Your secondary colors */ }
}
```

### Content
- **Products**: Update `src/data/products.ts`
- **Blog Posts**: Update `src/data/blog.ts`
- **Company Info**: Update component files in `src/components/`

### Images
- Replace placeholder images with your actual product images
- Update logo files in `public/` directory
- Optimize images for web performance

## 📧 Contact System

The website uses email-based contact forms:
- **Contact Form**: Opens email client with pre-filled content
- **Quote Requests**: Creates structured emails to sales team
- **No Backend Required**: Simple, reliable email integration

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Environment Variables

Create a `.env` file for local development:
```env
# Add any environment variables here if needed
```

## 📱 Mobile Optimization

- Responsive design for all screen sizes
- Touch-friendly interface elements
- Optimized images and performance
- Progressive Web App features

## 🔍 SEO Features

- Meta tags for all pages
- Open Graph tags for social sharing
- Structured data markup
- Sitemap generation
- Performance optimization

## 🚀 Performance

- Code splitting for optimal loading
- Image optimization
- CSS and JS minification
- Gzip compression
- CDN-ready assets

## 📞 Support

For technical support or questions about the website:
- Email: info@savitex.co.za
- Phone: +27 31 123 4567

## 📄 License

© 2024 SAVITEX (Pty) Ltd. All rights reserved.