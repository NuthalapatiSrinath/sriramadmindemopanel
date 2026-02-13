import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import {
  Users,
  BookOpen,
  DollarSign,
  TrendingUp,
  TrendingDown,
  Building2,
  Award,
  Target,
  Activity,
  Zap,
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
  RefreshCw,
  Settings,
  Bell,
  Eye,
  Briefcase,
  UserCheck,
  UserX,
  ClipboardList,
  Boxes,
  Package,
  AlertTriangle,
  ThumbsUp,
  MessageSquare,
  GraduationCap,
  Trophy,
  BookMarked,
  PieChart,
  BarChart3,
  LineChart,
  ArrowUpRight,
  ArrowDownRight,
  Grid,
  Home,
  Coffee,
  Wifi,
  Monitor,
  Printer,
  Smartphone,
  Edit,
  Trash2,
  Plus,
  ChevronRight,
  Info,
} from "lucide-react";
import { getCenterAdminData } from "../../data/centerAdminData";

const CenterAdminDashboard = () => {
  const { selectedCenter } = useSelector((state) => state.auth);
  const centerData = getCenterAdminData(selectedCenter);
  const [selectedView, setSelectedView] = useState("overview");
  const [selectedDay, setSelectedDay] = useState(new Date().getDay());

  const {
    centerInfo,
    dailyStats,
    weeklyPerformance,
    batchPerformance,
    staffSchedule,
    classroomUtilization,
    inventoryStatus,
  } = centerData;

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
  const shortDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 p-4 sm:p-6 space-y-4 sm:space-y-6 overflow-x-hidden w-full max-w-full">
      {/* HEADER SECTION WITH CENTER INFO */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative overflow-hidden"
      >
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
          <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-blue-400/30 to-indigo-400/30 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-tr from-indigo-400/30 to-purple-400/30 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden">
          <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-32 sm:w-48 h-32 sm:h-48 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex items-center gap-3 mb-4"
                >
                  <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-indigo-100 text-sm">Center Operations</p>
                    <h1 className="text-3xl font-black text-white">
                      {centerInfo.name}
                    </h1>
                  </div>
                </motion.div>

                <div className="flex flex-wrap gap-4 text-indigo-100 mb-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{centerInfo.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">{centerInfo.contact}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">{centerInfo.email}</span>
                  </div>
                </div>

                <p className="text-indigo-100 text-md">
                  Established {centerInfo.established} • Managed by{" "}
                  <span className="font-bold text-white">
                    {centerInfo.manager}
                  </span>
                </p>
              </div>

              {/* Quick Action Buttons */}
              <div className="flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-white text-indigo-600 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
                >
                  <Plus className="w-5 h-5" />
                  <span className="hidden md:inline">New Entry</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-white/20 backdrop-blur-sm text-white font-bold rounded-xl border border-white/30 hover:bg-white/30 transition-all"
                >
                  <Download className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-white/20 backdrop-blur-sm text-white font-bold rounded-xl border border-white/30 hover:bg-white/30 transition-all"
                >
                  <Settings className="w-5 h-5" />
                </motion.button>
              </div>
            </div>

            {/* Center Capacity Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-white font-semibold">
                  Center Capacity
                </span>
                <span className="text-white text-lg font-bold">
                  {centerInfo.currentCapacity}/{centerInfo.maxCapacity} Students
                </span>
              </div>
              <div className="relative h-4 bg-white/20 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{
                    width: `${(centerInfo.currentCapacity / centerInfo.maxCapacity) * 100}%`,
                  }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  className={`absolute inset-y-0 left-0 rounded-full ${
                    centerInfo.currentCapacity / centerInfo.maxCapacity > 0.9
                      ? "bg-gradient-to-r from-red-400 to-red-500"
                      : centerInfo.currentCapacity / centerInfo.maxCapacity >
                          0.7
                        ? "bg-gradient-to-r from-yellow-400 to-orange-500"
                        : "bg-gradient-to-r from-green-400 to-green-500"
                  }`}
                />
              </div>
              <p className="text-xs text-indigo-100 mt-2">
                {Math.round(
                  (centerInfo.currentCapacity / centerInfo.maxCapacity) * 100,
                )}
                % Occupied •{" "}
                {centerInfo.maxCapacity - centerInfo.currentCapacity} Seats
                Available
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* TODAY's OPERATIONAL METRICS - 8 CARDS WITH MINI GRAPHS */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {[
          {
            icon: Users,
            label: "Present Today",
            value: dailyStats.presentStudents,
            total: dailyStats.totalStudents,
            change: `${Math.round((dailyStats.presentStudents / dailyStats.totalStudents) * 100)}% attendance`,
            color: "from-green-500 to-green-600",
            bgColor: "bg-green-50 dark:bg-green-900/20",
            iconColor: "text-green-600 dark:text-green-400",
            trend: [756, 782, 805, 779, 828, 865, 756],
            type: "area",
          },
          {
            icon: UserX,
            label: "Absent Today",
            value: dailyStats.absentStudents,
            total: dailyStats.totalStudents,
            change: `${dailyStats.absentStudents} students missing`,
            color: "from-red-500 to-red-600",
            bgColor: "bg-red-50 dark:bg-red-900/20",
            iconColor: "text-red-600 dark:text-red-400",
            trend: [136, 110, 87, 113, 64, 27, 136],
            type: "bar",
          },
          {
            icon: Video,
            label: "Live Classes",
            value: dailyStats.liveClasses,
            total: dailyStats.scheduledClasses,
            change: `${dailyStats.scheduledClasses} scheduled today`,
            color: "from-purple-500 to-purple-600",
            bgColor: "bg-purple-50 dark:bg-purple-900/20",
            iconColor: "text-purple-600 dark:text-purple-400",
            trend: [12, 13, 12, 11, 14, 15, 8],
            type: "line",
          },
          {
            icon: UserCheck,
            label: "Staff Present",
            value: dailyStats.staffPresent,
            total: dailyStats.totalStaff,
            change: `${dailyStats.totalStaff - dailyStats.staffPresent} on leave`,
            color: "from-blue-500 to-blue-600",
            bgColor: "bg-blue-50 dark:bg-blue-900/20",
            iconColor: "text-blue-600 dark:text-blue-400",
            trend: [14, 15, 16, 15, 16, 14, 14],
            type: "area",
          },
          {
            icon: DollarSign,
            label: "Today Revenue",
            value: formatCurrency(dailyStats.todayRevenue),
            change: "+12.5% vs yesterday",
            color: "from-green-500 to-emerald-600",
            bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
            iconColor: "text-emerald-600 dark:text-emerald-400",
            trend: [45000, 48000, 52000, 46000, 55000, 62000, 52300],
            type: "area",
          },
          {
            icon: MessageSquare,
            label: "New Enquiries",
            value: dailyStats.newEnquiries,
            change: "Requires follow-up",
            color: "from-orange-500 to-orange-600",
            bgColor: "bg-orange-50 dark:bg-orange-900/20",
            iconColor: "text-orange-600 dark:text-orange-400",
            trend: [15, 12, 20, 18, 22, 25, 18],
            type: "bar",
          },
          {
            icon: ClipboardList,
            label: "Tests Today",
            value: dailyStats.testsScheduled,
            change: "In progress",
            color: "from-indigo-500 to-indigo-600",
            bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
            iconColor: "text-indigo-600 dark:text-indigo-400",
            trend: [3, 4, 5, 4, 6, 7, 5],
            type: "line",
          },
          {
            icon: AlertCircle,
            label: "Pending Tasks",
            value: dailyStats.pendingTasks,
            change: "Need attention",
            color: "from-yellow-500 to-yellow-600",
            bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
            iconColor: "text-yellow-600 dark:text-yellow-400",
            trend: [15, 14, 13, 12, 11, 10, 12],
            type: "bar",
          },
        ].map((metric, index) => {
          const max = Math.max(...metric.trend);
          const min = Math.min(...metric.trend);
          const range = max - min || 1;

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

                {/* Header with Icon and Badge */}
                <div className="flex items-start justify-between mb-4 relative z-10">
                  <div
                    className={`${metric.bgColor} p-3 rounded-xl group-hover:scale-110 transition-transform duration-300 relative`}
                  >
                    <metric.icon className={`w-6 h-6 ${metric.iconColor}`} />
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-green-400 to-green-500 rounded-full animate-pulse" />
                  </div>
                  {metric.total && (
                    <div className="text-right">
                      <p className="text-xs text-slate-400">
                        of {metric.total}
                      </p>
                      <div className="w-12 h-1 bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-600 dark:to-slate-700 rounded-full mt-1">
                        <div
                          className={`h-full bg-gradient-to-r ${metric.color} rounded-full transition-all duration-500`}
                          style={{
                            width: `${(metric.value / metric.total) * 100}%`,
                          }}
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
                    {metric.change.includes("+") ? (
                      <TrendingUp className="w-3 h-3 text-green-500" />
                    ) : metric.change.includes("-") ? (
                      <TrendingDown className="w-3 h-3 text-red-500" />
                    ) : null}
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
                          id={`gradient-${index}`}
                          x1="0"
                          x2="0"
                          y1="0"
                          y2="1"
                        >
                          <stop
                            offset="0%"
                            className="stop-color"
                            style={{
                              stopColor: metric.iconColor.includes("green")
                                ? "#10b981"
                                : metric.iconColor.includes("blue")
                                  ? "#3b82f6"
                                  : metric.iconColor.includes("emerald")
                                    ? "#10b981"
                                    : "#6366f1",
                            }}
                            stopOpacity="0.3"
                          />
                          <stop
                            offset="100%"
                            className="stop-color"
                            style={{
                              stopColor: metric.iconColor.includes("green")
                                ? "#10b981"
                                : metric.iconColor.includes("blue")
                                  ? "#3b82f6"
                                  : metric.iconColor.includes("emerald")
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
                        fill={`url(#gradient-${index})`}
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
                          metric.iconColor.includes("green")
                            ? "#10b981"
                            : metric.iconColor.includes("blue")
                              ? "#3b82f6"
                              : metric.iconColor.includes("emerald")
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
                          metric.iconColor.includes("purple")
                            ? "#a855f7"
                            : metric.iconColor.includes("indigo")
                              ? "#6366f1"
                              : "#3b82f6"
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
                            metric.iconColor.includes("purple")
                              ? "#a855f7"
                              : metric.iconColor.includes("indigo")
                                ? "#6366f1"
                                : "#3b82f6"
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

      {/* WEEKLY PERFORMANCE TREND */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-2xl border border-slate-200 dark:border-slate-700"
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-black text-slate-800 dark:text-white mb-2">
              📊 Weekly Performance Overview
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Last 7 days operational metrics
            </p>
          </div>

          {/* View toggle */}
          <div className="flex gap-2">
            {["Overview", "Revenue", "Attendance"].map((view) => (
              <button
                key={view}
                onClick={() => setSelectedView(view.toLowerCase())}
                className={`px-4 py-2 rounded-xl font-semibold text-sm transition-all ${
                  selectedView === view.toLowerCase()
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
                    : "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600"
                }`}
              >
                {view}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {weeklyPerformance.map((day, index) => {
            const maxRevenue = Math.max(
              ...weeklyPerformance.map((d) => d.revenue),
            );
            const revenuePercent = (day.revenue / maxRevenue) * 100;
            const attendancePercent = (day.attendance / day.students) * 100;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-700 dark:to-slate-600 rounded-2xl p-6 hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-14 h-14 rounded-full ${
                        index === new Date().getDay()
                          ? "bg-gradient-to-br from-blue-500 to-indigo-500 ring-4 ring-blue-200 dark:ring-blue-800"
                          : "bg-gradient-to-br from-slate-400 to-slate-500"
                      } flex items-center justify-center text-white font-bold shadow-lg`}
                    >
                      {day.day.substring(0, 3)}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                        {day.day}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {day.classes} classes • {day.students} students
                      </p>
                    </div>
                  </div>

                  {/* Quick metrics */}
                  <div className="flex gap-6">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                        {formatCurrency(day.revenue)}
                      </p>
                      <p className="text-xs text-slate-500">Revenue</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        {day.attendance}
                      </p>
                      <p className="text-xs text-slate-500">Present</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                        {day.classes}
                      </p>
                      <p className="text-xs text-slate-500">Classes</p>
                    </div>
                  </div>
                </div>

                {/* Revenue Bar */}
                <div className="mb-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Revenue
                    </span>
                    <span className="text-sm font-bold text-slate-800 dark:text-white">
                      {formatCurrency(day.revenue)}
                    </span>
                  </div>
                  <div className="relative h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${revenuePercent}%` }}
                      transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-green-400 to-green-600 rounded-full"
                    />
                  </div>
                </div>

                {/* Attendance Bar */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Attendance
                    </span>
                    <span className="text-sm font-bold text-slate-800 dark:text-white">
                      {Math.round(attendancePercent)}%
                    </span>
                  </div>
                  <div className="relative h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${attendancePercent}%` }}
                      transition={{ duration: 1.5, delay: 0.6 + index * 0.1 }}
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* BATCH PERFORMANCE & STAFF SCHEDULE */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Batch Performance Analysis */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-2xl border border-slate-200 dark:border-slate-700"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-2xl font-black text-slate-800 dark:text-white mb-2">
                🎓 Batch Performance
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Active batches analysis
              </p>
            </div>
            <BarChart3 className="w-8 h-8 text-indigo-500" />
          </div>

          <div className="space-y-5">
            {batchPerformance.map((batch, index) => {
              const strengthPercent = (batch.strength / batch.capacity) * 100;
              const avgScorePercent = (batch.avgScore / 100) * 100;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="bg-gradient-to-r from-slate-50 to-indigo-50 dark:from-slate-700 dark:to-slate-600 rounded-2xl p-5 hover:shadow-lg transition-all group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="font-bold text-lg text-slate-800 dark:text-white">
                        {batch.batchName}
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        {batch.course} • {batch.timing}
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Instructor
                      </p>
                      <p className="font-bold text-slate-800 dark:text-white">
                        {batch.trainer}
                      </p>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-4 gap-3 mb-4">
                    <div className="text-center p-3 bg-white dark:bg-slate-700 rounded-xl">
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Students
                      </p>
                      <p className="text-lg font-bold text-blue-600 dark:text-blue-400">
                        {batch.strength}
                      </p>
                    </div>
                    <div className="text-center p-3 bg-white dark:bg-slate-700 rounded-xl">
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Capacity
                      </p>
                      <p className="text-lg font-bold text-purple-600 dark:text-purple-400">
                        {batch.capacity}
                      </p>
                    </div>
                    <div className="text-center p-3 bg-white dark:bg-slate-700 rounded-xl">
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Avg Score
                      </p>
                      <p className="text-lg font-bold text-green-600 dark:text-green-400">
                        {batch.avgScore}%
                      </p>
                    </div>
                    <div className="text-center p-3 bg-white dark:bg-slate-700 rounded-xl">
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Progress
                      </p>
                      <p className="text-lg font-bold text-orange-600 dark:text-orange-400">
                        {batch.progress}%
                      </p>
                    </div>
                  </div>

                  {/* Capacity Bar */}
                  <div className="mb-2">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Batch Occupancy
                      </span>
                      <span className="text-xs text-slate-600 dark:text-slate-400">
                        {Math.round(strengthPercent)}%
                      </span>
                    </div>
                    <div className="relative h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${strengthPercent}%` }}
                        transition={{ duration: 1.2, delay: 0.7 + index * 0.1 }}
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
                      />
                    </div>
                  </div>

                  {/* Performance Bar */}
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Performance Score
                      </span>
                      <span className="text-xs text-slate-600 dark:text-slate-400">
                        {batch.avgScore}%
                      </span>
                    </div>
                    <div className="relative h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${avgScorePercent}%` }}
                        transition={{ duration: 1.2, delay: 0.8 + index * 0.1 }}
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-green-400 to-green-600 rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Today's Staff Schedule */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-2xl border border-slate-200 dark:border-slate-700"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-2xl font-black text-slate-800 dark:text-white mb-2">
                📅 Today's Staff Schedule
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                {dayNames[new Date().getDay()]}
              </p>
            </div>
            <Calendar className="w-8 h-8 text-blue-500" />
          </div>

          <div className="space-y-4">
            {staffSchedule.map((schedule, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-700 dark:to-slate-600 rounded-2xl p-5 hover:shadow-lg transition-all group relative overflow-hidden"
              >
                {/* Time indicator */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-indigo-500" />

                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold text-sm shadow-lg group-hover:scale-110 transition-transform">
                    {schedule.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-800 dark:text-white">
                      {schedule.name}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      {schedule.role}
                    </p>
                  </div>
                  <div
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      schedule.status === "Present"
                        ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                        : schedule.status === "On Leave"
                          ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                          : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                    }`}
                  >
                    {schedule.status}
                  </div>
                </div>

                {/* Classes today */}
                <div className="space-y-2 pl-16">
                  {schedule.classes.map((cls, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3 bg-white dark:bg-slate-700 rounded-xl"
                    >
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-slate-400" />
                        <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                          {cls.time}
                        </span>
                      </div>
                      <span className="text-sm text-slate-600 dark:text-slate-400">
                        {cls.batch}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* CLASSROOM UTILIZATION & INVENTORY STATUS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Classroom Utilization Heatmap */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-2xl border border-slate-200 dark:border-slate-700"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-2xl font-black text-slate-800 dark:text-white mb-2">
                🏢 Classroom Utilization
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Real-time space management
              </p>
            </div>
            <Grid className="w-8 h-8 text-purple-500" />
          </div>

          <div className="space-y-4">
            {classroomUtilization.map((room, index) => {
              const utilizationPercent =
                (room.hoursUsed / room.totalHours) * 100;
              const capacityPercent = room.currentOccupancy
                ? (room.currentOccupancy / room.capacity) * 100
                : 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="bg-gradient-to-r from-slate-50 to-purple-50 dark:from-slate-700 dark:to-slate-600 rounded-2xl p-5 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-3 rounded-xl ${
                          room.status === "Occupied"
                            ? "bg-gradient-to-br from-red-500 to-red-600"
                            : room.status === "Available"
                              ? "bg-gradient-to-br from-green-500 to-green-600"
                              : "bg-gradient-to-br from-yellow-500 to-yellow-600"
                        } shadow-lg`}
                      >
                        <Home className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 dark:text-white">
                          {room.roomName}
                        </h4>
                        <p className="text-xs text-slate-600 dark:text-slate-400">
                          Capacity: {room.capacity} students
                        </p>
                      </div>
                    </div>

                    <div
                      className={`px-4 py-2 rounded-xl font-bold text-sm ${
                        room.status === "Occupied"
                          ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                          : room.status === "Available"
                            ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                            : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                      }`}
                    >
                      {room.status}
                    </div>
                  </div>

                  {/* Current occupancy (if occupied) */}
                  {room.currentOccupancy && (
                    <div className="mb-3">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                          Current Occupancy
                        </span>
                        <span className="text-sm font-bold text-slate-800 dark:text-white">
                          {room.currentOccupancy}/{room.capacity}
                        </span>
                      </div>
                      <div className="relative h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${capacityPercent}%` }}
                          transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                          className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
                        />
                      </div>
                    </div>
                  )}

                  {/* Daily utilization */}
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Daily Utilization
                      </span>
                      <span className="text-sm font-bold text-slate-800 dark:text-white">
                        {room.hoursUsed}h / {room.totalHours}h
                      </span>
                    </div>
                    <div className="relative h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${utilizationPercent}%` }}
                        transition={{ duration: 1.2, delay: 0.9 + index * 0.1 }}
                        className={`absolute inset-y-0 left-0 rounded-full ${
                          utilizationPercent > 80
                            ? "bg-gradient-to-r from-green-400 to-green-600"
                            : utilizationPercent > 50
                              ? "bg-gradient-to-r from-yellow-400 to-yellow-600"
                              : "bg-gradient-to-r from-red-400 to-red-600"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Facilities */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {room.facilities.map((facility, idx) => {
                      const facilityIcons = {
                        Projector: Monitor,
                        "Wi-Fi": Wifi,
                        AC: Coffee,
                        Whiteboard: FileText,
                        Printer: Printer,
                        "Smart Board": Smartphone,
                      };
                      const Icon = facilityIcons[facility] || CheckCircle;

                      return (
                        <div
                          key={idx}
                          className="flex items-center gap-1 px-2 py-1 bg-white dark:bg-slate-700 rounded-lg"
                        >
                          <Icon className="w-3 h-3 text-indigo-500" />
                          <span className="text-xs text-slate-600 dark:text-slate-400">
                            {facility}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Inventory & Resource Status */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-2xl border border-slate-200 dark:border-slate-700"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-2xl font-black text-slate-800 dark:text-white mb-2">
                📦 Inventory Status
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Resource management
              </p>
            </div>
            <Boxes className="w-8 h-8 text-orange-500" />
          </div>

          <div className="space-y-5">
            {inventoryStatus.map((item, index) => {
              const stockPercent = (item.current / item.total) * 100;
              const isLow = stockPercent < 30;
              const isMedium = stockPercent >= 30 && stockPercent < 60;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className={`bg-gradient-to-r rounded-2xl p-6 hover:shadow-lg transition-all group ${
                    isLow
                      ? "from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20"
                      : isMedium
                        ? "from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20"
                        : "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20"
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-3 rounded-xl shadow-lg ${
                          isLow
                            ? "bg-gradient-to-br from-red-500 to-red-600"
                            : isMedium
                              ? "bg-gradient-to-br from-yellow-500 to-orange-500"
                              : "bg-gradient-to-br from-green-500 to-green-600"
                        }`}
                      >
                        <Package className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-slate-800 dark:text-white">
                          {item.item}
                        </h4>
                        <p className="text-xs text-slate-600 dark:text-slate-400">
                          Category: {item.category}
                        </p>
                      </div>
                    </div>

                    {isLow && (
                      <div className="flex items-center gap-1 px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-full text-xs font-bold animate-pulse">
                        <AlertTriangle className="w-4 h-4" />
                        Low Stock
                      </div>
                    )}
                  </div>

                  {/* Stock visualization */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                        Stock Level
                      </span>
                      <span className="text-xl font-bold text-slate-800 dark:text-white">
                        {item.current} / {item.total}
                      </span>
                    </div>
                    <div className="relative h-4 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${stockPercent}%` }}
                        transition={{ duration: 1.5, delay: 0.8 + index * 0.1 }}
                        className={`absolute inset-y-0 left-0 rounded-full ${
                          isLow
                            ? "bg-gradient-to-r from-red-400 to-red-600"
                            : isMedium
                              ? "bg-gradient-to-r from-yellow-400 to-orange-500"
                              : "bg-gradient-to-r from-green-400 to-green-600"
                        }`}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Status details */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="text-center p-3 bg-white dark:bg-slate-700 rounded-xl">
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Available
                      </p>
                      <p className="text-lg font-bold text-green-600 dark:text-green-400">
                        {item.current}
                      </p>
                    </div>
                    <div className="text-center p-3 bg-white dark:bg-slate-700 rounded-xl">
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        In Use
                      </p>
                      <p className="text-lg font-bold text-blue-600 dark:text-blue-400">
                        {item.total - item.current}
                      </p>
                    </div>
                    <div className="text-center p-3 bg-white dark:bg-slate-700 rounded-xl">
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Status
                      </p>
                      <p className="text-xs font-bold text-slate-800 dark:text-white">
                        {item.status}
                      </p>
                    </div>
                  </div>

                  {/* Action button for low stock */}
                  {isLow && (
                    <div className="mt-4">
                      <button className="w-full py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2">
                        <Plus className="w-4 h-4" />
                        Reorder {item.item}
                      </button>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* QUICK ACTIONS & ALERTS FOOTER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {/* Quick Actions */}
        <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-6 shadow-2xl text-white">
          <h3 className="text-xl font-black mb-4 flex items-center gap-2">
            <Zap className="w-6 h-6" />
            Quick Actions
          </h3>
          <div className="space-y-2">
            {[
              { icon: Plus, label: "Add New Student", color: "bg-white/20" },
              { icon: Video, label: "Start Live Class", color: "bg-white/20" },
              {
                icon: FileText,
                label: "Generate Report",
                color: "bg-white/20",
              },
              { icon: Bell, label: "Send Notification", color: "bg-white/20" },
            ].map((action, idx) => (
              <button
                key={idx}
                className="w-full flex items-center gap-3 p-3 bg-white/20 hover:bg-white/30 rounded-xl transition-all backdrop-blur-sm"
              >
                <action.icon className="w-5 h-5" />
                <span className="font-semibold">{action.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Center Statistics */}
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-2xl border border-slate-200 dark:border-slate-700">
          <h3 className="text-xl font-black text-slate-800 dark:text-white mb-4">
            📈 This Month
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-slate-600 dark:text-slate-400">
                New Enrollments
              </span>
              <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                +24
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-600 dark:text-slate-400">
                Avg Attendance
              </span>
              <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                87%
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-600 dark:text-slate-400">
                Revenue Growth
              </span>
              <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                +15%
              </span>
            </div>
          </div>
        </div>

        {/* Pending Alerts */}
        <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl p-6 shadow-2xl text-white">
          <h3 className="text-xl font-black mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6" />
            Pending Alerts
          </h3>
          <div className="space-y-3">
            <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
              <p className="text-sm font-semibold">Low inventory alert</p>
              <p className="text-xs opacity-90">Study materials running low</p>
            </div>
            <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
              <p className="text-sm font-semibold">Pending fees</p>
              <p className="text-xs opacity-90">
                8 students have pending payments
              </p>
            </div>
            <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
              <p className="text-sm font-semibold">Maintenance due</p>
              <p className="text-xs opacity-90">AC servicing scheduled today</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CenterAdminDashboard;
