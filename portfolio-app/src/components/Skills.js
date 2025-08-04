import React from 'react';
import styled from 'styled-components';

const SkillsContainer = styled.div`
  padding: 5rem 0;
  background-color: var(--secondary-color);
`;

const SkillsContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const SkillsHeader = styled.div`
  margin-bottom: 3rem;
  text-align: center;
`;

const SkillsTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const SkillsSubtitle = styled.h3`
  font-size: 1.5rem;
  color: var(--text-secondary);
  font-weight: 400;
`;

const SkillsDescription = styled.p`
  max-width: 800px;
  margin: 0 auto 3rem;
  text-align: center;
  color: var(--text-secondary);
  font-size: 1.1rem;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
`;

const SkillItem = styled.div`
  background-color: var(--primary-color);
  border-radius: 8px;
  padding: 1.5rem 1rem;
  text-align: center;
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const SkillIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--accent-color);
`;

const SkillName = styled.p`
  font-weight: 500;
`;

const CodeBlock = styled.div`
  background-color: #1a1a1a;
  border-radius: 8px;
  padding: 1.5rem;
  overflow-x: auto;
  font-family: 'Fira Code', monospace;
  font-size: 0.9rem;
  color: #e6e6e6;
  margin-top: 3rem;
`;

const Skills = () => {
  const skills = [
    { name: 'HTML', icon: 'html5' },
    { name: 'CSS', icon: 'css3-alt' },
    { name: 'JavaScript', icon: 'js' },
    { name: 'TypeScript', icon: 'code' },
    { name: 'React.JS', icon: 'react' },
    { name: 'Next.JS', icon: 'node-js' },
    { name: 'Tailwind CSS', icon: 'css3' },
    { name: 'shadcn/ui', icon: 'palette' },
    { name: 'Node.JS', icon: 'node' },
    { name: 'Express.JS', icon: 'node-js' },
    { name: 'MongoDB', icon: 'database' },
    { name: 'Git', icon: 'git-alt' },
    { name: 'GitHub', icon: 'github' },
    { name: 'Vercel', icon: 'code-branch' },
    { name: 'Postman', icon: 'paper-plane' },
    { name: 'Linux', icon: 'linux' },
    { name: 'macOS', icon: 'apple' },
    { name: 'Windows', icon: 'windows' },
    { name: 'pnpm', icon: 'box' },
    { name: 'npm', icon: 'box-open' },
    { name: 'yarn', icon: 'box-open' },
    { name: 'Docker', icon: 'docker' },
    { name: 'Radix UI', icon: 'layer-group' }
  ];

  return (
    <SkillsContainer>
      <SkillsContent>
        <SkillsHeader>
          <SkillsTitle>Skills & Tools</SkillsTitle>
          <SkillsSubtitle>Learned by coding all night and debugging all day!</SkillsSubtitle>
        </SkillsHeader>
        
        <SkillsDescription>
          As a full-stack Software Engineer, I specialize in building scalable web applications using modern technologies such as Next.js, React, and Tailwind CSS. I'm also expanding my expertise into mobile development with React Native and Expo to create cross-platform solutions.
        </SkillsDescription>
        
        <SkillsGrid>
          {skills.map((skill, index) => (
            <SkillItem key={index}>
              <SkillIcon>
                <i className={`fab fa-${skill.icon}`}></i>
              </SkillIcon>
              <SkillName>{skill.name}</SkillName>
            </SkillItem>
          ))}
        </SkillsGrid>
        
        <CodeBlock>
          <pre>
            {`const mySkills = [
  "HTML", "CSS", "JavaScript", "TypeScript", "React.JS", "Next.JS", "Tailwind CSS",
  "shadcn/ui", "Node.JS", "Express.JS", "MongoDB", "Git", "GitHub", "Vercel",
  "Postman", "Linux", "macOS", "Windows", "pnpm", "npm", "yarn", "Docker", "Radix UI"
];

const getSkills = () => {
  return mySkills.length > 0
    ? \`I have skills in: \${mySkills.join(", ")}\` + " 🚀"
    : "Skills not found... Panic!";
};

console.log(getSkills());`}
          </pre>
        </CodeBlock>
      </SkillsContent>
    </SkillsContainer>
  );
};

export default Skills;