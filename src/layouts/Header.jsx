import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, setSelectedCenter } from "../store/slices/authSlice";
import { setTheme } from "../store/slices/themeSlice";
import toast from "react-hot-toast";
import {
  Menu,
  Moon,
  Sun,
  LogOut,
  Bell,
  Search,
  ChevronDown,
  Settings,
  User,
  Crown,
  Building2,
  GraduationCap,
  MapPin,
  TrendingUp,
  Users,
  DollarSign,
  Award,
  Activity,
  CheckCircle,
  Clock,
  Calendar,
  MessageSquare,
  Star,
  Zap,
  Target,
  Sparkles,
  Globe,
  ChevronRight,
  Home,
  BarChart3,
  Briefcase,
  BookOpen,
  Plus,
  Filter,
  Download,
  Upload,
  Share2,
  MoreVertical,
  RefreshCw,
  Maximize2,
  Wifi,
  WifiOff,
} from "lucide-react";

const Header = ({ onMenuClick }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { user, selectedCenter } = useSelector((state) => state.auth);
  const theme = useSelector((state) => state.theme.mode);

  const [showCenterDropdown, setShowCenterDropdown] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [onlineStatus, setOnlineStatus] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());

  const centerDropdownRef = useRef(null);
  const notificationsRef = useRef(null);
  const userMenuRef = useRef(null);

  // Centers data for Super Admin
  const centers = [
    {
      name: "All Centers",
      location: "Overview",
      icon: Globe,
      stats: { students: 3527, staff: 68, revenue: "₹2.48L" },
      color: "from-purple-500 to-pink-500",
      status: "active",
    },
    {
      name: "Delhi Center",
      location: "Connaught Place, Delhi",
      icon: Building2,
      stats: { students: 890, staff: 18, revenue: "₹58K" },
      color: "from-blue-500 to-cyan-500",
      status: "active",
    },
    {
      name: "Mumbai Center",
      location: "Andheri West, Mumbai",
      icon: Building2,
      stats: { students: 950, staff: 20, revenue: "₹65K" },
      color: "from-green-500 to-emerald-500",
      status: "active",
    },
    {
      name: "Bangalore Center",
      location: "Koramangala, Bangalore",
      icon: Building2,
      stats: { students: 845, staff: 16, revenue: "₹62K" },
      color: "from-orange-500 to-red-500",
      status: "active",
    },
    {
      name: "Chennai Center",
      location: "T. Nagar, Chennai",
      icon: Building2,
      stats: { students: 842, staff: 14, revenue: "₹63K" },
      color: "from-indigo-500 to-purple-500",
      status: "active",
    },
  ];

  // Notifications data
  const notifications = [
    {
      id: 1,
      type: "success",
      icon: CheckCircle,
      title: "New Student Enrolled",
      message: "Rahul Kumar joined Batch B4",
      time: "2 minutes ago",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      unread: true,
    },
    {
      id: 2,
      type: "warning",
      icon: Clock,
      title: "Class Starting Soon",
      message: "Advanced Physics starts in 15 mins",
      time: "12 minutes ago",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      unread: true,
    },
    {
      id: 3,
      type: "info",
      icon: MessageSquare,
      title: "New Query Received",
      message: "Student query about exam schedule",
      time: "1 hour ago",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      unread: true,
    },
    {
      id: 4,
      type: "achievement",
      icon: Award,
      title: "Target Achieved",
      message: "Delhi Center reached 90% attendance",
      time: "2 hours ago",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      unread: false,
    },
    {
      id: 5,
      type: "success",
      icon: DollarSign,
      title: "Payment Received",
      message: "₹45,000 received from Batch A3",
      time: "3 hours ago",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      unread: false,
    },
  ];

  const unreadCount = notifications.filter((n) => n.unread).length;

  // Quick actions based on role
  const getQuickActions = () => {
    if (user?.role === "Super Admin") {
      return [
        {
          icon: Plus,
          label: "Add Center",
          action: () => toast.success("Add Center clicked"),
        },
        {
          icon: Users,
          label: "Add Staff",
          action: () => toast.success("Add Staff clicked"),
        },
        {
          icon: Download,
          label: "Reports",
          action: () => toast.success("Download Reports"),
        },
        {
          icon: Settings,
          label: "Settings",
          action: () => navigate("/settings"),
        },
      ];
    } else if (user?.role === "Center Admin") {
      return [
        {
          icon: Plus,
          label: "Add Student",
          action: () => toast.success("Add Student clicked"),
        },
        {
          icon: Calendar,
          label: "Schedule",
          action: () => navigate("/schedule"),
        },
        {
          icon: Download,
          label: "Reports",
          action: () => toast.success("Download Reports"),
        },
      ];
    } else {
      return [
        {
          icon: Calendar,
          label: "My Schedule",
          action: () => navigate("/schedule"),
        },
        {
          icon: BookOpen,
          label: "Materials",
          action: () => navigate("/materials"),
        },
        {
          icon: MessageSquare,
          label: "Queries",
          action: () => navigate("/queries"),
        },
      ];
    }
  };

  const quickActions = getQuickActions();

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  // Check online status
  useEffect(() => {
    const handleOnline = () => setOnlineStatus(true);
    const handleOffline = () => setOnlineStatus(false);
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        centerDropdownRef.current &&
        !centerDropdownRef.current.contains(event.target)
      ) {
        setShowCenterDropdown(false);
      }
      if (
        notificationsRef.current &&
        !notificationsRef.current.contains(event.target)
      ) {
        setShowNotifications(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setShowUserMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logged out successfully");
    navigate("/login");
  };

  const handleCenterChange = (center) => {
    dispatch(setSelectedCenter(center.name));
    setShowCenterDropdown(false);
    toast.success(`Switched to ${center.name}`);
  };

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    dispatch(setTheme(newTheme));
    toast.success(
      `${newTheme === "dark" ? "🌙" : "☀️"} ${newTheme.charAt(0).toUpperCase() + newTheme.slice(1)} mode activated`,
    );
  };

  // Get page title from path
  const getPageTitle = () => {
    const path = location.pathname;
    if (path === "/") return "Dashboard";
    const parts = path.split("/").filter(Boolean);
    return parts[parts.length - 1]
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const pageTitle = getPageTitle();

  // Get breadcrumbs
  const getBreadcrumbs = () => {
    const path = location.pathname;
    if (path === "/") return [{ label: "Dashboard", path: "/" }];

    const parts = path.split("/").filter(Boolean);
    const breadcrumbs = [{ label: "Dashboard", path: "/" }];

    let currentPath = "";
    parts.forEach((part) => {
      currentPath += `/${part}`;
      breadcrumbs.push({
        label: part
          .split("-")
          .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
          .join(" "),
        path: currentPath,
      });
    });

    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs();

  return (
    <motion.header
      className="sticky top-0 z-30 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-700/50 shadow-lg"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      {/* Main Header */}
      <div className="flex items-center justify-between h-16 px-4 lg:px-6">
        {/* Left Side */}
        <div className="flex items-center gap-4 flex-1">
          {/* Mobile Menu Button */}
          <motion.button
            onClick={onMenuClick}
            className="lg:hidden p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Menu className="w-6 h-6 text-slate-600 dark:text-slate-300" />
          </motion.button>

          {/* Breadcrumbs - Desktop */}
          <div className="hidden lg:flex items-center gap-2">
            {breadcrumbs.map((crumb, index) => (
              <div key={crumb.path} className="flex items-center gap-2">
                {index > 0 && (
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                )}
                <button
                  onClick={() => navigate(crumb.path)}
                  className={`text-sm font-medium transition-colors ${
                    index === breadcrumbs.length - 1
                      ? "text-purple-600 dark:text-purple-400"
                      : "text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400"
                  }`}
                >
                  {index === 0 && <Home className="w-4 h-4 inline mr-1" />}
                  {crumb.label}
                </button>
              </div>
            ))}
          </div>

          {/* Page Title - Mobile */}
          <div className="lg:hidden">
            <h1 className="text-lg font-bold text-slate-800 dark:text-white">
              {pageTitle}
            </h1>
          </div>
        </div>

        {/* Center Section - Quick Actions */}
        <div className="hidden xl:flex items-center gap-2 mx-4">
          {quickActions.slice(0, 3).map((action, index) => {
            const Icon = action.icon;
            return (
              <motion.button
                key={index}
                onClick={action.action}
                className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 hover:from-purple-500/20 hover:to-pink-500/20 rounded-lg transition-all text-sm font-medium text-slate-700 dark:text-slate-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-4 h-4" />
                <span className="hidden 2xl:inline">{action.label}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2 lg:gap-3">
          {/* Search Button */}
          <motion.button
            onClick={() => setShowSearch(!showSearch)}
            className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Search className="w-5 h-5 text-slate-600 dark:text-slate-300" />
            <div className="absolute -bottom-8 right-0 bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Search (Ctrl+K)
            </div>
          </motion.button>

          {/* Center Selector - Super Admin Only */}
          {user?.role === "Super Admin" && (
            <div className="relative" ref={centerDropdownRef}>
              <motion.button
                onClick={() => setShowCenterDropdown(!showCenterDropdown)}
                className="hidden md:flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 hover:from-purple-500/20 hover:to-pink-500/20 rounded-lg transition-all border border-purple-200/50 dark:border-purple-700/50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <MapPin className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                  {selectedCenter}
                </span>
                <motion.div
                  animate={{ rotate: showCenterDropdown ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-4 h-4 text-slate-500" />
                </motion.div>
              </motion.button>

              {/* Centers Dropdown */}
              <AnimatePresence>
                {showCenterDropdown && (
                  <motion.div
                    className="absolute right-0 mt-2 w-80 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden"
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Dropdown Header */}
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4">
                      <div className="flex items-center gap-2 text-white">
                        <Globe className="w-5 h-5" />
                        <div>
                          <div className="font-bold">Select Center</div>
                          <div className="text-xs opacity-90">
                            Switch between centers
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Centers List */}
                    <div className="max-h-96 overflow-y-auto p-2">
                      {centers.map((center, index) => {
                        const Icon = center.icon;
                        const isSelected = selectedCenter === center.name;

                        return (
                          <motion.button
                            key={center.name}
                            onClick={() => handleCenterChange(center)}
                            className={`w-full p-3 rounded-xl mb-2 transition-all ${
                              isSelected
                                ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-2 border-purple-500/50"
                                : "bg-slate-50 dark:bg-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-700 border-2 border-transparent"
                            }`}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ x: 5 }}
                          >
                            <div className="flex items-start gap-3">
                              <div
                                className={`w-10 h-10 rounded-lg bg-gradient-to-br ${center.color} flex items-center justify-center flex-shrink-0`}
                              >
                                <Icon className="w-5 h-5 text-white" />
                              </div>
                              <div className="flex-1 text-left min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                  <span className="font-semibold text-slate-800 dark:text-white truncate">
                                    {center.name}
                                  </span>
                                  {isSelected && (
                                    <CheckCircle className="w-4 h-4 text-purple-500 flex-shrink-0" />
                                  )}
                                </div>
                                <div className="text-xs text-slate-500 dark:text-slate-400 mb-2 truncate">
                                  {center.location}
                                </div>
                                <div className="flex items-center gap-3 text-xs">
                                  <div className="flex items-center gap-1">
                                    <Users className="w-3 h-3 text-blue-500" />
                                    <span className="text-slate-600 dark:text-slate-300">
                                      {center.stats.students}
                                    </span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Briefcase className="w-3 h-3 text-green-500" />
                                    <span className="text-slate-600 dark:text-slate-300">
                                      {center.stats.staff}
                                    </span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <DollarSign className="w-3 h-3 text-purple-500" />
                                    <span className="text-slate-600 dark:text-slate-300">
                                      {center.stats.revenue}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </motion.button>
                        );
                      })}
                    </div>

                    {/* Footer */}
                    <div className="p-3 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700">
                      <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg font-medium transition-all">
                        <Plus className="w-4 h-4" />
                        <span>Add New Center</span>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}

          {/* Notifications */}
          <div className="relative" ref={notificationsRef}>
            <motion.button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Bell className="w-5 h-5 text-slate-600 dark:text-slate-300" />
              {unreadCount > 0 && (
                <motion.div
                  className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xs font-bold"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring" }}
                >
                  {unreadCount}
                </motion.div>
              )}
            </motion.button>

            {/* Notifications Dropdown */}
            <AnimatePresence>
              {showNotifications && (
                <motion.div
                  className="absolute right-0 mt-2 w-96 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden"
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                >
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4">
                    <div className="flex items-center justify-between text-white">
                      <div>
                        <div className="font-bold">Notifications</div>
                        <div className="text-xs opacity-90">
                          {unreadCount} unread
                        </div>
                      </div>
                      <button className="text-xs bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full transition-colors">
                        Mark all read
                      </button>
                    </div>
                  </div>

                  <div className="max-h-96 overflow-y-auto p-2">
                    {notifications.map((notification, index) => {
                      const Icon = notification.icon;
                      return (
                        <motion.div
                          key={notification.id}
                          className={`p-3 rounded-xl mb-2 transition-all cursor-pointer ${
                            notification.unread
                              ? "bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-700"
                              : "bg-slate-50 dark:bg-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-700"
                          }`}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          whileHover={{ x: 5 }}
                        >
                          <div className="flex gap-3">
                            <div
                              className={`w-10 h-10 rounded-lg ${notification.bgColor} flex items-center justify-center flex-shrink-0`}
                            >
                              <Icon
                                className={`w-5 h-5 ${notification.color}`}
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="font-semibold text-slate-800 dark:text-white text-sm mb-1">
                                {notification.title}
                              </div>
                              <div className="text-xs text-slate-600 dark:text-slate-400 mb-1">
                                {notification.message}
                              </div>
                              <div className="text-xs text-slate-500 flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {notification.time}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
            whileHover={{ scale: 1.05, rotate: 180 }}
            whileTap={{ scale: 0.95 }}
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-yellow-500" />
            ) : (
              <Moon className="w-5 h-5 text-slate-600" />
            )}
          </motion.button>

          {/* Divider */}
          <div className="h-8 w-px bg-slate-200 dark:bg-slate-700 mx-1" />

          {/* User Menu */}
          <div className="relative" ref={userMenuRef}>
            <motion.button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center gap-2 p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative">
                <div
                  className={`w-9 h-9 rounded-lg bg-gradient-to-br ${
                    user?.role === "Super Admin"
                      ? "from-purple-500 to-pink-500"
                      : user?.role === "Center Admin"
                        ? "from-blue-500 to-cyan-500"
                        : "from-orange-500 to-red-500"
                  } flex items-center justify-center text-white font-bold text-sm shadow-lg`}
                >
                  {user?.avatar}
                </div>
                <motion.div
                  className={`absolute -bottom-1 -right-1 w-3 h-3 ${
                    onlineStatus ? "bg-green-400" : "bg-red-400"
                  } rounded-full border-2 border-white dark:border-slate-900`}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
              <div className="hidden lg:block text-left">
                <div className="text-sm font-semibold text-slate-800 dark:text-white">
                  {user?.name}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  {user?.role}
                </div>
              </div>
              <ChevronDown className="w-4 h-4 text-slate-500 hidden lg:block" />
            </motion.button>

            {/* User Menu Dropdown */}
            <AnimatePresence>
              {showUserMenu && (
                <motion.div
                  className="absolute right-0 mt-2 w-64 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden"
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                >
                  <div
                    className={`bg-gradient-to-r ${
                      user?.role === "Super Admin"
                        ? "from-purple-500 to-pink-500"
                        : user?.role === "Center Admin"
                          ? "from-blue-500 to-cyan-500"
                          : "from-orange-500 to-red-500"
                    } p-4`}
                  >
                    <div className="flex items-center gap-3 text-white">
                      <div className="w-12 h-12 rounded-lg bg-white/20 backdrop-blur flex items-center justify-center font-bold text-lg">
                        {user?.avatar}
                      </div>
                      <div>
                        <div className="font-bold">{user?.name}</div>
                        <div className="text-xs opacity-90">{user?.role}</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-2">
                    {/* <button
                      onClick={() => navigate("/profile")}
                      className="w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
                    >
                      <User className="w-4 h-4 text-slate-500" />
                      <span className="text-sm text-slate-700 dark:text-slate-300">
                        My Profile
                      </span>
                    </button> */}
                    <button
                      onClick={() => navigate("/settings")}
                      className="w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
                    >
                      <Settings className="w-4 h-4 text-slate-500" />
                      <span className="text-sm text-slate-700 dark:text-slate-300">
                        Settings
                      </span>
                    </button>

                    <div className="my-2 h-px bg-slate-200 dark:bg-slate-700" />

                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors text-red-600 dark:text-red-400"
                    >
                      <LogOut className="w-4 h-4" />
                      <span className="text-sm font-medium">Logout</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Search Overlay */}
      <AnimatePresence>
        {showSearch && (
          <motion.div
            className="absolute inset-x-0 top-16 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-slate-200 dark:border-slate-700 p-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search students, courses, staff..."
                  className="w-full bg-slate-100 dark:bg-slate-800 border-2 border-purple-500/50 rounded-xl pl-12 pr-4 py-3 text-slate-800 dark:text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
                  autoFocus
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
