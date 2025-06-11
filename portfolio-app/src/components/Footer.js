import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: var(--primary-color);
  padding: 2rem 0;
  text-align: center;
  margin-top: auto;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const FooterText = styled.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const FooterLink = styled.a`
  color: var(--accent-color);
  transition: var(--transition);
  
  &:hover {
    opacity: 0.8;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
`;

const SocialLink = styled.a`
  color: var(--text-secondary);
  font-size: 1.25rem;
  transition: var(--transition);
  
  &:hover {
    color: var(--accent-color);
    transform: translateY(-3px);
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <SocialLinks>
          <SocialLink href="https://github.com/syedmozamilshah" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </SocialLink>
          <SocialLink href="www.linkedin.com/in/syed-mozamil-shah-873a26230" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </SocialLink>
          <SocialLink href="mailto:syedmozamilshah99@gmail.com">
            <i className="fas fa-envelope"></i>
          </SocialLink>
        </SocialLinks>
        
        <FooterText>
          Designed & Built by <FooterLink href="https://github.com/syedmozamilshah" target="_blank" rel="noopener noreferrer">Syed Mozamil Shah</FooterLink>
        </FooterText>
        
        <FooterText>
          © {new Date().getFullYear()} All Rights Reserved
        </FooterText>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;