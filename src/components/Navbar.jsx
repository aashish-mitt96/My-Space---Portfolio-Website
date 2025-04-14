import React, { useEffect } from "react";
import { FaHome, FaUser, FaFolderOpen, FaEnvelope, FaCube } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const navLinks = [
    { name: "Home", icon: <FaHome />, href: "#home" },
    { name: "About", icon: <FaUser />, href: "#about" },
    { name: "Projects", icon: <FaFolderOpen />, href: "#projects" },
    { name: "Contact", icon: <FaEnvelope />, href: "#contact" },
  ];

  const handleClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    window.scrollTo({
      top: targetElement.offsetTop - 70, 
      behavior: "smooth",
    });
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav
        className="flex flex-wrap items-center justify-between px-4 md:px-12 py-3 
        bg-gradient-to-r from-[#1c1c2c]/60 via-[#2d2d44]/60 to-[#1c1c2c]/60 
        backdrop-blur-xl border border-white/20 
        shadow-xl shadow-purple-500/10 text-white rounded-b-xl"
      >
        <div
          className="flex items-center gap-4 text-xl md:text-3xl font-bold text-purple-300 hover:text-purple-400 transition duration-300"
          onClick={(e) => handleClick(e, "#home")}
        >
          <FaCube className="text-lg md:text-3xl transition-transform duration-500 hover:rotate-[360deg]" />
          <span className="hidden md:inline">My Space</span>
        </div>
        <ul className="flex items-center gap-4 md:gap-8 text-xs md:text-sm font-medium flex-wrap">
          {navLinks.map((link, index) => (
            <li
              key={link.name}
              data-aos="fade-down"
              data-aos-delay={index * 100}
            >
              <div
                onClick={(e) => handleClick(e, link.href)}
                className="group relative flex items-center gap-1 md:gap-2 transition-all duration-300 text-white hover:text-pink-400 cursor-pointer"
              >
                {link.icon}
                {link.name}
                <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-pink-400 transition-all duration-300 group-hover:w-full"></span>
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
