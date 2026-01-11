import React from 'react';
import { Github, Twitter, Disc } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <span className="text-2xl font-black uppercase tracking-tighter text-white">Lightspeed</span>
            <p className="text-xs font-mono text-gray-600 mt-2">EXECUTING SINCE 2024</p>
          </div>
          
          <div className="flex space-x-8">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              <Disc className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;