import ProfileCard from "../components/mylearning/ProfileCard";
import CourseSuggestionList from "../components/mylearning/CourseSuggestionList";
import LearningTabs from "../components/mylearning/LearningTabs";

export default function MyLearning() {
  const profile = {
    name: "",
    email: "",
    enrolled: 0,
    completed: 0,
  };

  const inProgress = [];

  const completed = [];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-[#f4f7fb] min-h-screen">
      <div className="md:col-span-1">
        <ProfileCard {...profile} />
      </div>
      <div className="md:col-span-2 space-y-6">
        <CourseSuggestionList />
        <LearningTabs inProgress={inProgress} completed={completed} />
      </div>
    </div>
  );
}
