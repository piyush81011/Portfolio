import React from "react";
import { 
  FaReact, FaNodeJs, FaGitAlt, FaGithub, FaHtml5, FaCss3Alt
} from "react-icons/fa";
import { 
  SiJavascript, SiCplusplus, SiTailwindcss, SiMongodb, SiExpress, 
  SiPostman, SiVite, SiVercel, SiNetlify, SiMysql
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
        { name: "C++", icon: <SiCplusplus className="text-blue-500" /> },
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-400" /> },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <FaReact className="text-cyan-400" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
        { name: "Vite", icon: <SiVite className="text-yellow-500" /> },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-400" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
        { name: "GitHub", icon: <FaGithub className="text-gray-400" /> },
        { name: "VS Code", icon: <VscCode className="text-blue-500" /> },
        { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
        { name: "Vercel", icon: <SiVercel className="text-gray-400" /> },
        { name: "Netlify", icon: <SiNetlify className="text-teal-500" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="px-6 lg:px-16 py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
          Skills & Technologies
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Technologies and tools I use to bring ideas to life
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg dark:shadow-gray-700/30 border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold text-violet-600 dark:text-violet-400 mb-6 text-center">
                {category.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="group flex flex-col items-center gap-2 p-3 rounded-xl bg-gray-50 dark:bg-gray-700/50 hover:bg-violet-50 dark:hover:bg-violet-900/20 transition-all duration-300 hover:scale-110 cursor-pointer"
                    title={skill.name}
                  >
                    <span className="text-3xl">{skill.icon}</span>
                    <span className="text-xs font-medium text-gray-600 dark:text-gray-300 group-hover:text-violet-600 dark:group-hover:text-violet-400">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
