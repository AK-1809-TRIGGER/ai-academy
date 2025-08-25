import React, { useState } from "react";

export default function CourseSuggestionCard({
  title,
  type,
  description,
  image,
  collaborators,
  tags = [],
}) {
  const [showAllTags, setShowAllTags] = useState(false);
  const displayedTags = showAllTags ? tags : tags.slice(0, 3);
  const primaryCollaborators = collaborators.slice(0, 2);
  const otherCollaborators = collaborators.slice(2);

  return (
    <div className="group relative bg-white rounded-lg border border-gray-200 transition-all duration-300 cursor-pointer overflow-visible w-64 min-h-[22rem] flex-shrink-0 hover:scale-105 hover:min-h-[24rem] hover:w-72">
      {/* Image */}
      <div>
        <img
          src={image}
          alt={title}
          className="w-full object-cover h-[160px] group-hover:h-[180px] p-4 transition-all duration-300 rounded-t-lg"
        />
      </div>

      {/* Content */}
      <div className="px-4 flex flex-col justify-between">
        <p className="text-sm text-gray-500 mb-1">{type}</p>

        <h3
          className="text-base font-semibold leading-tight line-clamp-2 mb-1"
          style={{ minHeight: "3em" }}
        >
          {title}
        </h3>

        {/* Description & Tags */}
        <div className="max-h-0 overflow-hidden opacity-0 group-hover:max-h-[200px] group-hover:opacity-100 transition-all duration-300">
          <p className="text-gray-700 text-sm mb-2">{description}</p>

          <div className="flex flex-wrap gap-2 mb-2">
            {displayedTags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs bg-gray-200 rounded-full text-gray-700"
              >
                {tag}
              </span>
            ))}
          </div>

          {tags.length > 3 && (
            <button
              className="text-xs text-blue-600 hover:underline focus:outline-none"
              onClick={(e) => {
                e.stopPropagation();
                setShowAllTags(!showAllTags);
              }}
            >
              {showAllTags ? "Show Less" : "Show More"}
            </button>
          )}
        </div>

        {/* Collaborators */}
        <div className="mt-3">
          <div className="flex items-center gap-2 group-hover:hidden">
            <div className="flex -space-x-2">
              {primaryCollaborators.map((c, index) => (
                <img
                  key={index}
                  src={c.logo}
                  alt={c.name}
                  className="h-6 w-6 rounded-full border border-gray-300 bg-white"
                />
              ))}
              {otherCollaborators.length > 0 && (
                <div className="h-6 w-6 rounded-full border border-gray-300 bg-gray-100 flex items-center justify-center text-xs text-gray-600 font-medium">
                  +{otherCollaborators.length}
                </div>
              )}
            </div>
            <div className="flex-1 text-sm text-gray-600 truncate">
              {primaryCollaborators.map((c) => c.name).join(", ")}
            </div>
          </div>

          <div className="hidden group-hover:flex flex-col gap-1">
            {collaborators.map((c, index) => (
              <div key={index} className="flex items-center gap-2">
                <img
                  src={c.logo}
                  alt={c.name}
                  className="h-5 w-5 rounded-full border border-gray-300 bg-white"
                />
                <span className="text-sm text-gray-600">{c.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between items-center mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-3">
          <button className="text-sm text-blue-600 font-semibold hover:underline">
            Enroll Now
          </button>
          <button className="text-sm flex items-center gap-1 border border-gray-300 px-3 py-1 rounded-sm hover:bg-gray-100">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
