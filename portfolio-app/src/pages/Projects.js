import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

/* ─── Project Data ─────────────────────────────────────────────────── */
const projects = [
  {
    id: 1,
    title: "HealthVerse",
    emoji: "🏥",
    badge: "Final Year Project",
    badgeColor: "#FFD700",
    category: "AI / Healthcare",
    description:
      "AI-Powered Ophthalmology Platform connecting patients and eye-care specialists through AI triage, real-time consultations, digital prescriptions, and smart medication tracking.",
    longDescription:
      "A full-stack intelligent healthcare system for Pakistan that bridges patients and eye-care specialists. Features multilingual voice triage (Urdu/English/Roman Urdu), RAG-powered MCQ generation, real-time red flag detection, and a complete prescription-to-reminder pipeline.",
    features: [
      "Multilingual voice-to-text triage in Urdu, English & Roman Urdu",
      "LangGraph ReAct AI agents with RAG (Qdrant) for ophthalmology triage",
      "Real-time SignalR appointment notifications & doctor dashboard (Blazor)",
      "Digital prescriptions with Gemini AI summaries, Cloudinary PDFs & FCM push",
      "PMDC license verification + Stripe subscription gating for doctors",
      "Flutter patient app with fl_chart adherence graphs & medication tracking",
    ],
    techStack: [
      ".NET 8", "ASP.NET Core", "Flutter", "Blazor Server",
      "LangGraph", "FastAPI", "Python", "MongoDB Atlas",
      "Qdrant", "Groq", "Gemini AI", "Stripe", "Firebase FCM",
      "SignalR", "Cloudinary",
    ],
    githubUrl: "https://github.com/syedmozamilshah/HealthVerse",
    liveUrl: "",
    accentColor: "#00FFAB",
    glowColor: "rgba(0,255,171,0.3)",
    icon: "🏥",
  },
  {
    id: 2,
    title: "Action Recognition — CNN + LSTM",
    emoji: "🎯",
    badge: "Deep Learning",
    badgeColor: "#9B59B6",
    category: "AI / ML",
    description:
      "End-to-end action recognition pipeline using CNN (ResNet50) + LSTM on the Stanford-40 dataset. ~85% test accuracy with a live REST API on Modal.com and a React frontend.",
    longDescription:
      "Trained on 8 action classes from Stanford-40, this system extracts spatial features via ResNet50 transfer learning, then routes them through an LSTM for temporal classification. Deployed as a GPU-accelerated FastAPI on Modal.com.",
    features: [
      "ResNet50 + LSTM hybrid architecture — ~85% test accuracy",
      "GPU-accelerated FastAPI deployed on Modal.com (NVIDIA T4)",
      "Supports image upload, file, and base64 prediction endpoints",
      "React frontend with live prediction & confidence scores",
      "Early stopping + ReduceLROnPlateau training callbacks",
      "8 action classes: running, climbing, reading, drinking & more",
    ],
    techStack: [
      "TensorFlow 2.18", "Keras", "ResNet50", "LSTM",
      "FastAPI", "Modal.com", "React", "Python 3.11",
      "Stanford-40 Dataset",
    ],
    githubUrl: "https://github.com/syedmozamilshah/Action-Recognition-using-CNN-and-LSTM",
    liveUrl: "https://syedmozamilsherazi--action-recognition-api-web-app.modal.run",
    accentColor: "#9B59B6",
    glowColor: "rgba(155,89,182,0.3)",
    icon: "🎯",
  },
  {
    id: 3,
    title: "BlowMe AI",
    emoji: "📺",
    badge: "SaaS Platform",
    badgeColor: "#E74C3C",
    category: "Full Stack / AI",
    description:
      "Invite-only YouTube intelligence command center for professional content creators — track channels via RSS/WebSub, generate AI scripts, spy on competitors, and dominate your niche.",
    longDescription:
      "An all-in-one YouTube management platform with real-time RSS polling, WebSub webhooks, AI-powered script/SEO/title generation, competitor analysis, admin dashboards, and role-based access control built on Supabase Edge Functions.",
    features: [
      "Real-time RSS channel tracking with 90-second polling + WebSub webhooks",
      "AI script generator, SEO optimizer & title generator tools",
      "Competitor channel finder with 12-hour automated refresh",
      "3-tab content library: Ideation, USA, Spanish buckets",
      "Role-based access: regular user, admin (own data), admin (all data)",
      "Supabase Edge Functions, Stripe integration & admin analytics dashboard",
    ],
    techStack: [
      "React", "TypeScript", "Supabase", "Vite",
      "Supabase Edge Functions", "YouTube API", "OpenAI API",
      "RSS / WebSub", "Stripe", "PostgreSQL",
    ],
    githubUrl: "https://github.com/syedmozamilshah/yt_management_and_analysis",
    liveUrl: "",
    accentColor: "#E74C3C",
    glowColor: "rgba(231,76,60,0.3)",
    icon: "📺",
  },
  {
    id: 4,
    title: "HireIQ",
    emoji: "💼",
    badge: "Recruitment AI",
    badgeColor: "#00B2FF",
    category: "AI / Full Stack",
    description:
      "AI-powered recruitment platform improving job-recruitment alignments by 35% through resume parsing, skill extraction, and intelligent job-matching algorithms.",
    longDescription:
      "A dual-sided platform for job seekers and recruiters. Uses AI to parse resumes, extract skills, and match candidates with relevant roles. Includes an AI-powered recruiter dashboard for tracking candidate pipelines.",
    features: [
      "AI-powered resume parsing and skill extraction",
      "Intelligent job-matching with recommendation vectors",
      "Recruiter dashboard for tracking and managing candidates",
      "35% improvement in job-recruitment alignment accuracy",
      "Real-time job listings with advanced filtering",
      "User and recruiter role-based access control",
    ],
    techStack: ["React", "Node.js", "MongoDB", "Express", "AI APIs"],
    githubUrl: "https://github.com/syedmozamilshah/HireIQ",
    liveUrl: "",
    accentColor: "#00B2FF",
    glowColor: "rgba(0,178,255,0.3)",
    icon: "💼",
  },
  {
    id: 5,
    title: "QalbCare",
    emoji: "💚",
    badge: "Mental Health",
    badgeColor: "#2ECC71",
    category: "AI / Mobile",
    description:
      "Islamic Emotional Therapy Mobile App providing personalized therapy sessions using Quran, Hadith, and CBT techniques via LangGraph-driven modular therapy flows.",
    longDescription:
      "A Flutter-based mobile app that offers emotional healing through Islamic teachings. Features a 7-day QalbCare+ healing journey system, personalized recommendations based on emotional state, and LangGraph-driven modular therapy flows.",
    features: [
      "LangGraph-driven modular therapy flow architecture",
      "QalbCare+ 7-day healing journey system",
      "Recommendation engine based on user emotional state",
      "Quran, Hadith & CBT technique integration",
      "Flutter mobile app for Android and iOS",
      "Firebase backend with real-time emotional tracking",
    ],
    techStack: ["Flutter", "Firebase", "LangGraph", "Python", "AI", "Dart"],
    githubUrl: "https://github.com/syedmozamilshah/QalbCare",
    liveUrl: "",
    accentColor: "#2ECC71",
    glowColor: "rgba(46,204,113,0.3)",
    icon: "💚",
  },
  {
    id: 6,
    title: "Doctra",
    emoji: "🩺",
    badge: "MedTech AI",
    badgeColor: "#F39C12",
    category: "AI / Healthcare",
    description:
      "AI-Based Prescription Support System helping doctors generate prescriptions through interactive follow-up questioning, automating workflow efficiency by 55%.",
    longDescription:
      "An AI-powered clinical assistant that guides doctors through a conversational interface to generate precise prescriptions and test recommendations. Built with LLMs to ensure accurate, context-aware medical suggestions.",
    features: [
      "Conversational AI interface for interactive prescription generation",
      "LLM-powered follow-up questioning for accurate diagnosis support",
      "Automated test recommendations with context awareness",
      "55% improvement in prescription workflow efficiency",
      "MERN stack with OpenAI integration",
      "RESTful API architecture for clinical integrations",
    ],
    techStack: ["React", "Node.js", "MongoDB", "Express", "OpenAI"],
    githubUrl: "https://github.com/syedmozamilshah/Doctra",
    liveUrl: "",
    accentColor: "#F39C12",
    glowColor: "rgba(243,156,18,0.3)",
    icon: "🩺",
  },
  {
    id: 7,
    title: "Job Khoji",
    emoji: "🔍",
    badge: "MERN Stack",
    badgeColor: "#1ABC9C",
    category: "Full Stack",
    description:
      "MERN Stack web scraper that creates personalized dashboards for job posting, editing, and management with real-time scraping and advanced recommendation vectors.",
    longDescription:
      "A full-stack job board that combines real-time web scraping with manual job listings, delivering a 40% improvement in relevancy. Features an intuitive dashboard for both job seekers and employers with advanced recommendation algorithms.",
    features: [
      "Real-time web scraping integrated with manual listings",
      "40% improvement in job listing relevancy",
      "Advanced job matching using recommendation vectors",
      "Intuitive dashboard for job seekers and employers",
      "Full CRUD for job postings with rich filtering",
      "MERN stack with optimized MongoDB aggregation pipelines",
    ],
    techStack: ["MongoDB", "Express", "React", "Node.js", "Web Scraping"],
    githubUrl: "https://github.com/syedmozamilshah/JobKhoji",
    liveUrl: "",
    accentColor: "#1ABC9C",
    glowColor: "rgba(26,188,156,0.3)",
    icon: "🔍",
  },
];


