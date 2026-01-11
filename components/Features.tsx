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
    <div id="features" className="py-32 bg-black relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white uppercase mb-4">
              System <span className="text-gray-600">Capabilities</span>
            </h2>
            <p className="text-gray-400 max-w-md">
              Engineered for dominance. Built for speed.
            </p>
          </div>
          <div className="hidden md:block w-32 h-[1px] bg-white/20 mb-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="relative p-8 bg-black hover:bg-zinc-950 transition-colors duration-300 group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="w-12 h-12 border border-white/10 bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-black transition-all duration-300 rounded-sm">
                <feature.icon className="h-5 w-5" />
              </div>
              
              <h3 className="text-lg font-bold text-white mb-3 uppercase tracking-wide flex items-center gap-2">
                {feature.title}
              </h3>
              
              <p className="text-gray-500 leading-relaxed text-sm font-medium">
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