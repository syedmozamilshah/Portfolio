import React from 'react';
import { motion } from 'framer-motion';
import CodeBlock from '../components/CodeBlock';

const Skills = () => {
  const codeSnippet = {
    code: `#!/usr/bin/env python3
# skills_matrix.py

class SkillsMatrix:
    def __init__(self):
        self.engineer = "Syed Mozamil Shah"
        self.specialization = "Full Stack AI Engineer"
        
    def get_stack(self):
        return {
            "ai_and_agents": ["LangGraph", "LangChain", "RAG Systems", "Qdrant", "ChromaDB", "FastAPI", "Groq", "OpenAI"],
            "fullstack_cloud": ["React 18", "TypeScript", "Next.js", "Node.js", "Express", "ASP.NET Core (.NET 8)", "Blazor"],
            "databases": ["MongoDB Atlas", "PostgreSQL", "Firebase Firestore", "Vector Stores"],
            "mobile_dev": ["Flutter", "Dart", "Cross-Platform State Management (Riverpod)"],
            "devops_tools": ["Docker", "Modal.com (GPU)", "Git / GitHub", "n8n", "CI/CD Workflows"]
        }

matrix = SkillsMatrix()
print(f"Loaded {sum(len(v) for v in matrix.get_stack().values())}+ production capabilities.")`,
    output: "⚡ Skills Matrix Loaded: 25+ production-tested technologies across AI, Cloud, and Full-Stack"
  };

  const skillCategories = [
    {
      category: "AI, Agents & RAG",
      icon: "🤖",
      accent: "#00FFAB",
      skills: ["LangGraph", "LangChain", "RAG Pipelines", "FastAPI", "Groq API", "OpenAI", "Qdrant Cloud", "ChromaDB", "MemO", "Pydantic"]
    },
    {
      category: "Full-Stack & Cloud Architecture",
      icon: "🌐",
      accent: "#00B2FF",
      skills: ["React 18", "TypeScript", "Node.js", "Express", "ASP.NET Core (.NET 8)", "Blazor Server", "SignalR", "REST APIs", "Tailwind CSS", "Vite"]
    },
    {
      category: "Databases & Storage",
      icon: "🗄️",
      accent: "#9B59B6",
      skills: ["MongoDB Atlas", "PostgreSQL", "Firebase Firestore", "Vector Databases", "Cloudinary CDN", "Redis Cache", "SQL / Relational"]
    },
    {
      category: "Mobile & DevOps / Tools",
      icon: "📱",
      accent: "#FF6B35",
      skills: ["Flutter", "Dart", "Riverpod", "Docker", "Modal.com (GPU)", "Git & GitHub", "n8n Automation", "Agile & Scrum"]
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
            &lt; Capabilities & Tools /&gt;
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
              Technical Skills
            </span>
          </h1>
          <p className="text-gray-300 font-mono text-sm md:text-base max-w-2xl mx-auto mt-2">
            Production-grade competencies developed across real-world commercial software, autonomous agent systems, and full-stack architectures.
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
            <h3 className="text-lg font-bold font-mono text-neon-green">skills_matrix.py</h3>
          </div>
          <CodeBlock code={codeSnippet.code} output={codeSnippet.output} />
        </motion.div>

        {/* 3D Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -6, scale: 1.015 }}
              className="rounded-3xl p-6 md:p-8 border transition-all duration-300"
              style={{
                background: "linear-gradient(145deg, rgba(16, 26, 21, 0.75) 0%, rgba(13, 19, 16, 0.85) 100%)",
                borderColor: `${category.accent}40`,
                boxShadow: `0 15px 35px rgba(0, 0, 0, 0.4), 0 0 25px ${category.accent}15`,
                backdropFilter: "blur(14px)",
              }}
            >
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-white/10">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  {category.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="text-xs md:text-sm font-mono px-3.5 py-1.5 rounded-xl transition-all duration-200"
                    style={{
                      background: `${category.accent}15`,
                      border: `1px solid ${category.accent}35`,
                      color: category.accent,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Core Pillars */}
        <motion.div 
          className="max-w-4xl mx-auto rounded-3xl p-8 border text-center"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{
            background: "rgba(255, 255, 255, 0.02)",
            borderColor: "rgba(255, 255, 255, 0.08)",
            backdropFilter: "blur(12px)",
          }}
        >
          <h3 className="text-2xl font-black text-neon-green mb-3">Core Engineering Philosophy</h3>
          <p className="text-gray-300 mb-6 leading-relaxed max-w-2xl mx-auto text-sm md:text-base">
            I build AI that delivers measurable ROI in production — focusing on deterministic guardrails, sub-second retrieval latency, cost reduction, and frictionless human experiences.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Agent Orchestration', 'Cost-Optimized RAG', 'Scalable SaaS Architecture', 'Resilient Microservices'].map((pillar, index) => (
              <span 
                key={index} 
                className="bg-white/5 border border-white/10 text-gray-200 px-4 py-2 rounded-xl text-xs font-mono font-bold"
              >
                ✓ {pillar}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
