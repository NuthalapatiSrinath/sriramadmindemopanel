import { useState } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import {
  Users,
  Search,
  Filter,
  Download,
  Plus,
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Award,
  TrendingUp,
  Eye,
  Edit,
  Trash2,
  MoreVertical,
  UserCheck,
  UserX,
} from "lucide-react";

const Students = () => {
  const { selectedCenter } = useSelector((state) => state.auth);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  const students = [
    {
      id: 1,
      name: "Rahul Kumar",
      email: "rahul.k@example.com",
      phone: "+91 98765 43210",
      center: "Delhi Center",
      batch: "Batch A1",
      course: "UPSC CSE",
      enrollDate: "2025-01-15",
      status: "active",
      attendance: 92,
      performance: 85,
      avatar: "RK",
    },
    {
      id: 2,
      name: "Priya Sharma",
      email: "priya.s@example.com",
      phone: "+91 98765 43211",
      center: "Mumbai Center",
      batch: "Batch B2",
      course: "UPSC CSE",
      enrollDate: "2025-01-10",
      status: "active",
      attendance: 95,
      performance: 90,
      avatar: "PS",
    },
    {
      id: 3,
      name: "Amit Patel",
      email: "amit.p@example.com",
      phone: "+91 98765 43212",
      center: "Bangalore Center",
      batch: "Batch C3",
      course: "UPSC CSE",
      enrollDate: "2025-01-20",
      status: "active",
      attendance: 88,
      performance: 78,
      avatar: "AP",
    },
    {
      id: 4,
      name: "Sneha Reddy",
      email: "sneha.r@example.com",
      phone: "+91 98765 43213",
      center: "Chennai Center",
      batch: "Batch D4",
      course: "SSC CGL",
      enrollDate: "2025-01-25",
      status: "active",
      attendance: 90,
      performance: 82,
      avatar: "SR",
    },
    {
      id: 5,
      name: "Vikram Singh",
      email: "vikram.s@example.com",
      phone: "+91 98765 43214",
      center: "Delhi Center",
      batch: "Batch A2",
      course: "Bank PO",
      enrollDate: "2024-12-15",
      status: "inactive",
      attendance: 75,
      performance: 70,
      avatar: "VS",
    },
    {
      id: 6,
      name: "Anjali Gupta",
      email: "anjali.g@example.com",
      phone: "+91 98765 43215",
      center: "Mumbai Center",
      batch: "Batch B1",
      course: "UPSC CSE",
      enrollDate: "2025-02-01",
      status: "active",
      attendance: 98,
      performance: 95,
      avatar: "AG",
    },
  ];

  const stats = [
    {
      label: "Total Students",
      value: "3,527",
      icon: Users,
      color: "from-blue-500 to-cyan-500",
      change: "+12%",
    },
    {
      label: "Active Students",
      value: "3,245",
      icon: UserCheck,
      color: "from-green-500 to-emerald-500",
      change: "+8%",
    },
    {
      label: "New This Month",
      value: "245",
      icon: TrendingUp,
      color: "from-purple-500 to-pink-500",
      change: "+18%",
    },
    {
      label: "Avg Attendance",
      value: "89%",
      icon: Award,
      color: "from-orange-500 to-red-500",
      change: "+3%",
    },
  ];

  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.batch.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter =
      selectedFilter === "all" || student.status === selectedFilter;
    const matchesCenter =
      selectedCenter === "All Centers" || student.center === selectedCenter;
    return matchesSearch && matchesFilter && matchesCenter;
  });

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
            Student Management
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Manage all students across {selectedCenter}
          </p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium shadow-lg"
        >
          <Plus className="w-5 h-5" />
          Add Student
        </motion.button>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700"
            >
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-medium text-green-500">
                  {stat.change}
                </span>
              </div>
              <div className="text-2xl font-bold text-slate-800 dark:text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                {stat.label}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Filters and Search */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700"
      >
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search students by name, email, or batch..."
              className="w-full pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-slate-800 dark:text-white"
            />
          </div>

          {/* Filter Buttons */}
          <div className="flex gap-2">
            <button
              onClick={() => setSelectedFilter("all")}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedFilter === "all"
                  ? "bg-purple-500 text-white"
                  : "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setSelectedFilter("active")}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedFilter === "active"
                  ? "bg-green-500 text-white"
                  : "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
              }`}
            >
              Active
            </button>
            <button
              onClick={() => setSelectedFilter("inactive")}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedFilter === "inactive"
                  ? "bg-red-500 text-white"
                  : "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
              }`}
            >
              Inactive
            </button>
          </div>

          <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-all">
            <Download className="w-5 h-5" />
            Export
          </button>
        </div>
      </motion.div>

      {/* Students Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 dark:bg-slate-900">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600 dark:text-slate-300">
                  Student
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600 dark:text-slate-300">
                  Contact
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600 dark:text-slate-300">
                  Center & Batch
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600 dark:text-slate-300">
                  Course
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600 dark:text-slate-300">
                  Performance
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600 dark:text-slate-300">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600 dark:text-slate-300">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              {filteredStudents.map((student, index) => (
                <motion.tr
                  key={student.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.05 }}
                  className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                        {student.avatar}
                      </div>
                      <div>
                        <div className="font-semibold text-slate-800 dark:text-white">
                          {student.name}
                        </div>
                        <div className="text-sm text-slate-500">
                          ID: {student.id}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                        <Mail className="w-4 h-4" />
                        {student.email}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                        <Phone className="w-4 h-4" />
                        {student.phone}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                        <MapPin className="w-4 h-4" />
                        {student.center}
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">
                        {student.batch}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm font-medium">
                      <GraduationCap className="w-4 h-4" />
                      {student.course}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="text-sm text-slate-600 dark:text-slate-400 w-20">
                          Attendance:
                        </div>
                        <div className="flex-1 bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full"
                            style={{ width: `${student.attendance}%` }}
                          />
                        </div>
                        <span className="text-sm font-semibold text-slate-800 dark:text-white w-10">
                          {student.attendance}%
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="text-sm text-slate-600 dark:text-slate-400 w-20">
                          Performance:
                        </div>
                        <div className="flex-1 bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                            style={{ width: `${student.performance}%` }}
                          />
                        </div>
                        <span className="text-sm font-semibold text-slate-800 dark:text-white w-10">
                          {student.performance}%
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${
                        student.status === "active"
                          ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400"
                          : "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400"
                      }`}
                    >
                      <div
                        className={`w-2 h-2 rounded-full ${student.status === "active" ? "bg-green-500" : "bg-red-500"}`}
                      />
                      {student.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-600 rounded-lg transition-colors">
                        <Eye className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                      </button>
                      <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-600 rounded-lg transition-colors">
                        <Edit className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      </button>
                      <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-600 rounded-lg transition-colors">
                        <Trash2 className="w-4 h-4 text-red-600 dark:text-red-400" />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700">
          <div className="text-sm text-slate-600 dark:text-slate-400">
            Showing {filteredStudents.length} of {students.length} students
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
              Previous
            </button>
            <button className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-all">
              1
            </button>
            <button className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
              2
            </button>
            <button className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
              Next
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Students;
