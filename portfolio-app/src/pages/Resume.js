import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { motion } from 'framer-motion';
import CodeBlock from '../components/CodeBlock';

const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const resumeUrl = '/resume/Syed Mozamil Shah (Resume).pdf';

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
        "Integrated multi-agent architectures (LangGraph, FastAPI) with high-throughput real-time webhooks, automated RSS scrapers, and Supabase Edge Functions.",
        "Delivered enterprise-grade creator analytics and generative AI scriptwriting suites with sub-second retrieval latency across massive video vector catalogs."
      ],
      skills: ["LLM Agents", "RAG Pipelines", "LangGraph", "FastAPI", "Vector DBs", "Supabase", "React", "Python", "Cloud Architecture"]
    }
  ];

  const codeSnippet = {
    code: `#!/usr/bin/env python3
# resume_experience.py

class CareerProfile:
    def __init__(self):
        self.candidate = "Syed Mozamil Shah"
        self.current_role = "Full Stack AI Engineer"
        self.company = "TubeRisers Private Limited"
        self.key_achievement = "Cut YouTube API costs by 97% via RAG & Agentic workflows"
        
    def get_core_competencies(self):
        return [
            "End-to-End Production AI Systems",
            "Agentic AI & LangGraph Workflows",
            "High-Scale Full Stack Architecture",
            "Vector Databases & Hybrid Search",
            "SaaS Optimization & Cloud Deployments"
        ]

engineer = CareerProfile()
print(f"Role: {engineer.current_role} @ {engineer.company}")
print(f"Impact: {engineer.key_achievement}")`,
    output: "💼 Production Experience loaded: Full Stack AI Engineer @ TubeRisers Private Limited"
  };

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.6 }}
      className="container mx-auto px-4 pt-28 pb-16 max-w-6xl relative z-10"
    >
      {/* Page Header */}
      <div className="text-center mb-12">
        <p className="text-xs font-mono uppercase tracking-[0.35em] text-neon-blue mb-3">
          &lt; Career & Qualifications /&gt;
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
            Experience & Resume
          </span>
        </h1>
        <p className="text-gray-300 font-mono text-sm md:text-base max-w-2xl mx-auto mt-2">
          Proven track record in deploying production AI agents, cloud architectures, and scalable full-stack applications.
        </p>
      </div>

      {/* Code Block */}
      <div className="max-w-3xl mx-auto mb-14">
        <CodeBlock code={codeSnippet.code} output={codeSnippet.output} />
      </div>

      {/* ─── Work Experience Section ─── */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-2xl">⚡</span>
          <h2 className="text-2xl md:text-3xl font-black text-white">
            Professional Experience
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-neon-green/40 to-transparent ml-4" />
        </div>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -4 }}
              className="rounded-3xl p-6 md:p-8 border relative overflow-hidden transition-all duration-300"
              style={{
                background: "linear-gradient(145deg, rgba(16, 26, 21, 0.8) 0%, rgba(13, 19, 16, 0.9) 100%)",
                borderColor: `${exp.accent}50`,
                boxShadow: `0 15px 35px rgba(0, 0, 0, 0.5), 0 0 30px rgba(0, 255, 171, 0.1)`,
                backdropFilter: "blur(14px)",
              }}
            >
              {/* Top Accent Glow Bar */}
              <div 
                className="absolute top-0 left-0 right-0 h-1" 
                style={{ background: `linear-gradient(90deg, ${exp.accent}, #00B2FF)` }}
              />

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h3 className="text-2xl font-black text-white">
                      {exp.role}
                    </h3>
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

                  <p className="text-neon-green font-mono font-semibold text-base">
                    {exp.company} <span className="text-gray-500">•</span> <span className="text-gray-400 text-sm font-normal">{exp.location}</span>
                  </p>
                </div>

                <div className="text-left md:text-right font-mono">
                  <span className="inline-block px-3 py-1.5 rounded-xl text-xs bg-white/5 border border-white/10 text-gray-300">
                    🗓️ {exp.period}
                  </span>
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-3 mb-6">
                {exp.points.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-3 text-sm md:text-base text-gray-300 leading-relaxed">
                    <span style={{ color: exp.accent }} className="font-bold flex-shrink-0 mt-1">
                      ▹
                    </span>
                    <span>{pt}</span>
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

      {/* ─── PDF Resume Section ─── */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-2xl">📄</span>
          <h2 className="text-2xl md:text-3xl font-black text-white">
            Curriculum Vitae (PDF)
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-neon-blue/40 to-transparent ml-4" />
        </div>

        <div 
          className="rounded-3xl p-6 md:p-8 border text-center"
          style={{
            background: "rgba(255, 255, 255, 0.02)",
            borderColor: "rgba(255, 255, 255, 0.08)",
            backdropFilter: "blur(14px)",
          }}
        >
          <div className="mb-6 flex justify-center">
            <a 
              href={resumeUrl} 
              download="Syed_Mozamil_Shah_Resume.pdf"
              className="inline-flex items-center gap-2 px-8 py-3.5 font-bold rounded-2xl text-dark-bg transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #00FFAB, #00B2FF)",
                boxShadow: "0 0 25px rgba(0, 255, 171, 0.3)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              <span>📥 Download Official PDF Resume</span>
            </a>
          </div>
          
          <div className="flex justify-center overflow-x-auto py-2">
            <Document 
              file={resumeUrl} 
              onLoadSuccess={onDocumentLoadSuccess}
              className="rounded-xl overflow-hidden border border-neon-green/20 shadow-2xl"
            >
              <Page 
                pageNumber={1} 
                renderTextLayer={false}
                renderAnnotationLayer={false}
                className="max-w-full"
                width={Math.min(800, typeof window !== 'undefined' ? window.innerWidth - 60 : 800)}
              />
            </Document>
          </div>
          
          {numPages && (
            <div className="text-center mt-4 text-gray-500 font-mono text-sm">
              Page 1 of {numPages}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
