// import React from 'react'
import "../Home/Home.css";
import man from "../../assets/profilepic.jpg";
import TypingEffect from "react-typing-effect";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Icons from "../../components/SocialMediaIcons/Icons";
import {Link} from 'react-scroll'

const Home = () => {
  useGSAP(() => {
    gsap.from(".left-home img", {
      x: -100,
      duration: 1.5,
      stagger: 1,
    });
  });
  useGSAP(() => {
    gsap.from(".home-details h1", {
      y: -100,
      duration: 1,
      opacity: 0,
      stagger: 2,
      scrollTrigger: {
        trigger: ".home-details h1",
        scroll: "body",
      },
    });
  });
  useGSAP(() => {
    gsap.from(".home-details p", {
      x: 100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".home-details p",
        scroll: "body",
      },
    });
  });

  return (
    <div id="home">
      <div className="left-home">
        <img id="img" src={man} alt="suraj kr" />
        <h1 className="">
          <span className="text-orange-400">Suraj </span>Kr
          <span> | Alias: </span>
          <span className="text-orange-400"> Abhinav </span>Bhardwaj
        </h1>
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

          <div className="flex flex-row items-center gap-6">
            <button onClick={() => {}} id="btn">
              Resume
            </button>
            <Link to="contact" smooth={500} className="text-xl text-blue-600 underline cursor-pointer">contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
