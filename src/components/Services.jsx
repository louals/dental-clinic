import React from 'react';
import { motion } from 'framer-motion';

const mainServices = [
  { title: 'Dentisterie Générale', description: 'Soins complets de santé bucco-dentaire.', id: '01' },
  { title: 'Dentisterie Esthétique', description: 'Blanchiment, facettes et soins esthétiques.', id: '02' },
  { title: 'Orthodontie', description: 'Aligneurs transparents modernes pour tous.', id: '03' },
  { title: 'Chirurgie Buccale', description: 'Extractions expertes et pose d’implants.', id: '04' },
  { title: 'Soins Pédiatriques', description: 'Soins spécialisés pour enfants en douceur.', id: '05' },
  { title: 'Urgence 24h', description: 'Assistance immédiate jour et nuit.', id: '06' }
];

export default function Services() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section id="services" className="py-24 md:py-48 bg-white overflow-hidden">
      <div className="section-container">
        
        {/* Header Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-20 items-end mb-20 md:mb-32 px-4 md:px-0">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8"
          >
            <span className="luxury-label !text-harmony-500">Nos Services</span>
            <h2 className="text-4xl sm:text-5xl md:text-7xl text-harmony-950 leading-[1.1]">
              Solutions dentaires <br />
              <span className="serif-accent italic text-harmony-800">complètes à Sétif</span>.
            </h2>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 lg:text-right"
          >
            <p className="text-harmony-500 font-light text-lg md:text-xl">
              Chez Harmony Dental Center, nous allions rigueur et passion.
            </p>
          </motion.div>
        </div>

        {/* Main Services Grid */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-harmony-100 border border-harmony-100 rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-luxury mb-24"
        >
          {mainServices.map((service, idx) => (
            <motion.div 
              variants={item}
              key={idx} 
              className="group bg-white p-10 md:p-16 transition-all duration-700 hover:bg-harmony-950"
            >
              <div className="text-harmony-700 text-4xl sm:text-5xl font-display font-thin mb-10 group-hover:text-harmony-400 transition-colors duration-700">
                {service.id}
              </div>
              <h3 className="text-xl sm:text-2xl text-harmony-950 mb-4 group-hover:text-white transition-colors">
                {service.title}
              </h3>
              <p className="text-harmony-600 font-light text-sm leading-relaxed mb-10 opacity-70 group-hover:opacity-100 group-hover:text-white/60">
                {service.description}
              </p>
              <motion.div 
                whileHover={{ x: 5 }}
                className="w-10 h-10 rounded-full border border-harmony-100 flex items-center justify-center group-hover:border-white group-hover:text-white transition-all"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
