// src/api/usersAPI.js
import api from "./axiosInstance";

/**
 * User Management API (Admin)
 */
export const usersAPI = {
  // Get all users with pagination and filters
  getAllUsers: async (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    const response = await api.get(`/admin/users?${queryString}`);
    return response.data;
  },

  // Get user statistics
  getUserStats: async () => {
    const response = await api.get("/admin/users/stats");
    return response.data;
  },

  // Get user by ID
  getUserById: async (id) => {
    const response = await api.get(`/admin/users/${id}`);
    return response.data;
  },

  // Update user
  updateUser: async (id, updateData) => {
    const response = await api.put(`/admin/users/${id}`, updateData);
    return response.data;
  },

  // Delete user
  deleteUser: async (id) => {
    const response = await api.delete(`/admin/users/${id}`);
    return response.data;
  },
};

export default usersAPI;
