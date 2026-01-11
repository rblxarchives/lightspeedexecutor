import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Guardian Block', href: '#download' },
    { label: 'Discord', href: '#' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/5' : 'bg-transparent border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="bg-white text-black p-1.5 rounded-sm">
              <Zap className="h-5 w-5 fill-current" />
            </div>
            <span className="font-bold text-xl tracking-wide uppercase text-white group-hover:text-gray-300 transition-colors">
              Lightspeed
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-10">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-gray-400 hover:text-white transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
                </a>
              ))}
              <a href="#download" className="px-5 py-2 text-sm font-bold bg-white text-black hover:bg-gray-200 transition-colors rounded-sm uppercase tracking-wide">
                Get Started
              </a>
            </div>
          </div>
          
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 hover:bg-white/10 rounded-sm transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black pt-24 px-6">
           <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-white p-2"
            >
              <X className="h-6 w-6" />
            </button>
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-2xl font-bold text-gray-400 hover:text-white transition-colors uppercase"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
             <a 
                href="#download"
                onClick={() => setIsOpen(false)}
                className="inline-block text-center w-full py-4 bg-white text-black font-bold uppercase mt-4"
              >
                Get Started
              </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;