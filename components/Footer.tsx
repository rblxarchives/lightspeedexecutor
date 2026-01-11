import React from 'react';
import { Github, Twitter, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050b14] border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex items-center gap-2">
           <span className="font-bold text-lg text-white">Lightspeed</span>
           <span className="text-slate-600 text-sm">© 2024</span>
        </div>

        <div className="flex gap-8 text-sm text-slate-400">
          <a href="#" className="hover:text-brand-400 transition-colors">Terms</a>
          <a href="#" className="hover:text-brand-400 transition-colors">Privacy</a>
          <a href="#" className="hover:text-brand-400 transition-colors">Status</a>
        </div>
        
        <div className="flex gap-6">
          <a href="#" className="text-slate-500 hover:text-white transition-colors">
            <MessageCircle className="h-5 w-5" />
          </a>
          <a href="#" className="text-slate-500 hover:text-white transition-colors">
            <Twitter className="h-5 w-5" />
          </a>
          <a href="#" className="text-slate-500 hover:text-white transition-colors">
            <Github className="h-5 w-5" />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;