import { useState } from "react";
import LearningCard from "./LearningCard";

export default function LearningTabs({ inProgress, completed }) {
  const [activeTab, setActiveTab] = useState("inProgress");

  return (
    <div>
      {/* Tabs */}
      <div className="flex border-b border-gray-300 mb-4">
        {/* In Progress Tab */}
        <button
          onClick={() => setActiveTab("inProgress")}
          className={`relative flex items-center text-sm font-medium px-4 py-2 ${
            activeTab === "inProgress"
              ? "text-cyan-700 border-b-2 border-cyan-500"
              : "text-gray-600 hover:text-cyan-700"
          }`}
        >
          In Progress
          <span
            className={`ml-1 text-xs font-semibold px-1.5 py-0.5 rounded-full ${
              activeTab === "inProgress"
                ? "bg-cyan-100 text-cyan-700"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            {inProgress.length}
          </span>
        </button>

        {/* Completed Tab */}
        <button
          onClick={() => setActiveTab("completed")}
          className={`relative flex items-center text-sm font-medium px-4 py-2 ${
            activeTab === "completed"
              ? "text-cyan-700 border-b-2 border-cyan-500"
              : "text-gray-600 hover:text-cyan-700"
          }`}
        >
          Completed
          <span
            className={`ml-1 text-xs font-semibold px-1.5 py-0.5 rounded-full ${
              activeTab === "completed"
                ? "bg-cyan-100 text-cyan-700"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            {completed.length}
          </span>
        </button>
      </div>

      {/* Courses */}
      <div>
        {activeTab === "inProgress"
          ? inProgress.map((course, idx) => (
              <LearningCard key={idx} {...course} />
            ))
          : completed.map((course, idx) => (
              <LearningCard key={idx} {...course} />
            ))}
      </div>
    </div>
  );
}
