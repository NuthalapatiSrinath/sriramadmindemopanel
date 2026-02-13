import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

// Layouts
import Layout from "../layouts/Layout";

// Pages
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import UserManagement from "../pages/UserManagement";
import CourseManagement from "../pages/CourseManagement";
import Finance from "../pages/Finance";
import Reports from "../pages/Reports";
import NotFound from "../pages/NotFound";

// Role-specific dashboards
import SuperAdminDashboard from "../pages/superadmin/Dashboard";
import CenterAdminDashboard from "../pages/centeradmin/Dashboard";
import StaffDashboard from "../pages/staff/Dashboard";

// Super Admin Pages
import SuperAdminAnalytics from "../pages/superadmin/Analytics";
import SuperAdminStudents from "../pages/superadmin/Students";
import SuperAdminCenters from "../pages/superadmin/Centers";
import SuperAdminStaff from "../pages/superadmin/Staff";
import SuperAdminCourses from "../pages/superadmin/Courses";
import SuperAdminOverview from "../pages/superadmin/Overview";
import SuperAdminCentersPerformance from "../pages/superadmin/CentersPerformance";
import SuperAdminCentersComparison from "../pages/superadmin/CentersComparison";
import SuperAdminBatches from "../pages/superadmin/Batches";
import SuperAdminRevenue from "../pages/superadmin/Revenue";
import SuperAdminExpenses from "../pages/superadmin/Expenses";
import SuperAdminSettings from "../pages/superadmin/Settings";
import SuperAdminDatabase from "../pages/superadmin/Database";
import SuperAdminLogs from "../pages/superadmin/Logs";

// Placeholder for missing pages (Prevents crashes)
const Placeholder = ({ title }) => (
  <div className="p-6">
    <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
      {title}
    </h2>
    <p className="text-slate-500 dark:text-slate-400 mt-2">
      This module is under development.
    </p>
  </div>
);

// Role-based Dashboard Router
const RoleDashboard = () => {
  const { user } = useSelector((state) => state.auth);

  // Route to appropriate dashboard based on role
  switch (user?.role) {
    case "Super Admin":
      return <SuperAdminDashboard />;
    case "Center Admin":
      return <CenterAdminDashboard />;
    case "Staff/Trainer":
      return <StaffDashboard />;
    default:
      return <Dashboard />;
  }
};

