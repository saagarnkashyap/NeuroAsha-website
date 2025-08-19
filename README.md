# NeuroAsha - AI-Powered Dementia Prediction Platform

A modern, responsive medical website for NeuroAsha, featuring AI-powered dementia prediction, cognitive screening, and comprehensive patient assessment tools.

## About NeuroAsha

NeuroAsha is a cutting-edge healthcare platform that combines artificial intelligence with medical expertise to provide:

- **Early Dementia Detection**: AI-powered MRI analysis for accurate risk assessment
- **Cognitive Screening**: Interactive chatbot for preliminary cognitive evaluation
- **Clinical Integration**: Tools designed for healthcare professionals and patients
- **Comprehensive Reporting**: Detailed patient assessment reports with visualizations

## Design Features

- **Medical Theme**: Professional healthcare-focused design with indigo (#5C6BC0) and teal (#B2DFDB) color scheme
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, accessible interface with smooth animations and transitions
- **Accessibility**: WCAG compliant design with proper contrast ratios and keyboard navigation

## Technology Stack

- **Frontend Framework**: React 18 with Vite
- **Styling**: Tailwind CSS with custom medical theme
- **UI Components**: shadcn/ui component library
- **Icons**: Lucide React icons
- **Charts**: Recharts for data visualization
- **Routing**: React Router DOM
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

## 📱 Pages Overview

### 1. Home Page (`/`)
- Hero section with compelling messaging
- Platform statistics and key metrics
- Feature highlights with icons
- Healthcare professional testimonials
- Call-to-action sections

### 2. About Page (`/about`)
- Company mission and approach
- Team member profiles
- Trusted healthcare partners
- Interactive FAQ accordion
- Consultation booking form

### 3. MRI Predictor (`/predict`)
- File upload interface for MRI scans
- Clinical data input form
- AI analysis simulation
- Results display with risk assessment
- Biomarker visualization

### 4. Cognitive Chatbot (`/chatbot`)
- Interactive chat interface
- Simulated AI assessment questions
- Progress tracking
- Assessment completion flow
- Medical disclaimers

### 5. Patient Reports (`/report`)
- Comprehensive assessment dashboard
- Interactive charts and visualizations
- Risk level indicators
- Clinical recommendations
- PDF export functionality

### 6. Contact Page (`/contact`)
- Multi-field contact form
- Office location information
- Emergency contact details
- Interactive map placeholder
- FAQ section

## 🎯 Key Features

### Responsive Design
- Mobile-first approach with breakpoints at 768px, 1024px, and 1280px
- Flexible grid layouts using CSS Grid and Flexbox
- Touch-friendly interface elements
- Optimized images and assets

### Medical Theme
- Professional color palette: Indigo primary (#5C6BC0), Teal secondary (#B2DFDB)
- Poppins font family for clean, readable typography
- Medical icons and imagery
- Soft shadows and rounded corners for approachable design

### Interactive Elements
- Hover effects and micro-interactions
- Form validation and feedback
- Loading states and progress indicators
- Smooth page transitions

### Accessibility
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- High contrast color ratios
- Screen reader compatibility

## 🔧 Customization

### Color Scheme
The medical theme colors are defined in `src/App.css`:
```css
:root {
  --primary: #5C6BC0;    /* Indigo */
  --secondary: #B2DFDB;  /* Teal */
  --accent: #B2DFDB;     /* Teal accent */
}
```

### Typography
Poppins font is imported from Google Fonts:
```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
```

### Custom CSS Classes
- `.neuro-primary` - Primary color text
- `.neuro-bg-primary` - Primary background
- `.neuro-gradient` - Gradient background
- `.neuro-card` - Styled card component
- `.neuro-btn-primary` - Primary button style

## 📊 Data Integration

### Placeholder Functionality
The current implementation includes placeholder functionality for:
- MRI file upload and processing
- AI analysis simulation
- Patient data visualization
- Report generation
- Chatbot responses

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

### Environment Variables
For production deployment, consider setting:
```env
VITE_API_URL=your-backend-api-url
VITE_ENVIRONMENT=production
```

## 🔒 Security Considerations

- All forms include client-side validation
- HIPAA compliance messaging throughout
- Secure file upload placeholders
- Privacy policy and terms of service links
- Data encryption notices

## 🧪 Testing

The application has been tested for:
- Cross-browser compatibility (Chrome, Firefox, Safari, Edge)
- Mobile responsiveness on various screen sizes
- Form functionality and validation
- Navigation and routing
- Interactive elements and animations

## 📝 License

This project is proprietary and confidential. All rights reserved.

## 🤝 Contributing

This is a client project. For any modifications or enhancements, please contact the development team.

## 📞 Support

For technical support or questions about the implementation:
- Review the code documentation
- Check the component structure in `/src/components`
- Refer to the Tailwind CSS and React documentation
- Contact the development team for specific customizations

---

**Built with ❤️ for advancing neurological healthcare through AI**



## 🔐 Google Authentication Integration

NeuroAsha now includes secure Google OAuth authentication for protecting sensitive medical data and personalizing user experiences.

### Authentication Features

- **Google OAuth 2.0**: Secure sign-in with Google accounts
- **Protected Routes**: Authentication required for patient reports and sensitive data
- **Personalized Reports**: User's name from Google account integrated into assessment reports
- **Session Management**: Persistent login state with secure logout functionality
- **HIPAA Compliance**: Clear privacy and security messaging throughout the application

### Technical Implementation

#### Dependencies Added
```json
{
  "@react-oauth/google": "^0.12.2",
  "axios": "^1.11.0"
}
```

#### Key Components
- **AuthContext** (`src/contexts/AuthContext.jsx`): Manages authentication state
- **GoogleLoginButton** (`src/components/GoogleLoginButton.jsx`): Handles OAuth flow
- **ProtectedRoute** (`src/components/ProtectedRoute.jsx`): Route protection wrapper

#### Authentication Flow
1. User clicks "Sign in with Google" in navigation
2. Redirected to Google OAuth consent screen
3. After approval, user profile data fetched from Google API
4. User information stored in React context and localStorage
5. Protected routes become accessible with personalized content

### Setup Instructions

#### 1. Google Cloud Console Configuration

**Create OAuth Credentials:**
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable the Google+ API
4. Navigate to "Credentials" → "Create Credentials" → "OAuth client ID"
5. Configure OAuth consent screen:
   - Application name: "NeuroAsha"
   - Add your email as developer
   - Set authorized domains

**Configure Web Application:**
- Application type: Web application
- Authorized JavaScript origins:
  - `http://localhost:5173` (development)
  - Your production domain (e.g., `https://neuroasha.com`)
- Copy the generated Client ID

#### 2. Environment Configuration

Create a `.env` file in the project root:
```env
# Google OAuth Configuration
VITE_GOOGLE_CLIENT_ID=your-actual-client-id.apps.googleusercontent.com
```

**Important**: Replace `your-actual-client-id.apps.googleusercontent.com` with your real Client ID from Google Cloud Console.

#### 3. Development Setup

```bash
# Install dependencies (if not already done)
pnpm install

# Start development server
pnpm run dev
```

### Authentication Testing

#### Without Authentication
1. Navigate to `/report`
2. Should display authentication required page
3. Clear explanation of why sign-in is needed
4. Professional medical-themed design

#### With Valid Google Client ID
1. Click "Sign in with Google" button
2. Complete OAuth consent flow
3. User profile appears in navigation
4. Access patient reports with personalized data
5. User's name appears in assessment reports

#### Session Management
- Login state persists across browser sessions
- Logout clears all user data and redirects appropriately
- Secure token handling with automatic cleanup

### Protected Features

#### Patient Reports (`/report`)
- **Requirement**: Must be authenticated to access
- **Personalization**: Reports display authenticated user's name
- **Security**: HIPAA compliance messaging and secure data handling

#### User Profile Integration
- User's name and profile picture displayed in navigation
- Dynamic patient ID generation based on user email
- Personalized greeting and user-specific content

### Security Features

#### Data Protection
- Secure OAuth token handling
- Protected route implementation
- Clear privacy policy messaging
- HIPAA compliance notifications

#### User Experience
- Professional authentication required page
- Clear explanation of data security benefits
- Seamless integration with existing design
- Mobile-responsive authentication flow

### Troubleshooting

#### Common Issues

**OAuth Error: "The OAuth client was not found"**
- Verify Google Client ID is correctly set in `.env` file
- Check that authorized origins are configured in Google Console
- Ensure the Client ID matches exactly (no extra spaces or characters)

**Authentication not persisting**
- Check browser localStorage for `neuroasha_user` key
- Verify AuthContext is properly wrapped around the application
- Clear browser cache and localStorage if needed

**Protected routes not working**
- Ensure ProtectedRoute component is properly imported
- Check that authentication state is correctly managed
- Verify React Router setup is correct

#### Development vs Production

**Development Setup:**
- Use `http://localhost:5173` as authorized origin
- Test with development Client ID
- Enable detailed error logging

**Production Setup:**
- Add production domain to authorized origins
- Use production-specific Client ID
- Implement proper error handling and logging

### File Structure Updates

```
src/
├── contexts/
│   └── AuthContext.jsx          # Authentication state management
├── components/
│   ├── GoogleLoginButton.jsx    # OAuth login component
│   ├── ProtectedRoute.jsx       # Route protection wrapper
│   └── Navigation.jsx           # Updated with auth integration
├── pages/
│   └── Report.jsx              # Updated with user personalization
└── main.jsx                    # Updated with OAuth provider
```

### Environment Variables Reference

```env
# Required for Google Authentication
VITE_GOOGLE_CLIENT_ID=your-google-client-id.apps.googleusercontent.com

# Optional: API endpoints for future backend integration
VITE_API_URL=https://api.neuroasha.com
VITE_ENVIRONMENT=production
```

### Future Enhancements

#### Planned Authentication Features
- Role-based access control (patient, doctor, admin)
- Multi-factor authentication options
- Integration with healthcare provider systems
- Advanced session management and security

#### Backend Integration
- User profile synchronization
- Secure API authentication
- Patient data encryption
- Audit logging for HIPAA compliance

---

**Note**: The authentication system is fully implemented and ready for production use. Simply configure a valid Google Client ID to enable full functionality.

