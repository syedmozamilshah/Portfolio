import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import CodeBlock from '../components/CodeBlock';

const HeroSection = styled.section`
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
`;

const HeroContent = styled.div`
  max-width: 1000px;
  width: 100%;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Greeting = styled.h2`
  font-family: 'Fira Code', monospace;
  font-size: 1.2rem;
  color: var(--accent-color);
  margin-bottom: 1.5rem;
`;

const Name = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 2.5rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin-bottom: 3rem;
  line-height: 1.7;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1.5rem;
  
  @media (max-width: 576px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const PrimaryButton = styled(Link)`
  background-color: transparent;
  border: 1px solid var(--accent-color);
  color: var(--accent-color);
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: 500;
  text-decoration: none;
  transition: var(--transition);
  
  &:hover, &:active, &:focus {
    background-color: rgba(100, 255, 218, 0.1);
    transform: translateY(-3px);
    color: var(--accent-color);
  }
`;

const SecondaryButton = styled(Link)`
  background-color: transparent;
  border: 1px solid var(--text-secondary);
  color: var(--text-secondary);
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: 500;
  text-decoration: none;
  transition: var(--transition);
  
  &:hover {
    border-color: var(--accent-color);
    color: var(--accent-color);
    transform: translateY(-3px);
  }
`;

// Add profile image container and styling
const ProfileContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 2rem;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 2rem;
  }
`;

const TextContainer = styled.div`
  max-width: 600px;
`;

const ProfileImageContainer = styled.div`
  position: relative;
  
  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const ProfileImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 8px;
  filter: grayscale(20%);
  transition: var(--transition);
  z-index: 1;
  
  &:hover {
    filter: none;
  }
  
  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;



const CodeSection = styled.div`
  margin-top: 5rem;
  padding: 3rem 0;
  background-color: var(--secondary-color);
  border-radius: 8px;
  display: block;
  width: 100%;
`;

const CodeHeader = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;


const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
`;

const SocialLink = styled.a`
  color: var(--text-color);
  font-size: 1.5rem;
  transition: var(--transition);
  
  &:hover {
    color: var(--accent-color);
    transform: translateY(-3px);
  }
`;

const AnimatedText = styled.span`
  display: inline-block;
  color: ${props => props.color || 'var(--accent-color)'};
  background: ${props => props.gradient || 'none'};
  -webkit-background-clip: ${props => props.gradient ? 'text' : 'none'};
  -webkit-text-fill-color: ${props => props.gradient ? 'transparent' : 'inherit'};
  animation: fadeIn 0.5s ease-in-out;
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const Home = () => {
  const [textIndex, setTextIndex] = useState(0);
  const textOptions = [
    { text: 'AI', color: '#64ffda' },
    { text: 'App', gradient: 'linear-gradient(90deg, #ff6b6b, #ffa06b)' },
    { text: 'Web', gradient: 'linear-gradient(90deg, #6b6bff, #6bffd3)' }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % textOptions.length);
    }, 2000);
    
    return () => clearInterval(interval);
  }, [textOptions.length]);

  return (
    <HeroSection>
      <HeroContent>
        <Greeting>Hi, my name is</Greeting>
        <Name>Syed Mozamil Shah.</Name>
        
        <ProfileContainer>
          <TextContainer>
            <Subtitle>A Full Stack Developer, with expertise in <AnimatedText color={textOptions[textIndex].color} gradient={textOptions[textIndex].gradient}>{textOptions[textIndex].text}</AnimatedText>.</Subtitle>
            <Description>
              I'm a AI Enginer & Full Stack Developer specializing in building exceptional digital experiences. 
              Currently, I'm focused on building accessible, human-centered products using 
              cutting-edge technologies including AI, Web, and Mobile App Development.
            </Description>
            
            <ButtonGroup>
              <PrimaryButton to="/projects">View My Work</PrimaryButton>
              <SecondaryButton to="/contact">Get In Touch</SecondaryButton>
            </ButtonGroup>
            
            <SocialLinks>
              <SocialLink href="https://github.com/syedmozamilshah" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/syed-mozamil-shah-873a26230" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </SocialLink>
              <SocialLink href="mailto:syedmozamilshah99@gmail.com">
                <FaEnvelope />
              </SocialLink>
            </SocialLinks>
          </TextContainer>
          
          <ProfileImageContainer>
            <ProfileImage src={require('../pics/aboutpagepic.png')} alt="Syed Mozamil Shah" />
          </ProfileImageContainer>
        </ProfileContainer>
        
        <CodeSection>
          <CodeHeader>motivation.py</CodeHeader>
          <CodeBlock 
            code={`from zamli import motivation
from zamli import hardwork
from zamli.utils import success

def build_future():
    passion = motivation.get_passion()
    effort = hardwork.daily_commitment()
    skills = ["AI", "Web Development", "Mobile Apps"]
    
    while not success.achieved():
        learn_new_skills(skills)
        build_projects(passion)
        effort += 1
        
    return "Welcome to My Portfolio"

print(build_future())`}
            output="💻 Salaam, I'm Mozamil – AI Agent Orchestrator & LLM Whisperer"
          />
        </CodeSection>
      </HeroContent>
    </HeroSection>
  );
};

export default Home;