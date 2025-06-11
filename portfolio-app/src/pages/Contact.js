import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const ContactSection = styled.section`
  min-height: 100vh;
  padding-top: 100px;
  padding-bottom: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ContactContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1.5rem;
  text-align: center;
`;

const ContactTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const ContactSubtitle = styled.h2`
  font-size: 1.5rem;
  color: var(--text-secondary);
  font-weight: 400;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 600px;
  margin: 0 auto;
  text-align: left;
`;



const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 3rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const SocialLink = styled.a`
  color: var(--text-color);
  font-size: 1.5rem;
  transition: var(--transition);
  display: flex;
  flex-direction: column;
  align-items: center;
  
  &:hover {
    color: var(--accent-color);
    transform: translateY(-3px);
  }
`;

const Contact = () => {

  return (
    <ContactSection>
      <ContactContainer>
        <ContactTitle>Get In Touch</ContactTitle>
        <ContactSubtitle>
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you! You can reach me through my social media profiles below.
        </ContactSubtitle>
        
        <SocialLinks style={{ marginTop: '3rem', marginBottom: '3rem' }}>
          <SocialLink href="https://github.com/syedmozamilshah" target="_blank" rel="noopener noreferrer" title="GitHub" style={{ fontSize: '3rem', margin: '0 2rem' }}>
            <FaGithub />
            <p style={{ fontSize: '1rem', marginTop: '1rem' }}>GitHub</p>
          </SocialLink>
          <SocialLink href="https://www.linkedin.com/in/syed-mozamil-shah-873a26230" target="_blank" rel="noopener noreferrer" title="LinkedIn" style={{ fontSize: '3rem', margin: '0 2rem' }}>
            <FaLinkedin />
            <p style={{ fontSize: '1rem', marginTop: '1rem' }}>LinkedIn</p>
          </SocialLink>
          <SocialLink href="mailto:syedmozamilshah99@gmail.com" title="Email" style={{ fontSize: '3rem', margin: '0 2rem' }}>
            <FaEnvelope />
            <p style={{ fontSize: '1rem', marginTop: '1rem' }}>Email</p>
          </SocialLink>
        </SocialLinks>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;