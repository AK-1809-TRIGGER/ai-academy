import React, { useRef, useState, useEffect } from "react";
import CourseSuggestionCard from "./CourseSuggestionCard";
import { coursesYouMightLike } from "../lib/constsnt";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function CourseSuggestionList() {
  const containerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  const checkArrows = () => {
    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft + clientWidth < scrollWidth);
  };

  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener("scroll", checkArrows);
    checkArrows();
    return () => container.removeEventListener("scroll", checkArrows);
  }, []);

  return (
    <div className="relative  mb-8">
      <h2 className="font-semibold text-xl mb-4 pl-2">
        Courses You Might Like
      </h2>

      {/* Left Arrow */}
      {showLeftArrow && (
        <button
          onClick={scrollLeft}
          className="absolute  left-[-16px] top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-30 hover:bg-gray-200"
        >
          <FaChevronLeft size={20} />
        </button>
      )}

      {/* Cards Row */}
      <div
        ref={containerRef}
        className="flex overflow-x-auto space-x-4 scrollbar-hide scroll-smooth px-2 py-5"
      >
        {coursesYouMightLike.map((course) => (
          <div
            key={course.id}
            className="transition-all duration-300 flex-shrink-0 mb-2"
          >
            <CourseSuggestionCard
              title={course.title}
              type={course.type}
              description={course.description}
              image={course.image}
              collaborators={course.collaborators}
              tags={course.tags}
            />
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      {showRightArrow && (
        <button
          onClick={scrollRight}
          className="absolute right-[-16px] top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-30 hover:bg-gray-200"
        >
          <FaChevronRight size={20} />
        </button>
      )}
    </div>
  );
}
