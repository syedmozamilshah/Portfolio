import React from 'react';
import styled from 'styled-components';
import CodeBlock from '../components/CodeBlock';

const AchievementsSection = styled.section`
  min-height: 100vh;
  padding-top: 100px;
  padding-bottom: 100px;
`;

const AchievementsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const AchievementsHeader = styled.div`
  margin-bottom: 3rem;
`;

const AchievementsTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const AchievementsSubtitle = styled.p`
  font-size: 1.1rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin-bottom: 2rem;
`;

const AchievementsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
`;

const AchievementCard = styled.div`
  background-color: var(--secondary-color);
  border-radius: 8px;
  padding: 2rem;
  transition: var(--transition);
  border: 1px solid var(--border-color);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px -15px var(--shadow-color);
  }
`;

const AchievementTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--text-color);
`;

const AchievementOrganization = styled.p`
  font-size: 1rem;
  color: var(--accent-color);
  margin-bottom: 1rem;
  font-style: italic;
`;

const AchievementDescription = styled.p`
  font-size: 1rem;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const AchievementPoints = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const AchievementPoint = styled.li`
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.75rem;
  color: var(--text-secondary);
  
  &:before {
    content: '▹';
    position: absolute;
    left: 0;
    color: var(--accent-color);
  }
`;

const CodeSection = styled.div`
  margin-top: 5rem;
  padding: 3rem 0;
  background-color: var(--secondary-color);
  border-radius: 8px;
  display: block;
`;

const CodeHeader = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;


const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-top: 3rem;
  margin-bottom: 1.5rem;
  color: var(--text-color);
`;

const PublicationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PublicationCard = styled.div`
  background-color: var(--secondary-color);
  border-radius: 8px;
  padding: 2rem;
  transition: var(--transition);
  border: 1px solid var(--border-color);
  cursor: pointer;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px -15px var(--shadow-color);
  }
`;

const PublicationTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--text-color);
`;

const PublicationDescription = styled.p`
  font-size: 1rem;
  color: var(--text-secondary);
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const Achievements = () => {
  const achievements = [
    {
      title: "Agentic AI & RAG Mentor",
      organization: "AUCIS",
      description: "Led a 4-week hands-on mentorship program, training 20+ developers in LangGraph, Gemini API integration, and Retrieval-Augmented Generation (RAG) architectures through live workshops and project-based learning.",
      points: [
        "Designed and delivered comprehensive curriculum covering advanced AI concepts",
        "Mentored teams in building production-ready AI applications",
        "Organized hackathons resulting in 5 innovative AI projects",
        "Created documentation and learning resources for future cohorts"
      ]
    },
    {
      title: "2nd Place Winner - PenCode Coding Competition",
      organization: "PenCode",
      description: "Developed complete MERN Stack application using pen and paper in under 2 hours.",
      points: [
        "Implemented full-stack solution with MongoDB, Express, React, and Node.js",
        "Created responsive UI design with proper component architecture",
        "Implemented RESTful API endpoints and database integration",
        "Completed the challenge ahead of time with all requirements met"
      ]
    }
  ];
  
  const publications = [
    {
      title: "Agent ZERO Build, Run, Automate",
      description: "A comprehensive guide to building autonomous AI agents using modern frameworks and techniques.",
      pdfPath: require('../books/Agent ZERO Build, Run, Automate.pdf')
    },
    {
      title: "The Symphony",
      description: "An exploration of harmonizing AI systems with human-centered design principles.",
      pdfPath: require('../books/The Symphony by Syed Mozamil Shah.pdf')
    }
  ];

  const codeSnippet = {
    code: `#include <iostream>
#include <vector>

class Developer {
public:
    void introduce() {
        std::cout << "Hi, I'm Mozamil. I mentor in AI, build full-stack apps, and win coding competitions.\n";
    }

    void skills() {
        std::vector<std::string> highlights = {
            "LangGraph & Gemini API mentor",
            "Built RAG-powered AI agents",
            "Won 2nd place in MERN stack coding challenge",
            "Published work on autonomous AI systems"
        };
        for (const auto& item : highlights) {
            std::cout << "- " << item << "\n";
        }
    }
};

int main() {
    Developer mozamil;
    mozamil.introduce();
    mozamil.skills();
    return 0;
}`,
    output: "🏆 Achievement profile loaded - Excellence in AI mentorship and development!"
  };

  return (
    <AchievementsSection>
      <AchievementsContainer>
        {/* Code Block - At the top */}
        <CodeSection>
          <CodeHeader>achievement.cpp</CodeHeader>
          <CodeBlock 
            code={codeSnippet.code}
            output={codeSnippet.output}
          />
        </CodeSection>

        <AchievementsHeader>
          <AchievementsTitle>Achievements</AchievementsTitle>
          <AchievementsSubtitle>
            My notable accomplishments, leadership roles, and contributions in technology and innovation.
          </AchievementsSubtitle>
        </AchievementsHeader>
        
        <AchievementsGrid>
          {achievements.map((achievement, index) => (
            <AchievementCard key={index}>
              <AchievementTitle>{achievement.title}</AchievementTitle>
              <AchievementOrganization>{achievement.organization}</AchievementOrganization>
              <AchievementDescription>{achievement.description}</AchievementDescription>
              <AchievementPoints>
                {achievement.points.map((point, i) => (
                  <AchievementPoint key={i}>{point}</AchievementPoint>
                ))}
              </AchievementPoints>
            </AchievementCard>
          ))}
        </AchievementsGrid>
        
        <SectionTitle>Publications</SectionTitle>
        <PublicationGrid>
          {publications.map((publication, index) => (
            <PublicationCard 
              key={index}
              onClick={() => publication.pdfPath && window.open(publication.pdfPath, '_blank')}
            >
              <PublicationTitle>{publication.title}</PublicationTitle>
              <PublicationDescription>{publication.description}</PublicationDescription>
              <p style={{ color: 'var(--accent-color)', marginTop: '1rem' }}>Click to view publication</p>
            </PublicationCard>
          ))}
        </PublicationGrid>
      </AchievementsContainer>
    </AchievementsSection>
  );
};

export default Achievements;