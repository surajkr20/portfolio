// import React from 'react'
import "../Home/Home.css";
import man from "../../assets/profilepic.jpg";
import TypingEffect from "react-typing-effect";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Icons from "../../components/SocialMediaIcons/Icons";

const Home = () => {
  useGSAP(() => {
    gsap.from(".left-home img", {
      x: -100,
      duration: 1.5,
    });
  });

  return (
    <div id="home">
      <div className="left-home">
        <img src={man} alt="suraj kr" />
        <Icons />
        <div id="type-writer" className="line3">
          <TypingEffect
            text={["Programmer", "MERN Stack Developer", "Software Engineer"]}
            speed={100}
            eraseSpeed={50}
            eraseDelay={1000}
            typingDelay={500}
          />
        </div>
        <h1>Suraj Kumar</h1>
      </div>

      <div className="right-home">
        <div className="home-details">
          <h1>
            Transforming Ideas into Functional Realities through Modern
            Development, Clean Code, and Logical Problem-Solving
          </h1>

          <p>
            As a proficient MERN stack developer and problem solver, I
            specialize in crafting innovative web applications. My expertise
            lies in React, Next.js, and modern web development, showcased
            through dynamic projects that bring ideas to life.
          </p>

          <button id="btn">Resume</button>
          {/* Hi, I'm Suraj Kumar (also known as Abhinav Bhardwaj)
          
          Hi, I'm Suraj Kumar | Alias: Abhinav Bhardwaj*/}
          
        </div>
      </div>
    </div>
  );
};

export default Home;
