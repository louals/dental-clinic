import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function VideoSwap() {
  const [active, setActive] = useState(0);
  const videos = ["/videos/vid1.mp4", "/videos/vid2.mp4"];
  const videoRefs = [useRef(null), useRef(null)];
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  const handleSwap = () => {
    setActive((prev) => (prev === 0 ? 1 : 0));
  };

  // Visibility detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setIsVisible(entries[0].isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Playback control
  useEffect(() => {
    videoRefs.forEach((ref, index) => {
      const video = ref.current;
      if (video) {
        if (isVisible && index === active) {
          video.play().catch(() => {}); // handle potential play() block
        } else {
          video.pause();
        }
      }
    });
  }, [active, isVisible]);

  // Video finished listener
  useEffect(() => {
    const currentVideo = videoRefs[active].current;
    if (currentVideo) {
      const handleEnded = () => handleSwap();
      currentVideo.addEventListener('ended', handleEnded);
      return () => currentVideo.removeEventListener('ended', handleEnded);
    }
  }, [active]);

  const foregroundVariants = {
    visible: { opacity: 1, x: 0, scale: 1, rotate: 0 },
    hidden: { opacity: 0, x: 40, scale: 0.8, rotate: 5 },
  };

  const backgroundVariants = {
    visible: { opacity: 0.4, x: -30, scale: 0.9, rotate: -5 },
    hidden: { opacity: 0, x: 0, scale: 0.8 },
  };

  return (
    <div 
      ref={containerRef}
      className="relative flex justify-center items-center cursor-pointer w-full max-w-md mx-auto aspect-[4/5]"
      onClick={handleSwap}
    >
      {/* Background/Secondary Video */}
      <motion.div
        className="absolute w-full h-full rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl"
        animate={active === 0 ? "visible" : "hidden"}
        variants={backgroundVariants}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <video
          ref={videoRefs[1]}
          src={videos[1]}
          className="w-full h-full object-cover blur-md brightness-50"
          muted
          playsInline
        />
      </motion.div>

      {/* Main Foreground Video (Slide 1) */}
      <AnimatePresence mode="popLayout">
        {active === 0 && (
          <motion.div
            key="vid0"
            className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/20 z-10"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={foregroundVariants}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
          >
            <video
              ref={videoRefs[0]}
              src={videos[0]}
              className="w-full h-full object-cover"
              muted
              playsInline
            />
            <div className="absolute inset-0 bg-gradient-to-t from-harmony-900/40 to-transparent pointer-events-none" />
          </motion.div>
        )}

        {/* Main Foreground Video (Slide 2) */}
        {active === 1 && (
          <motion.div
            key="vid1"
            className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/20 z-10"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={foregroundVariants}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
          >
            <video
              ref={videoRefs[1]}
              src={videos[1]}
              className="w-full h-full object-cover"
              muted
              playsInline
            />
            <div className="absolute inset-0 bg-gradient-to-t from-harmony-900/40 to-transparent pointer-events-none" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hint */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[10px] font-bold tracking-[0.3em] uppercase text-harmony-400 opacity-50 group-hover:opacity-100 transition-opacity">
        Cliquer pour changer
      </div>
    </div>
  );
}
