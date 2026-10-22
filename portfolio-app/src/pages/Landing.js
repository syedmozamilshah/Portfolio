import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import CodeBlock from '../components/CodeBlock';
import profilePic from '../pics/aboutpagepic.png';

const Landing = () => {
  const [textIndex, setTextIndex] = useState(0);
  const textOptions = [
    { text: 'LLM Agents & RAG', color: '#00FFAB' },
    { text: 'Full-Stack SaaS', color: '#00B2FF' },
    { text: 'Deep Learning & Vision', color: '#9B59B6' },
    { text: 'Cross-Platform Mobile', color: '#FF6B35' }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % textOptions.length);
    }, 2400);
    
    return () => clearInterval(interval);
  }, [textOptions.length]);

  const codeSnippet = {
    code: `from zamli import motivation, hardwork
from zamli.utils import success

def build_future():
    passion = motivation.get_passion()
    effort = hardwork.daily_commitment()
    skills = ["Autonomous Agents", "RAG Systems", "Full-Stack SaaS", "Deep Learning"]
    
    while not success.achieved():
        learn_cutting_edge(skills)
        ship_production_systems(passion)
        effort += 1
        
    return "Syed Mozamil Shah — Ready for Impact"

print(build_future())`,
    output: "⚡ Full Stack AI Engineer • Production Systems • LLM Agent Architect"
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center px-4 pt-28 pb-16 z-10">
      {/* ─── Hero Section with 3D Profile Card ─── */}
      <div className="w-full max-w-6xl mb-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono mb-5 border"
              style={{
                background: "rgba(0, 255, 171, 0.08)",
                borderColor: "rgba(0, 255, 171, 0.3)",
                color: "#00FFAB",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
              Available for Full Stack AI Engineering Roles
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tight leading-tight py-1"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Syed Mozamil Shah<span className="text-neon-green">.</span>
            </motion.h1>
            
            <motion.h2 
              className="text-2xl md:text-4xl font-bold text-gray-400 mb-6 flex flex-wrap items-center justify-center lg:justify-start gap-2"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span>Specializing in</span>
              <span 
                className="transition-all duration-300 font-extrabold"
                style={{ 
                  color: textOptions[textIndex].color,
                  textShadow: `0 0 20px ${textOptions[textIndex].color}60`
                }}
              >
                {textOptions[textIndex].text}
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-gray-300 max-w-2xl mb-8 text-base md:text-lg leading-relaxed font-sans"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Full Stack AI Engineer with proven production experience architecting end-to-end 
              intelligent systems, RAG pipelines, LLM multi-agent networks, and high-performance SaaS applications.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link 
                to="/projects"
                className="px-8 py-3.5 rounded-2xl font-bold text-dark-bg transition-all duration-300 flex items-center justify-center gap-2"
                style={{
                  background: "linear-gradient(135deg, #00FFAB, #00B2FF)",
                  boxShadow: "0 0 25px rgba(0, 255, 171, 0.3)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-3px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
              >
                <span>Explore Projects (7+)</span>
                <span>→</span>
              </Link>
              <Link 
                to="/experience"
                className="px-8 py-3.5 border rounded-2xl font-bold text-gray-300 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  borderColor: "rgba(255, 255, 255, 0.15)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#00FFAB";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.15)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <span>View Experience</span>
              </Link>
            </motion.div>
            
            {/* Social Links */}
            <motion.div 
              className="flex gap-5 justify-center lg:justify-start text-xl text-gray-400"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <a 
                href="https://github.com/syedmozamilshah" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-neon-green hover:text-neon-green transition-all duration-200"
                title="GitHub"
              >
                <FaGithub />
              </a>
              <a 
                href="https://www.linkedin.com/in/syed-mozamil-shah-873a26230" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-neon-blue hover:text-neon-blue transition-all duration-200"
                title="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a 
                href="mailto:syedmozamilshah99@gmail.com" 
                className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-neon-green hover:text-neon-green transition-all duration-200"
                title="Email"
              >
                <FaEnvelope />
              </a>
            </motion.div>
          </div>
          
          {/* 3D Profile Avatar with Glowing Border */}
          <motion.div 
            className="flex-shrink-0 relative group"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ scale: 1.03, rotateZ: 1 }}
          >
            {/* Ambient Behind Glow */}
            <div 
              className="absolute -inset-2 rounded-3xl opacity-30 group-hover:opacity-75 blur-xl transition-all duration-500"
              style={{
                background: "linear-gradient(135deg, #00FFAB, #00B2FF, #9B59B6)",
              }}
            />
            
            <div 
              className="relative rounded-3xl p-1.5 border overflow-hidden"
              style={{
                background: "linear-gradient(145deg, #101a15, #0d1310)",
                borderColor: "rgba(0, 255, 171, 0.4)",
              }}
            >
              <img 
                src={profilePic} 
                alt="Syed Mozamil Shah" 
                className="w-64 h-64 md:w-80 md:h-80 rounded-2xl object-cover transition-all duration-500"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* ─── Featured Experience Card ─── */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="max-w-4xl w-full mb-14 rounded-3xl p-6 md:p-8 border relative overflow-hidden"
        style={{
          background: "linear-gradient(145deg, rgba(16, 26, 21, 0.8) 0%, rgba(13, 19, 16, 0.9) 100%)",
          borderColor: "rgba(0, 255, 171, 0.35)",
          boxShadow: "0 15px 40px rgba(0, 0, 0, 0.5), 0 0 30px rgba(0, 255, 171, 0.1)",
          backdropFilter: "blur(14px)",
        }}
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xl">💼</span>
              <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-neon-green/20 text-neon-green border border-neon-green/40">
                Current / Recent Role
              </span>
            </div>
            <h3 className="text-2xl font-black text-white">Full Stack AI Engineer</h3>
            <p className="text-neon-green font-mono text-sm font-semibold">
              TubeRisers Private Limited <span className="text-gray-500">•</span> Islamabad
            </p>
          </div>
          <span className="px-3 py-1 rounded-xl text-xs font-mono bg-white/5 border border-white/10 text-gray-300 w-fit">
            April 2025 – April 2026
          </span>
        </div>

        <ul className="space-y-2.5 text-sm text-gray-300 mb-4">
          <li className="flex items-start gap-2.5">
            <span className="text-neon-green font-bold flex-shrink-0 mt-0.5">▹</span>
            <span>
              Led the architecture and deployment of <strong>5+ end-to-end production AI systems</strong> (LLM agents, RAG pipelines, vector & relational databases, automation workflows, and frontend integrations), <strong>cutting YouTube Data API costs by 97%</strong>.
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="text-neon-green font-bold flex-shrink-0 mt-0.5">▹</span>
            <span>
              Engineered and scaled full-stack AI infrastructure from design to cloud deployment, backend services, and retrieval workflows to deliver reliable SaaS solutions.
            </span>
          </li>
        </ul>

        <div className="flex justify-end">
          <Link to="/experience" className="text-xs font-mono text-neon-blue hover:text-neon-green transition-colors">
            View Full Experience & Details →
          </Link>
        </div>
      </motion.div>

      {/* ─── Python Code Block ─── */}
      <motion.div 
        className="max-w-4xl mx-auto mb-14 w-full"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <div className="text-center mb-4">
          <h3 className="text-xl font-bold font-mono text-neon-green">motivation.py</h3>
        </div>
        <CodeBlock code={codeSnippet.code} output={codeSnippet.output} />
      </motion.div>

      {/* ─── 3D Quick Metrics ─── */}
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-4xl w-full"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        {[
          { value: "7+", label: "Major Systems Built", icon: "🚀", color: "#00FFAB" },
          { value: "97%", label: "API Cost Cut via RAG", icon: "💰", color: "#00B2FF" },
          { value: "5+", label: "Production AI Agents", icon: "🤖", color: "#9B59B6" },
          { value: "85%+", label: "Model Test Accuracy", icon: "🎯", color: "#FF6B35" },
        ].map((stat, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -6, scale: 1.02 }}
            className="rounded-2xl p-5 text-center border transition-all duration-300"
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              borderColor: "rgba(255, 255, 255, 0.08)",
              backdropFilter: "blur(12px)",
            }}
          >
            <div className="text-2xl mb-1">{stat.icon}</div>
            <div className="text-3xl font-black" style={{ color: stat.color }}>{stat.value}</div>
            <p className="text-xs text-gray-400 font-mono mt-1">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Landing;
