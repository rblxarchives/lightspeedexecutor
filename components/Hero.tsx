import React from 'react';
import { ArrowRight, Terminal, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
      
      {/* Spotlight Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-white/[0.03] blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center text-center z-10">
        
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-10 hover:border-white/20 transition-colors cursor-default backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-xs font-mono font-medium text-gray-300 tracking-wide uppercase">System Operational</span>
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white mb-8 leading-[0.9] text-glow select-none">
          LIGHT<span className="text-gray-500">SPEED</span>
        </h1>
        
        <p className="max-w-2xl text-lg md:text-xl text-gray-400 mb-12 font-light leading-relaxed">
          The next generation of Roblox execution. <br className="hidden md:block" />
          Bypass Byfron with <span className="text-white font-medium">Guardian Technology™</span>.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
          <a 
            href="#download"
            className="group relative inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-black bg-white rounded-sm hover:bg-gray-200 transition-all duration-200 min-w-[180px] uppercase tracking-wider"
          >
            Download Now
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a 
            href="#features"
            className="group inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-white bg-transparent border border-white/20 hover:bg-white hover:text-black hover:border-white transition-all duration-200 min-w-[180px] rounded-sm uppercase tracking-wider"
          >
            Explore Features
          </a>
        </div>
      </div>
      
      {/* Tech Grid overlay */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black_70%,transparent_100%)]"></div>
    </div>
  );
};

export default Hero;