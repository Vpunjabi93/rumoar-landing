import React from 'react';
import { motion } from 'framer-motion';

const VideoSubmissions: React.FC = () => {
  return (
    <section className="w-full py-32 bg-[#050505] relative z-10">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-sm uppercase tracking-[0.3em] text-brand-accent mb-4">Part 3</h2>
          <h3 className="text-4xl md:text-5xl font-display font-medium text-white mb-6">The Proof</h3>
          <p className="text-neutral-400 max-w-2xl mx-auto">The biggest RUMOAR I'd spread about myself, plus the exact workflows to pull this off.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[1, 2, 3].map((i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
               {/* 1080x1920 aspect ratio is 9:16 */}
               <div className="aspect-[9/16] bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800 relative transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_-15px_rgba(212,175,55,0.15)]">
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-black/50 border border-white/10 flex items-center justify-center backdrop-blur-sm group-hover:bg-brand-accent/90 group-hover:border-brand-accent transition-colors">
                      <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
                    </div>
                 </div>
                 <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-white font-medium text-sm">
                      {i === 1 ? 'Part 3: The Rumour' : `Workflow Demo 0${i-1}`}
                    </p>
                 </div>
               </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <footer className="mt-32 pt-8 border-t border-brand-gray text-center text-neutral-600 text-sm">
        <p>RUMOAR Assignment Submission. Hosted via GitHub Pages.</p>
      </footer>
    </section>
  );
};

export default VideoSubmissions;
