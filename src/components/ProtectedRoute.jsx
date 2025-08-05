import { useAuth } from '../contexts/AuthContext';
import { AlertTriangle, LogIn } from 'lucide-react';
import { Button } from './ui/button';
import GoogleLoginButton from './GoogleLoginButton';

const ProtectedRoute = ({ children, requireAuth = true }) => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#5C6BC0] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (requireAuth && !isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="py-16 neuro-gradient text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <AlertTriangle className="h-16 w-16 mx-auto mb-4 text-yellow-300" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Authentication Required</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Please sign in with your Google account to access patient reports and assessment data
            </p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="neuro-card p-8 text-center">
            <LogIn className="h-16 w-16 mx-auto mb-6 neuro-primary" />
            <h2 className="text-2xl font-bold mb-4">Sign In Required</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              To protect patient privacy and ensure secure access to medical data, 
              you must be signed in to view assessment reports. Your Google account 
              will be used to personalize your experience and maintain data security.
            </p>
            
            <div className="flex justify-center mb-8">
              <GoogleLoginButton />
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-2xl mx-auto">
              <h3 className="font-semibold text-blue-800 mb-2">Why do I need to sign in?</h3>
              <ul className="text-sm text-blue-700 text-left space-y-2">
                <li>• <strong>Personalized Reports:</strong> Your name and information will be used in assessment reports</li>
                <li>• <strong>Data Security:</strong> HIPAA-compliant authentication protects sensitive medical information</li>
                <li>• <strong>Session Management:</strong> Secure access to your cognitive assessment history</li>
                <li>• <strong>Privacy Protection:</strong> Only you can access your personal health data</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return children;
};

export default ProtectedRoute;

