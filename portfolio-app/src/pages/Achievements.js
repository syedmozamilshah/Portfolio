import React from 'react';
import { motion } from 'framer-motion';
import CodeBlock from '../components/CodeBlock';

const Achievements = () => {
  const achievements = [
    {
      title: "Agentic AI & RAG Mentor",
      organization: "AUCIS",
      accent: "#00FFAB",
      badge: "Leadership & Mentorship",
      description: "Led an intensive 4-week hands-on mentorship program, training 20+ developers in LangGraph, Google Gemini API integration, and Retrieval-Augmented Generation (RAG) architectures through live workshops and project-based learning.",
      points: [
        "Designed and delivered curriculum covering autonomous agents, cyclic graphs, and vector stores",
        "Mentored developer teams in building production-ready generative AI systems",
        "Organized hackathons resulting in 5 innovative real-world AI applications",
        "Authored open documentation and reference blueprints for agentic workflows"
      ]
    },
    {
      title: "2nd Place Winner — PenCode Competition",
      organization: "PenCode",
      accent: "#00B2FF",
      badge: "Rapid Full-Stack Prototyping",
      description: "Architected and implemented a complete full-stack MERN application completely using pen and paper in under 2 hours.",
      points: [
        "Structured comprehensive MongoDB schemas, Express controllers, and REST routes by hand",
        "Designed responsive component architecture and state propagation flows",
        "Achieved 2nd place among university-wide competitive programming teams",
        "Completed all strict validation and specification criteria ahead of time"
      ]
    }
  ];

  const publications = [
    {
      title: "Agent ZERO Build, Run, Automate",
      category: "Technical Book",
      accent: "#9B59B6",
      description: "A comprehensive deep-dive guide to designing, running, and automating autonomous AI agents with modern tooling.",
      pdfPath: require('../books/Agent ZERO Build, Run, Automate.pdf')
    },
    {
      title: "The Symphony",
      category: "Creative Writing",
      accent: "#FFD700",
      description: "An original exploration of human experience, harmony, and creative expression through lyrical and philosophical writing.",
      pdfPath: require('../books/The Symphony by Syed Mozamil Shah.pdf')
    }
  ];

  const codeSnippet = {
    code: `// Achievements & Leadership
const profile = {
  name: "Syed Mozamil Shah",
  mentorship: "Agentic AI & LangGraph Mentor @ AUCIS (20+ engineers)",
  hackathons: "2nd Place Winner @ PenCode Full-Stack Challenge",
  publications: 2,
  
  impact: function() {
    return "Sharing knowledge, building communities, and solving hard engineering problems.";
  }
};`,
    output: "🏆 Leadership, Mentorship & Technical Achievements"
  };

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
            &lt; Milestones & Impact /&gt;
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
              Achievements
            </span>
          </h1>
          <p className="text-gray-300 font-mono text-sm md:text-base max-w-2xl mx-auto mt-2">
            Leadership roles, mentorship initiatives, coding competition wins, and technical publications.
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
            <h3 className="text-lg font-bold font-mono text-neon-green">achievement.cpp</h3>
          </div>
          <CodeBlock code={codeSnippet.code} output={codeSnippet.output} />
        </motion.div>

        {/* Achievements Cards */}
        <div className="space-y-8 mb-16">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.15 * index }}
              whileHover={{ y: -4 }}
              className="rounded-3xl p-6 md:p-8 border relative overflow-hidden transition-all duration-300"
              style={{
                background: "linear-gradient(145deg, rgba(16, 26, 21, 0.75) 0%, rgba(13, 19, 16, 0.85) 100%)",
                borderColor: `${item.accent}40`,
                boxShadow: `0 15px 35px rgba(0, 0, 0, 0.4), 0 0 25px ${item.accent}12`,
                backdropFilter: "blur(14px)",
              }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                    <span 
                      className="text-xs font-mono font-bold px-3 py-1 rounded-full"
                      style={{
                        background: `${item.accent}15`,
                        border: `1px solid ${item.accent}40`,
                        color: item.accent,
                      }}
                    >
                      {item.badge}
                    </span>
                  </div>
                  <p className="text-sm font-mono" style={{ color: item.accent }}>
                    {item.organization}
                  </p>
                </div>
              </div>

              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-5">
                {item.description}
              </p>

              <ul className="space-y-2">
                {item.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs md:text-sm text-gray-400">
                    <span style={{ color: item.accent }} className="font-bold flex-shrink-0 mt-0.5">
                      ▹
                    </span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Featured Publications Grid */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">📚</span>
            <h2 className="text-2xl font-bold text-white">Authored Publications</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {publications.map((pub, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6, scale: 1.015 }}
                onClick={() => pub.pdfPath && window.open(pub.pdfPath, '_blank')}
                className="rounded-3xl p-6 border cursor-pointer transition-all duration-300 group"
                style={{
                  background: "linear-gradient(145deg, rgba(16, 26, 21, 0.75) 0%, rgba(13, 19, 16, 0.85) 100%)",
                  borderColor: `${pub.accent}35`,
                  boxShadow: `0 10px 30px rgba(0,0,0,0.4), 0 0 20px ${pub.accent}10`,
                  backdropFilter: "blur(14px)",
                }}
              >
                <span 
                  className="inline-block text-xs font-mono font-bold px-2.5 py-1 rounded-full mb-3"
                  style={{
                    background: `${pub.accent}15`,
                    color: pub.accent,
                    border: `1px solid ${pub.accent}35`,
                  }}
                >
                  {pub.category}
                </span>
                <h3 className="text-xl font-bold text-white mb-2">{pub.title}</h3>
                <p className="text-gray-300 text-xs md:text-sm leading-relaxed mb-4">{pub.description}</p>
                <div 
                  className="flex items-center gap-1.5 text-xs font-mono font-bold"
                  style={{ color: pub.accent }}
                >
                  <span>Read Document</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-1">↗</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;