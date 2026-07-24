import React from 'react';
import { motion } from 'framer-motion';

// Inline SVG avatars - no external CDN dependency
const Avatar = ({ seed }: { seed: string }) => {
  const hash = seed.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
  const initials = seed.slice(0, 2).toUpperCase();
  const colors = ['#7c3aed', '#0369a1', '#b45309', '#065f46', '#9f1239', '#6b21a8'];
  const bg = colors[hash % colors.length];
  return (
    <div
      className="w-full h-full flex items-center justify-center text-white font-bold text-xs"
      style={{ background: bg }}
    >
      {initials}
    </div>
  );
};

import { MessageSquare, ArrowUp, ArrowDown, User } from 'lucide-react';

const VoiceOfCustomer: React.FC = () => {
  return (
    <section id="voice" className="w-full py-32 bg-[#080808] relative z-10 border-b border-brand-gray overflow-hidden">
      {/* Section gradient bleed from above */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-brand-dark to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-sm uppercase tracking-[0.3em] text-brand-accent mb-4">Voice of Customer</h2>
          <h3 className="text-4xl md:text-5xl font-display font-medium text-white mb-6">The silent majority is screaming.</h3>
          <p className="text-neutral-400 max-w-2xl mx-auto">Real conversations proving that fashion-first men are starving for curation, not just products.</p>
        </div>

        {/* Reddit Evidence Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 items-start">

          {/* Evidence 1: The Void */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="bg-[#121212] p-5 rounded-xl border border-neutral-800 shadow-xl"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-[#ff4500] flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-xs">r/</span>
              </div>
              <div className="text-sm">
                <span className="font-bold text-neutral-200">r/IndianFashionAddicts</span>
                <span className="text-neutral-500 ml-1 text-xs">• 7mo ago</span>
              </div>
            </div>
            <p className="text-xs text-neutral-400 mb-2">noobkill</p>
            <h4 className="text-lg text-white font-medium mb-3">Where do y'all men source your accessories online?</h4>
            <div className="inline-block bg-teal-900/40 text-teal-400 text-[10px] px-2 py-0.5 rounded-full mb-3">General Discussion</div>
            <p className="text-sm text-neutral-300 leading-relaxed mb-4">
              I am looking for online webstores where one can find men's accessories. I am mostly looking for minimal pieces, but atp I don't know any website which sells accessories at all. Help a bro out!
            </p>
            <div className="flex items-center gap-4 text-neutral-500 text-xs font-medium">
              <div className="flex items-center gap-1 bg-[#1A1A1B] hover:bg-neutral-800 transition-colors px-2 py-1 rounded-full border border-neutral-800 cursor-pointer">
                <ArrowUp className="w-4 h-4" /> <span>7</span> <ArrowDown className="w-4 h-4" />
              </div>
              <div className="flex items-center gap-2 bg-[#1A1A1B] hover:bg-neutral-800 transition-colors px-3 py-1 rounded-full border border-brand-accent text-brand-accent cursor-pointer">
                <MessageSquare className="w-4 h-4" /> <span>12</span>
              </div>
            </div>
          </motion.div>

          {/* Evidence 2: The Stigma */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1 }}
            className="bg-[#121212] p-5 rounded-xl border border-brand-accent/30 shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-accent to-transparent opacity-50" />

            {/* Parent Comment */}
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0">
                  <Avatar seed="tb3" />
                </div>
                <span className="text-xs font-bold text-neutral-200">thatbutterscotch3</span>
                <span className="text-[10px] px-1.5 py-0.5 bg-pink-900/30 text-pink-400 rounded-full border border-pink-900/50">Indian Woman</span>
              </div>
              <p className="text-sm text-neutral-300 ml-8 leading-relaxed">My ex used to borrow my nail polish and always apply it matching with my nails.</p>
            </div>

            {/* Reply Thread */}
            <div className="ml-4 border-l border-neutral-800 pl-4 space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-5 h-5 rounded-full overflow-hidden flex-shrink-0">
                    <Avatar seed="ps9" />
                  </div>
                  <span className="text-xs font-bold text-neutral-200">pussysnatcher911</span>
                </div>
                <p className="text-sm text-neutral-300">That's so gay!! What else?</p>
              </div>

              <div className="ml-4 border-l border-brand-accent/50 pl-4">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-5 h-5 rounded-full overflow-hidden flex-shrink-0">
                    <Avatar seed="tb3" />
                  </div>
                  <span className="text-xs font-bold text-brand-accent">thatbutterscotch3</span>
                </div>
                <p className="text-sm text-white font-medium">He wasn't g@y that I confirm 😭</p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-5 h-5 rounded-full overflow-hidden flex-shrink-0">
                    <Avatar seed="mc7" />
                  </div>
                  <span className="text-xs font-bold text-neutral-200">me_not_chandler</span>
                </div>
                <p className="text-sm text-neutral-400 italic">What did I just read? Did he wear matching panties too?</p>
              </div>
            </div>
          </motion.div>

          {/* Evidence 3: The Intimidation / Relief */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
            className="bg-[#121212] p-5 rounded-xl border border-green-900/30 shadow-xl space-y-5"
          >
            {/* OP Comment */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-full bg-green-900 flex items-center justify-center flex-shrink-0">
                  <User className="w-3 h-3 text-green-400" />
                </div>
                <span className="text-xs font-bold text-green-500">Own-Mind-7851 <span className="text-[10px] text-green-400 font-normal border border-green-500/30 px-1 rounded ml-1">OP</span></span>
              </div>
              <p className="text-sm text-neutral-300 ml-8 leading-relaxed bg-green-900/10 p-3 rounded-lg border border-green-900/20">
                I feel like half of it is just not being used to having something on my wrist all the time. Maybe once that feels normal I won't even think about it anymore.
              </p>
            </div>

            {/* Reply */}
            <div className="ml-4 border-l border-neutral-800 pl-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-5 h-5 rounded-full bg-neutral-800 flex items-center justify-center flex-shrink-0">
                  <User className="w-3 h-3 text-neutral-400" />
                </div>
                <span className="text-xs font-bold text-neutral-300">Useful_Cycle_7515</span>
              </div>
              <p className="text-sm text-neutral-400">Id skip the necklace for now and just start with a watch</p>
            </div>

            {/* Another user */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-5 h-5 rounded-full bg-purple-900/50 flex items-center justify-center flex-shrink-0">
                  <User className="w-3 h-3 text-purple-400" />
                </div>
                <span className="text-xs font-bold text-neutral-300">foxinHI</span>
              </div>
              <p className="text-sm text-neutral-400 ml-7 leading-relaxed">
                Watches. It's jewelry with an engine. They're my go-to accessories. Not Rolexes or expensive watches... but more down-to-earth versions.
              </p>
            </div>
          </motion.div>

        </div>

        {/* Positioning & Audience */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h4 className="text-xl font-display text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-brand-accent block" /> The Positioning
            </h4>
            <p className="text-lg md:text-xl text-neutral-300 font-light leading-relaxed">
              For the modern Indian man who wants to stand out without looking like he tried too hard, <span className="font-medium text-white">RUMOAR</span> is the one destination that actually tells you what, how, and why for your accessories—and gets them to you after that. Take the guesswork out of your accessories. Own your look.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-display text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-brand-accent block" /> The Targets
            </h4>

            <div className="flex flex-col sm:flex-row gap-8 items-center mt-8">
              {/* The Pyramid — using inline styles for cross-browser hover reliability */}
              <div className="w-full sm:w-1/3 flex justify-center py-4">
                <svg viewBox="0 0 100 100" className="w-48 h-48 drop-shadow-2xl overflow-visible">
                  <g className="cursor-pointer">
                    <polygon
                      points="50,10 35,45 65,45"
                      style={{ fill: '#D4AF37', stroke: '#080808', strokeWidth: 3 }}
                    />
                    <text x="50" y="38" textAnchor="middle" style={{ fontSize: 6, fontFamily: 'monospace', fill: '#080808', fontWeight: 'bold' }}>TOP</text>
                  </g>
                  <g className="cursor-pointer">
                    <polygon
                      points="32,48 10,95 90,95 68,48"
                      style={{ fill: '#1A1A1A', stroke: '#080808', strokeWidth: 3 }}
                    />
                    <text x="50" y="78" textAnchor="middle" style={{ fontSize: 8, fontFamily: 'monospace', fill: '#6B7280', fontWeight: 'bold' }}>BASE</text>
                  </g>
                </svg>
              </div>

              {/* The Descriptions */}
              <div className="w-full sm:w-2/3 space-y-8">
                <div className="border-l-[3px] border-brand-accent pl-5">
                  <h5 className="text-brand-accent font-medium mb-2">1. The "Almost-There" Guy (The Top)</h5>
                  <p className="text-sm text-neutral-400">He's got the basics down but stops there. He wants the final polish but won't waste a weekend hunting down a watch, a fragrance, and a ring across ten different tabs. He wants it curated, stacked, and handed to him.</p>
                </div>

                <div className="border-l-[3px] border-neutral-700 pl-5">
                  <h5 className="text-neutral-300 font-medium mb-2">2. The Background Breaker (The Base)</h5>
                  <p className="text-sm text-neutral-400">He's tired of blending into the sea of tech-bro quarter-zips. He wants to get noticed, but the line between "sharp" and "trying too hard" terrifies him. He needs a playbook for standing out without feeling like a fraud.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section gradient bleed to below */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-brand-dark to-transparent pointer-events-none" />
    </section>
  );
};

export default VoiceOfCustomer;
