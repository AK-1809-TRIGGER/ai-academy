import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import { courseData } from "../lib/constsnt";

const FeaturedCourse = () => {
  const recentCourses = courseData.slice(-9);

  return (
    <section className="pt-4 pb-12 bg-white">
      <div className="relative max-w-6xl mx-auto px-2 sm:px-4">
        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          loop={true}
          spaceBetween={0}
          navigation={{
            nextEl: ".swiper-next-btn",
            prevEl: ".swiper-prev-btn",
          }}
          breakpoints={{
            320: { spaceBetween: 10 },
            768: { spaceBetween: 10 },
            1024: { spaceBetween: 15 },
          }}
        >
          {recentCourses.map((course) => (
            <SwiperSlide key={course.id}>
              <div
                className="flex flex-col md:flex-row items-center justify-between 
                bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl shadow-lg overflow-hidden
                w-full max-w-full sm:max-w-[95%] md:max-w-[700px] lg:max-w-[900px] mx-auto
                transition-all duration-500 
                h-auto sm:h-[360px] md:h-[400px] lg:h-[450px]"
              >
                {/* Left Text */}
                <div className="flex-1 text-left text-white px-4 py-2 sm:px-6 sm:py-10">
                  <span className="inline-block bg-white text-black font-semibold text-xs sm:text-sm px-3 py-1 rounded uppercase mb-3 sm:mb-4">
                    NEW {course.type}!
                  </span>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                    {course.title}
                  </h3>
                  <p className="mb-5 sm:mb-6 text-base sm:text-lg leading-relaxed">
                    {course.description ||
                      `Gain practical skills to apply ${course.title} in real-world projects.`}
                  </p>
                  <Link to={`/courses/${course.id}`}>
                    <button className="bg-white text-black font-semibold px-4 py-2 sm:px-5 sm:py-3 rounded-lg shadow hover:bg-gray-100 transition">
                      Enroll Now →
                    </button>
                  </Link>
                </div>

                {/* Right Design */}
                <div className="hidden md:block  flex-1 bg-gradient-to-l from-white/20 to-transparent h-full"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div
          className="swiper-prev-btn hidden sm:flex absolute top-1/2 -translate-y-1/2 -left-6 md:left-2
          bg-black/70 text-white w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full items-center justify-center z-20 cursor-pointer hover:bg-black"
        >
          <FaChevronLeft size={16} />
        </div>
        <div
          className="swiper-next-btn hidden sm:flex absolute top-1/2 -translate-y-1/2 -right-6 md:right-2
          bg-black/70 text-white w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full items-center justify-center z-20 cursor-pointer hover:bg-black"
        >
          <FaChevronRight size={16} />
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourse;
