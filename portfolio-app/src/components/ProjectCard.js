import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: var(--secondary-color);
  border-radius: 8px;
  overflow: hidden;
  transition: var(--transition);
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const CardHeader = styled.div`
  padding: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0;
  color: var(--text-color);
`;

const CardBody = styled.div`
  padding: 1.5rem;
  flex: 1;
`;

const CardDescription = styled.p`
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  background-color: rgba(100, 255, 218, 0.1);
  color: var(--accent-color);
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-family: 'Fira Code', monospace;
`;

const FeatureList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: 1.5rem;
`;

const FeatureItem = styled.li`
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.75rem;
  color: var(--text-secondary);
  font-size: 0.95rem;
  
  &:before {
    content: '▹';
    position: absolute;
    left: 0;
    color: var(--accent-color);
  }
`;

const CardFooter = styled.div`
  padding: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

const CardLink = styled.a`
  color: var(--text-color);
  font-size: 1.25rem;
  transition: var(--transition);
  
  &:hover {
    color: var(--accent-color);
  }
`;

const FolderIcon = styled.div`
  color: var(--accent-color);
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const ProjectCard = ({ project }) => {
  const handleCardClick = () => {
    if (project.githubUrl) {
      window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <Card onClick={handleCardClick}>
      <CardHeader>
        <FolderIcon>
          <i className="far fa-folder-open"></i>
        </FolderIcon>
        <div>
          {project.githubUrl && (
            <CardLink 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()} // Prevent card click from triggering
            >
              <i className="fab fa-github"></i>
            </CardLink>
          )}
          {project.liveUrl && (
            <CardLink 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()} // Prevent card click from triggering
            >
              <i className="fas fa-external-link-alt"></i>
            </CardLink>
          )}
        </div>
      </CardHeader>
      
      <CardBody>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
        
        <FeatureList>
          {project.features && project.features.map((feature, index) => (
            <FeatureItem key={index}>{feature}</FeatureItem>
          ))}
        </FeatureList>
        
        <TechStack>
          {project.techStack && project.techStack.map((tech, index) => (
            <TechTag key={index}>{tech}</TechTag>
          ))}
        </TechStack>
      </CardBody>
    </Card>
  );
};

export default ProjectCard;