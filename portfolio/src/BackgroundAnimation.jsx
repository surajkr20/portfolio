// import React from 'react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const BackgroundAnimation = () => {
  const [particles, setParticles] = useState([]);
  const maxParticles = 50;

  // Track cursor position
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setParticles((prevParticles) => [
      ...prevParticles,
      { x: clientX, y: clientY, id: Math.random() },
    ].slice(-maxParticles)); // Limit particle count
  };

  // Clean up particles periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prevParticles) => prevParticles.slice(1));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="background-animation"
      onMouseMove={handleMouseMove}
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="particle"
          initial={{ opacity: 1, scale: 1 }}
          animate={{
            opacity: 0,
            scale: 0.5,
            x: particle.x - 5,
            y: particle.y - 5,
          }}
          transition={{
            duration: 1,
            ease: 'easeOut',
          }}
        />
      ))}

      <style>{`
        .background-animation {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: -1;
          background: linear-gradient(135deg, #000, #fff);
        }
        .particle {
          position: absolute;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: radial-gradient(circle, #ffffff, #000000);
          pointer-events: none;
          mix-blend-mode: difference;
        }
      `}</style>
    </div>
  );
};

export default BackgroundAnimation;
