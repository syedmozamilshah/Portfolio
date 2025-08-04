import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';

const TerminalIntro = () => {
  const [currentLine, setCurrentLine] = useState(0);
  const [displayedText, setDisplayedText] = useState([]);
  const [showCursor, setShowCursor] = useState(true);

  const terminalLines = useMemo(() => [
    'sudo welcome',
    'loading profile...',
    'fetching credentials...',
    'AI systems initializing...',
    'status: 💻 Ready',
    'launching portfolio...'
  ], []);

  useEffect(() => {
    if (currentLine < terminalLines.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => [...prev, terminalLines[currentLine]]);
        setCurrentLine(prev => prev + 1);
      }, currentLine === 0 ? 500 : 1000); // First line appears after 500ms, others after 1s

      return () => clearTimeout(timer);
    } else {
      // Hide cursor after all lines are shown
      setTimeout(() => {
        setShowCursor(false);
      }, 1000);
    }
  }, [currentLine, terminalLines]);

  return (
    <motion.div
      className="fixed inset-0 bg-black flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, delay: 1 }}
    >
      <div className="font-mono text-lg md:text-xl">
        {displayedText.map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="mb-2 text-terminal-green"
          >
            <span className="text-neon-green mr-2">$</span>
            <TypewriterText text={line} speed={20} />
          </motion.div>
        ))}
        
        {showCursor && (
          <motion.div
            className="inline-block w-3 h-6 bg-neon-green ml-1"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          />
        )}
      </div>
    </motion.div>
  );
};

// Custom Typewriter component
const TypewriterText = ({ text, speed = 40 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, speed]);

  return <span>{displayText}</span>;
};

export default TerminalIntro;
