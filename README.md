# Digital Asset Protection Platform

A modern web platform for protecting and tracking digital assets with real-time analytics and monitoring capabilities.

## 🚀 Tech Stack

### Frontend
- **Framework**: [Next.js 15.3.1](https://nextjs.org/) - React framework with server-side rendering and static generation
- **Runtime**: [React 19.0.0](https://react.dev/) - Modern UI library with hooks and concurrent features
- **Language**: JavaScript (ES6+)

### State Management
- **Redux Toolkit 2.6.1** - Simplified Redux development with built-in utilities and best practices
- **React-Redux 9.2.0** - React bindings for Redux

### UI & Styling
- **Tailwind CSS 4.1.6** - Utility-first CSS framework for rapid UI development
- **Tailwind PostCSS Plugin 4.1.6** - PostCSS integration for Tailwind CSS
- **Lucide React 0.511.0** - Beautiful, consistent icon library
- **Framer Motion 12.10.0** - Production-ready animation library for React

### Data Visualization
- **Recharts 2.15.1** - Composable charting library built on React components

### Deployment
- **Vercel** - Serverless platform optimized for Next.js applications

## 📁 Project Structure

```
soln_cha/
├── frontend/
│   ├── app/                    # Next.js app directory
│   │   ├── layout.js          # Root layout wrapper
│   │   ├── page.js            # Homepage
│   │   ├── globals.css        # Global styles
│   │   └── dashboard/
│   │       └── page.js        # Dashboard page
│   ├── components/             # Reusable React components
│   │   ├── analytics-panel.js
│   │   ├── animated-grid-bg.js
│   │   ├── app-shell.js
│   │   ├── asset-metadata-panel.js
│   │   ├── dropzone-uploader.js
│   │   ├── misuse-panel.js
│   │   ├── providers.js
│   │   ├── skeleton-card.js
│   │   ├── stat-card.js
│   │   ├── toast-host.js
│   │   ├── tracker-results.js
│   │   └── verify-panel.js
│   ├── features/               # Redux state slices
│   │   ├── assets/
│   │   │   └── assetsSlice.js
│   │   └── ui/
│   │       └── uiSlice.js
│   ├── services/               # API services
│   │   ├── api.js
│   │   └── mockTrackingData.js
│   ├── store/                  # Redux store configuration
│   │   └── index.js
│   ├── styles/                 # Theme configurations
│   │   └── chartTheme.js
│   ├── next.config.js
│   ├── jsconfig.json
│   ├── postcss.config.js
│   └── package.json
├── package.json                # Root workspace configuration
└── vercel.json                 # Vercel deployment configuration
```

## 🛠 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd soln_cha
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   # or
   npm run dev:frontend
   ```

   The application will be available at `http://localhost:3000`

## 📝 Available Scripts

```bash
# Development
npm run dev                # Start development server
npm run dev:frontend      # Start frontend dev server

# Production
npm run build             # Build for production
npm start                 # Start production server

# Code Quality
npm run lint              # Run ESLint
```

## 🎨 Key Features

- **Asset Analytics Dashboard** - Real-time analytics and monitoring
- **Dropzone File Uploader** - Drag-and-drop file upload functionality
- **Asset Metadata Panel** - Detailed asset information display
- **Misuse Detection** - Track potential misuse patterns
- **Verification System** - Asset verification workflows
- **Animated UI** - Smooth animations using Framer Motion
- **Responsive Design** - Mobile-friendly interface with Tailwind CSS
- **Data Visualization** - Charts and graphs with Recharts

## 🚀 Deployment

This project is configured for deployment on **Vercel**:

1. Push your changes to GitHub
2. Vercel automatically detects and deploys your Next.js application
3. Environment variables can be configured in Vercel dashboard

### Vercel Configuration
- See `vercel.json` and `frontend/vercel.json` for deployment settings

## 📦 Dependencies Summary

| Package | Version | Purpose |
|---------|---------|---------|
| next | 15.3.1 | React framework |
| react | 19.0.0 | UI library |
| @reduxjs/toolkit | 2.6.1 | State management |
| react-redux | 9.2.0 | Redux bindings |
| tailwindcss | 4.1.6 | CSS framework |
| framer-motion | 12.10.0 | Animations |
| recharts | 2.15.1 | Data visualization |
| lucide-react | 0.511.0 | Icons |

## 🔧 Development Workflow

- **Component Development**: Use Next.js app directory for pages and components
- **State Management**: Redux Toolkit slices for feature-based state
- **Styling**: Tailwind CSS utility classes with custom configurations
- **API Integration**: Service layer in `services/api.js`

## 📄 License

Specify your license here

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

**Last Updated**: April 2026
