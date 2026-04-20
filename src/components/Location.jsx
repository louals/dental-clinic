import React from 'react';
import VideoSwap from './VideoSwap';

export default function Location() {
  return (
    <section id="location" className="py-24 md:py-48 bg-harmony-50 overflow-hidden">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          
          <div className="lg:col-span-5 reveal-init">
            <span className="luxury-label !text-harmony-600">Le Centre Harmony</span>
            <h2 className="text-4xl md:text-6xl text-harmony-950 mb-12 leading-tight">
              Rond-point <br />
              <span className="serif-accent italic text-harmony-800">Beaumarché</span>
            </h2>
            
            <div className="space-y-12">
              <div className="flex gap-10 items-start">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-harmony-900 shadow-soft shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                <div>
                  <div className="text-[10px] font-bold tracking-[0.4em] uppercase text-harmony-500 mb-2">Sétif, Algérie</div>
                  <div className="text-xl text-harmony-900 font-light leading-relaxed">
                    Cité Beaumarché, Sétif <br />
                    Axe principal du centre historique.
                  </div>
                </div>
              </div>

              <div className="flex gap-10 items-start">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-harmony-900 shadow-soft shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </div>
                <div>
                  <div className="text-[10px] font-bold tracking-[0.4em] uppercase text-harmony-500 mb-2"> Samedi - Mercredi</div>
                  <div className="text-xl text-harmony-900 font-light">
                    08:00 — 19:30
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-20">
              <a href="#contact" className="btn-luxury">Itinéraire</a>
            </div>
          </div>

          <div className="lg:col-span-7 reveal-init">
            {/* Interactive Video Showcase */}
            <VideoSwap />
          </div>

        </div>
      </div>
    </section>
  );
}
