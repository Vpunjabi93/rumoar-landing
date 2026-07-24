import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, ArrowRight, RotateCcw } from 'lucide-react';

// The simulated pipeline log steps — adapted for RUMOAR's content workflow
const PIPELINE_STEPS = [
  '[GPT-4o] Parsing brief & extracting brand voice...',
  '[GPT-4o] Generating 12 hook variants for carousel...',
  '[Nano Banana] Queuing product image generation...',
  '[Nano Banana] Rendering lifestyle context — neck detail...',
  '[Nano Banana] Rendering lifestyle context — wrist detail...',
  '[GPT-4o] Selecting top 3 hooks by resonance score...',
  '[Higgsfield] Injecting motion into hero frame...',
  '[Pipeline] Assembling final content package...',
];

const THINKING_LOGS = [
  '~ [Thinking] Checking tone against RUMOAR brand voice...',
  '~ [Thinking] Weighting scroll-stop hooks...',
  '~ [Thinking] Cross-referencing audience pyramid tier...',
  '~ [Thinking] Applying male-first styling psychology...',
  '~ [Thinking] Rejecting generic lifestyle shots...',
  '~ [Thinking] Validating neck + wrist composition rules...',
];

// The simulated output for each "content type"
const OUTPUTS: Record<string, { title: string; content: string[] }> = {
  carousel: {
    title: 'CAROUSEL OUTPUT — The Watch Stack',
    content: [
      '**Hook (Slide 1 - Full Look):** The guy in the corner that everyone clocks but nobody can figure out.',
      '**Slide 2 - Neck Detail:** One pendant. No rules. All statement.',
      '**Slide 3 - Wrist Detail:** A G-Shock next to a leather strap. Intentional chaos.',
      "**Caption:** You don't need more clothes. You need the right things in the right places. Link in bio.",
      '**Hashtags:** #MensStyle #RUMOAR #AccessoriesForMen #MensJewelry #IndianMensFashion',
    ],
  },
  hero: {
    title: 'HERO CONTENT — Start a Rumour',
    content: [
      '**Hook:** There is something new in town. And it is not a brand. It is a feeling.',
      '**Visual Direction (Higgsfield):** Slow cinematic push on a man adjusting his collar — neck pendant catches light.',
      '**Caption:** RUMOAR. One destination. Every detail. The complete look.',
      '**CTA:** Follow to be the first to know.',
      '**Tone:** Mysterious. Understated. Premium.',
    ],
  },
  styling: {
    title: 'HUB CONTENT — How To Stack',
    content: [
      '**Hook:** 3 rules for wearing 3 things at once without looking like a jewellery store.',
      '**Rule 1:** Metals match. Gold chain, gold watch. Non-negotiable.',
      '**Rule 2:** One statement, the rest whisper. Big ring means subtle bracelet.',
      '**Rule 3:** Neck and wrist never compete. Choose your moment.',
      '**Closing:** This is the playbook. RUMOAR ships the pieces.',
    ],
  },
};

type ContentType = 'carousel' | 'hero' | 'styling';

