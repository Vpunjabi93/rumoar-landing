import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';
import Canvas3D from './Canvas3D';
import ErrorBoundary from './ErrorBoundary';

const Hero: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const scrollToPhilosophy = () => {
    const el = document.querySelector('#philosophy');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full min-h-[100svh] flex items-center overflow-hidden border-b border-brand-gray pt-16">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-60">
        <ErrorBoundary>
          <Canvas3D />
        </ErrorBoundary>
      </div>

      {/* Video — pinned to the far right, full section height on desktop */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
        className="hidden md:block absolute right-0 top-0 bottom-0 z-20 w-[280px] lg:w-[320px] xl:w-[360px]"
      >
        <div className="relative h-full group">
          <video
            ref={videoRef}
            src={`${import.meta.env.BASE_URL}videos/intro.mp4`}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
          {/* Left fade so it blends into the dark background */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-transparent to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

          <button
            onClick={toggleMute}
            className="absolute top-20 right-4 p-2 bg-black/50 hover:bg-black/80 backdrop-blur rounded-full text-white transition-colors z-30"
          >
            {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>

          <div className="absolute bottom-10 left-4 right-4 text-center pointer-events-none">
            <p className="text-xs uppercase tracking-widest text-brand-accent font-medium">The Baseline</p>
          </div>
        </div>
      </motion.div>

      {/* Left content */}
      <div className="relative z-10 container mx-auto px-6 py-16 flex flex-col justify-center items-start text-left md:pr-[300px] lg:pr-[340px] xl:pr-[380px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="max-w-2xl w-full"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-brand-accent font-medium tracking-[0.2em] uppercase text-sm mb-4"
          >
            Round Two
          </motion.p>
          <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.9] tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-br from-brand-light to-neutral-500">
            RUMOAR
          </h1>
          <p className="text-xl md:text-2xl text-neutral-400 max-w-xl font-light mb-10">
            Every fashion thing a man needs to feel like himself — right here, in one place.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-6">
            <div className="flex flex-col gap-5 items-start">
              <p className="text-neutral-400 max-w-xs text-sm">
                We're not here to change a man. We're here to make him proud of his personality.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToPhilosophy}
                className="px-8 py-4 bg-brand-light text-brand-dark font-medium rounded-full hover:bg-brand-accent transition-colors"
              >
                Discover the philosophy
              </motion.button>
            </div>

            {/* Mobile-only video (shown below button on small screens) */}
            <div className="block md:hidden w-[160px] h-[285px] bg-brand-dark rounded-xl overflow-hidden border border-neutral-800 shadow-[0_0_40px_rgba(212,175,55,0.15)] relative group shrink-0 self-center">
              <video
                src={`${import.meta.env.BASE_URL}videos/intro.mp4`}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-0 right-0 text-center pointer-events-none">
                <p className="text-[10px] uppercase tracking-widest text-brand-accent font-medium">The Baseline</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-[10px] uppercase tracking-widest text-neutral-500">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-accent to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
