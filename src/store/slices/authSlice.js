import { createSlice } from "@reduxjs/toolkit";

// Static login credentials for demo
export const STATIC_USERS = [
  {
    id: 1,
    email: "superadmin@sriram.com",
    password: "super123",
    role: "Super Admin",
    name: "Sriram Kumar",
    centers: [
      "All Centers",
      "Delhi Center",
      "Mumbai Center",
      "Bangalore Center",
      "Chennai Center",
    ],
    avatar: "SK",
  },
  {
    id: 2,
    email: "delhi@sriram.com",
    password: "delhi123",
    role: "Center Admin",
    name: "Rajesh Sharma",
    centers: ["Delhi Center"],
    avatar: "RS",
  },
  {
    id: 3,
    email: "mumbai@sriram.com",
    password: "mumbai123",
    role: "Center Admin",
    name: "Priya Patel",
    centers: ["Mumbai Center"],
    avatar: "PP",
  },
  {
    id: 4,
    email: "trainer@sriram.com",
    password: "trainer123",
    role: "Staff/Trainer",
    name: "Amit Verma",
    centers: ["Delhi Center"],
    avatar: "AV",
  },
];

const user = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;
const selectedCenter =
  localStorage.getItem("selectedCenter") || user?.centers?.[0] || "All Centers";

const initialState = {
  isAuthenticated: localStorage.getItem("isAuthenticated") === "true",
  user: user,
  selectedCenter: selectedCenter,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
      state.selectedCenter = action.payload.centers[0];
      state.error = null;
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("user", JSON.stringify(action.payload));
      localStorage.setItem("selectedCenter", action.payload.centers[0]);
    },
    loginFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.selectedCenter = "All Centers";
      state.error = null;
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("user");
      localStorage.removeItem("selectedCenter");
    },
    setSelectedCenter: (state, action) => {
      state.selectedCenter = action.payload;
      localStorage.setItem("selectedCenter", action.payload);
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
  setSelectedCenter,
  clearError,
} = authSlice.actions;
export default authSlice.reducer;
