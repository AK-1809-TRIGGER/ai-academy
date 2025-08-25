import React from "react";

const Skills = ({ skills = [] }) => {
  if (!skills.length) return null;

  return (
    <div className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Skills You'll Gain
        </h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-6 py-3 bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 rounded-full font-semibold hover:from-blue-200 hover:to-blue-300 transition-all duration-300 border border-blue-300 shadow-sm hover:shadow-md cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
