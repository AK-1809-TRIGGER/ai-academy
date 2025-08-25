import React, { useState } from "react";
import WhatYouWillLearn from "./WhatYouWillLearn";
import FAQ from "./FAQ";
import Instructor from "./Instructor";
import Skills from "./Skills";
import WhyEnroll from "./WhyEnroll";
import Footer from "../common/Footer";
import CourseSyllabus from "./CourseSyllabus";
import LearnerReviews from "./LearnerReviews";
import CoursePreview from "./CoursePreview";

// Hero Section
const Hero = ({ course }) => (
  <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {course.title}
          </h1>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            {course.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Main Component
const SpecializationDetail = ({ course }) => {
  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Course not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Hero course={course} />
      <CoursePreview course={course} />
      <WhyEnroll course={course} />
      <Instructor course={course} />

      <div className="mt-5 ">
        <h2 className="text-4xl font-bold mb-4 text-center">Course Syllabus</h2>
        <CourseSyllabus syllabus={course.syllabus} />
      </div>

      <Skills skills={course.skills} />
      <WhatYouWillLearn
        items={course.whatYouWillLearn}
        type="specialization"
        heading="What You'll Learn in this Course"
      />

      {/* <WhatYouWillLearn items={course.whatYouWillLearn} />{" "} */}

      <LearnerReviews />
      <FAQ faqs={course.faqs} />

      <div className="bg-gradient-to-r from-blue-300 to-indigo-300 text-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Join thousands of learners who have advanced their careers with this
            comprehensive specialization. Start your journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SpecializationDetail;
