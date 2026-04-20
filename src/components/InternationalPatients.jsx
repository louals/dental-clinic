import React from 'react';
import { motion } from 'framer-motion';

const countries = [
  { name: 'France', code: 'FR', img: '/flags/fr.png' },
  { name: 'Tunisie', code: 'TN', img: '/flags/tn.png' },
  { name: 'Libye', code: 'LY', img: '/flags/ly.png' },
  { name: 'Canada', code: 'CA', img: '/flags/ca.png' },
  { name: 'États-Unis', code: 'US', img: '/flags/us.png' },
  { name: 'Royaume-Uni', code: 'UK', img: '/flags/uk.png' },
  { name: 'Italie', code: 'IT', img: '/flags/it.png' },
  { name: 'Chine', code: 'CN', img: '/flags/cn.png' },
];

export default function InternationalPatients() {
  return (
    <section className="py-24 bg-harmony-950 overflow-hidden relative">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-harmony-500/5 rounded-full blur-[120px]" />

      <div className="section-container relative z-10">
        <div className="text-center mb-20 px-4">
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
            className="text-4xl md:text-5xl text-white mb-8"
          >
            Des patients venus de <br />
            <span className="serif-accent italic text-harmony-500">plusieurs pays</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-white/40 text-lg font-light max-w-2xl mx-auto"
          >
            Nous accompagnons des patients de différentes nationalités avec les plus hauts standards européens.
          </motion.p>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="flex flex-wrap justify-center gap-6 md:gap-10"
        >
          {countries.map((country, idx) => (
            <motion.div 
              key={idx} 
              variants={{
                hidden: { scale: 0.8, opacity: 0 },
                visible: { scale: 1, opacity: 1 }
              }}
              whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
              className="flex flex-col items-center gap-4 group"
            >
              {/* CIRCLES instead of emojis */}
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/5 border border-white/10 overflow-hidden flex items-center justify-center p-0 shadow-luxury group-hover:border-harmony-400 transition-colors">
                <img 
                  src={country.img} 
                  alt={country.name} 
                  className="w-full h-full object-cover scale-110"
                />
              </div>
              <span className="text-white/40 group-hover:text-white transition-colors text-[10px] font-bold tracking-[0.4em] uppercase">
                {country.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-20 text-center">
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