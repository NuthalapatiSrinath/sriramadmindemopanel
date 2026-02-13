import { useState } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import {
  BookOpen,
  Plus,
  Search,
  Download,
  Edit,
  Trash2,
  Eye,
  Users,
  Clock,
  DollarSign,
  TrendingUp,
  Award,
} from "lucide-react";

// TEMPLATE PAGE - Copy this structure for new pages
// This shows the standard pattern for creating working pages

const Courses = () => {
  const { selectedCenter } = useSelector((state) => state.auth);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  // Sample data - Replace with your actual data structure
  const coursesData = [
    {
      name: "JEE Advanced Complete",
      code: "JEE-ADV-2025",
      center: "Delhi Center",
      duration: "12 months",
      students: 145,
      batches: 5,
      fee: "₹85,000",
      status: "active",
      rating: 4.8,
      completion: 78,
    },
    {
      name: "NEET Foundation",
      code: "NEET-FDN-2025",
      center: "Mumbai Center",
      duration: "10 months",
      students: 180,
      batches: 6,
      fee: "₹75,000",
      status: "active",
      rating: 4.9,
      completion: 85,
    },
    {
      name: "Class 10 CBSE",
      code: "X-CBSE-2025",
      center: "Bangalore Center",
      duration: "8 months",
      students: 120,
      batches: 4,
      fee: "₹45,000",
      status: "active",
      rating: 4.6,
      completion: 92,
    },
    {
      name: "Class 12 Science",
      code: "XII-SCI-2025",
      center: "Chennai Center",
      duration: "10 months",
      students: 135,
      batches: 5,
      fee: "₹55,000",
      status: "active",
      rating: 4.7,
      completion: 88,
    },
    {
      name: "Foundation Maths",
      code: "FDN-MATH-2025",
      center: "Delhi Center",
      duration: "6 months",
      students: 95,
      batches: 3,
      fee: "₹35,000",
      status: "active",
      rating: 4.5,
      completion: 70,
    },
  ];

  // Filter data based on center and search
  const filteredCourses = coursesData.filter((course) => {
    if (selectedCenter !== "All Centers" && course.center !== selectedCenter) {
      return false;
    }
    if (selectedFilter === "active" && course.status !== "active") return false;
    if (selectedFilter === "inactive" && course.status !== "inactive")
      return false;
    if (
      searchTerm &&
      !course.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !course.code.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return false;
    }
    return true;
  });

  // Calculate stats
  const stats = {
    total: coursesData.filter(
      (c) => selectedCenter === "All Centers" || c.center === selectedCenter,
    ).length,
    active: coursesData.filter(
      (c) =>
        c.status === "active" &&
        (selectedCenter === "All Centers" || c.center === selectedCenter),
    ).length,
    totalStudents: coursesData
      .filter(
        (c) => selectedCenter === "All Centers" || c.center === selectedCenter,
      )
      .reduce((acc, c) => acc + c.students, 0),
    avgRating: (
      coursesData
        .filter(
          (c) =>
            selectedCenter === "All Centers" || c.center === selectedCenter,
        )
        .reduce((acc, c) => acc + c.rating, 0) /
      coursesData.filter(
        (c) => selectedCenter === "All Centers" || c.center === selectedCenter,
      ).length
    ).toFixed(1),
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
            Course Management
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Manage courses and their enrollments across centers
          </p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-medium shadow-lg hover:shadow-xl flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Add Course
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
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-800 dark:text-white">
                {stats.total}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                Total Courses
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
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-800 dark:text-white">
                {stats.active}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                Active Courses
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
                {stats.totalStudents}
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
          transition={{ delay: 0.3 }}
          className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
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
              placeholder="Search by course name or code..."
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
          </div>

          <button className="px-6 py-3 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded-xl font-medium hover:bg-slate-200 dark:hover:bg-slate-600 flex items-center gap-2">
            <Download className="w-5 h-5" />
            Export
          </button>
        </div>
      </motion.div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredCourses.map((course, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + index * 0.1 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                    {course.name}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {course.code}
                  </p>
                </div>
              </div>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-sm font-medium">
                Active
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <div className="text-xs text-slate-600 dark:text-slate-400 mb-1">
                  Center
                </div>
                <div className="text-sm font-medium text-slate-800 dark:text-white">
                  {course.center}
                </div>
              </div>
              <div>
                <div className="text-xs text-slate-600 dark:text-slate-400 mb-1">
                  Duration
                </div>
                <div className="text-sm font-medium text-slate-800 dark:text-white flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {course.duration}
                </div>
              </div>
              <div>
                <div className="text-xs text-slate-600 dark:text-slate-400 mb-1">
                  Students
                </div>
                <div className="text-sm font-medium text-slate-800 dark:text-white flex items-center gap-1">
                  <Users className="w-3 h-3" />
                  {course.students}
                </div>
              </div>
              <div>
                <div className="text-xs text-slate-600 dark:text-slate-400 mb-1">
                  Fee
                </div>
                <div className="text-sm font-medium text-slate-800 dark:text-white flex items-center gap-1">
                  <DollarSign className="w-3 h-3" />
                  {course.fee}
                </div>
              </div>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-400">
                  Completion Rate
                </span>
                <span className="font-semibold text-slate-800 dark:text-white">
                  {course.completion}%
                </span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${course.completion}%` }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 1 }}
                />
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-1">
                <Award className="w-4 h-4 text-yellow-500" />
                <span className="text-sm font-semibold text-slate-800 dark:text-white">
                  {course.rating}
                </span>
              </div>
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
            </div>
          </motion.div>
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <div className="text-center py-12 text-slate-600 dark:text-slate-400">
          No courses found matching your criteria.
        </div>
      )}
    </div>
  );
};

export default Courses;
