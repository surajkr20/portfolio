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
      initial={{x:0, y:0}}
      whileInView={{x:x, y:y}}
      transition={{duration: 1.5}}
      // viewport={{once: true}}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <div id="skills" className="mt-8">
      <h2 className="font-bold text-6xl text-center text-black">
        Skills
      </h2>
      <div className="radical-circular relative flex items-center justify-center rounded-full mt-6">
        <motion.div
          className="flex items-center justify-center rounded-full text-2xl font-semibold bg-red-700 text-white py-2 px-6 shadow-black
        cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          Skills
        </motion.div>

        <Skill name="C/C++" x='-30vw' y='-4vw'/>
        {/* <Skill name="Data structure & Algorithm" x='-5vw' y='-10vw'/> */}

        <Skill name="HTML" x='0' y='-20vw'/>
        <Skill name="CSS" x='-20vw' y='-5vw'/>
        <Skill name="Tailwind CSS" x='10vw' y='11vw'/>
        <Skill name="Javascript" x='25vw' y='6vw'/>
        <Skill name="Typescript" x='25vw' y='-2vw'/>
        <Skill name="React.js" x='-6vw' y='12vw'/>
        <Skill name="Next.js" x='-20vw' y='-15vw'/>
        <Skill name="Node.js" x='10vw' y='-10vw'/>
        <Skill name="Express.js" x='25vw' y='-14vw'/>
        <Skill name="MongoDB" x='-5vw' y='-10vw'/>
        <Skill name="Firebase" x='-20vw' y='6vw'/>

      </div>
    </div>
  );
};

export default Skills;
