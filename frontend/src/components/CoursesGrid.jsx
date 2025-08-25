import React, { useEffect, useState } from "react";
import CourseCard from "../components/Home/CourseCard";
import { courseData } from "../components/lib/constsnt";

const CoursesGrid = ({
  selectedTypes = [],
  selectedTopics = [],
  selectedLevel = [],
  selectedCollaborators = [],
  searchQuery = "",
}) => {
  const [sortOption, setSortOption] = useState("newest");
  const [filteredCourses, setFilteredCourses] = useState([]);

  useEffect(() => {
    let filtered = [...courseData];

    // Filter by Type
    if (selectedTypes.length > 0) {
      filtered = filtered.filter((course) =>
        selectedTypes.includes(course?.type)
      );
    }

    // Filter by Topics
    if (selectedTopics.length > 0) {
      filtered = filtered.filter((course) => {
        const courseTopics = Array.isArray(course.topics)
          ? course.topics
          : [course.topics];
        return courseTopics.some((topic) => selectedTopics.includes(topic));
      });
    }

    // Filter by Level
    if (selectedLevel.length > 0) {
      filtered = filtered.filter((course) =>
        selectedLevel.includes(course?.level)
      );
    }

    // Filter by Collaborator
    if (selectedCollaborators.length > 0) {
      filtered = filtered.filter((course) =>
        course.collaborators.some((collab) =>
          selectedCollaborators.includes(collab.name)
        )
      );
    }

    // Search Filter
    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      filtered = filtered.filter((course) =>
        course.title?.toLowerCase().includes(q)
      );
    }

    // Sorting
    filtered.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sortOption === "newest" ? dateB - dateA : dateA - dateB;
    });

    setFilteredCourses(filtered);
  }, [
    selectedTypes,
    selectedTopics,
    selectedLevel,
    selectedCollaborators,
    searchQuery,
    sortOption,
  ]);

  return (
    <div className="min-h-[50vh] px-2">
      {/* Header (visible only on large screens and above) */}
      <div className="hidden lg:flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Courses</h2>
        <div className="flex items-center space-x-2">
          <label htmlFor="sort" className="text-sm text-gray-600">
            Sort by:
          </label>
          <select
            id="sort"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring focus:border-blue-500"
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <CourseCard key={course.id} {...course} variant="main" />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">
            No courses found.
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursesGrid;