// --- 1. DEFINE ROUTES & TITLES HERE ---
export const appRoutes = [
  // Main Dashboard - Role-based routing
  { path: "/", element: <RoleDashboard />, title: "Dashboard" },

  // ===== SUPER ADMIN ROUTES =====
  { path: "/analytics", element: <SuperAdminAnalytics />, title: "Analytics" },
  {
    path: "/overview",
    element: <SuperAdminOverview />,
    title: "Overview",
  },
  { path: "/centers", element: <SuperAdminCenters />, title: "Centers" },
  {
    path: "/centers/performance",
    element: <SuperAdminCentersPerformance />,
    title: "Centers Performance",
  },
  {
    path: "/centers/comparison",
    element: <SuperAdminCentersComparison />,
    title: "Centers Comparison",
  },
  {
    path: "/students",
    element: <SuperAdminStudents />,
    title: "Students Management",
  },
  { path: "/staff", element: <SuperAdminStaff />, title: "Staff Management" },
  {
    path: "/courses",
    element: <SuperAdminCourses />,
    title: "Course Management",
  },
  {
    path: "/batches",
    element: <SuperAdminBatches />,
    title: "Batches",
  },
  {
    path: "/revenue",
    element: <SuperAdminRevenue />,
    title: "Revenue",
  },
  {
    path: "/expenses",
    element: <SuperAdminExpenses />,
    title: "Expenses",
  },
  { path: "/reports", element: <Reports />, title: "Reports" },
  {
    path: "/settings",
    element: <SuperAdminSettings />,
    title: "Settings",
  },
  {
    path: "/database",
    element: <SuperAdminDatabase />,
    title: "Database",
  },
  {
    path: "/logs",
    element: <SuperAdminLogs />,
    title: "Logs",
  },

  // ===== CENTER ADMIN ROUTES =====
  {
    path: "/center/analytics",
    element: <Placeholder title="Center Analytics" />,
    title: "Analytics",
  },
  {
    path: "/center/students",
    element: <Placeholder title="Student Management" />,
    title: "Students",
  },
  {
    path: "/center/batches",
    element: <Placeholder title="Batch Management" />,
    title: "Batches",
  },
  {
    path: "/center/attendance",
    element: <Placeholder title="Attendance Tracking" />,
    title: "Attendance",
  },
  {
    path: "/center/schedule",
    element: <Placeholder title="Class Schedule" />,
    title: "Schedule",
  },
  {
    path: "/center/staff",
    element: <Placeholder title="Staff Management" />,
    title: "Staff",
  },
  {
    path: "/center/classrooms",
    element: <Placeholder title="Classroom Management" />,
    title: "Classrooms",
  },
  {
    path: "/center/inventory",
    element: <Placeholder title="Inventory Management" />,
    title: "Inventory",
  },
  {
    path: "/center/materials",
    element: <Placeholder title="Learning Materials" />,
    title: "Materials",
  },
  {
    path: "/center/performance",
    element: <Placeholder title="Performance Analytics" />,
    title: "Performance",
  },
  {
    path: "/center/revenue",
    element: <Placeholder title="Revenue Tracking" />,
    title: "Revenue",
  },
  {
    path: "/center/reports",
    element: <Placeholder title="Center Reports" />,
    title: "Reports",
  },
  {
    path: "/center/queries",
    element: <Placeholder title="Student Queries" />,
    title: "Queries",
  },
  {
    path: "/center/announcements",
    element: <Placeholder title="Announcements" />,
    title: "Announcements",
  },

  // ===== STAFF ROUTES =====
  {
    path: "/my/profile",
    element: <Placeholder title="My Profile" />,
    title: "Profile",
  },
  {
    path: "/my/classes",
    element: <Placeholder title="My Classes" />,
    title: "Classes",
  },
  {
    path: "/my/students",
    element: <Placeholder title="My Students" />,
    title: "Students",
  },
  {
    path: "/my/schedule",
    element: <Placeholder title="My Schedule" />,
    title: "Schedule",
  },
  {
    path: "/my/attendance",
    element: <Placeholder title="Mark Attendance" />,
    title: "Attendance",
  },
  {
    path: "/my/materials",
    element: <Placeholder title="Teaching Materials" />,
    title: "Materials",
  },
  {
    path: "/my/tests",
    element: <Placeholder title="Tests & Grading" />,
    title: "Tests",
  },
  {
    path: "/my/assignments",
    element: <Placeholder title="Assignments" />,
    title: "Assignments",
  },
  {
    path: "/my/rating",
    element: <Placeholder title="My Rating" />,
    title: "Rating",
  },
  {
    path: "/my/success",
    element: <Placeholder title="Success Rate" />,
    title: "Success Rate",
  },
  {
    path: "/my/analytics",
    element: <Placeholder title="My Analytics" />,
    title: "Analytics",
  },
  {
    path: "/my/queries",
    element: <Placeholder title="Student Queries" />,
    title: "Queries",
  },
  {
    path: "/my/tasks",
    element: <Placeholder title="My Tasks" />,
    title: "Tasks",
  },
  {
    path: "/my/salary",
    element: <Placeholder title="Salary Information" />,
    title: "Salary",
  },
  {
    path: "/my/leave",
    element: <Placeholder title="Leave Management" />,
    title: "Leave",
  },

  // ===== LEGACY/OLD ROUTES (Keep for backwards compatibility) =====
  { path: "/users", element: <UserManagement />, title: "User Management" },
  {
    path: "/live-classes",
    element: <Placeholder title="Live Classes" />,
    title: "Live Classes",
  },
  {
    path: "/tests",
    element: <Placeholder title="Tests & Assessments" />,
    title: "Tests & Assessments",
  },
  {
    path: "/blog",
    element: <Placeholder title="Blog & Content Management" />,
    title: "Blog & Content",
  },
  { path: "/finance", element: <Finance />, title: "Finance & Payments" },
  {
    path: "/enquiries",
    element: <Placeholder title="Leads & Enquiry Management" />,
    title: "Enquiries",
  },
  {
    path: "/notifications",
    element: <Placeholder title="Push Notifications" />,
    title: "Notifications",
  },
];

// --- 2. ROUTE COMPONENTS ---

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return children;
};

const PublicRoute = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  if (isAuthenticated) return <Navigate to="/" replace />;
  return children;
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        {/* Generates routes automatically from the list above */}
        {appRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
