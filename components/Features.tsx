import React from 'react';
import { Shield, Cpu, Code, Ghost, Zap, Lock } from 'lucide-react';
import { Feature } from '../types';

const features: Feature[] = [
  {
    title: "Undetected",
    description: "Kernel-level injection bypasses Byfron active protection systems.",
    icon: Ghost,
  },
  {
    title: "Instant Pipe",
    description: "Zero-latency execution pipeline optimized for complex scripts.",
    icon: Zap,
  },
  {
    title: "Script Cloud",
    description: "Direct access to a repository of 5000+ verified community scripts.",
    icon: Code,
  },
  {
    title: "Anti-Revoke",
    description: "Guardian Block technology prevents iOS certificate revocations.",
    icon: Shield,
  },
  {
    title: "Level 8 API",
    description: "Unrestricted environment access for maximum script compatibility.",
    icon: Cpu,
  },
  {
    title: "Sandbox Mode",
    description: "Isolate malicious code execution to protect your hardware.",
    icon: Lock,
  },
];

const Features: React.FC = () => {
  return (
    <div id="features" className="py-24 bg-[#050b14] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Powerful <span className="text-brand-500">Features</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Everything you need to dominate the platform, built into one lightweight application.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-8 bg-[#0f172a] rounded-xl border border-white/5 hover:border-brand-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-brand-900/10 group"
            >
              <div className="w-12 h-12 bg-brand-900/20 rounded-lg flex items-center justify-center mb-6 text-brand-400 group-hover:text-brand-300 group-hover:bg-brand-600/20 transition-colors">
                <feature.icon className="h-6 w-6" />
              </div>
              
              <h3 className="text-lg font-bold text-white mb-3">
                {feature.title}
              </h3>
              
              <p className="text-slate-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;