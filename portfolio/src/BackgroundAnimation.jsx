// import React from 'react';
import { motion } from 'framer-motion';

const BackgroundAnimation = () => {
  const containerVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.8, 1, 0.8],
      transition: {
        duration: 10,
        repeat: Infinity,
        repeatType: 'mirror',
        staggerChildren: 2,
      },
    },
  };

  const circleVariants = {
    animate: {
      y: [0, 30, 0],
      x: [0, -30, 0],
      opacity: [1, 0.8, 1],
      transition: {
        duration: 6,
        repeat: Infinity,
        repeatType: 'mirror',
      },
    },
  };

  return (
    <div className="background-animation">
      <motion.div
        className="circle-container"
        variants={containerVariants}
        animate="animate"
      >
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`circle circle-${i}`}
            variants={circleVariants}
          />
        ))}
      </motion.div>
      <style>{`
        .background-animation {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: -1;
          // background: linear-gradient(135deg, #1e1e2f, #2b2b42);
          background-color : black
        }
        .circle-container {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          position: relative;
        }
        .circle {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, #ff6f91, #ff9671, #ffc75f);
          mix-blend-mode: screen;
        }
        .circle-0 {
          width: 200px;
          height: 200px;
          top: 10%;
          left: 20%;
        }
        .circle-1 {
          width: 150px;
          height: 150px;
          top: 40%;
          left: 60%;
        }
        .circle-2 {
          width: 180px;
          height: 180px;
          top: 70%;
          left: 10%;
        }
        .circle-3 {
          width: 120px;
          height: 120px;
          top: 20%;
          left: 80%;
        }
        .circle-4 {
          width: 160px;
          height: 160px;
          top: 50%;
          left: 40%;
        }
        .circle-5 {
          width: 100px;
          height: 100px;
          top: 80%;
          left: 70%;
        }
      `}</style>
    </div>
  );
};

export default BackgroundAnimation;
