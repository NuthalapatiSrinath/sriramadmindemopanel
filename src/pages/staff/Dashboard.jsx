import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import {
  Users,
  BookOpen,
  DollarSign,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle,
  Star,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Video,
  FileText,
  Download,
  Filter,
  Search,
  Bell,
  Award,
  Target,
  Activity,
  MessageSquare,
  ClipboardList,
  BookMarked,
  Upload,
  Send,
  Eye,
  ThumbsUp,
  ThumbsDown,
  Briefcase,
  Wallet,
  Heart,
  Coffee,
  Zap,
  Trophy,
  GraduationCap,
  Edit,
  Trash2,
  Plus,
  ChevronRight,
  PlayCircle,
  PauseCircle,
  CheckSquare,
  XSquare,
  FileQuestion,
  Package,
  TrendingDown,
  BarChart3,
  PieChart,
  LineChart,
  Grid,
  Home,
  Settings,
  UserCheck,
  UserX,
  Info,
  AlertTriangle,
  Smile,
  Frown,
  Meh,
  HelpCircle,
} from "lucide-react";
import { getStaffData } from "../../data/staffData";

const StaffDashboard = () => {
  const { user } = useSelector((state) => state.auth);
  const staffData = getStaffData(user?.name || "Amit Verma");
  const [selectedDay, setSelectedDay] = useState(new Date().getDay());
  const [selectedTab, setSelectedTab] = useState("schedule");

  const {
    personalInfo,
    todaySchedule,
    weekSchedule,
    myStudents,
    performanceMetrics,
    recentTests,
    attendanceLog,
    materialsAssigned,
    pendingTasks,
    studentQueries,
    salaryInfo,
    leaveBalance,
  } = staffData;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const formatCurrency = (amount) => {
    if (amount >= 100000) return `₹${(amount / 100000).toFixed(2)}L`;
    if (amount >= 1000) return `₹${(amount / 1000).toFixed(2)}K`;
    return `₹${amount}`;
  };

  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const getTimeStatus = (time) => {
    const now = new Date();
    const currentHour = now.getHours();
    const [startTime] = time.split(" - ");
    const [hour] = startTime.split(":");
    const classHour = parseInt(hour);

    if (classHour < currentHour) return "completed";
    if (classHour === currentHour) return "ongoing";
    return "upcoming";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 p-4 sm:p-6 space-y-4 sm:space-y-6 overflow-x-hidden w-full max-w-full">
      {/* PERSONAL HEADER WITH PROFILE */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative overflow-hidden"
      >
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
          <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-tr from-indigo-400/30 to-purple-400/30 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="relative bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden">
          <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-32 sm:w-48 h-32 sm:h-48 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <div className="flex items-center justify-between flex-wrap gap-4 sm:gap-6">
              {/* Profile section */}
              <div className="flex items-center gap-4 sm:gap-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, type: "spring" }}
                  className="w-24 h-24 rounded-full bg-gradient-to-br from-white to-indigo-100 flex items-center justify-center text-4xl font-black text-indigo-600 shadow-2xl border-4 border-white/50"
                >
                  {personalInfo.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </motion.div>

                <div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h1 className="text-4xl font-black text-white mb-2">
                      Welcome, {personalInfo.name.split(" ")[0]}! 👋
                    </h1>
                    <div className="flex items-center gap-4 text-indigo-100 mb-2">
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        <span className="text-sm font-semibold">
                          {personalInfo.designation}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4" />
                        <span className="text-sm">{personalInfo.subject}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{personalInfo.center}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 text-white text-xs font-semibold">
                        ID: {personalInfo.employeeId}
                      </div>
                      <div className="px-3 py-1 bg-green-500/80 backdrop-blur-sm rounded-full text-white text-xs font-bold flex items-center gap-1">
                        <CheckCircle className="w-3 h-3" />
                        Active
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Quick stats cards */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center">
                  <p className="text-white/70 text-xs mb-1">Classes Today</p>
                  <p className="text-3xl font-black text-white">
                    {todaySchedule.length}
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center">
                  <p className="text-white/70 text-xs mb-1">My Students</p>
                  <p className="text-3xl font-black text-white">
                    {myStudents.length}
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center">
                  <p className="text-white/70 text-xs mb-1">Pending Tasks</p>
                  <p className="text-3xl font-black text-yellow-300">
                    {pendingTasks.length}
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center">
                  <p className="text-white/70 text-xs mb-1">Queries</p>
                  <p className="text-3xl font-black text-orange-300">
                    {studentQueries.length}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* PERFORMANCE METRICS - 6 CARDS WITH RICH GRAPHS */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {[
          {
            icon: Star,
            label: "Average Rating",
            value: performanceMetrics.rating,
            max: "5.0",
            change: "Excellent performance",
            color: "from-yellow-500 to-orange-600",
            bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
            iconColor: "text-yellow-600 dark:text-yellow-400",
            trend: [4.5, 4.6, 4.7, 4.8, 4.9, 4.9, 5.0],
            type: "area",
          },
          {
            icon: Users,
            label: "Total Students",
            value: performanceMetrics.totalStudents,
            change: `${performanceMetrics.activeStudents} active`,
            color: "from-blue-500 to-blue-600",
            bgColor: "bg-blue-50 dark:bg-blue-900/20",
            iconColor: "text-blue-600 dark:text-blue-400",
            trend: [145, 148, 150, 152, 154, 155, 156],
            type: "line",
          },
          {
            icon: Video,
            label: "Classes Completed",
            value: performanceMetrics.classesCompleted,
            change: "This month",
            color: "from-purple-500 to-purple-600",
            bgColor: "bg-purple-50 dark:bg-purple-900/20",
            iconColor: "text-purple-600 dark:text-purple-400",
            trend: [5, 6, 7, 8, 10, 12, 14],
            type: "bar",
          },
          {
            icon: Trophy,
            label: "Success Rate",
            value: `${performanceMetrics.averageScore}%`,
            change: "Student avg score",
            color: "from-green-500 to-green-600",
            bgColor: "bg-green-50 dark:bg-green-900/20",
            iconColor: "text-green-600 dark:text-green-400",
            trend: [78, 79, 80, 81, 81, 82, 82.3],
            type: "area",
          },
          {
            icon: Clock,
            label: "Hours This Week",
            value: performanceMetrics.hoursThisWeek,
            change: "8hrs per day avg",
            color: "from-indigo-500 to-indigo-600",
            bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
            iconColor: "text-indigo-600 dark:text-indigo-400",
            trend: [8, 7.5, 8.5, 8, 9, 8.5, 8],
            type: "bar",
          },
          {
            icon: CheckCircle,
            label: "Attendance",
            value: `${performanceMetrics.attendanceRate}%`,
            change: "On-time record",
            color: "from-teal-500 to-teal-600",
            bgColor: "bg-teal-50 dark:bg-teal-900/20",
            iconColor: "text-teal-600 dark:text-teal-400",
            trend: [98, 99, 100, 100, 99, 100, 100],
            type: "line",
          },
        ].map((metric, index) => {
          const max = Math.max(...metric.trend);
          const min = Math.min(...metric.trend);
          const range = max - min || 1;
          const percentValue = metric.max
            ? (parseFloat(metric.value) / parseFloat(metric.max)) * 100
            : null;

          return (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              {/* Animated glow effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${metric.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`}
              />

              <div className="relative bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all duration-300 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${metric.color} rounded-full blur-2xl`}
                  />
                </div>

                {/* Header with Icon and Progress */}
                <div className="flex items-start justify-between mb-4 relative z-10">
                  <div
                    className={`${metric.bgColor} p-3 rounded-xl group-hover:scale-110 transition-transform duration-300 relative`}
                  >
                    <metric.icon className={`w-6 h-6 ${metric.iconColor}`} />
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-green-400 to-green-500 rounded-full animate-pulse" />
                  </div>
                  {metric.max && (
                    <div className="text-right">
                      <span className="text-xs text-slate-400">
                        / {metric.max}
                      </span>
                      <div className="w-12 h-1 bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-600 dark:to-slate-700 rounded-full mt-1">
                        <div
                          className={`h-full bg-gradient-to-r ${metric.color} rounded-full transition-all duration-500`}
                          style={{ width: `${percentValue}%` }}
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Main Content */}
                <div className="mb-4 relative z-10">
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-2">
                    {metric.label}
                  </p>
                  <p className="text-3xl font-black text-slate-800 dark:text-white mb-2">
                    {metric.value}
                  </p>
                  <p className="text-xs text-slate-400 dark:text-slate-500 font-medium flex items-center gap-1">
                    <TrendingUp className="w-3 h-3 text-green-500" />
                    {metric.change}
                  </p>
                </div>

                {/* Mini Sparkline Graph */}
                <div className="relative h-12 mt-4">
                  {metric.type === "area" && (
                    <svg
                      className="w-full h-full"
                      viewBox="0 0 100 40"
                      preserveAspectRatio="none"
                    >
                      <defs>
                        <linearGradient
                          id={`grad-staff-${index}`}
                          x1="0"
                          x2="0"
                          y1="0"
                          y2="1"
                        >
                          <stop
                            offset="0%"
                            className="stop-color"
                            style={{
                              stopColor: metric.iconColor.includes("yellow")
                                ? "#eab308"
                                : metric.iconColor.includes("green")
                                  ? "#10b981"
                                  : "#6366f1",
                            }}
                            stopOpacity="0.3"
                          />
                          <stop
                            offset="100%"
                            className="stop-color"
                            style={{
                              stopColor: metric.iconColor.includes("yellow")
                                ? "#eab308"
                                : metric.iconColor.includes("green")
                                  ? "#10b981"
                                  : "#6366f1",
                            }}
                            stopOpacity="0"
                          />
                        </linearGradient>
                      </defs>
                      <path
                        d={`M 0,${40 - ((metric.trend[0] - min) / range) * 35} ${metric.trend
                          .map(
                            (val, i) =>
                              `L ${(i / (metric.trend.length - 1)) * 100},${40 - ((val - min) / range) * 35}`,
                          )
                          .join(" ")} L 100,40 L 0,40 Z`}
                        fill={`url(#grad-staff-${index})`}
                      />
                      <path
                        d={`M 0,${40 - ((metric.trend[0] - min) / range) * 35} ${metric.trend
                          .map(
                            (val, i) =>
                              `L ${(i / (metric.trend.length - 1)) * 100},${40 - ((val - min) / range) * 35}`,
                          )
                          .join(" ")}`}
                        fill="none"
                        stroke={
                          metric.iconColor.includes("yellow")
                            ? "#eab308"
                            : metric.iconColor.includes("green")
                              ? "#10b981"
                              : "#6366f1"
                        }
                        strokeWidth="2"
                      />
                    </svg>
                  )}
                  {metric.type === "bar" && (
                    <div className="flex items-end justify-between h-full gap-1">
                      {metric.trend.map((val, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{
                            height: `${((val - min) / range) * 100}%`,
                          }}
                          transition={{
                            delay: index * 0.1 + i * 0.05,
                            duration: 0.5,
                          }}
                          className={`flex-1 bg-gradient-to-t ${metric.color} rounded-t opacity-60 hover:opacity-100 transition-opacity`}
                        />
                      ))}
                    </div>
                  )}
                  {metric.type === "line" && (
                    <svg
                      className="w-full h-full"
                      viewBox="0 0 100 40"
                      preserveAspectRatio="none"
                    >
                      <path
                        d={`M 0,${40 - ((metric.trend[0] - min) / range) * 35} ${metric.trend
                          .map(
                            (val, i) =>
                              `L ${(i / (metric.trend.length - 1)) * 100},${40 - ((val - min) / range) * 35}`,
                          )
                          .join(" ")}`}
                        fill="none"
                        stroke={
                          metric.iconColor.includes("blue")
                            ? "#3b82f6"
                            : metric.iconColor.includes("teal")
                              ? "#14b8a6"
                              : "#6366f1"
                        }
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      {metric.trend.map((val, i) => (
                        <circle
                          key={i}
                          cx={(i / (metric.trend.length - 1)) * 100}
                          cy={40 - ((val - min) / range) * 35}
                          r="2"
                          fill={
                            metric.iconColor.includes("blue")
                              ? "#3b82f6"
                              : metric.iconColor.includes("teal")
                                ? "#14b8a6"
                                : "#6366f1"
                          }
                        />
                      ))}
                    </svg>
                  )}
                </div>

                {/* Animated bottom border */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${metric.color} rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* TODAY'S SCHEDULE & WEEK VIEW */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Today's Schedule */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-2 bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-2xl border border-slate-200 dark:border-slate-700"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-2xl font-black text-slate-800 dark:text-white mb-2">
                📅 Today's Schedule
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                {new Date().toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
            <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              View Calendar
            </button>
          </div>

          <div className="space-y-4">
            {todaySchedule.length === 0 ? (
              <div className="text-center py-12">
                <Coffee className="w-16 h-16 text-slate-300 dark:text-slate-600 mx-auto mb-4" />
                <p className="text-slate-500 dark:text-slate-400 font-semibold">
                  No classes scheduled for today! 🎉
                </p>
                <p className="text-sm text-slate-400 dark:text-slate-500">
                  Enjoy your day off!
                </p>
              </div>
            ) : (
              todaySchedule.map((schedule, index) => {
                const status = getTimeStatus(schedule.time);

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="relative bg-gradient-to-r from-slate-50 to-purple-50 dark:from-slate-700 dark:to-slate-600 rounded-2xl p-6 hover:shadow-lg transition-all group"
                  >
                    {/* Status indicator */}
                    <div
                      className={`absolute left-0 top-0 bottom-0 w-2 rounded-l-2xl ${
                        status === "completed"
                          ? "bg-green-500"
                          : status === "ongoing"
                            ? "bg-blue-500 animate-pulse"
                            : "bg-slate-300 dark:bg-slate-600"
                      }`}
                    />

                    <div className="flex items-center gap-6 ml-4">
                      {/* Time badge */}
                      <div
                        className={`flex-shrink-0 w-24 text-center p-3 rounded-xl ${
                          status === "ongoing"
                            ? "bg-blue-100 dark:bg-blue-900/30"
                            : "bg-white dark:bg-slate-700"
                        }`}
                      >
                        <Clock
                          className={`w-5 h-5 mx-auto mb-1 ${
                            status === "ongoing"
                              ? "text-blue-600 dark:text-blue-400"
                              : "text-slate-600 dark:text-slate-400"
                          }`}
                        />
                        <p
                          className={`text-xs font-bold ${
                            status === "ongoing"
                              ? "text-blue-600 dark:text-blue-400"
                              : "text-slate-800 dark:text-white"
                          }`}
                        >
                          {schedule.time}
                        </p>
                      </div>

                      {/* Class details */}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="text-lg font-bold text-slate-800 dark:text-white">
                            {schedule.batch}
                          </h4>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-bold ${
                              status === "completed"
                                ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                                : status === "ongoing"
                                  ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 animate-pulse"
                                  : "bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300"
                            }`}
                          >
                            {status === "completed"
                              ? "✓ Completed"
                              : status === "ongoing"
                                ? "● Live"
                                : "Upcoming"}
                          </span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                          <div className="flex items-center gap-1">
                            <BookOpen className="w-4 h-4" />
                            <span>{schedule.subject}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{schedule.room}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            <span>{schedule.students} students</span>
                          </div>
                        </div>
                      </div>

                      {/* Action button */}
                      <div>
                        {status === "ongoing" ? (
                          <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl hover:shadow-lg transition-all flex items-center gap-2">
                            <Video className="w-5 h-5" />
                            Join Now
                          </button>
                        ) : status === "upcoming" ? (
                          <button className="px-6 py-3 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 font-semibold rounded-xl hover:bg-slate-200 dark:hover:bg-slate-600 transition-all">
                            View Details
                          </button>
                        ) : (
                          <button className="px-6 py-3 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 font-semibold rounded-xl flex items-center gap-2">
                            <CheckCircle className="w-5 h-5" />
                            Done
                          </button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })
            )}
          </div>
        </motion.div>

        {/* Week Overview */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-2xl border border-slate-200 dark:border-slate-700"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-black text-slate-800 dark:text-white mb-1">
                📊 This Week
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Daily overview
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {weekSchedule.map((day, index) => {
              const isToday = new Date().getDay() === (index + 1) % 7;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className={`p-4 rounded-xl transition-all group cursor-pointer ${
                    isToday
                      ? "bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 ring-2 ring-purple-500"
                      : "bg-slate-50 dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                          isToday
                            ? "bg-purple-600 text-white"
                            : "bg-slate-200 dark:bg-slate-600 text-slate-600 dark:text-slate-300"
                        }`}
                      >
                        {day.day.substring(0, 3)}
                      </div>
                      <p
                        className={`font-semibold ${isToday ? "text-purple-600 dark:text-purple-400" : "text-slate-700 dark:text-slate-300"}`}
                      >
                        {day.day}
                      </p>
                    </div>
                    <span className="text-lg font-bold text-slate-800 dark:text-white">
                      {day.classes}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="flex items-center gap-1 text-slate-600 dark:text-slate-400">
                      <Clock className="w-3 h-3" />
                      <span>{day.hours}h</span>
                    </div>
                    <div className="flex items-center gap-1 text-slate-600 dark:text-slate-400">
                      <Users className="w-3 h-3" />
                      <span>{day.students}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* MY STUDENTS & RECENT TESTS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* My Students Performance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-2xl border border-slate-200 dark:border-slate-700"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-2xl font-black text-slate-800 dark:text-white mb-2">
                👨‍🎓 My Students
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Performance tracking
              </p>
            </div>
            <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all">
              View All
            </button>
          </div>

          <div className="space-y-4">
            {myStudents.map((student, index) => {
              const progressPercent = student.progress;
              const scoreColor =
                student.lastScore >= 80
                  ? "text-green-600 dark:text-green-400"
                  : student.lastScore >= 60
                    ? "text-yellow-600 dark:text-yellow-400"
                    : "text-red-600 dark:text-red-400";

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="bg-gradient-to-r from-slate-50 to-indigo-50 dark:from-slate-700 dark:to-slate-600 rounded-2xl p-5 hover:shadow-lg transition-all group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white font-bold shadow-lg group-hover:scale-110 transition-transform">
                        {student.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 dark:text-white">
                          {student.name}
                        </h4>
                        <p className="text-xs text-slate-600 dark:text-slate-400">
                          {student.batch} • {student.attendance}% attendance
                        </p>
                      </div>
                    </div>

                    <div className="text-right">
                      <p className={`text-2xl font-bold ${scoreColor}`}>
                        {student.lastScore}%
                      </p>
                      <p className="text-xs text-slate-500">Last test</p>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="mb-2">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Course Progress
                      </span>
                      <span className="text-xs text-slate-600 dark:text-slate-400">
                        {student.progress}%
                      </span>
                    </div>
                    <div className="relative h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${progressPercent}%` }}
                        transition={{ duration: 1.2, delay: 0.7 + index * 0.1 }}
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-purple-400 to-indigo-600 rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Recent Tests & Grading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-2xl border border-slate-200 dark:border-slate-700"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-2xl font-black text-slate-800 dark:text-white mb-2">
                📝 Recent Tests
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Grading & feedback
              </p>
            </div>
            <ClipboardList className="w-8 h-8 text-indigo-500" />
          </div>

          <div className="space-y-5">
            {recentTests.map((test, index) => {
              const statusColors = {
                Graded:
                  "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
                Pending:
                  "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
                "In Progress":
                  "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
              };

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="bg-gradient-to-r from-slate-50 to-purple-50 dark:from-slate-700 dark:to-slate-600 rounded-2xl p-5 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="font-bold text-lg text-slate-800 dark:text-white mb-1">
                        {test.testName}
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {test.batch} • {test.date}
                      </p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold ${statusColors[test.status]}`}
                    >
                      {test.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div className="text-center p-3 bg-white dark:bg-slate-700 rounded-xl">
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Total
                      </p>
                      <p className="text-lg font-bold text-slate-800 dark:text-white">
                        {test.totalStudents}
                      </p>
                    </div>
                    <div className="text-center p-3 bg-white dark:bg-slate-700 rounded-xl">
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Submitted
                      </p>
                      <p className="text-lg font-bold text-blue-600 dark:text-blue-400">
                        {test.submitted}
                      </p>
                    </div>
                    <div className="text-center p-3 bg-white dark:bg-slate-700 rounded-xl">
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Graded
                      </p>
                      <p className="text-lg font-bold text-green-600 dark:text-green-400">
                        {test.graded}
                      </p>
                    </div>
                  </div>

                  {test.status !== "Graded" && (
                    <button className="w-full py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2">
                      <Edit className="w-4 h-4" />
                      {test.status === "Pending"
                        ? "Start Grading"
                        : "Continue Grading"}
                    </button>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* ATTENDANCE LOG, MATERIALS & TASKS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Attendance Log */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-2xl border border-slate-200 dark:border-slate-700"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-black text-slate-800 dark:text-white mb-1">
                📊 My Attendance
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Last 4 days
              </p>
            </div>
            <Calendar className="w-6 h-6 text-green-500" />
          </div>

          <div className="space-y-3">
            {attendanceLog.map((record, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-700 rounded-xl"
              >
                <div>
                  <p className="font-semibold text-slate-800 dark:text-white text-sm">
                    {record.date}
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    {record.checkIn} - {record.checkOut}
                  </p>
                </div>
                <div
                  className={`px-3 py-1 rounded-full text-xs font-bold ${
                    record.status === "Present"
                      ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                      : record.status === "Late"
                        ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                        : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                  }`}
                >
                  {record.status}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Materials Assigned */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-2xl border border-slate-200 dark:border-slate-700"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-black text-slate-800 dark:text-white mb-1">
                📚 My Materials
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Teaching resources
              </p>
            </div>
            <button className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl hover:bg-indigo-200 dark:hover:bg-indigo-900/50 transition-all">
              <Upload className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            </button>
          </div>

          <div className="space-y-3">
            {materialsAssigned.map((material, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="flex items-center gap-3 p-3 bg-gradient-to-r from-slate-50 to-indigo-50 dark:from-slate-700 dark:to-slate-600 rounded-xl hover:shadow-md transition-all group"
              >
                <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
                  <FileText className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-sm text-slate-800 dark:text-white">
                    {material.title}
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    {material.batch} • {material.date}
                  </p>
                </div>
                <button className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <Download className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pending Tasks */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-2xl border border-slate-200 dark:border-slate-700"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-black text-slate-800 dark:text-white mb-1">
                ✅ Pending Tasks
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {pendingTasks.length} items
              </p>
            </div>
            <Target className="w-6 h-6 text-orange-500" />
          </div>

          <div className="space-y-3">
            {pendingTasks.map((task, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="flex items-start gap-3 p-3 bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 rounded-xl hover:shadow-md transition-all group"
              >
                <button className="mt-1 w-5 h-5 rounded border-2 border-orange-400 hover:bg-orange-400 transition-colors" />
                <div className="flex-1">
                  <p className="font-semibold text-sm text-slate-800 dark:text-white">
                    {task.task}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <span
                      className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                        task.priority === "High"
                          ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                          : task.priority === "Medium"
                            ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                            : "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                      }`}
                    >
                      {task.priority}
                    </span>
                    <span className="text-xs text-slate-600 dark:text-slate-400">
                      Due: {task.dueDate}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* STUDENT QUERIES & SALARY INFO */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Student Queries */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-2xl border border-slate-200 dark:border-slate-700"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-2xl font-black text-slate-800 dark:text-white mb-2">
                💬 Student Queries
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Pending responses
              </p>
            </div>
            <MessageSquare className="w-8 h-8 text-blue-500" />
          </div>

          <div className="space-y-4">
            {studentQueries.map((query, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-5 hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold text-sm shadow-lg">
                      {query.student
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 dark:text-white">
                        {query.student}
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        {query.batch}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    {query.time}
                  </span>
                </div>

                <p className="text-sm text-slate-700 dark:text-slate-300 mb-4 bg-white dark:bg-slate-700 p-3 rounded-xl">
                  "{query.query}"
                </p>

                <button className="w-full py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" />
                  Reply to {query.student.split(" ")[0]}
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Salary & Leave Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="space-y-6"
        >
          {/* Salary Information */}
          <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-3xl p-8 shadow-2xl text-white">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-black mb-2">💰 Salary Details</h3>
                <p className="text-green-100">This month earnings</p>
              </div>
              <Wallet className="w-8 h-8 text-green-200" />
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <p className="text-green-100 text-sm mb-1">Base Salary</p>
                <p className="text-2xl font-black">
                  {formatCurrency(salaryInfo.base)}
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <p className="text-green-100 text-sm mb-1">Incentives</p>
                <p className="text-2xl font-black">
                  {formatCurrency(salaryInfo.incentives)}
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <p className="text-green-100 text-sm mb-1">Bonus</p>
                <p className="text-2xl font-black">
                  {formatCurrency(salaryInfo.bonus)}
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <p className="text-green-100 text-sm mb-1">Deductions</p>
                <p className="text-2xl font-black">
                  -{formatCurrency(salaryInfo.deductions)}
                </p>
              </div>
            </div>

            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/30">
              <p className="text-green-100 text-sm mb-2">
                Net Salary (This Month)
              </p>
              <p className="text-4xl font-black mb-2">
                {formatCurrency(salaryInfo.netSalary)}
              </p>
              <p className="text-green-100 text-xs">
                Payment Date: {salaryInfo.paymentDate}
              </p>
            </div>
          </div>

          {/* Leave Balance */}
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-2xl border border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-black text-slate-800 dark:text-white mb-1">
                  🏖️ Leave Balance
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Available leaves
                </p>
              </div>
              <Calendar className="w-6 h-6 text-purple-500" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              {Object.entries(leaveBalance).map(([type, count], index) => (
                <motion.div
                  key={type}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="text-center p-4 bg-gradient-to-br from-slate-50 to-purple-50 dark:from-slate-700 dark:to-slate-600 rounded-xl"
                >
                  <p className="text-3xl font-black text-purple-600 dark:text-purple-400 mb-1">
                    {count}
                  </p>
                  <p className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                    {type.replace(/([A-Z])/g, " $1").trim()}
                  </p>
                </motion.div>
              ))}
            </div>

            <button className="w-full mt-4 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2">
              <Plus className="w-5 h-5" />
              Request Leave
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default StaffDashboard;
