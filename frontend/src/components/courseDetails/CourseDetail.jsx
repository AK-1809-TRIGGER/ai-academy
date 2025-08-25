import { FaArrowRightLong, FaSquareXTwitter } from "react-icons/fa6";

import { FaCheckCircle, FaLinkedin } from "react-icons/fa";

import CoursePreview from "./CoursePreview";
import WhyEnroll from "./WhyEnroll";
import CourseSyllabus from "./CourseSyllabus";
import LearnerReviews from "./LearnerReviews";
import Instructor from "./Instructor";
import Footer from "../common/Footer";
import FAQ from "./FAQ";
import { courseData } from "../lib/constsnt";
import WhatYouWillLearn from "./WhatYouWillLearn";

const modules = [
  {
    title: "Module 1: RAG Overview",
    desc: "Introduction to RAG, applications of RAG, RAG architecture overview, intro to LLMs, brief intro to Python, LLM calls, intro to information retrieval",
  },
  {
    title: "Module 2: Information Retrieval and Search Foundations",
    desc: "Retriever architecture overview, metadata filtering, keyword search (TF-IDF and BM25), semantic search, vector embeddings in RAGv, hybrid search, evaluating retrieval, retrieval metrics",
  },
  {
    title: "Module 3: Information Retrieval with Vector Databases",
    desc: "ANN algorithms, vector databases, intro to the Weaviate API, chunking, query parsing, cross-encoders and ColBERT, reranking",
  },
  {
    title: "Module 4: LLMs and Text Generation",
    desc: "Transformer architecture, LLM sampling strategies, exploring LLM capabilities, choosing your LLM, prompt engineering, handling hallucinations, evaluating your LLM’s performance, agentic RAG, RAG vs. fine-tuning",
  },
  {
    title: "Module 5: RAG Systems in Production",
    desc: "What makes production challenging, implementing RAG evaluation strategies, logging, monitoring, and observability, tracing a RAG system, customized evaluation, quantization, cost vs response quality, latency vs response quality, security, multimodal RAG",
  },
];

const CourseDetail = ({ course }) => {
  if (!course) return <div>Course not found.</div>;
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#3D8BFF] to-[#0070F3] text-white px-6 py-20 md:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Text Content */}
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 leading-tight">
              {course.title}
            </h1>

            <p className="text-lg mb-6 max-w-xl">{course.description}</p>

            <button className="bg-[#FF5A5F] text-white font-semibold px-6 py-3 rounded-lg hover:bg-red-600 transition flex items-center gap-2">
              Enroll Now
              <FaArrowRightLong />
            </button>
          </div>
        </div>
      </section>

      {/* Video + Features Section */}
      <section className="bg-white flex items-center justify-center">
        <div className="max-w-6xl mx-auto text-center pb-16">
          {/* Video Placeholder */}
          <CoursePreview course={course} />

          {/* Features */}
          {course.features && course.features.length > 0 && (
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {course.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex shadow-lg py-6 px-8 rounded-lg min-h-[200px]"
                >
                  <FaCheckCircle className="text-blue-900 text-2xl mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-xl mb-2 text-gray-800">
                      {feat.title}
                    </h4>
                    <p className="text-md text-gray-600">{feat.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      {course.benifits && course.benifits.length > 0 && (
        <section className="bg-blue-50 border border-blue-200 rounded-lg pt-20 pb-32 text-center max-w-7xl mx-auto px-20">
          {course.benifits.map((benefit, idx) => (
            <div>
              <h2 className="text-4xl font-bold mb-24"> {benefit.title}</h2>
              <p className="max-w-6xl mx-auto text-gray-500 text-xl font-semibold">
                {benefit.description}
              </p>
            </div>
          ))}
        </section>
      )}

      {/* Why Enroll */}

      <WhyEnroll course={course} />

      {/* Instructor Section */}
      <Instructor course={course} />

      {/* What You Will Learn */}

      <WhatYouWillLearn
        type="course"
        items={course?.whatYouWillLearn?.items || []}
        description={course?.whatYouWillLearn?.description || ""}
      />

      {/* Syllabus */}

      <div className="mt-5 ">
        <h2 className="text-4xl font-bold mb-4 text-center">Course Syllabus</h2>
        <CourseSyllabus syllabus={{ courses: course.courses }} />
      </div>

      {/* Recommend Background */}
      <section className="text-center max-w-7xl mx-auto px-20 pb-10">
        <h2 className="text-4xl font-bold mb-12">Recommended Background</h2>
        <p className="max-w-2xl text-left mx-auto text-gray-500 text-xl font-semibold">
          Intermediate Python skills required; basic knowledge of generative AI
          and high school-level math is helpful.
        </p>
        <div className="mt-12">
          <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition">
            Enroll Now!
          </button>
        </div>
      </section>

      {/* Reviews Section */}
      {/* <section className="text-center max-w-6xl mx-auto px-20 pb-10">
        <h2 className="text-4xl font-bold mb-12 max-w-xl mx-auto">
          Learner reviews from other DeepLearning.AI courses
        </h2>
        <div className="flex gap-8">
          <div className="shadow-lg py-10 px-3 text-gray-600 flex flex-col gap-20">
            <p>
              I took this course purely out of curiosity. After becoming aware
              of ChatGPT and Midjourney and then taking a short course on
              engineering the prompts to get the desired result, I became more
              intrigued with the topic of AI. I found this most helpful with
              regards to getting an idea about what AI actually is as opposed to
              what Hollywood conditioned me to believe it might be.
            </p>

            <div className="flex flex-col items-center gap-1">
              <RiDoubleQuotesL className="text-red-500 text-2xl" />
              <span className="text-red-500 font-semibold">Chris C</span>
              <span>Software Engineer</span>
            </div>
          </div>

          <div className="shadow-lg py-10 px-3 text-gray-600 flex flex-col gap-20">
            <p>
              I took this course purely out of curiosity. After becoming aware
              of ChatGPT and Midjourney and then taking a short course on
              engineering the prompts to get the desired result, I became more
              intrigued with the topic of AI. I found this most helpful with
              regards to getting an idea about what AI actually is as opposed to
              what Hollywood conditioned me to believe it might be.
            </p>

            <div className="flex flex-col items-center gap-1">
              <RiDoubleQuotesL className="text-red-500 text-2xl" />
              <span className="text-red-500 font-semibold">Chris C</span>
              <span>Software Engineer</span>
            </div>
          </div>

          <div className="shadow-lg py-10 px-3 text-gray-600 flex flex-col gap-20">
            <p>
              I took this course purely out of curiosity. After becoming aware
              of ChatGPT and Midjourney and then taking a short course on
              engineering the prompts to get the desired result, I became more
              intrigued with the topic of AI. I found this most helpful with
              regards to getting an idea about what AI actually is as opposed to
              what Hollywood conditioned me to believe it might be.
            </p>

            <div className="flex flex-col items-center gap-1">
              <RiDoubleQuotesL className="text-red-500 text-2xl" />
              <span className="text-red-500 font-semibold">Chris C</span>
              <span>Software Engineer</span>
            </div>
          </div>
        </div>
      </section> */}
      <LearnerReviews />

      {/* ✅ FAQ Section */}
      {course.faqs && course.faqs.length > 0 && (
        <div className="mt-12">
          <FAQ faqs={course.faqs} />
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CourseDetail;
