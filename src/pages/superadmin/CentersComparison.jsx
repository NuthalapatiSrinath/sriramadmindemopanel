import { useState } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import {
  Building2,
  Users,
  DollarSign,
  Award,
  TrendingUp,
  TrendingDown,
  CheckCircle,
  XCircle,
  Star,
  Target,
  Activity,
  Zap,
  Clock,
  Calendar,
  Briefcase,
  BookOpen,
  Layers,
  MapPin,
  ArrowUpRight,
  ArrowDownRight,
  BarChart3,
  LineChart,
  PieChart,
  Download,
  RefreshCw,
  Filter,
  Maximize2,
  Minimize2,
  AlertCircle,
  ThumbsUp,
  GraduationCap,
} from "lucide-react";

const CentersComparison = () => {
  const { selectedCenter } = useSelector((state) => state.auth);
  const [compareMode, setCompareMode] = useState("all"); // all, selected
  const [selectedCenters, setSelectedCenters] = useState([
    "Delhi Center",
    "Mumbai Center",
  ]);
  const [metricView, setMetricView] = useState("radar"); // radar, bar, table

  // Complete center data for detailed comparison
  const centersData = [
    {
      id: 1,
      name: "Delhi Center",
      location: "Connaught Place, Delhi",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      borderColor: "border-blue-500",

      // Student metrics
      totalStudents: 890,
      activeStudents: 845,
      newAdmissions: 45,
      dropouts: 12,
      studentGrowth: 8.5,

      // Academic performance
      avgAttendance: 92,
      successRate: 85,
      completionRate: 78,
      avgGrades: 82,
      topPerformers: 145,

      // Staff metrics
      totalStaff: 18,
      teachingStaff: 14,
      supportStaff: 4,
      staffSatisfaction: 4.6,
      staffRetention: 94,

      // Financial metrics
      totalRevenue: 58000,
      avgFeePerStudent: 6517,
      revenueGrowth: 20.8,
      costPerStudent: 4236,
      profitMargin: 35,

      // Operational metrics
      activeCourses: 12,
      activeBatches: 16,
      classroomUtilization: 88,
      resourceEfficiency: 85,
      queryResolution: 94,
      avgResponseTime: 2.5, // hours

      // Student satisfaction
      overallSatisfaction: 4.6,
      teachingQuality: 4.7,
      facilities: 4.5,
      administration: 4.6,
      valueForMoney: 4.5,

      // Infrastructure
      totalClassrooms: 12,
      computerLabs: 2,
      libraries: 1,
      capacity: 1000,
      occupancyRate: 89,
    },
    {
      id: 2,
      name: "Mumbai Center",
      location: "Andheri West, Mumbai",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      borderColor: "border-green-500",

      totalStudents: 950,
      activeStudents: 910,
      newAdmissions: 55,
      dropouts: 8,
      studentGrowth: 11.8,

      avgAttendance: 95,
      successRate: 90,
      completionRate: 85,
      avgGrades: 86,
      topPerformers: 168,

      totalStaff: 20,
      teachingStaff: 16,
      supportStaff: 4,
      staffSatisfaction: 4.9,
      staffRetention: 97,

      totalRevenue: 65000,
      avgFeePerStudent: 6842,
      revenueGrowth: 25.0,
      costPerStudent: 4242,
      profitMargin: 38,

      activeCourses: 14,
      activeBatches: 18,
      classroomUtilization: 95,
      resourceEfficiency: 92,
      queryResolution: 97,
      avgResponseTime: 1.8,

      overallSatisfaction: 4.9,
      teachingQuality: 4.9,
      facilities: 4.8,
      administration: 4.9,
      valueForMoney: 4.8,

      totalClassrooms: 14,
      computerLabs: 3,
      libraries: 1,
      capacity: 1000,
      occupancyRate: 95,
    },
    {
      id: 3,
      name: "Bangalore Center",
      location: "Koramangala, Bangalore",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      borderColor: "border-purple-500",

      totalStudents: 845,
      activeStudents: 805,
      newAdmissions: 42,
      dropouts: 15,
      studentGrowth: 8.3,

      avgAttendance: 88,
      successRate: 88,
      completionRate: 82,
      avgGrades: 84,
      topPerformers: 138,

      totalStaff: 16,
      teachingStaff: 12,
      supportStaff: 4,
      staffSatisfaction: 4.5,
      staffRetention: 92,

      totalRevenue: 62000,
      avgFeePerStudent: 7337,
      revenueGrowth: 24.0,
      costPerStudent: 4842,
      profitMargin: 34,

      activeCourses: 11,
      activeBatches: 14,
      classroomUtilization: 92,
      resourceEfficiency: 88,
      queryResolution: 92,
      avgResponseTime: 2.2,

      overallSatisfaction: 4.5,
      teachingQuality: 4.6,
      facilities: 4.4,
      administration: 4.5,
      valueForMoney: 4.5,

      totalClassrooms: 11,
      computerLabs: 2,
      libraries: 1,
      capacity: 900,
      occupancyRate: 94,
    },
    {
      id: 4,
      name: "Chennai Center",
      location: "T. Nagar, Chennai",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
      borderColor: "border-orange-500",

      totalStudents: 842,
      activeStudents: 800,
      newAdmissions: 40,
      dropouts: 18,
      studentGrowth: 8.6,

      avgAttendance: 90,
      successRate: 82,
      completionRate: 80,
      avgGrades: 80,
      topPerformers: 128,

      totalStaff: 14,
      teachingStaff: 11,
      supportStaff: 3,
      staffSatisfaction: 4.4,
      staffRetention: 90,

      totalRevenue: 63000,
      avgFeePerStudent: 7482,
      revenueGrowth: 23.5,
      costPerStudent: 5013,
      profitMargin: 33,

      activeCourses: 10,
      activeBatches: 13,
      classroomUtilization: 85,
      resourceEfficiency: 83,
      queryResolution: 90,
      avgResponseTime: 3.0,

      overallSatisfaction: 4.4,
      teachingQuality: 4.5,
      facilities: 4.3,
      administration: 4.4,
      valueForMoney: 4.4,

      totalClassrooms: 10,
      computerLabs: 2,
      libraries: 1,
      capacity: 900,
      occupancyRate: 94,
    },
  ];

  // Metrics categories for spider/radar chart
  const radarMetrics = [
    { key: "avgAttendance", label: "Attendance", max: 100 },
    { key: "successRate", label: "Success Rate", max: 100 },
    { key: "completionRate", label: "Completion", max: 100 },
    {
      key: "overallSatisfaction",
      label: "Satisfaction",
      max: 5,
      multiplier: 20,
    },
    { key: "staffRetention", label: "Staff Retention", max: 100 },
    { key: "resourceEfficiency", label: "Efficiency", max: 100 },
  ];

  // Comparison categories
  const comparisonCategories = [
    {
      title: "Student Metrics",
      icon: Users,
      color: "from-blue-500 to-cyan-500",
      metrics: [
        {
          key: "totalStudents",
          label: "Total Students",
          format: "number",
          icon: Users,
        },
        {
          key: "activeStudents",
          label: "Active Students",
          format: "number",
          icon: CheckCircle,
        },
        {
          key: "newAdmissions",
          label: "New Admissions",
          format: "number",
          icon: ArrowUpRight,
        },
        {
          key: "studentGrowth",
          label: "Growth Rate",
          format: "percentage",
          icon: TrendingUp,
        },
      ],
    },
    {
      title: "Academic Performance",
      icon: Award,
      color: "from-purple-500 to-pink-500",
      metrics: [
        {
          key: "avgAttendance",
          label: "Avg Attendance",
          format: "percentage",
          icon: CheckCircle,
        },
        {
          key: "successRate",
          label: "Success Rate",
          format: "percentage",
          icon: Award,
        },
        {
          key: "completionRate",
          label: "Completion Rate",
          format: "percentage",
          icon: Target,
        },
        {
          key: "avgGrades",
          label: "Average Grades",
          format: "percentage",
          icon: Star,
        },
      ],
    },
    {
      title: "Financial Performance",
      icon: DollarSign,
      color: "from-green-500 to-emerald-500",
      metrics: [
        {
          key: "totalRevenue",
          label: "Total Revenue",
          format: "currency",
          icon: DollarSign,
        },
        {
          key: "avgFeePerStudent",
          label: "Avg Fee/Student",
          format: "currency",
          icon: DollarSign,
        },
        {
          key: "revenueGrowth",
          label: "Revenue Growth",
          format: "percentage",
          icon: TrendingUp,
        },
        {
          key: "profitMargin",
          label: "Profit Margin",
          format: "percentage",
          icon: Activity,
        },
      ],
    },
    {
      title: "Operational Efficiency",
      icon: Zap,
      color: "from-orange-500 to-red-500",
      metrics: [
        {
          key: "classroomUtilization",
          label: "Classroom Utilization",
          format: "percentage",
          icon: Building2,
        },
        {
          key: "resourceEfficiency",
          label: "Resource Efficiency",
          format: "percentage",
          icon: Zap,
        },
        {
          key: "queryResolution",
          label: "Query Resolution",
          format: "percentage",
          icon: CheckCircle,
        },
        {
          key: "avgResponseTime",
          label: "Avg Response Time",
          format: "hours",
          icon: Clock,
        },
      ],
    },
    {
      title: "Staff Metrics",
      icon: Briefcase,
      color: "from-indigo-500 to-purple-500",
      metrics: [
        {
          key: "totalStaff",
          label: "Total Staff",
          format: "number",
          icon: Briefcase,
        },
        {
          key: "teachingStaff",
          label: "Teaching Staff",
          format: "number",
          icon: GraduationCap,
        },
        {
          key: "staffSatisfaction",
          label: "Staff Satisfaction",
          format: "rating",
          icon: Star,
        },
        {
          key: "staffRetention",
          label: "Staff Retention",
          format: "percentage",
          icon: ThumbsUp,
        },
      ],
    },
    {
      title: "Student Satisfaction",
      icon: ThumbsUp,
      color: "from-pink-500 to-rose-500",
      metrics: [
        {
          key: "overallSatisfaction",
          label: "Overall",
          format: "rating",
          icon: Star,
        },
        {
          key: "teachingQuality",
          label: "Teaching Quality",
          format: "rating",
          icon: Award,
        },
        {
          key: "facilities",
          label: "Facilities",
          format: "rating",
          icon: Building2,
        },
        {
          key: "valueForMoney",
          label: "Value for Money",
          format: "rating",
          icon: DollarSign,
        },
      ],
    },
  ];

  // Format value based on type
  const formatValue = (value, format) => {
    switch (format) {
      case "currency":
        return `₹${value.toLocaleString()}`;
      case "percentage":
        return `${value}%`;
      case "rating":
        return value.toFixed(1);
      case "hours":
        return `${value}h`;
      default:
        return value.toLocaleString();
    }
  };

  // Get comparison centers
  const comparisonCenters =
    compareMode === "all"
      ? centersData
      : centersData.filter((c) => selectedCenters.includes(c.name));

  // Find best performer for each metric
  const getBestPerformer = (metricKey) => {
    return [...comparisonCenters].sort((a, b) => {
      if (metricKey === "avgResponseTime" || metricKey === "costPerStudent") {
        return a[metricKey] - b[metricKey]; // Lower is better
      }
      return b[metricKey] - a[metricKey]; // Higher is better
    })[0];
  };

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
            Centers Comparison
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Side-by-side comparison of all center metrics and performance
          </p>
        </div>
        <div className="flex items-center gap-3 flex-wrap">
          <select
            value={compareMode}
            onChange={(e) => setCompareMode(e.target.value)}
            className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">Compare All Centers</option>
            <option value="selected">Selected Centers Only</option>
          </select>
          <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 rounded-xl p-1">
            <button
              onClick={() => setMetricView("radar")}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                metricView === "radar"
                  ? "bg-white dark:bg-slate-700 text-slate-800 dark:text-white shadow"
                  : "text-slate-600 dark:text-slate-400"
              }`}
            >
              Radar
            </button>
            <button
              onClick={() => setMetricView("bar")}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                metricView === "bar"
                  ? "bg-white dark:bg-slate-700 text-slate-800 dark:text-white shadow"
                  : "text-slate-600 dark:text-slate-400"
              }`}
            >
              Bar
            </button>
            <button
              onClick={() => setMetricView("table")}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                metricView === "table"
                  ? "bg-white dark:bg-slate-700 text-slate-800 dark:text-white shadow"
                  : "text-slate-600 dark:text-slate-400"
              }`}
            >
              Table
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

      {/* Quick Comparison Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {comparisonCenters.map((center, index) => (
          <motion.div
            key={center.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.03, y: -5 }}
            className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 relative overflow-hidden"
          >
            <div
              className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${center.color} opacity-10 blur-3xl`}
            />
            <div className="relative">
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${center.color} flex items-center justify-center mb-4`}
              >
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-1">
                {center.name}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                {center.location}
              </p>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    Students
                  </span>
                  <span className="font-bold text-slate-800 dark:text-white">
                    {center.totalStudents}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    Success Rate
                  </span>
                  <span className="font-bold text-green-600 dark:text-green-400">
                    {center.successRate}%
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    Revenue
                  </span>
                  <span className="font-bold text-slate-800 dark:text-white">
                    ₹{(center.totalRevenue / 1000).toFixed(0)}K
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    Satisfaction
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="font-bold text-slate-800 dark:text-white">
                      {center.overallSatisfaction}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Radar Chart Comparison */}
      {metricView === "radar" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700"
        >
          <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-6">
            Key Metrics Radar Comparison
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Radar Chart Visual */}
            <div className="flex items-center justify-center">
              <div className="relative w-80 h-80">
                {/* Radar grid */}
                {[1, 2, 3, 4, 5].map((level) => (
                  <div
                    key={level}
                    className="absolute inset-0 border border-slate-200 dark:border-slate-700 rounded-full"
                    style={{
                      width: `${level * 20}%`,
                      height: `${level * 20}%`,
                      top: `${50 - level * 10}%`,
                      left: `${50 - level * 10}%`,
                    }}
                  />
                ))}

                {/* Radar lines */}
                {radarMetrics.map((metric, index) => {
                  const angle =
                    (index / radarMetrics.length) * 2 * Math.PI - Math.PI / 2;
                  const x = 50 + 50 * Math.cos(angle);
                  const y = 50 + 50 * Math.sin(angle);

                  return (
                    <div
                      key={index}
                      className="absolute w-0.5 bg-slate-200 dark:bg-slate-700"
                      style={{
                        height: "50%",
                        left: "50%",
                        top: "0",
                        transformOrigin: "bottom",
                        transform: `rotate(${(index / radarMetrics.length) * 360}deg)`,
                      }}
                    />
                  );
                })}

                {/* Data polygons for each center */}
                {comparisonCenters.map((center, centerIndex) => {
                  const points = radarMetrics
                    .map((metric, index) => {
                      const value = center[metric.key];
                      const normalized = metric.multiplier
                        ? (value * metric.multiplier) / 100
                        : value / 100;
                      const angle =
                        (index / radarMetrics.length) * 2 * Math.PI -
                        Math.PI / 2;
                      const x = 50 + 40 * normalized * Math.cos(angle);
                      const y = 50 + 40 * normalized * Math.sin(angle);
                      return `${x},${y}`;
                    })
                    .join(" ");

                  return (
                    <svg
                      key={centerIndex}
                      className="absolute inset-0 w-full h-full"
                    >
                      <motion.polygon
                        points={points}
                        className={`fill-current opacity-20`}
                        style={{
                          color: center.color.includes("blue")
                            ? "#3b82f6"
                            : center.color.includes("green")
                              ? "#10b981"
                              : center.color.includes("purple")
                                ? "#a855f7"
                                : "#f97316",
                        }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 0.2, scale: 1 }}
                        transition={{ delay: 0.5 + centerIndex * 0.1 }}
                      />
                      <motion.polygon
                        points={points}
                        className={`fill-none stroke-current stroke-2`}
                        style={{
                          color: center.color.includes("blue")
                            ? "#3b82f6"
                            : center.color.includes("green")
                              ? "#10b981"
                              : center.color.includes("purple")
                                ? "#a855f7"
                                : "#f97316",
                        }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + centerIndex * 0.1 }}
                      />
                    </svg>
                  );
                })}

                {/* Metric labels */}
                {radarMetrics.map((metric, index) => {
                  const angle =
                    (index / radarMetrics.length) * 2 * Math.PI - Math.PI / 2;
                  const x = 50 + 55 * Math.cos(angle);
                  const y = 50 + 55 * Math.sin(angle);

                  return (
                    <div
                      key={index}
                      className="absolute text-xs font-medium text-slate-600 dark:text-slate-400 whitespace-nowrap"
                      style={{
                        left: `${x}%`,
                        top: `${y}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      {metric.label}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Legend and Values */}
            <div className="space-y-4">
              {comparisonCenters.map((center, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className={`p-4 rounded-xl ${center.bgColor} border-l-4 ${center.borderColor}`}
                >
                  <div className="font-bold text-slate-800 dark:text-white mb-3">
                    {center.name}
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {radarMetrics.map((metric, mIndex) => (
                      <div key={mIndex} className="text-sm">
                        <div className="text-slate-600 dark:text-slate-400 mb-1">
                          {metric.label}
                        </div>
                        <div className="font-semibold text-slate-800 dark:text-white">
                          {metric.multiplier
                            ? (center[metric.key] * metric.multiplier).toFixed(
                                0,
                              )
                            : center[metric.key]}
                          {metric.multiplier
                            ? "%"
                            : metric.max === 5
                              ? "/5"
                              : "%"}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* Detailed Category Comparisons */}
      <div className="space-y-6">
        {comparisonCategories.map((category, catIndex) => (
          <motion.div
            key={catIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 + catIndex * 0.1 }}
            className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700"
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}
              >
                <category.icon className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-xl font-bold text-slate-800 dark:text-white">
                {category.title}
              </h2>
            </div>

            <div className="space-y-6">
              {category.metrics.map((metric, metricIndex) => {
                const bestPerformer = getBestPerformer(metric.key);

                return (
                  <div key={metricIndex}>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <metric.icon className="w-5 h-5 text-slate-400" />
                        <span className="font-medium text-slate-800 dark:text-white">
                          {metric.label}
                        </span>
                      </div>
                      <span className="text-sm text-slate-600 dark:text-slate-400">
                        Best: {bestPerformer.name.split(" ")[0]} -{" "}
                        {formatValue(bestPerformer[metric.key], metric.format)}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {comparisonCenters.map((center, centerIndex) => {
                        const value = center[metric.key];
                        const isBest = center.id === bestPerformer.id;
                        const maxValue = Math.max(
                          ...comparisonCenters.map((c) => c[metric.key]),
                        );
                        const percentage =
                          metric.format === "rating"
                            ? (value / 5) * 100
                            : metric.format === "hours"
                              ? 100 - (value / maxValue) * 100
                              : (value / maxValue) * 100;

                        return (
                          <motion.div
                            key={centerIndex}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                              delay:
                                0.8 +
                                catIndex * 0.1 +
                                metricIndex * 0.05 +
                                centerIndex * 0.02,
                            }}
                            className={`p-4 rounded-xl ${center.bgColor} ${isBest ? `ring-2 ${center.borderColor}` : ""} relative`}
                          >
                            {isBest && (
                              <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                                <Star className="w-4 h-4 text-white fill-white" />
                              </div>
                            )}
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                                {center.name.split(" ")[0]}
                              </span>
                              <span className="text-lg font-bold text-slate-800 dark:text-white">
                                {formatValue(value, metric.format)}
                              </span>
                            </div>
                            <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
                              <motion.div
                                className={`h-full bg-gradient-to-r ${center.color} rounded-full`}
                                initial={{ width: 0 }}
                                animate={{ width: `${percentage}%` }}
                                transition={{
                                  delay:
                                    0.9 +
                                    catIndex * 0.1 +
                                    metricIndex * 0.05 +
                                    centerIndex * 0.02,
                                  duration: 0.8,
                                }}
                              />
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Winner Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 rounded-2xl p-1"
      >
        <div className="bg-white dark:bg-slate-800 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-8 h-8 text-yellow-500" />
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
              Performance Winners
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                metric: "successRate",
                label: "Highest Success Rate",
                icon: Award,
              },
              {
                metric: "totalRevenue",
                label: "Highest Revenue",
                icon: DollarSign,
              },
              {
                metric: "overallSatisfaction",
                label: "Best Satisfaction",
                icon: ThumbsUp,
              },
              {
                metric: "resourceEfficiency",
                label: "Most Efficient",
                icon: Zap,
              },
            ].map((item, index) => {
              const winner = getBestPerformer(item.metric);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.6 + index * 0.1 }}
                  className={`p-4 rounded-xl ${winner.bgColor} border-2 ${winner.borderColor}`}
                >
                  <item.icon className="w-8 h-8 text-slate-600 dark:text-slate-400 mb-3" />
                  <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                    {item.label}
                  </div>
                  <div className="text-xl font-bold text-slate-800 dark:text-white mb-1">
                    {winner.name}
                  </div>
                  <div
                    className="text-lg font-semibold bg-gradient-to-r bg-clip-text text-transparent"
                    style={{
                      backgroundImage: `linear-gradient(to right, ${winner.color.includes("blue") ? "#3b82f6, #06b6d4" : winner.color.includes("green") ? "#10b981, #059669" : winner.color.includes("purple") ? "#a855f7, #ec4899" : "#f97316, #ef4444"})`,
                    }}
                  >
                    {item.metric === "totalRevenue"
                      ? `₹${(winner[item.metric] / 1000).toFixed(0)}K`
                      : item.metric === "overallSatisfaction"
                        ? winner[item.metric].toFixed(1)
                        : `${winner[item.metric]}%`}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CentersComparison;
