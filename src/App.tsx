import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Biography from './components/Biography';
import Timeline from './components/Timeline';
import DNADiscovery from './components/DNADiscovery';
import Curiosities from './components/Curiosities';
import Challenges from './components/Challenges';
import Legacy from './components/Legacy';
import Gallery from './components/Gallery';
import InspirationalQuote from './components/InspirationalQuote';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />
      <Hero />
      <Biography />
      <Timeline />
      <DNADiscovery />
      <Curiosities />
      <Challenges />
      <Legacy />
      <Gallery />
      <InspirationalQuote />
      <Footer />
      {showBackToTop && <BackToTop />}
    </div>
  );
}

export default App;
