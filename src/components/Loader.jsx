import React from "react";

function Loader({ fade }) {
  return (
    <div
      className={`
        fixed inset-0 flex justify-center items-center 
        bg-white dark:bg-gray-900 
        z-[9999] transition-opacity duration-700
        ${fade ? "opacity-0 pointer-events-none" : "opacity-100"}
      `}
    >
      <div className="relative">
        <div className="w-16 h-16 rounded-full border-4 border-violet-500 opacity-20"></div>
        <div className="absolute top-0 left-0 w-16 h-16 rounded-full border-4 border-violet-600 border-t-transparent animate-spin"></div>
      </div>
    </div>
  );
}

export default Loader;
