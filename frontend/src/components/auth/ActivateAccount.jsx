import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function ActivateAccount() {
  const { uid, token } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    full_name: "",
    job_title: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("http://127.0.0.1:8000/users/complete/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          uidb64: uid,
          token,
          full_name: formData.full_name,
          job_title: formData.job_title,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        const errorMsg =
          data?.error ||
          `❌ Activation failed (status ${response.status}). Please try again.`;
        setMessage(errorMsg);
      } else {
        setSuccess(true);
        setMessage(`✅ ${data.message || "Account activated successfully!"}`);

        setTimeout(() => navigate("/signin"), 2000);
      }
    } catch (error) {
      console.error("Activation error:", error);
      setMessage("❌ Network error. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="bg-white shadow-lg rounded-xl px-6 py-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Complete Your Registration
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="name"
            >
              Full Name
            </label>
            <input
              id="full_name"
              type="text"
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="job_title"
            >
              Job Title
            </label>
            <select
              id="job_title"
              name="job_title"
              value={formData.job_title}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            >
              <option value="" disabled>
                Select a Job Title
              </option>
              <option value="Software Engineer">Software Engineer</option>
              <option value="Product Manager">Product Manager</option>
              <option value="Data Scientist">Data Scientist</option>
              <option value="UX Designer">UX Designer</option>
              <option value="DevOps Engineer">DevOps Engineer</option>
              <option value="QA Engineer">QA Engineer</option>
              <option value="Marketing Manager">Marketing Manager</option>
              <option value="Sales Representative">Sales Representative</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Set a strong password"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full ${
              loading ? "bg-gray-400" : "bg-green-500 hover:bg-green-600"
            } text-white font-bold py-2 px-4 rounded-lg transition duration-200`}
          >
            {loading ? "Submitting..." : "Activate Account"}
          </button>

          {message && (
            <p
              className={`mt-4 text-center font-medium ${
                success ? "text-green-600" : "text-red-600"
              }`}
            >
              {message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
