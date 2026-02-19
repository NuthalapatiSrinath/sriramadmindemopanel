// src/pages/UserActivityAnalytics.jsx
import React, { useState, useEffect } from "react";
import {
  FiUsers,
  FiActivity,
  FiEye,
  FiMousePointer,
  FiBook,
  FiClock,
  FiTrendingUp,
  FiCalendar,
} from "react-icons/fi";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

const UserActivityAnalytics = () => {
  const [loading, setLoading] = useState(true);
  const [analytics, setAnalytics] = useState(null);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [userActivities, setUserActivities] = useState([]);
  const [dateRange, setDateRange] = useState({
    startDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
      .toISOString()
      .split("T")[0],
    endDate: new Date().toISOString().split("T")[0],
  });

  // Fetch overall analytics
  const fetchAnalytics = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");

      const response = await fetch(
        `http://localhost:3000/api/user/activity/analytics?startDate=${dateRange.startDate}&endDate=${dateRange.endDate}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const data = await response.json();

      if (data.success) {
        setAnalytics(data.data);
      } else {
        toast.error(data.message || "Failed to fetch analytics");
      }
    } catch (error) {
      console.error("Fetch analytics error:", error);
      toast.error("Error fetching analytics");
    } finally {
      setLoading(false);
    }
  };

  // Fetch specific user's activities
  const fetchUserActivities = async (userId) => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        `http://localhost:3000/api/user/activity/user/${userId}?startDate=${dateRange.startDate}&endDate=${dateRange.endDate}&limit=100`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const data = await response.json();

      if (data.success) {
        setUserActivities(data.data.activities);
      } else {
        toast.error(data.message || "Failed to fetch user activities");
      }
    } catch (error) {
      console.error("Fetch user activities error:", error);
      toast.error("Error fetching user activities");
    }
  };

  useEffect(() => {
    fetchAnalytics();
  }, [dateRange]);

  useEffect(() => {
    if (selectedUserId) {
      fetchUserActivities(selectedUserId);
    }
  }, [selectedUserId, dateRange]);

  // Activity type colors
  const activityColors = {
    register: "bg-green-500",
    email_verified: "bg-blue-500",
    login: "bg-purple-500",
    logout: "bg-gray-500",
    page_view: "bg-indigo-500",
    scroll: "bg-teal-500",
    button_click: "bg-yellow-500",
    course_view: "bg-orange-500",
    form_submit: "bg-pink-500",
  };

  const getActivityIcon = (type) => {
    const icons = {
      page_view: <FiEye className="w-4 h-4" />,
      button_click: <FiMousePointer className="w-4 h-4" />,
      course_view: <FiBook className="w-4 h-4" />,
      login: <FiUsers className="w-4 h-4" />,
      register: <FiUsers className="w-4 h-4" />,
    };
    return icons[type] || <FiActivity className="w-4 h-4" />;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            User Activity Analytics
          </h1>
          <p className="text-gray-600">
            Track and analyze user behavior across your platform
          </p>
        </div>

        {/* Date Range Filter */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <FiCalendar className="text-gray-500" />
              <label className="text-sm font-medium text-gray-700">From:</label>
              <input
                type="date"
                value={dateRange.startDate}
                onChange={(e) =>
                  setDateRange({ ...dateRange, startDate: e.target.value })
                }
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex items-center gap-2">
              <label className="text-sm font-medium text-gray-700">To:</label>
              <input
                type="date"
                value={dateRange.endDate}
                onChange={(e) =>
                  setDateRange({ ...dateRange, endDate: e.target.value })
                }
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Popular Pages */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FiTrendingUp className="text-blue-500" />
            Most Popular Pages
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b">
                <tr>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    Page
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    Views
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    Avg Duration (s)
                  </th>
                </tr>
              </thead>
              <tbody>
                {analytics?.popularPages?.map((page, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 text-gray-900">{page._id}</td>
                    <td className="py-3 px-4 text-gray-900">{page.count}</td>
                    <td className="py-3 px-4 text-gray-900">
                      {page.avgDuration
                        ? Math.round(page.avgDuration / 1000)
                        : "N/A"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Active Users */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FiUsers className="text-purple-500" />
            Most Active Users
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b">
                <tr>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    Name
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    Email
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    Activities
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    Sessions
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {analytics?.topUsers?.map((user) => (
                  <tr key={user._id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 text-gray-900">{user.name}</td>
                    <td className="py-3 px-4 text-gray-600">{user.email}</td>
                    <td className="py-3 px-4 text-gray-900">
                      {user.activityCount}
                    </td>
                    <td className="py-3 px-4 text-gray-900">
                      {user.sessionCount}
                    </td>
                    <td className="py-3 px-4">
                      <button
                        onClick={() => setSelectedUserId(user._id)}
                        className="text-blue-600 hover:text-blue-800 font-medium"
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Activity Trends */}
        {analytics?.activityTrends && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <FiActivity className="text-green-500" />
              Activity Trends
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {analytics.activityTrends.slice(0, 12).map((trend, index) => (
                <div
                  key={index}
                  className="p-4 border border-gray-200 rounded-lg"
                >
                  <div className="text-sm text-gray-600">{trend._id.date}</div>
                  <div className="text-lg font-semibold text-gray-900">
                    {trend._id.type}
                  </div>
                  <div className="text-2xl font-bold text-blue-600">
                    {trend.count}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* User Activity Details Modal */}
        {selectedUserId && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            >
              <div className="p-6 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold text-gray-900">
                    User Activity Details
                  </h3>
                  <button
                    onClick={() => {
                      setSelectedUserId(null);
                      setUserActivities([]);
                    }}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-100px)]">
                <div className="space-y-4">
                  {userActivities.map((activity, index) => (
                    <div
                      key={index}
                      className="border border-gray-200 rounded-lg p-4"
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`${
                            activityColors[activity.activityType] ||
                            "bg-gray-500"
                          } text-white p-2 rounded-lg`}
                        >
                          {getActivityIcon(activity.activityType)}
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-semibold text-gray-900">
                                {activity.activityType
                                  .replace(/_/g, " ")
                                  .toUpperCase()}
                              </h4>
                              {activity.page?.path && (
                                <p className="text-sm text-gray-600">
                                  {activity.page.path}
                                </p>
                              )}
                            </div>
                            <span className="text-sm text-gray-500">
                              {new Date(activity.timestamp).toLocaleString()}
                            </span>
                          </div>
                          {activity.scroll && (
                            <p className="text-sm text-gray-600 mt-1">
                              Scroll Depth: {activity.scroll.depth}%
                            </p>
                          )}
                          {activity.course && (
                            <p className="text-sm text-gray-600 mt-1">
                              Course: {activity.course.courseName}
                            </p>
                          )}
                          {activity.action?.element && (
                            <p className="text-sm text-gray-600 mt-1">
                              Element: {activity.action.element}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserActivityAnalytics;
