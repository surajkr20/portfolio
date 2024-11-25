// import React from 'react'

import SkillsCard from "../../components/Card/Card";
import "./About.css";
import mern from '../../assets/mern.png'
import lang from '../../assets/programming-languages.png'
import dsa from '../../assets/dsa.png'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

const About = () => {

  useGSAP(()=>{
    gsap.from(".circle",{
      x: -100,
      duration: 1,
      opacity: 0,
      scrollTrigger:{
        trigger: '.circle',
        scroll: 'body',
        scrub: 2,
        start: 'top 50%',
        end: 'top 20%'
      }
    })
  })
  useGSAP(()=>{
    gsap.from(".line",{
      x: -100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger:{
        trigger: '.line',
        scroll: 'body',
        scrub: 2,
        start: 'top 60%',
        end: 'top 30%'
      }
    })
  })
  useGSAP(()=>{
    gsap.from(".about-details h1",{
      x: -100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger:{
        trigger: 'h1',
        scroll: 'body',
        scrub: 2,
        start: 'top 60%',
        end: 'top 30%'
      }
    })
  })
  useGSAP(()=>{
    gsap.from(".about-details li",{
      y: 100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger:{
        trigger: '.about-details li',
        scroll: 'body',
        scrub: 2,
        start: 'top 60%',
        end: 'top 40%'
      }
    })
  })
  useGSAP(()=>{
    gsap.from(".right-about",{
      x: 100,
      duration: 1,
      opacity: 0,
      stagger: 1,
    })
  })

  return (
    <div id="about" className="w-full">
      <div className="left-about">
        <div className="circle-line">
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
        </div>

        <div className="about-details">
          <div className="personal-info">
            <h1>Personal Info</h1>
            <ul>
              <li>
                <span>Name</span>: Suraj Kumar
              </li>
              <li>
                <span>Age</span>: 21 Years
              </li>
              <li>
                <span>Gender</span>: Male
              </li>
              <li>
                <span>Language Known</span>: Hindi & English
              </li>
            </ul>
          </div>
          <div className="education">
            <h1>Education</h1>
            <ul>
              <li>
                <span>Degree</span>: BCA
              </li>
              <li>
                <span>Gender</span>: Male
              </li>
              <li>
                <span>Language Known</span>: Hindi & English
              </li>
            </ul>
          </div>
          <div className="Skills">
            <h1>Skills</h1>
            <ul>
              <li>MERN STACK developer</li>
              <li>C | C++ | Javascript/Typescript</li>
              <li>Data Structure & Algorithms</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="right-about">
        <SkillsCard title={'MERN STACK DEVELOPER'} image={mern}/>
        <SkillsCard title={"C, C++, JS/TS"} image={lang}/>
        <SkillsCard title={"DSA"} image={dsa}/>
      </div>
    </div>
  );
};

export default About;
