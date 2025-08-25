import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { collabLogos } from "../lib/constsnt";

const InCollabWith = () => {
  return (
    <section className="py-10 bg-white">
      {/* Heading */}
      <h2 className="text-center text-xl sm:text-2xl font-semibold text-gray-800 mb-6">
        In Collaboration With
      </h2>

      {/* Carousel */}
      <div className="max-w-[1400px] mx-auto px-4">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={3000}
          autoplay={{
            delay: 500,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 4,
              spaceBetween: 12,
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 14,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 16,
            },
            1280: {
              slidesPerView: 7,
              spaceBetween: 18,
            },
          }}
        >
          {collabLogos.map((logo, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center"
            >
              <img
                src={logo}
                alt={`Company Logo ${index}`}
                className="h-10 sm:h-12 md:h-14 w-auto object-contain transition duration-300"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default InCollabWith;
