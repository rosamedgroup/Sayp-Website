
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import BrewSuggestion from './components/BrewSuggestion';
import Footer from './components/Footer';
import Pattern from './components/Pattern';
import AnimatedSection from './components/AnimatedSection';

const App: React.FC = () => {
  return (
    <div className="bg-[#CAD4D3] text-[#6B5050] min-h-screen overflow-x-hidden relative">
      <div className="absolute inset-0 z-0 opacity-20">
        <Pattern />
      </div>
      <div className="relative z-10">
        <Header />
        <main>
          <AnimatedSection>
            <Hero />
          </AnimatedSection>
          <AnimatedSection>
            <About />
          </AnimatedSection>
          <AnimatedSection>
            <Menu />
          </AnimatedSection>
          <AnimatedSection>
            <BrewSuggestion />
          </AnimatedSection>
          <AnimatedSection>
            <Gallery />
          </AnimatedSection>
        </main>
        <AnimatedSection>
          <Footer />
        </AnimatedSection>
      </div>
    </div>
  );
};

export default App;