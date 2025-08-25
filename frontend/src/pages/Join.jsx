import React, { useState } from "react";
import { courseData } from "../components/lib/constsnt"; 
import Footer from "../components/common/Footer"; 

const Join = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: "",
    qualification: "",
    skills: "",
    linkedin: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://127.0.0.1:8000/api/join/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Thank you! Your application ID is " + data.id);
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          course: "",
          qualification: "",
          skills: "",
          linkedin: "",
          message: "",
        });
      } else {
        alert("Error: " + (data.error || "Something went wrong"));
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Unable to submit form. Please try again.");
    }
  };

  return (
    <>
      <div className="max-w-3xl mx-auto my-12 p-6 bg-white shadow-md rounded-lg border border-gray-200">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Join <span className="text-rose-500">AI Academy</span>
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Fill out the form below to apply for our internship or courses.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              placeholder="John Doe"
              className="w-full border rounded-md px-3 py-2"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className="w-full border rounded-md px-3 py-2"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="+91 9876543210"
              className="w-full border rounded-md px-3 py-2"
            />
          </div>

          {/* Course (Dropdown) */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Course Interested In
            </label>
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
              className="w-full border rounded-md px-3 py-2"
            >
              <option value="">Select a course</option>
              {courseData.map((course) => (
                <option key={course.id} value={course.title}>
                  {course.title}
                </option>
              ))}
            </select>
          </div>

          {/* Qualification */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Highest Qualification
            </label>
            <input
              type="text"
              name="qualification"
              value={formData.qualification}
              onChange={handleChange}
              required
              placeholder="e.g. B.Tech, M.Sc, Diploma"
              className="w-full border rounded-md px-3 py-2"
            />
          </div>

          {/* Skills */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Skills
            </label>
            <input
              type="text"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              required
              placeholder="e.g. Python, React, SQL"
              className="w-full border rounded-md px-3 py-2"
            />
          </div>

          {/* LinkedIn */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              LinkedIn Profile (optional)
            </label>
            <input
              type="url"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              placeholder="https://linkedin.com/in/yourprofile"
              className="w-full border rounded-md px-3 py-2"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Message (optional)
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message here..."
              rows="3"
              className="w-full border rounded-md px-3 py-2"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-rose-500 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Apply Now
          </button>
        </form>
      </div>

      {/* Footer Section */}
      <Footer />
    </>
  );
};

export default Join;
