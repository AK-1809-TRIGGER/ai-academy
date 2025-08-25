import Hero from "../components/Home/Hero";
import AiCoursesAndSpecializations from "../components/Home/AiCoursesAndSpecializations";
import InCollabWith from "../components/Home/InCollabWith";
import FeaturedCourse from "../components/Home/FeaturedCourse";
import Footer from "../components/common/Footer";
import StayUpdated from "../components/Home/StayUpdated";

const Home = () => {
  return (
    <>
      <div className="overflow-x-hidden">
        {" "}
        {/* ✅ Prevent horizontal overflow */}
        <Hero />
        <AiCoursesAndSpecializations />
        <InCollabWith />
        <FeaturedCourse />
        <StayUpdated />
        <Footer />
      </div>
    </>
  );
};

export default Home;
