import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { motion } from 'framer-motion';
import CodeBlock from '../components/CodeBlock';

const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const resumeUrl = '/resume/Syed Mozamil Shah (Resume).pdf';
  
  const codeSnippet = {
    code: `#!/usr/bin/env python3
# resume_analyzer.py

class ResumeAnalyzer:
    def __init__(self):
        self.candidate = "Syed Mozamil Shah"
        self.role = "AI Engineer & Full Stack Developer"
        self.expertise = [
            "LangGraph & RAG Systems",
            "React & Full Stack Development", 
            "Python & AI/ML",
            "Mobile App Development"
        ]
    
    def analyze_fit(self, job_requirements):
        match_score = self.calculate_compatibility(job_requirements)
        return f"Match Score: {match_score}% - Excellent Fit!"
    
    def get_contact_info(self):
        return {
            "email": "syedmozamilshah99@gmail.com",
            "linkedin": "linkedin.com/in/syed-mozamil-shah-873a26230",
            "github": "github.com/syedmozamilshah"
        }

resume = ResumeAnalyzer()
print(resume.analyze_fit(["AI", "React", "Python"]))`,
    output: "📄 Resume loaded successfully - Ready for opportunities!"
  };

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <motion.div 
      initial={{ y: 20, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }} 
      transition={{ duration: 0.6 }}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-4xl font-bold text-neon-blue mb-8 text-center">Resume</h1>
      
      {/* Code Block */}
      <div className="max-w-2xl mx-auto mb-12">
        <CodeBlock code={codeSnippet.code} output={codeSnippet.output} />
      </div>
      
      <div className="max-w-4xl mx-auto bg-dark-gray border border-neon-green/30 rounded-lg p-6">
        <div className="mb-4 text-center">
          <a 
            href={resumeUrl} 
            download="Syed_Mozamil_Shah_Resume.pdf"
            className="inline-flex items-center px-4 py-2 bg-neon-green text-dark-bg font-semibold rounded hover:bg-neon-blue transition-colors"
          >
            📄 Download Resume
          </a>
        </div>
        
        <div className="flex justify-center">
          <Document 
            file={resumeUrl} 
            onLoadSuccess={onDocumentLoadSuccess}
            className="border border-neon-green/20 rounded"
          >
            <Page 
              pageNumber={1} 
              renderTextLayer={false}
              className="max-w-full"
              width={Math.min(800, typeof window !== 'undefined' ? window.innerWidth - 100 : 800)}
            />
          </Document>
        </div>
        
        {numPages && (
          <div className="text-center mt-4 text-light-gray text-sm">
            Page 1 of {numPages}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Resume;

