import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import { courseData } from "../lib/constsnt";
import CourseCard from "./CourseCard";

const AiCoursesAndSpecializations = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-500 to-pink-500 text-center py-12 sm:py-16">
      {/* Heading */}
      <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
        AI Courses and Specializations
      </h2>
      <p className="text-sm sm:text-base md:text-lg text-white mb-6 max-w-2xl mx-auto px-4">
        Build a foundation of machine learning and AI skills,{" "}
        <br className="hidden sm:block" />
        <span>and understand how to apply them in the real world.</span>
      </p>

      {/* Carousel */}
      <div
        className="relative mx-auto w-full
        px-3 sm:px-6 md:px-8 lg:px-12
        md:max-w-[720px] lg:max-w-[1200px]"
      >
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          autoplay={{ delay: 3000 }}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
              centeredSlides: true,
            },
            375: {
              slidesPerView: 1.2,
              spaceBetween: 10,
              centeredSlides: true,
            },
            425: {
              slidesPerView: 1.2,
              spaceBetween: 0,
              centeredSlides: true,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 5,
              centeredSlides: true,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 1,
              centeredSlides: true,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 2,
              centeredSlides: false,
            },
            1440: {
              slidesPerView: 3,
              spaceBetween: 25,
              centeredSlides: false,
            },
          }}
        >
          {courseData.map((course) => (
            <SwiperSlide key={course.id} className="flex justify-center p-4 ">
              <CourseCard {...course} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Arrows */}
        <div
          className="custom-prev hidden md:flex absolute top-1/2 -translate-y-1/2 bg-white text-gray-800 w-9 h-9 lg:w-10 lg:h-10 items-center justify-center rounded-full z-10 shadow cursor-pointer hover:bg-gray-200 transition
          left-3 lg:left-[-1px] md:left-[-10px]"
        >
          <FaChevronLeft size={20} />
        </div>
        <div
          className="custom-next hidden md:flex absolute top-1/2 -translate-y-1/2 bg-white text-gray-800 w-9 h-9 lg:w-10 lg:h-10 items-center justify-center rounded-full z-10 shadow cursor-pointer hover:bg-gray-200 transition
          right-3 lg:right-[-1px] md:right-[-10px]"
        >
          <FaChevronRight size={20} />
        </div>
      </div>

      {/* Button */}
      <Link to="/courses">
        <button className="mt-6 sm:mt-8 px-4 sm:px-6 py-2 sm:py-3 bg-white text-indigo-600 font-medium rounded-md shadow hover:bg-gray-100 transition">
          Explore All Courses
        </button>
      </Link>
    </section>
  );
};

export default AiCoursesAndSpecializations;
