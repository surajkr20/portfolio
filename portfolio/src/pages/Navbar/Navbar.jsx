import { useRef } from "react";
import Logo from "../../components/Logo/Logo";
import "./Navbar.css";
import { Link } from "react-scroll";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
  const menu = useRef();
  const mobile = useRef();

  useGSAP(() => {
    let tl = gsap.timeline();
    tl.from("nav li", {
      y: -100,
      duration: 1,
      opacity: 0,
      stagger: 0.5,
    }); 
  });

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    mobile.current.classList.toggle("activemobile");
    mobile.current.classList.toggle("activeham");
  }; 

  // Function to close the mobile menu
  const closeMenu = () => {
    mobile.current.classList.remove("activemobile");
    mobile.current.classList.remove("activeham");
  };

  return (
    <>
      <nav className="nav-container flex flex-row items-center justify-between w-full mx-auto px-16 py-4 z-10">
        {/* Logo Icon */}
        <Logo />

        {/* Desktop Menu */}
        <ul className="desktop-menu nav-list flex flex-row items-center gap-6 list-none cursor-pointer text-white">
          <Link
            to="home"
            smooth={true}
            duration={500}
            activeClass="active"
            spy={true}
          >
            <li id="list">Home</li>
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            activeClass="active"
            spy={true}
          >
            <li id="list">About</li>
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            activeClass="active"
            spy={true}
          >
            <li id="list">Skills</li>
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            activeClass="active"
            spy={true}
          >
            <li id="list">Projects</li>
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={700}
            activeClass="active"
            spy={true}
          >
            <li id="list">Contact</li>
          </Link>
        </ul>

        {/* Hamburger Menu */}
        <div className="hamburger" ref={menu} onClick={toggleMenu}>
          <div className="ham"></div>
          <div className="ham"></div>
          <div className="ham"></div>
        </div>

        {/* Mobile Menu */}
        <ul
          ref={mobile}
          className="mobile-menu nav-list flex flex-col items-center justify-center gap-10 list-none cursor-pointer text-white"
        >
          <Link
            to="home"
            smooth={true}
            duration={500}
            activeClass="active"
            spy={true}
            onClick={closeMenu}
          >
            <li id="list">Home</li>
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            activeClass="active"
            spy={true}
            onClick={closeMenu}
          >
            <li id="list">About</li>
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            activeClass="active"
            spy={true}
            onClick={closeMenu}
          >
            <li id="list">Skills</li>
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            activeClass="active"
            spy={true}
            onClick={closeMenu}
          >
            <li id="list">Projects</li>
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={700}
            activeClass="active"
            spy={true}
            onClick={closeMenu}
          >
            <li id="list">Contact</li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
