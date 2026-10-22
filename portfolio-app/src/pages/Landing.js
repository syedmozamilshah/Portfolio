import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import CodeBlock from '../components/CodeBlock';
import profilePic from '../pics/aboutpagepic.png';

const Landing = () => {
  const [textIndex, setTextIndex] = useState(0);
  const textOptions = [
    { text: 'AI', color: '#00FFAB' },
    { text: 'Web', color: '#00B2FF' },
    { text: 'Mobile', color: '#FF6B35' }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % textOptions.length);
    }, 2000);
    
    return () => clearInterval(interval);
  }, [textOptions.length]);

  const codeSnippet = {
    code: `from zamli import motivation
from zamli import hardwork
from zamli.utils import success

def build_future():
    passion = motivation.get_passion()
    effort = hardwork.daily_commitment()
    skills = ["AI", "Web Development", "Mobile Apps"]
    
    while not success.achieved():
        learn_new_skills(skills)
        build_projects(passion)
        effort += 1
        
    return "Welcome to My Portfolio"

print(build_future())`,
    output: "Salaam, I'm Mozamil – AI Agent Orchestrator & LLM Whisperer"
  };

  return (
    <motion.div 
      initial={{ y: 10, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }} 
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col justify-center items-center px-4 pt-20 pb-10"
    >
      {/* Hero Section with Profile */}
      <div className="w-full max-w-6xl mb-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.p 
              className="text-neon-green text-lg font-mono mb-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Hi, my name is
            </motion.p>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-white mb-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Syed Mozamil Shah.
            </motion.h1>
            
            <motion.h2 
              className="text-2xl md:text-4xl font-bold text-gray-400 mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              A Full Stack Developer, with expertise in{' '}
              <span 
                className="text-transparent bg-clip-text"
                style={{ 
                  backgroundImage: `linear-gradient(90deg, ${textOptions[textIndex].color}, ${textOptions[textIndex].color}90)`,
                  color: textOptions[textIndex].color
                }}
              >
                {textOptions[textIndex].text}
              </span>.
            </motion.h2>
            
            <motion.p 
              className="text-gray-300 max-w-2xl mb-8 text-lg leading-relaxed"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              I'm an AI Engineer & Full Stack Developer specializing in building exceptional digital experiences. 
              Currently, I'm focused on building accessible, human-centered products using 
              cutting-edge technologies including AI, Web, and Mobile App Development.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Link 
                to="/projects"
                className="px-8 py-3 bg-transparent border border-neon-green text-neon-green font-semibold rounded hover:bg-neon-green/10 transition-all duration-300 transform hover:-translate-y-1"
              >
                View My Work
              </Link>
              <Link 
                to="/contact"
                className="px-8 py-3 border border-gray-400 text-gray-400 rounded hover:border-neon-green hover:text-neon-green transition-all duration-300 transform hover:-translate-y-1"
              >
                Get In Touch
              </Link>
            </motion.div>
            
            <motion.div 
              className="flex gap-6 justify-center lg:justify-start"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a href="https://github.com/syedmozamilshah" target="_blank" rel="noopener noreferrer" 
                 className="text-white text-2xl hover:text-neon-green transition-all duration-300 transform hover:-translate-y-1">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/syed-mozamil-shah-873a26230" target="_blank" rel="noopener noreferrer" 
                 className="text-white text-2xl hover:text-neon-green transition-all duration-300 transform hover:-translate-y-1">
                <FaLinkedin />
              </a>
              <a href="mailto:syedmozamilshah99@gmail.com" 
                 className="text-white text-2xl hover:text-neon-green transition-all duration-300 transform hover:-translate-y-1">
                <FaEnvelope />
              </a>
            </motion.div>
          </div>
          
          {/* Profile Image */}
          <motion.div 
            className="flex-shrink-0"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img 
              src={profilePic} 
              alt="Syed Mozamil Shah" 
              className="w-64 h-64 md:w-80 md:h-80 rounded-lg object-cover transition-all duration-500 hover:scale-105"
            />
          </motion.div>
        </div>
      </div>

      {/* Code Block */}
      <motion.div 
        className="max-w-4xl mx-auto mb-12 w-full"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-neon-green">motivation.py</h3>
        </div>
        <CodeBlock code={codeSnippet.code} output={codeSnippet.output} />
      </motion.div>

      {/* Quick Stats */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-center max-w-4xl w-full"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.0 }}
      >
        <div className="bg-dark-gray border border-neon-green/30 rounded-lg p-6 hover:border-neon-green/60 transition-colors">
          <h3 className="text-3xl font-bold text-neon-green mb-2">6+</h3>
          <p className="text-gray-300">Major Projects</p>
        </div>
        <div className="bg-dark-gray border border-neon-green/30 rounded-lg p-6 hover:border-neon-green/60 transition-colors">
          <h3 className="text-3xl font-bold text-neon-green mb-2">200+</h3>
          <p className="text-gray-300">AI Responses Generated</p>
        </div>
        <div className="bg-dark-gray border border-neon-green/30 rounded-lg p-6 hover:border-neon-green/60 transition-colors">
          <h3 className="text-3xl font-bold text-neon-green mb-2">90%+</h3>
          <p className="text-gray-300">Model Accuracy</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Landing;

