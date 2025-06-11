import React from 'react';
import styled from 'styled-components';

const SkillsSection = styled.section`
  min-height: 100vh;
  padding-top: 100px;
  padding-bottom: 100px;
`;

const SkillsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const SkillsHeader = styled.div`
  margin-bottom: 3rem;
`;

const SkillsTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const SkillsSubtitle = styled.p`
  font-size: 1.1rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin-bottom: 2rem;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SkillCategory = styled.div`
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

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: var(--text-color);
  border-bottom: 2px solid var(--accent-color);
  padding-bottom: 0.5rem;
  display: inline-block;
`;

const SkillsList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const SkillItem = styled.li`
  position: relative;
  padding-left: 1.5rem;
  color: var(--text-secondary);
  font-size: 1rem;
  
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

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Python", "JavaScript", "Dart", "C++"]
    },
    {
      category: "Frameworks & Libraries",
      skills: ["React", "Node.js", "Express", "Flutter", "LangChain", "LangGraph", "RAG"]
    },
    {
      category: "Databases",
      skills: ["MongoDB", "Firebase Firestore", "Oracle"]
    },
    {
      category: "Tools & Technologies",
      skills: ["REST APIs", "Web Scraping", "Git & Github", "Agile Methodologies"]
    }
  ];

  return (
    <SkillsSection>
      <SkillsContainer>
        <SkillsHeader>
          <SkillsTitle>Skills</SkillsTitle>
          <SkillsSubtitle>
            A comprehensive overview of my technical skills and competencies.
          </SkillsSubtitle>
        </SkillsHeader>
        
        <SkillsGrid>
          {skillCategories.map((category, index) => (
            <SkillCategory key={index}>
              <CategoryTitle>{category.category}</CategoryTitle>
              <SkillsList>
                {category.skills.map((skill, i) => (
                  <SkillItem key={i}>{skill}</SkillItem>
                ))}
              </SkillsList>
            </SkillCategory>
          ))}
        </SkillsGrid>
        
        <CodeSection>
          <CodeHeader>skills.json</CodeHeader>
          <CodeBlock>
            <pre>
              {`{
  "developer": {
    "name": "Syed Mozamil Shah",
    "focus": "Full-Stack & AI Development",
    "skills": {
      "programming_languages": [
        { "name": "Python", "proficiency": "Advanced" },
        { "name": "JavaScript", "proficiency": "Advanced" },
        { "name": "Dart", "proficiency": "Intermediate" },
        { "name": "C++", "proficiency": "Intermediate" }
      ],
      "frameworks_libraries": [
        "React",
        "Node.js",
        "Express",
        "Flutter",
        "LangChain",
        "LangGraph",
        "RAG"
      ],
      "databases": [
        "MongoDB",
        "Firebase Firestore",
        "Oracle"
      ],
      "tools_technologies": [
        "REST APIs",
        "Web Scraping",
        "Git & Github",
        "Agile Methodologies"
      ]
    },
    "learning": [
      "Advanced AI Techniques",
      "System Design",
      "Cloud Architecture"
    ]
  }
}`}
            </pre>
          </CodeBlock>
        </CodeSection>
      </SkillsContainer>
    </SkillsSection>
  );
};

export default Skills;