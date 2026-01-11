import React, { useCallback } from 'react';
import { Download, ShieldCheck, AlertTriangle, FileCode } from 'lucide-react';
import { MOBILE_CONFIG_CONTENT } from '../constants';

const DownloadSection: React.FC = () => {

  const handleDownload = useCallback(() => {
    const blob = new Blob([MOBILE_CONFIG_CONTENT], { type: 'application/x-apple-aspen-config' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'wblock.mobileconfig';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }, []);

  return (
    <div id="download" className="py-32 bg-black relative">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        
        <div className="relative border border-white/10 bg-zinc-950/50 backdrop-blur-sm overflow-hidden">
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/5">
             <div className="flex items-center gap-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
                <span className="text-xs font-mono text-gray-500 uppercase">secure_env // guardian_block</span>
             </div>
             <ShieldCheck className="w-4 h-4 text-gray-600" />
          </div>

          <div className="p-8 md:p-16 flex flex-col items-center text-center">
            
            <div className="w-16 h-16 bg-white text-black flex items-center justify-center rounded-sm mb-8">
              <ShieldCheck className="w-8 h-8" />
            </div>

            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">
              Guardian Block
            </h2>
            
            <p className="text-gray-400 mb-10 max-w-xl text-lg font-light">
              Advanced DNS configuration to prevent certificate revocations and ensure connection integrity.
            </p>
            
            <div className="w-full max-w-md bg-black border border-white/10 p-4 mb-10 text-left">
              <div className="flex items-center gap-3 text-sm text-gray-400 mb-2 font-mono">
                <FileCode className="w-4 h-4" />
                <span>wblock.mobileconfig</span>
              </div>
              <div className="h-px w-full bg-white/10 my-3"></div>
              <div className="space-y-2">
                 <div className="flex items-center justify-between text-xs font-mono text-gray-600">
                    <span>TYPE</span>
                    <span className="text-gray-400">DNS CONFIGURATION</span>
                 </div>
                 <div className="flex items-center justify-between text-xs font-mono text-gray-600">
                    <span>UUID</span>
                    <span className="text-gray-400">7A84D100-1234</span>
                 </div>
                 <div className="flex items-center justify-between text-xs font-mono text-gray-600">
                    <span>SERVER</span>
                    <span className="text-green-500">NEXTDNS.IO</span>
                 </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 w-full max-w-xs">
              <button
                onClick={handleDownload}
                className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-bold text-sm hover:bg-gray-200 transition-colors uppercase tracking-widest rounded-sm"
              >
                <Download className="w-4 h-4" />
                Initialize Download
              </button>
              
              <div className="flex items-center justify-center gap-2 text-xs text-yellow-600/80 font-mono">
                <AlertTriangle className="w-3 h-3" />
                <span>IOS SETTINGS APPROVAL REQUIRED</span>
              </div>
            </div>

          </div>
          
          {/* Background Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none -z-10"></div>
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;