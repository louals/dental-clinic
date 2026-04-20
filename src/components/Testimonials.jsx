import React from 'react';

const starPath = "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z";

const reviews = [
  { name: 'Skander H.',  initials: 'SH', text: "Des résultats incroyables ! L'équipe était professionnelle et le processus était complètement sans douleur." },
  { name: 'Mohamed B.',  initials: 'MB', text: "La meilleure expérience dentaire que j'aie jamais eue. Mon sourire est incroyable maintenant !" },
  { name: 'Amine H.',    initials: 'AH', text: "Le personnel m'a mis à l'aise tout au long du traitement. Je le recommande vivement !" },
  { name: 'Islam S.',    initials: 'IS', text: "Une approche moderne et humaine. Le suivi par aligneurs est d'une efficacité redoutable." },
];

const Stars = () => (
  <div className="flex gap-1 mb-5">
    {[1, 2, 3, 4, 5].map(s => (
      <svg key={s} className="w-3 h-3 fill-harmony-600" viewBox="0 0 20 20">
        <path d={starPath} />
      </svg>
    ))}
  </div>
);

export default function Testimonials() {
  return (
    <section id="temoignages" className="py-24 md:py-48 bg-white overflow-hidden">
      <div className="section-container px-4 md:px-0">
        
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-24 md:mb-32">
          <span className="luxury-label !text-harmony-600 block mb-4 uppercase tracking-[0.3em] text-xs font-bold">
            Histoires de Réussite
          </span>
          <h2 className="text-4xl md:text-7xl text-harmony-950 leading-tight font-display">
            De vrais résultats pour de <br />
            <span className="serif-accent italic text-harmony-600 font-serif">vrais patients</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((r, i) => (
            <div 
              key={i} 
              className="bg-white border border-harmony-100 rounded-brand p-8 flex flex-col min-h-[320px] transition-all duration-300 hover:border-harmony-300 hover:shadow-luxury group"
            >
              <div className="text-5xl leading-none text-harmony-200 font-serif mb-2 opacity-60 group-hover:text-harmony-600 transition-colors">
                &ldquo;
              </div>
              
              <Stars />
              
              <p className="text-sm leading-relaxed text-harmony-800 italic flex-1 mb-8">
                {r.text}
              </p>
              
              <div className="h-[1px] bg-harmony-50 w-full mb-6" />
              
              <div className="flex items-center gap-4">
                {/* Avatar with Harmony colors */}
                <div className="w-10 h-10 rounded-full bg-harmony-50 border border-harmony-100 flex items-center justify-center text-[10px] font-bold text-harmony-700 shrink-0">
                  {r.initials}
                </div>
                
                <div>
                  <div className="text-[11px] font-bold tracking-widest uppercase text-harmony-950">
                    {r.name}
                  </div>
                  <div className="text-[9px] tracking-widest uppercase text-harmony-400 mt-1 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-harmony-600" />
                    Patient vérifié
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}