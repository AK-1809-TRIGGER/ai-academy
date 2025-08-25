import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import CourseOutline from "../courseDetails/CourseOutline";
import WhatYouWillLearn from "../courseDetails/WhatYouWillLearn";
import Footer from "../common/Footer";
import Instructor from "./Instructor";
import { FaArrowRightLong, FaSquareXTwitter } from "react-icons/fa6";

function getYouTubeEmbedUrl(url) {
  const match = url?.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/|v\/))([\w-]{11})/
  );
  return match && match[1]
    ? `https://www.youtube.com/embed/${match[1]}?autoplay=1`
    : "";
}

const ShortCourseDetail = ({ course }) => {
  const [showVideo, setShowVideo] = useState(false);
  const courseOutlineData = course?.courseOutline || [];

  const introVideo = courseOutlineData[0] || {};
  const videoSrc = introVideo.videoFile || introVideo.videoUrl || null;

  const aboutParagraphs = course.aboutCourse?.split("\n\n") || [];
  const summaryIndex = aboutParagraphs.findIndex((p) =>
    p.toLowerCase().startsWith("by the end of")
  );
  const introParagraphs =
    summaryIndex !== -1
      ? aboutParagraphs.slice(0, summaryIndex)
      : aboutParagraphs;

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Course Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            The course you’re looking for doesn’t exist or data is missing.
          </p>
          <Link
            to="/courses"
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Back to All Courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* ✅ Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-600 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          {/* Left */}
          <div className="flex-1">
            <nav className="text-sm text-white mb-4">
              <Link to="/courses" className="hover:underline">
                All Courses
              </Link>
              <span className="mx-2">{">"}</span>
              <span className="hover:underline">Short Courses</span>
              <span className="mx-2">{">"}</span>
              <span className="font-medium">{course.title || "Untitled"}</span>
            </nav>

            <div className="flex flex-wrap gap-3 mb-4 text-sm">
              {course.type && (
                <span className="border px-3 py-1 rounded">{course.type}</span>
              )}
              {course.level && (
                <span className="border px-3 py-1 rounded">{course.level}</span>
              )}
              <span className="border px-3 py-1 rounded">1 h</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {course.title || "Untitled Course"}
            </h1>

            <p className="text-md font-light mb-6">
              Instructor:{" "}
              <span className="font-medium">
                {course.Instructor && course.Instructor.length > 0
                  ? course.Instructor.map((i) => i.name).join(", ")
                  : "Not specified"}
              </span>
            </p>

            <Link to={`/courses/${course.id}/content`}>
              <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-white-600 transition flex items-center gap-2">
                Enroll Now
                <FaArrowRightLong />
              </button>
            </Link>
          </div>

          {/* ✅ Video Preview */}
          <div className="flex-1 flex justify-center mt-8 md:mt-0">
            <div className="w-full md:w-[500px] aspect-video rounded-xl overflow-hidden shadow-xl relative group">
              {showVideo && videoSrc ? (
                introVideo.videoUrl?.includes("youtu") ? (
                  <iframe
                    src={getYouTubeEmbedUrl(introVideo.videoUrl)}
                    title={`Intro video for ${course.title}`}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <video
                    src={introVideo.videoFile}
                    controls
                    autoPlay
                    className="w-full h-full"
                  />
                )
              ) : (
                <>
                  <img
                    src={course.image}
                    alt="Course Thumbnail"
                    className="w-full h-full object-cover"
                  />
                  {videoSrc && (
                    <button
                      onClick={() => setShowVideo(true)}
                      className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/60 transition"
                    >
                      <FaPlay className="text-white text-4xl" />
                    </button>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left */}
        <div className="lg:col-span-8">
          <WhatYouWillLearn items={course.whatYouWillLearn} />{" "}
          <div className="bg-white p-6 rounded-xl shadow mb-6 space-y-4">
            <h2 className="text-2xl font-semibold mb-4">About this course</h2>

            {/* Break course.aboutCourse into paragraphs */}
            {aboutParagraphs.slice(0, summaryIndex).map((para, idx) => (
              <p key={idx} className="text-gray-700 whitespace-pre-line">
                {para}
              </p>
            ))}

            {/* ✅ What you'll learn */}
            {course.whatYouWillLearn?.length > 0 && (
              <div className="mt-6 space-y-4">
                <div>
                  <h3 className="text-md font-semibold text-gray-800 mb-2">
                    In detail, you’ll:
                  </h3>
                  <ul className="list-disc ml-6 space-y-2 text-gray-700 leading-relaxed">
                    {course.whatYouWillLearn.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* ✅ Summary paragraph (pulled from aboutCourse dynamically) */}
                {summaryIndex !== -1 && (
                  <p className="text-gray-700 whitespace-pre-line">
                    {aboutParagraphs[summaryIndex]}
                  </p>
                )}
              </div>
            )}
          </div>
          <Instructor course={course} />
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-4">
          <div className="bg-white p-6 rounded-xl shadow sticky top-24">
            <h3 className="text-lg font-semibold mb-4">
              {course.title || "Untitled"}
            </h3>

            <ul className="text-gray-700 mb-4 space-y-3 text-sm">
              <li>⚡ {course.level || "Not specified"}</li>
              <li>⏰ 1 h</li>
              <li>🎥 {courseOutlineData.length} Lessons</li>
              <li>👨‍🏫 {course.Instructor?.[0]?.name}</li>

              {/* 👇 Collaborator logo and name */}
              {course.collaborators?.length > 0 && (
                <li className="flex items-center space-x-2">
                  <img
                    src={course.collaborators[0].logo}
                    alt={course.collaborators[0].name}
                    className="w-6 h-6 object-contain"
                  />
                  <span>{course.collaborators[0].name}</span>
                </li>
              )}
            </ul>

            <Link
              to={`/courses/${course.id}/content`}
              className="block w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded-lg text-center"
            >
              Enroll for Free
            </Link>
          </div>
        </aside>
      </div>
      <Footer />
    </div>
  );
};

export default ShortCourseDetail;
