// import React from "react";

import {Link} from 'react-scroll'
import './Logo.css'

const Logo = () => {
  return (
    <div id='logo' className="flex items-center justify-center">
      <Link
        to="home"
        className="logo w-12 h-12 text-white flex items-center text-2xl justify-center rounded-full font-bold cursor-pointer"

        // framer-motion syntax
        // whileHover={{
        //     backgroundColor: ["#121212","rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","#121212"],
        //     transition: {duration:1, repeat: Infinity}
        // }}
      >
        <span className="text-pretty text-orange-600">s</span>k
      </Link>
    </div>
  );
};

export default Logo;
