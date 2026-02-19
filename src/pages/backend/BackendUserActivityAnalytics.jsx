import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Activity,
  Search,
  Download,
  RefreshCw,
  Loader2,
  Eye,
  Clock,
  Calendar,
  Users,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  CheckCircle,
  XCircle,
  MousePointer,
  Monitor,
} from "lucide-react";
import { io } from "socket.io-client";
import api from "../../api/axiosInstance";
import toast from "react-hot-toast";

const BackendUserActivityAnalytics = () => {
  const { user, selectedCenter } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [dateRange, setDateRange] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [socketConnected, setSocketConnected] = useState(false);
  const socketRef = useRef(null);

  const fetchUsers = async (silent = false) => {
    if (!silent) setLoading(true);
    try {
      const params = new URLSearchParams({
        page: currentPage,
        limit: 15,
        dateRange,
      });
      if (user.role === "centeradmin" || user.role === "staff") {
        const c = selectedCenter || user.centerName;
        if (c && c !== "All Centers") params.append("center", c);
      }
      if (searchTerm) params.append("search", searchTerm);

      const res = await api.get(`/admin/user-activities/users-list?${params}`);
      if (res.data.success) {
        setUsers(res.data.data.users || []);
        setTotalPages(res.data.data.totalPages || 1);
        setTotal(res.data.data.total || 0);
      }
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Failed to load activity data",
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [currentPage, dateRange, selectedCenter]);

  // Socket.io real-time updates
  useEffect(() => {
    const BACKEND_URL =
      import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";
    socketRef.current = io(BACKEND_URL, {
      transports: ["websocket", "polling"],
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionAttempts: 5,
    });

    socketRef.current.on("connect", () => {
      console.log("📊 Analytics Socket connected:", socketRef.current.id);
      setSocketConnected(true);
      socketRef.current.emit("join-admin-analytics");
    });

    socketRef.current.on("disconnect", () => {
      console.log("❌ Analytics Socket disconnected");
      setSocketConnected(false);
    });

    socketRef.current.on("analytics-update", (data) => {
      console.log("🔔 Real-time activity update:", data);
      // Silently refresh without showing loading spinner
      fetchUsers(true);
    });

    return () => {
      if (socketRef.current) {
        socketRef.current.emit("leave-admin-analytics");
        socketRef.current.disconnect();
      }
    };
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    fetchUsers();
  };

  const getInitials = (name) =>
    name
      ? name
          .split(" ")
          .map((n) => n[0])
          .join("")
          .toUpperCase()
          .slice(0, 2)
      : "?";

  const avatarColors = [
    "from-violet-500 to-purple-600",
    "from-blue-500 to-cyan-500",
    "from-green-500 to-emerald-500",
    "from-orange-500 to-red-500",
    "from-pink-500 to-rose-500",
    "from-indigo-500 to-blue-600",
  ];

  const formatDuration = (secs) => {
    if (!secs) return "0s";
    if (secs < 60) return `${secs}s`;
    if (secs < 3600) return `${Math.floor(secs / 60)}m`;
    return `${(secs / 3600).toFixed(1)}h`;
  };

  const formatDate = (d) => {
    if (!d) return "—";
    const now = new Date();
    const date = new Date(d);
    const diff = Math.floor((now - date) / 1000);
    if (diff < 60) return "just now";
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
    return date.toLocaleDateString("en-IN", { day: "numeric", month: "short" });
  };

  const roleColor = {
    superadmin: "bg-red-100 text-red-700 border-red-200",
    centeradmin: "bg-purple-100 text-purple-700 border-purple-200",
    staff: "bg-blue-100 text-blue-700 border-blue-200",
    user: "bg-gray-100 text-gray-700 border-gray-200",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-blue-50/20 p-6">
      {/* ── Header ── */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-200">
              <Activity className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-purple-700 bg-clip-text text-transparent">
                User Activity Analytics
              </h1>
              <p className="text-slate-500 text-sm mt-0.5 flex items-center gap-3">
                <span>
                  {user.role === "superadmin"
                    ? "All Centers"
                    : selectedCenter || user.centerName}{" "}
                  &middot;{" "}
                  <span className="font-semibold text-violet-600">
                    {total} users tracked
                  </span>
                </span>
                {socketConnected && (
                  <span className="flex items-center gap-1.5 px-2 py-0.5 bg-green-50 text-green-600 rounded-full text-xs font-medium border border-green-200">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                    Live Updates Active
                  </span>
                )}
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => {
                setCurrentPage(1);
                fetchUsers();
              }}
              className="px-4 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-xl hover:bg-slate-50 transition-all flex items-center gap-2 shadow-sm text-sm font-medium"
            >
              <RefreshCw className="w-4 h-4" /> Refresh
            </button>
            <button
              onClick={() => toast.success("Export coming soon!")}
              className="px-4 py-2.5 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-xl hover:opacity-90 transition-all flex items-center gap-2 shadow-lg shadow-purple-200 text-sm font-medium"
            >
              <Download className="w-4 h-4" /> Export
            </button>
          </div>
        </div>
      </motion.div>

      {/* ── Summary Cards ── */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {[
          {
            label: "Total Users Tracked",
            value: total,
            icon: Users,
            gradient: "from-violet-500 to-purple-600",
            bg: "bg-violet-50",
            border: "border-violet-100",
          },
          {
            label: "Activities Today",
            value: users.filter(
              (u) =>
                new Date(u.lastSeen).toDateString() ===
                new Date().toDateString(),
            ).length,
            icon: Activity,
            gradient: "from-blue-500 to-cyan-500",
            bg: "bg-blue-50",
            border: "border-blue-100",
          },
          {
            label: "Online (Last 1h)",
            value: users.filter(
              (u) => new Date() - new Date(u.lastSeen) < 3600000,
            ).length,
            icon: Monitor,
            gradient: "from-green-500 to-emerald-500",
            bg: "bg-green-50",
            border: "border-green-100",
          },
          {
            label: "Sessions Total",
            value: users.reduce((a, u) => a + (u.sessionCount || 0), 0),
            icon: MousePointer,
            gradient: "from-orange-500 to-red-500",
            bg: "bg-orange-50",
            border: "border-orange-100",
          },
        ].map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07 }}
            className={`${card.bg} border ${card.border} rounded-2xl p-5 shadow-sm`}
          >
            <div
              className={`w-10 h-10 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-3 shadow-sm`}
            >
              <card.icon className="w-5 h-5 text-white" />
            </div>
            <div className="text-2xl font-bold text-slate-800">
              {card.value}
            </div>
            <div className="text-xs text-slate-500 mt-0.5">{card.label}</div>
          </motion.div>
        ))}
      </div>

      {/* ── Filters ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4 mb-6"
      >
        <form
          onSubmit={handleSearch}
          className="flex flex-col md:flex-row gap-3"
        >
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by name or email..."
              className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent bg-slate-50"
            />
          </div>
          <select
            value={dateRange}
            onChange={(e) => {
              setDateRange(e.target.value);
              setCurrentPage(1);
            }}
            className="px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 bg-slate-50"
          >
            <option value="today">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="all">All Time</option>
          </select>
          <button
            type="submit"
            className="px-6 py-2.5 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-xl text-sm font-medium hover:opacity-90 transition-all shadow-sm"
          >
            Search
          </button>
        </form>
      </motion.div>

      {/* ── Users Table ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden"
      >
        {/* Table Header */}
        <div className="grid grid-cols-12 gap-4 px-6 py-3 bg-gradient-to-r from-slate-50 to-violet-50/30 border-b border-slate-100 text-xs font-semibold text-slate-500 uppercase tracking-wider">
          <div className="col-span-3">User</div>
          <div className="col-span-2">Contact</div>
          <div className="col-span-2">Center</div>
          <div className="col-span-2">Activity</div>
          <div className="col-span-2">Last Seen</div>
          <div className="col-span-1"></div>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-24">
            <div className="text-center">
              <Loader2 className="w-10 h-10 animate-spin text-violet-500 mx-auto mb-3" />
              <p className="text-slate-500 text-sm">
                Loading user activity data...
              </p>
            </div>
          </div>
        ) : users.length === 0 ? (
          <div className="text-center py-24">
            <div className="w-16 h-16 bg-violet-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Activity className="w-8 h-8 text-violet-400" />
            </div>
            <h3 className="text-lg font-semibold text-slate-600 mb-1">
              No activity data found
            </h3>
            <p className="text-slate-400 text-sm">
              Try adjusting your filters or date range
            </p>
          </div>
        ) : (
          <>
            <div className="divide-y divide-slate-50">
              {users.map((u, index) => (
                <motion.div
                  key={u.userId}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04 }}
                  onClick={() => navigate(`/backend/user-activity/${u.userId}`)}
                  className="grid grid-cols-12 gap-4 px-6 py-4 hover:bg-gradient-to-r hover:from-violet-50/50 hover:to-purple-50/30 transition-all duration-200 cursor-pointer group"
                >
                  {/* User Info */}
                  <div className="col-span-3 flex items-center gap-3 min-w-0">
                    <div
                      className={`w-10 h-10 rounded-xl bg-gradient-to-br ${avatarColors[index % avatarColors.length]} flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-sm`}
                    >
                      {getInitials(u.name)}
                    </div>
                    <div className="min-w-0">
                      <div className="font-semibold text-slate-800 text-sm truncate group-hover:text-violet-700 transition-colors">
                        {u.name || "Unknown User"}
                      </div>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full border font-medium ${roleColor[u.role] || roleColor.user}`}
                        >
                          {u.role}
                        </span>
                        {u.isVerified ? (
                          <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                        ) : (
                          <XCircle className="w-3.5 h-3.5 text-red-400 flex-shrink-0" />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="col-span-2 flex flex-col justify-center gap-1 min-w-0">
                    <div className="flex items-center gap-1.5 text-xs text-slate-600 truncate">
                      <Mail className="w-3 h-3 text-slate-400 flex-shrink-0" />
                      <span className="truncate">{u.email || "—"}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500">
                      <Phone className="w-3 h-3 text-slate-400 flex-shrink-0" />
                      <span>{u.phone || "—"}</span>
                    </div>
                  </div>

                  {/* Center */}
                  <div className="col-span-2 flex items-center">
                    <div className="flex items-center gap-1.5 text-xs text-slate-600">
                      <MapPin className="w-3 h-3 text-slate-400 flex-shrink-0" />
                      <span className="truncate">
                        {u.centerName || "Not Assigned"}
                      </span>
                    </div>
                  </div>

                  {/* Activity Stats */}
                  <div className="col-span-2 flex flex-col justify-center gap-1">
                    <div className="flex items-center gap-2">
                      <div className="text-sm font-bold text-slate-800">
                        {u.totalActivities}
                      </div>
                      <div className="text-xs text-slate-400">activities</div>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-500">
                      <span className="flex items-center gap-0.5">
                        <Eye className="w-3 h-3 text-blue-400" /> {u.pageViews}
                      </span>
                      <span className="flex items-center gap-0.5">
                        <Clock className="w-3 h-3 text-green-400" />{" "}
                        {u.sessionCount}s
                      </span>
                    </div>
                    {/* Mini Progress Bar */}
                    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-violet-400 to-purple-500 rounded-full transition-all"
                        style={{
                          width: `${Math.min(100, (u.totalActivities / Math.max(...users.map((x) => x.totalActivities), 1)) * 100)}%`,
                        }}
                      />
                    </div>
                  </div>

                  {/* Last Seen */}
                  <div className="col-span-2 flex items-center">
                    <div className="text-xs">
                      <div className="text-slate-700 font-medium">
                        {formatDate(u.lastSeen)}
                      </div>
                      <div className="text-slate-400 mt-0.5">
                        {u.logins} login{u.logins !== 1 ? "s" : ""}
                      </div>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="col-span-1 flex items-center justify-end">
                    <div className="w-8 h-8 rounded-xl bg-slate-50 group-hover:bg-violet-100 flex items-center justify-center transition-colors">
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-violet-600 transition-colors" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Pagination */}
            <div className="px-6 py-4 border-t border-slate-100 flex items-center justify-between bg-slate-50/50">
              <div className="text-sm text-slate-500">
                Showing page{" "}
                <span className="font-semibold text-slate-700">
                  {currentPage}
                </span>{" "}
                of{" "}
                <span className="font-semibold text-slate-700">
                  {totalPages}
                </span>{" "}
                &middot; {total} users
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 text-sm border border-slate-200 rounded-xl hover:bg-white disabled:opacity-40 disabled:cursor-not-allowed transition-all font-medium"
                >
                  Previous
                </button>
                <button
                  onClick={() =>
                    setCurrentPage((p) => Math.min(totalPages, p + 1))
                  }
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 text-sm bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-xl hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed transition-all font-medium shadow-sm"
                >
                  Next
                </button>
              </div>
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default BackendUserActivityAnalytics;
