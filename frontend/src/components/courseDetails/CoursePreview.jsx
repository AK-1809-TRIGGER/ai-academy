import { useState } from "react";
import { FaPlay } from "react-icons/fa";

// Helper to check if URL is a YouTube link
const isYouTubeUrl = (url) => {
  return url?.includes("youtube.com") || url?.includes("youtu.be");
};

// Converts YouTube URL to embed format
const getYouTubeEmbedUrl = (url) => {
  const videoId = url.includes("youtu.be")
    ? url.split("youtu.be/")[1].split("?")[0]
    : new URL(url).searchParams.get("v");

  return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0`;
};

// JSX Section
const CoursePreview = ({ course }) => {
  const [showVideo, setShowVideo] = useState(false);
  const videoUrl = course.videoUrl;

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Course Preview
        </h2>

        <div className="w-full aspect-video rounded-xl overflow-hidden shadow-xl relative group">
          {showVideo && videoUrl ? (
            isYouTubeUrl(videoUrl) ? (
              <iframe
                src={getYouTubeEmbedUrl(videoUrl)}
                title={`Preview for ${course.title}`}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <video
                src={videoUrl}
                controls
                autoPlay
                className="w-full h-full object-cover"
              />
            )
          ) : (
            <>
              <img
                src={course.image}
                alt="Course Thumbnail"
                className="w-full h-full object-cover"
              />
              {videoUrl && (
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
    </section>
  );
};

export default CoursePreview;
