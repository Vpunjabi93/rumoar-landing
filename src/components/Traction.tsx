import React from 'react';
import { motion } from 'framer-motion';
import { Lock, FileSpreadsheet, Code, Image as ImageIcon } from 'lucide-react';
import SkillEcosystem from './SkillEcosystem';
import nanoBananaImg from '../assets/images/nano-banana-output.jpg';

const NANO_PROMPT = `{
  "role": "system",
  "content": {
    "persona": "Japanese streetwear editorial photographer with a cinematic, premium style.",
    "brand_identity": ["Rebellious", "Playful", "Clean"],
    "instructions": [
      "Use the exact garment image provided. Never modify the print.",
      "Generate a CINEMATIC LOOKBOOK IMAGE — not UGC, not e-commerce.",
      "Maintain high-end Japanese streetwear editorial tone: expressive, intentional, stylized but controlled."
    ],
    "garment_input": "[INSERT USER GARMENT IMAGE HERE]",
    "model_rules": {
      "expressions": ["soft confidence", "subtle smirk", "clean intensity", "relaxed focus", "minimal rebellious attitude"],
      "disallowed_expressions": ["laugh", "overt joy", "goofy expressions"],
      "posture": ["walking slowly", "standing with attitude", "leaning casually", "half-turn pose", "looking away thoughtfully"],
      "ethnicity_default": "Japanese / East Asian unless user specifies"
    },
    "camera_settings": {
      "lens": "35mm or 50mm equivalent",
      "aperture": "f/1.8 – f/2.8",
      "look": "cinematic, shallow depth, controlled blur",
      "tone": "cool editorial with subtle neon accents"
    },
    "environment_logic": {
      "style": "Controlled Tokyo Minimal Editorial",
      "allowed_backgrounds": [
        "Shibuya side streets (clean)",
        "Shinjuku alleyway with minimal clutter",
        "vending machine corners (subtle)",
        "concrete walls",
        "rooftops with railings",
        "metro entrances",
        "neon bokeh (soft)"
      ]
    }
  }
}`;

