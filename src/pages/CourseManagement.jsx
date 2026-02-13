import { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  BookOpen,
  Plus,
  Users,
  DollarSign,
  Clock,
  Video,
} from "lucide-react";
import { courses } from "../data/staticData";
import { useSelector } from "react-redux";

const CourseManagement = () => {
  const { selectedCenter } = useSelector((state) => state.auth);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter courses based on center
  const filteredCourses = courses.filter((course) => {
    const matchesCenter =
      selectedCenter === "All Centers" ||
      course.center === selectedCenter ||
      course.center === "All Centers";
    const matchesSearch = course.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCenter && matchesSearch;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case "Published":
        return "bg-green-500/10 text-green-500 border-green-500/20";
      case "Draft":
        return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
      case "Archived":
        return "bg-gray-500/10 text-gray-500 border-gray-500/20";
      default:
        return "bg-gray-500/10 text-gray-500 border-gray-500/20";
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
      >
        <div>
          <h1 className="text-3xl font-bold text-slate-800 dark:text-white mb-2">
            Course Management
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Create, edit, and manage all courses
          </p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
        >
          <Plus className="w-5 h-5" />
          <span>Create New Course</span>
        </motion.button>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          {
            label: "Total Courses",
            value: filteredCourses.length,
            icon: BookOpen,
            color: "from-purple-500 to-purple-600",
          },
          {
            label: "Published",
            value: filteredCourses.filter((c) => c.status === "Published")
              .length,
            icon: Video,
            color: "from-green-500 to-green-600",
          },
          {
            label: "Total Students",
            value: filteredCourses.reduce((sum, c) => sum + c.students, 0),
            icon: Users,
            color: "from-blue-500 to-blue-600",
          },
          {
            label: "Draft",
            value: filteredCourses.filter((c) => c.status === "Draft").length,
            icon: Clock,
            color: "from-yellow-500 to-yellow-600",
          },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-md border border-slate-200 dark:border-slate-700"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                  {stat.label}
                </p>
                <p className="text-2xl font-bold text-slate-800 dark:text-white">
                  {stat.value}
                </p>
              </div>
              <div
                className={`p-3 rounded-lg bg-gradient-to-br ${stat.color} shadow-lg`}
              >
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Search */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md border border-slate-200 dark:border-slate-700"
      >
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search courses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
      </motion.div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden group hover:shadow-2xl transition-all duration-300"
          >
            {/* Course Header */}
            <div className="h-36 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute top-4 right-4">
                <span
                  className={`px-3 py-1 text-xs font-semibold rounded-full border ${getStatusColor(course.status)}`}
                >
                  {course.status}
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-xl font-bold text-white mb-1">
                  {course.name}
                </h3>
                <p className="text-sm text-white/80">{course.category}</p>
              </div>
            </div>

            {/* Course Body */}
            <div className="p-6">
              <div className="space-y-4">
                {/* Faculty */}
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-xs">
                    {course.faculty
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Faculty
                    </p>
                    <p className="font-semibold text-slate-800 dark:text-white">
                      {course.faculty}
                    </p>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <Users className="w-4 h-4 text-blue-500" />
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Students
                      </p>
                    </div>
                    <p className="text-lg font-bold text-slate-800 dark:text-white">
                      {course.students}
                    </p>
                  </div>
                  <div className="p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <DollarSign className="w-4 h-4 text-green-500" />
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Price
                      </p>
                    </div>
                    <p className="text-lg font-bold text-slate-800 dark:text-white">
                      ₹{course.price.toLocaleString()}
                    </p>
                  </div>
                  <div className="p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <Clock className="w-4 h-4 text-purple-500" />
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Duration
                      </p>
                    </div>
                    <p className="text-sm font-bold text-slate-800 dark:text-white">
                      {course.duration}
                    </p>
                  </div>
                  <div className="p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <BookOpen className="w-4 h-4 text-orange-500" />
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Modules
                      </p>
                    </div>
                    <p className="text-lg font-bold text-slate-800 dark:text-white">
                      {course.modules}
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-lg transition-colors text-sm"
                  >
                    Edit
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 px-4 py-2 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-800 dark:text-white font-semibold rounded-lg transition-colors text-sm"
                  >
                    View
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CourseManagement;
