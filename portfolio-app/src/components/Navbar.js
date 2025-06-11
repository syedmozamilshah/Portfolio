import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: rgba(14, 16, 22, 0.8);
  backdrop-filter: blur(10px);
  transition: var(--transition);
  box-shadow: ${({ scrolled }) => scrolled ? '0 5px 15px rgba(0, 0, 0, 0.3)' : 'none'};
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-color);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    color: var(--accent-color);
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    display: ${({ isOpen }) => isOpen ? 'flex' : 'none'};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: var(--secondary-color);
    padding: 2rem;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
`;

const NavLink = styled(Link)`
  color: var(--text-color);
  font-weight: 500;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--accent-color);
    transition: var(--transition);
  }
  
  &:hover:after, &.active:after {
    width: 100%;
  }
  
  &.active, &:hover {
    color: var(--accent-color);
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: var(--text-color);
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const ResumeButton = styled.a`
  border: 1px solid var(--accent-color);
  color: var(--accent-color);
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-weight: 500;
  transition: var(--transition);
  margin-left: 1rem;
  
  &:hover {
    background-color: rgba(100, 255, 218, 0.1);
  }
  
  @media (max-width: 768px) {
    margin: 1rem auto 0;
    display: ${({ isOpen }) => isOpen ? 'block' : 'none'};
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarContainer scrolled={scrolled}>
      <Logo to="/">
        <span>syed</span>
        <span style={{ color: 'var(--accent-color)' }}>Mozamil</span>
        <span>Shah</span>
      </Logo>
      
      <MobileMenuButton onClick={toggleMenu}>
        {isOpen ? '✕' : '☰'}
      </MobileMenuButton>
      
      <NavLinks isOpen={isOpen}>
        <NavLink to="/" onClick={() => setIsOpen(false)}>
          Home
        </NavLink>
        <NavLink to="/about" onClick={() => setIsOpen(false)}>
          About Me
        </NavLink>
        <NavLink to="/projects" onClick={() => setIsOpen(false)}>
          Projects
        </NavLink>
        <NavLink to="/certifications" onClick={() => setIsOpen(false)}>
          Certifications
        </NavLink>
        <NavLink to="/achievements" onClick={() => setIsOpen(false)}>
          Achievements
        </NavLink>
        <NavLink to="/skills" onClick={() => setIsOpen(false)}>
          Skills
        </NavLink>
        <NavLink to="/contact" onClick={() => setIsOpen(false)}>
          Contact
        </NavLink>
        <ResumeButton href={require('../resume/Syed Mozamil Shah (Resume).pdf')} target="_blank" rel="noopener noreferrer" isOpen={isOpen}>
          Resume
        </ResumeButton>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;