import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Hackathons from './components/sections/Hackathons';
import Education from './components/sections/Education';
import Certificates from './components/sections/Certificates';
import CodingStats from './components/sections/CodingStats';
import YouTube from './components/sections/YouTube';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import Loader from './components/common/Loader';
import BackToTop from './components/common/BackToTop';

import Background3D from './components/common/Background3D';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <ThemeProvider>
        <div className="bg-primary min-h-screen text-main font-sans selection:bg-accent selection:text-onaccent transition-colors duration-300 relative overflow-x-hidden">
        {loading ? (
          <Loader onFinished={() => setLoading(false)} />
        ) : (
          <div className="relative z-10">
            <Background3D />
            <Navbar />
            <main className="relative z-10">
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Hackathons />
              <Certificates />
              <CodingStats />
              <YouTube />
              <Contact />
            </main>
            <Footer />
            <BackToTop />
          </div>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
