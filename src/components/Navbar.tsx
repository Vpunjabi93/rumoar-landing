import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { label: 'The Problem', href: '#philosophy' },
  { label: 'The Proof', href: '#voice' },
  { label: 'The Playbook', href: '#traction' },
  { label: 'Part 3', href: '#part3' },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-xl border-b border-brand-gray shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="text-lg font-display font-bold tracking-[0.2em] text-brand-light hover:text-brand-accent transition-colors"
        >
          RUMOAR
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNav(e, item.href)}
              className="text-xs uppercase tracking-widest text-neutral-400 hover:text-brand-accent transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#traction"
          onClick={(e) => handleNav(e, '#traction')}
          className="text-xs uppercase tracking-widest px-4 py-2 border border-brand-accent/50 text-brand-accent rounded-full hover:bg-brand-accent hover:text-brand-dark transition-all duration-200"
        >
          The Playbook
        </a>
      </div>
    </motion.header>
  );
};

export default Navbar;
