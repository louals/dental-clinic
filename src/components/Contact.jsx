import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-40 bg-harmony-950 relative overflow-hidden">
      {/* Cinematic blue lighting */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-harmony-500/10 rounded-full blur-[150px]" />
      
      <div className="section-container relative z-10 px-4 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
            
            {/* Left Column: Info & BIGGER Map */}
            <div className="flex flex-col h-full">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <span className="luxury-label !text-harmony-400">Prendre Contact</span>
                <h2 className="text-4xl md:text-7xl text-white mb-10 leading-tight">
                  Prêt à transformer <br />
                  <span className="serif-accent text-harmony-500">votre sourire ?</span>
                </h2>
                <p className="text-white/50 text-xl font-light leading-relaxed">
                  Planifiez votre consultation à Sétif dès aujourd'hui.
                </p>
              </motion.div>

              <div className="space-y-12 mb-16">
                <div className="flex flex-col sm:flex-row gap-12">
                   <div>
                    <div className="text-[10px] font-bold tracking-[0.4em] uppercase text-harmony-400 mb-2">Téléphone</div>
                    <div className="text-2xl text-white">+213 559 29 96 62</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold tracking-[0.4em] uppercase text-harmony-400 mb-2">Horaires</div>
                    <div className="text-2xl text-white font-light">Sam - Mer : 08:30</div>
                  </div>
                </div>
              </div>

              {/* BIGGER Map designed to fill the column gracefully */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex-1 min-h-[400px] relative w-full rounded-[3rem] overflow-hidden border border-white/10 shadow-luxury group"
              >
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3220.2659250459237!2d5.4121076!3d36.184414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f315cf2d71ec15%3A0xb46e7a445903d7c!2sHarmony%20Dental%20Center%20%7C%20cabinet%20dentaire%20%7C%20Best%20Dental%20Clinic%20in%20Setif%20%7C%20Algerie%20%7C%20Aligneurs%20%7C%20Implant%20%7C%20Zircone!5e0!3m2!1sen!2sdz!4v1776700970077!5m2!1sen!2sdz" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <div className="absolute top-6 left-6 bg-harmony-950/80 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
                  <span className="text-[10px] font-bold tracking-[0.4em] text-white uppercase">Localiser le centre</span>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Form */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-3xl p-8 md:p-16 lg:p-20 rounded-[3rem] border border-white/10 shadow-2xl self-center"
            >
              <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="div-input border-b border-white/10 pb-4 focus-within:border-harmony-500 transition-colors">
                    <label className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/40">Nom Complet</label>
                    <input type="text" className="w-full bg-transparent text-white text-lg outline-none" placeholder="Votre nom" />
                  </div>
                  <div className="div-input border-b border-white/10 pb-4 focus-within:border-harmony-500 transition-colors">
                    <label className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/40">E-mail</label>
                    <input type="email" className="w-full bg-transparent text-white text-lg outline-none" placeholder="votre@email.com" />
                  </div>
                </div>

                <div className="space-y-2 border-b border-white/10 pb-4 focus-within:border-harmony-500 transition-colors">
                  <label className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/40">Service souhaité</label>
                  <select className="w-full bg-transparent text-white text-lg outline-none appearance-none">
                    <option className="bg-harmony-950">Orthodontie (Aligneurs)</option>
                    <option className="bg-harmony-950">Implantologie</option>
                    <option className="bg-harmony-950">Esthétique Dentaire</option>
                  </select>
                </div>

                <div className="space-y-2 border-b border-white/10 pb-4 focus-within:border-harmony-500 transition-colors">
                  <label className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/40">Message</label>
                  <textarea rows="4" className="w-full bg-transparent text-white text-lg outline-none resize-none" placeholder="Votre demande..."></textarea>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-white text-harmony-950 py-6 rounded-full text-xs font-bold tracking-[0.4em] uppercase hover:bg-harmony-500 hover:text-white transition-all shadow-xl"
                >
                  Envoyer
                </motion.button>
              </form>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}