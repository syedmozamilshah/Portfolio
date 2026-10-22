import React from 'react';
import { motion } from 'framer-motion';
import CodeBlock from '../components/CodeBlock';

const Certifications = () => {
  const certifications = [
    {
      title: "Python for Data Science & AI Development",
      issuer: "IBM",
      date: "Jan 2025",
      accent: "#00FFAB",
      description: "Functions, Classes and Objects, Exception Handling, File Handling, Pandas, NumPy data pipelines.",
      skills: ["Python", "Data Analysis", "Pandas", "NumPy"],
      clickToView: true,
      pdfPath: require('../certificates/Python for Data Science and AI.pdf')
    },
    {
      title: "Flutter Mobile App Development",
      issuer: "AUCIS", 
      date: "May 2024",
      accent: "#00B2FF",
      description: "UI Design Principles, Stateless & Stateful widgets, Firebase, SQLite, Cross-platform architecture.",
      skills: ["Flutter", "Dart", "Firebase", "Mobile Development"],
      clickToView: true,
      pdfPath: require('../certificates/Flutter Bootcamp.pdf')
    },
    {
      title: "Databases and SQL for Data Science",
      issuer: "IBM",
      date: "Feb 2025",
      accent: "#9B59B6",
      description: "Relational Database Design, SQL queries, DB2, Jupyter Notebooks, schema normalization.",
      skills: ["SQL", "Database Design", "DB2", "Data Analysis"],
      clickToView: true,
      pdfPath: require('../certificates/Databases and SQL for Data Science.pdf')
    },
    {
      title: "Professional Diploma in Agile And Scrum",
      issuer: "International Center for Excellence",
      date: "2024",
      accent: "#FFD700",
      description: "Agile methodologies, sprint cycles, Scrum master framework, rapid iteration cycles.",
      skills: ["Agile", "Scrum", "Project Management"],
      clickToView: true,
      pdfPath: require('../certificates/Professional Diploma in Agile And Scrum.pdf')
    },
    {
      title: "PenCode Coding Competition (2nd Place)",
      issuer: "PenCode",
      date: "May 2025", 
      accent: "#FF6B35",
      description: "Developed complete full-stack MERN application on paper under 2 hours.",
      skills: ["MERN Stack", "Problem Solving", "Rapid Prototyping"],
      clickToView: true,
      pdfPath: require('../certificates/PenCode Coding Competition.pdf')
    },
    {
      title: "Digital Marketing & SEO",
      issuer: "International Center for Excellence",
      date: "2024",
      accent: "#1ABC9C",
      description: "Keyword research, content ranking algorithms, technical SEO, performance audits.",
      skills: ["SEO", "Digital Marketing", "Content Strategy"]
    }
  ];

  const codeSnippet = {
    code: `// Continuous Learning & Validation
const learningPath = {
  goal: "Mastery in AI Systems & Engineering",
  approach: "Deliberate Practice + Production Deployments",
  
  verifySkill: function(skill) {
    return {
      certified: true,
      appliedInProduction: true,
      status: "Actively Shipping"
    };
  }
};`,
    output: "📜 Verified Credentials & Professional Certifications"
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
            &lt; Verified Credentials /&gt;
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
              Certifications
            </span>
          </h1>
          <p className="text-gray-300 font-mono text-sm md:text-base max-w-2xl mx-auto mt-2">
            Industry credentials and validated coursework backing foundational expertise in data science, software engineering, and mobile development.
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
            <h3 className="text-lg font-bold font-mono text-neon-green">certifications.js</h3>
          </div>
          <CodeBlock code={codeSnippet.code} output={codeSnippet.output} />
        </motion.div>

        {/* 3D Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {certifications.map((cert, index) => (
            <motion.div 
              key={index}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.08 * index }}
              whileHover={{ y: -6, scale: 1.02 }}
              onClick={() => {
                if (cert.clickToView && cert.pdfPath) {
                  window.open(cert.pdfPath, '_blank');
                }
              }}
              className={`rounded-3xl p-6 border flex flex-col justify-between transition-all duration-300 ${
                cert.clickToView ? 'cursor-pointer group' : ''
              }`}
              style={{
                background: "linear-gradient(145deg, rgba(16, 26, 21, 0.75) 0%, rgba(13, 19, 16, 0.85) 100%)",
                borderColor: `${cert.accent}35`,
                boxShadow: `0 12px 30px rgba(0, 0, 0, 0.4), 0 0 20px ${cert.accent}10`,
                backdropFilter: "blur(14px)",
              }}
            >
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span 
                    className="text-xs font-mono font-bold px-2.5 py-1 rounded-full"
                    style={{
                      background: `${cert.accent}15`,
                      color: cert.accent,
                      border: `1px solid ${cert.accent}35`,
                    }}
                  >
                    {cert.issuer}
                  </span>
                  <span className="text-xs text-gray-500 font-mono">{cert.date}</span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                  {cert.title}
                </h3>
                <p className="text-gray-300 text-xs leading-relaxed mb-4">
                  {cert.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {cert.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="text-xs font-mono px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {cert.clickToView && (
                  <div 
                    className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono font-semibold"
                    style={{ color: cert.accent }}
                  >
                    <span>View Certificate</span>
                    <span className="transition-transform duration-200 group-hover:translate-x-1">↗</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
