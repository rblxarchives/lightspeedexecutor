import React from 'react';
import { Download, MessageCircle, Rocket } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 lg:gap-12">
        
        {/* Left Content */}
        <div className="flex-1 text-left z-10">
          
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-900/30 border border-brand-500/30 mb-8">
            <Rocket className="w-3.5 h-3.5 text-brand-400" />
            <span className="text-xs font-semibold text-brand-300">Now Available for iOS & Android</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
            The <span className="text-brand-500">last executor</span> <br />
            you'll ever use
          </h1>
          
          <p className="text-lg text-slate-400 mb-10 max-w-xl leading-relaxed">
            Lightspeed is <strong>the</strong> next-generation executor for Roblox. 
            Boost your gameplay instantly with state-of-the-art Guardian anti-revoke technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#download"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-600 hover:bg-brand-500 text-white font-semibold rounded-lg transition-all shadow-lg shadow-brand-600/20"
            >
              <Download className="w-5 h-5" />
              <span>Download for iOS</span>
            </a>
            
            <a 
              href="#"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium rounded-lg transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Join Discord</span>
            </a>
          </div>

          <div className="mt-8 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            <span className="text-xs font-mono text-slate-500">Latest Version: v2.4.0-guardian</span>
          </div>
        </div>

        {/* Right Visual */}
        <div className="flex-1 w-full relative">
          <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#0f172a] aspect-video group">
            
            {/* Abstract UI representation since we don't have a real screenshot */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-900/20 to-slate-900"></div>
            
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px] opacity-50"></div>
            
            {/* Fake UI Elements */}
            <div className="absolute top-4 left-4 right-4 flex gap-2">
              <div className="h-2 w-20 bg-white/10 rounded-full"></div>
              <div className="h-2 w-10 bg-white/10 rounded-full"></div>
            </div>

            {/* Glowing Element representing 'Guardian' */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
               <div className="relative">
                 <div className="absolute inset-0 bg-brand-500 blur-2xl opacity-40"></div>
                 <div className="relative w-24 h-24 bg-brand-600/10 border border-brand-500/50 rounded-xl flex items-center justify-center backdrop-blur-sm">
                    <Rocket className="w-10 h-10 text-brand-400" />
                 </div>
               </div>
            </div>

            {/* Floating Badges */}
            <div className="absolute bottom-6 left-6 px-3 py-1 bg-black/60 backdrop-blur border border-white/10 rounded text-xs text-white font-mono">
              STATUS: UNDETECTED
            </div>
             <div className="absolute top-1/3 right-10 px-3 py-1 bg-brand-500/20 backdrop-blur border border-brand-500/30 rounded text-xs text-brand-200 font-mono animate-pulse">
              INJECTED
            </div>

          </div>
          
          {/* Background Glow behind the image */}
          <div className="absolute -inset-4 bg-brand-500/20 blur-3xl -z-10 rounded-full opacity-40"></div>
        </div>

      </div>
    </div>
  );
};

export default Hero;