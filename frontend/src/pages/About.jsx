import React, { useState, useEffect } from "react";
import { Users, Settings, GraduationCap } from "lucide-react";
import Footer from "../components/common/Footer";

export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    {
      url: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Team collaboration",
    },
    {
      url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      alt: "Business meeting",
    },
    {
      url: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      alt: "Woman working on computer",
    },
    {
      url: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80",
      alt: "Busy office environment",
    },
    {
      url: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "AI and technology",
    },
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 2000); // Change slide every 2 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Carousel */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <div className="relative w-full h-full">
          {/* Carousel Images */}
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="  w-full h-full object-cover"
              />
              {/* Dark overlay for better text visibility */}
              <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
            </div>
          ))}

          {/* Overlay Text */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
                About Us
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto px-4 drop-shadow-lg">
                Empowering the global workforce through world-class AI education
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-700 mb-9">Our Mission</h2>
          <h3 className="text-2xl text-teal-800 font-bold mb-8">
            To grow and connect the global AI community
          </h3>
          <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed">
            <span className="font-semibold">DeepLearning.AI</span> is an
            education technology company that is empowering the global workforce
            to build an AI-powered future through world-class education,
            hands-on training, and a collaborative community.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="w-40 h-40 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="w-[130px] h-auto text-blue-600" />
              </div>
              <p className="text-gray-600 mb-2">
                Gain <span className=" font-bold">world-class education</span>{" "}
                to
              </p>
              <p>expand your technical knowledge</p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="w-40 h-40 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Settings className="w-[110px] h-auto text-blue-600" />
              </div>
              <p className="text-gray-600 mb-2">
                Get <span className=" font-bold">hands-on training</span> to
                acquire
              </p>
              <p>practical skills</p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="w-40 h-40 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-[100px] h-auto text-blue-600" />
              </div>
              <p className="text-gray-600 mb-2">
                Learn from a <span className="font-bold">collaborative</span>
              </p>
              <p>community of peers and mentors</p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Story</h2>
          <div className="max-w-4xl mx-auto text-gray-600 space-y-4">
            <p>
              <span className="text-blue-600 font-semibold">
                DeepLearning.AI
              </span>{" "}
              was founded in 2017 by{" "}
              <span className="font-semibold">
                machine learning and education pioneer Andrew Ng
              </span>{" "}
              to fill a need for world-class AI education.
            </p>
            <p>
              DeepLearning.AI has created high-quality AI programs on Coursera
              that have gained an enormous global following. By providing a
              platform for AI education and fostering a vibrant community,
              DeepLearning.AI has become the pathway for anyone looking to build
              an AI career.
            </p>
          </div>
          <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-colors">
            Contact Us
          </button>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-4">
            <a
              href="#"
              className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center text-white hover:bg-pink-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.294 1.227-.334 1.391-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-12C24.007 5.367 18.641.001 12.017.001z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Our Ecosystem
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 w-[1150px] align-items-center justify-items-center mx-auto ">
            <div className="bg-white h-[100px] p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
              <img
                src="https://www.deeplearning.ai/_next/image/?url=%2Fimages%2Fabout%2Fecosystem%2FWorkera_Logo_New.png&w=256&q=75"
                alt="Workera"
                className="w-auto"
              />
              <p className="py-10 font-semibold text-[20px]">Workera</p>
            </div>
            <div className="bg-white h-[100px] p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
              <img
                src="https://www.deeplearning.ai/_next/image/?url=%2Fimages%2Fabout%2Fecosystem%2FAI-Fund-1.webp&w=256&q=75"
                alt="AI Fund"
                className="w-auto mt-3"
              />
              <p className="py-10 font-semibold text-[20px]">AI Fund</p>
            </div>
            <div className="bg-white h-[100px] p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
              <img
                src="https://www.deeplearning.ai/_next/image/?url=%2Fimages%2Fabout%2Fecosystem%2Fkira.png&w=256&q=75"
                alt="AI Fund"
                className="w-auto w-[80%] ml-6"
              />
              <p className="py-7 font-semibold text-[20px]">Kira Learning</p>
            </div>
            <div className="bg-white h-[100px] p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
              <img
                src="https://www.deeplearning.ai/_next/image/?url=%2Fimages%2Fabout%2Fecosystem%2Fwoebot.png&w=256&q=75"
                alt="AI Fund"
                className="w-auto mb-4 pt-4"
              />
              <p className="py-10 font-semibold text-[20px]">Woebot Health</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto px-4 py-10 bg-white">
          <div className="grid md:grid-cols-2 gap-8 ">
            <img
              src="https://www.deeplearning.ai/_next/image/?url=%2Fimages%2Fabout%2Fecosystem%2FWorkera_Logo_New.png&w=750&q=75"
              alt="AI Education"
              className="w-[80%] ml-11 h-auto"
            />
            <div className="flex flex-col justify-center">
              <p className="text-gray-600 mb-6">
                Don’t know where to start? Test your current abilities and
                create your personalized learning pathway to become a machine
                learning expert.
              </p>
              <p>
                Already an ML practitioner? Make sure that you’re up to date
                with the latest techniques and advance your career by
                identifying your next steps
              </p>
            </div>
          </div>
          <div className="items-center justify-center text-center mt-[50px]">
            <p>
              Workera’s free assessments help you identify the skills you need
              for the AI roles you want, providing the feedback, resources, and
              credentials to successfully showcase your skillset
            </p>
            <button className="mt-5 bg-teal-600 hover:bg-teal-800 text-white px-6 py-3 rounded-full transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
