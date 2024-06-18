import React from "react";
import { FaGlobeAmericas } from "react-icons/fa";

const Change_Language = () => {
  const languages = [
    "English",
    "Spanish",
    "French",
    "German",
    "Chinese",
    "Japanese",
    "Korean",
    "Russian",
    "Italian",
    "Portuguese",
  ];

  return (
    <div className="flex flex-col items-start p-3 space-y-2 z-10 bg-white rounded-lg shadow-lg border border-gray-200 w-48 max-h-56 overflow-y-auto custom-scrollbar">
      <h1 className="text-base font-semibold mb-2 text-gray-800">
        Change Language
      </h1>
      {languages.map((language, index) => (
        <div
          key={index}
          className="hover:bg-green-100 cursor-pointer p-2 flex items-center justify-start space-x-3 rounded-md transition-colors duration-200 ease-in-out w-full"
        >
          <span className="p-1 rounded-full bg-green-500">
            <FaGlobeAmericas className="text-white" size={16} />
          </span>
          <h1 className="text-sm font-semibold text-gray-700">{language}</h1>
        </div>
      ))}
    </div>
  );
};

export default Change_Language;
