import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ─── Project Data ─────────────────────────────────────────────────── */
const projects = [
  {
    id: 1,
    title: "HealthVerse",
    emoji: "🏥",
    badge: "Final Year Project",
    badgeColor: "#00FFAB",
    category: "AI / Healthcare",
    description:
      "A full-stack intelligent ophthalmology platform connecting patients and eye-care specialists through AI triage, real-time consultations, digital prescriptions, and smart medication tracking.",
    longDescription:
      "HealthVerse is an intelligent healthcare platform designed specifically for ophthalmology. It bridges patients and eye-care specialists with AI pre-triage across multiple languages (English, Urdu, and Roman Urdu), intelligent doctor routing, real-time appointment booking via SignalR, an AI-assisted doctor dashboard in Blazor, and structured digital prescriptions with automated adherence tracking.",
    features: [
      "Multilingual voice-to-text intake in Urdu, English & Roman Urdu via Speechnotes API",
      "LangGraph ReAct AI triage agent with Qdrant vector database (RAG) for ophthalmology cases",
      "Interactive multi-round MCQ follow-up questions reaching >=85% diagnostic confidence",
      "Real-time appointment alerts to doctors via SignalR and Stripe PKR payment integration",
      "Doctor decision-support AI agents automatically scanning for 16 ophthalmic emergency red flags",
      "Structured prescriptions with Google Gemini AI summaries & Cloudinary PDF delivery",
      "Patient medication tracker with interactive adherence charts and push notifications via FCM",
      "PMDC doctor license verification workflow with admin approval gating",
    ],
    techStack: [
      ".NET 8", "ASP.NET Core", "Flutter", "Blazor Server",
      "LangGraph", "FastAPI", "Python", "MongoDB Atlas",
      "Qdrant Cloud", "Groq", "Google Gemini AI", "Stripe",
      "Firebase FCM", "SignalR", "Cloudinary",
    ],
    githubUrl: "https://github.com/syedmozamilshah/HealthVerse",
    liveUrl: "",
    accentColor: "#00FFAB",
    glowColor: "rgba(0,255,171,0.25)",
  },
  {
    id: 2,
    title: "Action Recognition — CNN + LSTM",
    emoji: "🎯",
    badge: "Deep Learning",
    badgeColor: "#9B59B6",
    category: "AI / ML",
    description:
      "Image-based human action recognition system using a hybrid CNN (ResNet50) + LSTM architecture trained on the Stanford-40 dataset with ~85% test accuracy.",
    longDescription:
      "An end-to-end deep learning pipeline that takes single-frame images, extracts high-dimensional spatial features using a pre-trained ResNet50 backbone (ImageNet weights), and models sequence dynamics via an LSTM layer to predict human actions. The model is deployed as a GPU-accelerated REST API on Modal.com with an interactive React frontend.",
    features: [
      "Hybrid ResNet50 + LSTM architecture achieving ~85% test accuracy across 8 Stanford-40 actions",
      "Serverless GPU deployment on Modal.com using NVIDIA T4 GPU and FastAPI",
      "High-performance REST API endpoints for direct image upload, file streams, and Base64 input",
      "Modern React 18 frontend with real-time confidence scores and probability distributions",
      "Training optimized with Adam, Categorical Cross-Entropy, EarlyStopping, and ReduceLROnPlateau",
      "Selected actions: running, climbing, reading, drinking, applauding, waving hands, brushing teeth, riding a bike",
    ],
    techStack: [
      "TensorFlow 2.18", "Keras 3.7", "ResNet50", "LSTM",
      "FastAPI", "Modal.com (T4 GPU)", "React 18", "Python 3.11",
      "Stanford-40 Dataset",
    ],
    githubUrl: "https://github.com/syedmozamilshah/Action-Recognition-using-CNN-and-LSTM",
    liveUrl: "https://syedmozamilsherazi--action-recognition-api-web-app.modal.run",
    accentColor: "#9B59B6",
    glowColor: "rgba(155,89,182,0.25)",
  },
  {
    id: 3,
    title: "BlowMe AI",
    emoji: "📺",
    badge: "SaaS Platform",
    badgeColor: "#E74C3C",
    category: "Full Stack / AI",
    description:
      "All-in-one YouTube management & intelligence platform for creators — real-time competitor tracking via RSS/WebSub, AI script generation, and analytics.",
    longDescription:
      "A private, invite-only intelligence command center designed for professional YouTube content creators and production teams. BlowMe AI centralizes competitor channel monitoring via real-time RSS polling and WebSub webhooks, offers AI-powered scriptwriting, SEO optimization, and title generators, and organizes intelligence into dedicated content buckets with full role-based access control.",
    features: [
      "Real-time channel upload tracking with 90-second RSS polling and YouTube WebSub webhooks",
      "AI content creation suite: production-ready script generator, SEO metadata optimizer & viral title generator",
      "Automated competitor finder with background cron jobs refreshing channel metrics every 12 hours",
      "Three distinct video intelligence curation buckets: Ideation, USA, and Spanish content pipelines",
      "Role-based access control with Supabase Auth, admin verification queues, and Stripe billing",
      "Serverless backend powered by Supabase Edge Functions with PostgreSQL real-time subscriptions",
    ],
    techStack: [
      "React", "TypeScript", "Supabase", "Vite",
      "Supabase Edge Functions", "YouTube API", "OpenAI API",
      "RSS & WebSub", "PostgreSQL", "Stripe",
    ],
    githubUrl: "https://github.com/syedmozamilshah/yt_management_and_analysis",
    liveUrl: "",
    accentColor: "#E74C3C",
    glowColor: "rgba(231,76,60,0.25)",
  },
  {
    id: 4,
    title: "HireIQ",
    emoji: "💼",
    badge: "Recruitment AI",
    badgeColor: "#00B2FF",
    category: "AI / Full Stack",
    description:
      "AI-powered recruitment platform improving job-recruitment alignment by 35% through automated resume parsing, skill extraction, and candidate matching.",
    longDescription:
      "A dual-sided recruitment ecosystem for job seekers and corporate recruiters. Employs natural language processing to parse diverse resume formats, accurately extract candidate competencies, and score alignments against live job specifications. Includes a comprehensive recruiter dashboard for pipeline tracking.",
    features: [
      "Intelligent resume parsing and automated candidate skill vectorization",
      "Job-matching algorithm increasing candidate-role alignment by 35%",
      "AI-driven candidate tracking dashboard with status workflow management",
      "Full role-based access for applicants and hiring managers",
      "Real-time job postings with rich search and facet filtering",
    ],
    techStack: ["React", "Node.js", "MongoDB", "Express", "AI APIs", "JWT"],
    githubUrl: "https://github.com/syedmozamilshah/HireIQ",
    liveUrl: "",
    accentColor: "#00B2FF",
    glowColor: "rgba(0,178,255,0.25)",
  },
  {
    id: 5,
    title: "QalbCare",
    emoji: "💚",
    badge: "Mental Health",
    badgeColor: "#2ECC71",
    category: "AI / Mobile",
    description:
      "Islamic emotional therapy mobile app providing personalized healing sessions using Quran, Hadith, and CBT techniques through LangGraph-driven modular flows.",
    longDescription:
      "A mobile emotional therapy application blending Islamic spiritual teachings with evidence-based Cognitive Behavioral Therapy (CBT). Features the QalbCare+ 7-day healing journey, tailored guidance rooted in user emotional states, and modular conversation graphs powered by LangGraph.",
    features: [
      "LangGraph-driven modular therapy flow architecture for context-rich guidance",
      "Personalized emotion recommendation system referencing Quranic verses and authentic Hadith",
      "QalbCare+ structured 7-day progressive emotional healing journey",
      "Cross-platform mobile application developed with Flutter for iOS and Android",
      "Secure cloud persistence with Firebase Authentication and Firestore",
    ],
    techStack: ["Flutter", "Dart", "Firebase", "LangGraph", "Python", "AI APIs"],
    githubUrl: "https://github.com/syedmozamilshah/QalbCare",
    liveUrl: "",
    accentColor: "#2ECC71",
    glowColor: "rgba(46,204,113,0.25)",
  },
  {
    id: 6,
    title: "Doctra",
    emoji: "🩺",
    badge: "MedTech AI",
    badgeColor: "#F39C12",
    category: "AI / Healthcare",
    description:
      "AI-based prescription support system assisting physicians in generating structured prescriptions via interactive follow-up questioning, boosting workflow efficiency by 55%.",
    longDescription:
      "A clinical decision-support tool designed to eliminate manual prescription overhead. Doctors interact with an LLM-powered assistant that asks targeted diagnostic follow-up questions, cross-references symptoms, and generates verified prescriptions and lab recommendations.",
    features: [
      "Conversational AI interface for interactive physician diagnostic follow-ups",
      "Automated clinical prescriptions and lab test recommendations via LLM synthesis",
      "55% improvement in prescription turnaround and administrative workflow efficiency",
      "Secure medical record persistence on MongoDB with comprehensive audit trails",
      "Interactive doctor consultation workspace built with React and Node.js",
    ],
    techStack: ["React", "Node.js", "MongoDB", "Express", "OpenAI API"],
    githubUrl: "https://github.com/syedmozamilshah/Doctra",
    liveUrl: "",
    accentColor: "#F39C12",
    glowColor: "rgba(243,156,18,0.25)",
  },
  {
    id: 7,
    title: "Job Khoji",
    emoji: "🔍",
    badge: "MERN Stack",
    badgeColor: "#1ABC9C",
    category: "Full Stack",
    description:
      "MERN stack job marketplace with real-time web scraping, custom management dashboards, and intelligent vector-based recommendation algorithms.",
    longDescription:
      "An intelligent job discovery portal combining live web scrapers with employer-submitted postings. Provides tailored dashboards for employers to manage vacancies and candidates, with recommendation vector matching that increases listing relevance by 40%.",
    features: [
      "Real-time web scrapers seamlessly aggregating remote and local job boards",
      "Intelligent job recommendation vectors enhancing candidate discovery by 40%",
      "Personalized dashboards for applicants to track submissions and employers to manage listings",
      "Complete CRUD job management with salary benchmarks, category filters, and location tags",
      "Optimized MongoDB aggregation pipelines for instant full-text search",
    ],
    techStack: ["MongoDB", "Express", "React", "Node.js", "Web Scraping", "REST APIs"],
    githubUrl: "https://github.com/syedmozamilshah/JobKhoji",
    liveUrl: "",
    accentColor: "#1ABC9C",
    glowColor: "rgba(26,188,156,0.25)",
  },
];

