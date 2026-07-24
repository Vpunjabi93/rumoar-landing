import React from 'react';
import { motion } from 'framer-motion';

const Philosophy: React.FC = () => {
  return (
    <section className="w-full py-32 bg-brand-dark relative z-10 border-b border-brand-gray">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-16"
        >
          <div>
            <h2 className="text-sm uppercase tracking-[0.3em] text-brand-accent mb-6">The Problem</h2>
            <p className="text-3xl md:text-5xl font-display font-medium leading-tight mb-8">
              Completing the look shouldn't require a world tour.
            </p>
            <div className="space-y-6 text-neutral-400 font-light text-lg">
              <p>
                Now, accessories complete your look, the key operator being <span className="text-white">“complete”</span> not “the look”. The look is what takes most of your visual space.
              </p>
              <p>
                My competitors? They are incomplete. They sell everything but fail to tell the person how it is styled. They lack the olfactory edge. 
              </p>
              <p>
                You must go on Reddit to see what everyone is doing. Then hunt Instagram. It's scattered across a luggage aisle, a beauty counter, and a gifting shelf.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col justify-center">
             <div className="bg-brand-gray p-8 rounded-2xl border border-neutral-800 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/10 rounded-full blur-3xl group-hover:bg-brand-accent/20 transition-all duration-700"></div>
                <h3 className="text-2xl font-display text-white mb-6">The Arsenal</h3>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-3 text-neutral-400">
                  {['Necktie', 'Cufflinks', 'Rings', 'Pendants', 'Tattoos', 'Shades', 'Bikers’ chains', 'Watches', 'Pen', 'Cigarette case', 'Necklace', 'Earrings', 'Wristbands', 'Perfumes', 'Flasks'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-accent"></span>
                      {item}
                    </li>
                  ))}
                </ul>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Philosophy;
