import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const WhatYouWillLearn = ({
  items = [],
  description = "",
  showAll = false,
  heading = "What you'll learn",
  type = "short", // "short", "specialization", or "course"
}) => {
  if (!items.length && type !== "course") {
    return (
      <p className="text-gray-600 mb-6">
        No learning outcomes available for this course.
      </p>
    );
  }

  // 🔹 UI for "specialization"
  if (type === "specialization") {
    return (
      <div className="bg-[#dbf0f9] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            {heading}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-blue-50 rounded-xl border border-blue-100 hover:bg-blue-100 transition-colors duration-300"
              >
                <div className="w-3 h-3 bg-blue-600 rounded-full mt-1 flex-shrink-0" />
                <p className="text-gray-800 leading-relaxed font-medium">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // 🔹 UI for "course"
  if (type === "course") {
    return (
      <section className="bg-[#0074f0] text-white py-20 px-4 text-center">
        <div className="max-w-6xl mx-auto">
          <div className="w-12 mb-5 h-2 mx-auto bg-red-500 border-t-1"></div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Learn through real-world projects
          </h2>
          {description && (
            <p className="max-w-3xl mx-auto mb-12 text-lg">{description}</p>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
            {items.map((item, idx) => (
              <div key={idx} className="flex items-start space-x-3">
                <FaCheckCircle className="text-2xl mt-2 text-blue-900 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg">{item.title}</h4>
                  <p className="text-sm mt-1">{item.description || "N/A"}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition">
              Enroll Now!
            </button>
          </div>
        </div>
      </section>
    );
  }

  // 🔹 Default: UI for "short"
  return (
    <div className="bg-white p-6 rounded-xl shadow mb-6">
      <h2 className="text-2xl font-semibold mb-4">{heading}</h2>
      <ul className="list-disc ml-5 text-gray-700 space-y-3">
        {(showAll ? items : items.slice(0, 3)).map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default WhatYouWillLearn;
