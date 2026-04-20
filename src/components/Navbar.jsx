import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navLinks = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Expertise', href: '#services' },
  { label: 'Le Cabinet', href: '#apropos' },
  { label: 'Équipe', href: '#equipe' },
  { label: 'Témoignages', href: '#temoignages' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Define dynamic styles to keep the JSX clean
  const navBg = scrolled 
    ? 'py-4 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-lg' 
    : 'py-6 bg-transparent';
  
  const textMain = scrolled ? 'text-gray-900' : 'text-white';
  const textMuted = scrolled ? 'text-gray-500' : 'text-white/70';
  const buttonStyle = scrolled 
    ? 'bg-harmony-900 text-white hover:bg-harmony-800' 
    : 'bg-white/10 text-white border-white/20 hover:bg-white hover:text-harmony-900';

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "circOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${navBg}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#accueil" className="group flex items-center gap-4">
          <motion.div whileHover={{ scale: 1.05 }} className="relative w-12 h-12 flex items-center justify-center">
            <img 
              src="/image.png" 
              alt="Harmony Logo" 
              className={`w-full h-full object-contain transition-all duration-500 ${scrolled ? '' : 'brightness-0 invert'}`} 
            />
          </motion.div>
          <div className="flex flex-col">
            <span className={`font-display font-light text-xl tracking-[0.15em] uppercase transition-colors duration-500 ${textMain}`}>
              Harmony
            </span>
            <span className="text-[8px] font-bold tracking-[0.5em] uppercase text-harmony-400">
              Dental Center
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              whileHover={{ y: -2 }}
              className={`text-[9px] font-bold tracking-[0.3em] uppercase transition-colors duration-500 ${textMuted} hover:text-harmony-600`}
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        <motion.a
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  href="#contact"
  className={`
    relative overflow-hidden px-8 py-3 rounded-full text-[9px] font-bold tracking-[0.2em] uppercase 
    border transition-colors duration-500 font-display group
    ${scrolled 
      ? 'border-harmony-900 text-harmony-900' 
      : 'border-white text-white'}
  `}
>
  {/* The "Fill" Layer */}
  <span 
    className={`
      absolute inset-0 z-0 translate-y-[101%] transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]
      group-hover:translate-y-0
      ${scrolled ? 'bg-harmony-900' : 'bg-white'}
    `}
  />

  {/* The Text (Must be relative and z-10 to stay on top) */}
  <span className={`
    relative z-10 transition-colors duration-500
    ${scrolled 
      ? 'group-hover:text-white' 
      : 'group-hover:text-harmony-900'}
  `}>
    Prendre RDV
  </span>
</motion.a>
      </div>
    </motion.nav>
  );
}