/* ─── Detail Modal ─────────────────────────────────────────────────── */
const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6"
      style={{
        background: "rgba(5, 10, 8, 0.85)",
        backdropFilter: "blur(16px)",
      }}
    >
      <motion.div
        initial={{ scale: 0.9, y: 30, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, y: 30, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl p-6 md:p-8 border shadow-2xl"
        style={{
          background: "linear-gradient(145deg, #0d1713 0%, #111a16 50%, #0d1713 100%)",
          borderColor: `${project.accentColor}50`,
          boxShadow: `0 25px 60px ${project.glowColor}, 0 0 0 1px ${project.accentColor}30`,
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors border border-white/10 hover:border-white/30"
          style={{ background: "rgba(255,255,255,0.05)" }}
          aria-label="Close modal"
        >
          ✕
        </button>

        {/* Modal Header */}
        <div className="flex items-start gap-4 mb-6 pr-12">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
            style={{
              background: `${project.accentColor}15`,
              border: `1px solid ${project.accentColor}40`,
            }}
          >
            {project.emoji}
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h2
                className="text-2xl md:text-3xl font-black"
                style={{ color: project.accentColor }}
              >
                {project.title}
              </h2>
              <span
                className="text-xs font-bold px-2.5 py-0.5 rounded-full"
                style={{
                  background: `${project.badgeColor}20`,
                  border: `1px solid ${project.badgeColor}60`,
                  color: project.badgeColor,
                }}
              >
                {project.badge}
              </span>
            </div>
            <p className="text-xs text-gray-400 font-mono">{project.category}</p>
          </div>
        </div>

        {/* Detailed Description */}
        <div className="mb-6">
          <h4 className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-2">Overview</h4>
          <p className="text-gray-200 text-sm md:text-base leading-relaxed">
            {project.longDescription}
          </p>
        </div>

        {/* Features List */}
        <div className="mb-6">
          <h4
            className="text-xs font-mono uppercase tracking-widest mb-3"
            style={{ color: project.accentColor }}
          >
            Key Capabilities & Features
          </h4>
          <ul className="space-y-2.5">
            {project.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                <span
                  style={{ color: project.accentColor }}
                  className="font-bold flex-shrink-0 mt-0.5"
                >
                  ▹
                </span>
                <span className="leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Full Tech Stack */}
        <div className="mb-8">
          <h4 className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-3">
            Technology Stack & Tools
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, i) => (
              <span
                key={i}
                className="text-xs font-mono px-3 py-1 rounded-lg"
                style={{
                  background: `${project.accentColor}15`,
                  border: `1px solid ${project.accentColor}35`,
                  color: project.accentColor,
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold text-sm transition-all duration-300"
              style={{
                background: `${project.accentColor}20`,
                border: `1px solid ${project.accentColor}60`,
                color: project.accentColor,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = `${project.accentColor}35`;
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = `${project.accentColor}20`;
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              View on GitHub
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold text-sm text-dark-bg transition-all duration-300"
              style={{
                background: `linear-gradient(135deg, ${project.accentColor}, #00B2FF)`,
                boxShadow: `0 0 25px ${project.glowColor}`,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Open Live API
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

/* ─── 3D Card ──────────────────────────────────────────────────────── */
const ProjectCard = ({ project, index, onSelect }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -8, scale: 1.015 }}
      onClick={() => onSelect(project)}
      className="relative rounded-3xl p-6 md:p-7 flex flex-col justify-between cursor-pointer border transition-all duration-300 group"
      style={{
        background: "linear-gradient(145deg, rgba(16, 26, 21, 0.75) 0%, rgba(13, 19, 16, 0.85) 100%)",
        borderColor: "rgba(255, 255, 255, 0.08)",
        backdropFilter: "blur(14px)",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${project.accentColor}60`;
        e.currentTarget.style.boxShadow = `0 20px 45px ${project.glowColor}, 0 0 0 1px ${project.accentColor}30`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
        e.currentTarget.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.4)";
      }}
    >
      {/* Top Bar: Emoji + Badge */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-4xl filter drop-shadow-lg transition-transform duration-300 group-hover:scale-110">
            {project.emoji}
          </span>
          <span
            className="text-xs font-mono font-bold px-3 py-1 rounded-full"
            style={{
              background: `${project.badgeColor}15`,
              border: `1px solid ${project.badgeColor}40`,
              color: project.badgeColor,
            }}
          >
            {project.badge}
          </span>
        </div>

        {/* Title & Category */}
        <h3
          className="text-xl md:text-2xl font-bold mb-1 transition-colors duration-200"
          style={{ color: project.accentColor }}
        >
          {project.title}
        </h3>
        <p className="text-xs text-gray-500 font-mono mb-4">{project.category}</p>

        {/* Description - Uncut, clean text */}
        <p className="text-gray-300 text-sm leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Key Features Preview */}
        <div className="mb-5 space-y-2">
          {project.features.slice(0, 3).map((f, i) => (
            <div key={i} className="flex items-start gap-2.5 text-xs text-gray-400">
              <span style={{ color: project.accentColor }} className="font-bold flex-shrink-0 mt-0.5">
                ▹
              </span>
              <span className="leading-relaxed">{f}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section: Tech Stack & Action Button */}
      <div>
        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.techStack.slice(0, 5).map((tech, i) => (
            <span
              key={i}
              className="text-xs font-mono px-2.5 py-1 rounded-md"
              style={{
                background: `${project.accentColor}12`,
                border: `1px solid ${project.accentColor}25`,
                color: project.accentColor,
              }}
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 5 && (
            <span className="text-xs font-mono px-2 py-1 rounded-md text-gray-500 bg-white/5 border border-white/10">
              +{project.techStack.length - 5}
            </span>
          )}
        </div>

        {/* View Details CTA Button */}
        <div className="flex items-center justify-between pt-4 border-t border-white/5">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onSelect(project);
            }}
            className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase transition-all duration-200"
            style={{ color: project.accentColor }}
          >
            <span>View Details & Tech</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </button>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-gray-400 hover:text-white transition-colors"
              title="GitHub repository"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

/* ─── Main Projects Page ───────────────────────────────────────────── */
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const uniqueCategories = ["All", ...new Set(projects.map((p) => p.category))];

  const filtered = projects.filter((p) => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const matchSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchCat && matchSearch;
  });

  return (
    <div className="relative min-h-screen pt-28 pb-20 px-4 md:px-8">
      {/* Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header - Fixed line-height and padding so text is never cut off */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-mono uppercase tracking-[0.35em] text-neon-blue mb-3">
            &lt; Innovations & Systems /&gt;
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black py-3 leading-tight tracking-tight">
            <span
              className="inline-block"
              style={{
                background: "linear-gradient(135deg, #00FFAB 0%, #00B2FF 50%, #9B59B6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Projects
            </span>
          </h1>

          <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto font-mono leading-relaxed mt-2">
            Engineering end-to-end intelligent systems at the intersection of{" "}
            <span className="text-neon-green font-semibold">Autonomous AI</span>,{" "}
            <span className="text-neon-blue font-semibold">Full-Stack Cloud Architecture</span>, and{" "}
            <span style={{ color: "#9B59B6" }} className="font-semibold">Deep Learning</span>.
          </p>
        </motion.div>

        {/* Quick Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {[
            { label: "Production & Major Projects", value: "7+", icon: "🚀" },
            { label: "Core AI & LLM Systems", value: "5", icon: "🤖" },
            { label: "Full Stack Techs", value: "25+", icon: "⚙️" },
            { label: "Open Source Codebases", value: "7", icon: "🌐" },
          ].map((stat, i) => (
            <div
              key={i}
              className="rounded-2xl p-4 text-center border"
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                borderColor: "rgba(255, 255, 255, 0.08)",
                backdropFilter: "blur(10px)",
              }}
            >
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className="text-2xl md:text-3xl font-black text-neon-green">{stat.value}</div>
              <div className="text-xs text-gray-400 font-mono mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Search & Category Filter Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-col md:flex-row gap-4 mb-10 items-center justify-between"
        >
          {/* Search Input */}
          <div className="relative w-full md:max-w-md">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search by title, stack (e.g. LangGraph, Flutter)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl text-sm font-mono text-gray-200 placeholder-gray-500 outline-none transition-all"
              style={{
                background: "rgba(255, 255, 255, 0.04)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#00FFAB80")}
              onBlur={(e) => (e.target.style.borderColor = "rgba(255, 255, 255, 0.1)")}
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-end w-full md:w-auto">
            {uniqueCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className="px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all duration-200"
                style={{
                  background: activeCategory === category ? "#00FFAB22" : "rgba(255,255,255,0.04)",
                  border: activeCategory === category ? "1px solid #00FFAB80" : "1px solid rgba(255,255,255,0.08)",
                  color: activeCategory === category ? "#00FFAB" : "#9ca3af",
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Results Info */}
        <p className="text-xs text-gray-500 font-mono mb-6">
          Showing {filtered.length} of {projects.length} projects • Click any card for architectural breakdown
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onSelect={setSelectedProject}
            />
          ))}
        </div>

        {/* Empty Search State */}
        {filtered.length === 0 && (
          <div className="text-center py-20 rounded-3xl border border-white/10" style={{ background: "rgba(255,255,255,0.02)" }}>
            <span className="text-5xl block mb-3">🔍</span>
            <p className="text-gray-400 font-mono mb-4">No projects matched your criteria.</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All");
              }}
              className="text-neon-green text-sm underline font-mono"
            >
              Reset all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;