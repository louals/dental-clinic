import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const tvSlides = [
  {
    title: "Expertise Certifiée",
    subtitle: "Standards Européens",
    content: "Dr. Nehaoua — Membre de la SFOPA (France) & EAS (Europe).",
  },
  {
    title: "Votre Sourire",
    subtitle: "Notre Engagement",
    content: "Plus de 5000 patients nous ont fait confiance à Sétif.",
  },
  {
    title: "Technologie 3D",
    subtitle: "Innovation Harmony",
    content: "Précision millimétrique grâce au flux numérique intégral.",
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
    <div className="fixed inset-0 bg-black text-white flex items-center justify-center overflow-hidden">

      {/* 🔥 Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{
          background: [
            "radial-gradient(circle at 20% 30%, #1a1a2e, #000)",
            "radial-gradient(circle at 80% 70%, #16213e, #000)",
            "radial-gradient(circle at 40% 80%, #0f3460, #000)",
          ]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-10 w-full max-w-7xl px-10 flex flex-col md:flex-row items-center justify-between gap-16">

        {/* LEFT SIDE */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">

          {/* 🔥 BIG LOGO */}
          <div className="relative mb-12 flex flex-col items-center md:items-start">
            
      
            <motion.img
              src="/image.png"
              alt="Harmony Dental Center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative w-40 md:w-56 object-contain invert brightness-0"
            />

            <div className="mt-4 text-[10px] tracking-[0.6em] text-white/40 uppercase">
              Dental Center
            </div>
          </div>

          {/* Title */}
          <motion.h1
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-light leading-tight mb-8"
          >
            Laissez-nous <br />
            <span className="italic text-harmony-400 underline underline-offset-4">
              votre avis
            </span>
          </motion.h1>

          <p className="text-white/50 max-w-md mb-10 text-lg">
            Scannez le QR Code pour partager votre expérience sur Google Maps.
          </p>

          {/* QR + Rating */}
          <div className="flex items-center gap-8">

            {/* ✅ QR FROM LOCAL IMAGE */}
            <div className="p-4 bg-white rounded-2xl shadow-xl">
              <img
                src="/qr.png"
                alt="QR Code"
                className="w-28 h-28 object-contain"
              />
            </div>

            

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden md:flex flex-col items-end text-right max-w-xl">

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-xs tracking-[0.4em] text-white/40 uppercase mb-4">
                {tvSlides[index].subtitle}
              </div>

              <h2 className="text-5xl font-light mb-6 leading-tight">
                {tvSlides[index].title}
              </h2>

              <div className="w-16 h-[2px] bg-harmony-400 ml-auto mb-6" />

              <p className="text-white/50 text-lg leading-relaxed">
                {tvSlides[index].content}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Progress */}
          <div className="mt-16 flex gap-3">
            {tvSlides.map((_, i) => (
              <div
                key={i}
                className={`h-[2px] transition-all duration-500 ${
                  i === index ? "w-16 bg-harmony-400" : "w-3 bg-white/20"
                }`}
              />
            ))}
          </div>

        </div>
      </div>

      {/* Bottom ticker */}
      <div className="absolute bottom-0 w-full overflow-hidden border-t border-white/10">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="whitespace-nowrap text-[10px] tracking-[0.6em] opacity-20 py-3"
        >
          • EXCELLENCE • INNOVATION • HARMONY • ORTHODONTIE • SOURIRE • EXCELLENCE • INNOVATION • HARMONY • • EXCELLENCE • INNOVATION • HARMONY • ORTHODONTIE • SOURIRE • EXCELLENCE • INNOVATION • HARMONY •• EXCELLENCE • INNOVATION • HARMONY • ORTHODONTIE • SOURIRE • EXCELLENCE • INNOVATION • HARMONY •
        </motion.div>
      </div>

    </div>
  );
}