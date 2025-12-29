import React from "react";
import about from "../assets/about.png";

function About() {
  return (
    <section id="about" className="px-6 lg:px-16 py-20 max-w-screen-xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-12">

        <img
          src={about}
          className="w-3/4 sm:w-1/2 lg:w-1/3 rounded-2xl shadow-xl dark:shadow-gray-700"
          data-aos="fade-right"
        />

        <div className="w-full lg:w-2/3" data-aos="fade-left">
          <h2 className="text-4xl font-bold text-black dark:text-white">About Me</h2>

          <p className="text-gray-700 dark:text-gray-300 text-lg mt-4">
            I'm a MERN stack developer passionate about clean UI and efficient backend systems. 
            With a strong foundation in JavaScript and modern web technologies, I love turning 
            complex problems into simple, beautiful, and intuitive solutions.
          </p>

          <p className="text-gray-700 dark:text-gray-300 text-lg mt-4">
            I specialize in building full-stack web applications using React, Node.js, Express, 
            and MongoDB. My goal is to create seamless user experiences while ensuring robust 
            and scalable backend architectures.
          </p>

          {/* Skills */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-black dark:text-white mb-3">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {["React", "Node.js", "Express", "MongoDB", "JavaScript", "Tailwind CSS", "Git", "REST APIs"].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <a 
            href="/cv.pdf" 
            download="YourName_CV.pdf"
            className="mt-8 inline-block px-7 py-3 border border-violet-600 dark:border-violet-400 text-violet-600 dark:text-violet-400 rounded-lg hover:bg-violet-600 hover:text-white transition"
          >
            Download CV
          </a>
        </div>

      </div>
    </section>
  );
}

export default About;
