import React, { useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import { collaborators, topics } from "../components/lib/constsnt";

const CourseFilters = ({
  onTypeChange,
  onLevelChange,
  onTopicChange,
  onCollaboratorChange,
  onSearchChange,
  isMobile = false,
  onCloseMobile,
  onApplyMobileFilters,
}) => {
  const [showAllTopics, setShowAllTopics] = useState(false);
  const [showAllCollaborators, setShowAllCollaborators] = useState(false);

  const handleCheckboxChange = (e, callback) => {
    const { value, checked } = e.target;
    callback((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  const handleClearAll = () => {
    document.querySelectorAll("input[type=checkbox]").forEach((el) => {
      el.checked = false;
    });
    onTypeChange([]);
    onLevelChange([]);
    onTopicChange([]);
    onCollaboratorChange([]);
    onSearchChange("");
  };

  const modalClasses = isMobile
    ? "fixed inset-0 z-50 flex justify-center items-start pt-15 backdrop-blur-xs bg-white/15"
    : "";
  const contentClasses = isMobile
    ? "bg-white w-[90%] max-w-md max-h-[85vh] overflow-y-auto rounded-lg shadow-lg p-4 relative border border-gray-200"
    : "bg-white p-4 rounded-md shadow-md";

  return (
    <div className={modalClasses}>
      <div className={contentClasses}>
        {isMobile && (
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Filters</h2>
            <button onClick={onCloseMobile} className="text-gray-600">
              <FaTimes size={20} />
            </button>
          </div>
        )}

        {!isMobile && (
          <div className="mb-4 relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
              <FaSearch size={14} />
            </span>
            <input
              type="text"
              placeholder="Search courses..."
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
        )}

        <div className="space-y-5 pb-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-700">Filters</h2>
            <button
              onClick={handleClearAll}
              className="text-gray-600 text-sm font-medium"
            >
              Clear All
            </button>
          </div>

          {/* Course Type */}
          <div>
            <h3 className="text-sm font-medium text-gray-600 mb-2">
              Course Type
            </h3>
            {["Short Course", "Course", "Specialization"].map((type) => (
              <label key={type} className="flex items-center space-x-2 text-sm">
                <input
                  type="checkbox"
                  value={type}
                  onChange={(e) => handleCheckboxChange(e, onTypeChange)}
                  className="accent-blue-600"
                />
                <span>{type}</span>
              </label>
            ))}
          </div>

          {/* Level */}
          <div>
            <h3 className="text-sm font-medium text-gray-600 mb-2">Level</h3>
            {["Beginner", "Intermediate"].map((level) => (
              <label
                key={level}
                className="flex items-center space-x-2 text-sm"
              >
                <input
                  type="checkbox"
                  value={level}
                  onChange={(e) => handleCheckboxChange(e, onLevelChange)}
                  className="accent-blue-600"
                />
                <span>{level}</span>
              </label>
            ))}
          </div>

          {/* Topics */}
          <div>
            <h3 className="text-sm font-medium text-gray-600 mb-2">
              Popular Topics
            </h3>
            {(showAllTopics ? topics : topics.slice(0, 5)).map((topic) => (
              <label
                key={topic}
                className="flex items-center space-x-2 text-sm"
              >
                <input
                  type="checkbox"
                  value={topic}
                  onChange={(e) => handleCheckboxChange(e, onTopicChange)}
                  className="accent-blue-600"
                />
                <span>{topic}</span>
              </label>
            ))}
            {topics.length > 5 && (
              <button
                className="text-sm text-blue-600 mt-1"
                onClick={() => setShowAllTopics(!showAllTopics)}
              >
                {showAllTopics ? "Show Less" : "Show More"}
              </button>
            )}
          </div>

          {/* Collaborators */}
          <div>
            <h3 className="text-sm font-medium text-gray-600 mb-2">
              Collaborators
            </h3>
            {(showAllCollaborators
              ? collaborators
              : collaborators.slice(0, 5)
            ).map((collab) => (
              <label
                key={collab}
                className="flex items-center space-x-2 text-sm"
              >
                <input
                  type="checkbox"
                  value={collab}
                  onChange={(e) =>
                    handleCheckboxChange(e, onCollaboratorChange)
                  }
                  className="accent-blue-600"
                />
                <span>{collab}</span>
              </label>
            ))}
            {collaborators.length > 5 && (
              <button
                className="text-sm text-blue-600 mt-1"
                onClick={() => setShowAllCollaborators(!showAllCollaborators)}
              >
                {showAllCollaborators ? "Show Less" : "Show More"}
              </button>
            )}
          </div>
        </div>

        {/* Show Results (Mobile Only) */}
        {isMobile && (
          <div className="mt-4">
            <button
              onClick={onApplyMobileFilters}
              className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold"
            >
              Show Results
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseFilters;
