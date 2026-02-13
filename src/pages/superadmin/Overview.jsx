import { useState } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import {
  Activity,
  Users,
  Building2,
  DollarSign,
  TrendingUp,
  TrendingDown,
  BookOpen,
  GraduationCap,
  Award,
  Clock,
  Calendar,
  Target,
  Zap,
  AlertCircle,
  CheckCircle,
  XCircle,
  Clock3,
  UserCheck,
  UserX,
  Briefcase,
  Layers,
  BarChart3,
  PieChart,
  LineChart,
  ArrowUpRight,
  ArrowDownRight,
  RefreshCw,
  Download,
  Filter,
} from "lucide-react";

const Overview = () => {
  const { selectedCenter } = useSelector((state) => state.auth);
  const [timeRange, setTimeRange] = useState("month");

  // System-wide metrics
  const systemMetrics = [
    {
      title: "Total Students",
      value: "3,527",
      change: "+245",
      percentage: "+7.5%",
      trend: "up",
      icon: Users,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      title: "Active Centers",
      value: "4",
      change: "+0",
      percentage: "0%",
      trend: "stable",
      icon: Building2,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50 dark:bg-green-900/20",
    },
    {
      title: "Total Revenue",
      value: "₹2.48L",
      change: "+₹48K",
      percentage: "+24%",
      trend: "up",
      icon: DollarSign,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
    },
    {
      title: "Staff Members",
      value: "68",
      change: "+4",
      percentage: "+6.2%",
      trend: "up",
      icon: Briefcase,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
    },
    {
      title: "Active Courses",
      value: "16",
      change: "+2",
      percentage: "+14%",
      trend: "up",
      icon: BookOpen,
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
    },
    {
      title: "Running Batches",
      value: "24",
      change: "+3",
      percentage: "+14%",
      trend: "up",
      icon: Layers,
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50 dark:bg-pink-900/20",
    },
    {
      title: "Avg Attendance",
      value: "89%",
      change: "+3%",
      percentage: "+3.5%",
      trend: "up",
      icon: UserCheck,
      color: "from-teal-500 to-cyan-500",
      bgColor: "bg-teal-50 dark:bg-teal-900/20",
    },
    {
      title: "Success Rate",
      value: "76%",
      change: "+4%",
      percentage: "+5.5%",
      trend: "up",
      icon: Award,
      color: "from-yellow-500 to-amber-500",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
    },
  ];

  // Center-wise distribution data
  const centerDistribution = [
    {
      name: "Delhi Center",
      students: 890,
      staff: 18,
      revenue: 58000,
      color: "from-blue-500 to-cyan-500",
      percentage: 25.2,
    },
    {
      name: "Mumbai Center",
      students: 950,
      staff: 20,
      revenue: 65000,
      color: "from-green-500 to-emerald-500",
      percentage: 26.9,
    },
    {
      name: "Bangalore Center",
      students: 845,
      staff: 16,
      revenue: 62000,
      color: "from-purple-500 to-pink-500",
      percentage: 24.0,
    },
    {
      name: "Chennai Center",
      students: 842,
      staff: 14,
      revenue: 63000,
      color: "from-orange-500 to-red-500",
      percentage: 23.9,
    },
  ];

  // Monthly trends for line chart
  const monthlyTrends = [
    {
      month: "Jan",
      students: 3100,
      revenue: 185000,
      attendance: 85,
      success: 72,
    },
    {
      month: "Feb",
      students: 3150,
      revenue: 192000,
      attendance: 86,
      success: 73,
    },
    {
      month: "Mar",
      students: 3200,
      revenue: 198000,
      attendance: 87,
      success: 74,
    },
    {
      month: "Apr",
      students: 3280,
      revenue: 210000,
      attendance: 88,
      success: 74,
    },
    {
      month: "May",
      students: 3350,
      revenue: 225000,
      attendance: 88,
      success: 75,
    },
    {
      month: "Jun",
      students: 3420,
      revenue: 238000,
      attendance: 89,
      success: 76,
    },
    {
      month: "Jul",
      students: 3527,
      revenue: 248000,
      attendance: 89,
      success: 76,
    },
  ];

  // Performance indicators
  const performanceIndicators = [
    {
      label: "Course Completion",
      value: 82,
      target: 85,
      status: "warning",
      icon: Target,
    },
    {
      label: "Student Satisfaction",
      value: 91,
      target: 90,
      status: "success",
      icon: Award,
    },
    {
      label: "Staff Efficiency",
      value: 88,
      target: 85,
      status: "success",
      icon: Zap,
    },
    {
      label: "Resource Utilization",
      value: 76,
      target: 80,
      status: "warning",
      icon: Activity,
    },
  ];

  // Recent activities
  const recentActivities = [
    {
      type: "success",
      icon: CheckCircle,
      title: "New Batch Started",
      description: "JEE Advanced Batch A - Delhi Center",
      time: "2 hours ago",
      color: "text-green-500",
    },
    {
      type: "info",
      icon: Users,
      title: "15 New Admissions",
      description: "Across all centers",
      time: "3 hours ago",
      color: "text-blue-500",
    },
    {
      type: "warning",
      icon: AlertCircle,
      title: "Revenue Target Alert",
      description: "Chennai Center - 5% below target",
      time: "5 hours ago",
      color: "text-orange-500",
    },
    {
      type: "success",
      icon: Award,
      title: "High Success Rate",
      description: "Mumbai Center achieved 95% success",
      time: "8 hours ago",
      color: "text-purple-500",
    },
    {
      type: "info",
      icon: DollarSign,
      title: "Revenue Milestone",
      description: "Crossed ₹2.4L this month",
      time: "1 day ago",
      color: "text-green-500",
    },
  ];

  // Course performance data
  const coursePerformance = [
    {
      course: "JEE Advanced",
      enrolled: 845,
      completed: 695,
      revenue: 71650,
      rating: 4.8,
    },
    {
      course: "NEET Foundation",
      enrolled: 780,
      completed: 663,
      revenue: 58500,
      rating: 4.9,
    },
    {
      course: "Class 10 CBSE",
      enrolled: 650,
      completed: 598,
      revenue: 29250,
      rating: 4.6,
    },
    {
      course: "Class 12 Science",
      enrolled: 720,
      completed: 634,
      revenue: 39600,
      rating: 4.7,
    },
    {
      course: "Foundation Maths",
      enrolled: 532,
      completed: 372,
      revenue: 18620,
      rating: 4.5,
    },
  ];

  // Quick stats
  const quickStats = [
    { label: "Today Attendance", value: "92%", change: "+2%", trend: "up" },
    { label: "Pending Queries", value: "28", change: "-5", trend: "down" },
    { label: "Active Sessions", value: "12", change: "+3", trend: "up" },
    { label: "New Enrollments", value: "8", change: "+2", trend: "up" },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold text-slate-800 dark:text-white mb-2">
            System Overview
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Complete overview of all centers and operations
          </p>
        </div>
        <div className="flex items-center gap-3">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="quarter">This Quarter</option>
            <option value="year">This Year</option>
          </select>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors"
          >
            <RefreshCw className="w-5 h-5" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-600 flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Export
          </motion.button>
        </div>
      </motion.div>

      {/* Main Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {systemMetrics.map((metric, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.03, y: -5 }}
            className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 relative overflow-hidden"
          >
            <div
              className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${metric.color} opacity-10 blur-3xl`}
            />
            <div className="relative">
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${metric.color} flex items-center justify-center`}
                >
                  <metric.icon className="w-6 h-6 text-white" />
                </div>
                {metric.trend === "up" ? (
                  <span className="flex items-center gap-1 text-green-600 dark:text-green-400 text-sm font-medium">
                    <TrendingUp className="w-4 h-4" />
                    {metric.percentage}
                  </span>
                ) : metric.trend === "down" ? (
                  <span className="flex items-center gap-1 text-red-600 dark:text-red-400 text-sm font-medium">
                    <TrendingDown className="w-4 h-4" />
                    {metric.percentage}
                  </span>
                ) : (
                  <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                    {metric.percentage}
                  </span>
                )}
              </div>
              <div className="text-3xl font-bold text-slate-800 dark:text-white mb-1">
                {metric.value}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                {metric.title}
              </div>
              <div className="text-xs font-medium text-slate-500 dark:text-slate-500">
                {metric.change} from last month
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Quick Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl p-1"
      >
        <div className="bg-white dark:bg-slate-800 rounded-xl p-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {quickStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-slate-800 dark:text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                  {stat.label}
                </div>
                <div
                  className={`text-xs font-medium ${stat.trend === "up" ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}
                >
                  {stat.change}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Center Distribution & Monthly Trends */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Center Distribution */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-slate-800 dark:text-white">
              Center Distribution
            </h2>
            <PieChart className="w-5 h-5 text-slate-400" />
          </div>

          {/* Donut Chart Visualization */}
          <div className="flex items-center justify-center mb-6">
            <div className="relative w-48 h-48">
              {centerDistribution.map((center, index) => {
                const rotation = centerDistribution
                  .slice(0, index)
                  .reduce((acc, c) => acc + c.percentage * 3.6, 0);
                return (
                  <motion.div
                    key={index}
                    className={`absolute inset-0 rounded-full`}
                    style={{
                      background: `conic-gradient(transparent ${rotation}deg, var(--tw-gradient-from) ${rotation}deg, var(--tw-gradient-to) ${rotation + center.percentage * 3.6}deg, transparent ${rotation + center.percentage * 3.6}deg)`,
                      "--tw-gradient-from": `rgb(${index === 0 ? "59 130 246" : index === 1 ? "34 197 94" : index === 2 ? "168 85 247" : "249 115 22"})`,
                      "--tw-gradient-to": `rgb(${index === 0 ? "6 182 212" : index === 1 ? "16 185 129" : index === 2 ? "236 72 153" : "239 68 68"})`,
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  />
                );
              })}
              <div className="absolute inset-8 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-800 dark:text-white">
                    3,527
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">
                    Total
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {centerDistribution.map((center, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-900"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-3 h-3 rounded-full bg-gradient-to-br ${center.color}`}
                  />
                  <div>
                    <div className="font-medium text-slate-800 dark:text-white">
                      {center.name}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      {center.students} students
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-slate-800 dark:text-white">
                    {center.percentage}%
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">
                    ₹{(center.revenue / 1000).toFixed(0)}K
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Monthly Trends */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-slate-800 dark:text-white">
              Growth Trends
            </h2>
            <LineChart className="w-5 h-5 text-slate-400" />
          </div>

          <div className="space-y-6">
            {/* Students Growth Line */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                  Student Growth
                </span>
                <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                  +13.8%
                </span>
              </div>
              <div className="flex items-end gap-2 h-24">
                {monthlyTrends.map((trend, index) => (
                  <motion.div
                    key={index}
                    className="flex-1 bg-gradient-to-t from-blue-500 to-cyan-500 rounded-t-lg relative group"
                    initial={{ height: 0 }}
                    animate={{ height: `${(trend.students / 3600) * 100}%` }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                  >
                    <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {trend.students}
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="flex justify-between mt-1">
                {monthlyTrends.map((trend, index) => (
                  <span key={index} className="text-xs text-slate-500">
                    {trend.month}
                  </span>
                ))}
              </div>
            </div>

            {/* Revenue Growth Line */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                  Revenue Growth
                </span>
                <span className="text-sm font-bold text-green-600 dark:text-green-400">
                  +34.1%
                </span>
              </div>
              <div className="flex items-end gap-2 h-24">
                {monthlyTrends.map((trend, index) => (
                  <motion.div
                    key={index}
                    className="flex-1 bg-gradient-to-t from-green-500 to-emerald-500 rounded-t-lg relative group"
                    initial={{ height: 0 }}
                    animate={{ height: `${(trend.revenue / 260000) * 100}%` }}
                    transition={{ delay: 1.0 + index * 0.1, duration: 0.5 }}
                  >
                    <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      ₹{(trend.revenue / 1000).toFixed(0)}K
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="flex justify-between mt-1">
                {monthlyTrends.map((trend, index) => (
                  <span key={index} className="text-xs text-slate-500">
                    {trend.month}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Performance Indicators */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700"
      >
        <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-6">
          Performance Indicators
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {performanceIndicators.map((indicator, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.0 + index * 0.1 }}
              className="space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <indicator.icon className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                  <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                    {indicator.label}
                  </span>
                </div>
                {indicator.status === "success" ? (
                  <CheckCircle className="w-5 h-5 text-green-500" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-orange-500" />
                )}
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-slate-800 dark:text-white">
                    {indicator.value}%
                  </span>
                  <span className="text-sm text-slate-500 dark:text-slate-400">
                    Target: {indicator.target}%
                  </span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
                  <motion.div
                    className={`h-full rounded-full ${
                      indicator.status === "success"
                        ? "bg-gradient-to-r from-green-500 to-emerald-500"
                        : "bg-gradient-to-r from-orange-500 to-amber-500"
                    }`}
                    initial={{ width: 0 }}
                    animate={{ width: `${indicator.value}%` }}
                    transition={{ delay: 1.1 + index * 0.1, duration: 1 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Course Performance & Recent Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Course Performance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-slate-800 dark:text-white">
              Course Performance
            </h2>
            <BarChart3 className="w-5 h-5 text-slate-400" />
          </div>
          <div className="space-y-4">
            {coursePerformance.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.3 + index * 0.1 }}
                className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-900/70 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <div className="font-semibold text-slate-800 dark:text-white">
                      {course.course}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      {course.enrolled} enrolled • {course.completed} completed
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-slate-800 dark:text-white">
                      ₹{(course.revenue / 1000).toFixed(0)}K
                    </div>
                    <div className="flex items-center gap-1 text-yellow-500">
                      <Award className="w-3 h-3" />
                      <span className="text-sm">{course.rating}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={{
                        width: `${(course.completed / course.enrolled) * 100}%`,
                      }}
                      transition={{ delay: 1.4 + index * 0.1, duration: 1 }}
                    />
                  </div>
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400">
                    {Math.round((course.completed / course.enrolled) * 100)}%
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Recent Activities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-slate-800 dark:text-white">
              Recent Activities
            </h2>
            <Activity className="w-5 h-5 text-slate-400" />
          </div>
          <div className="space-y-3">
            {recentActivities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.3 + index * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-900/70 transition-colors"
              >
                <activity.icon
                  className={`w-5 h-5 ${activity.color} flex-shrink-0 mt-0.5`}
                />
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-slate-800 dark:text-white mb-1">
                    {activity.title}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                    {activity.description}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-500">
                    <Clock3 className="w-3 h-3" />
                    {activity.time}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Overview;
