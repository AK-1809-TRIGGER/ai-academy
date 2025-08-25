import { useEffect, useState } from "react";

export default function ProfileCard({ enrolled = 0, completed = 0 }) {
  const [user, setUser] = useState({ name: "", email: "" });

  useEffect(() => {
    const name = localStorage.getItem("user_full_name") || "User";
    const email = localStorage.getItem("user_email") || "unknown@example.com";
    setUser({ name, email });
  }, []);

  return (
    <div className="bg-white rounded-lg shadow p-4 text-center">
      <div className="h-16 w-16 rounded-full bg-gradient-to-tr from-pink-400 to-purple-400 mx-auto text-2xl flex items-center justify-center text-white">
        {user.name.charAt(0)}
      </div>
      <h2 className="mt-2 font-semibold">{user.name}</h2>
      <p className="text-sm text-gray-500">{user.email}</p>
      <p className="mt-1 text-gray-700">
        {enrolled} Enrolled · {completed} Completed
      </p>
    </div>
  );
}
