import React from 'react';
import { motion } from 'framer-motion';
import CodeBlock from '../components/CodeBlock';

const Certifications = () => {
  const certifications = [
    {
      title: "Python for Data Science & AI Development",
      issuer: "IBM",
      date: "Jan 2025",
      description: "Functions, Classes and Objects, Exception Handling, File Handling, Pandas, Numpy",
      skills: ["Python", "Data Analysis", "Pandas", "NumPy"],
      clickToView: true,
      pdfPath: require('../certificates/Python for Data Science and AI.pdf')
    },
    {
      title: "Flutter Mobile App Development",
      issuer: "AUCIS", 
      date: "May 2024",
      description: "UI Design Principles, Stateless & Stateful widgets, Firebase, SQLite",
      skills: ["Flutter", "Dart", "Firebase", "Mobile Development"],
      clickToView: true,
      pdfPath: require('../certificates/Flutter Bootcamp.pdf')
    },
    {
      title: "Databases and SQL for Data Science",
      issuer: "IBM",
      date: "Feb 2025",
      description: "Data Science, DB2, Jupyter Notebook, Python, Relational Database, SQL",
      skills: ["SQL", "Database Design", "DB2", "Data Analysis"],
      clickToView: true,
      pdfPath: require('../certificates/Databases and SQL for Data Science.pdf')
    },
    {
      title: "Professional Diploma in Agile And Scrum",
      issuer: "International Center for Excellence",
      date: "2024",
      description: "Agile methodologies, Scrum framework, project management",
      skills: ["Agile", "Scrum", "Project Management"],
      clickToView: true,
      pdfPath: require('../certificates/Professional Diploma in Agile And Scrum.pdf')
    },
    {
      title: "PenCode Coding Competition",
      issuer: "PenCode",
      date: "May 2025", 
      description: "Developed complete MERN Stack application using pen and paper in under 2 hours",
      skills: ["MERN Stack", "Problem Solving", "Rapid Development"],
      clickToView: true,
      pdfPath: require('../certificates/PenCode Coding Competition.pdf')
    },
    {
      title: "Digital Marketing & SEO",
      issuer: "International Center for Excellence",
      date: "2024",
      description: "Facebook Ads, Google Ads, Blogger, Guest Posting, Keyword Research",
      skills: ["SEO", "Digital Marketing", "Google Ads", "Facebook Ads"]
    }
  ];

  const codeSnippet = {
    code: `// Continuous Learning Journey
const learningPath = {
  goal: "Mastery",
  approach: "Deliberate Practice",
  mindset: "Growth",
  
  acquireKnowledge: function(topic) {
    console.log("Learning: " + topic);
    this.applyKnowledge(topic);
    return this.teachOthers(topic);
  },
  
  applyKnowledge: function(topic) {
    return "Building projects with " + topic;
  },
  
  teachOthers: function(topic) {
    return "Deepening understanding of " + topic;
  }
};

// The best certification is a working project`,
    output: "📜 Knowledge validated through continuous practice and real projects"
  };

  return (
    <motion.div 
      initial={{ y: 10, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }} 
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col justify-center items-center px-4 pt-20 pb-10"
    >
      {/* Code Block - At the top */}
      <motion.div 
        className="max-w-4xl mx-auto mb-12 w-full"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-neon-green">certifications.js</h3>
        </div>
        <CodeBlock code={codeSnippet.code} output={codeSnippet.output} />
      </motion.div>

      {/* Header */}
      <div className="text-center mb-12">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-neon-blue mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Certifications
        </motion.h1>
        
        <motion.p 
          className="text-gray-300 max-w-2xl mx-auto mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Professional certifications and courses I've completed to enhance my skills and knowledge in technology.
          Click on certificates to view them.
        </motion.p>
      </div>

      {/* Certifications Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 max-w-6xl w-full"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        {certifications.map((cert, index) => (
          <motion.div 
            key={index}
            className={`bg-dark-gray border border-neon-green/30 rounded-lg p-6 hover:border-neon-green/60 transition-all duration-300 ${
              cert.clickToView ? 'cursor-pointer hover:shadow-lg hover:shadow-neon-green/20' : ''
            }`}
            whileHover={{ y: -5 }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            onClick={() => { if (cert.clickToView) { window.open(cert.pdfPath, '_blank'); } }}
          >
            <div className="mb-4">
              <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
              <p className="text-neon-green font-semibold italic">{cert.issuer}</p>
              <p className="text-gray-400 text-sm">{cert.date}</p>
            </div>
            
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">{cert.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {cert.skills.map((skill, skillIndex) => (
                <span 
                  key={skillIndex} 
                  className="bg-neon-green/20 text-neon-green px-2 py-1 rounded text-xs"
                >
                  {skill}
                </span>
              ))}
            </div>
            
            {cert.clickToView && (
              <p className="text-neon-green text-sm text-center mt-4 italic">
                📄 Click to view certificate
              </p>
            )}
          </motion.div>
        ))}
      </motion.div>

      
      {/* Learning Philosophy */}
      <motion.div 
        className="max-w-3xl mx-auto text-center"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.0 }}
      >
        <p className="text-gray-300 leading-relaxed">
          Each certification represents not just completion of a course, but practical application 
          of concepts in real projects. I believe in learning by doing and teaching others to 
          deepen my own understanding.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Certifications;
