import React, { useEffect, useState } from "react";

const getYouTubeVideoId = (url) => {
  const regExp = /(?:youtube\.com.*(?:v=|\/embed\/)|youtu\.be\/)([^&?/]+)/;
  const match = url.match(regExp);
  return match ? match[1] : null;
};

const formatDuration = (isoDuration) => {
  const match = isoDuration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  const hours = parseInt(match[1] || 0);
  const minutes = parseInt(match[2] || 0);
  const seconds = parseInt(match[3] || 0);
  const totalSeconds = hours * 3600 + minutes * 60 + seconds;
  const finalMinutes = Math.floor(totalSeconds / 60);
  const finalSeconds = totalSeconds % 60;
  return `${finalMinutes}m ${finalSeconds}s`;
};

const CourseOutline = ({ courseOutline }) => {
  const [durations, setDurations] = useState([]);

  useEffect(() => {
    if (!Array.isArray(courseOutline)) return;

    const loadDurations = async () => {
      const promises = courseOutline.map(async (lesson) => {
        return new Promise(async (resolve) => {
          let src = null;

          if (lesson?.videoFile) {
            src = lesson.videoFile;
          } else if (lesson?.videoUrl && lesson.videoUrl.endsWith(".mp4")) {
            const isAbsolute =
              lesson.videoUrl.startsWith("http") ||
              lesson.videoUrl.startsWith("/");
            src = isAbsolute ? lesson.videoUrl : `/${lesson.videoUrl}`;
          }

          if (src) {
            const video = document.createElement("video");
            video.preload = "metadata";
            video.src = src;

            video.onloadedmetadata = () => {
              const duration = Math.floor(video.duration);
              const minutes = Math.floor(duration / 60);
              const seconds = duration % 60;
              resolve(`${minutes}m ${seconds}s`);
            };

            video.onerror = () => {
              resolve("N/A");
            };
          } else if (lesson?.videoUrl && getYouTubeVideoId(lesson.videoUrl)) {
            const videoId = getYouTubeVideoId(lesson.videoUrl);
            const apiKey = "YOUR_YOUTUBE_API_KEY"; // 🔁 Replace with your API key
            try {
              const response = await fetch(
                `https://www.googleapis.com/youtube/v3/videos?part=contentDetails&id=${videoId}&key=${apiKey}`
              );
              const data = await response.json();
              const isoDuration =
                data.items?.[0]?.contentDetails?.duration || null;
              if (isoDuration) {
                resolve(formatDuration(isoDuration));
              } else {
                resolve("N/A");
              }
            } catch (err) {
              resolve("N/A");
            }
          } else {
            resolve(lesson?.duration || "N/A");
          }
        });
      });

      const results = await Promise.all(promises);
      setDurations(results);
    };

    loadDurations();
  }, [courseOutline]);

  if (!Array.isArray(courseOutline) || courseOutline.length === 0) return null;

  return (
    <div className="bg-white p-6 rounded-xl shadow mb-6">
      <h2 className="text-xl font-semibold mb-4">Course Outline</h2>
      <ul className="divide-y divide-gray-200">
        {courseOutline.map((lesson, idx) => (
          <li key={idx} className="py-3">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium text-gray-800">
                  {lesson?.title || "Untitled"}
                </p>
                <p className="text-sm text-gray-600">
                  {lesson?.type || "Unknown"} • {durations[idx] || "N/A"}
                  {lesson?.hasCode && (
                    <span className="ml-2 text-xs bg-gray-100 px-2 py-0.5 rounded">
                      Code Example
                    </span>
                  )}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseOutline;
