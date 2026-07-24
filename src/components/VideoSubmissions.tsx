import React from 'react';
import { motion } from 'framer-motion';

const VideoSubmissions: React.FC = () => {
  return (
    <section id="part3" className="w-full py-32 bg-[#050505] relative z-10">
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-brand-dark to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-sm uppercase tracking-[0.3em] text-brand-accent mb-4">Part 3</h2>
          <h3 className="text-4xl md:text-5xl font-display font-medium text-white mb-6">The Proof</h3>
          <p className="text-neutral-400 max-w-2xl mx-auto">The biggest RUMOAR I'd spread about myself, plus the exact workflows to pull this off.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { label: 'Part 3: The Rumour', tag: 'Coming Soon' },
            { label: 'Workflow Demo 01', tag: 'Coming Soon' },
            { label: 'Workflow Demo 02', tag: 'Coming Soon' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-default"
            >
              {/* 9:16 aspect ratio */}
              <div className="aspect-[9/16] bg-neutral-900/60 rounded-xl overflow-hidden border border-neutral-800 relative transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_-15px_rgba(212,175,55,0.15)]">
                {/* Pulsing overlay to signal coming soon */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-black/50 border border-brand-accent/30 flex items-center justify-center backdrop-blur-sm">
                    <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white/30 border-b-[8px] border-b-transparent ml-1" />
                  </div>
                  <div>
                    <p className="text-neutral-300 font-medium text-sm mb-2">{item.label}</p>
                    <span className="text-[10px] uppercase tracking-widest px-3 py-1 rounded-full border border-brand-accent/40 text-brand-accent/70">
                      {item.tag}
                    </span>
                  </div>
                </div>

                {/* Animated shimmer */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-32 pt-8 border-t border-brand-gray">
        <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4 text-neutral-600 text-sm">
          <div className="flex items-center gap-3">
            <span className="text-brand-accent font-display font-bold tracking-widest text-base">RUMOAR</span>
            <span className="text-neutral-800">|</span>
            <span>Round 2 Submission</span>
          </div>
          <div className="text-center md:text-right space-y-1">
            <p className="text-neutral-500 font-medium">Vivek Punjabi — Social Media Manager Candidate</p>
            <p className="text-neutral-700 text-xs">July 2026 · Hosted on GitHub Pages</p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default VideoSubmissions;
