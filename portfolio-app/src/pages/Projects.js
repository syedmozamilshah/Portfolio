import React from 'react';
import styled from 'styled-components';
import ProjectCard from '../components/ProjectCard';

const ProjectsSection = styled.section`
  min-height: 100vh;
  padding-top: 100px;
  padding-bottom: 100px;
`;

const ProjectsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const ProjectsHeader = styled.div`
  margin-bottom: 3rem;
`;

const ProjectsTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const ProjectsSubtitle = styled.p`
  font-size: 1.1rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin-bottom: 2rem;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CodeSection = styled.div`
  margin-top: 5rem;
  padding: 3rem 0;
  background-color: var(--secondary-color);
  border-radius: 8px;
  display: block; /* Show this section */
`;

const CodeHeader = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const CodeBlock = styled.div`
  background-color: #1a1a1a;
  border-radius: 8px;
  padding: 1.5rem;
  overflow-x: auto;
  font-family: 'Fira Code', monospace;
  font-size: 0.9rem;
  color: #e6e6e6;
  max-width: 800px;
  margin: 0 auto;
`;

const Projects = () => {
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
    <ProjectsSection>
      <ProjectsContainer>
        <ProjectsHeader>
          <ProjectsTitle>Projects</ProjectsTitle>
          <ProjectsSubtitle>
            A selection of my recent projects. Each project is a unique challenge that I've tackled with passion and creativity.
          </ProjectsSubtitle>
        </ProjectsHeader>
        
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </ProjectsGrid>
        
        <CodeSection>
          <CodeHeader>projects.sql</CodeHeader>
          <CodeBlock>
            <pre>
              {`-- Finding time for personal projects
SELECT weekend 
FROM calendar 
WHERE work = "null" 
  AND motivation = "high" 
  AND coffee_level > 50;

-- Creating innovative solutions
CREATE TABLE project (
  id INT PRIMARY KEY,
  name VARCHAR(100),
  tech_stack TEXT,
  completion_status VARCHAR(20),
  github_url VARCHAR(255)
);

-- Inserting passion into every project
INSERT INTO project VALUES 
(1, 'HireIQ', 'React, Node.js, AI', 'completed', 'github.com/syedmozamilshah/HireIQ');`}
            </pre>
          </CodeBlock>
        </CodeSection>
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects;