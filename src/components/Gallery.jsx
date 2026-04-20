import React, { useRef } from 'react';
import { ArrowRight } from 'lucide-react'; // Assuming you use lucide-react, or use a standard SVG

const galleryItems = [
  { title: 'Sourire 1', id: 'gallery-1', src: '/img1.jpg' },
  { title: 'Sourire 2', id: 'gallery-2', src: '/img2.jpg' },
  { title: 'Sourire 3', id: 'gallery-3', src: '/img3.jpg' },
  { title: 'Sourire 4', id: 'gallery-4', src: '/img4.jpg' },
];

export default function Gallery() {
  const scrollRef = useRef(null);

  const scrollNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section id="gallerie" className="py-24 md:py-48 bg-white overflow-hidden">
      <div className="section-container pl-4 md:pl-20"> {/* Left padding aligned with layout */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 pr-4 md:pr-20">
          <div className="max-w-2xl">
            <span className="luxury-label !text-harmony-500">Portfolio</span>
            <h2 className="text-5xl md:text-7xl text-harmony-950 leading-tight">
              L'Art de <span className="serif-accent italic text-harmony-800">l'Esthétique</span>
            </h2>
          </div>
          
          {/* Slider Controls */}
          <button 
            onClick={scrollNext}
            className="hidden md:flex items-center gap-4 group cursor-pointer"
          >
            <span className="text-[10px] font-bold tracking-[.4em] uppercase text-harmony-400 group-hover:text-harmony-950 transition-colors">Suivant</span>
            <div className="w-12 h-12 rounded-full border border-harmony-100 flex items-center justify-center group-hover:bg-harmony-950 group-hover:border-harmony-950 transition-all">
              <ArrowRight className="w-4 h-4 text-harmony-400 group-hover:text-white transition-colors" />
            </div>
          </button>
        </div>

        {/* Horizontal Scroll Container */}
        <div 
          ref={scrollRef}
          className="flex gap-6 md:gap-10 overflow-x-auto no-scrollbar pb-12 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {galleryItems.map((item) => (
            <div 
              key={item.id} 
              className="relative flex-none w-[85vw] md:w-[450px] aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-harmony-50 snap-start"
            >
              <img 
                src={item.src} 
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-harmony-950/40 via-transparent to-transparent pointer-events-none" />
            </div>
          ))}
          
          {/* Ghost spacer to allow scrolling past the last item comfortably */}
          <div className="flex-none w-4 md:w-20" />
        </div>

        <div className="mt-12 flex justify-center pr-4 md:pr-20">
           <a 
             href="https://instagram.com" 
             target="_blank" 
             rel="noopener noreferrer"
             className="py-5 px-10 border border-harmony-100 rounded-full text-harmony-400 text-[10px] font-bold tracking-[.4em] uppercase hover:bg-harmony-50 transition-all"
           >
             Découvrir la suite sur Instagram
           </a>
        </div>
      </div>
    </section>
  );
}