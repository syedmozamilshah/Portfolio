import React from 'react';
import { motion } from 'framer-motion';
import CodeBlock from '../components/CodeBlock';

const Publications = () => {
  const codeSnippet = {
    code: `#!/usr/bin/env bash
# publications_manager.sh

class PublicationManager {
    constructor() {
        this.publications = [];
        this.categories = ["Research", "Articles", "Tutorials", "Case Studies"];
    }
    
    addPublication(title, type, status) {
        const publication = {
            title: title,
            type: type,
            status: status,
            date: new Date().toISOString().split('T')[0]
        };
        
        this.publications.push(publication);
        console.log(\`📄 Added: \${title}\`);
        return publication;
    }
    
    getPublishedWorks() {
        return this.publications.filter(pub => pub.status === 'published');
    }
    
    generateBibliography() {
        return this.publications.map(pub => 
            \`\${pub.title} (\${pub.date}) - \${pub.type}\`
        ).join('\n');
    }
}

const myPublications = new PublicationManager();
console.log("Publications system initialized");`,
    output: "📚 Publication management system ready - Sharing knowledge through writing"
  };

const publications = [
    {
      title: "Agent ZERO Build, Run, Automate",
      type: "Technical Article",
      status: "Published",
      description: "A comprehensive guide to building autonomous AI agents using modern frameworks and techniques.",
      category: "AI Engineering",
      date: "2025",
      pdfPath: require('../books/Agent ZERO Build, Run, Automate.pdf')
    },
    {
      title: "The Symphony",
      type: "Poetry Book",
      status: "Published",
      description: "A collection of original poems and haikus exploring themes of life, nature, love, and human experience through lyrical expression.",
      category: "Literature",
      date: "2025",
      pdfPath: require('../books/The Symphony by Syed Mozamil Shah.pdf')
    }
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'Published': return 'text-green-400';
      case 'In Progress': return 'text-yellow-400';
      case 'Draft': return 'text-blue-400';
      case 'Planning': return 'text-purple-400';
      case 'Conceptual': return 'text-gray-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <motion.div 
      initial={{ y: 10, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }} 
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col justify-center items-center px-4 pt-20 pb-10"
    >
      {/* Code Block - At the top */}
      <motion.div 
        className="max-w-4xl mx-auto mb-12 w-full"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-neon-green">publications_manager.sh</h3>
        </div>
        <CodeBlock code={codeSnippet.code} output={codeSnippet.output} />
      </motion.div>

      {/* Header */}
      <div className="text-center mb-12">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-neon-blue mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Publications & Writing
        </motion.h1>
        
        <motion.p 
          className="text-white max-w-2xl mx-auto mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Sharing knowledge through technical articles, tutorials, and research. 
          Contributing to the developer community with practical insights and innovative solutions.
        </motion.p>
      </div>

      {/* Publications Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-4xl w-full"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        {publications.map((publication, index) => (
          <motion.div 
            key={index}
            className="bg-dark-gray border border-neon-green/30 rounded-lg p-6 hover:border-neon-green/60 transition-colors"
            whileHover={{ y: -5 }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
          >
            <div className="flex justify-between items-start mb-3">
              <span className="text-xs text-neon-green bg-neon-green/20 px-2 py-1 rounded">
                {publication.category}
              </span>
              <span className={`text-xs ${getStatusColor(publication.status)} font-semibold`}>
                {publication.status}
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{publication.title}</h3>
            <p className="text-neon-blue mb-2 text-sm font-semibold">{publication.type} • {publication.date}</p>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">{publication.description}</p>
            
            <div className="border-t border-neon-green/20 pt-3">
              <p className="text-terminal-green text-xs italic">
            <a href={publication.pdfPath} target="_blank" rel="noopener noreferrer">📝 Click here to view publication</a>
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Writing Philosophy */}
      <motion.div 
        className="max-w-3xl mx-auto text-center"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.0 }}
      >
        <h3 className="text-2xl font-bold text-neon-green mb-4">Writing Philosophy</h3>
        <p className="text-gray-300 mb-6 leading-relaxed">
          I believe in sharing knowledge through clear, practical writing that bridges the gap between 
          complex technical concepts and real-world implementation. Each publication aims to provide 
          actionable insights backed by hands-on experience.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {['Technical Accuracy', 'Practical Examples', 'Clear Explanations', 'Community Impact'].map((principle, index) => (
            <span 
              key={index} 
              className="bg-neon-green/20 text-neon-green px-3 py-1 rounded-full text-sm"
            >
              {principle}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Publications;
