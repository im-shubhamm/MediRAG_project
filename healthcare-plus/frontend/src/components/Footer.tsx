import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-blue-950 text-gray-300 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Activity className="h-6 w-6 text-red-500 animate-pulse" />
              <span className="text-2xl font-bold tracking-tight text-white">
                MediRAG
              </span>
            </div>
            <p className="text-sm text-gray-400">
              Integrating cutting-edge AI technology with modern healthcare solutions to provide personalized, accessible medical assistance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-blue-400 transition duration-300">Home</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition duration-300">Services</Link></li>
              <li><Link to="/about" className="hover:text-blue-400 transition duration-300">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition duration-300">Contact</Link></li>
              <li><Link to="/privacy" className="hover:text-blue-400 transition duration-300">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* AI Features */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">AI Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/xray-diagnosis" className="hover:text-blue-400 transition duration-300">X-Ray & Doc Analysis</Link></li>
              <li><Link to="/health-plans" className="hover:text-blue-400 transition duration-300">Personal Health Plans</Link></li>
              <li><Link to="/mental-health" className="hover:text-blue-400 transition duration-300">Mental Health Chatbot</Link></li>
              <li><Link to="/appointments" className="hover:text-blue-400 transition duration-300">Appointment Scheduling</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Contact Us</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-blue-500 shrink-0" />
                <span>100 Health Way, Medical Center, NY</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-500 shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-500 shrink-0" />
                <span>support@medirag.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider and Copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} MediRAG. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-blue-400 transition duration-300">Privacy Policy</Link>
            <a href="#" className="hover:text-blue-400 transition duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
