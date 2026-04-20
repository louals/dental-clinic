import React from 'react';
import CabinetSlider from './CabinetSlider';

export default function About() {
  return (
    <section id="apropos" className="py-24 md:py-48 bg-white relative overflow-hidden">
      {/* Decorative light */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-harmony-50 rounded-full blur-[120px] opacity-80" />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          
          <div className="order-2 lg:order-1 reveal-init">
            <span className="luxury-label !text-harmony-500">L'Excellence Harmony</span>
            <h2 className="text-4xl md:text-6xl text-harmony-950 mb-10 leading-tight">
              Dr Mohamed <span className="serif-accent italic text-harmony-800">Nehaoua</span>
            </h2>
            
            <p className="text-harmony-500 text-xs font-bold tracking-[0.3em] uppercase mb-8">
              Orthodontie par aligneurs — Diplômé en France
            </p>

            <div className="space-y-8 text-harmony-700 font-light text-lg md:text-xl leading-relaxed">
              <p>
                Fondateur et dirigeant de Harmony Dental Center à Sétif, je me consacre exclusivement aux traitements par aligneurs transparents, une méthode innovante et confortable adaptée à tous les âges.
              </p>
              <p>
                Mon parcours international et mes affiliations à la <strong>SFOPA</strong> (France) et l'<strong>EAS</strong> (Europe) témoignent d'un engagement total envers l'excellence et les standards européens les plus exigeants.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
              <div className="p-6 bg-harmony-50 rounded-3xl border border-harmony-100">
                <div className="text-harmony-900 font-bold text-sm mb-2">Excellence</div>
                <div className="text-xs text-harmony-600 leading-relaxed italic">Soins primés avec une technologie de pointe.</div>
              </div>
              <div className="p-6 bg-harmony-50 rounded-3xl border border-harmony-100">
                <div className="text-harmony-900 font-bold text-sm mb-2">Sécurité</div>
                <div className="text-xs text-harmony-600 leading-relaxed italic">Normes les plus élevées en stérilisation.</div>
              </div>
            </div>
            
            <div className="mt-20">
              <a href="#contact" className="btn-luxury">
                Plus d'informations
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative reveal-init">
            <CabinetSlider />
            
          
          </div>

        </div>
      </div>
    </section>
  );
}
