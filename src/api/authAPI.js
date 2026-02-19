// src/api/authAPI.js
import api from "./axiosInstance";

/**
 * Admin Authentication API
 */
export const authAPI = {
  // Admin login (for Super Admin, Center Admins, and Staff)
  login: async (credentials) => {
    const response = await api.post("/admin/auth/login", credentials);
    if (response.data.success && response.data.data.accessToken) {
      // Store token and user in localStorage
      localStorage.setItem("token", response.data.data.accessToken);
      localStorage.setItem("user", JSON.stringify(response.data.data.user));
    }
    return response.data;
  },

  // Admin logout
  logout: async () => {
    const response = await api.post("/admin/auth/logout");
    // Clear localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    return response.data;
  },

  // Get current admin profile
  getProfile: async () => {
    const response = await api.get("/admin/auth/me");
    return response.data;
  },

  // Create new admin (Super Admin only)
  createAdmin: async (adminData) => {
    const response = await api.post("/admin/auth/create-admin", adminData);
    return response.data;
  },

  // Refresh access token
  refreshToken: async () => {
    const response = await api.post("/admin/auth/refresh-token");
    if (response.data.success && response.data.data.accessToken) {
      localStorage.setItem("token", response.data.data.accessToken);
    }
    return response.data;
  },

  // Change password
  changePassword: async (passwordData) => {
    const response = await api.post(
      "/admin/auth/change-password",
      passwordData,
    );
    return response.data;
  },

  // Forgot password
  forgotPassword: async (email) => {
    const response = await api.post("/admin/auth/forgot-password", { email });
    return response.data;
  },

  // Reset password
  resetPassword: async (resetData) => {
    const response = await api.post("/admin/auth/reset-password", resetData);
    return response.data;
  },
};

export default authAPI;
