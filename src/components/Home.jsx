import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import photo from "../assets/photo.png";

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen pt-28 pb-16 flex flex-col-reverse lg:flex-row items-center justify-center gap-12 px-6 lg:px-24 bg-gradient-to-br from-white via-violet-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      {/* Text */}
      <div className="w-full lg:w-1/2 text-center lg:text-left" data-aos="fade-right">
        <p className="text-violet-600 dark:text-violet-400 font-medium text-lg mb-2">
          👋 Welcome to my portfolio
        </p>
        
        <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight text-gray-900 dark:text-white">
          Hello, I'm <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600 dark:from-violet-400 dark:to-purple-400">
            Piyush Gupta
          </span>
        </h1>

        <p className="text-gray-600 dark:text-gray-300 mt-4 text-lg leading-relaxed">
          A passionate <span className="text-violet-600 dark:text-violet-400 font-semibold">MERN Stack Developer</span> crafting 
          responsive user interfaces, robust backend APIs, and scalable web applications 
          that deliver exceptional user experiences.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-violet-600 to-purple-600 text-white font-medium hover:from-violet-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-violet-500/25"
          >
            View Projects
          </button>
          
          <a
            href="/resume.pdf"
            download
            className="px-8 py-3 rounded-lg border-2 border-violet-600 dark:border-violet-400 text-violet-600 dark:text-violet-400 font-medium hover:bg-violet-600 hover:text-white dark:hover:bg-violet-400 dark:hover:text-gray-900 transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            <HiDownload size={20} />
            Download CV
          </a>
        </div>

        {/* Social Links */}
        <div className="mt-8 flex gap-5 justify-center lg:justify-start">
          <a
            href="https://github.com/piyush81011"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-violet-600 hover:text-white dark:hover:bg-violet-500 transition-all duration-300 transform hover:scale-110"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/piyush-gupta-cse/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-violet-600 hover:text-white dark:hover:bg-violet-500 transition-all duration-300 transform hover:scale-110"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-violet-600 hover:text-white dark:hover:bg-violet-500 transition-all duration-300 transform hover:scale-110"
          >
            <FaTwitter size={22} />
          </a>
        </div>
      </div>

      {/* Image */}
      <div className="w-full lg:w-1/2 flex justify-center" data-aos="fade-left">
        <div className="relative">
          <img
            src={photo}
            alt="Piyush Gupta"
            className="relative w-64 lg:w-80 rounded-full shadow-2xl border-4 border-violet-200 dark:border-violet-900 object-cover aspect-square ring-4 ring-violet-100 dark:ring-violet-800/50"
          />
          
          {/* Status badge */}
          <div className="absolute bottom-4 right-4 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Available for work</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
