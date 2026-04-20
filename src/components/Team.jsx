import React from 'react';

const teamMembers = [
  {
    name: 'Dr Mohamed Nehaoua',
    role: 'Fondateur & Orthodontiste',
    bio: 'Pionnier en Algérie pour l\'orthodontie invisible, formé aux plus hauts standards européens.',
    initials: 'MN'
  },
  {
    name: 'Assistantes Dentaires',
    role: 'Soutien Clinique',
    bio: 'Une équipe formée pour garantir des soins doux, précis et un confort patient optimal.',
    initials: 'AD'
  },
  {
    name: 'Staff Accueil',
    role: 'Coordination',
    bio: 'Dédié à faciliter votre parcours, de la première prise de rendez-vous au suivi post-traitement.',
    initials: 'SA'
  }
];

export default function Team() {
  return (
    <section id="equipe" className="py-24 md:py-48 bg-harmony-50/50">
      <div className="section-container">
        <div className="max-w-3xl mb-24 reveal-init">
          <span className="luxury-label !text-harmony-500">L'Équipe Dédiée</span>
          <h2 className="text-4xl md:text-6xl text-harmony-950 mb-8 leading-tight">
            Partageant les valeurs <br />
            <span className="serif-accent italic text-harmony-800">d'écoute & de précision</span>.
          </h2>
          <p className="text-harmony-700 font-light text-xl leading-relaxed">
            Notre centre réunit des professionnels passionnés, formés aux dernières avancées de la dentisterie moderne.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="luxury-glass p-12 border-harmony-100/40 reveal-init hover:shadow-luxury transition-all duration-700">
               <div className="w-16 h-16 rounded-2xl bg-harmony-900 text-white flex items-center justify-center font-display text-xl mb-10 shadow-soft">
                {member.initials}
               </div>
               <h3 className="text-2xl text-harmony-950 mb-3">{member.name}</h3>
               <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-harmony-500 mb-8">{member.role}</p>
               <p className="text-harmony-600 font-light leading-relaxed">
                  {member.bio}
               </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
