import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CodeBlock from '../components/CodeBlock';

const Achievements = () => {
  const [activeImage, setActiveImage] = useState(null);

  const podcastImages = [
    '/Podcast images/1512fca2-393f-417a-aeca-987f2e960245.jpg',
    '/Podcast images/2dfeaa31-eb55-437b-90fa-33e530db0a34.jpg',
    '/Podcast images/2e817676-362a-48f9-b8a8-1f640c14c135.jpg',
    '/Podcast images/8825801a-3810-4512-ab4b-4bc4151da86e.jpg',
    '/Podcast images/b5e1b7fc-ff48-4daf-bc20-71811ed3d2b2.jpg',
    '/Podcast images/c30a6e8a-e4d8-477a-a8cd-af8e870a545e.jpg',
  ];

  const podcastTopics = [
    "What artificial intelligence really is (and what it’s not)",
    "The biggest mistake people make with AI: replacing critical thinking instead of enhancing it",
    "Will AI replace you... or will someone using AI replace you?",
    "The real difference between AI and humans (thinking vs predicting)",
    "Old AI vs new AI: from machine learning to transformers",
    "Why AI is great at some tasks and terrible at others",
    "AI agents concept & autonomous task execution",
    "Why AI can sound confidently wrong (hallucinations & grounding)",
    "Prompt engineering vs context engineering",
    "Learn how to learn with AI (so you’re never dependent on anyone)",
    "Solve almost any problem using AI",
    "Beat competitors using AI in any online business... even with less experience",
  ];

  const podcastTakeaways = [
    "AI is most powerful when it enhances human thinking, not when it replaces it.",
    "Prompts matter less than judgment.",
    "Speed matters less than direction.",
    "Good conversations > AI hype.",
  ];

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
    code: `// Achievements & Leadership Highlights
const profile = {
  name: "Syed Mozamil Shah",
  podcast: "AI and You: How to be Ahead of 99% people",
  mentorship: "Agentic AI & LangGraph Mentor @ AUCIS (20+ engineers)",
  hackathons: "2nd Place Winner @ PenCode Full-Stack Challenge",
  publications: 2,
  
  philosophy: "Prompts matter less than judgment. Speed matters less than direction."
};`,
    output: "🏆 Keynote Guest • Mentorship & Competitive Engineering Milestones"
  };

  return (
    <div className="relative min-h-screen pt-28 pb-16 px-4 md:px-8 z-10">
      {/* Lightbox Modal for Podcast Images */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              className="relative max-w-4xl max-h-[90vh] rounded-3xl overflow-hidden border border-neon-green/40 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={activeImage} alt="Podcast session" className="w-full h-auto max-h-[85vh] object-contain" />
              <button
                onClick={() => setActiveImage(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-dark-bg/80 text-white flex items-center justify-center border border-white/20 hover:border-neon-green"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
            Podcast features, technical mentorship, competitive hackathon wins, and published literature.
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

        {/* ─── FEATURED PODCAST SECTION (ON TOP) ─── */}
        <motion.div
          initial={{ y: 35, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          whileHover={{ y: -4 }}
          className="rounded-3xl p-6 md:p-10 border relative overflow-hidden mb-14 transition-all duration-300"
          style={{
            background: "linear-gradient(145deg, rgba(16, 28, 22, 0.85) 0%, rgba(13, 20, 17, 0.95) 100%)",
            borderColor: "rgba(0, 255, 171, 0.45)",
            boxShadow: "0 20px 45px rgba(0, 0, 0, 0.5), 0 0 35px rgba(0, 255, 171, 0.15)",
            backdropFilter: "blur(16px)",
          }}
        >
          {/* Top Gradient Banner */}
          <div 
            className="absolute top-0 left-0 right-0 h-1.5"
            style={{ background: "linear-gradient(90deg, #00FFAB, #00B2FF, #9B59B6)" }}
          />

          {/* Podcast Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span className="text-2xl">🎙️</span>
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-neon-green/20 text-neon-green border border-neon-green/50">
                  Featured Podcast & Discussion
                </span>
                <span className="text-xs font-mono text-gray-400 bg-white/5 px-2.5 py-0.5 rounded-md border border-white/10">
                  Guest Speaker
                </span>
              </div>
              <h2 className="text-2xl md:text-4xl font-black text-white leading-tight">
                AI and You: How to be Ahead of 99% people.
              </h2>
            </div>
          </div>

          <p className="text-gray-200 text-sm md:text-base leading-relaxed mb-6 font-sans">
            Recently joined a podcast where we talked about AI and a lot around it, from emergence and the jagged frontier, 
            to general-purpose technologies and how AI is actually changing the way we work.
          </p>

          {/* ─── 3D Photo Gallery of Podcast ─── */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-neon-green font-bold flex items-center gap-2">
                <span>📸</span> Session Gallery (Click to enlarge)
              </span>
              <span className="text-xs text-gray-400 font-mono">6 captures</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {podcastImages.map((imgSrc, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05, y: -4 }}
                  onClick={() => setActiveImage(imgSrc)}
                  className="rounded-2xl overflow-hidden border border-white/15 cursor-pointer relative group h-28 md:h-32 bg-dark-bg/60"
                  style={{
                    boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
                  }}
                >
                  <img
                    src={imgSrc}
                    alt={`Podcast discussion moment ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-2">
                    <span className="text-[10px] font-mono text-neon-green">🔍 View</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ─── Two-Column: What We Discussed vs Key Takeaways ─── */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8 pt-4 border-t border-white/10">
            {/* What we discussed (2 cols) */}
            <div className="lg:col-span-2">
              <h4 className="text-xs font-mono uppercase tracking-widest text-neon-blue font-bold mb-3 flex items-center gap-2">
                <span>🧠</span> What We Discussed
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {podcastTopics.map((topic, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs md:text-sm text-gray-300">
                    <span className="text-neon-green font-bold flex-shrink-0 mt-0.5">▹</span>
                    <span className="leading-snug">{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Takeaways (1 col) */}
            <div 
              className="rounded-2xl p-5 border flex flex-col justify-between"
              style={{
                background: "rgba(0, 255, 171, 0.04)",
                borderColor: "rgba(0, 255, 171, 0.25)",
              }}
            >
              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-neon-green font-bold mb-3 flex items-center gap-2">
                  <span>💡</span> Core Takeaways
                </h4>
                <ul className="space-y-3">
                  {podcastTakeaways.map((takeaway, i) => (
                    <li key={i} className="text-xs md:text-sm text-gray-200 flex items-start gap-2 leading-relaxed">
                      <span className="text-neon-blue font-bold">✓</span>
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mt-5 pt-3 border-t border-white/10">
                {['#AI', '#ArtificialIntelligence', '#Podcast', '#Technology', '#ClaudeCode', '#AgenticAI', '#RAG'].map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-gray-400 border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ─── Other Achievements Section ─── */}
        <div className="space-y-8 mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">⚡</span>
            <h3 className="text-2xl font-bold text-white">Leadership & Competitions</h3>
          </div>

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