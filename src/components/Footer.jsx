import React from 'react';

export default function Footer() {
  return (
    <footer className="py-24 bg-white border-t border-harmony-100">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-start gap-20">
          
          <div className="max-w-md">
            <div className="flex items-center gap-8 mb-12">
              <img src="/image.png" alt="Harmony" className="w-32 h-32 object-contain" />
              <div className="flex flex-col">
                <span className="font-display font-light text-3xl tracking-[0.2em] uppercase text-harmony-900">
                  Harmony
                </span>
                <span className="text-[10px] font-bold tracking-[0.6em] uppercase text-harmony-700">
                  Dental Clinic
                </span>
              </div>
            </div>
            <p className="text-harmony-700 font-light leading-relaxed text-lg">
              L'excellence du soin au service de votre bien-être. Profitez d'une technologie de pointe dans un cadre inspirant la sérénité.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-24">
            <div>
              <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-harmony-900 mb-10 border-b border-harmony-100 pb-2">Navigation</h4>
              <ul className="space-y-6">
                <li><a href="#accueil" className="text-[10px] font-bold tracking-[0.15em] uppercase text-harmony-700 hover:text-harmony-900 transition-colors">L'Expérience</a></li>
                <li><a href="#services" className="text-[10px] font-bold tracking-[0.15em] uppercase text-harmony-700 hover:text-harmony-900 transition-colors">Expertise</a></li>
                <li><a href="#apropos" className="text-[10px] font-bold tracking-[0.15em] uppercase text-harmony-700 hover:text-harmony-900 transition-colors">Le Cabinet</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-harmony-900 mb-10 border-b border-harmony-100 pb-2">Contact</h4>
              <ul className="space-y-6">
                <li className="text-[10px] font-bold tracking-[0.15em] uppercase text-harmony-700">Instagram</li>
                <li className="text-[10px] font-bold tracking-[0.15em] uppercase text-harmony-700">LinkedIn</li>
              </ul>
            </div>
          </div>

        </div>

        <div className="mt-40 pt-10 border-t border-harmony-50 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-harmony-300">
            © 2026 Harmony Dental Clinic. Excellence en Harmonie.
          </div>
          <div className="flex gap-12 text-[10px] font-bold tracking-[0.3em] uppercase text-harmony-300">
            <a href="#" className="hover:text-harmony-900 transition-colors">Mentions</a>
            <a href="#" className="hover:text-harmony-900 transition-colors">Vie Privée</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
