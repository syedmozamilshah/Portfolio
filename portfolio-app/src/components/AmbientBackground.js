import React from 'react';
import { motion } from 'framer-motion';

const AmbientBackground = () => {
  const particles = Array.from({ length: 28 }, (_, i) => ({
    id: i,
    x: (i * 3.7) % 100,
    y: (i * 7.3) % 100,
    size: (i % 3) + 1.5,
    duration: 12 + (i % 8) * 2,
    delay: (i % 5) * 0.8,
    color: ['#00FFAB', '#00B2FF', '#9B59B6', '#39FF14'][i % 4],
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Perspective Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,255,171,0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,255,171,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Ambient Glowing Orbs */}
      <motion.div
        className="absolute top-10 left-10 w-96 h-96 rounded-full opacity-[0.08] blur-3xl pointer-events-none"
        style={{ background: '#00FFAB' }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-[420px] h-[420px] rounded-full opacity-[0.07] blur-3xl pointer-events-none"
        style={{ background: '#00B2FF' }}
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -40, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/2 left-1/3 w-80 h-80 rounded-full opacity-[0.05] blur-3xl pointer-events-none"
        style={{ background: '#9B59B6' }}
        animate={{
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Floating 3D Particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            boxShadow: `0 0 ${p.size * 5}px ${p.color}`,
          }}
          animate={{
            y: [0, -70, 0],
            x: [0, (p.id % 2 === 0 ? 30 : -30), 0],
            opacity: [0.15, 0.5, 0.15],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

export default AmbientBackground;
