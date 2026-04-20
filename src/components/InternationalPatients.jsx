import React from 'react';
import { motion } from 'framer-motion';

const countries = [
  { name: 'France', img: '/flags/Flag_of_France.png' },
  { name: 'Tunisie', img: '/flags/Flag_of_Tunisia.png' },
  { name: 'Libye', img: '/flags/Flag_of_Libya.png' },
  { name: 'Canada', img: '/flags/Flag_of_Canada.png' },
  { name: 'États-Unis', img: '/flags/Flag_of_the_United_States.png' },
  { name: 'Royaume-Uni', img: '/flags/Flag_of_the_United_Kingdom.png' },
  { name: 'Italie', img: '/flags/Flag_of_Italy.png' },
  { name: 'Chine', img: '/flags/Flag_of_the_People\'s_Republic_of_China.png' },
];

export default function InternationalPatients() {
  // Duplicate for seamless loop
  const marqueeItems = [...countries, ...countries];

  return (
    <section className="py-24 bg-harmony-950 overflow-hidden relative">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-harmony-500/5 rounded-full blur-[120px]" />

      <div className="relative z-10">
        <div className="text-center mb-16 px-4">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="luxury-label !text-harmony-400"
          >
            Rayonnement International
          </motion.span>
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl text-white mb-6"
          >
            Des patients venus de <br />
            <span className="serif-accent italic text-harmony-500">plusieurs pays</span>
          </motion.h2>
        </div>

        {/* Seamless Marquee - ALL IN ONE LINE */}
        <div className="relative flex overflow-hidden py-10">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="flex gap-12 md:gap-20 whitespace-nowrap min-w-max px-12"
          >
            {marqueeItems.map((country, idx) => (
              <div 
                key={idx} 
                className="flex flex-col items-center gap-6 group"
              >
                <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-white/5 border border-white/10 overflow-hidden flex items-center justify-center p-0 shadow-luxury group-hover:border-harmony-400 transition-all duration-500">
                  <img 
                    src={country.img} 
                    alt={country.name} 
                    className="w-full h-full object-cover scale-110"
                  />
                </div>
                <span className="text-white/30 group-hover:text-white transition-colors text-[9px] font-bold tracking-[0.4em] uppercase">
                  {country.name}
                </span>
              </div>
            ))}
          </motion.div>
          
          {/* Fade overlays for the edges */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-harmony-950 to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-harmony-950 to-transparent z-10" />
        </div>

        <div className="mt-16 text-center">
          <motion.div 
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-flex items-center gap-3 py-3 px-6 border border-white/10 rounded-full bg-white/5"
          >
            <span className="w-2 h-2 bg-harmony-400 rounded-full animate-pulse" />
            <span className="text-white/60 text-[10px] font-bold tracking-[0.4em] uppercase">Soins certifiés aux normes internationales</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}