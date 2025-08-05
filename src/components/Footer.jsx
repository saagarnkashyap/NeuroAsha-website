import { Brain, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Brain className="h-8 w-8 text-[#B2DFDB]" />
              <span className="text-2xl font-bold">NeuroAsha</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              AI-powered dementia prediction and cognitive screening platform. 
              Empowering patients, neurologists, and caregivers with advanced 
              diagnostic tools and insights.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#B2DFDB] transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#B2DFDB] transition-colors">
                <Phone className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#B2DFDB] transition-colors">
                <MapPin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/predict" className="text-gray-400 hover:text-white transition-colors">
                  MRI Predictor
                </Link>
              </li>
              <li>
                <Link to="/chatbot" className="text-gray-400 hover:text-white transition-colors">
                  Cognitive Test
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 NeuroAsha. All rights reserved. | Advancing neurological healthcare through AI.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

