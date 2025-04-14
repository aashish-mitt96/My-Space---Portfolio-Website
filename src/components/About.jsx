import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="w-full bg-gray-900 text-white">
      <div className="container mx-auto px-6 sm:px-10 lg:px-14 text-center">
        <motion.h2
          className="text-3xl sm:text-5xl pb-8 font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          ABOUT ME
        </motion.h2>
        <div className="flex flex-col lg:flex-row justify-center items-start gap-12 lg:gap-20">
          <div className="lg:w-2/3 text-left">
            <motion.p
              className="text-lg sm:text-xl mb-6 leading-relaxed text-gray-300"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Hi, I'm <strong>Ashish Mittal</strong>, a passionate MERN Stack
              Developer. I specialize in building fast, scalable applications
              and have experience in both frontend and backend technologies.
            </motion.p>

            <motion.p
              className="text-lg sm:text-xl mb-6 leading-relaxed text-gray-300"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              I'm continuously learning and currently diving deeper into React,
              Node.js, and exploring the world of machine learning.
            </motion.p>
            <motion.div
              className="text-left mb-8"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <h3 className="text-xl sm:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-500 mb-6">
                MY LEARNING JOURNEY
              </h3>
              <ul className="list-disc list-inside space-y-3 sm:space-y-4 text-gray-300">
                <li>Started with JavaScript and React for frontend.</li>
                <li>Practiced DSA on LeetCode and GFG.</li>
                <li>Explored Express.js and MongoDB for backend development.</li>
                <li>Now exploring ML and automation using Python.</li>
              </ul>
            </motion.div>
            <motion.div
              className="text-left mb-8"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 2 }}
            >
              <h3 className="text-xl sm:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-500 mb-6">
                MY EDUCATION
              </h3>
              <ul className="list-disc list-inside space-y-3 sm:space-y-4 text-gray-300">
                <li>Bachelor's in Computer Science (Expected 2027) - IIIT Bhubaneswar</li>
              </ul>
            </motion.div>
          </div>
          <div className="lg:w-1/3 w-full">
            <motion.h3
              className="text-2xl sm:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-600 mb-6 text-center lg:text-left"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              MY CAREER TIMELINE
            </motion.h3>
            <div className="relative">
              <div className="border-l-2 border-teal-500 pl-6 sm:pl-8">
                {[
                  {
                    year: "2023 - College Journey",
                    desc:
                      "Started my Bachelor's in Computer Science and discovered a passion for web development.",
                    delay: 1.5,
                  },
                  {
                    year: "2023 - Exploration",
                    desc:
                      "Learned HTML, CSS, JavaScript, React, and solved DSA problems.",
                    delay: 1.8,
                  },
                  {
                    year: "2024 - Full-Stack Development",
                    desc:
                      "Built MERN projects using Express.js and MongoDB.",
                    delay: 2.1,
                  },
                  {
                    year: "2025 - Expanding Horizons",
                    desc:
                      "Exploring Machine Learning and building more projects.",
                    delay: 2.4,
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="mb-10"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: item.delay }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-4 h-4 sm:w-6 sm:h-6 bg-teal-500 rounded-full mt-1.5"></div>
                      <div>
                        <p className="font-semibold text-base sm:text-lg text-white">
                          {item.year}
                        </p>
                        <p className="text-gray-300 text-sm sm:text-base">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
