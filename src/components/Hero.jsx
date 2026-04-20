import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="accueil" className="relative h-screen flex items-center justify-center overflow-hidden bg-harmony-950">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-harmony-950/70 via-transparent to-harmony-950/90" />
      </div>

      {/* Content Overlay */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center section-container"
      >
        <motion.div variants={itemVariants}>
          <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.7em] uppercase text-harmony-200 mb-8 sm:mb-10 block">
            Harmony Dental Center — Sétif
          </span>
        </motion.div>
        
        <motion.h1 
          variants={itemVariants}
          className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl text-white mb-10 sm:mb-12 leading-[1.05] font-display tracking-tighter"
        >
          Votre sourire parfait <br /> 
          <span className="serif-accent bg-harmony-400 bg-clip-text text-transparent">commence ici.</span>
        </motion.h1>

        <motion.div variants={itemVariants} className="max-w-3xl mx-auto px-4">
          <p className="text-white/60 text-lg sm:text-xl md:text-2xl font-light leading-relaxed mb-10 sm:mb-14">
            Soins dentaires modernes avec technologie avancée et plans de traitement 
            personnalisés pour toute la famille.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact" 
              className="btn-luxury !bg-white !text-harmony-900 border-none w-full sm:w-auto px-16 group hover:!bg-harmony-500 hover:!text-white transition-all duration-500"
            >
              Prendre rendez-vous
            </motion.a>
            <motion.a 
              whileHover={{ x: 10 }}
              href="#services" 
              className="text-white/80 text-[10px] font-bold tracking-[0.5em] uppercase hover:text-white transition-all flex items-center gap-4 group"
            >
              En savoir plus
              <div className="w-16 h-[1px] bg-white/30 group-hover:w-24 transition-all" />
            </motion.a>
          </div>
        </motion.div>
      </motion.div>

      {/* Stats Quick Ribbon */}
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-0 left-0 right-0 bg-white/5 backdrop-blur-xl border-t border-white/10 hidden md:block z-10"
      >
        <div className="section-container py-8 flex justify-between items-center">
          {[
            { val: '5000+', label: 'Patients satisfaits' },
            { val: '15+', label: 'Ans d\'expérience' },
            { val: '2k+', label: 'Traitements' },
            { val: '99%', label: 'Taux de satisfaction' }
          ].map((stat, i) => (
            <React.Fragment key={i}>
              <div className="flex flex-col text-center">
                <span className="text-2xl text-white font-display">{stat.val}</span>
                <span className="text-[8px] font-bold tracking-[0.3em] uppercase text-harmony-400">{stat.label}</span>
              </div>
              {i < 3 && <div className="w-px h-8 bg-white/10" />}
            </React.Fragment>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
