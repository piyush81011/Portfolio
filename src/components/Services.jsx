import React from "react";
import { FaLaptopCode, FaDatabase, FaMobileAlt } from "react-icons/fa";

function Services() {
  const items = [
    { icon: <FaLaptopCode size={38} />, title: "Frontend Development", desc: "Modern UI using React & Tailwind" },
    { icon: <FaDatabase size={38} />, title: "Backend APIs", desc: "Scalable REST APIs using Node.js" },
    { icon: <FaMobileAlt size={38} />, title: "Full Stack Apps", desc: "Complete MERN stack applications" },
  ];

  return (
    <section id="services" className="px-6 lg:px-16 py-20 max-w-screen-xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-black dark:text-white mb-12">
        Services
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {items.map((s, i) => (
          <div
            key={i}
            data-aos="fade-up"
            className="p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-xl dark:shadow-gray-700 hover:scale-105 transition"
          >
            <div className="text-violet-600 dark:text-violet-400">{s.icon}</div>
            <h3 className="mt-4 text-2xl font-semibold text-black dark:text-white">{s.title}</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
