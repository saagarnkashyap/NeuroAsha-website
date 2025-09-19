# NeuroAsha - AI-Powered Dementia Prediction Platform

A modern, responsive medical website for NeuroAsha, featuring AI-powered dementia prediction, cognitive screening, and comprehensive patient assessment tools.
- **Early Dementia Detection**: AI-powered MRI analysis for accurate risk assessment
- **Cognitive Screening**: Interactive chatbot for preliminary cognitive evaluation
- **Clinical Integration**: Tools designed for healthcare professionals and patients
- **Comprehensive Reporting**: Detailed patient assessment reports with visualizations

## Technology Stack

- **Frontend Framework**: React 18 with Vite
- **Styling**: Tailwind CSS with custom medical theme
- **UI Components**: shadcn/ui component library
- **Icons**: Lucide React icons
- **Animations**: Framer Motion for smooth transitions

## Project Structure

```
neuroasha/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images and media files
│   ├── components/        # Reusable React components
│   │   ├── ui/           # shadcn/ui components
│   │   ├── Layout.jsx    # Main layout wrapper
│   │   ├── Navigation.jsx # Header navigation
│   │   └── Footer.jsx    # Footer component
│   ├── pages/            # Page components
│   │   ├── Home.jsx      # Landing page
│   │   ├── About.jsx     # About page with mission & FAQs
│   │   ├── Predict.jsx   # MRI upload & prediction
│   │   ├── Chatbot.jsx   # Cognitive assessment chat
│   │   ├── Report.jsx    # Patient reports & analytics
│   │   └── Contact.jsx   # Contact form & information
│   ├── App.jsx           # Main application component
│   ├── App.css           # Global styles and theme
│   └── main.jsx          # Application entry point
├── package.json          # Dependencies and scripts
└── README.md            # This file
```

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or pnpm package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/saagarnkashyap/NeuroAsha)
   cd neuroasha
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   **or even this**
   ```bash
   pnpm install
   ```


### Future Integration Points
- Backend API endpoints for real AI processing
- Database integration for patient records
- Authentication and user management
- Real-time chat functionality
- PDF generation service

## 🚀 Deployment

### Static Hosting
The built application can be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

## 📝 License

This project is proprietary and confidential. All rights reserved.


## 🔐 Google Authentication Integration

NeuroAsha now includes secure Google OAuth authentication for protecting sensitive medical data and personalizing user experiences.

### Authentication Features

- **Google OAuth 2.0**: Secure sign-in with Google accounts
- **Protected Routes**: Authentication required for patient reports and sensitive data
- **Personalized Reports**: User's name from Google account integrated into assessment reports
- **Session Management**: Persistent login state with secure logout functionality
- **HIPAA Compliance**: Clear privacy and security messaging throughout the application



