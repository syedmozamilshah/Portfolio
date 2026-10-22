import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark-bg border-t border-neon-green/20 py-8 text-center font-mono">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-center gap-6 mb-6">
          <a 
            href="https://github.com/syedmozamilshah" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-light-gray hover:text-neon-green transition-colors"
          >
            <FaGithub className="text-2xl" />
          </a>
          <a 
            href="https://www.linkedin.com/in/syed-mozamil-shah-873a26230" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-light-gray hover:text-neon-green transition-colors"
          >
            <FaLinkedin className="text-2xl" />
          </a>
          <a 
            href="mailto:syedmozamilshah99@gmail.com"
            className="text-light-gray hover:text-neon-green transition-colors"
          >
            <FaEnvelope className="text-2xl" />
          </a>
        </div>
        
        <p className="text-light-gray text-sm mb-2">
          Designed & Built by{' '}
          <a 
            href="https://github.com/syedmozamilshah" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-neon-green hover:text-neon-blue transition-colors"
          >
            Syed Mozamil Shah
          </a>
        </p>
        
        <p className="text-gray-400 text-xs">
          © {new Date().getFullYear()} All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;