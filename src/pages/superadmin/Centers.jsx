import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import {
  Building2,
  Users,
  DollarSign,
  TrendingUp,
  Award,
  MapPin,
  Phone,
  Mail,
  Clock,
  Calendar,
  Activity,
  BarChart3,
  CheckCircle,
} from "lucide-react";

const Centers = () => {
  const { selectedCenter } = useSelector((state) => state.auth);

  const centers = [
    {
      name: "Delhi Center",
      location: "Connaught Place, Delhi",
      manager: "Rajesh Sharma",
      email: "delhi@sriram.com",
      phone: "+91 11 2345 6789",
      students: 890,
      staff: 18,
      capacity: 1000,
      revenue: "₹58,000",
      attendance: 92,
      performance: 85,
      color: "from-blue-500 to-cyan-500",
      status: "active",
      established: "2018",
    },
    {
      name: "Mumbai Center",
      location: "Andheri West, Mumbai",
      manager: "Priya Patel",
      email: "mumbai@sriram.com",
      phone: "+91 22 3456 7890",
      students: 950,
      staff: 20,
      capacity: 1000,
      revenue: "₹65,000",
      attendance: 95,
      performance: 90,
      color: "from-green-500 to-emerald-500",
      status: "active",
      established: "2019",
    },
    {
      name: "Bangalore Center",
      location: "Koramangala, Bangalore",
      manager: "Suresh Kumar",
      email: "bangalore@sriram.com",
      phone: "+91 80 4567 8901",
      students: 845,
      staff: 16,
      capacity: 900,
      revenue: "₹62,000",
      attendance: 88,
      performance: 88,
      color: "from-purple-500 to-pink-500",
      status: "active",
      established: "2020",
    },
    {
      name: "Chennai Center",
      location: "T. Nagar, Chennai",
      manager: "Lakshmi Devi",
      email: "chennai@sriram.com",
      phone: "+91 44 5678 9012",
      students: 842,
      staff: 14,
      capacity: 900,
      revenue: "₹63,000",
      attendance: 90,
      performance: 82,
      color: "from-orange-500 to-red-500",
      status: "active",
      established: "2020",
    },
  ];

  const totalStats = {
    totalStudents: centers.reduce((acc, c) => acc + c.students, 0),
    totalStaff: centers.reduce((acc, c) => acc + c.staff, 0),
    avgAttendance: Math.round(
      centers.reduce((acc, c) => acc + c.attendance, 0) / centers.length,
    ),
    totalCapacity: centers.reduce((acc, c) => acc + c.capacity, 0),
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold text-slate-800 dark:text-white mb-2">
          Centers Management
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          Overview of all {centers.length} operational centers
        </p>
      </motion.div>

      {/* Total Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-800 dark:text-white">
                {totalStats.totalStudents}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                Total Students
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-800 dark:text-white">
                {centers.length}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                Active Centers
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-800 dark:text-white">
                {totalStats.totalStaff}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                Total Staff
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-800 dark:text-white">
                {totalStats.avgAttendance}%
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                Avg Attendance
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Centers Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {centers.map((center, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.1 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden relative"
          >
            <div
              className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${center.color} opacity-10 blur-3xl`}
            />

            <div className="relative">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${center.color} flex items-center justify-center`}
                  >
                    <Building2 className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                      {center.name}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {center.location}
                    </p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-sm font-medium">
                  Active
                </span>
              </div>

              {/* Manager Info */}
              <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-4 mb-4">
                <div className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-2">
                  Center Manager
                </div>
                <div className="font-medium text-slate-800 dark:text-white mb-2">
                  {center.manager}
                </div>
                <div className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    {center.email}
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    {center.phone}
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
                  <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-1">
                    <Users className="w-4 h-4" />
                    <span className="text-xs font-medium">Students</span>
                  </div>
                  <div className="text-2xl font-bold text-slate-800 dark:text-white">
                    {center.students}
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">
                    of {center.capacity} capacity
                  </div>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
                  <div className="flex items-center gap-2 text-green-600 dark:text-green-400 mb-1">
                    <Users className="w-4 h-4" />
                    <span className="text-xs font-medium">Staff</span>
                  </div>
                  <div className="text-2xl font-bold text-slate-800 dark:text-white">
                    {center.staff}
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">
                    team members
                  </div>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-3">
                  <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 mb-1">
                    <DollarSign className="w-4 h-4" />
                    <span className="text-xs font-medium">Revenue</span>
                  </div>
                  <div className="text-2xl font-bold text-slate-800 dark:text-white">
                    {center.revenue}
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">
                    this month
                  </div>
                </div>

                <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-3">
                  <div className="flex items-center gap-2 text-orange-600 dark:text-orange-400 mb-1">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-xs font-medium">Attendance</span>
                  </div>
                  <div className="text-2xl font-bold text-slate-800 dark:text-white">
                    {center.attendance}%
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">
                    average rate
                  </div>
                </div>
              </div>

              {/* Performance Bar */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600 dark:text-slate-400">
                    Performance Score
                  </span>
                  <span className="font-semibold text-slate-800 dark:text-white">
                    {center.performance}%
                  </span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${center.color} rounded-full`}
                    initial={{ width: 0 }}
                    animate={{ width: `${center.performance}%` }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                  />
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                  <Calendar className="w-4 h-4" />
                  Est. {center.established}
                </div>
                <button
                  className={`px-4 py-2 bg-gradient-to-r ${center.color} text-white rounded-lg font-medium hover:shadow-lg transition-all`}
                >
                  View Details
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Centers;
