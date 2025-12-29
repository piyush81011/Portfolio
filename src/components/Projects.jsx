import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const items = [
    { 
      title: "Medilocator", 
      desc: "A platform to locate nearby medical facilities, hospitals, and healthcare services with real-time availability.", 
      tech: "MERN Stack",
      link: "https://www.medilocator.live"
    },
    { 
      title: "Portfolio", 
      desc: "A personal portfolio website showcasing my skills, projects, and experience as a developer.", 
      tech: "React, Tailwind CSS, Vite",
      link: "https://portfolio-lemon-psi-24.vercel.app/"
    },
  ];

  return (
    <section id="projects" className="px-6 lg:px-16 py-20 max-w-screen-xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
        Projects
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
        Here are some of the projects I've worked on
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {items.map((p, i) => {
          const CardWrapper = p.link ? 'a' : 'div';
          const cardProps = p.link ? {
            href: p.link,
            target: "_blank",
            rel: "noopener noreferrer"
          } : {};
          
          return (
            <CardWrapper
              key={i}
              {...cardProps}
              data-aos="fade-up"
              className={`group p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-xl dark:shadow-gray-700/30 hover:shadow-2xl hover:shadow-violet-500/10 hover:-translate-y-2 transition-all duration-300 border border-gray-100 dark:border-gray-700 ${p.link ? 'cursor-pointer' : ''}`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                  {p.title}
                </h3>
                {p.link && <FaExternalLinkAlt className="text-gray-400 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors" />}
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{p.desc}</p>
              <p className="mt-4 text-violet-600 dark:text-violet-400 text-sm font-medium">{p.tech}</p>
            </CardWrapper>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
