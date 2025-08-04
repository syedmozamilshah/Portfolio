import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CodeBlock = ({ code, output, delay = 0 }) => {
  const [displayCode, setDisplayCode] = useState('');
  const [showOutput, setShowOutput] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < code.length) {
        setDisplayCode(prev => prev + code[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      } else if (!showOutput) {
        // Show output after code is fully typed
        setTimeout(() => {
          setShowOutput(true);
        }, 500);
      }
    }, 50); // Typing speed

    return () => clearTimeout(timer);
  }, [currentIndex, code, showOutput]);

  return (
    <motion.div 
      className="bg-dark-gray border border-neon-green/30 rounded-lg p-4 font-mono text-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      {/* Terminal header */}
      <div className="flex items-center mb-2 pb-2 border-b border-neon-green/20">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <span className="ml-4 text-light-gray text-xs">terminal</span>
      </div>

      {/* Code section */}
      <div className="mb-4">
        <pre className="text-neon-green whitespace-pre-wrap">
          <code>
            {displayCode.split('\n').map((line, index) => (
              <div key={index} className="mb-1">
                {highlightSyntax(line)}
              </div>
            ))}
            {currentIndex < code.length && (
              <span className="inline-block w-2 h-4 bg-neon-green animate-blink ml-1" />
            )}
          </code>
        </pre>
      </div>

      {/* Output section */}
      {showOutput && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="border-t border-neon-green/20 pt-2"
        >
          <div className="text-neon-blue text-xs mb-1">{"// Output:"}</div>
          <div className="text-terminal-green bg-black/30 p-2 rounded">
            {output}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

// Simple syntax highlighting function
const highlightSyntax = (line) => {
  // Keywords
  let highlighted = line.replace(
    /\b(const|let|var|function|return|new|class|import|export|from)\b/g,
    '<span class="text-neon-blue">$1</span>'
  );
  
  // Strings
  highlighted = highlighted.replace(
    /(['"`])((?:(?!\1)[^\\]|\\.)*)\1/g,
    '<span class="text-green-400">$1$2$1</span>'
  );
  
  // Comments
  highlighted = highlighted.replace(
    /(\/\/.*$)/gm,
    '<span class="text-gray-400">$1</span>'
  );
  
  // Method calls
  highlighted = highlighted.replace(
    /\.([a-zA-Z_$][a-zA-Z0-9_$]*)(\()/g,
    '.<span class="text-yellow-400">$1</span>$2'
  );

  return <span dangerouslySetInnerHTML={{ __html: highlighted }} />;
};

export default CodeBlock;
