import { useState, useEffect, useMemo, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Activity,
  ArrowLeft,
  Loader2,
  RefreshCw,
  Eye,
  Mouse,
  MousePointer,
  Clock,
  Monitor,
  Smartphone,
  Globe,
  LogIn,
  LogOut,
  ChevronDown,
  Navigation,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  XCircle,
  Calendar,
  Layers,
  BarChart2,
  TrendingUp,
  TrendingDown,
  Zap,
  User,
  Hash,
  Link2,
  FileText,
  BookOpen,
  PlayCircle,
  PauseCircle,
  ShieldCheck,
  Key,
  Timer,
  Info,
  Search,
  Filter,
  Download,
  MessageSquare,
  Star,
  Wifi,
  Cpu,
  AlertCircle,
  ChevronRight,
  MoreHorizontal,
  Video,
  LayoutDashboard,
  Bell,
} from "lucide-react";
import api from "../../api/axiosInstance";
import toast from "react-hot-toast";
import { io } from "socket.io-client";

/* ─── Token Config (matches backend config/index.js) ─────────────────────── */
const TOKEN_CONFIG = {
  accessExpires: "1 hour",
  refreshExpires: "7 days",
  accessExpiresMs: 60 * 60 * 1000,
  refreshExpiresMs: 7 * 24 * 60 * 60 * 1000,
};

/* ─── Activity type styling map ──────────────────────────────────────────── */
const typeConfig = {
  login: {
    color: "bg-emerald-100 text-emerald-700 border-emerald-200",
    icon: LogIn,
    label: "Login",
  },
  logout: {
    color: "bg-red-100 text-red-600 border-red-200",
    icon: LogOut,
    label: "Logout",
  },
  page_view: {
    color: "bg-blue-100 text-blue-700 border-blue-200",
    icon: Eye,
    label: "Page View",
  },
  scroll: {
    color: "bg-indigo-100 text-indigo-700 border-indigo-200",
    icon: Mouse,
    label: "Scroll",
  },
  button_click: {
    color: "bg-orange-100 text-orange-700 border-orange-200",
    icon: MousePointer,
    label: "Button Click",
  },
  hover: {
    color: "bg-cyan-100 text-cyan-700 border-cyan-200",
    icon: Mouse,
    label: "Hover",
  },
  navigation: {
    color: "bg-purple-100 text-purple-700 border-purple-200",
    icon: Navigation,
    label: "Navigation",
  },
  dropdown_open: {
    color: "bg-teal-100 text-teal-700 border-teal-200",
    icon: ChevronDown,
    label: "Dropdown",
  },
  register: {
    color: "bg-pink-100 text-pink-700 border-pink-200",
    icon: User,
    label: "Register",
  },
  email_verified: {
    color: "bg-green-100 text-green-700 border-green-200",
    icon: CheckCircle,
    label: "Email Verified",
  },
  contact_submit: {
    color: "bg-rose-100 text-rose-700 border-rose-200",
    icon: MessageSquare,
    label: "Contact Submit",
  },
  form_submit: {
    color: "bg-amber-100 text-amber-800 border-amber-200",
    icon: FileText,
    label: "Form Submit",
  },
  course_view: {
    color: "bg-sky-100 text-sky-700 border-sky-200",
    icon: BookOpen,
    label: "Course View",
  },
  course_enroll: {
    color: "bg-lime-100 text-lime-700 border-lime-200",
    icon: Star,
    label: "Course Enroll",
  },
  video_play: {
    color: "bg-fuchsia-100 text-fuchsia-700 border-fuchsia-200",
    icon: PlayCircle,
    label: "Video Play",
  },
  video_pause: {
    color: "bg-violet-100 text-violet-700 border-violet-200",
    icon: PauseCircle,
    label: "Video Pause",
  },
  video_complete: {
    color: "bg-emerald-100 text-emerald-800 border-emerald-200",
    icon: Video,
    label: "Video Complete",
  },
  test_start: {
    color: "bg-yellow-100 text-yellow-800 border-yellow-200",
    icon: AlertCircle,
    label: "Test Start",
  },
  test_submit: {
    color: "bg-green-100 text-green-800 border-green-200",
    icon: CheckCircle,
    label: "Test Submit",
  },
  search: {
    color: "bg-slate-100 text-slate-700 border-slate-200",
    icon: Search,
    label: "Search",
  },
  filter: {
    color: "bg-slate-100 text-slate-600 border-slate-200",
    icon: Filter,
    label: "Filter",
  },
  download: {
    color: "bg-blue-100 text-blue-800 border-blue-200",
    icon: Download,
    label: "Download",
  },
  profile_update: {
    color: "bg-indigo-100 text-indigo-800 border-indigo-200",
    icon: User,
    label: "Profile Update",
  },
  password_change: {
    color: "bg-red-100 text-red-800 border-red-200",
    icon: Key,
    label: "Password Change",
  },
  other: {
    color: "bg-gray-100 text-gray-600 border-gray-200",
    icon: MoreHorizontal,
    label: "Other",
  },
};

