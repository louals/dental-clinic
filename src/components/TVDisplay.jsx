import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const tvSlides = [
  {
    title: "Expertise Certifiée",
    subtitle: "Standards Européens",
    content: "Dr. Nehaoua — Membre de la SFOPA (France) & EAS (Europe).",
    bg: "/luxury-lobby.png"
  },
  {
    title: "Votre Sourire",
    subtitle: "Notre Engagement",
    content: "Plus de 5000 patients nous ont confié leur confiance à Sétif.",
    bg: "/smile-lifestyle.png"
  },
  {
    title: "Technologie 3D",
    subtitle: "Innovation Harmony",
    content: "Précision millimétrique grâce au flux numérique intégral.",
    bg: "/hero-clinic.png"
  }
];

export default function TVDisplay() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % tvSlides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 bg-harmony-950 text-white flex flex-col items-center justify-center overflow-hidden z-[9999]">
      {/* Background Cinematic Loop */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.3, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <img
            src={tvSlides[index].bg}
            className="w-full h-full object-cover"
            alt="background"
          />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 w-full h-full flex flex-col md:flex-row items-center px-10 md:px-24 py-16 gap-20">
        
        {/* Left Side: QR & Call to Action */}
        <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left justify-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-8">
              <img src="/image.png" alt="Logo" className="w-24 h-24 object-contain" />
              <div className="flex flex-col">
                <span className="font-display font-light text-4xl tracking-widest uppercase">Harmony</span>
                <span className="text-[10px] font-bold tracking-[0.6em] uppercase text-harmony-500">Dental Center</span>
              </div>
            </div>
          </motion.div>

          <motion.h1 
             className="text-5xl md:text-7xl font-display leading-tight mb-12"
             key={`title-${index}`}
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
          >
            Laissez-nous <br />
            <span className="serif-accent italic text-harmony-500 underline decoration-harmony-400 underline-offset-8">votre avis</span>
          </motion.h1>

          <p className="text-white/40 text-xl font-light max-w-lg mb-16 leading-relaxed">
            Votre sourire est notre plus belle récompense. Scannez le QR Code pour partager votre expérience sur Google Maps.
          </p>

          <div className="flex items-center gap-10">
             <div className="p-8 bg-white rounded-[3rem] shadow-2xl relative group">
                {/* QR Code Placeholder - In reality would be a SVG/Img from Google Business link */}
                <div className="w-56 h-56 bg-neutral-100 flex items-center justify-center rounded-2xl border-4 border-harmony-100 overflow-hidden">
                    <img 
                      src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://maps.app.goo.gl/3f8H2kZzG9e7T5fJ8" 
                      alt="QR Code Google Maps" 
                      className="w-full h-full"
                    />
                </div>
                {/* Floating Scan Marker */}
                <div className="absolute -top-4 -right-4 bg-harmony-600 text-white p-4 rounded-full shadow-lg text-[10px] font-bold tracking-widest uppercase animate-pulse">
                   Scanner
                </div>
             </div>
             <div className="hidden lg:flex flex-col gap-4">
                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                   <div className="text-2xl">⭐</div>
                   <div className="text-sm font-bold uppercase tracking-widest">4.9/5 sur Google</div>
                </div>
                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                   <div className="text-2xl">✨</div>
                   <div className="text-sm font-bold uppercase tracking-widest">Sétif Elite Choice</div>
                </div>
             </div>
          </div>
        </div>

        {/* Right Side: Animated Highlights */}
        <div className="hidden md:flex md:w-1/2 h-full flex-col justify-center items-end text-right">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              transition={{ duration: 1 }}
              className="max-w-xl"
            >
              <div className="text-harmony-400 text-sm font-bold tracking-[0.5em] uppercase mb-6 italic">{tvSlides[index].subtitle}</div>
              <h2 className="text-6xl md:text-8xl font-display mb-10 leading-none">{tvSlides[index].title}</h2>
              <div className="w-20 h-1 bg-harmony-500 ml-auto mb-10" />
              <p className="text-white/60 text-2xl font-light leading-relaxed">
                {tvSlides[index].content}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Progress Indicator */}
          <div className="mt-24 flex gap-4">
             {tvSlides.map((_, i) => (
                <div 
                  key={i} 
                  className={`h-1 transition-all duration-700 ${i === index ? 'w-20 bg-harmony-500' : 'w-4 bg-white/10'}`} 
                />
             ))}
          </div>
        </div>
      </div>

      {/* Louange text loop at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/5 backdrop-blur-md py-4 border-t border-white/10 overflow-hidden whitespace-nowrap">
         <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="inline-block text-[10px] font-bold tracking-[0.8em] uppercase opacity-30 text-white"
         >
            • EXCELLENCE DENTAIRE • INNOVATION NUMÉRIQUE • DR NEHAOUA MOHAMED • HARMONY DENTAL CENTER SÉTIF • ORTHODONTIE PAR ALIGNEURS • EXCELLENCE DENTAIRE • INNOVATION NUMÉRIQUE • DR NEHAOUA MOHAMED • HARMONY DENTAL CENTER SÉTIF • ORTHODONTIE PAR ALIGNEURS •
         </motion.div>
      </div>
    </div>
  );
}
