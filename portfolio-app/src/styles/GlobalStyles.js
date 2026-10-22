import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #0A0F0D;
    --secondary-color: #151922;
    --accent-color: #00FFAB;
    --neon-blue: #00B2FF;
    --text-color: #f5f5f5;
    --text-secondary: #a0a0a0;
    --text-muted: #8a8a8a;
    --dark-gray: #1a1a1a;
    --light-gray: #2a2a2a;
    --terminal-green: #39FF14;
    --transition: all 0.3s ease;
    --border-color: rgba(0, 255, 171, 0.3);
    --shadow-color: rgba(0, 255, 171, 0.1);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'IBM Plex Mono', 'Fira Code', 'Courier New', monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--primary-color);
    color: var(--text-color);
    line-height: 1.6;
    overflow-x: hidden;
  }

  a {
    color: var(--accent-color);
    text-decoration: none;
    transition: var(--transition);
    
    &:hover {
      opacity: 0.8;
      color: var(--neon-blue);
    }
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: inherit;
  }

  code {
    font-family: 'IBM Plex Mono', 'Fira Code', source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    background-color: var(--secondary-color);
    padding: 0.2em 0.4em;
    border-radius: 3px;
    font-size: 0.9em;
    color: var(--terminal-green);
  }

  pre {
    font-family: 'IBM Plex Mono', 'Fira Code', monospace;
    color: var(--text-color);
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  section {
    padding: 5rem 0;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 1rem;
    line-height: 1.2;
    color: var(--text-color);
    font-weight: 600;
  }

  p {
    margin-bottom: 1rem;
    color: var(--text-color);
  }

  /* Enhanced cursor styles */
  .cursor-dot {
    position: fixed;
    width: 12px;
    height: 12px;
    background: var(--accent-color);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    transition: transform 0.1s ease, width 0.2s ease, height 0.2s ease;
    box-shadow: 0 0 15px var(--accent-color);
  }

  .cursor-outline {
    position: fixed;
    width: 40px;
    height: 40px;
    border: 2px solid rgba(0, 255, 171, 0.3);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9998;
    transition: all 0.1s ease;
  }

  /* Terminal cursor */
  .terminal-cursor {
    display: inline-block;
    background-color: var(--accent-color);
    animation: blink 1s infinite;
    width: 2px;
    height: 1.2em;
    margin-left: 2px;
  }

  @keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }

  /* Improved scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--primary-color);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--accent-color);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--neon-blue);
  }

  /* Text visibility improvements */
  .text-primary {
    color: var(--text-color) !important;
    text-shadow: 0 0 2px rgba(245, 245, 245, 0.1);
  }

  .text-secondary {
    color: var(--text-secondary) !important;
    text-shadow: 0 0 2px rgba(160, 160, 160, 0.1);
  }

  .text-muted {
    color: var(--text-muted) !important;
  }

  .text-accent {
    color: var(--accent-color) !important;
    text-shadow: 0 0 5px rgba(0, 255, 171, 0.3);
  }

  .text-terminal {
    color: var(--terminal-green) !important;
    text-shadow: 0 0 5px rgba(57, 255, 20, 0.3);
  }

  /* Card and section backgrounds with better contrast */
  .card-bg {
    background: rgba(26, 26, 26, 0.8);
    backdrop-filter: blur(10px);
    border: 1px solid var(--border-color);
  }

  .section-bg {
    background: linear-gradient(135deg, rgba(10, 15, 13, 0.95) 0%, rgba(21, 25, 34, 0.95) 100%);
  }
`;

export default GlobalStyles;
