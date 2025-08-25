import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from "@react-oauth/google";
import { googleLogin } from "../../api/auth";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("http://127.0.0.1:8000/users/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.trim(),
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("accessToken", data.access);
        localStorage.setItem("refreshToken", data.refresh);
        localStorage.setItem("user_email", email.trim());
        localStorage.setItem("user_full_name", data.user.full_name);

        navigate("/");
        window.location.reload();
      } else {
        const errorMessage =
          data.detail || data.error || "❌ Invalid email or password.";
        setMessage(errorMessage);
      }
    } catch (error) {
      console.error(error);
      setMessage("❌ Failed to connect. Please try again.");
    }

    setLoading(false);
  };

  const googleLoginPopup = useGoogleLogin({
    flow: "implicit",
    onSuccess: async ({ access_token }) => {
      setLoading(true);
      try {
        const data = await googleLogin(access_token);
        localStorage.setItem("accessToken", data.access);
        localStorage.setItem("refreshToken", data.refresh);
        localStorage.setItem("user_email", data.user.email);
        localStorage.setItem("user_full_name", data.user.full_name);
        navigate("/", { replace: true });
        window.location.reload();
      } catch (err) {
        setMessage(err.message || "Google login failed");
      } finally {
        setLoading(false);
      }
    },
    onError: () => setMessage("Google login cancelled"),
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f4f7fb] p-4">
      <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 w-full max-w-sm">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-4">
          Sign In to Your Account
        </h1>

        {/* Social Login Buttons */}
        <div className="space-y-3">
          <button
            onClick={googleLoginPopup}
            className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-lg py-2 hover:bg-gray-50 transition"
          >
            <FcGoogle size={20} />
            <span className="text-sm font-medium text-gray-700">
              Continue with Google
            </span>
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-300" />
          <span className="mx-3 text-gray-500 text-sm">
            Or, sign in with your email
          </span>
          <div className="flex-grow h-px bg-gray-300" />
        </div>

        {/* Email/Password Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-semibold mb-1" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label
              className="block text-sm font-semibold mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full ${
              loading ? "bg-gray-400" : "bg-[#f35f66] hover:bg-[#e94b52]"
            } text-white font-semibold py-2 rounded-lg transition`}
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>

        {/* Success/Error Message */}
        {message && (
          <div className="mt-4 text-center text-sm text-red-600">{message}</div>
        )}

        {/* Links */}
        <div className="mt-4 text-sm text-center">
          <span className="text-gray-600 hover:underline cursor-pointer">
            Forgot password?
          </span>
        </div>
        <div className="mt-2 text-sm text-center">
          Don&apos;t have an account?{" "}
          <Link
            to="/signup"
            className="text-[#f35f66] font-medium hover:underline"
          >
            Create account
          </Link>
        </div>

        {/* Terms */}
        <div className="mt-4 text-xs text-center text-gray-500">
          By signing up, you agree to our{" "}
          <span className="text-blue-600 underline cursor-pointer">
            Terms Of Use
          </span>{" "}
          and{" "}
          <span className="text-blue-600 underline cursor-pointer">
            Privacy Policy
          </span>
          .
        </div>
      </div>
    </div>
  );
}
