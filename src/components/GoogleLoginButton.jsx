import { useGoogleLogin } from '@react-oauth/google';
import { useAuth } from '../contexts/AuthContext';
import { Button } from './ui/button';
import { LogIn, LogOut, User } from 'lucide-react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const GoogleLoginButton = () => {
  const { user, login, logout, isAuthenticated } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const googleLogin = useGoogleLogin({
    onSuccess: async (codeResponse) => {
      setIsLoading(true);
      try {
        // Get user profile information from Google
        const response = await axios.get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${codeResponse.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${codeResponse.access_token}`,
              Accept: 'application/json'
            }
          }
        );
        
        // Store user data in our auth context
        const userData = {
          ...response.data,
          access_token: codeResponse.access_token,
        };
        
        login(userData);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      } finally {
        setIsLoading(false);
      }
    },
    onError: (error) => {
      console.error('Login Failed:', error);
      setIsLoading(false);
    }
  });

  const handleLogout = () => {
    logout();
  };

  if (isAuthenticated && user) {
    return (
      <div className="flex items-center space-x-3">
        <div className="flex items-center space-x-2">
          {user.picture ? (
            <img 
              src={user.picture} 
              alt={user.name} 
              className="w-8 h-8 rounded-full border-2 border-white"
            />
          ) : (
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <User className="h-4 w-4 text-white" />
            </div>
          )}
          <span className="text-white font-medium hidden md:block">
            {user.given_name || user.name}
          </span>
        </div>
        <Button
          onClick={handleLogout}
          variant="outline"
          size="sm"
          className="bg-white/10 border-white/20 text-white hover:bg-white/20"
        >
          <LogOut className="h-4 w-4 mr-2" />
          Sign Out
        </Button>
      </div>
    );
  }

  return (
    <Button
      onClick={() => googleLogin()}
      disabled={isLoading}
      className="bg-white text-gray-900 hover:bg-gray-100 border border-gray-300"
      size="sm"
    >
      <LogIn className="h-4 w-4 mr-2" />
      {isLoading ? 'Signing in...' : 'Sign in with Google'}
    </Button>
  );
};

export default GoogleLoginButton;

