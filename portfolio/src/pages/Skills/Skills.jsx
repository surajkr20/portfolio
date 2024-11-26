// import React from 'react'
import "./skills.css";
import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-black text-white shadow-black
        py-3 px-6 cursor-pointer absolute"
      whileHover={{ scale: 1.05 }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <div id="skills">
      <h2 className="font-bold text-8xl mt-10 text-center text-black">
        Skills
      </h2>
      <div className="radical-circular relative flex items-center justify-center rounded-full">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-black text-white p-5 shadow-black
        cursor-pointer absolute"
          whileHover={{ scale: 1.05 }}
        >
          web
        </motion.div>
        <Skill name="css" x='-5vw' y='-10vw'/>
      </div>
    </div>
  );
};

export default Skills;
