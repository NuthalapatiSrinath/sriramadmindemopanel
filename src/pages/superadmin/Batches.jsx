import { useState } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import {
  Users,
  BookOpen,
  Calendar,
  Clock,
  TrendingUp,
  Award,
  CheckCircle,
  AlertCircle,
  Layers,
  Target,
  Activity,
  MapPin,
  DollarSign,
  BarChart3,
  ArrowUpRight,
  ArrowDownRight,
  GraduationCap,
  User,
  ChevronRight,
  Plus,
  Edit,
  Trash2,
  Download,
  Filter,
  Search,
  MoreVertical,
  PlayCircle,
  PauseCircle,
  XCircle,
  Eye,
  UserCheck,
  UserX,
} from "lucide-react";

const Batches = () => {
  const { selectedCenter } = useSelector((state) => state.auth);
  const [viewMode, setViewMode] = useState("grid"); // grid, list, timeline, schedule
  const [filterStatus, setFilterStatus] = useState("all"); // all, active, upcoming, completed
  const [filterCenter, setFilterCenter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Comprehensive batch data
  const batchesData = [
    {
      id: "B001",
      name: "Web Development Bootcamp - Batch 1",
      course: "Full Stack Web Development",
      center: "Delhi Center",
      status: "active",
      startDate: "2024-01-15",
      endDate: "2024-06-15",
      duration: "6 months",
      schedule: "Mon-Fri, 10:00 AM - 1:00 PM",
      instructor: "Rajesh Kumar",
      totalStudents: 45,
      activeStudents: 43,
      droppedStudents: 2,
      capacity: 50,
      completionRate: 72,
      avgAttendance: 92,
      avgGrade: 85,
      revenue: 337500,
      feePerStudent: 7500,
      classroomUtilization: 90,
      progressPercentage: 65,
      weeklyHours: 15,
      totalHours: 360,
      completedHours: 234,
      topics: 12,
      completedTopics: 8,
      assessments: 8,
      completedAssessments: 5,
      nextClass: "2024-06-10 10:00 AM",
      currentTopic: "React Advanced Patterns",
      upcomingAssessment: "Final Project Presentation",
    },
    {
      id: "B002",
      name: "Data Science Professional - Batch 2",
      course: "Data Science & Machine Learning",
      center: "Mumbai Center",
      status: "active",
      startDate: "2024-02-01",
      endDate: "2024-08-01",
      duration: "6 months",
      schedule: "Tue-Sat, 2:00 PM - 5:00 PM",
      instructor: "Priya Sharma",
      totalStudents: 38,
      activeStudents: 38,
      droppedStudents: 0,
      capacity: 40,
      completionRate: 85,
      avgAttendance: 95,
      avgGrade: 88,
      revenue: 342000,
      feePerStudent: 9000,
      classroomUtilization: 95,
      progressPercentage: 55,
      weeklyHours: 15,
      totalHours: 360,
      completedHours: 198,
      topics: 14,
      completedTopics: 8,
      assessments: 10,
      completedAssessments: 5,
      nextClass: "2024-06-11 2:00 PM",
      currentTopic: "Deep Learning with TensorFlow",
      upcomingAssessment: "ML Model Building Project",
    },
    {
      id: "B003",
      name: "Digital Marketing Mastery - Batch 1",
      course: "Digital Marketing",
      center: "Bangalore Center",
      status: "active",
      startDate: "2024-03-01",
      endDate: "2024-06-01",
      duration: "3 months",
      schedule: "Mon-Wed-Fri, 6:00 PM - 9:00 PM",
      instructor: "Amit Patel",
      totalStudents: 52,
      activeStudents: 50,
      droppedStudents: 2,
      capacity: 60,
      completionRate: 68,
      avgAttendance: 88,
      avgGrade: 82,
      revenue: 260000,
      feePerStudent: 5000,
      classroomUtilization: 87,
      progressPercentage: 80,
      weeklyHours: 9,
      totalHours: 108,
      completedHours: 86,
      topics: 10,
      completedTopics: 8,
      assessments: 6,
      completedAssessments: 5,
      nextClass: "2024-06-10 6:00 PM",
      currentTopic: "Social Media Advertising",
      upcomingAssessment: "Campaign Strategy Presentation",
    },
    {
      id: "B004",
      name: "Mobile App Development - Batch 3",
      course: "iOS & Android Development",
      center: "Delhi Center",
      status: "upcoming",
      startDate: "2024-07-01",
      endDate: "2024-12-31",
      duration: "6 months",
      schedule: "Mon-Fri, 10:00 AM - 1:00 PM",
      instructor: "Sneha Reddy",
      totalStudents: 35,
      activeStudents: 0,
      droppedStudents: 0,
      capacity: 45,
      completionRate: 0,
      avgAttendance: 0,
      avgGrade: 0,
      revenue: 315000,
      feePerStudent: 9000,
      classroomUtilization: 0,
      progressPercentage: 0,
      weeklyHours: 15,
      totalHours: 360,
      completedHours: 0,
      topics: 12,
      completedTopics: 0,
      assessments: 8,
      completedAssessments: 0,
      nextClass: "2024-07-01 10:00 AM",
      currentTopic: "Not Started",
      upcomingAssessment: "Enrollment Ongoing",
    },
    {
      id: "B005",
      name: "Cloud Computing AWS - Batch 2",
      course: "AWS Cloud Architecture",
      center: "Mumbai Center",
      status: "active",
      startDate: "2024-02-15",
      endDate: "2024-05-15",
      duration: "3 months",
      schedule: "Sat-Sun, 10:00 AM - 4:00 PM",
      instructor: "Vikram Singh",
      totalStudents: 28,
      activeStudents: 27,
      droppedStudents: 1,
      capacity: 30,
      completionRate: 75,
      avgAttendance: 90,
      avgGrade: 86,
      revenue: 280000,
      feePerStudent: 10000,
      classroomUtilization: 93,
      progressPercentage: 70,
      weeklyHours: 12,
      totalHours: 144,
      completedHours: 101,
      topics: 8,
      completedTopics: 6,
      assessments: 5,
      completedAssessments: 4,
      nextClass: "2024-06-08 10:00 AM",
      currentTopic: "AWS Security & IAM",
      upcomingAssessment: "Cloud Architecture Design",
    },
    {
      id: "B006",
      name: "UI/UX Design - Batch 4",
      course: "UI/UX Design Professional",
      center: "Bangalore Center",
      status: "completed",
      startDate: "2023-12-01",
      endDate: "2024-03-01",
      duration: "3 months",
      schedule: "Mon-Thu, 3:00 PM - 6:00 PM",
      instructor: "Neha Gupta",
      totalStudents: 42,
      activeStudents: 40,
      droppedStudents: 2,
      capacity: 45,
      completionRate: 95,
      avgAttendance: 94,
      avgGrade: 89,
      revenue: 210000,
      feePerStudent: 5000,
      classroomUtilization: 93,
      progressPercentage: 100,
      weeklyHours: 12,
      totalHours: 144,
      completedHours: 144,
      topics: 10,
      completedTopics: 10,
      assessments: 6,
      completedAssessments: 6,
      nextClass: "Completed",
      currentTopic: "All Topics Completed",
      upcomingAssessment: "Course Completed",
    },
    {
      id: "B007",
      name: "Python Programming - Batch 5",
      course: "Python for Beginners",
      center: "Chennai Center",
      status: "active",
      startDate: "2024-04-01",
      endDate: "2024-06-30",
      duration: "3 months",
      schedule: "Tue-Thu, 5:00 PM - 8:00 PM",
      instructor: "Arun Kumar",
      totalStudents: 55,
      activeStudents: 52,
      droppedStudents: 3,
      capacity: 60,
      completionRate: 70,
      avgAttendance: 87,
      avgGrade: 80,
      revenue: 220000,
      feePerStudent: 4000,
      classroomUtilization: 92,
      progressPercentage: 60,
      weeklyHours: 9,
      totalHours: 108,
      completedHours: 65,
      topics: 9,
      completedTopics: 5,
      assessments: 5,
      completedAssessments: 3,
      nextClass: "2024-06-11 5:00 PM",
      currentTopic: "Object-Oriented Programming",
      upcomingAssessment: "OOP Project Submission",
    },
    {
      id: "B008",
      name: "Cyber Security Fundamentals - Batch 1",
      course: "Cyber Security",
      center: "Delhi Center",
      status: "upcoming",
      startDate: "2024-08-01",
      endDate: "2024-11-01",
      duration: "3 months",
      schedule: "Mon-Wed-Fri, 6:00 PM - 9:00 PM",
      instructor: "Rahul Mehta",
      totalStudents: 30,
      activeStudents: 0,
      droppedStudents: 0,
      capacity: 35,
      completionRate: 0,
      avgAttendance: 0,
      avgGrade: 0,
      revenue: 360000,
      feePerStudent: 12000,
      classroomUtilization: 0,
      progressPercentage: 0,
      weeklyHours: 9,
      totalHours: 108,
      completedHours: 0,
      topics: 11,
      completedTopics: 0,
      assessments: 7,
      completedAssessments: 0,
      nextClass: "2024-08-01 6:00 PM",
      currentTopic: "Not Started",
      upcomingAssessment: "Enrollment Ongoing",
    },
  ];

  // Summary statistics
  const stats = {
    totalBatches: batchesData.length,
    activeBatches: batchesData.filter((b) => b.status === "active").length,
    upcomingBatches: batchesData.filter((b) => b.status === "upcoming").length,
    completedBatches: batchesData.filter((b) => b.status === "completed")
      .length,
    totalStudents: batchesData.reduce((sum, b) => sum + b.totalStudents, 0),
    activeStudents: batchesData.reduce((sum, b) => sum + b.activeStudents, 0),
    avgAttendance: (
      batchesData
        .filter((b) => b.status === "active")
        .reduce((sum, b) => sum + b.avgAttendance, 0) /
      batchesData.filter((b) => b.status === "active").length
    ).toFixed(1),
    totalRevenue: batchesData.reduce((sum, b) => sum + b.revenue, 0),
    avgCompletionRate: (
      batchesData
        .filter((b) => b.status === "active" || b.status === "completed")
        .reduce((sum, b) => sum + b.completionRate, 0) /
      batchesData.filter(
        (b) => b.status === "active" || b.status === "completed",
      ).length
    ).toFixed(1),
  };

  // Filter batches
  const filteredBatches = batchesData.filter((batch) => {
    const statusMatch = filterStatus === "all" || batch.status === filterStatus;
    const centerMatch = filterCenter === "all" || batch.center === filterCenter;
    const searchMatch =
      searchQuery === "" ||
      batch.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      batch.course.toLowerCase().includes(searchQuery.toLowerCase()) ||
      batch.instructor.toLowerCase().includes(searchQuery.toLowerCase());

    return statusMatch && centerMatch && searchMatch;
  });

  // Status badge
  const getStatusBadge = (status) => {
    switch (status) {
      case "active":
        return {
          bg: "bg-green-100 dark:bg-green-900/30",
          text: "text-green-600 dark:text-green-400",
          icon: PlayCircle,
        };
      case "upcoming":
        return {
          bg: "bg-blue-100 dark:bg-blue-900/30",
          text: "text-blue-600 dark:text-blue-400",
          icon: Clock,
        };
      case "completed":
        return {
          bg: "bg-slate-100 dark:bg-slate-900/30",
          text: "text-slate-600 dark:text-slate-400",
          icon: CheckCircle,
        };
      default:
        return {
          bg: "bg-slate-100",
          text: "text-slate-600",
          icon: AlertCircle,
        };
    }
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
            Batch Management
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Manage all course batches, schedules, and student enrollments
          </p>
        </div>
        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Create Batch
          </motion.button>
        </div>
      </motion.div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {[
          {
            label: "Total Batches",
            value: stats.totalBatches,
            icon: Layers,
            color: "from-blue-500 to-cyan-500",
            change: "+3",
          },
          {
            label: "Active Batches",
            value: stats.activeBatches,
            icon: PlayCircle,
            color: "from-green-500 to-emerald-500",
            change: "+2",
          },
          {
            label: "Total Students",
            value: stats.totalStudents,
            icon: Users,
            color: "from-purple-500 to-pink-500",
            change: "+45",
          },
          {
            label: "Avg Attendance",
            value: `${stats.avgAttendance}%`,
            icon: UserCheck,
            color: "from-orange-500 to-red-500",
            change: "+2.3%",
          },
          {
            label: "Total Revenue",
            value: `₹${(stats.totalRevenue / 1000).toFixed(0)}K`,
            icon: DollarSign,
            color: "from-indigo-500 to-purple-500",
            change: "+18%",
          },
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-lg border border-slate-200 dark:border-slate-700 relative overflow-hidden"
          >
            <div
              className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${stat.color} opacity-10 blur-2xl`}
            />
            <div className="relative">
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-3`}
              >
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                {stat.label}
              </div>
              <div className="flex items-end justify-between">
                <div className="text-2xl font-bold text-slate-800 dark:text-white">
                  {stat.value}
                </div>
                <div className="flex items-center gap-1 text-xs text-green-600 dark:text-green-400">
                  <ArrowUpRight className="w-3 h-3" />
                  <span>{stat.change}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Filters and Search */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700"
      >
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3 flex-wrap">
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search batches..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
              />
            </div>

            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="upcoming">Upcoming</option>
              <option value="completed">Completed</option>
            </select>

            <select
              value={filterCenter}
              onChange={(e) => setFilterCenter(e.target.value)}
              className="px-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Centers</option>
              <option value="Delhi Center">Delhi Center</option>
              <option value="Mumbai Center">Mumbai Center</option>
              <option value="Bangalore Center">Bangalore Center</option>
              <option value="Chennai Center">Chennai Center</option>
            </select>
          </div>

          <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-900 rounded-xl p-1">
            {["grid", "list", "timeline", "schedule"].map((mode) => (
              <button
                key={mode}
                onClick={() => setViewMode(mode)}
                className={`px-3 py-2 rounded-lg text-sm font-medium capitalize transition-all ${
                  viewMode === mode
                    ? "bg-white dark:bg-slate-800 text-slate-800 dark:text-white shadow"
                    : "text-slate-600 dark:text-slate-400"
                }`}
              >
                {mode}
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Grid View */}
      {viewMode === "grid" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBatches.map((batch, index) => {
            const statusBadge = getStatusBadge(batch.status);
            const StatusIcon = statusBadge.icon;

            return (
              <motion.div
                key={batch.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.05 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 opacity-5 blur-3xl" />

                <div className="relative">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div
                        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${statusBadge.bg} ${statusBadge.text} mb-2`}
                      >
                        <StatusIcon className="w-3 h-3" />
                        {batch.status.charAt(0).toUpperCase() +
                          batch.status.slice(1)}
                      </div>
                      <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-1">
                        {batch.name}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {batch.course}
                      </p>
                    </div>
                    <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors">
                      <MoreVertical className="w-5 h-5 text-slate-400" />
                    </button>
                  </div>

                  {/* Info Grid */}
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4 text-slate-400" />
                      <span className="text-slate-600 dark:text-slate-400">
                        {batch.center}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <User className="w-4 h-4 text-slate-400" />
                      <span className="text-slate-600 dark:text-slate-400">
                        {batch.instructor}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-slate-400" />
                      <span className="text-slate-600 dark:text-slate-400">
                        {batch.startDate} - {batch.endDate}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-slate-400" />
                      <span className="text-slate-600 dark:text-slate-400">
                        {batch.schedule}
                      </span>
                    </div>
                  </div>

                  {/* Progress */}
                  {batch.status === "active" && (
                    <div className="mb-4">
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span className="text-slate-600 dark:text-slate-400">
                          Progress
                        </span>
                        <span className="font-semibold text-slate-800 dark:text-white">
                          {batch.progressPercentage}%
                        </span>
                      </div>
                      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${batch.progressPercentage}%` }}
                          transition={{
                            delay: 0.7 + index * 0.05,
                            duration: 0.8,
                          }}
                        />
                      </div>
                    </div>
                  )}

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                    <div>
                      <div className="text-2xl font-bold text-slate-800 dark:text-white">
                        {batch.totalStudents}
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-400">
                        Students
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                        {batch.avgAttendance || 0}%
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-400">
                        Attendance
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        {batch.avgGrade || 0}%
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-400">
                        Avg Grade
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 mt-4">
                    <button className="flex-1 px-3 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors text-sm font-medium flex items-center justify-center gap-2">
                      <Eye className="w-4 h-4" />
                      View Details
                    </button>
                    <button className="p-2 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
                      <Edit className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* Timeline View */}
      {viewMode === "timeline" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700"
        >
          <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-6">
            Batch Timeline
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700"></div>

            <div className="space-y-8">
              {filteredBatches.map((batch, index) => {
                const statusBadge = getStatusBadge(batch.status);
                const StatusIcon = statusBadge.icon;

                return (
                  <motion.div
                    key={batch.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="relative pl-16"
                  >
                    {/* Timeline dot */}
                    <div
                      className={`absolute left-6 w-5 h-5 rounded-full bg-gradient-to-r ${
                        batch.status === "active"
                          ? "from-green-500 to-emerald-500"
                          : batch.status === "upcoming"
                            ? "from-blue-500 to-cyan-500"
                            : "from-slate-400 to-slate-500"
                      } ring-4 ring-white dark:ring-slate-800 flex items-center justify-center`}
                    >
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    </div>

                    <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <div
                            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${statusBadge.bg} ${statusBadge.text} mb-2`}
                          >
                            <StatusIcon className="w-3 h-3" />
                            {batch.status.charAt(0).toUpperCase() +
                              batch.status.slice(1)}
                          </div>
                          <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                            {batch.name}
                          </h3>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            {batch.course} • {batch.center}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                            Duration
                          </div>
                          <div className="font-semibold text-slate-800 dark:text-white">
                            {batch.duration}
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-4 gap-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-slate-400" />
                          <div>
                            <div className="text-xs text-slate-600 dark:text-slate-400">
                              Start Date
                            </div>
                            <div className="text-sm font-medium text-slate-800 dark:text-white">
                              {batch.startDate}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-slate-400" />
                          <div>
                            <div className="text-xs text-slate-600 dark:text-slate-400">
                              Students
                            </div>
                            <div className="text-sm font-medium text-slate-800 dark:text-white">
                              {batch.totalStudents}/{batch.capacity}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4 text-slate-400" />
                          <div>
                            <div className="text-xs text-slate-600 dark:text-slate-400">
                              Instructor
                            </div>
                            <div className="text-sm font-medium text-slate-800 dark:text-white">
                              {batch.instructor}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4 text-slate-400" />
                          <div>
                            <div className="text-xs text-slate-600 dark:text-slate-400">
                              Revenue
                            </div>
                            <div className="text-sm font-medium text-slate-800 dark:text-white">
                              ₹{(batch.revenue / 1000).toFixed(0)}K
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      )}

      {/* Schedule View */}
      {viewMode === "schedule" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700"
        >
          <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-6">
            Weekly Schedule
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-700">
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-600 dark:text-slate-400">
                    Time
                  </th>
                  {[
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ].map((day) => (
                    <th
                      key={day}
                      className="px-4 py-3 text-left text-sm font-semibold text-slate-600 dark:text-slate-400"
                    >
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {["10:00 AM", "2:00 PM", "5:00 PM", "6:00 PM"].map(
                  (time, timeIndex) => (
                    <tr
                      key={timeIndex}
                      className="border-b border-slate-200 dark:border-slate-700"
                    >
                      <td className="px-4 py-4 text-sm font-medium text-slate-600 dark:text-slate-400">
                        {time}
                      </td>
                      {[
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                        "Saturday",
                        "Sunday",
                      ].map((day, dayIndex) => {
                        // Find batches that match this time slot
                        const matchingBatch = filteredBatches.find(
                          (batch) =>
                            batch.status === "active" &&
                            batch.schedule.includes(time),
                        );

                        return (
                          <td key={dayIndex} className="px-4 py-4">
                            {matchingBatch && (
                              <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                  delay:
                                    0.7 + timeIndex * 0.1 + dayIndex * 0.05,
                                }}
                                className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white cursor-pointer hover:shadow-lg transition-shadow"
                              >
                                <div className="text-xs font-medium mb-1">
                                  {matchingBatch.course}
                                </div>
                                <div className="text-xs opacity-90">
                                  {matchingBatch.center}
                                </div>
                                <div className="text-xs opacity-75 mt-1">
                                  {matchingBatch.instructor}
                                </div>
                              </motion.div>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ),
                )}
              </tbody>
            </table>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Batches;
