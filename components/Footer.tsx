import React from 'react';
import { Instagram, Mail, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-bold tracking-tighter mb-2">
              <span className="text-white">A</span>
              <span className="text-accent">Z</span>
            </h2>
            <p className="text-gray-500 text-sm">
              Creating digital experiences that matter.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-accent transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-accent transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-accent transition-colors">
              <Twitter size={20} />
            </a>
            <a href="mailto:hello@azdesign.com" className="text-gray-400 hover:text-accent transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/5 text-center text-gray-600 text-xs">
          &copy; {new Date().getFullYear()} AZ Design. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;