const Traction: React.FC = () => {
  return (
    <section id="traction" className="w-full py-32 bg-brand-dark relative z-10 border-b border-brand-gray">
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#080808] to-transparent pointer-events-none" />
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="md:w-1/3">
            <h2 className="text-sm uppercase tracking-[0.3em] text-brand-accent mb-4">The Playbook</h2>
            <h3 className="text-4xl font-display font-medium text-white mb-6">How We Actually Grow</h3>
            <p className="text-neutral-400 text-lg font-light">
              We have 90 days, zero followers, and no media budget. "Going viral" isn't a strategy. This is the actual plan.
            </p>
          </div>
          
          <div className="md:w-2/3 space-y-6">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-[#111] p-8 rounded-2xl border border-neutral-800 relative overflow-hidden group"
            >
              <div className="flex justify-between items-center mb-6 relative z-10">
                <h4 className="text-2xl font-display text-white">The First 10K</h4>
                <span className="px-3 py-1 bg-neutral-900 text-neutral-400 text-xs rounded-full border border-neutral-800 font-mono flex items-center gap-2">
                  <Lock className="w-3 h-3" /> LOCKED
                </span>
              </div>
              <div className="relative z-10 bg-neutral-900/50 p-6 rounded-xl border border-neutral-800 text-center backdrop-blur-sm">
                <p className="text-neutral-400 text-sm mb-4">
                  Content types, posting cadence, playbook brands, and full timeline execution.
                </p>
                <button className="px-6 py-2 bg-white text-black font-medium rounded-full text-sm hover:bg-neutral-200 transition-colors">
                  Let's discuss this in Round 3
                </button>
              </div>
              
              {/* Fake blurred background content */}
              <div className="absolute inset-0 z-0 opacity-20 pointer-events-none blur-sm p-8 mt-16">
                 <div className="h-2 w-3/4 bg-neutral-600 rounded mb-4"></div>
                 <div className="h-2 w-1/2 bg-neutral-600 rounded mb-4"></div>
                 <div className="h-2 w-full bg-neutral-600 rounded mb-4"></div>
              </div>
            </motion.div>



            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-[#111] p-8 rounded-2xl border border-neutral-800 relative overflow-hidden group"
            >
              <div className="flex justify-between items-center mb-6 relative z-10">
                <h4 className="text-2xl font-display text-white">The First 25 Faces</h4>
                <span className="px-3 py-1 bg-neutral-900 text-neutral-400 text-xs rounded-full border border-neutral-800 font-mono flex items-center gap-2">
                  <Lock className="w-3 h-3" /> LOCKED
                </span>
              </div>
              <div className="relative z-10 bg-neutral-900/50 p-6 rounded-xl border border-neutral-800 text-center backdrop-blur-sm">
                <p className="text-neutral-400 text-sm mb-4">
                  The face of RUMOAR, influencer seeding targets, and the ROI plan.
                </p>
                <button className="px-6 py-2 bg-white text-black font-medium rounded-full text-sm hover:bg-neutral-200 transition-colors">
                  Let's discuss this in Round 3
                </button>
              </div>
              
              {/* Fake blurred background content */}
              <div className="absolute inset-0 z-0 opacity-20 pointer-events-none blur-sm p-8 mt-16">
                 <div className="h-10 w-10 rounded-full bg-neutral-600 mb-4"></div>
                 <div className="h-2 w-1/2 bg-neutral-600 rounded mb-4"></div>
                 <div className="h-2 w-full bg-neutral-600 rounded mb-4"></div>
              </div>
            </motion.div>

            {/* The Marketing Math */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-[#111] p-8 rounded-2xl border border-brand-accent/30 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-accent to-transparent opacity-50"></div>
              
              <div className="flex justify-between items-center mb-6 relative z-10">
                <h4 className="text-2xl font-display text-white">The Marketing Math</h4>
                <span className="px-3 py-1 bg-neutral-900 text-neutral-400 text-xs rounded-full border border-neutral-800 font-mono flex items-center gap-2">
                  <Lock className="w-3 h-3 text-brand-accent" /> PAYWALLED
                </span>
              </div>
              
              <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6 bg-neutral-900/40 p-6 rounded-xl border border-brand-accent/20 backdrop-blur-sm">
                <div className="w-16 h-16 bg-[#0a3622] rounded-xl flex items-center justify-center flex-shrink-0 border border-[#107c41]">
                  <FileSpreadsheet className="w-8 h-8 text-[#21a366]" />
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h5 className="text-white font-medium mb-1">RUMOAR_Qikink_Projections.xlsx</h5>
                  <p className="text-neutral-500 text-xs mb-4">Complete budget, ROAS targets, CPA thresholds, and objective tracking models.</p>
                  <button className="px-6 py-2 bg-brand-accent text-brand-dark font-medium rounded-full text-sm hover:bg-white hover:text-black transition-colors shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                    Let's discuss this in Round 3
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Why It Could Fail */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-[#111] p-8 rounded-2xl border border-red-900/30 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-900/50 to-transparent opacity-50"></div>
              
              <div className="flex justify-between items-center mb-6 relative z-10">
                <h4 className="text-2xl font-display text-white">Why It Could Fail</h4>
                <span className="px-3 py-1 bg-red-900/10 text-red-500 text-xs rounded-full border border-red-900/20 font-mono uppercase tracking-wider">
                  The Risks
                </span>
              </div>
              
              <div className="space-y-4 relative z-10">
                <div className="bg-neutral-900/40 p-6 rounded-xl border border-red-900/20 backdrop-blur-sm">
                  <h5 className="text-white font-medium mb-2">1. If I am not hired.</h5>
                  <p className="text-neutral-400 text-sm font-light">
                    A plan without the right driver is just a PDF. The vision is clear, but execution is everything.
                  </p>
                </div>
                <div className="bg-neutral-900/40 p-6 rounded-xl border border-red-900/20 backdrop-blur-sm">
                  <h5 className="text-white font-medium mb-2">2. Failing to convert the lower base of the pyramid.</h5>
                  <p className="text-neutral-400 text-sm font-light">
                    Feeding the funnel is critical. If we fail to actually start converting the broader base of the triangle (the everyday guy looking to stand out), we will end up catering to an audience that is so small in size that scaling will become a nightmare. We have to master that entry point.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* The workflow I bring - Full width block */}
        <motion.div 
          className="bg-[#111] p-8 md:p-12 rounded-2xl border border-brand-accent/20 mt-16"
        >
          <div className="flex justify-between items-center mb-6">
            <h4 className="text-2xl md:text-3xl font-display text-white">The workflow I bring</h4>
            <span className="px-3 py-1 bg-green-900/20 text-green-400 text-xs rounded-full border border-green-900/30 font-mono">UNLOCKED</span>
          </div>
          <div className="space-y-8">
            <div>
              <p className="text-neutral-400 text-sm md:text-base mb-6 max-w-3xl">
                We don't need a massive studio budget. Every tool in our stack speaks to the same context file — keeping brand voice consistent across every reel, carousel, and caption:
              </p>
              {/* Skill ecosystem constellation */}
              <SkillEcosystem />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-neutral-800">
              <div className="bg-neutral-900/50 p-6 rounded-xl border border-neutral-800">
                <h5 className="text-brand-accent font-medium mb-2 text-lg">1. GPT / Gemini</h5>
                <p className="text-sm text-neutral-500 leading-relaxed">For aggressive, rapid-fire copywriting, script generation, and translating Voice of Customer data into raw creative hooks.</p>
              </div>
              <div className="bg-neutral-900/50 p-6 rounded-xl border border-neutral-800 flex flex-col">
                <h5 className="text-brand-accent font-medium mb-2 text-lg">2. Nano Banana</h5>
                <p className="text-sm text-neutral-500 leading-relaxed mb-4">Our visual engine for creating hyper-realistic, studio-quality lifestyle photography and product mockups without booking a single photographer.</p>
                
                {/* Embedded Prompt & Image */}
                <div className="mt-auto space-y-4">
                  <div className="bg-[#0a0a0a] rounded-lg border border-neutral-800 overflow-hidden group">
                    <div className="flex items-center gap-2 px-3 py-2 bg-neutral-900 border-b border-neutral-800">
                      <Code className="w-3 h-3 text-neutral-500" />
                      <span className="text-[10px] text-neutral-500 font-mono uppercase tracking-wider">Nano_System_Prompt.json</span>
                    </div>
                    <div className="p-3 max-h-48 overflow-y-auto custom-scrollbar">
                      <pre className="text-[10px] text-neutral-400 font-mono leading-relaxed">
                        <code>{NANO_PROMPT}</code>
                      </pre>
                    </div>
                  </div>
                  
                  <div className="bg-[#0a0a0a] rounded-lg border border-neutral-800 overflow-hidden relative group">
                    <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded flex items-center gap-2 border border-white/10 z-10">
                      <ImageIcon className="w-3 h-3 text-brand-accent" />
                      <span className="text-[9px] text-white font-mono uppercase tracking-wider">Output</span>
                    </div>
                    <div className="relative aspect-[4/5] w-full overflow-hidden">
                      <img 
                        src={nanoBananaImg} 
                        alt="Nano Banana Output" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-neutral-900/50 p-6 rounded-xl border border-neutral-800">
                <h5 className="text-brand-accent font-medium mb-2 flex items-center gap-2 text-lg">3. Higgsfield <span className="text-[10px] bg-white text-black px-2 py-0.5 rounded uppercase font-bold tracking-wider relative -top-0.5">Paid</span></h5>
                <p className="text-sm text-neutral-500 leading-relaxed">When we need to escalate to high-end motion. We use Higgsfield for generating premium, cinematic video campaigns from our still assets to drive top-of-funnel awareness.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Traction;
