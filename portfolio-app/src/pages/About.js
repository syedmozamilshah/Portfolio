import React from 'react';
import styled from 'styled-components';
import CodeBlock from '../components/CodeBlock';

const AboutSection = styled.section`
  min-height: 100vh;
  padding-top: 100px;
`;

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const AboutHeader = styled.div`
  margin-bottom: 3rem;
`;

const AboutTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 3rem;
  align-items: center;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const AboutText = styled.div`
  @media (max-width: 992px) {
    order: 2;
  }
`;

const AboutParagraph = styled.p`
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  color: var(--text-secondary);
  line-height: 1.7;
`;

const AboutImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  
  @media (max-width: 992px) {
    order: 1;
    margin-bottom: 2rem;
  }
`;

const AboutImage = styled.img`
  width: 100%;
  max-width: 300px;
  border-radius: 8px;
  filter: grayscale(20%);
  transition: var(--transition);
  z-index: 1;
  
  &:hover {
    filter: none;
  }
  
  @media (max-width: 992px) {
    max-width: 250px;
  }
`;



const SkillsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem 2rem;
  list-style-type: none;
  padding: 0;
  margin: 2rem 0;
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const SkillItem = styled.li`
  position: relative;
  padding-left: 1.5rem;
  font-family: 'Fira Code', monospace;
  font-size: 0.9rem;
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
  display: block; /* Show this section */
`;

const CodeHeader = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const About = () => {
  const skills = [
    'Python', 'Dart, C++', 'JavaScript', 'SQL',
    'Flutter', 'React.js', 'Firebase', 'REST APIs',
    'Tailwind CSS', 'Express', 'Node.js', 'LangGraph',
    'Agile Methodologies', 'Agentic AI', 'RAG'
  ];

  return (
    <AboutSection>
      <AboutContainer>
        <AboutHeader>
          <AboutTitle>About Me</AboutTitle>
        </AboutHeader>
        
        <AboutContent>
          <AboutText>
            <AboutParagraph>
              Hello! I'm Syed Mozamil Shah, a Software Developer with a passion for building AI-powered applications and exceptional digital experiences. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between.
            </AboutParagraph>
            
            <AboutParagraph>
              I'm currently pursuing my Bachelor's degree in Computer Science at Air University Islamabad, where I've been focusing on Data Structures, Design and Analysis of Algorithms, Web Development, and Mobile Computing.
            </AboutParagraph>
            
            <AboutParagraph>
              My recent work has been centered around developing AI-powered applications that leverage modern technologies like React, LangGraph, and RAG architectures. I'm particularly interested in building tools that help people solve real-world problems through intuitive interfaces and intelligent systems.
            </AboutParagraph>
            
            <AboutParagraph>
              Here are a few technologies I've been working with recently:
            </AboutParagraph>
            
            <SkillsList>
              {skills.map((skill, index) => (
                <SkillItem key={index}>{skill}</SkillItem>
              ))}
            </SkillsList>
          </AboutText>
          
          <AboutImageContainer>
            <AboutImage src={require('../pics/aboutpagepic.png')} alt="Syed Mozamil Shah" />
          </AboutImageContainer>
        </AboutContent>
        
        <CodeSection>
          <CodeHeader>about.js</CodeHeader>
          <CodeBlock 
            code={`class Developer {
  constructor() {
    this.name = "Syed Mozamil Shah";
    this.role = "Software Engineer";
    this.languages = ["Python", "JavaScript", "Dart", "C++"];
    this.hobbies = ["Coding", "Reading", "Learning"];
    this.challenge = "Building AI-powered applications";
  }
  
  getCurrentStatus() {
    return "Always learning, always building";
  }
}`} 
            output="💻 Developer profile loaded successfully!"
          />
        </CodeSection>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;