import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authAPI } from "../../api/authAPI";
import toast from "react-hot-toast";

// Async Thunk for Admin Login
export const loginAdmin = createAsyncThunk(
  "auth/loginAdmin",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await authAPI.login({ email, password });
      return response.data;
    } catch (error) {
      const message = error.response?.data?.message || "Login failed";
      return rejectWithValue(message);
    }
  },
);

// Async Thunk for Get Admin Profile
export const getAdminProfile = createAsyncThunk(
  "auth/getAdminProfile",
  async (_, { rejectWithValue }) => {
    try {
      const response = await authAPI.getProfile();
      return response.data;
    } catch (error) {
      const message =
        error.response?.data?.message || "Failed to fetch profile";
      return rejectWithValue(message);
    }
  },
);

// Async Thunk for Create Admin
export const createAdmin = createAsyncThunk(
  "auth/createAdmin",
  async (adminData, { rejectWithValue }) => {
    try {
      const response = await authAPI.createAdmin(adminData);
      return response.data;
    } catch (error) {
      const message = error.response?.data?.message || "Failed to create admin";
      return rejectWithValue(message);
    }
  },
);

// Async Thunk for Logout
export const logoutAdmin = createAsyncThunk(
  "auth/logoutAdmin",
  async (_, { rejectWithValue }) => {
    try {
      await authAPI.logout();
    } catch (error) {
      // Even if API fails, we should still logout locally
      console.error("Logout error:", error);
    }
  },
);

// Async Thunk for Change Password
export const changePassword = createAsyncThunk(
  "auth/changePassword",
  async (passwordData, { rejectWithValue }) => {
    try {
      const response = await authAPI.changePassword(passwordData);
      return response.data;
    } catch (error) {
      const message =
        error.response?.data?.message || "Failed to change password";
      return rejectWithValue(message);
    }
  },
);

// Async Thunk for Forgot Password
export const forgotPassword = createAsyncThunk(
  "auth/forgotPassword",
  async (email, { rejectWithValue }) => {
    try {
      const response = await authAPI.forgotPassword(email);
      return response.data;
    } catch (error) {
      const message =
        error.response?.data?.message || "Failed to send reset email";
      return rejectWithValue(message);
    }
  },
);

// Async Thunk for Reset Password
export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async (resetData, { rejectWithValue }) => {
    try {
      const response = await authAPI.resetPassword(resetData);
      return response.data;
    } catch (error) {
      const message =
        error.response?.data?.message || "Failed to reset password";
      return rejectWithValue(message);
    }
  },
);

const user = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;
const token = localStorage.getItem("token");

const initialState = {
  user: user,
  token: token,
  isAuthenticated: !!token,
  selectedCenter: user?.centers?.[0] || "All Centers",
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.selectedCenter = "All Centers";
      state.error = null;
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },
    setSelectedCenter: (state, action) => {
      state.selectedCenter = action.payload;
      localStorage.setItem("selectedCenter", action.payload);
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Login Admin
      .addCase(loginAdmin.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginAdmin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.token = action.payload.accessToken;
        state.selectedCenter =
          action.payload.user.centers?.[0] || "All Centers";
        toast.success(
          `Welcome back, ${action.payload.user.name || action.payload.user.email}`,
        );
      })
      .addCase(loginAdmin.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        toast.error(action.payload);
      })
      // Get Admin Profile
      .addCase(getAdminProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAdminProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        localStorage.setItem("user", JSON.stringify(action.payload.user));
      })
      .addCase(getAdminProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // Create Admin
      .addCase(createAdmin.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createAdmin.fulfilled, (state) => {
        state.isLoading = false;
        toast.success("Admin created successfully!");
      })
      .addCase(createAdmin.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        toast.error(action.payload);
      })
      // Logout Admin
      .addCase(logoutAdmin.fulfilled, (state) => {
        state.user = null;
        state.token = null;
        state.isAuthenticated = false;
        state.selectedCenter = "All Centers";
        state.error = null;
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        toast.success("Logged out successfully");
      })
      // Change Password
      .addCase(changePassword.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(changePassword.fulfilled, (state) => {
        state.isLoading = false;
        toast.success("Password changed successfully!");
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        toast.error(action.payload);
      })
      // Forgot Password
      .addCase(forgotPassword.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(forgotPassword.fulfilled, (state) => {
        state.isLoading = false;
        toast.success("Password reset link sent to your email!");
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        toast.error(action.payload);
      })
      // Reset Password
      .addCase(resetPassword.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(resetPassword.fulfilled, (state) => {
        state.isLoading = false;
        toast.success("Password reset successfully! Please login.");
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        toast.error(action.payload);
      });
  },
});

export const { logout, setSelectedCenter, clearError } = authSlice.actions;
export default authSlice.reducer;
