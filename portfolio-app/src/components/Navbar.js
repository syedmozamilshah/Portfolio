import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`fixed w-full backdrop-blur-lg bg-dark-bg ${scrolled ? 'bg-opacity-95 shadow-lg' : 'bg-opacity-75'} flex items-center justify-between px-6 py-4 z-50 transition-all duration-300`}>
      <div className="text-neon-green text-xl font-mono font-bold">
        <Link to="/">
          <motion.div whileHover={{ y: -3 }} className="inline-block">
            <span className="text-white">syed</span>
            <span className="text-neon-green">Mozamil</span>
            <span className="text-white">Shah</span>
          </motion.div>
        </Link>
      </div>

      <div className="flex items-center">
        <div className="hidden md:flex space-x-6">
          <Link 
            to="/" 
            className={`relative hover:text-neon-green transition-colors ${
              isActive('/') ? 'text-neon-green' : 'text-gray-300'
            }`}
          >
            Home
            {isActive('/') && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-neon-green"></span>}
          </Link>
          <Link 
            to="/projects" 
            className={`relative hover:text-neon-green transition-colors ${
              isActive('/projects') ? 'text-neon-green' : 'text-gray-300'
            }`}
          >
            Projects
            {isActive('/projects') && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-neon-green"></span>}
          </Link>
          <Link 
            to="/certifications" 
            className={`relative hover:text-neon-green transition-colors ${
              isActive('/certifications') ? 'text-neon-green' : 'text-gray-300'
            }`}
          >
            Certifications
            {isActive('/certifications') && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-neon-green"></span>}
          </Link>
          <Link 
            to="/achievements" 
            className={`relative hover:text-neon-green transition-colors ${
              isActive('/achievements') ? 'text-neon-green' : 'text-gray-300'
            }`}
          >
            Achievements
            {isActive('/achievements') && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-neon-green"></span>}
          </Link>
          <Link 
            to="/skills" 
            className={`relative hover:text-neon-green transition-colors ${
              isActive('/skills') ? 'text-neon-green' : 'text-gray-300'
            }`}
          >
            Skills
            {isActive('/skills') && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-neon-green"></span>}
          </Link>
          <Link 
            to="/publications" 
            className={`relative hover:text-neon-green transition-colors ${
              isActive('/publications') ? 'text-neon-green' : 'text-gray-300'
            }`}
          >
            Publications
            {isActive('/publications') && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-neon-green"></span>}
          </Link>
          <Link 
            to="/contact" 
            className={`relative hover:text-neon-green transition-colors ${
              isActive('/contact') ? 'text-neon-green' : 'text-gray-300'
            }`}
          >
            Contact
            {isActive('/contact') && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-neon-green"></span>}
          </Link>
          <a 
            href={require('../resume/Syed Mozamil Shah (Resume).pdf')} 
            target="_blank" 
            rel="noopener noreferrer"
            className="ml-4 px-4 py-2 border border-neon-green text-neon-green rounded hover:bg-neon-green hover:text-dark-bg transition-colors"
          >
            Resume
          </a>
        </div>

        <button 
          className="md:hidden text-neon-green focus:outline-none text-2xl" 
          onClick={toggleMenu}
        >
          {isOpen ? '✕' : '☰'}
        </button>

        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden absolute top-full left-0 right-0 bg-dark-bg bg-opacity-95 backdrop-blur-lg shadow-lg`}>
          <div className="flex flex-col p-6 space-y-4">
            <Link to="/" className="hover:text-neon-green transition-colors" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/projects" className="hover:text-neon-green transition-colors" onClick={() => setIsOpen(false)}>Projects</Link>
            <Link to="/certifications" className="hover:text-neon-green transition-colors" onClick={() => setIsOpen(false)}>Certifications</Link>
            <Link to="/achievements" className="hover:text-neon-green transition-colors" onClick={() => setIsOpen(false)}>Achievements</Link>
            <Link to="/skills" className="hover:text-neon-green transition-colors" onClick={() => setIsOpen(false)}>Skills</Link>
            <Link to="/publications" className="hover:text-neon-green transition-colors" onClick={() => setIsOpen(false)}>Publications</Link>
            <Link to="/contact" className="hover:text-neon-green transition-colors" onClick={() => setIsOpen(false)}>Contact</Link>
            <a 
              href={require('../resume/Syed Mozamil Shah (Resume).pdf')} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 border border-neon-green text-neon-green rounded hover:bg-neon-green hover:text-dark-bg transition-colors text-center"
              onClick={() => setIsOpen(false)}
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
