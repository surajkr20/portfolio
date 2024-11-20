// import React from "react";
import { motion } from "framer-motion";
import {Link, Outlet} from 'react-router-dom'

const MotionLink = motion(Link)

const Logo = () => {
  return (
    <div className="flex items-center justify-center">
      <MotionLink
        href="home"
        className="w-12 h-12 bg-[#340f0f] text-white flex items-center text-2xl justify-center rounded-full font-bold cursor-pointer"

        // framer-motion syntax
        whileHover={{
            backgroundColor: ["#121212","rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","#121212"],
            transition: {duration:1, repeat: Infinity}
        }}
      >
        s<span className="text-pretty text-orange-600">k</span>
      </MotionLink>
      <Outlet/>
    </div>
  );
};

export default Logo;
