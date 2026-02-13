import { useState } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import {
  ClipboardList,
  User,
  Calendar,
  Clock,
  Filter,
  Search,
  Download,
  RefreshCw,
  Eye,
  AlertCircle,
  CheckCircle,
  XCircle,
  Info,
  Shield,
  Lock,
  Unlock,
  LogIn,
  LogOut,
  UserPlus,
  UserMinus,
  Edit,
  Trash2,
  Settings,
  Upload,
  FileText,
  Activity,
  TrendingUp,
  Database,
  Server,
  Globe,
  Zap,
  Bell,
  Mail,
  Phone,
  DollarSign,
  CreditCard,
  Award,
} from "lucide-react";

const Logs = () => {
  const { user } = useSelector((state) => state.auth);
  const [filter, setFilter] = useState("all"); // all, security, user, system, payment, data
  const [dateRange, setDateRange] = useState("today"); // today, week, month, custom
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("list"); // list, timeline

  // Activity logs data
  const activityLogs = [
    {
      id: "LOG001",
      timestamp: "2024-06-09 18:45:32",
      type: "security",
      severity: "high",
      category: "Authentication",
      action: "Failed Login Attempt",
      user: "unknown",
      ip: "192.168.1.105",
      details: "Multiple failed login attempts detected from IP 192.168.1.105",
      icon: AlertCircle,
      color: "text-red-600 dark:text-red-400",
      bgColor: "bg-red-50 dark:bg-red-900/20",
    },
    {
      id: "LOG002",
      timestamp: "2024-06-09 18:30:15",
      type: "user",
      severity: "info",
      category: "User Management",
      action: "User Created",
      user: "admin@edutech.com",
      ip: "192.168.1.100",
      details: "New student account created: Rahul Sharma (ID: STU3528)",
      icon: UserPlus,
      color: "text-green-600 dark:text-green-400",
      bgColor: "bg-green-50 dark:bg-green-900/20",
    },
    {
      id: "LOG003",
      timestamp: "2024-06-09 18:15:48",
      type: "payment",
      severity: "info",
      category: "Financial",
      action: "Payment Received",
      user: "student@example.com",
      ip: "192.168.1.102",
      details: "Payment of ₹15,000 received for course enrollment",
      icon: DollarSign,
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      id: "LOG004",
      timestamp: "2024-06-09 18:00:22",
      type: "system",
      severity: "warning",
      category: "System",
      action: "High Memory Usage",
      user: "system",
      ip: "127.0.0.1",
      details: "System memory usage reached 85%. Automatic cleanup initiated.",
      icon: Server,
      color: "text-yellow-600 dark:text-yellow-400",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
    },
    {
      id: "LOG005",
      timestamp: "2024-06-09 17:45:10",
      type: "user",
      severity: "info",
      category: "User Management",
      action: "Profile Updated",
      user: "staff@edutech.com",
      ip: "192.168.1.103",
      details: "Staff member updated their profile information",
      icon: Edit,
      color: "text-purple-600 dark:text-purple-400",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
    },
    {
      id: "LOG006",
      timestamp: "2024-06-09 17:30:55",
      type: "security",
      severity: "info",
      category: "Authentication",
      action: "Successful Login",
      user: "centeradmin@edutech.com",
      ip: "192.168.1.104",
      details: "Center Admin logged in from Mumbai Center",
      icon: LogIn,
      color: "text-green-600 dark:text-green-400",
      bgColor: "bg-green-50 dark:bg-green-900/20",
    },
    {
      id: "LOG007",
      timestamp: "2024-06-09 17:15:30",
      type: "data",
      severity: "info",
      category: "Database",
      action: "Backup Completed",
      user: "system",
      ip: "127.0.0.1",
      details: "Automated database backup completed successfully (1.82 GB)",
      icon: Database,
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      id: "LOG008",
      timestamp: "2024-06-09 17:00:18",
      type: "system",
      severity: "critical",
      category: "System",
      action: "Service Restart",
      user: "admin",
      ip: "192.168.1.100",
      details: "Email service restarted due to connectivity issues",
      icon: RefreshCw,
      color: "text-red-600 dark:text-red-400",
      bgColor: "bg-red-50 dark:bg-red-900/20",
    },
    {
      id: "LOG009",
      timestamp: "2024-06-09 16:45:42",
      type: "user",
      severity: "warning",
      category: "User Management",
      action: "Account Suspended",
      user: "admin@edutech.com",
      ip: "192.168.1.100",
      details: "Student account suspended due to payment default",
      icon: UserMinus,
      color: "text-orange-600 dark:text-orange-400",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
    },
    {
      id: "LOG010",
      timestamp: "2024-06-09 16:30:25",
      type: "security",
      severity: "info",
      category: "Security",
      action: "Password Changed",
      user: "student@example.com",
      ip: "192.168.1.106",
      details: "User successfully changed their password",
      icon: Lock,
      color: "text-green-600 dark:text-green-400",
      bgColor: "bg-green-50 dark:bg-green-900/20",
    },
    {
      id: "LOG011",
      timestamp: "2024-06-09 16:15:08",
      type: "payment",
      severity: "warning",
      category: "Financial",
      action: "Payment Failed",
      user: "student2@example.com",
      ip: "192.168.1.107",
      details: "Payment transaction failed: Insufficient funds",
      icon: XCircle,
      color: "text-red-600 dark:text-red-400",
      bgColor: "bg-red-50 dark:bg-red-900/20",
    },
    {
      id: "LOG012",
      timestamp: "2024-06-09 16:00:50",
      type: "data",
      severity: "info",
      category: "Database",
      action: "Data Export",
      user: "admin@edutech.com",
      ip: "192.168.1.100",
      details: "Student records exported for reporting",
      icon: Download,
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      id: "LOG013",
      timestamp: "2024-06-09 15:45:33",
      type: "system",
      severity: "info",
      category: "System",
      action: "Configuration Updated",
      user: "admin@edutech.com",
      ip: "192.168.1.100",
      details: "Email notification settings updated",
      icon: Settings,
      color: "text-purple-600 dark:text-purple-400",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
    },
    {
      id: "LOG014",
      timestamp: "2024-06-09 15:30:12",
      type: "security",
      severity: "high",
      category: "Security",
      action: "Multiple Failed Logins",
      user: "unknown",
      ip: "203.45.12.88",
      details: "5 consecutive failed login attempts - Account locked",
      icon: Shield,
      color: "text-red-600 dark:text-red-400",
      bgColor: "bg-red-50 dark:bg-red-900/20",
    },
    {
      id: "LOG015",
      timestamp: "2024-06-09 15:15:40",
      type: "user",
      severity: "info",
      category: "User Management",
      action: "Bulk User Import",
      user: "admin@edutech.com",
      ip: "192.168.1.100",
      details: "45 new student records imported via CSV",
      icon: Upload,
      color: "text-green-600 dark:text-green-400",
      bgColor: "bg-green-50 dark:bg-green-900/20",
    },
    {
      id: "LOG016",
      timestamp: "2024-06-09 15:00:28",
      type: "system",
      severity: "info",
      category: "System",
      action: "Scheduled Task Completed",
      user: "system",
      ip: "127.0.0.1",
      details: "Daily attendance report sent to all center admins",
      icon: CheckCircle,
      color: "text-green-600 dark:text-green-400",
      bgColor: "bg-green-50 dark:bg-green-900/20",
    },
    {
      id: "LOG017",
      timestamp: "2024-06-09 14:45:15",
      type: "payment",
      severity: "info",
      category: "Financial",
      action: "Refund Processed",
      user: "admin@edutech.com",
      ip: "192.168.1.100",
      details: "Refund of ₹8,000 processed for student withdrawal",
      icon: CreditCard,
      color: "text-orange-600 dark:text-orange-400",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
    },
    {
      id: "LOG018",
      timestamp: "2024-06-09 14:30:52",
      type: "data",
      severity: "warning",
      category: "Database",
      action: "Query Timeout",
      user: "system",
      ip: "127.0.0.1",
      details: "Long-running query exceeded timeout limit (>30s)",
      icon: Clock,
      color: "text-yellow-600 dark:text-yellow-400",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
    },
    {
      id: "LOG019",
      timestamp: "2024-06-09 14:15:38",
      type: "security",
      severity: "info",
      category: "Security",
      action: "Token Refreshed",
      user: "staff@edutech.com",
      ip: "192.168.1.103",
      details: "Authentication token refreshed successfully",
      icon: RefreshCw,
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      id: "LOG020",
      timestamp: "2024-06-09 14:00:20",
      type: "user",
      severity: "info",
      category: "User Management",
      action: "Role Updated",
      user: "admin@edutech.com",
      ip: "192.168.1.100",
      details: "User role changed from Staff to Center Admin",
      icon: Award,
      color: "text-purple-600 dark:text-purple-400",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
    },
  ];

  // Log statistics
  const logStats = {
    total: activityLogs.length,
    security: activityLogs.filter((log) => log.type === "security").length,
    user: activityLogs.filter((log) => log.type === "user").length,
    system: activityLogs.filter((log) => log.type === "system").length,
    payment: activityLogs.filter((log) => log.type === "payment").length,
    data: activityLogs.filter((log) => log.type === "data").length,
    critical: activityLogs.filter((log) => log.severity === "critical").length,
    high: activityLogs.filter((log) => log.severity === "high").length,
    warning: activityLogs.filter((log) => log.severity === "warning").length,
    info: activityLogs.filter((log) => log.severity === "info").length,
  };

  // Filter logs
  const filteredLogs = activityLogs.filter((log) => {
    const typeMatch = filter === "all" || log.type === filter;
    const searchMatch =
      searchQuery === "" ||
      log.action.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.details.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.user.toLowerCase().includes(searchQuery.toLowerCase());

    return typeMatch && searchMatch;
  });

  // Get severity badge
  const getSeverityBadge = (severity) => {
    switch (severity) {
      case "critical":
        return {
          bg: "bg-red-100 dark:bg-red-900/30",
          text: "text-red-600 dark:text-red-400",
          label: "Critical",
        };
      case "high":
        return {
          bg: "bg-orange-100 dark:bg-orange-900/30",
          text: "text-orange-600 dark:text-orange-400",
          label: "High",
        };
      case "warning":
        return {
          bg: "bg-yellow-100 dark:bg-yellow-900/30",
          text: "text-yellow-600 dark:text-yellow-400",
          label: "Warning",
        };
      default:
        return {
          bg: "bg-blue-100 dark:bg-blue-900/30",
          text: "text-blue-600 dark:text-blue-400",
          label: "Info",
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
            Activity Logs
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Monitor system activities, security events, and user actions
          </p>
        </div>
        <div className="flex items-center gap-3">
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="today">Today</option>
            <option value="week">Last Week</option>
            <option value="month">Last Month</option>
            <option value="custom">Custom Range</option>
          </select>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Export
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-white rounded-xl hover:bg-slate-300 dark:hover:bg-slate-600 flex items-center gap-2"
          >
            <RefreshCw className="w-4 h-4" />
            Refresh
          </motion.button>
        </div>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {[
          {
            label: "Total Logs",
            value: logStats.total,
            color: "from-blue-500 to-cyan-500",
            icon: ClipboardList,
          },
          {
            label: "Security",
            value: logStats.security,
            color: "from-red-500 to-orange-500",
            icon: Shield,
          },
          {
            label: "User Actions",
            value: logStats.user,
            color: "from-green-500 to-emerald-500",
            icon: User,
          },
          {
            label: "System",
            value: logStats.system,
            color: "from-purple-500 to-pink-500",
            icon: Server,
          },
          {
            label: "Payments",
            value: logStats.payment,
            color: "from-yellow-500 to-orange-500",
            icon: DollarSign,
          },
          {
            label: "Data",
            value: logStats.data,
            color: "from-indigo-500 to-purple-500",
            icon: Database,
          },
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-lg border border-slate-200 dark:border-slate-700 relative overflow-hidden"
          >
            <div
              className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${stat.color} opacity-10 blur-2xl`}
            />
            <div className="relative">
              <div
                className={`w-10 h-10 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center mb-2`}
              >
                <stat.icon className="w-5 h-5 text-white" />
              </div>
              <div className="text-2xl font-bold text-slate-800 dark:text-white">
                {stat.value}
              </div>
              <div className="text-xs text-slate-600 dark:text-slate-400">
                {stat.label}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Filters and Search */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-lg border border-slate-200 dark:border-slate-700"
      >
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3 flex-wrap flex-1">
            <div className="relative flex-1 min-w-[200px] max-w-md">
              <Search className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search logs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-900 rounded-xl p-1">
              {["all", "security", "user", "system", "payment", "data"].map(
                (type) => (
                  <button
                    key={type}
                    onClick={() => setFilter(type)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium capitalize transition-all ${
                      filter === type
                        ? "bg-white dark:bg-slate-800 text-slate-800 dark:text-white shadow"
                        : "text-slate-600 dark:text-slate-400"
                    }`}
                  >
                    {type}
                  </button>
                ),
              )}
            </div>
          </div>

          <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-900 rounded-xl p-1">
            <button
              onClick={() => setViewMode("list")}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                viewMode === "list"
                  ? "bg-white dark:bg-slate-800 text-slate-800 dark:text-white shadow"
                  : "text-slate-600 dark:text-slate-400"
              }`}
            >
              List
            </button>
            <button
              onClick={() => setViewMode("timeline")}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                viewMode === "timeline"
                  ? "bg-white dark:bg-slate-800 text-slate-800 dark:text-white shadow"
                  : "text-slate-600 dark:text-slate-400"
              }`}
            >
              Timeline
            </button>
          </div>
        </div>
      </motion.div>

      {/* Logs Display */}
      {viewMode === "list" ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900">
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-600 dark:text-slate-400">
                    Timestamp
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-600 dark:text-slate-400">
                    Type
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-600 dark:text-slate-400">
                    Action
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-600 dark:text-slate-400">
                    User
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-600 dark:text-slate-400">
                    IP Address
                  </th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-slate-600 dark:text-slate-400">
                    Severity
                  </th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-slate-600 dark:text-slate-400">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredLogs.map((log, index) => {
                  const severity = getSeverityBadge(log.severity);
                  const LogIcon = log.icon;

                  return (
                    <motion.tr
                      key={log.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.02 }}
                      className="border-b border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                    >
                      <td className="px-4 py-4 text-sm text-slate-600 dark:text-slate-400 whitespace-nowrap">
                        {log.timestamp}
                      </td>
                      <td className="px-4 py-4">
                        <div
                          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${log.bgColor}`}
                        >
                          <LogIcon className={`w-3 h-3 ${log.color}`} />
                          <span className={log.color}>{log.category}</span>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm font-medium text-slate-800 dark:text-white">
                        {log.action}
                      </td>
                      <td className="px-4 py-4 text-sm text-slate-600 dark:text-slate-400">
                        {log.user}
                      </td>
                      <td className="px-4 py-4 text-sm text-slate-600 dark:text-slate-400 font-mono">
                        {log.ip}
                      </td>
                      <td className="px-4 py-4 text-center">
                        <span
                          className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${severity.bg} ${severity.text}`}
                        >
                          {severity.label}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-center">
                        <button
                          title={log.details}
                          className="p-2 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-lg transition-colors"
                        >
                          <Eye className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                        </button>
                      </td>
                    </motion.tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between">
            <div className="text-sm text-slate-600 dark:text-slate-400">
              Showing {filteredLogs.length} of {activityLogs.length} logs
            </div>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
                Previous
              </button>
              <button className="px-3 py-1 bg-blue-500 text-white rounded-lg">
                1
              </button>
              <button className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
                2
              </button>
              <button className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
                3
              </button>
              <button className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
                Next
              </button>
            </div>
          </div>
        </motion.div>
      ) : (
        /* Timeline View */
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700"
        >
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700"></div>

            <div className="space-y-6">
              {filteredLogs.map((log, index) => {
                const LogIcon = log.icon;
                const severity = getSeverityBadge(log.severity);

                return (
                  <motion.div
                    key={log.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.05 }}
                    className="relative pl-16"
                  >
                    {/* Timeline dot */}
                    <div
                      className={`absolute left-6 w-5 h-5 rounded-full bg-gradient-to-r ${
                        log.severity === "critical" || log.severity === "high"
                          ? "from-red-500 to-orange-500"
                          : log.severity === "warning"
                            ? "from-yellow-500 to-orange-500"
                            : "from-blue-500 to-cyan-500"
                      } ring-4 ring-white dark:ring-slate-800 flex items-center justify-center`}
                    >
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    </div>

                    <div
                      className={`${log.bgColor} rounded-xl p-4 hover:shadow-md transition-shadow`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-3 flex-1">
                          <div
                            className={`w-10 h-10 rounded-lg flex items-center justify-center ${log.bgColor}`}
                          >
                            <LogIcon className={`w-5 h-5 ${log.color}`} />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-bold text-slate-800 dark:text-white">
                                {log.action}
                              </span>
                              <span
                                className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${severity.bg} ${severity.text}`}
                              >
                                {severity.label}
                              </span>
                            </div>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                              {log.details}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium text-slate-800 dark:text-white">
                            {log.timestamp.split(" ")[1]}
                          </div>
                          <div className="text-xs text-slate-600 dark:text-slate-400">
                            {log.timestamp.split(" ")[0]}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 text-xs text-slate-600 dark:text-slate-400 mt-3 pt-3 border-t border-slate-200 dark:border-slate-700">
                        <div className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          <span>{log.user}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Globe className="w-3 h-3" />
                          <span className="font-mono">{log.ip}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FileText className="w-3 h-3" />
                          <span>{log.category}</span>
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
    </div>
  );
};

export default Logs;
