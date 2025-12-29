import React, { useEffect, useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  // Load theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  // Toggle dark mode
  const toggleDark = () => {
    const html = document.documentElement;

    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDark(false);
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDark(true);
    }
  };

  // Scroll to page section
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm">
      <div className="max-w-screen-xl mx-auto h-20 px-6 lg:px-12 flex items-center justify-between">

        <h1 className="text-2xl font-bold text-violet-600 dark:text-violet-400">
          Piyush
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-10 text-gray-700 dark:text-gray-200 font-medium">
          <li onClick={() => scrollTo("home")} className="cursor-pointer hover:text-violet-600">Home</li>
          <li onClick={() => scrollTo("about")} className="cursor-pointer hover:text-violet-600">About</li>
          <li onClick={() => scrollTo("services")} className="cursor-pointer hover:text-violet-600">Services</li>
          <li onClick={() => scrollTo("projects")} className="cursor-pointer hover:text-violet-600">Projects</li>

          <button
            onClick={() => scrollTo("contact")}
            className="px-5 py-2 border border-violet-600 text-violet-600 rounded-lg hover:bg-violet-600 hover:text-white transition"
          >
            Contact
          </button>

          <button onClick={toggleDark} className="ml-4 text-2xl hover:scale-110 transition">
            {dark ? "🌙" : "☀️"}
          </button>
        </ul>

        {/* Mobile Menu Button */}
        <button onClick={() => setOpen(!open)} className="lg:hidden text-3xl dark:text-white">
          ☰
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white dark:bg-gray-900 shadow-md py-6 px-6 flex flex-col gap-6 text-gray-700 dark:text-gray-200 text-lg">
          <span onClick={() => scrollTo("home")}>Home</span>
          <span onClick={() => scrollTo("about")}>About</span>
          <span onClick={() => scrollTo("services")}>Services</span>
          <span onClick={() => scrollTo("projects")}>Projects</span>
          <span onClick={() => scrollTo("contact")}>Contact</span>

          <button
            onClick={toggleDark}
            className="px-5 py-2 border border-violet-600 rounded-lg text-violet-600 dark:text-violet-400"
          >
            {dark ? "Disable Dark Mode" : "Enable Dark Mode"}
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

