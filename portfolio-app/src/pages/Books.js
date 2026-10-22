import React from 'react';
import { motion } from 'framer-motion';
import CodeBlock from '../components/CodeBlock';

const Publications = () => {
  const codeSnippet = {
    code: `#!/usr/bin/env bash
# publications_registry.sh

class PublicationRegistry:
    def __init__(self):
        self.author = "Syed Mozamil Shah"
        self.works = [
            {"title": "Agent ZERO Build, Run, Automate", "type": "Technical Guide", "topic": "Autonomous AI Agents"},
            {"title": "The Symphony", "type": "Literary & Philosophy", "topic": "Lyrical Expression"}
        ]
        
    def summary(self):
        return f"Published {len(self.works)} distinct volumes bridging AI systems and creative philosophy."

print(PublicationRegistry().summary())`,
    output: "📚 Publications loaded: Bridging autonomous AI agent engineering and creative philosophy"
  };

  const publications = [
    {
      title: "Agent ZERO Build, Run, Automate",
      type: "Technical Guidebook",
      status: "Published",
      accent: "#00FFAB",
      description: "A comprehensive deep-dive guide to designing, building, and deploying autonomous AI agents using contemporary LLM orchestration frameworks, memory tools, and multi-agent coordination.",
      category: "AI Engineering",
      date: "2025",
      pdfPath: require('../books/Agent ZERO Build, Run, Automate.pdf')
    },
    {
      title: "The Symphony",
      type: "Poetry & Philosophy",
      status: "Published",
      accent: "#9B59B6",
      description: "A collection of original poems, reflections, and haikus exploring themes of existence, balance, human emotion, and creative expression through evocative lyrical prose.",
      category: "Literature",
      date: "2025",
      pdfPath: require('../books/The Symphony by Syed Mozamil Shah.pdf')
    }
  ];

  return (
    <div className="relative min-h-screen pt-28 pb-16 px-4 md:px-8 z-10">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-mono uppercase tracking-[0.35em] text-neon-blue mb-3">
            &lt; Writing & Thought Leadership /&gt;
          </p>
          <h1 className="text-5xl md:text-7xl font-black py-2 leading-tight tracking-tight">
            <span
              className="inline-block"
              style={{
                background: "linear-gradient(135deg, #00FFAB 0%, #00B2FF 50%, #9B59B6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Publications & Books
            </span>
          </h1>
          <p className="text-gray-300 font-mono text-sm md:text-base max-w-2xl mx-auto mt-2">
            Authored literature bridging technical artificial intelligence architectures and creative human philosophies.
          </p>
        </motion.div>

        {/* Code Block */}
        <motion.div 
          className="max-w-3xl mx-auto mb-14 w-full"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="text-center mb-4">
            <h3 className="text-lg font-bold font-mono text-neon-green">publications_registry.sh</h3>
          </div>
          <CodeBlock code={codeSnippet.code} output={codeSnippet.output} />
        </motion.div>

        {/* 3D Publications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {publications.map((pub, index) => (
            <motion.div 
              key={index}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => {
                if (pub.pdfPath) {
                  window.open(pub.pdfPath, '_blank');
                }
              }}
              className="rounded-3xl p-6 md:p-8 border cursor-pointer flex flex-col justify-between transition-all duration-300 group"
              style={{
                background: "linear-gradient(145deg, rgba(16, 26, 21, 0.75) 0%, rgba(13, 19, 16, 0.85) 100%)",
                borderColor: `${pub.accent}40`,
                boxShadow: `0 15px 35px rgba(0, 0, 0, 0.4), 0 0 25px ${pub.accent}15`,
                backdropFilter: "blur(14px)",
              }}
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span 
                    className="text-xs font-mono font-bold px-3 py-1 rounded-full"
                    style={{
                      background: `${pub.accent}15`,
                      border: `1px solid ${pub.accent}35`,
                      color: pub.accent,
                    }}
                  >
                    {pub.category}
                  </span>
                  <span className="text-xs text-gray-500 font-mono">{pub.date}</span>
                </div>

                <h3 className="text-2xl font-black text-white mb-2 group-hover:text-neon-green transition-colors">
                  {pub.title}
                </h3>
                <p className="text-xs font-mono mb-4 text-neon-blue font-semibold">{pub.type}</p>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {pub.description}
                </p>
              </div>

              <div 
                className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono font-bold"
                style={{ color: pub.accent }}
              >
                <span>Read Official PDF</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1.5">↗</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Publications;
