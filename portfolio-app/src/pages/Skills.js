import React from 'react';
import { motion } from 'framer-motion';
import CodeBlock from '../components/CodeBlock';

const Skills = () => {
  const codeSnippet = {
    code: `#!/usr/bin/env python3
# skills_analyzer.py

class SkillsAnalyzer:
    def __init__(self):
        self.programmer = "Syed Mozamil Shah"
        self.expertise_level = "Full Stack + AI Engineer"
        
    def analyze_tech_stack(self):
        skills = {
            "programming_languages": ["Python", "JavaScript", "Dart", "C++"],
            "frameworks_libraries": ["React", "Node.js", "Express", "Flutter", "LangChain", "LangGraph", "RAG", "FastAPI", "Pydantic"],
            "databases": ["MongoDB", "Firebase Firestore", "Oracle", "ChromaDB", "Qdrant", "MemO"],
            "tools_technologies": ["REST APIs", "Web Scraping", "Git & Github", "Agile Methodologies", "Docker", "n8n"]
        }
        
        return self.calculate_proficiency(skills)
    
    def calculate_proficiency(self, skills):
        total_skills = sum(len(category) for category in skills.values())
        return f"Proficiency: {total_skills} technologies mastered"

analyzer = SkillsAnalyzer()
print(analyzer.analyze_tech_stack())`,
    output: "💻 Full-stack expertise with 25+ technologies mastered across AI, Web, and Mobile development"
  };

  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Python", "JavaScript", "Dart", "C++"]
    },
    {
      category: "Frameworks & Libraries", 
      skills: ["React", "Node.js", "Express", "Flutter", "LangChain", "LangGraph", "RAG", "FastAPI", "Pydantic"]
    },
    {
      category: "Databases",
      skills: ["MongoDB", "Firebase Firestore", "Oracle", "ChromaDB", "Qdrant", "MemO"]
    },
    {
      category: "Tools & Technologies",
      skills: ["REST APIs", "Web Scraping", "Git & Github", "Agile Methodologies", "Docker", "n8n"]
    }
  ];

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
          <h3 className="text-2xl font-bold text-neon-green">skills_analyzer.py</h3>
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
          Technical Skills
        </motion.h1>
        
        <motion.p 
          className="text-white max-w-2xl mx-auto mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          A comprehensive overview of my technical expertise across AI Engineering, 
          Full-Stack Development, and modern software technologies.
        </motion.p>
      </div>

      {/* Skills Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-6xl w-full"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        {skillCategories.map((category, index) => (
          <motion.div 
            key={index}
            className="bg-dark-gray border border-neon-green/30 rounded-lg p-6 hover:border-neon-green/60 transition-colors"
            whileHover={{ y: -5 }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
          >
            <h3 className="text-xl font-bold text-neon-green mb-4 border-b border-neon-green/30 pb-2">
              {category.category}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {category.skills.map((skill, skillIndex) => (
                <div 
                  key={skillIndex} 
                  className="text-gray-300 text-sm flex items-center"
                >
                  <span className="text-neon-green mr-2 text-xs">▸</span>
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Expertise Highlight */}
      <motion.div 
        className="max-w-4xl mx-auto text-center"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.0 }}
      >
        <h3 className="text-2xl font-bold text-neon-green mb-4">Core Expertise</h3>
        <p className="text-gray-300 mb-6 leading-relaxed">
          Specialized in building intelligent AI systems with LangGraph and RAG architectures, 
          combined with full-stack web and mobile development expertise. Passionate about 
          creating scalable, user-centric applications with cutting-edge technologies.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {['AI Engineering', 'Full-Stack Development', 'Mobile Apps', 'System Architecture'].map((expertise, index) => (
            <span 
              key={index} 
              className="bg-neon-green/20 text-neon-green px-4 py-2 rounded-full text-sm font-semibold"
            >
              {expertise}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
