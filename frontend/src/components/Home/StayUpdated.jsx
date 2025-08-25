import React from "react";

const StayUpdated = () => {
  return (
    <>
      <section className="bg-gradient-to-b from-blue-800 to-blue-400 text-white relative">
        <div className="max-w-[1300px] mx-auto text-center py-16 px-4 sm:py-20">
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 leading-snug">
            Stay up to date on the latest <br className="hidden sm:block" />
            <span className="text-white">news, courses, and AI events.</span>
          </h1>

          {/* Email Input + Subscribe Button */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 w-full max-w-[500px] mx-auto">
            {/* Email Input */}
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 sm:px-5 sm:py-4 w-full bg-white rounded-md text-gray-800 focus:outline-none shadow"
            />
            {/* Subscribe Button */}
            <div className="flex justify-center sm:justify-start">
              <button className="bg-rose-500 text-white px-3 py-3 sm:px-4 sm:py-3 rounded-lg hover:bg-rose-600 transition duration-300 w-[140px]">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StayUpdated;
