import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Team from './components/Team';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import InternationalPatients from './components/InternationalPatients';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TVDisplay from './components/TVDisplay';
import FloatingContact from './components/FloatingContact';
import BackToTop from './components/BackToTop';
import { useReveal } from './hooks/useReveal';

// Main Site Component
const Home = () => {
  // Reveal hook remains for traditional scroll reveal if needed, 
  // but many sections now use direct Framer Motion within the component.
  useReveal();
  
  return (
    <div className="min-h-screen relative bg-white">
      <Navbar />
      
      <main>
        <Hero />
        <Services />
        <About />
        <InternationalPatients />
        <Team />
        <Gallery />
        <Testimonials />
        <Location />
        <Contact />
      </main>

      <Footer />
      
      {/* Interactive Utilities */}
      <FloatingContact />
      <BackToTop />
      
      {/* Hidden TV Mode Trigger */}
      <Link 
        to="/tv"
        className="fixed bottom-4 left-4 z-50 w-10 h-10 flex items-center justify-center opacity-0 hover:opacity-20 transition-opacity bg-harmony-900/10 rounded-full text-xl"
        title="Ouvrir Mode TV"
      >
        📺
      </Link>
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tv" element={<TVDisplay />} />
    </Routes>
  );
}

export default App;
