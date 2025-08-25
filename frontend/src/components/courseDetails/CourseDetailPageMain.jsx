import React from "react";
import { useParams } from "react-router-dom";
import { courseData } from "../lib/constsnt";
import SpecializationDetail from "./SpecializationDetail";
import ShortCourseDetail from "./ShortCourseDetail";
import CourseDetail from "./CourseDetail";

const CourseDetailPageMain = () => {
  const { id } = useParams();
  const course = courseData.find((c) => c.id === parseInt(id));

  if (!course) return <div>Course not found.</div>;

  // Render different UIs based on type
  switch (course.type) {
    case "Specialization":
      return <SpecializationDetail course={course} />;
    case "Short Course":
      return <ShortCourseDetail course={course} />;
    case "Course":
      return <CourseDetail course={course} />;
    default:
      return <div>Unknown course type.</div>;
  }
};

export default CourseDetailPageMain;
