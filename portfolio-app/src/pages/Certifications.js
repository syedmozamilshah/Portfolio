import React from 'react';
import styled from 'styled-components';

const CertificationsSection = styled.section`
  min-height: 100vh;
  padding-top: 100px;
  padding-bottom: 100px;
`;

const CertificationsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const CertificationsHeader = styled.div`
  margin-bottom: 3rem;
`;

const CertificationsTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const CertificationsSubtitle = styled.p`
  font-size: 1.1rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin-bottom: 2rem;
`;

const CertificationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CertificationCard = styled.div`
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

const CertificationTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--text-color);
`;

const CertificationIssuer = styled.p`
  font-size: 1rem;
  color: var(--accent-color);
  margin-bottom: 1rem;
  font-style: italic;
`;

const CertificationDescription = styled.p`
  font-size: 1rem;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  line-height: 1.6;
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

const Certifications = () => {
  const certifications = [
    {
      title: "Flutter Mobile App Development",
      issuer: "AUCIS",
      description: "UI Design Principles, Stateless & Stateful widgets, Firebase, SQLite",
      pdfPath: require('../certificates/Flutter Bootcamp.pdf')
    },
    {
      title: "Digital Marketing & SEO",
      issuer: "International Center for Excellence",
      description: "Facebook Ads, Google Ads, Blogger, Guest Posting, Keyword Research"
    },
    {
      title: "Python for Data Science, AI & Development",
      issuer: "Coursera",
      description: "Functions, Classes and Objects, Exception Handling, File Handling, Pandas, Numpy",
      pdfPath: require('../certificates/Python for Data Science and AI.pdf')
    },
    {
      title: "Databases and SQL for Data Science",
      issuer: "Coursera",
      description: "SQL fundamentals, database design, data analysis with SQL",
      pdfPath: require('../certificates/Databases and SQL for Data Science.pdf')
    },
    {
      title: "Professional Diploma in Agile And Scrum",
      issuer: "International Center for Excellence",
      description: "Agile methodologies, Scrum framework, project management",
      pdfPath: require('../certificates/Professional Diploma in Agile And Scrum.pdf')
    },
    {
      title: "PenCode Coding Competition",
      issuer: "PenCode",
      description: "Developed complete MERN Stack application using pen and paper in under 2 hours",
      pdfPath: require('../certificates/PenCode Coding Competition.pdf')
    }
  ];

  return (
    <CertificationsSection>
      <CertificationsContainer>
        <CertificationsHeader>
          <CertificationsTitle>Certifications</CertificationsTitle>
          <CertificationsSubtitle>
            Professional certifications and courses I've completed to enhance my skills and knowledge.
          </CertificationsSubtitle>
        </CertificationsHeader>
        
        <CertificationsGrid>
          {certifications.map((cert, index) => (
            <CertificationCard 
              key={index} 
              onClick={() => cert.pdfPath && window.open(cert.pdfPath, '_blank')}
            >
              <CertificationTitle>{cert.title}</CertificationTitle>
              <CertificationIssuer>{cert.issuer}</CertificationIssuer>
              <CertificationDescription>{cert.description}</CertificationDescription>
              {cert.pdfPath && <p style={{ color: 'var(--accent-color)', marginTop: '1rem' }}>Click to view certificate</p>}
            </CertificationCard>
          ))}
        </CertificationsGrid>
        
        <CodeSection>
          <CodeHeader>certifications.js</CodeHeader>
          <CodeBlock>
            <pre>
              {`// Continuous Learning Journey
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

// The best certification is a working project`}
            </pre>
          </CodeBlock>
        </CodeSection>
      </CertificationsContainer>
    </CertificationsSection>
  );
};

export default Certifications;