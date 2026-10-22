import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience & Resume', path: '/resume' },
    { name: 'Certifications', path: '/certifications' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'Skills', path: '/skills' },
    { name: 'Publications', path: '/publications' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-3 bg-dark-bg/90 shadow-2xl shadow-black/80' 
          : 'py-5 bg-dark-bg/60'
      }`}
      style={{
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(0, 255, 171, 0.12)',
      }}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="text-xl font-mono font-bold tracking-tight group">
          <motion.div whileHover={{ scale: 1.05 }} className="inline-flex items-center gap-1.5">
            <span className="text-neon-green">&lt;</span>
            <span className="text-white group-hover:text-neon-green transition-colors">syed</span>
            <span className="text-neon-green">Mozamil</span>
            <span className="text-white group-hover:text-neon-green transition-colors">Shah</span>
            <span className="text-neon-green">/&gt;</span>
          </motion.div>
        </Link>

        {/* Desktop Nav Items */}
        <div className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative px-3.5 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-200 ${
                isActive(link.path)
                  ? 'text-neon-green'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.name}
              {isActive(link.path) && (
                <motion.div
                  layoutId="activeNavIndicator"
                  className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full"
                  style={{
                    background: 'linear-gradient(90deg, #00FFAB, #00B2FF)',
                    boxShadow: '0 0 10px #00FFAB',
                  }}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}

          <a 
            href="/resume/Syed Mozamil Shah (Resume).pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="ml-3 px-4 py-2 text-xs font-mono font-bold rounded-xl border transition-all duration-300"
            style={{
              borderColor: '#00FFAB',
              color: '#00FFAB',
              background: 'rgba(0, 255, 171, 0.08)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#00FFAB';
              e.currentTarget.style.color = '#0A0F0D';
              e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 255, 171, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(0, 255, 171, 0.08)';
              e.currentTarget.style.color = '#00FFAB';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            PDF CV
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button 
          className="lg:hidden text-neon-green focus:outline-none p-2 rounded-lg bg-white/5"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="lg:hidden px-6 py-6 border-b border-white/10"
          style={{
            background: 'rgba(10, 15, 13, 0.98)',
            backdropFilter: 'blur(20px)',
          }}
        >
          <div className="flex flex-col space-y-3 font-mono text-sm">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                className={`py-2 px-3 rounded-lg ${
                  isActive(link.path) 
                    ? 'text-neon-green bg-neon-green/10 font-bold' 
                    : 'text-gray-300 hover:text-white'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="/resume/Syed Mozamil Shah (Resume).pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-2 text-center py-2.5 rounded-xl border border-neon-green text-neon-green font-bold text-xs"
              onClick={() => setIsOpen(false)}
            >
              Download PDF Resume
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