/* ─── Floating Particles ───────────────────────────────────────────── */
const ParticleField = () => {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 5,
    color: ["#00FFAB", "#00B2FF", "#9B59B6", "#E74C3C"][Math.floor(Math.random() * 4)],
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full opacity-20"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: p.color,
            boxShadow: `0 0 ${p.size * 4}px ${p.color}`,
          }}
          animate={{
            y: [0, -80, 0],
            x: [0, Math.random() * 40 - 20, 0],
            opacity: [0.1, 0.4, 0.1],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

/* ─── 3D Project Card ──────────────────────────────────────────────── */
const ProjectCard3D = ({ project, index }) => {
  const [flipped, setFlipped] = useState(false);
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    if (!cardRef.current || flipped) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    setRotateX(((y - centerY) / centerY) * -8);
    setRotateY(((x - centerX) / centerX) * 8);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
      style={{ perspective: "1000px", height: "480px" }}
    >
      <motion.div
        ref={cardRef}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          transition: flipped
            ? "transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)"
            : "transform 0.15s ease",
          transform: flipped
            ? `rotateY(180deg) rotateX(${rotateX}deg)`
            : `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          height: "100%",
          position: "relative",
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
      >
        {/* FRONT */}
        <div
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            position: "absolute",
            inset: 0,
          }}
        >
          <div
            className="h-full rounded-2xl overflow-hidden border relative cursor-pointer"
            style={{
              background: "linear-gradient(135deg, #0d1f18 0%, #111827 50%, #0d1f18 100%)",
              borderColor: hovered ? project.accentColor : "rgba(255,255,255,0.08)",
              boxShadow: hovered
                ? `0 25px 60px ${project.glowColor}, 0 0 0 1px ${project.accentColor}40, inset 0 1px 0 rgba(255,255,255,0.1)`
                : "0 8px 32px rgba(0,0,0,0.5)",
              transition: "all 0.3s ease",
            }}
            onClick={() => setFlipped(true)}
          >
            {/* Glow overlay on hover */}
            <motion.div
              className="absolute inset-0 opacity-0 pointer-events-none rounded-2xl"
              animate={{ opacity: hovered ? 0.05 : 0 }}
              style={{ background: `radial-gradient(circle at 50% 50%, ${project.accentColor}, transparent 70%)` }}
            />

            {/* Badge */}
            <div className="absolute top-4 right-4 z-10">
              <span
                className="text-xs font-bold px-2 py-1 rounded-full"
                style={{
                  background: `${project.badgeColor}20`,
                  border: `1px solid ${project.badgeColor}60`,
                  color: project.badgeColor,
                }}
              >
                {project.badge}
              </span>
            </div>

            {/* Header */}
            <div
              className="p-6 pb-4"
              style={{ borderBottom: `1px solid rgba(255,255,255,0.06)` }}
            >
              <div className="flex items-start gap-3 mb-3">
                <motion.span
                  className="text-4xl"
                  animate={{ rotate: hovered ? [0, -10, 10, 0] : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {project.emoji}
                </motion.span>
                <div>
                  <h3
                    className="text-xl font-bold leading-tight"
                    style={{ color: project.accentColor, textShadow: `0 0 20px ${project.accentColor}60` }}
                  >
                    {project.title}
                  </h3>
                  <span className="text-xs text-gray-500 mt-1 block">{project.category}</span>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                {project.description}
              </p>
            </div>

            {/* Features preview */}
            <div className="p-5 flex-1">
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-3 font-semibold">
                Key Features
              </p>
              <ul className="space-y-2">
                {project.features.slice(0, 3).map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-gray-400">
                    <span style={{ color: project.accentColor }} className="mt-0.5 flex-shrink-0">▹</span>
                    <span className="line-clamp-1">{f}</span>
                  </li>
                ))}
                {project.features.length > 3 && (
                  <li className="text-xs" style={{ color: project.accentColor }}>
                    +{project.features.length - 3} more features...
                  </li>
                )}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="px-5 pb-4">
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.slice(0, 5).map((t, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-0.5 rounded-md font-mono"
                    style={{
                      background: `${project.accentColor}15`,
                      border: `1px solid ${project.accentColor}30`,
                      color: project.accentColor,
                    }}
                  >
                    {t}
                  </span>
                ))}
                {project.techStack.length > 5 && (
                  <span className="text-xs px-2 py-0.5 rounded-md text-gray-500 bg-white/5 border border-white/10">
                    +{project.techStack.length - 5}
                  </span>
                )}
              </div>
            </div>

            {/* Flip hint */}
            <div className="px-5 pb-5">
              <motion.div
                className="flex items-center gap-2 text-xs text-gray-500"
                animate={{ x: hovered ? [0, 4, 0] : 0 }}
                transition={{ repeat: hovered ? Infinity : 0, duration: 0.8 }}
              >
                <span>Click to see details</span>
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.div>
            </div>

            {/* Corner accent */}
            <div
              className="absolute bottom-0 right-0 w-20 h-20 opacity-10 pointer-events-none"
              style={{
                background: `radial-gradient(circle at 100% 100%, ${project.accentColor}, transparent 70%)`,
              }}
            />
          </div>
        </div>

        {/* BACK */}
        <div
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            position: "absolute",
            inset: 0,
          }}
        >
          <div
            className="h-full rounded-2xl overflow-hidden border flex flex-col"
            style={{
              background: "linear-gradient(135deg, #111827 0%, #0d1f18 100%)",
              borderColor: project.accentColor + "60",
              boxShadow: `0 25px 60px ${project.glowColor}`,
            }}
          >
            <div className="p-5 flex items-center justify-between" style={{ borderBottom: `1px solid ${project.accentColor}20` }}>
              <h3 className="font-bold text-white flex items-center gap-2">
                <span>{project.emoji}</span> {project.title}
              </h3>
              <button
                onClick={() => setFlipped(false)}
                className="text-gray-400 hover:text-white transition-colors text-xs px-2 py-1 rounded border border-white/10 hover:border-white/30"
              >
                ← Back
              </button>
            </div>

            <div className="flex-1 p-5 overflow-y-auto">
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.longDescription}</p>

              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: project.accentColor }}>
                All Features
              </p>
              <ul className="space-y-1.5 mb-4">
                {project.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-gray-300">
                    <span style={{ color: project.accentColor }} className="mt-0.5 flex-shrink-0">▹</span>
                    {f}
                  </li>
                ))}
              </ul>

              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: project.accentColor }}>
                Full Tech Stack
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-0.5 rounded-md font-mono"
                    style={{
                      background: `${project.accentColor}15`,
                      border: `1px solid ${project.accentColor}30`,
                      color: project.accentColor,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="p-5 flex gap-3" style={{ borderTop: `1px solid ${project.accentColor}20` }}>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200"
                  style={{
                    background: `${project.accentColor}20`,
                    border: `1px solid ${project.accentColor}50`,
                    color: project.accentColor,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = `${project.accentColor}35`)}
                  onMouseLeave={(e) => (e.currentTarget.style.background = `${project.accentColor}20`)}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200"
                  style={{
                    background: `linear-gradient(135deg, ${project.accentColor}60, ${project.accentColor}30)`,
                    border: `1px solid ${project.accentColor}80`,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

/* ─── Stats Banner ─────────────────────────────────────────────────── */
const stats = [
  { label: "Projects", value: "7+", icon: "🚀" },
  { label: "Tech Stacks Used", value: "25+", icon: "⚙️" },
  { label: "AI/ML Projects", value: "5", icon: "🤖" },
  { label: "Open Source", value: "7", icon: "🌐" },
];

/* ─── Main Page ────────────────────────────────────────────────────── */
const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const headerY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);

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
    <div ref={containerRef} className="relative min-h-screen overflow-hidden" style={{ background: "#0A0F0D" }}>
      <ParticleField />

      {/* Radial background blobs */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-5 blur-3xl" style={{ background: "#00FFAB" }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-5 blur-3xl" style={{ background: "#00B2FF" }} />
        <div className="absolute top-3/4 left-1/2 w-64 h-64 rounded-full opacity-5 blur-3xl" style={{ background: "#9B59B6" }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 max-w-7xl">

        {/* ─── Hero Header ─── */}
        <motion.div style={{ y: headerY }} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-sm font-mono uppercase tracking-[0.3em] text-neon-blue mb-4"
            >
              &lt; Portfolio /&gt;
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-6xl md:text-8xl font-black mb-6 leading-none"
            >
              <span
                className="inline-block"
                style={{
                  background: "linear-gradient(135deg, #00FFAB 0%, #00B2FF 50%, #9B59B6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textShadow: "none",
                }}
              >
                Projects
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-gray-400 text-lg max-w-2xl mx-auto font-mono leading-relaxed"
            >
              Building intelligent systems at the intersection of{" "}
              <span className="text-neon-green">AI</span>,{" "}
              <span className="text-neon-blue">full-stack</span>, and{" "}
              <span style={{ color: "#9B59B6" }}>human impact</span>.
              <br />
              Click any card to explore details.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* ─── Stats Bar ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {stats.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -4 }}
              className="rounded-2xl p-4 text-center relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(10px)",
              }}
            >
              <div className="text-2xl mb-1">{s.icon}</div>
              <div className="text-3xl font-black text-neon-green">{s.value}</div>
              <div className="text-xs text-gray-500 font-mono uppercase tracking-wider">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* ─── Filters ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col md:flex-row gap-4 mb-10 items-center"
        >
          {/* Search */}
          <div className="relative flex-1 max-w-md">
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
              placeholder="Search projects or technologies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl text-sm font-mono text-gray-300 placeholder-gray-600 outline-none transition-all"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#e5e7eb",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#00FFAB60")}
              onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
            />
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap gap-2 justify-center">
            {uniqueCategories.map((cat) => (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(cat)}
                className="px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all duration-200"
                style={{
                  background: activeCategory === cat ? "#00FFAB20" : "rgba(255,255,255,0.04)",
                  border: activeCategory === cat ? "1px solid #00FFAB60" : "1px solid rgba(255,255,255,0.08)",
                  color: activeCategory === cat ? "#00FFAB" : "#9ca3af",
                }}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* ─── Results count ─── */}
        <motion.p
          key={filtered.length}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xs text-gray-600 font-mono mb-6"
        >
          Showing {filtered.length} of {projects.length} projects
        </motion.p>

        {/* ─── Project Grid ─── */}
        <AnimatePresence mode="popLayout">
          {filtered.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
            >
              {filtered.map((project, index) => (
                <ProjectCard3D key={project.id} project={project} index={index} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-24"
            >
              <div className="text-6xl mb-4">🔍</div>
              <p className="text-gray-500 font-mono">No projects match your search.</p>
              <button
                onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
                className="mt-4 text-neon-green text-sm underline"
              >
                Clear filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ─── Footer CTA ─── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <div
            className="inline-block rounded-3xl p-px"
            style={{ background: "linear-gradient(135deg, #00FFAB, #00B2FF, #9B59B6)" }}
          >
            <div
              className="rounded-3xl px-12 py-10"
              style={{ background: "#0A0F0D" }}
            >
              <h2 className="text-3xl font-black text-white mb-3">
                Want to collaborate?
              </h2>
              <p className="text-gray-400 font-mono mb-6 text-sm">
                I'm always open to exciting new projects and opportunities.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-bold text-sm transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, #00FFAB, #00B2FF)",
                  color: "#0A0F0D",
                  boxShadow: "0 0 30px rgba(0,255,171,0.4)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 50px rgba(0,255,171,0.6)")}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 0 30px rgba(0,255,171,0.4)")}
              >
                Get In Touch
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;