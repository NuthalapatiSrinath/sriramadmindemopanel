import axios from "axios";

// Create axios instance pointing to your backend
const api = axios.create({
  baseURL: "https://demosr.vercel.app/api", // Backend running on port 3000
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // Enable cookies for refresh token
});

// Request Interceptor: Attach Token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // We will store 'admin_token' here
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// Response Interceptor: Handle 401 (Token Expired)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // If token is invalid/expired, logout user
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  },
);

export default api;
