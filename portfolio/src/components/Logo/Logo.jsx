
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'

import './Logo.css'
import {Link, Outlet} from "react-router-dom";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {

  useGSAP(()=>{
    let tl = gsap.timeline()
    tl.from('#link',{
      y:-100,
      duration: 1,
      opacity: 0
    })
    tl.from('nav-container li',{
      y:-100,
      duration: 1,
      opacity: 0,
      stagger:1
    })
  })

  return (
    <div className="flex items-center justify-center" id="link">
      <MotionLink
        to="home" smooth={true}
        className="logo w-10 h-10 flex items-center text-2xl justify-center rounded-full font-bold cursor-pointer"
        whileHover={{
          backgroundColor:["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"],
          transition:{duration:1, repeat: Infinity}
        }}
      >
        <span id='logo-text' className='text-[20px]'>SK</span>
      </MotionLink>
      <Outlet/>
    </div>
  );
};

export default Logo;
