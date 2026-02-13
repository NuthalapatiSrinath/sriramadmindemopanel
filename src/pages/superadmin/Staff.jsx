import { useState } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import {
  Users,
  Search,
  Download,
  Plus,
  Eye,
  Edit,
  Trash2,
  Phone,
  Mail,
  Award,
  TrendingUp,
  CheckCircle,
  Clock,
} from "lucide-react";

const Staff = () => {
  const { selectedCenter } = useSelector((state) => state.auth);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  const staffData = [
    {
      name: "Rajesh Sharma",
      email: "rajesh.sharma@sriram.com",
      phone: "+91 98765 43210",
      center: "Delhi Center",
      role: "Senior Teacher",
      subjects: ["Mathematics", "Physics"],
      experience: "8 years",
      joinDate: "2018-03-15",
      status: "active",
      rating: 4.8,
      studentsHandled: 145,
      performance: 92,
    },
    {
      name: "Priya Patel",
      email: "priya.patel@sriram.com",
      phone: "+91 98765 43211",
      center: "Mumbai Center",
      role: "Center Head",
      subjects: ["Management", "English"],
      experience: "10 years",
      joinDate: "2017-01-10",
      status: "active",
      rating: 4.9,
      studentsHandled: 180,
      performance: 95,
    },
    {
      name: "Amit Kumar",
      email: "amit.kumar@sriram.com",
      phone: "+91 98765 43212",
      center: "Bangalore Center",
      role: "Teacher",
      subjects: ["Science", "Chemistry"],
      experience: "5 years",
      joinDate: "2020-06-20",
      status: "active",
      rating: 4.6,
      studentsHandled: 120,
      performance: 88,
    },
    {
      name: "Sneha Reddy",
      email: "sneha.reddy@sriram.com",
      phone: "+91 98765 43213",
      center: "Chennai Center",
      role: "Senior Teacher",
      subjects: ["Mathematics", "Computer Science"],
      experience: "7 years",
      joinDate: "2019-02-15",
      status: "active",
      rating: 4.7,
      studentsHandled: 135,
      performance: 90,
    },
    {
      name: "Vikram Singh",
      email: "vikram.singh@sriram.com",
      phone: "+91 98765 43214",
      center: "Delhi Center",
      role: "Teacher",
      subjects: ["English", "Social Studies"],
      experience: "4 years",
      joinDate: "2021-08-10",
      status: "active",
      rating: 4.5,
      studentsHandled: 110,
      performance: 85,
    },
    {
      name: "Anjali Gupta",
      email: "anjali.gupta@sriram.com",
      phone: "+91 98765 43215",
      center: "Mumbai Center",
      role: "Teacher",
      subjects: ["Biology", "Chemistry"],
      experience: "3 years",
      joinDate: "2022-01-05",
      status: "on-leave",
      rating: 4.4,
      studentsHandled: 95,
      performance: 82,
    },
  ];

  const filteredStaff = staffData.filter((staff) => {
    if (selectedCenter !== "All Centers" && staff.center !== selectedCenter) {
      return false;
    }
    if (selectedFilter === "active" && staff.status !== "active") return false;
    if (selectedFilter === "on-leave" && staff.status !== "on-leave")
      return false;
    if (
      searchTerm &&
      !staff.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !staff.email.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !staff.role.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return false;
    }
    return true;
  });

  const stats = {
    total: staffData.filter(
      (s) => selectedCenter === "All Centers" || s.center === selectedCenter,
    ).length,
    active: staffData.filter(
      (s) =>
        s.status === "active" &&
        (selectedCenter === "All Centers" || s.center === selectedCenter),
    ).length,
    avgRating: (
      staffData
        .filter(
          (s) =>
            selectedCenter === "All Centers" || s.center === selectedCenter,
        )
        .reduce((acc, s) => acc + s.rating, 0) /
      staffData.filter(
        (s) => selectedCenter === "All Centers" || s.center === selectedCenter,
      ).length
    ).toFixed(1),
    avgPerformance: Math.round(
      staffData
        .filter(
          (s) =>
            selectedCenter === "All Centers" || s.center === selectedCenter,
        )
        .reduce((acc, s) => acc + s.performance, 0) /
        staffData.filter(
          (s) =>
            selectedCenter === "All Centers" || s.center === selectedCenter,
        ).length,
    ),
  };

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
            Staff Management
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Manage and monitor staff performance across all centers
          </p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-medium shadow-lg hover:shadow-xl flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Add Staff
        </motion.button>
      </motion.div>

      {/* Stats Cards */}
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
                {stats.total}
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
          transition={{ delay: 0.1 }}
          className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-800 dark:text-white">
                {stats.active}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                Active
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
              <Award className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-800 dark:text-white">
                {stats.avgRating}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                Avg Rating
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
                {stats.avgPerformance}%
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                Avg Performance
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Filters and Search */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700"
      >
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          <div className="relative flex-1 w-full lg:max-w-md">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search by name, email, or role..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
            />
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setSelectedFilter("all")}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedFilter === "all"
                  ? "bg-blue-500 text-white"
                  : "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setSelectedFilter("active")}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedFilter === "active"
                  ? "bg-green-500 text-white"
                  : "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400"
              }`}
            >
              Active
            </button>
            <button
              onClick={() => setSelectedFilter("on-leave")}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedFilter === "on-leave"
                  ? "bg-orange-500 text-white"
                  : "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400"
              }`}
            >
              On Leave
            </button>
          </div>

          <button className="px-6 py-3 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded-xl font-medium hover:bg-slate-200 dark:hover:bg-slate-600 flex items-center gap-2">
            <Download className="w-5 h-5" />
            Export
          </button>
        </div>
      </motion.div>

      {/* Staff Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600 dark:text-slate-400">
                  Staff Member
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600 dark:text-slate-400">
                  Center
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600 dark:text-slate-400">
                  Role
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600 dark:text-slate-400">
                  Subjects
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600 dark:text-slate-400">
                  Experience
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600 dark:text-slate-400">
                  Rating
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600 dark:text-slate-400">
                  Performance
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600 dark:text-slate-400">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600 dark:text-slate-400">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              {filteredStaff.map((staff, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-semibold">
                        {staff.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-medium text-slate-800 dark:text-white">
                          {staff.name}
                        </div>
                        <div className="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-1">
                          <Mail className="w-3 h-3" />
                          {staff.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-slate-800 dark:text-white">
                      {staff.center}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-slate-800 dark:text-white">
                      {staff.role}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-1">
                      {staff.subjects.map((subject, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded text-xs"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      {staff.experience}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1">
                      <Award className="w-4 h-4 text-yellow-500" />
                      <span className="font-semibold text-slate-800 dark:text-white">
                        {staff.rating}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="space-y-1">
                      <div className="text-sm font-semibold text-slate-800 dark:text-white">
                        {staff.performance}%
                      </div>
                      <div className="w-24 bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
                          style={{ width: `${staff.performance}%` }}
                        />
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        staff.status === "active"
                          ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400"
                          : "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400"
                      }`}
                    >
                      {staff.status === "active" ? "Active" : "On Leave"}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button className="p-2 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400 transition-colors">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 hover:bg-purple-50 dark:hover:bg-purple-900/30 rounded-lg text-purple-600 dark:text-purple-400 transition-colors">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg text-red-600 dark:text-red-400 transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredStaff.length === 0 && (
          <div className="text-center py-12 text-slate-600 dark:text-slate-400">
            No staff members found matching your criteria.
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Staff;
