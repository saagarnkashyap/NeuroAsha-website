# Google Authentication Setup Guide for NeuroAsha

This guide provides step-by-step instructions for setting up Google OAuth authentication in the NeuroAsha application.

## 📋 Prerequisites

- Google account with access to Google Cloud Console
- NeuroAsha project files
- Basic understanding of OAuth 2.0 concepts

## 🚀 Step-by-Step Setup

### Step 1: Access Google Cloud Console

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Sign in with your Google account
3. Accept the Terms of Service if prompted

### Step 2: Create or Select a Project

#### Option A: Create New Project
1. Click the project dropdown at the top of the page
2. Click "New Project"
3. Enter project details:
   - **Project Name**: `NeuroAsha` (or your preferred name)
   - **Organization**: Select your organization (if applicable)
   - **Location**: Choose appropriate location
4. Click "Create"
5. Wait for project creation to complete
6. Select the new project from the dropdown

#### Option B: Use Existing Project
1. Click the project dropdown
2. Select an existing project you want to use
3. Ensure you have appropriate permissions

### Step 3: Enable Required APIs

1. In the Google Cloud Console, navigate to "APIs & Services" > "Library"
2. Search for "Google+ API"
3. Click on "Google+ API" from the results
4. Click "Enable"
5. Wait for the API to be enabled

### Step 4: Configure OAuth Consent Screen

1. Navigate to "APIs & Services" > "OAuth consent screen"
2. Choose user type:
   - **Internal**: For organization-only access
   - **External**: For public access (recommended for NeuroAsha)
3. Click "Create"

#### Fill OAuth Consent Screen Information

**App Information:**
- **App name**: `NeuroAsha`
- **User support email**: Your email address
- **App logo**: Upload NeuroAsha logo (optional)

**App domain:**
- **Application home page**: Your production domain (e.g., `https://neuroasha.com`)
- **Application privacy policy link**: Your privacy policy URL
- **Application terms of service link**: Your terms of service URL

**Authorized domains:**
- Add your production domain (e.g., `neuroasha.com`)
- Add localhost for development: `localhost`

**Developer contact information:**
- Add your email address

4. Click "Save and Continue"

#### Scopes Configuration
1. Click "Add or Remove Scopes"
2. Select the following scopes:
   - `../auth/userinfo.email`
   - `../auth/userinfo.profile`
   - `openid`
3. Click "Update"
4. Click "Save and Continue"

#### Test Users (for External apps in testing)
1. Add test user emails if your app is in testing mode
2. Click "Save and Continue"

#### Summary
1. Review your configuration
2. Click "Back to Dashboard"

### Step 5: Create OAuth 2.0 Credentials

1. Navigate to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "OAuth client ID"
3. Select application type: **Web application**

#### Configure Web Application
**Name**: `NeuroAsha Web Client`

**Authorized JavaScript origins:**
Add the following URIs:
- `http://localhost:5173` (for development)
- `http://localhost:3000` (alternative dev port)
- `https://your-production-domain.com` (your actual domain)

**Authorized redirect URIs:**
Add the following URIs:
- `http://localhost:5173` (for development)
- `https://your-production-domain.com` (your actual domain)

4. Click "Create"

### Step 6: Copy Client ID

1. After creation, a dialog will show your credentials
2. **Copy the Client ID** (it looks like: `123456789-abcdefghijklmnop.apps.googleusercontent.com`)
3. **Important**: Keep this secure and don't share it publicly
4. You can also download the JSON file for backup

### Step 7: Configure NeuroAsha Application

1. Navigate to your NeuroAsha project directory
2. Create or edit the `.env` file in the root directory:

```env
# Google OAuth Configuration
VITE_GOOGLE_CLIENT_ID=your-actual-client-id.apps.googleusercontent.com
```

3. Replace `your-actual-client-id.apps.googleusercontent.com` with the Client ID you copied
4. Save the file

### Step 8: Test the Integration

1. Start the development server:
   ```bash
   pnpm run dev
   ```

