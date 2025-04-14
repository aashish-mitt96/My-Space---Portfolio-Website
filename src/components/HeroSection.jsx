import React from "react";
import { FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import profile from "../assets/profile.png";
import Particles from "react-tsparticles";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="w-screen h-screen text-white flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-30  relative overflow-hidden bg-gradient-to-br from-gray-900 to-black"
    >
      <Particles
        className="absolute top-0 left-0 w-full h-full"
        options={{
          particles: {
            number: { value: 100 },
            size: { value: 3 },
            line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
          },
        }}
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900 to-transparent z-0"></div>
      <div className="flex-1 z-10 text-center md:text-left mb-8 md:mb-0 order-2 md:order-1">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-purple-200"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Hi, I'm <span className="text-purple-300">Ashish Mittal</span>
        </motion.h1>
        <motion.p
          className="text-xl sm:text-2xl mb-4 text-cyan-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          I'm a{" "}
          <span className="font-semibold">
            <Typewriter
              words={["MERN Stack Dev", "Data Science Enthusiast"]}
              loop
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </motion.p>
        <motion.p
          className="text-lg sm:text-xl md:text-2xl mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          Crafting seamless, user-friendly digital experiences with creativity
          and precision.
        </motion.p>
        <motion.a
          href="#projects"
          className="inline-block px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-teal-500 to-cyan-600 text-white text-lg rounded-full transform hover:scale-105 hover:shadow-xl transition-all duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          Check Out My Work{" "}
          <FaArrowDown className="ml-2 inline-block animate-bounce" />
        </motion.a>
      </div>
      <div className="flex-1 flex justify-center lg:ml-20 items-center z-10 order-1 md:order-2">
        <motion.div
          className="relative w-64 h-64  mt-29 mb-15 sm:mb-0 sm:mt-0 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-8 border-gradient-to-r from-blue-500 to-purple-500"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <img
            src={profile}
            alt="Your Profile"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
      </div>
      <svg
        className="absolute bottom-0 left-0 w-full z-0"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#0f172a"
          fillOpacity="1"
          d="M0,224L48,218.7C96,213,192,203,288,202.7C384,203,480,213,576,224C672,235,768,245,864,240C960,235,1056,213,1152,181.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
};

export default HeroSection;
