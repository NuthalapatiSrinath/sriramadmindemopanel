import { useState } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import {
  Building2,
  TrendingUp,
  TrendingDown,
  Users,
  DollarSign,
  Award,
  Target,
  Activity,
  BarChart3,
  LineChart,
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail,
  Zap,
  AlertCircle,
  CheckCircle,
  ArrowUpRight,
  ArrowDownRight,
  Filter,
  Download,
  RefreshCw,
  Star,
  ThumbsUp,
  Briefcase,
  BookOpen,
  GraduationCap,
  Layers,
  PieChart,
  Grid,
  Maximize2,
} from "lucide-react";

const CentersPerformance = () => {
  const { selectedCenter } = useSelector((state) => state.auth);
  const [viewMode, setViewMode] = useState("detailed"); // detailed, compact
  const [sortBy, setSortBy] = useState("performance");
  const [timeRange, setTimeRange] = useState("month");

  // Comprehensive center performance data
  const centersData = [
    {
      name: "Delhi Center",
      location: "Connaught Place, Delhi",
      manager: "Rajesh Sharma",
      email: "delhi@sriram.com",
      phone: "+91 11 2345 6789",
      established: "2018",
      color: "from-blue-500 to-cyan-500",

      // Core Metrics
      students: { current: 890, target: 1000, previous: 820, growth: 8.5 },
      staff: { current: 18, target: 20, utilization: 90 },
      revenue: { current: 58000, target: 65000, previous: 48000, growth: 20.8 },

      // Performance Metrics
      attendance: { current: 92, target: 90, previous: 89, trend: "up" },
      satisfaction: { current: 4.6, target: 4.5, previous: 4.4 },
      successRate: { current: 85, target: 80, previous: 82 },
      completion: { current: 78, target: 75, previous: 74 },

      // Operational Metrics
      classroomUtilization: 88,
      resourceEfficiency: 85,
      staffPerformance: 92,
      queryResolution: 94,

      // Financial
      profitMargin: 35,
      costPerStudent: 6517,
      avgFeePaid: 9200,

      // Courses
      activeCourses: 12,
      activeBatches: 16,

      // Month-wise performance
      monthlyPerformance: [
        { month: "Jan", score: 78, students: 820, revenue: 48000 },
        { month: "Feb", score: 80, students: 835, revenue: 50000 },
        { month: "Mar", score: 82, students: 850, revenue: 52000 },
        { month: "Apr", score: 83, students: 860, revenue: 53500 },
        { month: "May", score: 84, students: 870, revenue: 55000 },
        { month: "Jun", score: 85, students: 880, revenue: 56500 },
        { month: "Jul", score: 85, students: 890, revenue: 58000 },
      ],
    },
    {
      name: "Mumbai Center",
      location: "Andheri West, Mumbai",
      manager: "Priya Patel",
      email: "mumbai@sriram.com",
      phone: "+91 22 3456 7890",
      established: "2019",
      color: "from-green-500 to-emerald-500",

      students: { current: 950, target: 1000, previous: 850, growth: 11.8 },
      staff: { current: 20, target: 22, utilization: 91 },
      revenue: { current: 65000, target: 70000, previous: 52000, growth: 25.0 },

      attendance: { current: 95, target: 90, previous: 92, trend: "up" },
      satisfaction: { current: 4.9, target: 4.5, previous: 4.7 },
      successRate: { current: 90, target: 85, previous: 87 },
      completion: { current: 85, target: 80, previous: 82 },

      classroomUtilization: 95,
      resourceEfficiency: 92,
      staffPerformance: 95,
      queryResolution: 97,

      profitMargin: 38,
      costPerStudent: 6316,
      avgFeePaid: 10200,

      activeCourses: 14,
      activeBatches: 18,

      monthlyPerformance: [
        { month: "Jan", score: 82, students: 850, revenue: 52000 },
        { month: "Feb", score: 84, students: 870, revenue: 55000 },
        { month: "Mar", score: 86, students: 890, revenue: 58000 },
        { month: "Apr", score: 88, students: 905, revenue: 60000 },
        { month: "May", score: 89, students: 920, revenue: 62000 },
        { month: "Jun", score: 89, students: 935, revenue: 63500 },
        { month: "Jul", score: 90, students: 950, revenue: 65000 },
      ],
    },
    {
      name: "Bangalore Center",
      location: "Koramangala, Bangalore",
      manager: "Suresh Kumar",
      email: "bangalore@sriram.com",
      phone: "+91 80 4567 8901",
      established: "2020",
      color: "from-purple-500 to-pink-500",

      students: { current: 845, target: 900, previous: 780, growth: 8.3 },
      staff: { current: 16, target: 18, utilization: 89 },
      revenue: { current: 62000, target: 65000, previous: 50000, growth: 24.0 },

      attendance: { current: 88, target: 90, previous: 86, trend: "up" },
      satisfaction: { current: 4.5, target: 4.5, previous: 4.3 },
      successRate: { current: 88, target: 85, previous: 85 },
      completion: { current: 82, target: 80, previous: 80 },

      classroomUtilization: 92,
      resourceEfficiency: 88,
      staffPerformance: 90,
      queryResolution: 92,

      profitMargin: 34,
      costPerStudent: 6627,
      avgFeePaid: 10000,

      activeCourses: 11,
      activeBatches: 14,

      monthlyPerformance: [
        { month: "Jan", score: 80, students: 780, revenue: 50000 },
        { month: "Feb", score: 81, students: 795, revenue: 52000 },
        { month: "Mar", score: 82, students: 805, revenue: 54000 },
        { month: "Apr", score: 83, students: 815, revenue: 56000 },
        { month: "May", score: 86, students: 825, revenue: 58000 },
        { month: "Jun", score: 87, students: 835, revenue: 60000 },
        { month: "Jul", score: 88, students: 845, revenue: 62000 },
      ],
    },
    {
      name: "Chennai Center",
      location: "T. Nagar, Chennai",
      manager: "Lakshmi Devi",
      email: "chennai@sriram.com",
      phone: "+91 44 5678 9012",
      established: "2020",
      color: "from-orange-500 to-red-500",

      students: { current: 842, target: 900, previous: 775, growth: 8.6 },
      staff: { current: 14, target: 16, utilization: 88 },
      revenue: { current: 63000, target: 68000, previous: 51000, growth: 23.5 },

      attendance: { current: 90, target: 90, previous: 88, trend: "stable" },
      satisfaction: { current: 4.4, target: 4.5, previous: 4.2 },
      successRate: { current: 82, target: 85, previous: 80 },
      completion: { current: 80, target: 80, previous: 78 },

      classroomUtilization: 85,
      resourceEfficiency: 83,
      staffPerformance: 88,
      queryResolution: 90,

      profitMargin: 33,
      costPerStudent: 6706,
      avgFeePaid: 10000,

      activeCourses: 10,
      activeBatches: 13,

      monthlyPerformance: [
        { month: "Jan", score: 75, students: 775, revenue: 51000 },
        { month: "Feb", score: 77, students: 790, revenue: 53000 },
        { month: "Mar", score: 78, students: 800, revenue: 55000 },
        { month: "Apr", score: 79, students: 810, revenue: 57000 },
        { month: "May", score: 80, students: 820, revenue: 59000 },
        { month: "Jun", score: 81, students: 830, revenue: 61000 },
        { month: "Jul", score: 82, students: 842, revenue: 63000 },
      ],
    },
  ];

  // Calculate rankings
  const rankedCenters = [...centersData].sort((a, b) => {
    switch (sortBy) {
      case "performance":
        return b.successRate.current - a.successRate.current;
      case "revenue":
        return b.revenue.current - a.revenue.current;
      case "students":
        return b.students.current - a.students.current;
      case "satisfaction":
        return b.satisfaction.current - a.satisfaction.current;
      default:
        return 0;
    }
  });

  // Overall stats
  const overallStats = {
    totalStudents: centersData.reduce((sum, c) => sum + c.students.current, 0),
    totalRevenue: centersData.reduce((sum, c) => sum + c.revenue.current, 0),
    avgAttendance: Math.round(
      centersData.reduce((sum, c) => sum + c.attendance.current, 0) /
        centersData.length,
    ),
    avgSatisfaction: (
      centersData.reduce((sum, c) => sum + c.satisfaction.current, 0) /
      centersData.length
    ).toFixed(1),
    avgSuccessRate: Math.round(
      centersData.reduce((sum, c) => sum + c.successRate.current, 0) /
        centersData.length,
    ),
  };

  // Performance categories
  const performanceCategories = [
    {
      name: "Academic Excellence",
      key: "successRate",
      icon: Award,
      color: "from-yellow-500 to-amber-500",
    },
    {
      name: "Student Satisfaction",
      key: "satisfaction",
      icon: ThumbsUp,
      color: "from-pink-500 to-rose-500",
    },
    {
      name: "Attendance Rate",
      key: "attendance",
      icon: CheckCircle,
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "Course Completion",
      key: "completion",
      icon: Target,
      color: "from-blue-500 to-cyan-500",
    },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between flex-wrap gap-4"
      >
        <div>
          <h1 className="text-3xl font-bold text-slate-800 dark:text-white mb-2">
            Centers Performance
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Detailed performance analytics and metrics for all centers
          </p>
        </div>
        <div className="flex items-center gap-3 flex-wrap">
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
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="performance">By Performance</option>
            <option value="revenue">By Revenue</option>
            <option value="students">By Students</option>
            <option value="satisfaction">By Satisfaction</option>
          </select>
          <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 rounded-xl p-1">
            <button
              onClick={() => setViewMode("detailed")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                viewMode === "detailed"
                  ? "bg-white dark:bg-slate-700 text-slate-800 dark:text-white shadow"
                  : "text-slate-600 dark:text-slate-400"
              }`}
            >
              <Maximize2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode("compact")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                viewMode === "compact"
                  ? "bg-white dark:bg-slate-700 text-slate-800 dark:text-white shadow"
                  : "text-slate-600 dark:text-slate-400"
              }`}
            >
              <Grid className="w-4 h-4" />
            </button>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Export
          </motion.button>
        </div>
      </motion.div>

      {/* Overall Stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-6 text-white"
        >
          <Users className="w-8 h-8 mb-3 opacity-80" />
          <div className="text-3xl font-bold mb-1">
            {overallStats.totalStudents}
          </div>
          <div className="text-blue-100 text-sm">Total Students</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl p-6 text-white"
        >
          <DollarSign className="w-8 h-8 mb-3 opacity-80" />
          <div className="text-3xl font-bold mb-1">
            ₹{(overallStats.totalRevenue / 1000).toFixed(0)}K
          </div>
          <div className="text-green-100 text-sm">Total Revenue</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-6 text-white"
        >
          <CheckCircle className="w-8 h-8 mb-3 opacity-80" />
          <div className="text-3xl font-bold mb-1">
            {overallStats.avgAttendance}%
          </div>
          <div className="text-purple-100 text-sm">Avg Attendance</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-6 text-white"
        >
          <Award className="w-8 h-8 mb-3 opacity-80" />
          <div className="text-3xl font-bold mb-1">
            {overallStats.avgSuccessRate}%
          </div>
          <div className="text-orange-100 text-sm">Avg Success Rate</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-br from-yellow-500 to-amber-500 rounded-2xl p-6 text-white"
        >
          <Star className="w-8 h-8 mb-3 opacity-80" />
          <div className="text-3xl font-bold mb-1">
            {overallStats.avgSatisfaction}
          </div>
          <div className="text-yellow-100 text-sm">Avg Satisfaction</div>
        </motion.div>
      </div>

      {/* Performance Categories Comparison */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700"
      >
        <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-6">
          Performance Comparison
        </h2>
        <div className="space-y-6">
          {performanceCategories.map((category, catIndex) => (
            <div key={catIndex}>
              <div className="flex items-center gap-3 mb-3">
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}
                >
                  <category.icon className="w-5 h-5 text-white" />
                </div>
                <span className="font-semibold text-slate-800 dark:text-white">
                  {category.name}
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {centersData.map((center, centerIndex) => {
                  const value =
                    category.key === "satisfaction"
                      ? center[category.key].current
                      : center[category.key].current;
                  const maxValue = category.key === "satisfaction" ? 5 : 100;
                  const percentage =
                    category.key === "satisfaction"
                      ? (value / maxValue) * 100
                      : value;

                  return (
                    <motion.div
                      key={centerIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.6 + catIndex * 0.1 + centerIndex * 0.05,
                      }}
                      className="space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-600 dark:text-slate-400">
                          {center.name.split(" ")[0]}
                        </span>
                        <span className="text-sm font-bold text-slate-800 dark:text-white">
                          {category.key === "satisfaction"
                            ? value.toFixed(1)
                            : `${value}%`}
                        </span>
                      </div>
                      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                          initial={{ width: 0 }}
                          animate={{ width: `${percentage}%` }}
                          transition={{
                            delay: 0.7 + catIndex * 0.1 + centerIndex * 0.05,
                            duration: 0.8,
                          }}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Detailed Center Cards */}
      <div className="space-y-6">
        {rankedCenters.map((center, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + index * 0.1 }}
            className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden relative"
          >
            <div
              className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${center.color} opacity-5 blur-3xl`}
            />

            {/* Header */}
            <div className="relative flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${center.color} flex items-center justify-center text-white font-bold text-2xl`}
                >
                  #{index + 1}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-1">
                    {center.name}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {center.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      Est. {center.established}
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                  Overall Score
                </div>
                <div className="text-3xl font-bold text-slate-800 dark:text-white">
                  {
                    center.monthlyPerformance[
                      center.monthlyPerformance.length - 1
                    ].score
                  }
                </div>
              </div>
            </div>

            {/* Key Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4">
                <Users className="w-5 h-5 text-blue-600 dark:text-blue-400 mb-2" />
                <div className="text-2xl font-bold text-slate-800 dark:text-white mb-1">
                  {center.students.current}
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400 mb-1">
                  Students
                </div>
                <div className="flex items-center gap-1 text-xs text-green-600 dark:text-green-400">
                  <TrendingUp className="w-3 h-3" />
                  {center.students.growth}%
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4">
                <DollarSign className="w-5 h-5 text-green-600 dark:text-green-400 mb-2" />
                <div className="text-2xl font-bold text-slate-800 dark:text-white mb-1">
                  ₹{(center.revenue.current / 1000).toFixed(0)}K
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400 mb-1">
                  Revenue
                </div>
                <div className="flex items-center gap-1 text-xs text-green-600 dark:text-green-400">
                  <TrendingUp className="w-3 h-3" />
                  {center.revenue.growth.toFixed(1)}%
                </div>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-4">
                <CheckCircle className="w-5 h-5 text-purple-600 dark:text-purple-400 mb-2" />
                <div className="text-2xl font-bold text-slate-800 dark:text-white mb-1">
                  {center.attendance.current}%
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400 mb-1">
                  Attendance
                </div>
                <div className="flex items-center gap-1 text-xs text-green-600 dark:text-green-400">
                  <TrendingUp className="w-3 h-3" />
                  {center.attendance.current - center.attendance.previous}%
                </div>
              </div>

              <div className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-4">
                <Award className="w-5 h-5 text-orange-600 dark:text-orange-400 mb-2" />
                <div className="text-2xl font-bold text-slate-800 dark:text-white mb-1">
                  {center.successRate.current}%
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400 mb-1">
                  Success Rate
                </div>
                <div className="flex items-center gap-1 text-xs text-green-600 dark:text-green-400">
                  <TrendingUp className="w-3 h-3" />
                  {center.successRate.current - center.successRate.previous}%
                </div>
              </div>

              <div className="bg-pink-50 dark:bg-pink-900/20 rounded-xl p-4">
                <Star className="w-5 h-5 text-pink-600 dark:text-pink-400 mb-2" />
                <div className="text-2xl font-bold text-slate-800 dark:text-white mb-1">
                  {center.satisfaction.current}
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400 mb-1">
                  Satisfaction
                </div>
                <div className="flex items-center gap-1 text-xs text-green-600 dark:text-green-400">
                  <TrendingUp className="w-3 h-3" />
                  {(
                    center.satisfaction.current - center.satisfaction.previous
                  ).toFixed(1)}
                </div>
              </div>

              <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-4">
                <Target className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mb-2" />
                <div className="text-2xl font-bold text-slate-800 dark:text-white mb-1">
                  {center.completion.current}%
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400 mb-1">
                  Completion
                </div>
                <div className="flex items-center gap-1 text-xs text-green-600 dark:text-green-400">
                  <TrendingUp className="w-3 h-3" />
                  {center.completion.current - center.completion.previous}%
                </div>
              </div>
            </div>

            {/* Monthly Performance Chart */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <span className="font-semibold text-slate-800 dark:text-white">
                  Monthly Performance Trend
                </span>
                <LineChart className="w-5 h-5 text-slate-400" />
              </div>
              <div className="flex items-end gap-2 h-32">
                {center.monthlyPerformance.map((month, mIndex) => (
                  <motion.div
                    key={mIndex}
                    className="flex-1 relative group"
                    initial={{ height: 0 }}
                    animate={{ height: `${month.score}%` }}
                    transition={{
                      delay: 0.9 + index * 0.1 + mIndex * 0.05,
                      duration: 0.5,
                    }}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${center.color} rounded-t-lg`}
                    />
                    <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                      Score: {month.score}
                      <br />
                      Students: {month.students}
                      <br />
                      Revenue: ₹{(month.revenue / 1000).toFixed(0)}K
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="flex justify-between mt-2">
                {center.monthlyPerformance.map((month, mIndex) => (
                  <span key={mIndex} className="text-xs text-slate-500">
                    {month.month}
                  </span>
                ))}
              </div>
            </div>

            {/* Operational Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    Classroom Utilization
                  </span>
                  <span className="text-sm font-bold text-slate-800 dark:text-white">
                    {center.classroomUtilization}%
                  </span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${center.classroomUtilization}%` }}
                    transition={{ delay: 1.0 + index * 0.1, duration: 0.8 }}
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    Resource Efficiency
                  </span>
                  <span className="text-sm font-bold text-slate-800 dark:text-white">
                    {center.resourceEfficiency}%
                  </span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                  <motion.div
                    className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${center.resourceEfficiency}%` }}
                    transition={{ delay: 1.1 + index * 0.1, duration: 0.8 }}
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    Staff Performance
                  </span>
                  <span className="text-sm font-bold text-slate-800 dark:text-white">
                    {center.staffPerformance}%
                  </span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                  <motion.div
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${center.staffPerformance}%` }}
                    transition={{ delay: 1.2 + index * 0.1, duration: 0.8 }}
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    Query Resolution
                  </span>
                  <span className="text-sm font-bold text-slate-800 dark:text-white">
                    {center.queryResolution}%
                  </span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                  <motion.div
                    className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${center.queryResolution}%` }}
                    transition={{ delay: 1.3 + index * 0.1, duration: 0.8 }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CentersPerformance;
