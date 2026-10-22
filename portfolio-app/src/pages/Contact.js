import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import CodeBlock from '../components/CodeBlock';

const Contact = () => {
  const codeSnippet = {
    code: `engineer.connect({ email: 'syedmozamilshah99@gmail.com' });`,
    output: 'Ready to collaborate 📬'
  };

  return (
    <motion.div 
      initial={{ y: 20, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }} 
      transition={{ duration: 0.6 }}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-4xl font-bold text-neon-blue mb-8 text-center">Contact</h1>
      
      {/* Code Block */}
      <div className="max-w-2xl mx-auto mb-12">
        <CodeBlock code={codeSnippet.code} output={codeSnippet.output} />
      </div>

      {/* Contact Info */}
      <div className="max-w-md mx-auto text-center mb-8">
        <p className="text-light-gray mb-6">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <div className="flex justify-center gap-8 mb-8">
          <motion.a 
            href="https://github.com/syedmozamilshah" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center text-neon-green hover:text-neon-blue transition-colors"
            whileHover={{ y: -3 }}
          >
            <FaGithub className="text-3xl mb-2" />
            <span className="text-sm">GitHub</span>
          </motion.a>
          
          <motion.a 
            href="https://www.linkedin.com/in/syed-mozamil-shah-873a26230" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center text-neon-green hover:text-neon-blue transition-colors"
            whileHover={{ y: -3 }}
          >
            <FaLinkedin className="text-3xl mb-2" />
            <span className="text-sm">LinkedIn</span>
          </motion.a>
          
          <motion.a 
            href="mailto:syedmozamilshah99@gmail.com"
            className="flex flex-col items-center text-neon-green hover:text-neon-blue transition-colors"
            whileHover={{ y: -3 }}
          >
            <FaEnvelope className="text-3xl mb-2" />
            <span className="text-sm">Email</span>
          </motion.a>
        </div>
        
        <div className="text-center text-sm text-gray-400">
          <p>📧 syedmozamilshah99@gmail.com</p>
          <p>📱 +92-3035149415</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;