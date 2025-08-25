import React, { useState } from "react";

export default function CourseSyllabus({ syllabus }) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!syllabus || !syllabus.courses || syllabus.courses.length === 0) {
    return <p className="text-center text-gray-500">No syllabus available.</p>;
  }

  const activeCourse = syllabus.courses[activeIndex];

  return (
    <div className="flex justify-center p-8">
      <div className="flex max-w-[1000px] w-full rounded-xl overflow-hidden shadow-md border border-gray-200 items-stretch">
        {/* Left: Course List */}
        <div className="w-2/5 border-r border-gray-300 bg-gray-100">
          {syllabus.courses.map((course, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`cursor-pointer border-b border-gray-200 text-sm flex items-center px-4 py-6 transition-all duration-200 ${
                activeIndex === index
                  ? "bg-red-100 font-semibold"
                  : "hover:bg-gray-200 font-normal"
              }`}
            >
              {course.title}
            </div>
          ))}
        </div>

        {/* Right: Modules and Topics */}
        <div
          className="w-3/5 bg-red-50 p-6 overflow-y-auto max-h-[600px]"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <style jsx="true">{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {activeCourse.modules.map((module, i) => (
            <div key={i} className="mb-6">
              <h5 className="font-medium text-base text-gray-800 mb-2">
                {module.title}
              </h5>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 pl-5">
                {module.topics.map((topic, j) => (
                  <li key={j} className="marker:text-gray-500">
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
