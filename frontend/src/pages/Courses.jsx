import { useState, useEffect } from "react";
import CourseFilters from "../components/CourseFilters";
import CoursesGrid from "../components/CoursesGrid";
import MostPopularAndTopRated from "../components/MostPopularAndTopRated";
import Footer from "../components/common/Footer";

const Courses = () => {
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [selectedLevel, setSelectedLevel] = useState([]);
  const [selectedCollaborators, setSelectedCollaborators] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen relative">
      {/* 🚀 Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-10">
              All Courses
            </h1>
            <p className="text-lg font-semibold text-gray-600 mb-6">
              Grow your AI career with foundational specializations and <br />
              <span>
                skill‑specific short courses taught by leaders in the field.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* 📚 Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* 🧩 Sidebar on the LEFT (desktop) */}
        {!isMobile && (
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-24 lg:max-h-[calc(100vh-100px)] lg:overflow-y-auto">
              <CourseFilters
                onTypeChange={setSelectedTypes}
                onTopicChange={setSelectedTopics}
                onLevelChange={setSelectedLevel}
                onCollaboratorChange={setSelectedCollaborators}
                onSearchChange={setSearchQuery}
              />
            </div>
          </aside>
        )}

        <main className="lg:col-span-8 space-y-6">
          <MostPopularAndTopRated />

          {/* 🔍 Mobile Search + Filter/Sort Row */}
          {isMobile && (
            <div className="max-w-7xl mx-auto px-2 mt-4 space-y-4">
              <input
                type="text"
                placeholder="Search courses..."
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full border border-gray-300 px-3 py-2 rounded-md text-sm"
              />

              <div className="flex justify-between items-center gap-4">
                <button
                  onClick={() => setShowMobileFilters(true)}
                  className="px-4 py-2 bg-blue-600 text-white text-sm rounded-md w-1/2"
                >
                  Filter
                </button>
                <select className="w-1/2 border border-gray-300 px-2 py-2 rounded-md text-sm">
                  <option value="">Sort By</option>
                  <option value="popular">Most Popular</option>
                  <option value="top-rated">Top Rated</option>
                </select>
              </div>
            </div>
          )}

          <CoursesGrid
            selectedTypes={selectedTypes}
            selectedTopics={selectedTopics}
            selectedLevel={selectedLevel}
            selectedCollaborators={selectedCollaborators}
            searchQuery={searchQuery}
          />
        </main>
      </div>

      {/* 📱 Mobile Filter Modal (with blur background) */}
      {showMobileFilters && (
        <div className="fixed inset-0 z-50 flex justify-center items-start bg-white/10  overflow-y-auto">
          <CourseFilters
            onTypeChange={setSelectedTypes}
            onTopicChange={setSelectedTopics}
            onLevelChange={setSelectedLevel}
            onCollaboratorChange={setSelectedCollaborators}
            onSearchChange={setSearchQuery}
            isMobile={true}
            onCloseMobile={() => setShowMobileFilters(false)}
            onApplyMobileFilters={() => setShowMobileFilters(false)}
          />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Courses;
