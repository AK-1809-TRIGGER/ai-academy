import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { courseData } from "../lib/constsnt";
import { Menu } from "lucide-react";
import { LuClock3 } from "react-icons/lu";
import { FaPlay } from "react-icons/fa";

const CoursePage = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [currentLesson, setCurrentLesson] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const selectedCourse = courseData.find((c) => c.id === parseInt(id));
    setCourse(selectedCourse);
  }, [id]);

  useEffect(() => {
    if (showVideo && videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.warn("Autoplay failed:", err);
      });
    }
  }, [showVideo]);

  if (!course) {
    return (
      <div className="text-center text-red-600 p-6">
        Course data not available
      </div>
    );
  }

  const currentItem = course.courseOutline[currentLesson];

  const getYouTubeEmbedUrl = (url) => {
    if (!url) return null;
    const videoId = url.includes("v=")
      ? url.split("v=")[1]?.split("&")[0]
      : url.split("/").pop();
    return `https://www.youtube.com/embed/${videoId}?rel=0&autoplay=1`;
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`bg-gray-100 transition-all duration-300 flex flex-col ${
          sidebarOpen ? "w-85" : "w-16"
        } overflow-y-auto p-4`}
      >
        <div className="flex items-center justify-between mb-4">
          {sidebarOpen && (
            <h3 className="text-lg font-semibold">{course.title}</h3>
          )}
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="ml-2">
            <Menu size={22} />
          </button>
        </div>

        {sidebarOpen && (
          <div className="flex-1 space-y-2">
            {course.courseOutline.map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  setCurrentLesson(index);
                  setShowVideo(false);
                }}
                className={`cursor-pointer p-2 rounded ${
                  currentLesson === index ? "bg-blue-200" : "hover:bg-gray-200"
                }`}
              >
                <div className="flex gap-2 items-start">
                  <LuClock3 className="text-gray-700 mt-[6px] min-w-[18px]" />
                  <div>
                    <div className="font-medium">{item.title}</div>
                    <div className="text-sm text-gray-600 flex gap-1">
                      {item.hasCode ? "Video with code example" : "Video"}
                      <span className="text-xs">• {item.duration || "NA"}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-y-auto p-4">
        {/* Video or Thumbnail */}
        <div className="w-full h-[550px] rounded-xl overflow-hidden shadow-xl relative group">
          {!showVideo ? (
            <>
              <img
                src={course.image}
                alt="Course Thumbnail"
                className="w-full h-full object-cover"
              />
              {(currentItem.videoFile || currentItem.videoUrl) && (
                <button
                  onClick={() => setShowVideo(true)}
                  className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/60 transition"
                >
                  <FaPlay className="text-white text-5xl" />
                </button>
              )}
            </>
          ) : currentItem.videoFile ? (
            <video
              ref={videoRef}
              src={currentItem.videoFile}
              controls
              className="w-full h-full object-cover"
            />
          ) : (
            <iframe
              title="YouTube Video"
              src={getYouTubeEmbedUrl(currentItem.videoUrl)}
              allow="autoplay"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          )}
        </div>

        {/* Next Lesson Button */}
        {currentLesson < course.courseOutline.length - 1 && (
          <button
            onClick={() => {
              setCurrentLesson(currentLesson + 1);
              setShowVideo(false);
            }}
            className="mt-4 self-end bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded shadow"
          >
            Next Lesson
          </button>
        )}
      </div>
    </div>
  );
};

export default CoursePage;
