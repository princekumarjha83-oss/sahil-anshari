# Sahil Anshari - Next.js Application

A modern counter and logistics management system built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Deployment

### AWS Amplify Deployment

This application is configured for automatic deployment to AWS Amplify.

#### Setup Instructions:

1. **Push to GitHub Repository**
   ```bash
   git add .
   git commit -m "Ready for AWS Amplify deployment"
   git push origin master
   ```

2. **Deploy to AWS Amplify**
   - Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
   - Click "New app" > "Host web app"
   - Select GitHub as the repository provider
   - Connect your GitHub account
   - Choose the `sahil-anshari` repository
   - Select the `master` branch
   - Build settings will be automatically detected from `amplify.yml`
   - Click "Next" > "Save and deploy"

#### Automatic Deployment:
- Every push to the `master` branch will trigger an automatic build and deployment
- The build process typically takes 2-3 minutes
- Your application will be available at the provided Amplify URL

#### Build Configuration:
- **Build Command**: `npm run build`
- **Output Directory**: `out`
- **Node Version**: 20.x
- **Framework**: Next.js (Static Export)

## 🛠️ Technology Stack

- **Framework**: Next.js 16.2.4
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **State Management**: Zustand
- **Forms**: React Hook Form

## 📁 Project Structure

```
├── app/                 # Next.js app directory
├── components/          # Reusable components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── public/             # Static assets
├── styles/             # Global styles
├── amplify.yml         # AWS Amplify configuration
├── next.config.mjs     # Next.js configuration
└── package.json        # Dependencies and scripts
```

## 🚀 Getting Started Locally

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run development server**
   ```bash
   npm run dev
   ```

3. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run amplify:build` - Build for Amplify deployment

## 🌟 Features

- **Dashboard**: Comprehensive overview with statistics and charts
- **Counter Management**: Track and manage various counters
- **Customer Management**: Customer database and interactions
- **Inventory Management**: Stock tracking and management
- **Order Management**: Complete order lifecycle
- **Reports**: Analytics and reporting
- **Responsive Design**: Works on all devices
- **Modern UI**: Clean and intuitive interface

## 🔧 Configuration

The application is configured for static export to work optimally with AWS Amplify:

- Static site generation
- Optimized images for static hosting
- Proper asset handling
- SEO-friendly URLs

## 📄 License

This project is private and proprietary.
