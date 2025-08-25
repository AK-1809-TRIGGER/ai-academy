import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import SignInForm from "./components/auth/SignInForm";
import SignUpForm from "./components/auth/SignUpForm";
import ScrollToTop from "./components/ScrollToTop";
import Join from "./pages/Join";
import ActivateAccount from "./components/auth/ActivateAccount";
import MyLearning from "./pages/MyLearning";
import CourseDetailPage from "./components/courseDetails/CourseDetailPageMain";
import About from "./pages/About";
import CoursePage from "./components/courseDetails/CoursePage";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/signin" element={<SignInForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/about" element={<About />} />
        <Route path="/join" element={<Join />} />
        <Route path="/my-learnings" element={<MyLearning />} />
        <Route path="/activate/:uid/:token" element={<ActivateAccount />} />
        <Route path="/courses/:id" element={<CourseDetailPage />} />
        <Route path="/courses/:id/content" element={<CoursePage />} />
        {/* ✅ Add this */}
      </Routes>
    </Router>
  );
};

export default App;
