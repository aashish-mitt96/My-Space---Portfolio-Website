import { useState } from "react";
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
    category: "🎨 Web Interfaces (Frontend)",
    image:
      "https://mir-s3-cdn-cf.behance.net/projects/404/c8fcda220292243.Y3JvcCw5OTksNzgyLDAsOQ.png",
  },
  {
    title: "NexTimes - Beyond Headlines",
    description:
      "Nextimes is a modern, responsive news platform that fetches the latest headlines from around the world.",
    tech: ["React", "Tailwind", "NewsAPI", "Web Speech"],
    github: "https://github.com/aashish-mitt96/NexTimes---Beyond-Headlines",
    demo: "https://nex-times-beyond-headlines-tp8t.vercel.app/",
    category: "🎨 Web Interfaces (Frontend)",
    image:
      "https://media.gettyimages.com/id/1079309150/video/breaking-news-concept-over-spinning-globe-in-4k-resolution.jpg?s=640x640&k=20&c=4K6cEGLUPNTn98n44wb3vEsrbvEJk2NUNDuvWJg0DEU=",
  },
  {
    title: "TechCart - Smart Deals",
    description:
      "TechCart is a Next.js-powered ecommerce platform offering the latest electronic gadgets.",
    tech: ["Next.js", "Tailwind CSS", "Clerk", "MongoDB Atlas"],
    github: "https://github.com/aashish-mitt96/TechCart---Smart-Deals",
    demo: "https://tech-cart-ten.vercel.app/",
    category: "🎨 Web Interfaces (Frontend)",
    image:
      "https://img.freepik.com/free-vector/futuristic-shopping-online-landing-page-hand_52683-38517.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    title: "Auth Service JWT",
    description:
      "A reusable and secure authentication backend built with Express. Easily pluggable into any MERN stack project.",
    tech: ["Nodejs", "Javascript", "JWT-Authentication"],
    github: "https://github.com/aashish-mitt96/Authservice.jwt-Backend",
    demo: "https://github.com/aashish-mitt96/Authservice.jwt-Backend",
    category: "🛠️ Server-Side & APIs (Backend)",
    image:
      "https://buiquanghieu.com/assets/img/web-authentication-la-gi/Web-Authentication.jpg",
  },
  {
    title: "Role Based Access Control",
    description:
      "A secure and scalable Role-Based Access Control (RBAC) authentication system built with TypeScript and Zod.",
    tech: ["Zod", "Typescript", "jwt-authentication"],
    github: "https://github.com/aashish-mitt96/RbacAuth.Zod-backend",
    demo: "https://github.com/aashish-mitt96/RbacAuth.Zod-backend",
    category: "🛠️ Server-Side & APIs (Backend)",
    image:
      "https://blog.openreplay.com/images/role-based-access-in-react/images/hero.png",
  },
  {
    title: "QuickQuiz Game - Play",
    description:
      "Quickquiz is an engaging and fast-paced quiz app designed to sharpen your knowledge.",
    tech: ["API", "Vite", "Typescript", "Tailwind CSS"],
    github: "https://github.com/aashish-mitt96/Quickquiz.play-Mobile",
    demo: "https://quick-quiz-instant-knowledge.vercel.app/",
    category: "🛠️ Server-Side & APIs (Backend)",
    image:
      "https://www.matillion.com/uploads/cards/Blog-API.png",
  },
  {
    title: "Strmix Live - Connect",
    description:
      "Strmix.live is a real-time video chat platform that empowers language learners to practice speaking naturally through peer-to-peer conversations.",
    tech: ["getstream.io", "streamchat", "nodejs", "mongoDB Atlas"],
    github: "https://github.com/aashish-mitt96/Strmix.live-Connect",
    demo: "https://strmix-live.onrender.com/",
    category: "💻 Web Apps (Full Stack)",
    image:
      "https://thumbs.dreamstime.com/b/man-talking-to-coworker-video-conference-man-woman-discussing-work-online-business-communication-concept-flat-345972442.jpg",
  },
  {
    title: "Doxcise AI - DocBot",
    description:
      "Doxcise.AI is a SaaS-ready AI platform for generating professional, structured documents with ease. It features smart templates, secure Clerk auth and Stripe payments.",
    tech: ["postgres", "stripe", "nextjs", "neon", "gemini-api"],
    github: "https://github.com/aashish-mitt96/Doxcise.AI-DocBot",
    demo: "https://github.com/aashish-mitt96/Doxcise.AI-DocBot",
    category: "💻 Web Apps (Full Stack)",
    image:
      "https://cdn.mos.cms.futurecdn.net/ACnYjRmTW5kqnCzoVmZyGH.png",
  },
  {
    title: "TaskFlow - Task Manager",
    description:
      "TaskFlow is a sleek and efficient To-Do application that helps you manage your daily tasks, boost productivity, and stay organized.",
    tech: ["React", "Node.js", "Express", "MongoDB Atlas"],
    github: "https://github.com/aashish-mitt96/TaskFlow---Task-Manager",
    demo: "https://task-flow-task-manager-mwbp.vercel.app/",
    category: "💻 Web Apps (Full Stack)",
    image:
      "https://img.freepik.com/free-vector/task-management-app_52683-44675.jpg",
  },

  {
    title: "Iris Classifier - Streamlit",
    description:
      "A machine learning web app built with Scikit-learn and Streamlit that predicts Iris-flower species using Logistic Regression.",
    tech: ["scikit-learn", "logistic-regression", "Streamlit"],
    github: "https://github.com/aashish-mitt96/Iris.classifier-Streamlit",
    demo: "https://iris-species-classifiers.streamlit.app/",
    category: "🧠 AI & Machine Learning",
    image:
      "https://data-flair.training/blogs/wp-content/uploads/sites/2/2021/10/machine-learning-project-iris-flower-classification.webp",
  },
  {
    title: "Loan Approval - Streamlit",
    description:
      "A Streamlit web app that predicts loan approval using a machine learning model trained on financial and personal data.",
    tech: ["scikit-learn", "logistic-regression", "Streamlit", "joblib"],
    github: "https://github.com/aashish-mitt96/Loan.approval-Streamlit",
    demo: "https://loan-approval-predictor-assets.streamlit.app/",
    category: "🧠 AI & Machine Learning",
    image:
      "https://media.geeksforgeeks.org/wp-content/uploads/20240808131607/What-is-a-Personal-Loan.webp",
  },
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState(
    "💻 Web Apps (Full Stack)"
  );

  const categories = [
    "🎨 Web Interfaces (Frontend)",
    "🛠️ Server-Side & APIs (Backend)",
    "💻 Web Apps (Full Stack)",
    "🧠 AI & Machine Learning",
  ];

  // Custom filtering logic
  const filteredProjects =
    selectedCategory === "🌐 All Projects "
      ? Array.from(new Map(projects.map((p) => [p.category, p])).values())
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="w-full bg-gray-800 text-white py-30">
      <div className="container mx-auto px-6 sm:px-12">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400 text-center mb-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          MY PROJECTS
        </motion.h2>

        {/* Filter Bar */}
        <div className="flex justify-center mb-16 border-b border-gray-600">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`relative px-4 sm:px-6 py-3 text-sm sm:text-base font-medium transition-colors duration-300
        ${
          selectedCategory === cat
            ? "text-teal-400"
            : "text-gray-400 hover:text-white"
        }`}
            >
              {cat}
              {selectedCategory === cat && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-400 rounded-full transition-all duration-300" />
              )}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div
          className={`grid ${
            filteredProjects.length > 2 ? "md:grid-cols-3" : "md:grid-cols-2"
          } grid-cols-1 gap-10`}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-gray-900 rounded-2xl shadow-lg hover:shadow-teal-500/40 transition-shadow relative overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-6">
                {project.status && (
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm">
                    {project.status}
                  </div>
                )}
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
