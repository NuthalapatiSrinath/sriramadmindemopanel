// src/pages/UserActivityDetails.jsx
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Loader2,
  ArrowLeft,
  Eye,
  MousePointer2,
  BookOpen,
  Clock,
  LogIn,
  UserPlus,
  ScrollText,
  Filter,
  TrendingUp,
  Activity,
  Calendar,
} from "lucide-react";
import toast from "react-hot-toast";
import api from "../api/axiosInstance";

const activityTypeLabels = {
  register: { label: "Registered", icon: UserPlus, color: "green" },
  login: { label: "Login", icon: LogIn, color: "blue" },
  page_view: { label: "Page View", icon: Eye, color: "purple" },
  scroll: { label: "Scroll", icon: ScrollText, color: "cyan" },
  button_click: { label: "Button Click", icon: MousePointer2, color: "orange" },
  mouse_move: { label: "Mouse Movement", icon: Activity, color: "pink" },
  course_view: { label: "Course View", icon: BookOpen, color: "indigo" },
  email_verified: { label: "Email Verified", icon: Clock, color: "green" },
  form_submit: { label: "Form Submit", icon: TrendingUp, color: "teal" },
};

const UserActivityDetails = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [activities, setActivities] = useState([]);
  const [filteredActivities, setFilteredActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterType, setFilterType] = useState("all");
  const [stats, setStats] = useState({
    totalActivities: 0,
    loginCount: 0,
    pageViews: 0,
    avgScrollDepth: 0,
    mouseMovements: 0,
  });

  useEffect(() => {
    fetchUserActivity();
  }, [userId]);

  useEffect(() => {
    if (filterType === "all") {
      setFilteredActivities(activities);
    } else {
      setFilteredActivities(
        activities.filter((a) => a.activityType === filterType),
      );
    }
  }, [filterType, activities]);

  useEffect(() => {
    // Calculate statistics
    if (activities.length > 0) {
      const loginCount = activities.filter(
        (a) => a.activityType === "login",
      ).length;
      const pageViews = activities.filter(
        (a) => a.activityType === "page_view",
      ).length;
      const scrolls = activities.filter((a) => a.activityType === "scroll");
      const avgScrollDepth =
        scrolls.length > 0
          ? scrolls.reduce((sum, a) => sum + (a.scroll?.depth || 0), 0) /
            scrolls.length
          : 0;
      const mouseMovements = activities.filter(
        (a) => a.activityType === "mouse_move",
      ).length;

      setStats({
        totalActivities: activities.length,
        loginCount,
        pageViews,
        avgScrollDepth: Math.round(avgScrollDepth),
        mouseMovements,
      });
    }
  }, [activities]);

  const fetchUserActivity = async () => {
    setLoading(true);
    try {
      const response = await api.get(`/user/activity/user/${userId}?limit=200`);
      if (response.data.success) {
        setActivities(response.data.data.activities);
        if (response.data.data.activities.length > 0)
          setUser(response.data.data.activities[0].userInfo || null);
      } else {
        toast.error(response.data.message || "Failed to fetch activity");
      }
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Error fetching user activity",
      );
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <Link
          to="/users-management"
          className="text-indigo-600 hover:underline flex items-center gap-1"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </Link>
        <h1 className="text-2xl font-bold text-slate-800 dark:text-white">
          User Activity Details
        </h1>
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-12">
          <Loader2 className="w-8 h-8 animate-spin text-indigo-500" />
        </div>
      ) : (
        <>
          {/* User Info Card */}
          {user && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-6 bg-white dark:bg-slate-800 rounded-xl shadow flex flex-col md:flex-row md:items-center gap-6"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white text-3xl font-bold shrink-0">
                {user.name?.charAt(0).toUpperCase()}
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-slate-800 dark:text-white">
                  {user.name}
                </h2>
                <p className="text-slate-600 dark:text-slate-300">
                  {user.email}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-500 border border-indigo-500/20">
                    {user.role}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold border bg-green-500/10 text-green-500 border-green-500/20">
                    {user.isVerified ? "Verified" : "Unverified"}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold border bg-slate-500/10 text-slate-600 dark:text-slate-300 border-slate-500/20 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    Joined {new Date(user.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </motion.div>
          )}

          {/* Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-4 text-white"
            >
              <p className="text-xs opacity-90 mb-1">Total Activities</p>
              <p className="text-2xl font-bold">{stats.totalActivities}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-4 text-white"
            >
              <p className="text-xs opacity-90 mb-1">Logins</p>
              <p className="text-2xl font-bold">{stats.loginCount}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-4 text-white"
            >
              <p className="text-xs opacity-90 mb-1">Page Views</p>
              <p className="text-2xl font-bold">{stats.pageViews}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-xl p-4 text-white"
            >
              <p className="text-xs opacity-90 mb-1">Avg Scroll Depth</p>
              <p className="text-2xl font-bold">{stats.avgScrollDepth}%</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-r from-pink-500 to-pink-600 rounded-xl p-4 text-white"
            >
              <p className="text-xs opacity-90 mb-1">Mouse Tracks</p>
              <p className="text-2xl font-bold">{stats.mouseMovements}</p>
            </motion.div>
          </div>

          {/* Activity Filter */}
          <div className="flex items-center gap-4 mb-4">
            <Filter className="w-5 h-5 text-slate-600 dark:text-slate-300" />
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="all">All Activities</option>
              <option value="register">Registration</option>
              <option value="login">Logins</option>
              <option value="page_view">Page Views</option>
              <option value="scroll">Scrolls</option>
              <option value="button_click">Button Clicks</option>
              <option value="mouse_move">Mouse Movements</option>
              <option value="course_view">Course Views</option>
              <option value="form_submit">Form Submissions</option>
            </select>
            <span className="text-sm text-slate-600 dark:text-slate-300">
              Showing {filteredActivities.length} of {activities.length}{" "}
              activities
            </span>
          </div>

          {/* Activity Timeline */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Activity Timeline
            </h3>
            {filteredActivities.length === 0 ? (
              <div className="text-slate-500 text-center py-8">
                No activities found for this filter.
              </div>
            ) : (
              <div className="space-y-3 max-h-[600px] overflow-y-auto">
                {filteredActivities.map((activity, idx) => {
                  const type = activityTypeLabels[activity.activityType] || {
                    label: activity.activityType,
                    icon: Clock,
                    color: "gray",
                  };
                  const Icon = type.icon;
                  const colorClass = `${type.color}-500`;

                  return (
                    <motion.div
                      key={activity._id || idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.02 }}
                      className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 dark:bg-slate-900 hover:shadow-md transition-shadow border border-slate-200 dark:border-slate-700"
                    >
                      <div
                        className={`w-10 h-10 flex items-center justify-center rounded-full bg-${colorClass}/10 text-${colorClass} shrink-0`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-slate-800 dark:text-white flex items-center gap-2">
                          {type.label}
                          <span className="text-xs text-slate-500 font-normal">
                            {new Date(activity.timestamp).toLocaleString()}
                          </span>
                        </div>
                        <div className="text-slate-600 dark:text-slate-300 text-sm mt-1 space-y-1">
                          {activity.page?.path && (
                            <div className="flex items-start gap-1">
                              <span className="font-medium min-w-[70px]">
                                Page:
                              </span>
                              <span className="break-all">
                                {activity.page.path}
                              </span>
                            </div>
                          )}
                          {activity.scroll &&
                            typeof activity.scroll.depth === "number" && (
                              <div className="flex items-center gap-2">
                                <span className="font-medium">Scroll:</span>
                                <div className="flex-1 bg-slate-200 dark:bg-slate-700 rounded-full h-2 max-w-[200px]">
                                  <div
                                    className="bg-cyan-500 h-2 rounded-full"
                                    style={{
                                      width: `${activity.scroll.depth}%`,
                                    }}
                                  />
                                </div>
                                <span className="font-semibold">
                                  {activity.scroll.depth}%
                                </span>
                              </div>
                            )}
                          {activity.mouse && (
                            <div className="flex items-start gap-1">
                              <span className="font-medium min-w-[70px]">
                                Position:
                              </span>
                              <span>
                                X: {activity.mouse.x}, Y: {activity.mouse.y}{" "}
                                (Movements: {activity.mouse.movementCount})
                              </span>
                            </div>
                          )}
                          {activity.course && activity.course.courseName && (
                            <div className="flex items-start gap-1">
                              <span className="font-medium min-w-[70px]">
                                Course:
                              </span>
                              <span>{activity.course.courseName}</span>
                            </div>
                          )}
                          {activity.action && activity.action.element && (
                            <div className="flex items-start gap-1">
                              <span className="font-medium min-w-[70px]">
                                Element:
                              </span>
                              <span className="break-all">
                                {activity.action.element}
                              </span>
                              {activity.action.value && (
                                <span className="ml-2 text-xs bg-slate-200 dark:bg-slate-700 px-2 py-0.5 rounded">
                                  {activity.action.value.substring(0, 50)}
                                </span>
                              )}
                            </div>
                          )}
                          {activity.device && (
                            <div className="text-xs text-slate-500 mt-2">
                              Device: {activity.device.platform} |{" "}
                              {activity.device.isMobile ? "Mobile" : "Desktop"}
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default UserActivityDetails;
