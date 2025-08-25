import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import logo from "../../assets/images/tenlogo.jpg";
import axios from "axios";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userFullName, setUserFullName] = useState("");

  const currentPath = location.pathname;
  const isActive = (path) => currentPath === path;

  // ✅ Check if user is logged in
  useEffect(() => {
    const storedAccessToken = localStorage.getItem("accessToken");
    if (storedAccessToken) {
      fetchUserInfo(storedAccessToken);
    } else {
      setIsLoggedIn(false);
      setUserFullName("");
    }
  }, []);

  const fetchUserInfo = async (token) => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/auth/user/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        const userData = response.data;
        setUserFullName(userData.full_name || userData.email || "User");
        localStorage.setItem(
          "user_full_name",
          userData.full_name || userData.email || "User"
        );
        setIsLoggedIn(true);
      } else {
        console.error("Failed to fetch user info:", response.statusText);
        // Clear tokens if fetching user info fails (e.g., token expired)
        clearAuthData();
      }
    } catch (error) {
      console.error("Error fetching user info:", error);
      clearAuthData();
    }
  };

  const clearAuthData = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user_full_name");
    localStorage.removeItem("_access_token");
    localStorage.removeItem("user_email");
    localStorage.removeItem("persist:root");
    localStorage.removeItem("sb-zdllrzncerlocpghomue-auth-token");
    setIsLoggedIn(false);
    setUserFullName("");
  };

  // ✅ Handle logout
  const handleLogout = async () => {
    const refreshToken = localStorage.getItem("refreshToken");

    if (refreshToken) {
      try {
        await axios.post("http://localhost:8000/users/logout/", {
          refresh: refreshToken,
        });
        console.log("Refresh token blacklisted successfully.");
      } catch (error) {
        console.error("Error blacklisting refresh token:", error);
        // Proceed with frontend logout even if backend blacklisting fails
      }
    }

    // Clear storage & update UI
    clearAuthData();
    setShowDropdown(false);
    navigate("/");
    window.location.reload();
  };

  return (
    <nav className="w-full shadow-sm bg-white sticky top-0 z-50">
      <div className="flex items-center justify-between max-w-[1400px] mx-auto px-6 py-4">
        {/* Logo */}
        <Link to="/" onClick={() => setIsOpen(false)}>
          <div className="flex items-center space-x-2">
            <img
              src={logo}
              alt="Logo"
              className="h-10 w-10 rounded-full object-cover"
            />
            <span className="text-xl font-bold text-rose-500">AI-Academy</span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-6 text-gray-600 font-medium">
          <li>
            <Link
              to="/"
              className={`hover:text-[#3D74B6] ${
                isActive("/") ? "text-[#3D74B6] font-bold" : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/courses"
              className={`hover:text-[#3D74B6] ${
                isActive("/courses") ? "text-[#3D74B6] font-bold" : ""
              }`}
            >
              Courses
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`hover:text-[#3D74B6] ${
                isActive("/about") ? "text-[#3D74B6] font-bold" : ""
              }`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/playground"
              className={`hover:text-[#3D74B6] ${
                isActive("/playground") ? "text-[#3D74B6] font-bold" : ""
              }`}
            >
              Playground
            </Link>
          </li>
          <li>
            <Link
              to="/join"
              className={`hover:text-[#3D74B6] ${
                isActive("/join") ? "text-[#3D74B6] font-bold" : ""
              }`}
            >
              Join
            </Link>
          </li>
        </ul>

        {/* Desktop Right Side */}
        {!isLoggedIn ? (
          <Link to="/signin" className="hidden md:inline-block">
            <button className="bg-rose-500 text-white px-4 py-2 rounded-md hover:bg-rose-600 transition">
              Log In
            </button>
          </Link>
        ) : (
          <div className="relative hidden md:flex">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="focus:outline-none"
            >
              <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-purple-400 to-pink-400 flex items-center justify-center text-white text-xl">
                <FaUserCircle />
              </div>
            </button>

            {/* Dropdown */}
            {showDropdown && (
              <div className="absolute right-0 mt-12 w-58 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                <div className="px-4 py-2 text-sm text-gray-700 font-semibold">
                  {userFullName}
                </div>
                <Link
                  to="/my-learnings"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setShowDropdown(false)}
                >
                  My Learning
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold text-rose-500">AI Academy</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-600 text-2xl hover:text-gray-800"
          >
            <FiX className="text-3xl text-gray-600 hover:text-rose-500 transition" />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col p-4 space-y-4">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className={`flex items-center gap-2 hover:text-[#3D74B6] ${
              isActive("/") ? "text-[#3D74B6] font-bold" : ""
            }`}
          >
            <span>&lt;</span> Home
          </Link>
          <Link
            to="/courses"
            onClick={() => setIsOpen(false)}
            className={`flex items-center gap-2 hover:text-[#3D74B6] ${
              isActive("/courses") ? "text-[#3D74B6] font-bold" : ""
            }`}
          >
            <span>&lt;</span> Courses
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className={`flex items-center gap-2 hover:text-[#3D74B6] ${
              isActive("/about") ? "text-[#3D74B6] font-bold" : ""
            }`}
          >
            <span>&lt;</span> About
          </Link>
          <Link
            to="/playground"
            onClick={() => setIsOpen(false)}
            className={`flex items-center gap-2 hover:text-[#3D74B6] ${
              isActive("/playground") ? "text-[#3D74B6] font-bold" : ""
            }`}
          >
            <span>&lt;</span> Playground
          </Link>
          <Link
            to="/join"
            onClick={() => setIsOpen(false)}
            className={`flex items-center gap-2 hover:text-[#3D74B6] ${
              isActive("/join") ? "text-[#3D74B6] font-bold" : ""
            }`}
          >
            <span>&lt;</span> Join
          </Link>

          {!isLoggedIn ? (
            <Link to="/signin" onClick={() => setIsOpen(false)}>
              <button className="mt-4 bg-rose-500 text-white px-4 py-2 rounded-md hover:bg-rose-600 transition w-full">
                Log In
              </button>
            </Link>
          ) : (
            <div className="mt-4 space-y-2">
              <div className="font-semibold">{userFullName}</div>
              <Link
                to="/my-learnings"
                className="block px-2 py-1 rounded hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                &lt; My Learning
              </Link>
              <button
                onClick={handleLogout}
                className="w-full text-left px-2 py-1 rounded hover:bg-gray-100"
              >
                &lt; Logout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-40 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
