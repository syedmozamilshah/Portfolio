import React from 'react';
import { motion } from 'framer-motion';
import CodeBlock from '../components/CodeBlock';

const Experience = () => {
  const experiences = [
    {
      role: "Full Stack AI Engineer",
      company: "TubeRisers Private Limited",
      location: "Islamabad, Pakistan",
      period: "April 2025 – April 2026",
      type: "Full-Time",
      accent: "#00FFAB",
      badge: "Production SaaS & AI",
      points: [
        "Led the architecture and deployment of 5+ end-to-end production AI systems (LLM agents, RAG pipelines, vector & relational databases, automation workflows, and frontend integrations), cutting YouTube Data API costs by 97%.",
        "Engineered and scaled full-stack AI infrastructure from design to cloud deployment, backend services, and retrieval workflows to deliver reliable SaaS solutions.",
        "Architected multi-agent orchestrations using LangGraph and FastAPI, incorporating real-time WebSub webhooks, automated RSS scrapers, and Supabase Edge Functions.",
        "Engineered high-throughput creator intelligence pipelines with sub-second hybrid retrieval across massive vector and PostgreSQL catalogs."
      ],
      skills: ["LLM Agents", "RAG Pipelines", "LangGraph", "FastAPI", "Vector DBs", "Supabase", "React", "Python", "Cloud Architecture"]
    },
    {
      role: "Agentic AI & RAG Mentor",
      company: "AUCIS",
      location: "Islamabad, Pakistan",
      period: "2024 – 2025",
      type: "Mentorship",
      accent: "#00B2FF",
      badge: "Community & Leadership",
      points: [
        "Led an intensive hands-on mentorship program training 20+ developers in LangGraph, Google Gemini API integrations, and Retrieval-Augmented Generation (RAG) architectures.",
        "Guided developer teams in building production-grade AI systems, organizing hackathons that produced 5 innovative deployed applications.",
        "Curated and published open-source architectural blueprints and technical documentation for autonomous agents."
      ],
      skills: ["Mentorship", "LangGraph", "RAG Systems", "Gemini API", "Agent Architectures", "Hackathons"]
    }
  ];

  const codeSnippet = {
    code: `#!/usr/bin/env python3
# experience_ledger.py

class ExperienceLedger:
    def __init__(self):
        self.engineer = "Syed Mozamil Shah"
        self.current_title = "Full Stack AI Engineer"
        self.organization = "TubeRisers Private Limited"
        self.impact = "Cut YouTube Data API costs by 97% across 5+ production AI systems"

    def get_track_record(self):
        return {
            "systems_shipped": "5+ End-to-End Production AI Systems",
            "cost_optimization": "97% API Cost Reduction",
            "mentorship": "20+ Engineers Mentored in Agentic AI",
            "status": "Actively Delivering Impact"
        }

ledger = ExperienceLedger()
for metric, value in ledger.get_track_record().items():
    print(f"[{metric.upper()}]: {value}")`,
    output: "⚡ Track Record: 5+ Production AI Systems • 97% API Cost Reduction • Scalable Cloud Architecture"
  };

  return (
    <div className="relative min-h-screen pt-28 pb-20 px-4 md:px-8 z-10">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-mono uppercase tracking-[0.35em] text-neon-blue mb-3">
            &lt; Track Record & Roles /&gt;
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
              Experience
            </span>
          </h1>
          <p className="text-gray-300 font-mono text-sm md:text-base max-w-2xl mx-auto mt-2">
            Professional track record architecting, engineering, and scaling production AI systems, LLM agents, and full-stack cloud applications.
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
            <h3 className="text-lg font-bold font-mono text-neon-green">experience_ledger.py</h3>
          </div>
          <CodeBlock code={codeSnippet.code} output={codeSnippet.output} />
        </motion.div>

        {/* Key Metrics Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14"
        >
          {[
            { value: "5+", label: "Production AI Systems", icon: "🚀", color: "#00FFAB" },
            { value: "97%", label: "API Cost Cut via RAG", icon: "📉", color: "#00B2FF" },
            { value: "20+", label: "Developers Mentored", icon: "👥", color: "#9B59B6" },
            { value: "100%", label: "Production Delivery", icon: "⚡", color: "#FFD700" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl p-5 text-center border"
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                borderColor: "rgba(255, 255, 255, 0.08)",
                backdropFilter: "blur(12px)",
              }}
            >
              <div className="text-2xl mb-1">{item.icon}</div>
              <div className="text-3xl font-black" style={{ color: item.color }}>{item.value}</div>
              <p className="text-xs text-gray-400 font-mono mt-1">{item.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Timeline of Experience */}
        <div className="space-y-8 mb-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ y: 35, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.15 * index }}
              whileHover={{ y: -4 }}
              className="rounded-3xl p-6 md:p-9 border relative overflow-hidden transition-all duration-300"
              style={{
                background: "linear-gradient(145deg, rgba(16, 26, 21, 0.8) 0%, rgba(13, 19, 16, 0.9) 100%)",
                borderColor: `${exp.accent}45`,
                boxShadow: `0 18px 40px rgba(0, 0, 0, 0.5), 0 0 30px ${exp.accent}15`,
                backdropFilter: "blur(14px)",
              }}
            >
              {/* Top Accent Gradient Line */}
              <div 
                className="absolute top-0 left-0 right-0 h-1" 
                style={{ background: `linear-gradient(90deg, ${exp.accent}, #00B2FF, transparent)` }}
              />

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-1.5">
                    <h2 className="text-2xl md:text-3xl font-black text-white">
                      {exp.role}
                    </h2>
                    <span 
                      className="text-xs font-mono font-bold px-3 py-1 rounded-full"
                      style={{
                        background: `${exp.accent}20`,
                        border: `1px solid ${exp.accent}60`,
                        color: exp.accent,
                      }}
                    >
                      {exp.badge}
                    </span>
                  </div>

                  <p className="text-base font-mono font-semibold" style={{ color: exp.accent }}>
                    {exp.company} <span className="text-gray-500">•</span> <span className="text-gray-400 text-sm font-normal">{exp.location}</span>
                  </p>
                </div>

                <div className="font-mono">
                  <span className="inline-block px-3.5 py-1.5 rounded-xl text-xs bg-white/5 border border-white/10 text-gray-300">
                    🗓️ {exp.period}
                  </span>
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-3.5 mb-6">
                {exp.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-3 text-sm md:text-base text-gray-200 leading-relaxed">
                    <span style={{ color: exp.accent }} className="font-bold flex-shrink-0 mt-1">
                      ▹
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                {exp.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-xs font-mono px-3 py-1 rounded-lg"
                    style={{
                      background: `${exp.accent}15`,
                      border: `1px solid ${exp.accent}30`,
                      color: exp.accent,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
