import { useState } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import {
  Database as DatabaseIcon,
  Server,
  HardDrive,
  Activity,
  TrendingUp,
  TrendingDown,
  RefreshCw,
  Download,
  Upload,
  Trash2,
  Shield,
  Lock,
  Unlock,
  CheckCircle,
  XCircle,
  AlertCircle,
  Clock,
  Calendar,
  BarChart3,
  PieChart,
  Zap,
  Cpu,
  MemoryStick,
  Network,
  Eye,
  Settings,
  Play,
  Pause,
  Square,
  Plus,
  Edit,
  Copy,
  Archive,
  FileText,
  Folder,
  Table,
} from "lucide-react";

const Database = () => {
  const [activeTab, setActiveTab] = useState("overview"); // overview, tables, backup, performance, maintenance

  // Database overview stats
  const databaseStats = {
    totalSize: 2.45, // GB
    tablesCount: 28,
    recordsCount: 185420,
    indexSize: 0.68, // GB
    avgQueryTime: 45, // ms
    connections: 32,
    maxConnections: 100,
    uptime: 720, // hours
    cacheHitRatio: 94.5, // percentage
    lastBackup: "2024-06-09 03:00 AM",
    backupSize: 1.82, // GB
    status: "healthy",
  };

  // Database tables
  const tables = [
    {
      name: "students",
      rows: 3527,
      size: 185.2, // MB
      indexes: 8,
      lastModified: "2024-06-09 14:25:30",
      status: "active",
      avgRowSize: 52, // KB
      fragmentation: 8.5, // percentage
      totalQueries: 158420,
      avgQueryTime: 12, // ms
    },
    {
      name: "courses",
      rows: 850,
      size: 42.5,
      indexes: 6,
      lastModified: "2024-06-09 12:15:22",
      status: "active",
      avgRowSize: 50,
      fragmentation: 3.2,
      totalQueries: 85240,
      avgQueryTime: 8,
    },
    {
      name: "batches",
      rows: 245,
      size: 18.4,
      indexes: 5,
      lastModified: "2024-06-09 10:30:15",
      status: "active",
      avgRowSize: 75,
      fragmentation: 5.1,
      totalQueries: 45820,
      avgQueryTime: 10,
    },
    {
      name: "staff",
      rows: 680,
      size: 28.6,
      indexes: 7,
      lastModified: "2024-06-09 09:45:18",
      status: "active",
      avgRowSize: 42,
      fragmentation: 4.8,
      totalQueries: 38560,
      avgQueryTime: 15,
    },
    {
      name: "attendance",
      rows: 125640,
      size: 445.8,
      indexes: 12,
      lastModified: "2024-06-09 18:20:45",
      status: "active",
      avgRowSize: 3.5,
      fragmentation: 15.2,
      totalQueries: 425680,
      avgQueryTime: 18,
    },
    {
      name: "payments",
      rows: 18520,
      size: 125.4,
      indexes: 9,
      lastModified: "2024-06-09 16:40:30",
      status: "active",
      avgRowSize: 6.7,
      fragmentation: 6.5,
      totalQueries: 92340,
      avgQueryTime: 20,
    },
    {
      name: "assignments",
      rows: 8450,
      size: 685.2,
      indexes: 8,
      lastModified: "2024-06-09 15:10:12",
      status: "active",
      avgRowSize: 81,
      fragmentation: 12.3,
      totalQueries: 125480,
      avgQueryTime: 25,
    },
    {
      name: "grades",
      rows: 45280,
      size: 95.4,
      indexes: 10,
      lastModified: "2024-06-09 17:35:50",
      status: "active",
      avgRowSize: 2.1,
      fragmentation: 7.8,
      totalQueries: 185620,
      avgQueryTime: 14,
    },
  ];

  // Backup history
  const backupHistory = [
    {
      id: 1,
      date: "2024-06-09 03:00 AM",
      type: "Full",
      size: 1.82,
      duration: 245,
      status: "completed",
      location: "AWS S3",
    },
    {
      id: 2,
      date: "2024-06-08 03:00 AM",
      type: "Full",
      size: 1.79,
      duration: 238,
      status: "completed",
      location: "AWS S3",
    },
    {
      id: 3,
      date: "2024-06-07 15:00 PM",
      type: "Incremental",
      size: 0.45,
      duration: 68,
      status: "completed",
      location: "AWS S3",
    },
    {
      id: 4,
      date: "2024-06-07 03:00 AM",
      type: "Full",
      size: 1.75,
      duration: 242,
      status: "completed",
      location: "AWS S3",
    },
    {
      id: 5,
      date: "2024-06-06 03:00 AM",
      type: "Full",
      size: 1.72,
      duration: 235,
      status: "completed",
      location: "AWS S3",
    },
    {
      id: 6,
      date: "2024-06-05 03:00 AM",
      type: "Full",
      size: 1.68,
      duration: 228,
      status: "completed",
      location: "AWS S3",
    },
  ];

  // Performance metrics (hourly for last 24 hours)
  const performanceMetrics = Array.from({ length: 24 }, (_, i) => ({
    hour: `${String(23 - i).padStart(2, "0")}:00`,
    queries: Math.floor(Math.random() * 5000) + 2000,
    responseTime: Math.floor(Math.random() * 50) + 20,
    connections: Math.floor(Math.random() * 30) + 10,
    cpuUsage: Math.floor(Math.random() * 40) + 30,
    memoryUsage: Math.floor(Math.random() * 35) + 45,
  })).reverse();

  const tabs = [
    { id: "overview", label: "Overview", icon: DatabaseIcon },
    { id: "tables", label: "Tables", icon: Table },
    { id: "backup", label: "Backup", icon: Archive },
    { id: "performance", label: "Performance", icon: Activity },
    { id: "maintenance", label: "Maintenance", icon: Settings },
  ];

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
            Database Management
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Monitor database health, performance, and manage backups
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div
            className={`px-4 py-2 rounded-xl flex items-center gap-2 ${
              databaseStats.status === "healthy"
                ? "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
                : "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400"
            }`}
          >
            <CheckCircle className="w-4 h-4" />
            <span className="font-medium">Database {databaseStats.status}</span>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 flex items-center gap-2"
          >
            <RefreshCw className="w-4 h-4" />
            Refresh
          </motion.button>
        </div>
      </motion.div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            label: "Total Size",
            value: `${databaseStats.totalSize} GB`,
            icon: HardDrive,
            color: "from-blue-500 to-cyan-500",
            change: "+12%",
          },
          {
            label: "Total Records",
            value: databaseStats.recordsCount.toLocaleString(),
            icon: FileText,
            color: "from-green-500 to-emerald-500",
            change: "+8.5%",
          },
          {
            label: "Active Connections",
            value: `${databaseStats.connections}/${databaseStats.maxConnections}`,
            icon: Network,
            color: "from-purple-500 to-pink-500",
            change: "Normal",
          },
          {
            label: "Avg Query Time",
            value: `${databaseStats.avgQueryTime}ms`,
            icon: Zap,
            color: "from-orange-500 to-red-500",
            change: "-5ms",
          },
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 relative overflow-hidden"
          >
            <div
              className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${stat.color} opacity-10 blur-3xl`}
            />
            <div className="relative">
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4`}
              >
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                {stat.label}
              </div>
              <div className="text-2xl font-bold text-slate-800 dark:text-white mb-2">
                {stat.value}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-500">
                {stat.change}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden"
      >
        <div className="flex items-center gap-2 p-2 border-b border-slate-200 dark:border-slate-700 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-3 rounded-xl transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? "bg-blue-500 text-white shadow"
                  : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700"
              }`}
            >
              <tab.icon className="w-5 h-5" />
              <span className="font-medium">{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="p-6">
          {/* Overview Tab */}
          {activeTab === "overview" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* System Info */}
                <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
                    <Server className="w-5 h-5" />
                    System Information
                  </h3>
                  <div className="space-y-3">
                    {[
                      { label: "Database Type", value: "PostgreSQL 15.2" },
                      {
                        label: "Total Tables",
                        value: `${databaseStats.tablesCount} tables`,
                      },
                      {
                        label: "Index Size",
                        value: `${databaseStats.indexSize} GB`,
                      },
                      {
                        label: "Uptime",
                        value: `${Math.floor(databaseStats.uptime / 24)}d ${databaseStats.uptime % 24}h`,
                      },
                      {
                        label: "Cache Hit Ratio",
                        value: `${databaseStats.cacheHitRatio}%`,
                      },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between"
                      >
                        <span className="text-sm text-slate-600 dark:text-slate-400">
                          {item.label}
                        </span>
                        <span className="font-semibold text-slate-800 dark:text-white">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Backup Info */}
                <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
                    <Archive className="w-5 h-5" />
                    Backup Information
                  </h3>
                  <div className="space-y-3">
                    {[
                      { label: "Last Backup", value: databaseStats.lastBackup },
                      {
                        label: "Backup Size",
                        value: `${databaseStats.backupSize} GB`,
                      },
                      { label: "Backup Location", value: "AWS S3" },
                      { label: "Backup Schedule", value: "Daily at 3:00 AM" },
                      { label: "Retention Period", value: "30 days" },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between"
                      >
                        <span className="text-sm text-slate-600 dark:text-slate-400">
                          {item.label}
                        </span>
                        <span className="font-semibold text-slate-800 dark:text-white text-right">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Resource Usage */}
              <div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4">
                  Resource Usage
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      label: "CPU Usage",
                      value: 45,
                      max: 100,
                      icon: Cpu,
                      color: "from-blue-500 to-cyan-500",
                    },
                    {
                      label: "Memory Usage",
                      value: 68,
                      max: 100,
                      icon: MemoryStick,
                      color: "from-green-500 to-emerald-500",
                    },
                    {
                      label: "Disk I/O",
                      value: 35,
                      max: 100,
                      icon: HardDrive,
                      color: "from-orange-500 to-red-500",
                    },
                  ].map((resource, index) => (
                    <div
                      key={index}
                      className="bg-slate-50 dark:bg-slate-900 rounded-xl p-6"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <resource.icon className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                          <span className="font-medium text-slate-800 dark:text-white">
                            {resource.label}
                          </span>
                        </div>
                        <span className="text-2xl font-bold text-slate-800 dark:text-white">
                          {resource.value}%
                        </span>
                      </div>
                      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${resource.color} rounded-full`}
                          initial={{ width: 0 }}
                          animate={{ width: `${resource.value}%` }}
                          transition={{
                            delay: 0.5 + index * 0.1,
                            duration: 0.8,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Tables Tab */}
          {activeTab === "tables" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="overflow-x-auto"
            >
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-700">
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-600 dark:text-slate-400">
                      Table Name
                    </th>
                    <th className="px-4 py-3 text-right text-sm font-semibold text-slate-600 dark:text-slate-400">
                      Rows
                    </th>
                    <th className="px-4 py-3 text-right text-sm font-semibold text-slate-600 dark:text-slate-400">
                      Size (MB)
                    </th>
                    <th className="px-4 py-3 text-right text-sm font-semibold text-slate-600 dark:text-slate-400">
                      Indexes
                    </th>
                    <th className="px-4 py-3 text-right text-sm font-semibold text-slate-600 dark:text-slate-400">
                      Fragmentation
                    </th>
                    <th className="px-4 py-3 text-right text-sm font-semibold text-slate-600 dark:text-slate-400">
                      Avg Query (ms)
                    </th>
                    <th className="px-4 py-3 text-center text-sm font-semibold text-slate-600 dark:text-slate-400">
                      Status
                    </th>
                    <th className="px-4 py-3 text-center text-sm font-semibold text-slate-600 dark:text-slate-400">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tables.map((table, index) => (
                    <motion.tr
                      key={table.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.05 }}
                      className="border-b border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                    >
                      <td className="px-4 py-4 text-sm font-medium text-slate-800 dark:text-white">
                        {table.name}
                      </td>
                      <td className="px-4 py-4 text-sm text-slate-600 dark:text-slate-400 text-right">
                        {table.rows.toLocaleString()}
                      </td>
                      <td className="px-4 py-4 text-sm text-slate-600 dark:text-slate-400 text-right">
                        {table.size}
                      </td>
                      <td className="px-4 py-4 text-sm text-slate-600 dark:text-slate-400 text-right">
                        {table.indexes}
                      </td>
                      <td className="px-4 py-4 text-right">
                        <span
                          className={`text-sm font-medium ${
                            table.fragmentation < 10
                              ? "text-green-600 dark:text-green-400"
                              : table.fragmentation < 20
                                ? "text-yellow-600 dark:text-yellow-400"
                                : "text-red-600 dark:text-red-400"
                          }`}
                        >
                          {table.fragmentation}%
                        </span>
                      </td>
                      <td className="px-4 py-4 text-sm text-slate-600 dark:text-slate-400 text-right">
                        {table.avgQueryTime}
                      </td>
                      <td className="px-4 py-4 text-center">
                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400">
                          <CheckCircle className="w-3 h-3" />
                          {table.status}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <button className="p-1 hover:bg-slate-200 dark:hover:bg-slate-600 rounded transition-colors">
                            <Eye className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                          </button>
                          <button className="p-1 hover:bg-slate-200 dark:hover:bg-slate-600 rounded transition-colors">
                            <Settings className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                          </button>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { label: "Total Tables", value: tables.length, icon: Table },
                  {
                    label: "Total Rows",
                    value: tables
                      .reduce((sum, t) => sum + t.rows, 0)
                      .toLocaleString(),
                    icon: FileText,
                  },
                  {
                    label: "Total Size",
                    value: `${(tables.reduce((sum, t) => sum + t.size, 0) / 1024).toFixed(2)} GB`,
                    icon: HardDrive,
                  },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="bg-slate-50 dark:bg-slate-900 rounded-xl p-4 flex items-center gap-3"
                  >
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                      <stat.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">
                        {stat.label}
                      </div>
                      <div className="text-xl font-bold text-slate-800 dark:text-white">
                        {stat.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Backup Tab */}
          {activeTab === "backup" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                  Backup History
                </h3>
                <div className="flex items-center gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-green-500 text-white rounded-xl hover:bg-green-600 flex items-center gap-2"
                  >
                    <Play className="w-4 h-4" />
                    Create Backup
                  </motion.button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-200 dark:border-slate-700">
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-600 dark:text-slate-400">
                        Date & Time
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-600 dark:text-slate-400">
                        Type
                      </th>
                      <th className="px-4 py-3 text-right text-sm font-semibold text-slate-600 dark:text-slate-400">
                        Size (GB)
                      </th>
                      <th className="px-4 py-3 text-right text-sm font-semibold text-slate-600 dark:text-slate-400">
                        Duration (sec)
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-600 dark:text-slate-400">
                        Location
                      </th>
                      <th className="px-4 py-3 text-center text-sm font-semibold text-slate-600 dark:text-slate-400">
                        Status
                      </th>
                      <th className="px-4 py-3 text-center text-sm font-semibold text-slate-600 dark:text-slate-400">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {backupHistory.map((backup, index) => (
                      <motion.tr
                        key={backup.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + index * 0.05 }}
                        className="border-b border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                      >
                        <td className="px-4 py-4 text-sm text-slate-800 dark:text-white">
                          {backup.date}
                        </td>
                        <td className="px-4 py-4">
                          <span
                            className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                              backup.type === "Full"
                                ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                                : "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
                            }`}
                          >
                            {backup.type}
                          </span>
                        </td>
                        <td className="px-4 py-4 text-sm text-slate-600 dark:text-slate-400 text-right">
                          {backup.size}
                        </td>
                        <td className="px-4 py-4 text-sm text-slate-600 dark:text-slate-400 text-right">
                          {backup.duration}
                        </td>
                        <td className="px-4 py-4 text-sm text-slate-600 dark:text-slate-400">
                          {backup.location}
                        </td>
                        <td className="px-4 py-4 text-center">
                          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400">
                            <CheckCircle className="w-3 h-3" />
                            {backup.status}
                          </span>
                        </td>
                        <td className="px-4 py-4 text-center">
                          <div className="flex items-center justify-center gap-2">
                            <button className="p-1 hover:bg-slate-200 dark:hover:bg-slate-600 rounded transition-colors">
                              <Download className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                            </button>
                            <button className="p-1 hover:bg-slate-200 dark:hover:bg-slate-600 rounded transition-colors">
                              <RefreshCw className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                            </button>
                            <button className="p-1 hover:bg-slate-200 dark:hover:bg-slate-600 rounded transition-colors">
                              <Trash2 className="w-4 h-4 text-red-600 dark:text-red-400" />
                            </button>
                          </div>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}

          {/* Performance Tab */}
          {activeTab === "performance" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                Performance Metrics (Last 24 Hours)
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Query Performance */}
                <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-6">
                  <h4 className="font-semibold text-slate-800 dark:text-white mb-4">
                    Query Performance
                  </h4>
                  <div className="h-48 flex items-end justify-between gap-1">
                    {performanceMetrics.slice(0, 12).map((metric, index) => (
                      <div
                        key={index}
                        className="flex-1 flex flex-col items-center gap-2 group relative"
                      >
                        <motion.div
                          className="w-full bg-gradient-to-t from-blue-500 to-cyan-500 rounded-t hover:opacity-80 transition-opacity"
                          style={{
                            height: `${(metric.queries / 7000) * 100}%`,
                          }}
                          initial={{ height: 0 }}
                          animate={{
                            height: `${(metric.queries / 7000) * 100}%`,
                          }}
                          transition={{ delay: 0.5 + index * 0.05 }}
                        />

                        {/* Tooltip */}
                        <div className="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                          <div className="bg-slate-900 dark:bg-slate-700 text-white text-xs rounded px-2 py-1 whitespace-nowrap">
                            {metric.hour}: {metric.queries} queries
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Response Time */}
                <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-6">
                  <h4 className="font-semibold text-slate-800 dark:text-white mb-4">
                    Response Time (ms)
                  </h4>
                  <div className="h-48 flex items-end justify-between gap-1">
                    {performanceMetrics.slice(0, 12).map((metric, index) => (
                      <div
                        key={index}
                        className="flex-1 flex flex-col items-center gap-2 group relative"
                      >
                        <motion.div
                          className="w-full bg-gradient-to-t from-green-500 to-emerald-500 rounded-t hover:opacity-80 transition-opacity"
                          style={{
                            height: `${(metric.responseTime / 70) * 100}%`,
                          }}
                          initial={{ height: 0 }}
                          animate={{
                            height: `${(metric.responseTime / 70) * 100}%`,
                          }}
                          transition={{ delay: 0.5 + index * 0.05 }}
                        />

                        <div className="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                          <div className="bg-slate-900 dark:bg-slate-700 text-white text-xs rounded px-2 py-1 whitespace-nowrap">
                            {metric.hour}: {metric.responseTime}ms
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Performance Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {[
                  {
                    label: "Avg Queries/Hour",
                    value: (
                      performanceMetrics.reduce(
                        (sum, m) => sum + m.queries,
                        0,
                      ) / 24
                    ).toFixed(0),
                    icon: Activity,
                  },
                  {
                    label: "Avg Response Time",
                    value: `${(performanceMetrics.reduce((sum, m) => sum + m.responseTime, 0) / 24).toFixed(0)}ms`,
                    icon: Zap,
                  },
                  {
                    label: "Peak Connections",
                    value: Math.max(
                      ...performanceMetrics.map((m) => m.connections),
                    ),
                    icon: Network,
                  },
                  {
                    label: "Cache Hit Ratio",
                    value: `${databaseStats.cacheHitRatio}%`,
                    icon: CheckCircle,
                  },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="bg-slate-50 dark:bg-slate-900 rounded-xl p-4 flex items-center gap-3"
                  >
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                      <stat.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">
                        {stat.label}
                      </div>
                      <div className="text-lg font-bold text-slate-800 dark:text-white">
                        {stat.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Maintenance Tab */}
          {activeTab === "maintenance" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                Maintenance Operations
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Optimize Tables",
                    description: "Defragment and optimize all tables",
                    icon: Zap,
                    action: "Optimize",
                    color: "blue",
                  },
                  {
                    title: "Rebuild Indexes",
                    description: "Rebuild all database indexes",
                    icon: RefreshCw,
                    action: "Rebuild",
                    color: "green",
                  },
                  {
                    title: "Vacuum Database",
                    description: "Reclaim storage and update statistics",
                    icon: Trash2,
                    action: "Vacuum",
                    color: "purple",
                  },
                  {
                    title: "Analyze Tables",
                    description: "Update query planner statistics",
                    icon: BarChart3,
                    action: "Analyze",
                    color: "orange",
                  },
                  {
                    title: "Check Integrity",
                    description: "Verify database integrity",
                    icon: Shield,
                    action: "Check",
                    color: "indigo",
                  },
                  {
                    title: "Export Database",
                    description: "Export full database backup",
                    icon: Download,
                    action: "Export",
                    color: "teal",
                  },
                ].map((operation, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="bg-slate-50 dark:bg-slate-900 rounded-xl p-6"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-12 h-12 bg-${operation.color}-100 dark:bg-${operation.color}-900/30 rounded-lg flex items-center justify-center flex-shrink-0`}
                        >
                          <operation.icon
                            className={`w-6 h-6 text-${operation.color}-600 dark:text-${operation.color}-400`}
                          />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-800 dark:text-white mb-1">
                            {operation.title}
                          </h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            {operation.description}
                          </p>
                        </div>
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full px-4 py-2 bg-${operation.color}-500 text-white rounded-xl hover:bg-${operation.color}-600 transition-colors flex items-center justify-center gap-2`}
                    >
                      <Play className="w-4 h-4" />
                      {operation.action}
                    </motion.button>
                  </motion.div>
                ))}
              </div>

              {/* Scheduled Maintenance */}
              <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-6">
                <h4 className="font-semibold text-slate-800 dark:text-white mb-4">
                  Scheduled Maintenance
                </h4>
                <div className="space-y-3">
                  {[
                    {
                      task: "Auto Vacuum",
                      schedule: "Daily at 2:00 AM",
                      status: "Enabled",
                    },
                    {
                      task: "Index Rebuild",
                      schedule: "Weekly on Sunday",
                      status: "Enabled",
                    },
                    {
                      task: "Statistics Update",
                      schedule: "Daily at 4:00 AM",
                      status: "Enabled",
                    },
                    {
                      task: "Backup Verification",
                      schedule: "Weekly on Monday",
                      status: "Enabled",
                    },
                  ].map((task, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-white dark:bg-slate-800 rounded-lg"
                    >
                      <div>
                        <div className="font-medium text-slate-800 dark:text-white">
                          {task.task}
                        </div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">
                          {task.schedule}
                        </div>
                      </div>
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-xs font-medium">
                        {task.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Database;
