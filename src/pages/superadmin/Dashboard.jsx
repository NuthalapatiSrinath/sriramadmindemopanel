import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  Globe,
  BarChart3,
  PieChart,
  LineChart,
  ArrowUpRight,
  ArrowDownRight,
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
  EyeOff,
  ThumbsUp,
  MessageSquare,
  GraduationCap,
  Trophy,
  Briefcase,
  Heart,
  Shield,
  Sparkles,
} from "lucide-react";
import { superAdminStats } from "../../data/superAdminData";

const SuperAdminDashboard = () => {
  const [timeRange, setTimeRange] = useState("week");
  const [selectedMetric, setSelectedMetric] = useState("all");
  const [showDetails, setShowDetails] = useState(false);
  const {
    globalMetrics,
    centerPerformance,
    revenueByMonth,
    coursePopularity,
    staffPerformance,
    studentDemographics,
    examSuccessRate,
    recentActivities,
  } = superAdminStats;

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
    if (amount >= 10000000) return `₹${(amount / 10000000).toFixed(2)}Cr`;
    if (amount >= 100000) return `₹${(amount / 100000).toFixed(2)}L`;
    if (amount >= 1000) return `₹${(amount / 1000).toFixed(2)}K`;
    return `₹${amount}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 p-4 sm:p-6 space-y-4 sm:space-y-6 overflow-x-hidden w-full max-w-full">
      {/* HEADER SECTION WITH ANIMATIONS */}
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
            className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-tr from-blue-400/30 to-indigo-400/30 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden">
          <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-32 sm:w-48 h-32 sm:h-48 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-4"
                >
                  <Shield className="w-4 h-4 text-white" />
                  <span className="text-white text-sm font-semibold">
                    Super Admin Dashboard
                  </span>
                  <Sparkles className="w-4 h-4 text-yellow-300 animate-pulse" />
                </motion.div>

                <h1 className="text-4xl md:text-5xl font-black text-white mb-3 tracking-tight">
                  Welcome to Command Center 🚀
                </h1>
                <p className="text-indigo-100 text-lg max-w-2xl">
                  Manage all centers, monitor performance, and make data-driven
                  decisions across
                  <span className="font-bold text-white">
                    {" "}
                    {globalMetrics.totalCenters} centers
                  </span>{" "}
                  with
                  <span className="font-bold text-white">
                    {" "}
                    {globalMetrics.totalStudents.toLocaleString()} students
                  </span>
                </p>
              </div>

              {/* Quick Action Buttons */}
              <div className="flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-white text-indigo-600 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all"
                >
                  <Download className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, rotate: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-white/20 backdrop-blur-sm text-white font-bold rounded-xl border border-white/30 hover:bg-white/30 transition-all"
                >
                  <RefreshCw className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-white/20 backdrop-blur-sm text-white font-bold rounded-xl border border-white/30 hover:bg-white/30 transition-all flex items-center gap-2"
                >
                  <Settings className="w-5 h-5" />
                  <span className="hidden md:inline">Settings</span>
                </motion.button>
              </div>
            </div>

            {/* Live Stats Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {[
                {
                  icon: Activity,
                  label: "Active Now",
                  value: globalMetrics.dailyActiveUsers,
                  color: "bg-green-500",
                },
                {
                  icon: TrendingUp,
                  label: "Growth",
                  value: `+${globalMetrics.monthlyGrowth}%`,
                  color: "bg-blue-500",
                },
                {
                  icon: Star,
                  label: "Rating",
                  value: globalMetrics.averageRating,
                  color: "bg-yellow-500",
                },
                {
                  icon: Target,
                  label: "Conversion",
                  value: `${globalMetrics.conversionRate}%`,
                  color: "bg-purple-500",
                },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:bg-white/20 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`${stat.color} p-2 rounded-lg group-hover:scale-110 transition-transform`}
                    >
                      <stat.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white/70 text-xs">{stat.label}</p>
                      <p className="text-white text-xl font-bold">
                        {stat.value}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* MAIN METRICS GRID - 8 CARDS WITH RICH GRAPHS */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {[
          {
            icon: Building2,
            label: "Total Centers",
            value: globalMetrics.totalCenters,
            change: "+1 this year",
            color: "from-blue-500 to-blue-600",
            bgColor: "bg-blue-50 dark:bg-blue-900/20",
            iconColor: "text-blue-600 dark:text-blue-400",
            trend: [3, 3, 4, 4, 4, 4, 4],
            type: "bar",
          },
          {
            icon: Users,
            label: "Total Students",
            value: globalMetrics.totalStudents.toLocaleString(),
            change: `+${globalMetrics.monthlyGrowth}% growth`,
            color: "from-indigo-500 to-indigo-600",
            bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
            iconColor: "text-indigo-600 dark:text-indigo-400",
            trend: [2890, 3050, 3120, 3280, 3420, 3580, 3527],
            type: "area",
          },
          {
            icon: DollarSign,
            label: "Total Revenue",
            value: formatCurrency(globalMetrics.totalRevenue),
            change: "+18.5% increase",
            color: "from-green-500 to-green-600",
            bgColor: "bg-green-50 dark:bg-green-900/20",
            iconColor: "text-green-600 dark:text-green-400",
            trend: [185000, 195000, 205000, 215000, 228000, 235000, 248000],
            type: "area",
          },
          {
            icon: GraduationCap,
            label: "Active Courses",
            value: globalMetrics.activeCourses,
            change: "4 new this month",
            color: "from-purple-500 to-purple-600",
            bgColor: "bg-purple-50 dark:bg-purple-900/20",
            iconColor: "text-purple-600 dark:text-purple-400",
            trend: [12, 13, 13, 14, 15, 16, 16],
            type: "line",
          },
          {
            icon: Briefcase,
            label: "Total Staff",
            value: globalMetrics.totalStaff,
            change: "3 joined recently",
            color: "from-orange-500 to-orange-600",
            bgColor: "bg-orange-50 dark:bg-orange-900/20",
            iconColor: "text-orange-600 dark:text-orange-400",
            trend: [62, 64, 65, 66, 67, 68, 68],
            type: "bar",
          },
          {
            icon: MessageSquare,
            label: "Total Enquiries",
            value: globalMetrics.totalEnquiries.toLocaleString(),
            change: "245 pending",
            color: "from-pink-500 to-pink-600",
            bgColor: "bg-pink-50 dark:bg-pink-900/20",
            iconColor: "text-pink-600 dark:text-pink-400",
            trend: [1200, 1350, 1420, 1580, 1690, 1820, 1950],
            type: "area",
          },
          {
            icon: Trophy,
            label: "Success Rate",
            value: `${globalMetrics.conversionRate}%`,
            change: "Industry leading",
            color: "from-yellow-500 to-yellow-600",
            bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
            iconColor: "text-yellow-600 dark:text-yellow-400",
            trend: [72, 74, 75, 76, 78, 78, 76],
            type: "line",
          },
          {
            icon: Star,
            label: "Average Rating",
            value: globalMetrics.averageRating,
            change: "4.5K+ reviews",
            color: "from-red-500 to-red-600",
            bgColor: "bg-red-50 dark:bg-red-900/20",
            iconColor: "text-red-600 dark:text-red-400",
            trend: [4.5, 4.6, 4.6, 4.7, 4.7, 4.8, 4.8],
            type: "area",
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

                {/* Header with Icon and Trend Badge */}
                <div className="flex items-start justify-between mb-4 relative z-10">
                  <div
                    className={`${metric.bgColor} p-3 rounded-xl group-hover:scale-110 transition-transform duration-300 relative`}
                  >
                    <metric.icon className={`w-6 h-6 ${metric.iconColor}`} />
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-green-400 to-green-500 rounded-full animate-pulse" />
                  </div>
                  <div className="p-2 bg-green-50 dark:bg-green-900/20 rounded-lg group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-4 h-4 text-green-500" />
                  </div>
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
                      <ArrowUpRight className="w-3 h-3 text-green-500" />
                    ) : metric.change.includes("-") ? (
                      <ArrowDownRight className="w-3 h-3 text-red-500" />
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
                          id={`grad-super-${index}`}
                          x1="0"
                          x2="0"
                          y1="0"
                          y2="1"
                        >
                          <stop
                            offset="0%"
                            className="stop-color"
                            style={{
                              stopColor: metric.iconColor.includes("blue")
                                ? "#3b82f6"
                                : metric.iconColor.includes("indigo")
                                  ? "#6366f1"
                                  : metric.iconColor.includes("green")
                                    ? "#10b981"
                                    : metric.iconColor.includes("pink")
                                      ? "#ec4899"
                                      : metric.iconColor.includes("red")
                                        ? "#ef4444"
                                        : "#6366f1",
                            }}
                            stopOpacity="0.3"
                          />
                          <stop
                            offset="100%"
                            className="stop-color"
                            style={{
                              stopColor: metric.iconColor.includes("blue")
                                ? "#3b82f6"
                                : metric.iconColor.includes("indigo")
                                  ? "#6366f1"
                                  : metric.iconColor.includes("green")
                                    ? "#10b981"
                                    : metric.iconColor.includes("pink")
                                      ? "#ec4899"
                                      : metric.iconColor.includes("red")
                                        ? "#ef4444"
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
                        fill={`url(#grad-super-${index})`}
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
                          metric.iconColor.includes("blue")
                            ? "#3b82f6"
                            : metric.iconColor.includes("indigo")
                              ? "#6366f1"
                              : metric.iconColor.includes("green")
                                ? "#10b981"
                                : metric.iconColor.includes("pink")
                                  ? "#ec4899"
                                  : metric.iconColor.includes("red")
                                    ? "#ef4444"
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
                            : metric.iconColor.includes("yellow")
                              ? "#eab308"
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
                            metric.iconColor.includes("purple")
                              ? "#a855f7"
                              : metric.iconColor.includes("yellow")
                                ? "#eab308"
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

      {/* CENTER PERFORMANCE COMPARISON - HORIZONTAL BAR CHARTS */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-2xl border border-slate-200 dark:border-slate-700"
      >
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-black text-slate-800 dark:text-white mb-2">
              📊 Center Performance Dashboard
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Comprehensive comparison across all centers
            </p>
          </div>

          {/* Filter buttons */}
          <div className="flex gap-2">
            {["Revenue", "Students", "Growth", "Rating"].map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedMetric(filter.toLowerCase())}
                className={`px-4 py-2 rounded-xl font-semibold text-sm transition-all ${
                  selectedMetric === filter.toLowerCase()
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
                    : "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {centerPerformance.map((center, index) => {
            const maxRevenue = Math.max(
              ...centerPerformance.map((c) => c.revenue),
            );
            const revenuePercent = (center.revenue / maxRevenue) * 100;
            const maxStudents = Math.max(
              ...centerPerformance.map((c) => c.students),
            );
            const studentPercent = (center.students / maxStudents) * 100;

            return (
              <motion.div
                key={center.id}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-r from-slate-50 to-indigo-50 dark:from-slate-700 dark:to-slate-600 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-600">
                  {/* Center Name and Quick Stats */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                        {center.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                          {center.name}
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          {center.students} students • {center.staff} staff
                        </p>
                      </div>
                    </div>

                    {/* Quick metrics */}
                    <div className="flex gap-4">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                          +{center.growth}%
                        </p>
                        <p className="text-xs text-slate-500">Growth</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-yellow-600 dark:text-yellow-400 flex items-center gap-1">
                          <Star className="w-5 h-5 fill-current" />
                          {center.satisfaction}
                        </p>
                        <p className="text-xs text-slate-500">Rating</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                          {center.conversion}%
                        </p>
                        <p className="text-xs text-slate-500">Conversion</p>
                      </div>
                    </div>
                  </div>

                  {/* Revenue Bar Chart */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                        Revenue
                      </span>
                      <span className="text-lg font-bold text-slate-800 dark:text-white">
                        {formatCurrency(center.revenue)}
                      </span>
                    </div>
                    <div className="relative h-4 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${revenuePercent}%` }}
                        transition={{
                          duration: 1.5,
                          delay: 0.5 + index * 0.1,
                          ease: "easeOut",
                        }}
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-green-400 via-green-500 to-green-600 rounded-full shadow-lg"
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Students Bar Chart */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                        Student Enrollment
                      </span>
                      <span className="text-lg font-bold text-slate-800 dark:text-white">
                        {center.students}
                      </span>
                    </div>
                    <div className="relative h-4 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${studentPercent}%` }}
                        transition={{
                          duration: 1.5,
                          delay: 0.6 + index * 0.1,
                          ease: "easeOut",
                        }}
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-full shadow-lg"
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Financial Breakdown */}
                  <div className="grid grid-cols-3 gap-4 mt-6 pt-4 border-t border-slate-200 dark:border-slate-600">
                    <div className="text-center p-3 bg-white dark:bg-slate-700 rounded-xl">
                      <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                        Profit
                      </p>
                      <p className="text-lg font-bold text-green-600 dark:text-green-400">
                        {formatCurrency(center.profit)}
                      </p>
                    </div>
                    <div className="text-center p-3 bg-white dark:bg-slate-700 rounded-xl">
                      <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                        Expenses
                      </p>
                      <p className="text-lg font-bold text-red-600 dark:text-red-400">
                        {formatCurrency(center.expenses)}
                      </p>
                    </div>
                    <div className="text-center p-3 bg-white dark:bg-slate-700 rounded-xl">
                      <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                        Pending
                      </p>
                      <p className="text-lg font-bold text-yellow-600 dark:text-yellow-400">
                        {formatCurrency(center.pending)}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* REVENUE TRENDS & COURSE POPULARITY */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Multi-line Revenue Chart */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-2xl border border-slate-200 dark:border-slate-700"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-2xl font-black text-slate-800 dark:text-white mb-2">
                📈 Revenue Trends
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Monthly revenue by center
              </p>
            </div>
            <select className="px-4 py-2 bg-slate-100 dark:bg-slate-700 rounded-xl font-semibold text-sm">
              <option>Last 7 Months</option>
              <option>Last 6 Months</option>
              <option>Last Year</option>
            </select>
          </div>

          <div className="space-y-6">
            {revenueByMonth.slice(0, 7).map((month, index) => {
              const total =
                month.delhi + month.mumbai + month.bangalore + month.chennai;
              const maxTotal = Math.max(
                ...revenueByMonth.map(
                  (m) => m.delhi + m.mumbai + m.bangalore + m.chennai,
                ),
              );
              const percentage = (total / maxTotal) * 100;

              return (
                <div key={index} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-700 dark:text-slate-300 min-w-[60px]">
                      {month.month}
                    </span>
                    <span className="text-xl font-black text-slate-800 dark:text-white">
                      {formatCurrency(total)}
                    </span>
                  </div>

                  {/* Stacked bar showing center contribution */}
                  <div className="relative h-8 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{
                        width: `${(month.delhi / total) * percentage}%`,
                      }}
                      transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-400 to-blue-500"
                      title="Delhi"
                    />
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{
                        width: `${(month.mumbai / total) * percentage}%`,
                      }}
                      transition={{ duration: 1, delay: 0.7 + index * 0.1 }}
                      className="absolute inset-y-0 bg-gradient-to-r from-purple-400 to-purple-500"
                      style={{ left: `${(month.delhi / total) * percentage}%` }}
                      title="Mumbai"
                    />
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{
                        width: `${(month.bangalore / total) * percentage}%`,
                      }}
                      transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                      className="absolute inset-y-0 bg-gradient-to-r from-green-400 to-green-500"
                      style={{
                        left: `${((month.delhi + month.mumbai) / total) * percentage}%`,
                      }}
                      title="Bangalore"
                    />
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{
                        width: `${(month.chennai / total) * percentage}%`,
                      }}
                      transition={{ duration: 1, delay: 0.9 + index * 0.1 }}
                      className="absolute inset-y-0 bg-gradient-to-r from-orange-400 to-orange-500"
                      style={{
                        left: `${((month.delhi + month.mumbai + month.bangalore) / total) * percentage}%`,
                      }}
                      title="Chennai"
                    />
                  </div>

                  {/* Center breakdown */}
                  <div className="grid grid-cols-4 gap-2 text-xs">
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded-full bg-blue-500" />
                      <span className="text-slate-600 dark:text-slate-400">
                        {formatCurrency(month.delhi)}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded-full bg-purple-500" />
                      <span className="text-slate-600 dark:text-slate-400">
                        {formatCurrency(month.mumbai)}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                      <span className="text-slate-600 dark:text-slate-400">
                        {formatCurrency(month.bangalore)}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded-full bg-orange-500" />
                      <span className="text-slate-600 dark:text-slate-400">
                        {formatCurrency(month.chennai)}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Legend */}
          <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700 grid grid-cols-4 gap-4">
            {[
              { name: "Delhi", color: "bg-blue-500" },
              { name: "Mumbai", color: "bg-purple-500" },
              { name: "Bangalore", color: "bg-green-500" },
              { name: "Chennai", color: "bg-orange-500" },
            ].map((center) => (
              <div key={center.name} className="flex items-center gap-2">
                <div className={`w-4 h-4 rounded-full ${center.color}`} />
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  {center.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Course Popularity */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-2xl border border-slate-200 dark:border-slate-700"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-2xl font-black text-slate-800 dark:text-white mb-2">
                🎓 Course Popularity
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Top performing courses
              </p>
            </div>
            <button className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all">
              View All
            </button>
          </div>

          <div className="space-y-5">
            {coursePopularity.map((course, index) => {
              const maxStudents = Math.max(
                ...coursePopularity.map((c) => c.students),
              );
              const percentage = (course.students / maxStudents) * 100;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="bg-gradient-to-r from-slate-50 to-indigo-50 dark:from-slate-700 dark:to-slate-600 rounded-2xl p-5 hover:shadow-lg transition-all group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold shadow-lg group-hover:scale-110 transition-transform">
                        #{index + 1}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 dark:text-white">
                          {course.course}
                        </h4>
                        <p className="text-xs text-slate-600 dark:text-slate-400">
                          {course.students} students enrolled
                        </p>
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="text-lg font-bold text-green-600 dark:text-green-400">
                        {formatCurrency(course.revenue)}
                      </p>
                      <div className="flex items-center gap-1 justify-end">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                          {course.rating}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="relative h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${percentage}%` }}
                      transition={{ duration: 1.2, delay: 0.7 + index * 0.1 }}
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 rounded-full"
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse" />
                    </motion.div>
                  </div>

                  {/* Additional stats */}
                  <div className="grid grid-cols-3 gap-3 mt-4">
                    <div className="text-center p-2 bg-white dark:bg-slate-700 rounded-lg">
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Enrolled
                      </p>
                      <p className="text-sm font-bold text-slate-800 dark:text-white">
                        {course.students}
                      </p>
                    </div>
                    <div className="text-center p-2 bg-white dark:bg-slate-700 rounded-lg">
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Revenue
                      </p>
                      <p className="text-sm font-bold text-green-600 dark:text-green-400">
                        {formatCurrency(course.revenue)}
                      </p>
                    </div>
                    <div className="text-center p-2 bg-white dark:bg-slate-700 rounded-lg">
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Rating
                      </p>
                      <p className="text-sm font-bold text-yellow-600 dark:text-yellow-400">
                        {course.rating}/5.0
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* STAFF PERFORMANCE & STUDENT DEMOGRAPHICS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Staff Performance Leaderboard */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-2xl border border-slate-200 dark:border-slate-700"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-2xl font-black text-slate-800 dark:text-white mb-2">
                👨‍🏫 Top Faculty Performance
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Based on ratings and engagement
              </p>
            </div>
            <Trophy className="w-8 h-8 text-yellow-500" />
          </div>

          <div className="space-y-4">
            {staffPerformance.map((staff, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="relative bg-gradient-to-r from-slate-50 to-indigo-50 dark:from-slate-700 dark:to-slate-600 rounded-2xl p-5 hover:shadow-lg transition-all group overflow-hidden"
              >
                {/* Rank badge */}
                <div
                  className={`absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center font-black text-lg shadow-lg ${
                    index === 0
                      ? "bg-gradient-to-br from-yellow-400 to-yellow-500 text-white"
                      : index === 1
                        ? "bg-gradient-to-br from-slate-400 to-slate-500 text-white"
                        : "bg-gradient-to-br from-orange-400 to-orange-500 text-white"
                  }`}
                >
                  #{index + 1}
                </div>

                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform">
                    {staff.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg text-slate-800 dark:text-white">
                      {staff.name}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {staff.center}
                    </p>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="text-center p-3 bg-white dark:bg-slate-700 rounded-xl">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <p className="text-lg font-bold text-slate-800 dark:text-white">
                        {staff.rating}
                      </p>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Rating
                    </p>
                  </div>
                  <div className="text-center p-3 bg-white dark:bg-slate-700 rounded-xl">
                    <p className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-1">
                      {staff.students}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Students
                    </p>
                  </div>
                  <div className="text-center p-3 bg-white dark:bg-slate-700 rounded-xl">
                    <p className="text-lg font-bold text-purple-600 dark:text-purple-400 mb-1">
                      {staff.classes}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Classes
                    </p>
                  </div>
                </div>

                {/* Performance bar */}
                <div className="relative h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(staff.rating / 5) * 100}%` }}
                    transition={{ duration: 1.5, delay: 0.8 + index * 0.1 }}
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-green-400 to-green-600 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Student Demographics & Exam Success */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="space-y-6"
        >
          {/* Demographics Pie Chart */}
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-2xl border border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-black text-slate-800 dark:text-white mb-1">
                  👥 Student Demographics
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Age distribution
                </p>
              </div>
              <PieChart className="w-6 h-6 text-indigo-500" />
            </div>

            <div className="space-y-3">
              {studentDemographics.map((demo, index) => {
                const colors = [
                  "from-blue-500 to-blue-600",
                  "from-purple-500 to-purple-600",
                  "from-pink-500 to-pink-600",
                  "from-orange-500 to-orange-600",
                ];

                return (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                        {demo.ageGroup}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-slate-600 dark:text-slate-400">
                          {demo.count} students
                        </span>
                        <span className="text-lg font-bold text-slate-800 dark:text-white">
                          {demo.percentage}%
                        </span>
                      </div>
                    </div>
                    <div className="relative h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${demo.percentage}%` }}
                        transition={{ duration: 1.2, delay: 0.7 + index * 0.1 }}
                        className={`absolute inset-y-0 left-0 bg-gradient-to-r ${colors[index]} rounded-full shadow-lg`}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse" />
                      </motion.div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Exam Success Rate */}
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-2xl border border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-black text-slate-800 dark:text-white mb-1">
                  🎯 Exam Success Rate
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Pass percentages
                </p>
              </div>
              <Target className="w-6 h-6 text-green-500" />
            </div>

            <div className="space-y-4">
              {examSuccessRate.map((exam, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-slate-50 to-green-50 dark:from-slate-700 dark:to-green-900/20 rounded-xl p-4"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-slate-800 dark:text-white text-sm">
                      {exam.exam}
                    </h4>
                    <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                      {exam.rate}%
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-slate-600 dark:text-slate-400 mb-2">
                    <span>Appeared: {exam.appeared}</span>
                    <span>Passed: {exam.passed}</span>
                  </div>
                  <div className="relative h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${exam.rate}%` }}
                      transition={{ duration: 1.5, delay: 0.8 + index * 0.1 }}
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-green-400 to-green-600 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* RECENT ACTIVITIES & NOTIFICATIONS */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-2xl border border-slate-200 dark:border-slate-700"
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-2xl font-black text-slate-800 dark:text-white mb-2">
              🔔 Recent Activities & Alerts
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Stay updated with system activity
            </p>
          </div>
          <button className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all flex items-center gap-2">
            <Bell className="w-4 h-4" />
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {recentActivities.map((activity, index) => {
            const statusColors = {
              success: "from-green-500 to-green-600",
              pending: "from-yellow-500 to-yellow-600",
              info: "from-blue-500 to-blue-600",
            };

            const statusIcons = {
              success: CheckCircle,
              pending: Clock,
              info: AlertCircle,
            };

            const Icon = statusIcons[activity.status];

            return (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="bg-gradient-to-r from-slate-50 to-indigo-50 dark:from-slate-700 dark:to-slate-600 rounded-2xl p-5 hover:shadow-lg transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-br ${statusColors[activity.status]} shadow-lg group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-800 dark:text-white mb-1">
                      {activity.type}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                      {activity.action}
                    </p>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-slate-400" />
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        {activity.time}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* FOOTER STATS - QUICK OVERVIEW */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"
      >
        {[
          {
            icon: Globe,
            label: "Countries",
            value: "3",
            color: "from-blue-500 to-blue-600",
          },
          {
            icon: Video,
            label: "Live Classes",
            value: "12",
            color: "from-purple-500 to-purple-600",
          },
          {
            icon: FileText,
            label: "Resources",
            value: "2.4K",
            color: "from-pink-500 to-pink-600",
          },
          {
            icon: Heart,
            label: "Satisfaction",
            value: "96%",
            color: "from-red-500 to-red-600",
          },
          {
            icon: Zap,
            label: "Uptime",
            value: "99.9%",
            color: "from-yellow-500 to-yellow-600",
          },
          {
            icon: Shield,
            label: "Security",
            value: "A+",
            color: "from-green-500 to-green-600",
          },
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9 + index * 0.05 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all group"
          >
            <div
              className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} shadow-lg mb-3 group-hover:scale-110 transition-transform`}
            >
              <stat.icon className="w-6 h-6 text-white" />
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-1 font-medium">
              {stat.label}
            </p>
            <p className="text-2xl font-black text-slate-800 dark:text-white">
              {stat.value}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SuperAdminDashboard;
