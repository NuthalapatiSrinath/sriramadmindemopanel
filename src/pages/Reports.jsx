import { motion } from "framer-motion";
import {
  BarChart3,
  Download,
  TrendingUp,
  Users,
  DollarSign,
  BookOpen,
  Calendar,
} from "lucide-react";
import { dashboardStats, revenueChartData, centers } from "../data/staticData";
import { useSelector } from "react-redux";

const Reports = () => {
  const { selectedCenter, user } = useSelector((state) => state.auth);
  const stats = dashboardStats[selectedCenter] || dashboardStats["All Centers"];

  const reportTypes = [
    {
      title: "Revenue Report",
      description: "Detailed revenue analysis by center and course",
      icon: DollarSign,
      color: "from-green-500 to-green-600",
      metrics: {
        total: `₹${(stats.totalRevenue / 100000).toFixed(2)}L`,
        growth: "+18.5%",
      },
    },
    {
      title: "Student Performance",
      description: "Course completion rates and test scores",
      icon: Users,
      color: "from-blue-500 to-blue-600",
      metrics: { total: stats.totalUsers, growth: "+12.3%" },
    },
    {
      title: "Course Analytics",
      description: "Enrollment trends and popular courses",
      icon: BookOpen,
      color: "from-purple-500 to-purple-600",
      metrics: { total: stats.activeCourses, growth: "+8.7%" },
    },
    {
      title: "Financial Summary",
      description: "Profit/Loss and expense breakdown",
      icon: BarChart3,
      color: "from-orange-500 to-orange-600",
      metrics: {
        total: `₹${((stats.totalRevenue - stats.pendingFees) / 100000).toFixed(2)}L`,
        growth: "+15.2%",
      },
    },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold text-slate-800 dark:text-white mb-2">
          Reports & Analytics
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          Comprehensive reports and business intelligence
        </p>
      </motion.div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          {
            label: "Total Revenue",
            value: `₹${(stats.totalRevenue / 100000).toFixed(2)}L`,
            icon: DollarSign,
            color: "from-green-500 to-green-600",
          },
          {
            label: "Active Students",
            value: stats.activeStudents.toLocaleString(),
            icon: Users,
            color: "from-blue-500 to-blue-600",
          },
          {
            label: "Live Courses",
            value: stats.activeCourses,
            icon: BookOpen,
            color: "from-purple-500 to-purple-600",
          },
          {
            label: "Conversion Rate",
            value: "78.5%",
            icon: TrendingUp,
            color: "from-indigo-500 to-indigo-600",
          },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700"
          >
            <div
              className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} shadow-lg mb-4`}
            >
              <stat.icon className="w-6 h-6 text-white" />
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
              {stat.label}
            </p>
            <p className="text-2xl font-bold text-slate-800 dark:text-white">
              {stat.value}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Report Types */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reportTypes.map((report, index) => (
          <motion.div
            key={report.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden group"
          >
            <div className={`h-2 bg-gradient-to-r ${report.color}`} />
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`p-4 rounded-xl bg-gradient-to-br ${report.color} shadow-lg`}
                >
                  <report.icon className="w-8 h-8 text-white" />
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-lg transition-colors"
                >
                  <Download className="w-5 h-5 text-slate-600 dark:text-slate-300" />
                </motion.button>
              </div>

              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
                {report.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                {report.description}
              </p>

              <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-700 rounded-xl">
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                    Total
                  </p>
                  <p className="text-2xl font-bold text-slate-800 dark:text-white">
                    {report.metrics.total}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-green-500 font-semibold">
                  <TrendingUp className="w-4 h-4" />
                  <span>{report.metrics.growth}</span>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-4 px-4 py-3 bg-gradient-to-r from-slate-700 to-slate-800 dark:from-slate-600 dark:to-slate-700 text-white font-semibold rounded-xl hover:shadow-lg transition-all"
              >
                Generate Report
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Center-wise Performance (Super Admin only) */}
      {user?.role === "Super Admin" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-1">
                Center-wise Performance
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Comparative analysis across all centers
              </p>
            </div>
            <Calendar className="w-6 h-6 text-slate-400" />
          </div>

          <div className="space-y-4">
            {centers.map((center, index) => {
              const centerStats = dashboardStats[center.name];
              if (!centerStats) return null;

              const maxRevenue = Math.max(
                ...centers.map(
                  (c) => dashboardStats[c.name]?.totalRevenue || 0,
                ),
              );
              const percentage = (centerStats.totalRevenue / maxRevenue) * 100;

              return (
                <motion.div
                  key={center.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="p-4 bg-slate-50 dark:bg-slate-700 rounded-xl"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="font-bold text-slate-800 dark:text-white">
                        {center.name}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {center.location}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-slate-800 dark:text-white">
                        ₹{(centerStats.totalRevenue / 100000).toFixed(2)}L
                      </p>
                      <p className="text-xs text-slate-500">
                        {centerStats.totalUsers} students
                      </p>
                    </div>
                  </div>

                  <div className="relative h-3 bg-slate-200 dark:bg-slate-600 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${percentage}%` }}
                      transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Reports;
