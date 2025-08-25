const API_BASE = import.meta.env.VITE_API_BASE || "http://127.0.0.1:8000";

export async function googleLogin(accessToken) {
  const res = await fetch(`${API_BASE}/users/google/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ access_token: accessToken }),
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.detail || "Google login failed");
  }
  return res.json(); // { access, refresh, user }
}