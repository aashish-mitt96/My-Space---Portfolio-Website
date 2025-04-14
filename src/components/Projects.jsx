import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Textify - Text Manipulator",
    description:
      "Textify is a versatile text manipulation app that allows users to perform common text operations with ease.",
    tech: ["React", "Vite", "Tailwind CSS"],
    github: "https://github.com/aashish-mitt96/Textify---Text-Manipulator",
    demo: "https://textify-text-manipulation.vercel.app/",
  },
  {
    title: "NexTimes - Beyond Headlines",
    description:
      "Nextimes is a modern, responsive news platform that fetches the latest headlines from around the world.",
    tech: ["React", "Tailwind", "NewsAPI", "Web Speech"],
    github: "https://github.com/aashish-mitt96/NexTimes---Beyond-Headlines",
    demo: "https://nex-times-beyond-headlines-tp8t.vercel.app/",
  },
  {
    title: "TechVerse - Digital Domain",
    description:
      "TechVerse is a modern tech blog platform built for exploring and sharing the latest things in technology.",
    tech: ["Vite", "Tailwind CSS", "MongoDB Atlas", "Node.js"],
    github: "https://github.com/aashish-mitt96/TechVerse---Digital-Domain",
    demo: "https://tech-verse-digital-domain-vtvq.vercel.app/",
  },
  {
    title: "TaskFlow - Task Manager",
    description:
      "TaskFlow is a sleek and efficient To-Do application that helps you manage your daily tasks, boost productivity, and stay organized.",
    tech: ["React", "Node.js", "Express", "MongoDB Atlas"],
    github: "https://github.com/aashish-mitt96/TaskFlow---Task-Manager",
    demo: "https://task-flow-task-manager-mwbp.vercel.app/",
  },
  {
    title: "TechCart - Smart Deals",
    description:
      "TechCart is a Next.js-powered ecommerce platform offering the latest electronic gadgets with seamless shopping experience.",
    tech: ["Next.js", "Tailwind CSS", "Clerk", "MongoDB Atlas"],
    github: "https://github.com/aashish-mitt96/TechCart---Smart-Deals",
    demo: "https://tech-cart-ten.vercel.app/",
    status: "Under Development",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="w-full bg-gray-800 text-white py-30">
      <div className="container mx-auto px-6 sm:px-12">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400 text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          MY PROJECTS
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10">
          {projects.slice(0, 3).map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-teal-500/40 transition-shadow"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
            >
              <h3 className="text-2xl font-semibold mb-3 text-teal-300">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-teal-600 text-white px-3 py-1 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          <motion.div
            key={projects[3].title}
            className="bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-teal-500/40 transition-shadow relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-3 text-teal-300">
              {projects[3].title}
            </h3>
            <p className="text-gray-300 mb-4">{projects[3].description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {projects[3].tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-teal-600 text-white px-3 py-1 text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href={projects[3].github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href={projects[3].demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
            </div>
          </motion.div>
          <motion.div
            key={projects[4].title}
            className="bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-teal-500/40 transition-shadow relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm">
              {projects[4].status}
            </div>

            <h3 className="text-2xl font-semibold mb-3 text-teal-300">
              {projects[4].title}
            </h3>
            <p className="text-gray-300 mb-4">{projects[4].description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {projects[4].tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-teal-600 text-white px-3 py-1 text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href={projects[4].github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href={projects[4].demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
