import React, { useState, useEffect } from 'react';

const slides = [
  {
    image: '/dentist-portrait.jpg',
  },
  {
    image: '/luxury-lobby-1.png',

  }
];

export default function CabinetSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 15000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full aspect-[4/5] rounded-[3rem] overflow-hidden shadow-luxury group">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
         
        </div>
      ))}

      {/* Progress Line */}
      <div className="absolute top-0 left-0 right-0 h-1 z-20 flex gap-1 px-4 py-3">
        {slides.map((_, index) => (
          <div key={index} className="flex-1 h-[2px] bg-white/20 relative overflow-hidden">
            {index === currentSlide && (
              <div 
                key={currentSlide} // Re-run animation on change
                className="absolute inset-0 bg-white/80 origin-left animate-[progress_15s_linear_forwards]"
              />
            )}
          </div>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes progress {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
      `}} />
    </div>
  );
}