2. Open `http://localhost:5173` in your browser

3. Test the authentication flow:
   - Click "Sign in with Google" in the navigation
   - You should be redirected to Google's consent screen
   - Grant permissions to the application
   - You should be redirected back to NeuroAsha
   - Your name and profile picture should appear in the navigation

4. Test protected routes:
   - Navigate to `/report`
   - If not authenticated, you should see the authentication required page
   - If authenticated, you should see the personalized report with your name

## 🔧 Configuration for Different Environments

### Development Environment
```env
VITE_GOOGLE_CLIENT_ID=your-dev-client-id.apps.googleusercontent.com
```

### Production Environment
```env
VITE_GOOGLE_CLIENT_ID=your-prod-client-id.apps.googleusercontent.com
```

**Best Practice**: Use different Client IDs for development and production environments.

## 🛡️ Security Best Practices

### Client ID Security
- Never commit the actual Client ID to version control
- Use environment variables for all sensitive configuration
- Use different Client IDs for different environments
- Regularly rotate credentials if compromised

### Domain Configuration
- Only add trusted domains to authorized origins
- Use HTTPS in production
- Regularly review and update authorized domains
- Remove unused or old domains

### OAuth Consent Screen
- Keep app information up to date
- Provide clear privacy policy and terms of service
- Use appropriate scopes (minimal required permissions)
- Regularly review and update consent screen information

## 🐛 Troubleshooting

### Common Error Messages

#### "The OAuth client was not found"
**Cause**: Invalid or incorrect Client ID
**Solution**: 
- Verify Client ID is correctly copied
- Check for extra spaces or characters
- Ensure the Client ID is from the correct Google Cloud project

#### "redirect_uri_mismatch"
**Cause**: The redirect URI is not authorized
**Solution**:
- Add the current domain to authorized JavaScript origins
- Ensure the URI exactly matches (including protocol and port)
- Check for typos in the authorized URIs

#### "access_denied"
**Cause**: User denied permission or app not approved
**Solution**:
- Ensure OAuth consent screen is properly configured
- Check if app is in testing mode and user is added as test user
- Verify required scopes are properly configured

### Development Issues

#### Authentication not working in development
1. Verify `http://localhost:5173` is in authorized origins
2. Check that `.env` file is in the project root
3. Restart the development server after changing `.env`
4. Clear browser cache and localStorage

#### User data not persisting
1. Check browser localStorage for `neuroasha_user` key
2. Verify AuthContext is properly implemented
3. Check for JavaScript errors in browser console

### Production Issues

#### Authentication failing in production
1. Verify production domain is in authorized origins
2. Ensure HTTPS is properly configured
3. Check that production Client ID is correctly set
4. Verify OAuth consent screen is published (not in testing mode)

## 📊 Monitoring and Analytics

### Google Cloud Console Monitoring
1. Navigate to "APIs & Services" > "Credentials"
2. Click on your OAuth client ID
3. Monitor usage statistics and quotas

### Application Monitoring
- Monitor authentication success/failure rates
- Track user login patterns
- Log authentication errors for debugging
- Implement proper error handling and user feedback

## 🔄 Maintenance

### Regular Tasks
- Review and update OAuth consent screen information
- Monitor API usage and quotas
- Update authorized domains as needed
- Rotate credentials periodically for security

### Updates and Changes
- Test authentication flow after any domain changes
- Update environment variables when rotating credentials
- Verify functionality after Google API updates
- Maintain backup of configuration settings

## 📞 Support Resources

### Google Documentation
- [Google Identity Platform](https://developers.google.com/identity)
- [OAuth 2.0 for Web Applications](https://developers.google.com/identity/protocols/oauth2/web-server)
- [Google Cloud Console Help](https://cloud.google.com/support)

### NeuroAsha Specific
- Check the main README.md for technical implementation details
- Review the authentication test results document
- Contact the development team for specific issues

---

**Important**: Keep your Client ID and other credentials secure. Never share them publicly or commit them to version control systems.

