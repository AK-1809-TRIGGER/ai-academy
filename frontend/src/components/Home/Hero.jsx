import React from "react";

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#1e293b] to-[#1e4a8a] text-white relative">
        <div className="max-w-[1300px] mx-auto text-center py-20 px-4 md:py-28">
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">
            AI is the new electricity. <br />
            <span className="text-white">You are the spark.</span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-10 text-gray-200">
            Get the latest AI news, courses, events, and insights{" "}
            <br className="hidden sm:block" />
            from Andrew Ng and other AI leaders.
          </p>

          {/* Email Input + Subscribe Button */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 w-full max-w-lg mx-auto">
            {/* Email Input */}
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 sm:py-4 w-full sm:w-[300px] bg-white rounded-md text-gray-800 focus:outline-none shadow"
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

      {/* Callout Section */}
      <div className="py-10 px-4 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
          Join over <span className="text-rose-500">7 million people</span>{" "}
          learning <br />
          <span className="text-black">how to use and build AI</span>
        </h1>
      </div>
    </>
  );
};

export default Hero;