/* ─── Helper components ───────────────────────────────────────────────────── */
const ActivityBadge = ({ type }) => {
  const cfg = typeConfig[type] || {
    color: "bg-slate-100 text-slate-600 border-slate-200",
    icon: Activity,
    label: type,
  };
  const Icon = cfg.icon;
  return (
    <span
      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium border ${cfg.color}`}
    >
      <Icon className="w-3 h-3" />
      {cfg.label || type?.replace(/_/g, " ")}
    </span>
  );
};

const MiniBar = ({ value, max, color = "bg-violet-500", className = "" }) => (
  <div
    className={`flex-1 bg-slate-100 rounded-full h-2 overflow-hidden ${className}`}
  >
    <div
      className={`h-full rounded-full transition-all duration-700 ${color}`}
      style={{ width: `${max ? Math.round((value / max) * 100) : 0}%` }}
    />
  </div>
);

const SectionHeader = ({
  icon: Icon,
  title,
  color = "text-violet-500",
  badge,
}) => (
  <div className="flex items-center gap-2 mb-4">
    <Icon className={`w-5 h-5 ${color}`} />
    <h3 className="font-semibold text-slate-700">{title}</h3>
    {badge !== undefined && (
      <span className="ml-auto text-xs font-semibold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">
        {badge}
      </span>
    )}
  </div>
);

const Card = ({ children, className = "", delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    className={`bg-white rounded-2xl shadow-sm border border-slate-100 p-5 ${className}`}
  >
    {children}
  </motion.div>
);

const EmptyState = ({ text }) => (
  <p className="text-slate-400 text-sm text-center py-6">{text}</p>
);

/* ─── Heatmap ────────────────────────────────────────────────────────────── */
const HourHeatmap = ({ data }) => {
  const map = {};
  data.forEach((d) => {
    map[d._id] = d.count;
  });
  const maxVal = Math.max(...Object.values(map), 1);
  return (
    <div className="flex gap-1 flex-wrap">
      {Array.from({ length: 24 }, (_, h) => {
        const cnt = map[h] || 0;
        const i = cnt / maxVal;
        const bg =
          i === 0
            ? "bg-slate-100"
            : i < 0.25
              ? "bg-violet-200"
              : i < 0.5
                ? "bg-violet-400"
                : i < 0.75
                  ? "bg-violet-600"
                  : "bg-violet-800";
        return (
          <div
            key={h}
            title={`${h}:00 — ${cnt} events`}
            className={`w-8 h-8 rounded-lg ${bg} flex items-center justify-center cursor-default`}
          >
            <span className="text-[9px] font-bold text-white/90">{h}</span>
          </div>
        );
      })}
    </div>
  );
};

/* ─── Mini day bar chart ─────────────────────────────────────────────────── */
const DayChart = ({ data }) => {
  if (!data.length) return <EmptyState text="No data" />;
  const max = Math.max(...data.map((d) => d.count), 1);
  return (
    <div className="flex items-end gap-0.5 h-20">
      {data.map((d) => (
        <div
          key={d._id}
          className="flex-1 flex flex-col items-center gap-0.5 group"
          title={`${d._id}: ${d.count}`}
        >
          <div
            className="w-full bg-gradient-to-t from-violet-500 to-purple-400 rounded-t transition-all duration-700 min-h-[2px]"
            style={{ height: `${(d.count / max) * 64}px` }}
          />
        </div>
      ))}
    </div>
  );
};

/* ─── URL Table row ──────────────────────────────────────────────────────── */
const URLRow = ({ rank, title, path, count, maxCount }) => (
  <div className="flex items-start gap-3 py-2.5 border-b border-slate-50 last:border-0">
    <span className="text-xs font-bold text-slate-400 w-5 flex-shrink-0 mt-0.5">
      #{rank}
    </span>
    <div className="flex-1 min-w-0">
      <p className="text-xs font-semibold text-slate-700 truncate">
        {title || "Unknown Page"}
      </p>
      <p className="text-xs text-violet-500 truncate flex items-center gap-1 mt-0.5">
        <Link2 className="w-3 h-3 flex-shrink-0" />
        {path || "/"}
      </p>
      <div className="flex items-center gap-2 mt-1">
        <MiniBar value={count} max={maxCount} color="bg-blue-400" />
        <span className="text-xs font-semibold text-slate-500 flex-shrink-0">
          {count} hits
        </span>
      </div>
    </div>
  </div>
);

/* ─── Stat Card ─────────────────────────────────────────────────────────── */
const StatCard = ({
  label,
  value,
  icon: Icon,
  gradient,
  bg,
  border,
  delay,
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay }}
    className={`${bg} border ${border} rounded-2xl p-4 shadow-sm`}
  >
    <div
      className={`w-8 h-8 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-2 shadow-sm`}
    >
      <Icon className="w-4 h-4 text-white" />
    </div>
    <div className="text-xl font-bold text-slate-800">{value ?? 0}</div>
    <div className="text-xs text-slate-500 mt-0.5">{label}</div>
  </motion.div>
);

/* ═══════════════════════════════════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════════════════════════════════ */
const BackendUserActivityDetail = () => {
  const { userId } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState(null);
  const [allActivities, setAllActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dateRange, setDateRange] = useState("all");
  const [page, setPage] = useState(1);
  const [activeTab, setActiveTab] = useState("timeline");
  const [typeFilter, setTypeFilter] = useState("all");
  const [socketConnected, setSocketConnected] = useState(false);
  const socketRef = useRef(null);

  /* ── Fetch main detail ── */
  const fetchDetail = async () => {
    setLoading(true);
    try {
      const [mainRes, allRes] = await Promise.all([
        api.get(
          `/admin/user-activities/user/${userId}?dateRange=${dateRange}&page=${page}&limit=30`,
        ),
        api.get(
          `/admin/user-activities/user/${userId}?dateRange=${dateRange}&page=1&limit=500`,
        ),
      ]);
      if (mainRes.data.success) setData(mainRes.data.data);
      if (allRes.data.success)
        setAllActivities(allRes.data.data.timeline || []);
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to load user detail");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDetail();
  }, [userId, dateRange, page]);

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
      console.log("👤 User Detail Socket connected:", socketRef.current.id);
      setSocketConnected(true);
      socketRef.current.emit("join-user-activity", userId);
    });

    socketRef.current.on("disconnect", () => {
      console.log("❌ User Detail Socket disconnected");
      setSocketConnected(false);
    });

    socketRef.current.on("user-activity-update", (activityData) => {
      console.log("🔔 Real-time activity update received:", activityData);
      // Immediately fetch fresh data to update the UI
      fetchDetail();
    });

    // Fallback polling when socket is not connected (every 2 seconds)
    const pollingInterval = setInterval(() => {
      if (!socketRef.current?.connected) {
        console.log("🔄 Polling for updates (socket disconnected)");
        fetchDetail();
      }
    }, 2000);

    return () => {
      clearInterval(pollingInterval);
      if (socketRef.current) {
        socketRef.current.emit("leave-user-activity", userId);
        socketRef.current.disconnect();
      }
    };
  }, [userId]);

  /* ── Helpers ── */
  const fmt = (s) => {
    if (!s && s !== 0) return "—";
    if (s < 60) return `${s}s`;
    if (s < 3600) return `${Math.floor(s / 60)}m ${s % 60}s`;
    return `${(s / 3600).toFixed(1)}h`;
  };

  const fmtDate = (d) =>
    d
      ? new Date(d).toLocaleString("en-IN", {
          day: "2-digit",
          month: "short",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        })
      : "—";

  const fmtTime = (d) =>
    d
      ? new Date(d).toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      : "—";

  const fmtMs = (ms) => {
    if (!ms) return "—";
    return `${Math.round(ms / 1000)}s`;
  };

  /* ── Derived sets from allActivities ── */
  const formSubmissions = useMemo(
    () =>
      allActivities.filter((a) =>
        ["contact_submit", "form_submit"].includes(a.activityType),
      ),
    [allActivities],
  );

  const navActivities = useMemo(
    () =>
      allActivities.filter(
        (a) =>
          ["navigation", "button_click", "dropdown_open"].includes(
            a.activityType,
          ) && a.action?.element,
      ),
    [allActivities],
  );

  const courseActivities = useMemo(
    () =>
      allActivities.filter((a) =>
        [
          "course_view",
          "course_enroll",
          "video_play",
          "video_pause",
          "video_complete",
          "test_start",
          "test_submit",
        ].includes(a.activityType),
      ),
    [allActivities],
  );

  const searchActivities = useMemo(
    () => allActivities.filter((a) => a.activityType === "search"),
    [allActivities],
  );

  /* ── Comprehensive page analytics with scroll depth and button clicks ── */
  const pageAnalytics = useMemo(() => {
    const map = {};

    allActivities.forEach((a) => {
      const pagePath = a.page?.path || "Unknown";

      if (!map[pagePath]) {
        map[pagePath] = {
          path: pagePath,
          title: a.page?.title || pagePath,
          visits: 0,
          totalTimeSpent: 0,
          maxScrollDepth: 0,
          buttonClicks: [],
          scrollEvents: [],
          firstVisit: a.timestamp,
          lastVisit: a.timestamp,
        };
      }

      // Track visits (page_view activities)
      if (a.activityType === "page_view") {
        map[pagePath].visits++;
      }

      // Track time spent on page
      if (a.activityType === "time_on_page" && a.duration) {
        map[pagePath].totalTimeSpent += a.duration;
      }

      // Track scroll depth
      if (a.activityType === "scroll" && a.scroll?.maxDepth != null) {
        if (a.scroll.maxDepth > map[pagePath].maxScrollDepth) {
          map[pagePath].maxScrollDepth = a.scroll.maxDepth;
        }
        map[pagePath].scrollEvents.push({
          depth: a.scroll.depth,
          maxDepth: a.scroll.maxDepth,
          timestamp: a.timestamp,
        });
      }

      // Track button clicks
      if (a.activityType === "button_click") {
        map[pagePath].buttonClicks.push({
          element: a.action?.element || "Unknown button",
          value: a.action?.value || "",
          timestamp: a.timestamp,
        });
      }

      // Update visit timestamps
      if (new Date(a.timestamp) < new Date(map[pagePath].firstVisit)) {
        map[pagePath].firstVisit = a.timestamp;
      }
      if (new Date(a.timestamp) > new Date(map[pagePath].lastVisit)) {
        map[pagePath].lastVisit = a.timestamp;
      }
    });

    return Object.values(map).sort((a, b) => b.visits - a.visits);
  }, [allActivities]);

  /* ── URL frequency from allActivities ── */
  const urlFrequency = useMemo(() => {
    const map = {};
    allActivities.forEach((a) => {
      if (!a.page?.path) return;
      const key = a.page.path;
      if (!map[key])
        map[key] = {
          path: key,
          title: a.page.title || key,
          count: 0,
          totalDuration: 0,
        };
      map[key].count++;
      if (a.duration) map[key].totalDuration += a.duration;
    });
    return Object.values(map).sort((a, b) => b.count - a.count);
  }, [allActivities]);

  /* ── Nav menu selection frequency ── */
  const navFrequency = useMemo(() => {
    const map = {};
    navActivities.forEach((a) => {
      const key = a.action?.element || a.page?.title || "Unknown";
      if (!map[key])
        map[key] = {
          element: key,
          count: 0,
          type: a.activityType,
          lastSeen: a.timestamp,
        };
      map[key].count++;
      if (new Date(a.timestamp) > new Date(map[key].lastSeen))
        map[key].lastSeen = a.timestamp;
    });
    return Object.values(map).sort((a, b) => b.count - a.count);
  }, [navActivities]);

  /* ── Session grouping ── */
  const sessionMap = useMemo(() => {
    const map = {};
    allActivities.forEach((a) => {
      const sid = a.sessionId || "unknown";
      if (!map[sid])
        map[sid] = {
          sessionId: sid,
          activities: [],
          start: a.timestamp,
          end: a.timestamp,
        };
      map[sid].activities.push(a);
      if (new Date(a.timestamp) < new Date(map[sid].start))
        map[sid].start = a.timestamp;
      if (new Date(a.timestamp) > new Date(map[sid].end))
        map[sid].end = a.timestamp;
    });
    return Object.values(map).sort((a, b) => new Date(b.end) - new Date(a.end));
  }, [allActivities]);

  /* ── Filtered timeline ── */
  const filteredTimeline = useMemo(() => {
    if (!data?.timeline) return [];
    if (typeFilter === "all") return data.timeline;
    return data.timeline.filter((a) => a.activityType === typeFilter);
  }, [data?.timeline, typeFilter]);

  /* ── Loading / empty states ── */
  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-purple-50/30 to-blue-50/20">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-violet-500 mx-auto mb-4" />
          <p className="text-slate-500">Loading user analytics…</p>
        </div>
      </div>
    );

  if (!data)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <XCircle className="w-12 h-12 text-red-400 mx-auto mb-3" />
          <p className="text-slate-600">User data not found.</p>
          <button
            onClick={() => navigate(-1)}
            className="mt-4 px-4 py-2 bg-violet-500 text-white rounded-xl text-sm"
          >
            Go Back
          </button>
        </div>
      </div>
    );

  const {
    user,
    stats,
    activityBreakdown,
    activityByHour,
    activityByDay,
    topPages,
    deviceInfo,
    timeline,
    totalPages,
  } = data;
  const maxBreakdown = Math.max(
    ...(activityBreakdown || []).map((a) => a.count),
    1,
  );
  const breakdownColors = [
    "bg-violet-500",
    "bg-blue-500",
    "bg-emerald-500",
    "bg-orange-500",
    "bg-pink-500",
    "bg-cyan-500",
    "bg-indigo-500",
    "bg-red-500",
  ];

  /* ── Token expiry calculation ── */
  const tokenInStorage = localStorage.getItem("token");
  let tokenExpiry = null,
    tokenIssuedAt = null,
    tokenTimeLeft = null;
  if (tokenInStorage) {
    try {
      const payload = JSON.parse(atob(tokenInStorage.split(".")[1]));
      tokenExpiry = payload.exp ? new Date(payload.exp * 1000) : null;
      tokenIssuedAt = payload.iat ? new Date(payload.iat * 1000) : null;
      tokenTimeLeft = tokenExpiry
        ? Math.max(0, Math.round((tokenExpiry - Date.now()) / 1000))
        : null;
    } catch (_) {}
  }

  /* ═══════════════════════ RENDER ═══════════════════════════════════════ */
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/20 to-blue-50/10 p-4 md:p-6 space-y-5">
      {/* ── 1. Back + Header ─────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-500 hover:text-violet-600 text-sm font-medium mb-4 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to All Users
        </button>

        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-5">
              {/* Avatar */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-purple-200 flex-shrink-0">
                {user?.name
                  ?.split(" ")
                  .map((n) => n[0])
                  .join("")
                  .toUpperCase()
                  .slice(0, 2) || "?"}
              </div>
              <div>
                <div className="flex items-center gap-3 flex-wrap">
                  <h1 className="text-2xl font-bold text-slate-800">
                    {user?.name || "Unknown"}
                  </h1>
                  {user?.isVerified ? (
                    <span className="flex items-center gap-1 text-xs text-green-700 bg-green-100 border border-green-200 px-2.5 py-0.5 rounded-full font-medium">
                      <CheckCircle className="w-3 h-3" /> Verified
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-xs text-red-600 bg-red-100 border border-red-200 px-2.5 py-0.5 rounded-full font-medium">
                      <XCircle className="w-3 h-3" /> Unverified
                    </span>
                  )}
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-violet-100 text-violet-700 border border-violet-200 capitalize">
                    {user?.role}
                  </span>
                </div>
                <div className="flex items-center gap-4 mt-1.5 flex-wrap text-sm text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-slate-400" />
                    {user?.email}
                  </span>
                  {user?.phone && (
                    <span className="flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-slate-400" />
                      {user?.phone}
                    </span>
                  )}
                  {user?.centerName && (
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {user?.centerName}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-4 mt-1.5 flex-wrap text-xs text-slate-400">
                  <span className="flex items-center gap-1">
                    <Hash className="w-3 h-3" />
                    ID: {user?._id}
                  </span>
                  {user?.createdAt && (
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      Joined: {fmtDate(user.createdAt)}
                    </span>
                  )}
                  {user?.lastLogin && (
                    <span className="flex items-center gap-1">
                      <LogIn className="w-3 h-3" />
                      Last login: {fmtDate(user.lastLogin)}
                    </span>
                  )}
                  {socketConnected && (
                    <span className="flex items-center gap-1.5 px-2 py-0.5 bg-green-50 text-green-600 rounded-full text-xs font-medium border border-green-200">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                      Live • Connected
                    </span>
                  )}
                  {!socketConnected && (
                    <span className="flex items-center gap-1.5 px-2 py-0.5 bg-amber-50 text-amber-600 rounded-full text-xs font-medium border border-amber-200">
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                      Live • Polling
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="flex gap-2 flex-wrap">
              <select
                value={dateRange}
                onChange={(e) => {
                  setDateRange(e.target.value);
                  setPage(1);
                }}
                className="px-4 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-400 bg-white"
              >
                <option value="today">Today</option>
                <option value="week">This Week</option>
                <option value="month">This Month</option>
                <option value="all">All Time</option>
              </select>
              <button
                onClick={fetchDetail}
                className="px-4 py-2 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 text-sm font-medium flex items-center gap-2 transition-all shadow-sm"
              >
                <RefreshCw className="w-4 h-4" /> Refresh
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── 2. Token Info Banner ─────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className="bg-gradient-to-r from-violet-50 to-blue-50 border border-violet-200 rounded-2xl p-4"
      >
        <div className="flex items-center gap-2 mb-3">
          <Key className="w-4 h-4 text-violet-500" />
          <span className="text-sm font-semibold text-violet-700">
            JWT Token Configuration
          </span>
          <span className="ml-auto text-xs text-violet-500 italic">
            How long users stay logged in
          </span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="bg-white rounded-xl p-3 border border-violet-100 shadow-sm">
            <div className="flex items-center gap-1.5 mb-1">
              <Timer className="w-3.5 h-3.5 text-orange-500" />
              <span className="text-xs font-semibold text-slate-600">
                Access Token
              </span>
            </div>
            <div className="text-lg font-bold text-orange-600">15 min</div>
            <p className="text-xs text-slate-400 mt-0.5">
              Auto-refreshed via cookie
            </p>
          </div>
          <div className="bg-white rounded-xl p-3 border border-violet-100 shadow-sm">
            <div className="flex items-center gap-1.5 mb-1">
              <ShieldCheck className="w-3.5 h-3.5 text-green-500" />
              <span className="text-xs font-semibold text-slate-600">
                Refresh Token
              </span>
            </div>
            <div className="text-lg font-bold text-green-600">7 days</div>
            <p className="text-xs text-slate-400 mt-0.5">HttpOnly cookie</p>
          </div>
          <div className="bg-white rounded-xl p-3 border border-violet-100 shadow-sm">
            <div className="flex items-center gap-1.5 mb-1">
              <Wifi className="w-3.5 h-3.5 text-blue-500" />
              <span className="text-xs font-semibold text-slate-600">
                Your Token Expires
              </span>
            </div>
            <div className="text-sm font-bold text-blue-600 truncate">
              {tokenExpiry ? fmtDate(tokenExpiry) : "N/A"}
            </div>
            {tokenTimeLeft !== null && (
              <p className="text-xs text-slate-400 mt-0.5">
                {tokenTimeLeft > 0 ? `${fmt(tokenTimeLeft)} left` : "Expired"}
              </p>
            )}
          </div>
          <div className="bg-white rounded-xl p-3 border border-violet-100 shadow-sm">
            <div className="flex items-center gap-1.5 mb-1">
              <Info className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-xs font-semibold text-slate-600">
                Session Policy
              </span>
            </div>
            <div className="text-xs text-slate-600 leading-relaxed">
              User stays active for up to <strong>7 days</strong> without
              re-login. Access silently re-issues every <strong>15 min</strong>.
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── 3. Stats Row (8 cards) ───────────────────────────────────────── */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
        {[
          {
            label: "Total Events",
            value: stats.totalActivities,
            icon: Activity,
            gradient: "from-violet-500 to-purple-600",
            bg: "bg-violet-50",
            border: "border-violet-100",
          },
          {
            label: "Sessions",
            value: stats.sessionCount,
            icon: Layers,
            gradient: "from-blue-500 to-cyan-500",
            bg: "bg-blue-50",
            border: "border-blue-100",
          },
          {
            label: "Page Views",
            value: stats.totalPageViews,
            icon: Eye,
            gradient: "from-indigo-500 to-blue-600",
            bg: "bg-indigo-50",
            border: "border-indigo-100",
          },
          {
            label: "Scrolls",
            value: stats.totalScrolls,
            icon: Mouse,
            gradient: "from-pink-500 to-rose-500",
            bg: "bg-pink-50",
            border: "border-pink-100",
          },
          {
            label: "Clicks",
            value: stats.totalClicks,
            icon: MousePointer,
            gradient: "from-orange-500 to-amber-500",
            bg: "bg-orange-50",
            border: "border-orange-100",
          },
          {
            label: "Logins",
            value: stats.totalLogins,
            icon: LogIn,
            gradient: "from-green-500 to-emerald-500",
            bg: "bg-green-50",
            border: "border-green-100",
          },
          {
            label: "Form Submits",
            value: formSubmissions.length,
            icon: MessageSquare,
            gradient: "from-rose-500 to-pink-600",
            bg: "bg-rose-50",
            border: "border-rose-100",
          },
          {
            label: "Avg Session",
            value: fmt(stats.avgDuration),
            icon: Clock,
            gradient: "from-teal-500 to-cyan-600",
            bg: "bg-teal-50",
            border: "border-teal-100",
          },
        ].map((s, i) => (
          <StatCard key={i} {...s} delay={i * 0.04} />
        ))}
      </div>

      {/* ── 4. Charts Row ───────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Activity Breakdown */}
        <Card delay={0.1}>
          <SectionHeader
            icon={BarChart2}
            title="Activity Breakdown"
            color="text-violet-500"
            badge={activityBreakdown?.length}
          />
          <div className="space-y-2">
            {(activityBreakdown || []).map((a, i) => (
              <div key={a._id} className="flex items-center gap-3">
                <span className="text-xs text-slate-500 w-28 truncate capitalize">
                  {a._id?.replace(/_/g, " ")}
                </span>
                <MiniBar
                  value={a.count}
                  max={maxBreakdown}
                  color={breakdownColors[i % breakdownColors.length]}
                />
                <span className="text-xs font-semibold text-slate-600 w-8 text-right">
                  {a.count}
                </span>
              </div>
            ))}
            {(!activityBreakdown || activityBreakdown.length === 0) && (
              <EmptyState text="No activity" />
            )}
          </div>
        </Card>

        {/* 30-day chart */}
        <Card delay={0.13}>
          <SectionHeader
            icon={TrendingUp}
            title="Last 30 Days"
            color="text-blue-500"
          />
          <DayChart data={activityByDay || []} />
          <p className="text-xs text-slate-400 mt-2 text-center">
            Daily activity frequency
          </p>
        </Card>

        {/* Hour heatmap */}
        <Card delay={0.16}>
          <SectionHeader
            icon={Clock}
            title="Activity by Hour"
            color="text-orange-500"
          />
          <HourHeatmap data={activityByHour || []} />
          <div className="flex items-center gap-2 mt-3 text-xs text-slate-400">
            <div className="w-3 h-3 rounded bg-slate-100" /> Low
            <div className="w-3 h-3 rounded bg-violet-300" />
            <div className="w-3 h-3 rounded bg-violet-500" />
            <div className="w-3 h-3 rounded bg-violet-800" /> High
          </div>
        </Card>
      </div>

      {/* ── 5. URL Tracking + Navigation Selection ───────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* All URLs hit */}
        <Card delay={0.18}>
          <SectionHeader
            icon={Link2}
            title="All URLs Visited"
            color="text-blue-500"
            badge={urlFrequency.length}
          />
          {urlFrequency.length === 0 ? (
            <EmptyState text="No page visits recorded yet" />
          ) : (
            <div className="divide-y divide-slate-50 max-h-80 overflow-y-auto pr-1">
              {urlFrequency.map((p, i) => (
                <URLRow
                  key={p.path}
                  rank={i + 1}
                  title={p.title}
                  path={p.path}
                  count={p.count}
                  maxCount={urlFrequency[0]?.count || 1}
                />
              ))}
            </div>
          )}
        </Card>

        {/* Topbar / Navbar selection */}
        <Card delay={0.2}>
          <SectionHeader
            icon={LayoutDashboard}
            title="Navigation Menu Selections"
            color="text-purple-500"
            badge={navFrequency.length}
          />
          {navFrequency.length === 0 ? (
            <EmptyState text="No navigation clicks recorded yet" />
          ) : (
            <div className="space-y-2 max-h-80 overflow-y-auto pr-1">
              {navFrequency.map((n, i) => (
                <div key={n.element} className="flex items-center gap-3 py-1.5">
                  <span className="text-xs font-bold text-slate-400 w-5">
                    #{i + 1}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-lg flex-shrink-0 flex items-center justify-center ${typeConfig[n.type]?.color || "bg-slate-100"}`}
                  >
                    <MousePointer className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-slate-700 truncate">
                      {n.element}
                    </p>
                    <p className="text-xs text-slate-400">
                      {fmtDate(n.lastSeen)}
                    </p>
                  </div>
                  <span className="text-xs font-bold text-slate-500 flex-shrink-0 bg-slate-100 px-2 py-0.5 rounded-full">
                    {n.count}×
                  </span>
                </div>
              ))}
            </div>
          )}
        </Card>
      </div>

      {/* ── 6. Top Pages (backend topPages) detailed ────────────────────── */}
      <Card delay={0.22}>
        <SectionHeader
          icon={Globe}
          title="Top Pages Visited (with Path & Duration)"
          color="text-emerald-500"
          badge={topPages?.length}
        />
        {!topPages || topPages.length === 0 ? (
          <EmptyState text="No page views yet" />
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="text-slate-400 text-left border-b border-slate-100">
                  <th className="pb-2 pr-3 font-semibold w-6">#</th>
                  <th className="pb-2 pr-3 font-semibold">Page Title</th>
                  <th className="pb-2 pr-3 font-semibold">Path / URL</th>
                  <th className="pb-2 pr-3 font-semibold text-right">Visits</th>
                </tr>
              </thead>
              <tbody>
                {topPages.map((p, i) => (
                  <tr
                    key={i}
                    className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors"
                  >
                    <td className="py-2 pr-3 font-bold text-slate-400">
                      {i + 1}
                    </td>
                    <td className="py-2 pr-3 font-medium text-slate-700 max-w-[180px] truncate">
                      {p._id || "Unknown"}
                    </td>
                    <td className="py-2 pr-3 text-violet-500 max-w-[200px] truncate">
                      <span className="flex items-center gap-1">
                        <Link2 className="w-3 h-3 flex-shrink-0" />
                        {p.path || "/"}
                      </span>
                    </td>
                    <td className="py-2 text-right font-semibold text-slate-600">
                      {p.count}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Card>

      {/* ── 6.5. Comprehensive Page Analytics (URL, Time, Scroll, Buttons) ── */}
      <Card delay={0.29}>
        <div className="bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-teal-500/10 -m-5 p-5 rounded-t-2xl border-b-2 border-blue-200 mb-4">
          <SectionHeader
            icon={Activity}
            title="Detailed Page Analytics (URL, Time, Scroll, Buttons)"
            color="text-blue-700"
            badge={pageAnalytics.length}
          />
          <p className="text-xs text-slate-600 mt-1 font-medium">
            📈 In-depth analysis of user behavior: time spent, scroll patterns, and button interactions per page
          </p>
        </div>
        {pageAnalytics.length === 0 ? (
          <EmptyState text="No page analytics data yet" />
        ) : (
          <div className="space-y-4 max-h-[700px] overflow-y-auto pr-1">
            {pageAnalytics.map((page, idx) => {
              const timeSpentSec = Math.round(page.totalTimeSpent / 1000);
              return (
                <div
                  key={idx}
                  className="border-2 border-blue-100 rounded-2xl p-4 hover:border-blue-300 hover:shadow-lg transition-all bg-gradient-to-br from-blue-50/40 to-cyan-50/40 shadow-sm"
                >
                  {/* Page Header */}
                  <div className="flex items-start justify-between gap-3 mb-3 pb-3 border-b border-blue-100">
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-bold text-blue-700 mb-1 flex items-center gap-2">
                        <FileText className="w-4 h-4 flex-shrink-0" />
                        <span className="truncate">{page.title}</span>
                      </h4>
                      <p className="text-xs text-blue-500 truncate flex items-center gap-1.5">
                        <Link2 className="w-3 h-3 flex-shrink-0" />
                        {page.path}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold">
                        {page.visits} visits
                      </span>
                    </div>
                  </div>

                  {/* Key Metrics Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-3">
                    <div className="bg-white rounded-xl p-3 border border-blue-50">
                      <div className="flex items-center gap-2 mb-1">
                        <Clock className="w-3.5 h-3.5 text-emerald-500" />
                        <span className="text-xs text-slate-400">
                          Time Spent
                        </span>
                      </div>
                      <p className="text-lg font-bold text-slate-700">
                        {timeSpentSec > 0 ? fmt(timeSpentSec) : "N/A"}
                      </p>
                    </div>

                    <div className="bg-white rounded-xl p-3 border border-blue-50">
                      <div className="flex items-center gap-2 mb-1">
                        <TrendingDown className="w-3.5 h-3.5 text-violet-500" />
                        <span className="text-xs text-slate-400">
                          Max Scroll
                        </span>
                      </div>
                      <p className="text-lg font-bold text-slate-700">
                        {page.maxScrollDepth > 0
                          ? `${page.maxScrollDepth}%`
                          : "0%"}
                      </p>
                    </div>

                    <div className="bg-white rounded-xl p-3 border border-blue-50 sm:col-span-1 col-span-2">
                      <div className="flex items-center gap-2 mb-1">
                        <MousePointer className="w-3.5 h-3.5 text-orange-500" />
                        <span className="text-xs text-slate-400">
                          Button Clicks
                        </span>
                      </div>
                      <p className="text-lg font-bold text-slate-700">
                        {page.buttonClicks.length}
                      </p>
                    </div>
                  </div>

                  {/* Scroll Progress Bar */}
                  {page.maxScrollDepth > 0 && (
                    <div className="mb-3">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-slate-500 font-medium">
                          Scroll Progress
                        </span>
                        <span className="text-xs text-violet-600 font-bold">
                          {page.maxScrollDepth}%
                        </span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-violet-400 to-purple-500 rounded-full transition-all duration-700"
                          style={{ width: `${page.maxScrollDepth}%` }}
                        />
                      </div>
                    </div>
                  )}

                  {/* Button Clicks Detail */}
                  {page.buttonClicks.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-blue-100">
                      <div className="flex items-center gap-2 mb-2">
                        <MousePointer className="w-3.5 h-3.5 text-orange-500" />
                        <span className="text-xs font-semibold text-slate-700">
                          Buttons Clicked on this Page
                        </span>
                      </div>
                      <div className="space-y-1.5 max-h-32 overflow-y-auto pr-1">
                        {page.buttonClicks.map((click, cidx) => (
                          <div
                            key={cidx}
                            className="bg-orange-50 rounded-lg px-3 py-2 border border-orange-100 flex items-center justify-between gap-2"
                          >
                            <div className="flex-1 min-w-0">
                              <p className="text-xs font-medium text-slate-700 truncate">
                                {click.element}
                              </p>
                              {click.value && (
                                <p className="text-xs text-slate-500 truncate mt-0.5">
                                  {click.value}
                                </p>
                              )}
                            </div>
                            <span className="text-xs text-slate-400 whitespace-nowrap">
                              {new Date(click.timestamp).toLocaleTimeString()}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Visit Info */}
                  <div className="mt-3 pt-3 border-t border-blue-100 flex items-center justify-between text-xs text-slate-400">
                    <span>
                      First visit: {new Date(page.firstVisit).toLocaleString()}
                    </span>
                    <span>
                      Last visit: {new Date(page.lastVisit).toLocaleString()}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </Card>

      {/* ── 7. Form & Contact Submissions ───────────────────────────────── */}
      <Card delay={0.25}>
        <SectionHeader
          icon={MessageSquare}
          title="Form & Contact Submissions"
          color="text-rose-500"
          badge={formSubmissions.length}
        />
        {formSubmissions.length === 0 ? (
          <EmptyState text="No form submissions recorded for this user" />
        ) : (
          <div className="space-y-3 max-h-96 overflow-y-auto pr-1">
            {formSubmissions.map((a, i) => (
              <div
                key={a._id || i}
                className="border border-slate-100 rounded-xl p-3 hover:border-rose-200 transition-colors bg-slate-50/40"
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <ActivityBadge type={a.activityType} />
                  <span className="text-xs text-slate-400">
                    {fmtDate(a.timestamp)}
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                  {a.page?.path && (
                    <div>
                      <span className="text-slate-400">Page</span>
                      <p className="font-medium text-violet-600 truncate">
                        {a.page.path}
                      </p>
                    </div>
                  )}
                  {a.page?.title && (
                    <div>
                      <span className="text-slate-400">Page Title</span>
                      <p className="font-medium text-slate-700 truncate">
                        {typeof a.page.title === "string" ? a.page.title : ""}
                      </p>
                    </div>
                  )}
                  {a.action?.element && (
                    <div>
                      <span className="text-slate-400">Form Element</span>
                      <p className="font-medium text-slate-700 truncate">
                        {a.action.element}
                      </p>
                    </div>
                  )}
                  {a.action?.value && (
                    <div className="col-span-2 sm:col-span-3">
                      <span className="text-slate-400">Value / Data</span>
                      <p className="font-medium text-slate-700 break-all">
                        {a.action.value}
                      </p>
                    </div>
                  )}
                  {a.sessionId && (
                    <div className="col-span-2 sm:col-span-3">
                      <span className="text-slate-400">Session ID</span>
                      <p className="font-mono text-slate-500 text-[10px] truncate">
                        {a.sessionId}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </Card>

      {/* ── 8. Course / Video Activity ──────────────────────────────────── */}
      <Card delay={0.27}>
        <SectionHeader
          icon={BookOpen}
          title="Course & Video Activity"
          color="text-sky-500"
          badge={courseActivities.length}
        />
        {courseActivities.length === 0 ? (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sky-100 mb-4">
              <BookOpen className="w-8 h-8 text-sky-500" />
            </div>
            <p className="text-sm font-medium text-slate-600 mb-1">
              No videos and courses done
            </p>
            <p className="text-xs text-slate-400">
              Once done you can track here
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="text-slate-400 text-left border-b border-slate-100">
                  <th className="pb-2 pr-3 font-semibold">Type</th>
                  <th className="pb-2 pr-3 font-semibold">Course</th>
                  <th className="pb-2 pr-3 font-semibold">Section</th>
                  <th className="pb-2 pr-3 font-semibold">Progress</th>
                  <th className="pb-2 pr-3 font-semibold">Duration</th>
                  <th className="pb-2 font-semibold">Time</th>
                </tr>
              </thead>
              <tbody>
                {courseActivities.map((a, i) => (
                  <tr
                    key={a._id || i}
                    className="border-b border-slate-50 hover:bg-slate-50/50"
                  >
                    <td className="py-2 pr-3">
                      <ActivityBadge type={a.activityType} />
                    </td>
                    <td className="py-2 pr-3 font-medium text-slate-700 max-w-[140px] truncate">
                      {a.course?.courseName || a.page?.title || "—"}
                    </td>
                    <td className="py-2 pr-3 text-slate-500 truncate">
                      {a.course?.section || "—"}
                    </td>
                    <td className="py-2 pr-3 text-slate-600 font-semibold">
                      {a.course?.progress != null
                        ? `${a.course.progress}%`
                        : "—"}
                    </td>
                    <td className="py-2 pr-3 text-slate-500">
                      {fmtMs(a.duration)}
                    </td>
                    <td className="py-2 text-slate-400">
                      {fmtTime(a.timestamp)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Card>

      {/* ── 9. Login-to-Logout Session Boxes with URLs & Time ──────────────── */}
      <Card delay={0.23}>
        <div className="bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 -m-5 p-5 rounded-t-2xl border-b-2 border-indigo-200 mb-4">
          <SectionHeader
            icon={Layers}
            title="Login-to-Logout Session Analysis"
            color="text-indigo-700"
            badge={sessionMap.length}
          />
          <p className="text-xs text-slate-600 mt-1 font-medium">
            🎯 Complete user journey from login to logout — with detailed URL tracking and time spent analysis
          </p>
        </div>
        {sessionMap.length === 0 ? (
          <EmptyState text="No sessions found" />
        ) : (
          <div className="space-y-4 max-h-[800px] overflow-y-auto pr-1">
            {sessionMap.map((s, i) => {
              const durationSec =
                s.start && s.end
                  ? Math.round((new Date(s.end) - new Date(s.start)) / 1000)
                  : 0;
              const types = [
                ...new Set(s.activities.map((a) => a.activityType)),
              ];
              const hasLogin = s.activities.some(
                (a) => a.activityType === "login",
              );
              const hasLogout = s.activities.some(
                (a) => a.activityType === "logout",
              );

              // Get all URLs in this session with time spent
              const urlMap = {};
              let lastUrl = null;
              let lastTime = null;

              s.activities
                .sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp))
                .forEach((a) => {
                  const currentUrl = a.page?.path || a.page?.title || "Unknown";
                  const currentTime = new Date(a.timestamp).getTime();

                  // Calculate time spent on previous URL
                  if (lastUrl && lastTime) {
                    const timeSpent = Math.round(
                      (currentTime - lastTime) / 1000,
                    );
                    if (!urlMap[lastUrl]) {
                      urlMap[lastUrl] = {
                        path: lastUrl,
                        title: lastUrl,
                        totalTime: 0,
                        visits: 0,
                      };
                    }
                    urlMap[lastUrl].totalTime += timeSpent;
                  }

                  // Track URL visit
                  if (!urlMap[currentUrl]) {
                    urlMap[currentUrl] = {
                      path: currentUrl,
                      title: a.page?.title || currentUrl,
                      totalTime: 0,
                      visits: 0,
                    };
                  }
                  urlMap[currentUrl].visits++;

                  lastUrl = currentUrl;
                  lastTime = currentTime;
                });

              const urlsVisited = Object.values(urlMap).sort(
                (a, b) => b.totalTime - a.totalTime,
              );

              return (
                <div
                  key={s.sessionId}
                  className="relative overflow-hidden border-2 border-indigo-200 rounded-2xl hover:border-indigo-400 transition-all bg-white shadow-sm hover:shadow-xl"
                >
                  {/* Colored top accent bar */}
                  <div className="h-1.5 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

                  {/* Session Header */}
                  <div className="p-4">
                  <div className="flex items-start justify-between gap-3 mb-3 pb-3 border-b border-indigo-100">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm font-bold text-indigo-700 flex items-center gap-1.5">
                          <Layers className="w-4 h-4" />
                          Session #{i + 1}
                        </span>
                        {hasLogin && (
                          <span className="px-2.5 py-0.5 bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 text-xs font-semibold rounded-full flex items-center gap-1 border border-green-200 shadow-sm">
                            <LogIn className="w-3 h-3" />
                            Login
                          </span>
                        )}
                        {hasLogout && (
                          <span className="px-2.5 py-0.5 bg-gradient-to-r from-red-50 to-rose-50 text-red-700 text-xs font-semibold rounded-full flex items-center gap-1 border border-red-200 shadow-sm">
                            <LogOut className="w-3 h-3" />
                            Logout
                          </span>
                        )}
                        {!hasLogout && (
                          <span className="px-2.5 py-0.5 bg-gradient-to-r from-amber-50 to-yellow-50 text-amber-700 text-xs font-semibold rounded-full flex items-center gap-1 border border-amber-200 shadow-sm animate-pulse">
                            <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                            Active
                          </span>
                        )}
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                        <div className="bg-indigo-50 rounded-xl p-2.5 border border-indigo-100">
                          <span className="text-indigo-400 block text-[10px] uppercase tracking-wide font-medium">Started</span>
                          <p className="text-slate-700 font-bold mt-0.5">
                            {fmtTime(s.start)}
                          </p>
                        </div>
                        <div className="bg-pink-50 rounded-xl p-2.5 border border-pink-100">
                          <span className="text-pink-400 block text-[10px] uppercase tracking-wide font-medium">Ended</span>
                          <p className="text-slate-700 font-bold mt-0.5">
                            {fmtTime(s.end)}
                          </p>
                        </div>
                        <div className="bg-violet-50 rounded-xl p-2.5 border border-violet-100">
                          <span className="text-violet-400 block text-[10px] uppercase tracking-wide font-medium">Duration</span>
                          <p className="text-violet-700 font-bold mt-0.5">
                            {fmt(durationSec)}
                          </p>
                        </div>
                        <div className="bg-blue-50 rounded-xl p-2.5 border border-blue-100">
                          <span className="text-blue-400 block text-[10px] uppercase tracking-wide font-medium">Total Events</span>
                          <p className="text-blue-700 font-bold mt-0.5">
                            {s.activities.length}
                          </p>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        const box = document.getElementById(`session-${i}`);
                        box.classList.toggle("hidden");
                      }}
                      className="px-3 py-1.5 text-xs bg-indigo-100 hover:bg-indigo-200 text-indigo-700 rounded-xl transition-colors flex items-center gap-1 font-medium shadow-sm"
                    >
                      <ChevronDown className="w-3 h-3" /> Details
                    </button>
                  </div>

                  {/* URLs Visited in this Session */}
                  <div id={`session-${i}`} className="space-y-2">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-6 h-6 bg-violet-100 rounded-lg flex items-center justify-center">
                        <Globe className="w-3.5 h-3.5 text-violet-600" />
                      </div>
                      <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                        URLs Visited ({urlsVisited.length})
                      </h4>
                    </div>
                    {urlsVisited.length === 0 ? (
                      <p className="text-xs text-slate-400 italic">
                        No page views in this session
                      </p>
                    ) : (
                      <div className="space-y-2">
                        {urlsVisited.map((url, idx) => {
                          const maxTime = Math.max(
                            ...urlsVisited.map((u) => u.totalTime),
                            1,
                          );
                          return (
                            <div
                              key={idx}
                              className="bg-gradient-to-r from-white to-indigo-50/30 rounded-xl p-3 border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all"
                            >
                              <div className="flex items-start justify-between gap-2 mb-2">
                                <div className="flex-1 min-w-0">
                                  <p className="text-xs font-bold text-slate-800 truncate">
                                    {url.title !== url.path ? url.title : "Page"}
                                  </p>
                                  <p className="text-xs text-indigo-500 truncate flex items-center gap-1 mt-0.5">
                                    <Link2 className="w-2.5 h-2.5 flex-shrink-0" />
                                    {url.path}
                                  </p>
                                </div>
                                <div className="flex flex-col items-end gap-1 flex-shrink-0">
                                  <span className="text-sm font-extrabold text-indigo-600 whitespace-nowrap">
                                    {fmt(url.totalTime)}
                                  </span>
                                  <span className="text-[10px] bg-violet-100 text-violet-600 px-1.5 py-0.5 rounded-full font-semibold">
                                    {url.visits} visits
                                  </span>
                                </div>
                              </div>
                              {/* Time bar */}
                              <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden mt-1">
                                <div
                                  className="h-full bg-gradient-to-r from-indigo-400 via-violet-500 to-purple-500 rounded-full transition-all duration-700 shadow-sm"
                                  style={{ width: `${(url.totalTime / maxTime) * 100}%` }}
                                />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {/* Activity Types in Session */}
                    <div className="mt-3 pt-3 border-t border-indigo-100">
                      <p className="text-[10px] uppercase tracking-wide font-bold text-slate-400 mb-2">
                        Activity Types in this Session:
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {types.slice(0, 8).map((t) => (
                          <ActivityBadge key={t} type={t} />
                        ))}
                        {types.length > 8 && (
                          <span className="text-xs text-slate-400 px-2 py-0.5">
                            +{types.length - 8} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Session ID */}
                    <div className="mt-2 pt-2 border-t border-slate-100">
                      <p className="text-[10px] uppercase tracking-wide font-bold text-slate-400">Session ID</p>
                      <p className="font-mono text-[10px] text-slate-500 break-all mt-0.5 bg-slate-50 rounded p-1">
                        {s.sessionId}
                      </p>
                    </div>
                  </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </Card>

      {/* ── 10. Device & Location ────────────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <Card delay={0.31}>
          <SectionHeader
            icon={deviceInfo?.device?.isMobile ? Smartphone : Monitor}
            title="Device & Browser"
            color={
              deviceInfo?.device?.isMobile ? "text-pink-500" : "text-blue-500"
            }
          />
          {deviceInfo ? (
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                {deviceInfo.device?.isMobile ? (
                  <span className="px-2.5 py-1 bg-pink-100 text-pink-700 border border-pink-200 rounded-full text-xs font-medium flex items-center gap-1">
                    <Smartphone className="w-3 h-3" /> Mobile
                  </span>
                ) : (
                  <span className="px-2.5 py-1 bg-blue-100 text-blue-700 border border-blue-200 rounded-full text-xs font-medium flex items-center gap-1">
                    <Monitor className="w-3 h-3" /> Desktop
                  </span>
                )}
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs">
                {deviceInfo.device?.platform && (
                  <div className="bg-slate-50 rounded-xl p-2.5">
                    <span className="text-slate-400 block">Platform</span>
                    <span className="font-semibold text-slate-700">
                      {deviceInfo.device.platform}
                    </span>
                  </div>
                )}
                {deviceInfo.device?.screenWidth && (
                  <div className="bg-slate-50 rounded-xl p-2.5">
                    <span className="text-slate-400 block">Screen</span>
                    <span className="font-semibold text-slate-700">
                      {deviceInfo.device.screenWidth} ×{" "}
                      {deviceInfo.device.screenHeight}
                    </span>
                  </div>
                )}
                {deviceInfo.location?.ip && (
                  <div className="bg-slate-50 rounded-xl p-2.5">
                    <span className="text-slate-400 block">IP Address</span>
                    <span className="font-semibold text-slate-700">
                      {deviceInfo.location.ip}
                    </span>
                  </div>
                )}
                {deviceInfo.location?.city && (
                  <div className="bg-slate-50 rounded-xl p-2.5">
                    <span className="text-slate-400 block">City / Country</span>
                    <span className="font-semibold text-slate-700">
                      {deviceInfo.location.city}
                      {deviceInfo.location.country
                        ? `, ${deviceInfo.location.country}`
                        : ""}
                    </span>
                  </div>
                )}
              </div>
              {deviceInfo.device?.userAgent && (
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs text-slate-400 block mb-1">
                    User Agent
                  </span>
                  <p className="text-xs text-slate-500 break-all leading-relaxed">
                    {deviceInfo.device.userAgent}
                  </p>
                </div>
              )}
            </div>
          ) : (
            <EmptyState text="No device data available" />
          )}
        </Card>

        {/* Interaction Summary */}
        <Card delay={0.33}>
          <SectionHeader
            icon={MousePointer}
            title="Interaction Summary"
            color="text-violet-500"
          />
          <div className="space-y-3">
            {[
              {
                label: "Page Views",
                value: stats.totalPageViews,
                max: Math.max(
                  stats.totalPageViews,
                  stats.totalScrolls,
                  stats.totalClicks,
                  stats.totalHovers,
                  1,
                ),
                color: "bg-blue-400",
              },
              {
                label: "Scrolls",
                value: stats.totalScrolls,
                max: Math.max(
                  stats.totalPageViews,
                  stats.totalScrolls,
                  stats.totalClicks,
                  stats.totalHovers,
                  1,
                ),
                color: "bg-indigo-400",
              },
              {
                label: "Clicks",
                value: stats.totalClicks,
                max: Math.max(
                  stats.totalPageViews,
                  stats.totalScrolls,
                  stats.totalClicks,
                  stats.totalHovers,
                  1,
                ),
                color: "bg-orange-400",
              },
              {
                label: "Hovers",
                value: stats.totalHovers,
                max: Math.max(
                  stats.totalPageViews,
                  stats.totalScrolls,
                  stats.totalClicks,
                  stats.totalHovers,
                  1,
                ),
                color: "bg-cyan-400",
              },
              {
                label: "Logins",
                value: stats.totalLogins,
                max: Math.max(
                  stats.totalPageViews,
                  stats.totalScrolls,
                  stats.totalClicks,
                  stats.totalHovers,
                  stats.totalLogins,
                  1,
                ),
                color: "bg-green-400",
              },
              {
                label: "Form Submits",
                value: formSubmissions.length,
                max: Math.max(stats.totalPageViews, formSubmissions.length, 1),
                color: "bg-rose-400",
              },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <span className="text-xs text-slate-500 w-24 flex-shrink-0">
                  {item.label}
                </span>
                <MiniBar value={item.value} max={item.max} color={item.color} />
                <span className="text-xs font-bold text-slate-600 w-10 text-right">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-slate-100">
            <p className="text-xs text-slate-400 mb-2">Total time tracked</p>
            <p className="text-2xl font-bold text-violet-600">
              {fmt(Math.round((stats.totalDuration || 0) / 1000))}
            </p>
          </div>
        </Card>
      </div>

      {/* ── 11. Search Activities ────────────────────────────────────────── */}
      {searchActivities.length > 0 && (
        <Card delay={0.34}>
          <SectionHeader
            icon={Search}
            title="Search Queries"
            color="text-slate-500"
            badge={searchActivities.length}
          />
          <div className="flex flex-wrap gap-2">
            {searchActivities.map((a, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium border border-slate-200"
              >
                <Search className="w-3 h-3 text-slate-400" />
                {a.action?.value || a.action?.element || "Search"}
              </span>
            ))}
          </div>
        </Card>
      )}

      {/* ── 12. Full Activity Timeline ─────────────────────────────────── */}
      <Card delay={0.36} className="overflow-hidden">
        <div className="flex items-center gap-2 mb-4 flex-wrap">
          <Calendar className="w-5 h-5 text-violet-500" />
          <h3 className="font-semibold text-slate-700">
            Full Activity Timeline
          </h3>
          <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full font-semibold ml-1">
            {stats.totalActivities} total
          </span>
          {/* Tab filters */}
          <div className="ml-auto flex gap-1 flex-wrap">
            {[
              "all",
              "login",
              "page_view",
              "button_click",
              "contact_submit",
              "scroll",
            ].map((t) => (
              <button
                key={t}
                onClick={() => setTypeFilter(t)}
                className={`px-3 py-1 text-xs rounded-lg font-medium transition-all ${typeFilter === t ? "bg-violet-500 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
              >
                {t === "all" ? "All" : t.replace(/_/g, " ")}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline items */}
        <div className="space-y-1 max-h-[600px] overflow-y-auto pr-1">
          {filteredTimeline.length === 0 ? (
            <EmptyState text="No activities in this filter/range" />
          ) : (
            filteredTimeline.map((act, i) => {
              const cfg = typeConfig[act.activityType] || {
                color: "bg-slate-100 text-slate-600 border-slate-200",
                icon: Activity,
              };
              const Icon = cfg.icon;
              return (
                <div
                  key={act._id || i}
                  className="flex items-start gap-3 py-2.5 px-3 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100"
                >
                  <div
                    className={`w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center border ${cfg.color}`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex-1 min-w-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-0.5">
                    {/* Col 1: type + time */}
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-slate-700 capitalize">
                          {act.activityType?.replace(/_/g, " ")}
                        </span>
                      </div>
                      <span className="text-xs text-slate-400">
                        {fmtDate(act.timestamp)}
                      </span>
                    </div>
                    {/* Col 2: page */}
                    <div>
                      {act.page?.title && (
                        <p className="text-xs font-medium text-slate-600 truncate">
                          {typeof act.page.title === "string"
                            ? act.page.title
                            : ""}
                        </p>
                      )}
                      {act.page?.path && (
                        <p className="text-xs text-violet-500 truncate flex items-center gap-1">
                          <Link2 className="w-2.5 h-2.5 flex-shrink-0" />
                          {act.page.path}
                        </p>
                      )}
                      {act.page?.referrer && (
                        <p className="text-xs text-slate-400 truncate">
                          Ref: {act.page.referrer}
                        </p>
                      )}
                    </div>
                    {/* Col 3: action / scroll / course */}
                    <div>
                      {(act.action?.element || act.action?.value) && (
                        <p className="text-xs text-slate-600 truncate">
                          <span className="text-slate-400">Action: </span>
                          {act.action.element || act.action.value}
                        </p>
                      )}
                      {act.scroll?.depth != null && (
                        <p className="text-xs text-slate-500">
                          Scroll {act.scroll.depth}% (max {act.scroll.maxDepth}
                          %)
                        </p>
                      )}
                      {act.course?.courseName && (
                        <p className="text-xs text-sky-600 truncate">
                          {act.course.courseName}
                        </p>
                      )}
                    </div>
                    {/* Col 4: duration + session */}
                    <div>
                      {act.duration != null && (
                        <p className="text-xs text-slate-500">
                          <span className="text-slate-400">Duration: </span>
                          {fmtMs(act.duration)}
                        </p>
                      )}
                      {act.sessionId && (
                        <p className="text-xs font-mono text-slate-400 truncate">
                          <span className="text-slate-400 not-italic">
                            SID:{" "}
                          </span>
                          {act.sessionId.slice(0, 20)}…
                        </p>
                      )}
                      {act.location?.ip && (
                        <p className="text-xs text-slate-400">
                          IP: {act.location.ip}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-between items-center mt-4 pt-4 border-t border-slate-100">
            <span className="text-xs text-slate-500">
              Page {page} / {totalPages} · {stats.totalActivities} total events
            </span>
            <div className="flex gap-1">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="px-3 py-1.5 text-xs border border-slate-200 rounded-lg hover:bg-slate-50 disabled:opacity-40"
              >
                ‹ Prev
              </button>
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                const pg = page <= 3 ? i + 1 : page + i - 2;
                if (pg < 1 || pg > totalPages) return null;
                return (
                  <button
                    key={pg}
                    onClick={() => setPage(pg)}
                    className={`px-3 py-1.5 text-xs rounded-lg font-medium ${pg === page ? "bg-violet-500 text-white" : "border border-slate-200 hover:bg-slate-50"}`}
                  >
                    {pg}
                  </button>
                );
              })}
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="px-3 py-1.5 text-xs bg-violet-500 text-white rounded-lg hover:bg-violet-600 disabled:opacity-40"
              >
                Next ›
              </button>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};

export default BackendUserActivityDetail;
