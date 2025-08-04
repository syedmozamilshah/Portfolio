import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import GlobalStyles from './styles/GlobalStyles';
import CursorTracker from './components/CursorTracker';
import TerminalIntro from './components/TerminalIntro';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';
import Certifications from './pages/Certifications';
import Achievements from './pages/Achievements';
import Skills from './pages/Skills';
import Publications from './pages/Books';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // Terminal intro duration: ~8 seconds (6 lines * 1s delay + 2s for final fade)
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-dark-bg min-h-screen text-neon-green font-mono">
      <GlobalStyles />
      <CursorTracker />
      
      <AnimatePresence mode="wait">
        {showIntro ? (
          <TerminalIntro key="intro" />
        ) : (
          <motion.div
            key="main-app"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Router>
              <Navbar />
              <main className="min-h-screen">
                <Routes>
                  <Route path="/" element={<Landing />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/certifications" element={<Certifications />} />
                  <Route path="/achievements" element={<Achievements />} />
                  <Route path="/skills" element={<Skills />} />
                  <Route path="/publications" element={<Publications />} />
                  <Route path="/resume" element={<Resume />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/blogs" element={<Blogs />} />
                </Routes>
              </main>
              <Footer />
            </Router>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
