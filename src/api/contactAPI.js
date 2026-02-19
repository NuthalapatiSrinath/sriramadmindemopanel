// src/api/contactAPI.js
import api from "./axiosInstance";

/**
 * Contact Management API (Admin)
 */
export const contactAPI = {
  // Get all contacts with pagination and filters
  getAllContacts: async (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    const response = await api.get(`/admin/contacts?${queryString}`);
    return response.data;
  },

  // Get contact statistics
  getContactStats: async () => {
    const response = await api.get("/admin/contacts/stats");
    return response.data;
  },

  // Get contact by ID
  getContactById: async (id) => {
    const response = await api.get(`/admin/contacts/${id}`);
    return response.data;
  },

  // Update contact status
  updateContact: async (id, updateData) => {
    const response = await api.put(`/admin/contacts/${id}`, updateData);
    return response.data;
  },

  // Delete contact (Super Admin only)
  deleteContact: async (id) => {
    const response = await api.delete(`/admin/contacts/${id}`);
    return response.data;
  },
};

export default contactAPI;
