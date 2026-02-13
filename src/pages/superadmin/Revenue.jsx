import { useState } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import {
  DollarSign,
  TrendingUp,
  TrendingDown,
  Users,
  BookOpen,
  Building2,
  Calendar,
  Target,
  Award,
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  Download,
  Filter,
  RefreshCw,
  PieChart,
  BarChart3,
  LineChart,
  CreditCard,
  Wallet,
  Receipt,
  Coins,
  Banknote,
  CircleDollarSign,
  Percent,
  TrendingUpDown,
  AlertCircle,
  CheckCircle,
} from "lucide-react";

const Revenue = () => {
  const { selectedCenter } = useSelector((state) => state.auth);
  const [timeRange, setTimeRange] = useState("year"); // week, month, quarter, year
  const [revenueView, setRevenueView] = useState("overview"); // overview, breakdown, forecast, comparison

  // Monthly revenue data (12 months)
  const monthlyRevenue = [
    {
      month: "Jan",
      revenue: 185000,
      target: 200000,
      admissions: 125,
      avgFee: 7400,
      courses: 14,
      growth: 8.5,
    },
    {
      month: "Feb",
      revenue: 215000,
      target: 200000,
      admissions: 142,
      avgFee: 7600,
      courses: 15,
      growth: 16.2,
    },
    {
      month: "Mar",
      revenue: 248000,
      target: 220000,
      admissions: 165,
      avgFee: 7500,
      courses: 16,
      growth: 15.3,
    },
    {
      month: "Apr",
      revenue: 265000,
      target: 240000,
      admissions: 175,
      avgFee: 7550,
      courses: 16,
      growth: 6.9,
    },
    {
      month: "May",
      revenue: 287000,
      target: 260000,
      admissions: 188,
      avgFee: 7630,
      courses: 17,
      growth: 8.3,
    },
    {
      month: "Jun",
      revenue: 312000,
      target: 280000,
      admissions: 205,
      avgFee: 7610,
      courses: 18,
      growth: 8.7,
    },
    {
      month: "Jul",
      revenue: 295000,
      target: 280000,
      admissions: 192,
      avgFee: 7680,
      courses: 18,
      growth: -5.4,
    },
    {
      month: "Aug",
      revenue: 335000,
      target: 300000,
      admissions: 218,
      avgFee: 7690,
      courses: 19,
      growth: 13.6,
    },
    {
      month: "Sep",
      revenue: 358000,
      target: 320000,
      admissions: 232,
      avgFee: 7710,
      courses: 20,
      growth: 6.9,
    },
    {
      month: "Oct",
      revenue: 385000,
      target: 340000,
      admissions: 248,
      avgFee: 7750,
      courses: 20,
      growth: 7.5,
    },
    {
      month: "Nov",
      revenue: 412000,
      target: 360000,
      admissions: 265,
      avgFee: 7770,
      courses: 21,
      growth: 7.0,
    },
    {
      month: "Dec",
      revenue: 435000,
      target: 380000,
      admissions: 280,
      avgFee: 7780,
      courses: 22,
      growth: 5.6,
    },
  ];

  // Revenue by center
  const centerRevenue = [
    {
      name: "Delhi Center",
      revenue: 985000,
      target: 950000,
      students: 890,
      growth: 22.5,
      color: "from-blue-500 to-cyan-500",
      percentage: 28.5,
      avgFeePerStudent: 7100,
      courses: 12,
      batches: 16,
    },
    {
      name: "Mumbai Center",
      revenue: 1125000,
      target: 1050000,
      students: 950,
      growth: 25.8,
      color: "from-green-500 to-emerald-500",
      percentage: 32.5,
      avgFeePerStudent: 7450,
      courses: 14,
      batches: 18,
    },
    {
      name: "Bangalore Center",
      revenue: 815000,
      target: 800000,
      students: 845,
      growth: 18.2,
      color: "from-purple-500 to-pink-500",
      percentage: 23.5,
      avgFeePerStudent: 7280,
      courses: 11,
      batches: 14,
    },
    {
      name: "Chennai Center",
      revenue: 535000,
      target: 550000,
      students: 842,
      growth: 12.5,
      color: "from-orange-500 to-red-500",
      percentage: 15.5,
      avgFeePerStudent: 6850,
      courses: 10,
      batches: 13,
    },
  ];

  // Revenue by course category
  const courseRevenue = [
    {
      category: "Programming & Development",
      revenue: 1285000,
      students: 1245,
      avgFee: 8200,
      courses: 8,
      growth: 24.5,
      color: "from-blue-500 to-cyan-500",
      percentage: 37.2,
    },
    {
      category: "Data Science & AI",
      revenue: 965000,
      students: 685,
      avgFee: 9500,
      courses: 5,
      growth: 32.8,
      color: "from-purple-500 to-pink-500",
      percentage: 27.9,
    },
    {
      category: "Digital Marketing",
      revenue: 485000,
      students: 825,
      avgFee: 5200,
      courses: 4,
      growth: 15.2,
      color: "from-green-500 to-emerald-500",
      percentage: 14.0,
    },
    {
      category: "Design & Creative",
      revenue: 385000,
      students: 545,
      avgFee: 6100,
      courses: 5,
      growth: 18.9,
      color: "from-orange-500 to-red-500",
      percentage: 11.1,
    },
    {
      category: "Cloud & DevOps",
      revenue: 340000,
      students: 227,
      avgFee: 11000,
      courses: 3,
      growth: 28.5,
      color: "from-indigo-500 to-purple-500",
      percentage: 9.8,
    },
  ];

  // Revenue forecast (next 6 months)
  const revenueForecast = [
    {
      month: "Jan 2025",
      predicted: 458000,
      optimistic: 485000,
      conservative: 430000,
    },
    {
      month: "Feb 2025",
      predicted: 485000,
      optimistic: 515000,
      conservative: 455000,
    },
    {
      month: "Mar 2025",
      predicted: 512000,
      optimistic: 545000,
      conservative: 480000,
    },
    {
      month: "Apr 2025",
      predicted: 535000,
      optimistic: 568000,
      conservative: 502000,
    },
    {
      month: "May 2025",
      predicted: 558000,
      optimistic: 592000,
      conservative: 524000,
    },
    {
      month: "Jun 2025",
      predicted: 582000,
      optimistic: 618000,
      conservative: 546000,
    },
  ];

  // Payment methods breakdown
  const paymentMethods = [
    {
      method: "Online Payment",
      amount: 1985000,
      percentage: 57.5,
      transactions: 1245,
      color: "from-blue-500 to-cyan-500",
    },
    {
      method: "Bank Transfer",
      amount: 895000,
      percentage: 25.9,
      transactions: 568,
      color: "from-green-500 to-emerald-500",
    },
    {
      method: "Cash",
      amount: 385000,
      percentage: 11.1,
      transactions: 342,
      color: "from-orange-500 to-red-500",
    },
    {
      method: "Cheque",
      amount: 195000,
      percentage: 5.5,
      transactions: 112,
      color: "from-purple-500 to-pin-500",
    },
  ];

  // Calculate totals
  const totalRevenue = monthlyRevenue.reduce(
    (sum, month) => sum + month.revenue,
    0,
  );
  const totalTarget = monthlyRevenue.reduce(
    (sum, month) => sum + month.target,
    0,
  );
  const avgMonthly = totalRevenue / monthlyRevenue.length;
  const growthRate =
    ((monthlyRevenue[11].revenue - monthlyRevenue[0].revenue) /
      monthlyRevenue[0].revenue) *
    100;
  const maxRevenue = Math.max(...monthlyRevenue.map((m) => m.revenue));

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
            Revenue Analytics
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Comprehensive revenue tracking, forecasting, and financial insights
          </p>
        </div>
        <div className="flex items-center gap-3 flex-wrap">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="week">Last Week</option>
            <option value="month">Last Month</option>
            <option value="quarter">Last Quarter</option>
            <option value="year">Last Year</option>
          </select>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Export Report
          </motion.button>
        </div>
      </motion.div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            label: "Total Revenue",
            value: `₹${(totalRevenue / 100000).toFixed(2)}L`,
            change: `+${growthRate.toFixed(1)}%`,
            icon: DollarSign,
            color: "from-blue-500 to-cyan-500",
            isPositive: true,
            subtitle: "vs last year",
          },
          {
            label: "Monthly Average",
            value: `₹${(avgMonthly / 1000).toFixed(0)}K`,
            change: "+12.8%",
            icon: TrendingUp,
            color: "from-green-500 to-emerald-500",
            isPositive: true,
            subtitle: "monthly trend",
          },
          {
            label: "Target Achievement",
            value: `${((totalRevenue / totalTarget) * 100).toFixed(1)}%`,
            change: `+${((totalRevenue - totalTarget) / 1000).toFixed(0)}K`,
            icon: Target,
            color: "from-purple-500 to-pink-500",
            isPositive: true,
            subtitle: "above target",
          },
          {
            label: "Growth Rate",
            value: `${growthRate.toFixed(1)}%`,
            change: "+3.2%",
            icon: Activity,
            color: "from-orange-500 to-red-500",
            isPositive: true,
            subtitle: "YoY growth",
          },
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 relative overflow-hidden"
          >
            <div
              className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${stat.color} opacity-10 blur-3xl`}
            />
            <div className="relative">
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4`}
              >
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                {stat.label}
              </div>
              <div className="text-3xl font-bold text-slate-800 dark:text-white mb-2">
                {stat.value}
              </div>
              <div className="flex items-center justify-between">
                <div
                  className={`flex items-center gap-1 text-sm font-medium ${stat.isPositive ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}
                >
                  {stat.isPositive ? (
                    <ArrowUpRight className="w-4 h-4" />
                  ) : (
                    <ArrowDownRight className="w-4 h-4" />
                  )}
                  <span>{stat.change}</span>
                </div>
                <span className="text-xs text-slate-500 dark:text-slate-500">
                  {stat.subtitle}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Monthly Revenue Trend - Area Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700"
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-slate-800 dark:text-white">
              Monthly Revenue Trend
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              Revenue vs Target comparison over 12 months
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"></div>
              <span className="text-sm text-slate-600 dark:text-slate-400">
                Actual Revenue
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-red-500 to-orange-500"></div>
              <span className="text-sm text-slate-600 dark:text-slate-400">
                Target
              </span>
            </div>
          </div>
        </div>

        {/* Area Chart */}
        <div className="relative h-80">
          {/* Y-axis labels */}
          <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-xs text-slate-600 dark:text-slate-400 pr-2">
            <span>₹{(maxRevenue / 1000).toFixed(0)}K</span>
            <span>₹{((maxRevenue / 1000) * 0.75).toFixed(0)}K</span>
            <span>₹{((maxRevenue / 1000) * 0.5).toFixed(0)}K</span>
            <span>₹{((maxRevenue / 1000) * 0.25).toFixed(0)}K</span>
            <span>₹0</span>
          </div>

          {/* Chart area */}
          <div className="absolute left-12 right-0 top-0 bottom-8">
            {/* Grid lines */}
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="absolute w-full border-t border-slate-200 dark:border-slate-700"
                style={{ top: `${i * 25}%` }}
              />
            ))}

            {/* Revenue area */}
            <svg className="w-full h-full" preserveAspectRatio="none">
              <defs>
                <linearGradient
                  id="revenueGradient"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.05" />
                </linearGradient>
                <linearGradient
                  id="targetGradient"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#ef4444" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#ef4444" stopOpacity="0.05" />
                </linearGradient>
              </defs>

              {/* Target line */}
              <motion.polyline
                points={monthlyRevenue
                  .map(
                    (data, i) =>
                      `${(i / (monthlyRevenue.length - 1)) * 100},${100 - (data.target / maxRevenue) * 100}`,
                  )
                  .join(" ")}
                fill="none"
                stroke="#ef4444"
                strokeWidth="2"
                strokeDasharray="5,5"
                vectorEffect="non-scaling-stroke"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.5 }}
              />

              {/* Revenue area */}
              <motion.path
                d={`M 0,100 ${monthlyRevenue
                  .map(
                    (data, i) =>
                      `L ${(i / (monthlyRevenue.length - 1)) * 100},${100 - (data.revenue / maxRevenue) * 100}`,
                  )
                  .join(" ")} L 100,100 Z`}
                fill="url(#revenueGradient)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
              />

              {/* Revenue line */}
              <motion.polyline
                points={monthlyRevenue
                  .map(
                    (data, i) =>
                      `${(i / (monthlyRevenue.length - 1)) * 100},${100 - (data.revenue / maxRevenue) * 100}`,
                  )
                  .join(" ")}
                fill="none"
                stroke="#3b82f6"
                strokeWidth="3"
                vectorEffect="non-scaling-stroke"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.5 }}
              />

              {/* Data points */}
              {monthlyRevenue.map((data, i) => (
                <motion.circle
                  key={i}
                  cx={`${(i / (monthlyRevenue.length - 1)) * 100}%`}
                  cy={`${100 - (data.revenue / maxRevenue) * 100}%`}
                  r="4"
                  fill="#3b82f6"
                  stroke="white"
                  strokeWidth="2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.7 + i * 0.05 }}
                />
              ))}
            </svg>

            {/* X-axis labels */}
            <div className="absolute -bottom-6 left-0 right-0 flex justify-between text-xs text-slate-600 dark:text-slate-400">
              {monthlyRevenue.map((data, i) => (
                <span key={i}>{data.month}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Monthly stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
          <div>
            <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">
              Best Month
            </div>
            <div className="text-lg font-bold text-green-600 dark:text-green-400">
              Dec - ₹435K
            </div>
          </div>
          <div>
            <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">
              Avg Growth
            </div>
            <div className="text-lg font-bold text-slate-800 dark:text-white">
              +8.2%
            </div>
          </div>
          <div>
            <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">
              Target Hit Rate
            </div>
            <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
              10/12 months
            </div>
          </div>
          <div>
            <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">
              Total Growth
            </div>
            <div className="text-lg font-bold text-purple-600 dark:text-purple-400">
              +135%
            </div>
          </div>
        </div>
      </motion.div>

      {/* Revenue by Center */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700"
      >
        <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-6">
          Revenue by Center
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Pie Chart */}
          <div className="flex items-center justify-center">
            <div className="relative w-64 h-64">
              {/* Pie slices using conic gradient */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: `conic-gradient(
                    from 0deg,
                    #3b82f6 0% ${centerRevenue[0].percentage}%,
                    #10b981 ${centerRevenue[0].percentage}% ${centerRevenue[0].percentage + centerRevenue[1].percentage}%,
                    #a855f7 ${centerRevenue[0].percentage + centerRevenue[1].percentage}% ${centerRevenue[0].percentage + centerRevenue[1].percentage + centerRevenue[2].percentage}%,
                    #f97316 ${centerRevenue[0].percentage + centerRevenue[1].percentage + centerRevenue[2].percentage}% 100%
                  )`,
                }}
              />
              <div className="absolute inset-8 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center flex-col">
                <div className="text-3xl font-bold text-slate-800 dark:text-white">
                  ₹
                  {(
                    centerRevenue.reduce((sum, c) => sum + c.revenue, 0) /
                    100000
                  ).toFixed(1)}
                  L
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Total Revenue
                </div>
              </div>
            </div>
          </div>

          {/* Center details */}
          <div className="space-y-4">
            {centerRevenue.map((center, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-4 h-4 rounded-full bg-gradient-to-r ${center.color}`}
                    />
                    <div>
                      <div className="font-bold text-slate-800 dark:text-white">
                        {center.name}
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-400">
                        {center.students} students • {center.courses} courses
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-slate-800 dark:text-white">
                      ₹{(center.revenue / 1000).toFixed(0)}K
                    </div>
                    <div className="text-xs text-green-600 dark:text-green-400">
                      +{center.growth}%
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600 dark:text-slate-400">
                    Target: ₹{(center.target / 1000).toFixed(0)}K
                  </span>
                  <span
                    className={`font-medium ${center.revenue >= center.target ? "text-green-600 dark:text-green-400" : "text-orange-600 dark:text-orange-400"}`}
                  >
                    {((center.revenue / center.target) * 100).toFixed(1)}%
                  </span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 mt-2 overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${center.color} rounded-full`}
                    initial={{ width: 0 }}
                    animate={{
                      width: `${(center.revenue / center.target) * 100}%`,
                    }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.8 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Revenue by Course Category */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700"
      >
        <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-6">
          Revenue by Course Category
        </h2>

        <div className="space-y-4">
          {courseRevenue.map((course, index) => {
            const maxCourseRevenue = Math.max(
              ...courseRevenue.map((c) => c.revenue),
            );

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex-1">
                    <div className="font-bold text-slate-800 dark:text-white mb-1">
                      {course.category}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      {course.students} students • {course.courses} courses •
                      Avg Fee: ₹{course.avgFee.toLocaleString()}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-slate-800 dark:text-white">
                      ₹{(course.revenue / 1000).toFixed(0)}K
                    </div>
                    <div className="text-sm text-green-600 dark:text-green-400 flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />+{course.growth}%
                    </div>
                  </div>
                </div>

                {/* Horizontal bar */}
                <div className="relative h-8 bg-slate-200 dark:bg-slate-700 rounded-lg overflow-hidden">
                  <motion.div
                    className={`absolute inset-y-0 left-0 bg-gradient-to-r ${course.color} rounded-lg flex items-center justify-end px-3`}
                    initial={{ width: 0 }}
                    animate={{
                      width: `${(course.revenue / maxCourseRevenue) * 100}%`,
                    }}
                    transition={{ delay: 1.0 + index * 0.1, duration: 0.8 }}
                  >
                    <span className="text-sm font-semibold text-white">
                      {course.percentage}%
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
          <div>
            <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">
              Top Category
            </div>
            <div className="font-bold text-slate-800 dark:text-white">
              Programming & Dev
            </div>
          </div>
          <div>
            <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">
              Highest Growth
            </div>
            <div className="font-bold text-green-600 dark:text-green-400">
              Data Science +32.8%
            </div>
          </div>
          <div>
            <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">
              Total Categories
            </div>
            <div className="font-bold text-slate-800 dark:text-white">
              {courseRevenue.length} Active
            </div>
          </div>
        </div>
      </motion.div>

      {/* Payment Methods */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0 }}
        className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700"
      >
        <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-6">
          Payment Methods Breakdown
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {paymentMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1 + index * 0.1 }}
              className="text-center"
            >
              <div className="relative w-32 h-32 mx-auto mb-4">
                {/* Circular progress */}
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="8"
                    className="text-slate-200 dark:text-slate-700"
                  />
                  <motion.circle
                    cx="64"
                    cy="64"
                    r="56"
                    fill="none"
                    stroke="url(#gradient-${index})"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 56}`}
                    initial={{ strokeDashoffset: 2 * Math.PI * 56 }}
                    animate={{
                      strokeDashoffset:
                        2 * Math.PI * 56 * (1 - method.percentage / 100),
                    }}
                    transition={{ delay: 1.2 + index * 0.1, duration: 1 }}
                  />
                  <defs>
                    <linearGradient
                      id={`gradient-${index}`}
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop
                        offset="0%"
                        stopColor={
                          method.color.includes("blue")
                            ? "#3b82f6"
                            : method.color.includes("green")
                              ? "#10b981"
                              : method.color.includes("orange")
                                ? "#f97316"
                                : "#a855f7"
                        }
                      />
                      <stop
                        offset="100%"
                        stopColor={
                          method.color.includes("blue")
                            ? "#06b6d4"
                            : method.color.includes("green")
                              ? "#059669"
                              : method.color.includes("orange")
                                ? "#ef4444"
                                : "#ec4899"
                        }
                      />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <div className="text-2xl font-bold text-slate-800 dark:text-white">
                    {method.percentage}%
                  </div>
                </div>
              </div>
              <div className="font-bold text-slate-800 dark:text-white mb-1">
                {method.method}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                ₹{(method.amount / 1000).toFixed(0)}K
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-500">
                {method.transactions} transactions
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Revenue;
