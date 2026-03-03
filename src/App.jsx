import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Education from './components/sections/Education';
import Certificates from './components/sections/Certificates';
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
      <div className="bg-primary min-h-screen text-main font-sans selection:bg-accent selection:text-primary transition-colors duration-300 relative">
        {loading ? (
          <Loader onFinished={() => setLoading(false)} />
        ) : (
          <>
            <Background3D />
            <Navbar />
            <main>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Education />
              <Certificates />
              <YouTube />
              <Contact />
            </main>
            <Footer />
            <BackToTop />
          </>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
