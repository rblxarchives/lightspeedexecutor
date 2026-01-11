import React, { useCallback } from 'react';
import { Download, ShieldCheck, AlertTriangle, FileCode, CheckCircle2 } from 'lucide-react';
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
    <div id="download" className="py-24 bg-[#050b14] relative">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="bg-[#0f172a] rounded-2xl border border-white/5 overflow-hidden shadow-2xl relative">
          
          {/* Header */}
          <div className="px-8 py-6 border-b border-white/5 bg-white/[0.02] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-brand-500/10 rounded-lg">
                <ShieldCheck className="w-5 h-5 text-brand-400" />
              </div>
              <h3 className="font-semibold text-white">Guardian Block Configuration</h3>
            </div>
            <div className="text-xs font-mono text-brand-400 bg-brand-900/20 px-3 py-1 rounded-full border border-brand-500/20">
              v1.0.0 STABLE
            </div>
          </div>

          <div className="p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center">
            
            <div className="flex-1 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Anti-Revoke Protection</h2>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Install the Lightspeed Guardian Block profile to secure your connection against certificate revocations.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Prevents enterprise cert revokes</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Blocks telemetry & analytics</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Zero latency impact</span>
                </div>
              </div>

              <div className="pt-4">
                 <button
                  onClick={handleDownload}
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-600 hover:bg-brand-500 text-white font-semibold rounded-lg transition-all"
                >
                  <Download className="w-4 h-4" />
                  Download Configuration
                </button>
                <div className="mt-3 flex items-center gap-2 text-xs text-yellow-500/80">
                  <AlertTriangle className="w-3 h-3" />
                  <span>Requires iOS Settings Approval</span>
                </div>
              </div>
            </div>

            {/* Visual File Rep */}
            <div className="w-full max-w-xs bg-[#020617] rounded-xl border border-white/10 p-6 relative group">
              <div className="absolute inset-0 bg-brand-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="flex items-center gap-3 mb-4">
                <FileCode className="w-8 h-8 text-brand-500" />
                <div>
                  <div className="text-sm font-medium text-white">wblock.mobileconfig</div>
                  <div className="text-xs text-slate-500">2.4 KB • XML Configuration</div>
                </div>
              </div>
              <div className="space-y-2">
                 <div className="h-1.5 w-3/4 bg-white/10 rounded"></div>
                 <div className="h-1.5 w-1/2 bg-white/10 rounded"></div>
                 <div className="h-1.5 w-full bg-white/10 rounded"></div>
                 <div className="h-1.5 w-5/6 bg-white/10 rounded"></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;