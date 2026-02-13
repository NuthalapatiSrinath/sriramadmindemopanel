import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import {
  TrendingUp,
  Users,
  DollarSign,
  GraduationCap,
  BarChart3,
  Activity,
  Award,
  Target,
  Clock,
  Calendar,
  ArrowUpRight,
  ArrowDownRight,
  Building2,
} from "lucide-react";

const Analytics = () => {
  const { selectedCenter } = useSelector((state) => state.auth);

  // Analytics data
  const trendsData = [
    {
      title: "Student Growth",
      value: "+18.2%",
      change: "+245",
      trend: "up",
      icon: Users,
      color: "from-blue-500 to-cyan-500",
      data: [65, 72, 68, 85, 92, 88, 95],
    },
    {
      title: "Revenue Growth",
      value: "+24.5%",
      change: "+₹48K",
      trend: "up",
      icon: DollarSign,
      color: "from-green-500 to-emerald-500",
      data: [45, 52, 48, 65, 78, 72, 85],
    },
    {
      title: "Success Rate",
      value: "76%",
      change: "+4.2%",
      trend: "up",
      icon: Award,
      color: "from-purple-500 to-pink-500",
      data: [72, 73, 74, 75, 76, 76, 76],
    },
    {
      title: "Course Completion",
      value: "82%",
      change: "-2.1%",
      trend: "down",
      icon: Target,
      color: "from-orange-500 to-red-500",
      data: [85, 84, 84, 83, 83, 82, 82],
    },
  ];

  const centerStats = [
    {
      center: "Delhi",
      students: 890,
      growth: "+12%",
      revenue: "₹58K",
      color: "from-blue-500 to-cyan-500",
    },
    {
      center: "Mumbai",
      students: 950,
      growth: "+18%",
      revenue: "₹65K",
      color: "from-green-500 to-emerald-500",
    },
    {
      center: "Bangalore",
      students: 845,
      growth: "+15%",
      revenue: "₹62K",
      color: "from-purple-500 to-pink-500",
    },
    {
      center: "Chennai",
      students: 842,
      growth: "+10%",
      revenue: "₹63K",
      color: "from-orange-500 to-red-500",
    },
  ];

  const monthlyData = [
    { month: "Jan", students: 2890, revenue: 185, success: 72 },
    { month: "Feb", students: 3050, revenue: 195, success: 74 },
    { month: "Mar", students: 3120, revenue: 205, success: 75 },
    { month: "Apr", students: 3280, revenue: 215, success: 76 },
    { month: "May", students: 3420, revenue: 228, success: 78 },
    { month: "Jun", students: 3580, revenue: 235, success: 78 },
    { month: "Jul", students: 3527, revenue: 248, success: 76 },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold text-slate-800 dark:text-white mb-2">
          Analytics Dashboard
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          {selectedCenter === "All Centers" ? "System-wide" : selectedCenter}{" "}
          performance insights and trends
        </p>
      </motion.div>

      {/* Trend Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {trendsData.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="relative overflow-hidden bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700"
            >
              <div
                className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} opacity-10 blur-2xl`}
              />

              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  {item.trend === "up" ? (
                    <ArrowUpRight className="w-5 h-5 text-green-500" />
                  ) : (
                    <ArrowDownRight className="w-5 h-5 text-red-500" />
                  )}
                </div>

                <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                  {item.title}
                </div>
                <div className="text-3xl font-bold text-slate-800 dark:text-white mb-2">
                  {item.value}
                </div>
                <div
                  className={`text-sm font-medium ${item.trend === "up" ? "text-green-500" : "text-red-500"}`}
                >
                  {item.change} this month
                </div>

                {/* Mini Chart */}
                <div className="mt-4 flex items-end gap-1 h-12">
                  {item.data.map((val, i) => (
                    <div
                      key={i}
                      className={`flex-1 bg-gradient-to-t ${item.color} rounded-t opacity-70`}
                      style={{ height: `${(val / 100) * 100}%` }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Center Performance Comparison */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700"
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-slate-800 dark:text-white">
              Center Performance
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Comparative analysis across all centers
            </p>
          </div>
          <Building2 className="w-6 h-6 text-slate-400" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {centerStats.map((center, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className={`relative overflow-hidden rounded-xl p-4 bg-gradient-to-br ${center.color} text-white`}
            >
              <div className="text-lg font-bold mb-3">
                {center.center} Center
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm opacity-90">Students</span>
                  <span className="font-bold">{center.students}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm opacity-90">Growth</span>
                  <span className="font-bold">{center.growth}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm opacity-90">Revenue</span>
                  <span className="font-bold">{center.revenue}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Monthly Trends Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700"
      >
        <div className="mb-6">
          <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
            Monthly Trends
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            7-month performance overview
          </p>
        </div>

        <div className="space-y-6">
          {/* Bar Chart */}
          <div className="space-y-3">
            {monthlyData.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600 dark:text-slate-400 w-12">
                    {item.month}
                  </span>
                  <div className="flex-1 flex items-center gap-2 mx-4">
                    <div className="flex-1 bg-slate-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${(item.students / 4000) * 100}%` }}
                        transition={{
                          delay: 0.7 + index * 0.05,
                          duration: 0.5,
                        }}
                      />
                    </div>
                    <span className="text-slate-800 dark:text-white font-semibold w-16">
                      {item.students}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Analytics;
