// import React from 'react'
import Logo from "../../components/Logo/Logo";
// import Icons from "../../components/SocialMediaIcons/Icons";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="nav-container flex flex-row items-center justify-between w-full mx-auto px-16 py-4">

        {/* logo icon */}
        <Logo />

        {/* social media icons */}
        {/* <Icons/> */}

        <ul className="nav-list flex flex-row items-center gap-6 list-none text-blue-100">
          <li>Home</li>
          <li>About</li>
          <li>Project</li>
          <li>Contact</li>
        </ul>

      </nav>
    </>
  );
};

export default Navbar;
