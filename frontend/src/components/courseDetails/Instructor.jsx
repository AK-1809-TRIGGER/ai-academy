import React from "react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { GoClock } from "react-icons/go";
import { IoBookOutline } from "react-icons/io5";
import { PiCellSignalFullThin } from "react-icons/pi";
import { RiDoubleQuotesL } from "react-icons/ri";

const Instructor = ({ course }) => {
  // SHARED UI FOR SPECIALIZATION & COURSE
  if (
    (course.type === "Specialization" || course.type === "Course") &&
    course.instructor
  ) {
    return (
      <div className="bg-gradient-to-br from-gray-100 to-gray-300 py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Instructor</h2>

          <p className="text-xl text-gray-700 mb-4">{course.instructor}</p>

          <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden shadow-md">
            {course.instructorImage ? (
              <img
                src={course.instructorImage}
                alt={course.instructor}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-2xl font-bold">
                {course.instructor.charAt(0)}
              </div>
            )}
          </div>

          <div className="flex justify-center gap-4 mb-6">
            {course.instructorLinkedIn && (
              <a
                href={course.instructorLinkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-900 text-2xl"
              >
                <FaLinkedin />
              </a>
            )}
            {course.instructorTwitter && (
              <a
                href={course.instructorTwitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-700 text-2xl"
              >
                <FaTwitter />
              </a>
            )}
          </div>

          <p className="text-gray-700 leading-relaxed text-lg">
            {course.instructorBio || "Bio Not Available"}
          </p>
        </div>
        <div className="mt-20 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 gap-24 bg-[#76aab9] bg-opacity-70 rounded-xl px-6 py-8 max-w-4xl mx-auto">
          <div className="flex items-center space-x-2 text-white">
            <IoBookOutline className="text-xl" />
            <span>5 Modules</span>
          </div>
          <div className="flex items-center space-x-2 text-white">
            <GoClock className="text-xl" />
            <span>Self-paced</span>
          </div>
          <div className="flex items-center space-x-2 text-white">
            <PiCellSignalFullThin className="text-xl" />
            <span>Intermediate</span>
          </div>
        </div>
      </div>
    );
  }

  // SHORT COURSE INSTRUCTOR UI
  if (course.type === "Short Course" && course.Instructor?.length > 0) {
    return (
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Instructor</h2>
        {course.Instructor.map((inst, idx) => (
          <div
            key={idx}
            className="flex items-center w-full justify-between bg-gray-50 rounded-lg p-4 shadow mb-4"
          >
            <div className="flex items-center space-x-4">
              <img
                src={inst.image}
                alt={inst.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {inst.name}
                </h3>
                <p className="text-sm text-gray-600">{inst.bio}</p>
              </div>
            </div>
            <div className="flex space-x-4">
              {inst.linkedIn && (
                <a
                  href={inst.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-900 text-xl"
                >
                  <FaLinkedin />
                </a>
              )}
              {inst.twitter && (
                <a
                  href={inst.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-gray-700 text-xl"
                >
                  <FaTwitter />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return null;
};

export default Instructor;
