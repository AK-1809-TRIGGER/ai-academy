import React, { useState } from "react";
import MpTrCard from "../components/MpTrCard";
import { courseData } from "../components/lib/constsnt";

const MostPopularAndTopRated = () => {
  const [activeTab, setActiveTab] = useState("popular");

  const popularCourses = courseData.slice(0, 3);
  const topRatedCourses = courseData.slice(3, 6);

  return (
    <div className="mb-10 mt-6">
      {/* Tabs */}
      <div className="flex border-b px-2 mb-3 space-x-4">
        <button
          onClick={() => setActiveTab("popular")}
          className={`pb-2 text-sm font-medium ${
            activeTab === "popular"
              ? "border-b-2 border-[#3D74B6] text-[#3D74B6]"
              : "text-gray-600 hover:text-[#3D74B6]"
          }`}
        >
          Most Popular
        </button>
        <button
          onClick={() => setActiveTab("topRated")}
          className={`pb-2 text-sm font-medium ${
            activeTab === "topRated"
              ? "border-b-2 border-[#3D74B6] text-[#3D74B6]"
              : "text-gray-600 hover:text-[#3D74B6]"
          }`}
        >
          Top Rated
        </button>
      </div>

      {/* Cards */}
      <div className="px-2">
        {activeTab === "popular" && <MpTrCard courses={popularCourses} />}
        {activeTab === "topRated" && <MpTrCard courses={topRatedCourses} />}
      </div>
    </div>
  );
};

export default MostPopularAndTopRated;