const AIWorkflow: React.FC = () => {
  const [selected, setSelected] = useState<ContentType | null>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'complete'>('idle');
  const [logs, setLogs] = useState<string[]>([]);
  const [output, setOutput] = useState<{ title: string; content: string[] } | null>(null);
  const logsEndRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const runPipeline = (type: ContentType) => {
    setSelected(type);
    setStatus('loading');
    setLogs([]);
    setOutput(null);

    let step = 0;
    intervalRef.current = setInterval(() => {
      setLogs(prev => {
        if (step < PIPELINE_STEPS.length) {
          const next = [...prev, `> ${PIPELINE_STEPS[step]}`];
          step++;
          return next;
        } else {
          const thought = THINKING_LOGS[Math.floor(Math.random() * THINKING_LOGS.length)];
          const next = [...prev, thought];
          return next.length > 14 ? next.slice(1) : next;
        }
      });
    }, 900);

    setTimeout(() => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      setOutput(OUTPUTS[type]);
      setStatus('complete');
    }, 5000);
  };

  const reset = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setStatus('idle');
    setSelected(null);
    setLogs([]);
    setOutput(null);
  };

  useEffect(() => {
    if (logsEndRef.current && status === 'loading') {
      logsEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [logs, status]);

  useEffect(() => () => { if (intervalRef.current) clearInterval(intervalRef.current); }, []);

  const options: { type: ContentType; label: string; desc: string }[] = [
    { type: 'carousel', label: 'Carousel Post', desc: 'Full look + neck + wrist detail slides' },
    { type: 'hero', label: 'Hero Content', desc: 'Start a Rumour — awareness campaign' },
    { type: 'styling', label: 'Styling Guide', desc: 'Hub content — How-to stacking rules' },
  ];

  return (
    <div className="mt-8 bg-[#0a0a0a] rounded-2xl border border-neutral-800 overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.6)]">
      {/* macOS-style terminal header */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-neutral-800 bg-[#111]">
        <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        <span className="ml-auto font-mono text-[11px] text-neutral-500 tracking-wider">rumoar_content_engine_v1.0</span>
      </div>

      <div className="p-6 min-h-[340px] flex flex-col">
        <AnimatePresence mode="wait">

          {/* IDLE STATE — choose a content type */}
          {status === 'idle' && (
            <motion.div
              key="idle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col gap-6 flex-1"
            >
              <div className="font-mono text-sm text-neutral-500">
                <span className="text-brand-accent">$</span> rumoar_engine --ready
                <span className="ml-1 animate-pulse text-brand-accent">▋</span>
              </div>
              <p className="text-xs text-neutral-500 font-mono">Select a content type to simulate the AI pipeline:</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {options.map(opt => (
                  <button
                    key={opt.type}
                    onClick={() => runPipeline(opt.type)}
                    className="group flex flex-col gap-1 p-4 bg-neutral-900/60 hover:bg-neutral-800/80 border border-neutral-800 hover:border-brand-accent/50 rounded-xl text-left transition-all duration-200"
                  >
                    <span className="text-sm font-medium text-neutral-200 group-hover:text-brand-accent transition-colors flex items-center gap-2">
                      {opt.label} <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </span>
                    <span className="text-xs text-neutral-500">{opt.desc}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* LOADING STATE — live log stream */}
          {status === 'loading' && (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col gap-4 flex-1 font-mono text-xs"
            >
              <div className="flex items-center gap-3 text-brand-accent">
                <Loader2 size={16} className="animate-spin" />
                <span>Pipeline executing...</span>
              </div>
              <div className="bg-black/40 rounded-lg p-4 border border-neutral-800 flex-1 overflow-y-auto max-h-[240px] space-y-1">
                {logs.map((log, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={`${log.startsWith('~') ? 'text-neutral-600 italic' : 'text-neutral-300'}`}
                  >
                    {log}
                  </motion.div>
                ))}
                <div ref={logsEndRef} />
              </div>
            </motion.div>
          )}

          {/* COMPLETE STATE — formatted output */}
          {status === 'complete' && output && (
            <motion.div
              key="complete"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="flex flex-col gap-4 flex-1"
            >
              <div className="font-mono text-[11px] text-brand-accent border-b border-neutral-800 pb-3 tracking-wider">
                // {output.title}
              </div>
              <div className="space-y-3 flex-1">
                {output.content.map((line, i) => {
                  const [boldPart, ...rest] = line.split(':');
                  const bold = boldPart.replace(/\*\*/g, '');
                  const body = rest.join(':').trim();
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex gap-3 text-sm"
                    >
                      <span className="text-brand-accent font-mono text-xs mt-0.5 shrink-0">→</span>
                      <p className="text-neutral-300 leading-relaxed">
                        <span className="text-white font-medium">{bold}:</span> {body}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
              <button
                onClick={reset}
                className="mt-2 flex items-center gap-2 text-xs text-neutral-500 hover:text-brand-accent transition-colors font-mono w-fit"
              >
                <RotateCcw size={12} /> Run another
              </button>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
};

export default AIWorkflow;
