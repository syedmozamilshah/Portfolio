import React from 'react';
import { motion } from 'framer-motion';
import CodeBlock from '../components/CodeBlock';

const Projects = () => {
  const codeSnippet = {
    code: `#!/usr/bin/env python3
# projects_showcase.py

class ProjectShowcase:
    def __init__(self):
        self.developer = "Syed Mozamil Shah"
        self.portfolio = [
            "QalbCare - Islamic Emotional Therapy App",
            "HireIQ - AI-Powered Recruitment Platform", 
            "Doctra - AI Prescription Support System",
            "Job Khoji - Intelligent Job Matching Platform"
        ]
    
    def showcase_projects(self):
        for i, project in enumerate(self.portfolio, 1):
            print(f"{i}. {project}")
            self.analyze_impact(project)
    
    def analyze_impact(self, project):
        metrics = {
            "user_engagement": "40% increase",
            "efficiency_gain": "55% improvement", 
            "accuracy_boost": "35% better matching"
        }
        return f"Impact: {metrics['efficiency_gain']} in workflow"

showcase = ProjectShowcase()
showcase.showcase_projects()`,
    output: "🚀 4 major projects showcasing AI innovation and full-stack expertise"
  };

  const projects = [
    {
      title: "HireIQ",
      description: "AI-powered recruitment platform for users and recruiters, improving job-recruitment alignments by 35%.",
      features: [
        "Built a user-based platform for users and recruiters",
        "Implemented resume parsing, skill extraction, and job-matching algorithms",
        "Developed an AI-powered dashboard for recruiters to track candidates"
      ],
      techStack: ["React", "Node.js", "MongoDB", "Express", "AI APIs"],
      githubUrl: "https://github.com/syedmozamilshah/HireIQ",
      liveUrl: ""
    },
    {
      title: "QalbCare",
      description: "Islamic Emotional Therapy Mobile App that provides personalized therapy sessions using Quran, Hadith, and CBT techniques.",
      features: [
        "Developed a Flutter-based mobile app for emotional therapy",
        "Implemented a recommendation system based on user emotional state",
        "Launched QalbCare+ 7-day healing journey system based on LangGraph-driven modular therapy flows"
      ],
      techStack: ["Flutter", "Firebase", "LangGraph", "Python", "AI"],
      githubUrl: "https://github.com/syedmozamilshah/QalbCare",
      liveUrl: ""
    },
    {
      title: "Doctra",
      description: "AI-Based Prescription Support System that helps doctors generate prescriptions through interactive follow-up questioning.",
      features: [
        "Built an AI-powered assistant for doctors to generate prescriptions",
        "Implemented a conversational interface for doctors to interact with the system",
        "Automated prescriptions and test recommendations with LLMs, improving workflow efficiency by 55%"
      ],
      techStack: ["React", "Node.js", "MongoDB", "Express", "OpenAI"],
      githubUrl: "https://github.com/syedmozamilshah/Doctra",
      liveUrl: ""
    },
    {
      title: "Job Khoji",
      description: "MERN Stack Originally Web Scraper that creates personalized dashboards for job posting, editing, and management.",
      features: [
        "Integrated real-time scraping with manual listings, improving job listing relevancy by 40%",
        "Designed and built an intuitive dashboard for job seekers and employers",
        "Created advanced job matching using recommendation vectors"
      ],
      techStack: ["MongoDB", "Express", "React", "Node.js", "Web Scraping"],
      githubUrl: "https://github.com/syedmozamilshah/JobKhoji",
      liveUrl: ""
    }
  ];

  return (
    <motion.div 
      initial={{ y: 20, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }} 
      transition={{ duration: 0.6 }}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-4xl font-bold text-neon-blue mb-8 text-center">Projects</h1>
      
      {/* Code Block */}
      <div className="max-w-2xl mx-auto mb-12">
        <CodeBlock code={codeSnippet.code} output={codeSnippet.output} />
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-dark-gray border border-neon-green/30 rounded-lg p-6 hover:border-neon-green/60 transition-colors"
          >
            <h3 className="text-xl font-semibold text-neon-green mb-2">{project.title}</h3>
            <p className="text-neon-blue text-sm mb-3">{project.techStack.join(' | ')}</p>
            <p className="text-white mb-4">{project.description}</p>
            
            <ul className="list-disc list-inside text-gray-300 text-sm mb-4 space-y-1">
              {project.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            
            <a 
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-neon-green hover:text-neon-blue transition-colors"
            >
              <span>View on GitHub</span>
              <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;