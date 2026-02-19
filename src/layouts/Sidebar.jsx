import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { logout, setSelectedCenter } from "../store/slices/authSlice";
import toast from "react-hot-toast";
import {
  LayoutDashboard,
  Users,
  Building2,
  GraduationCap,
  BookOpen,
  DollarSign,
  BarChart3,
  Settings,
  LogOut,
  ChevronDown,
  ChevronRight,
  Crown,
  Shield,
  Award,
  Calendar,
  FileText,
  MessageSquare,
  Bell,
  Clock,
  Target,
  TrendingUp,
  Briefcase,
  Package,
  Video,
  ClipboardList,
  UserCheck,
  BookMarked,
  PieChart,
  Activity,
  MapPin,
  Globe,
  Zap,
  Heart,
  Star,
  CheckCircle,
  AlertCircle,
  Search,
  Plus,
  Sparkles,
  Layers,
  Database,
  Wifi,
  WifiOff,
} from "lucide-react";

const Sidebar = ({ isOpen, isMobile, onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { user, selectedCenter } = useSelector((state) => state.auth);
  const [expandedSections, setExpandedSections] = useState(["main"]);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [onlineStatus, setOnlineStatus] = useState(true);
  const [notifications, setNotifications] = useState(3);
  const [isHovered, setIsHovered] = useState(false);

  // Simulate online status
  useEffect(() => {
    const interval = setInterval(() => {
      setOnlineStatus(navigator.onLine);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Super Admin Menu Items
  const superAdminMenu = [
    {
      section: "main",
      title: "Main Menu",
      icon: LayoutDashboard,
      items: [
        {
          path: "/",
          label: "Dashboard",
          icon: LayoutDashboard,
          badge: null,
          gradient: "from-purple-500 to-pink-500",
        },
        {
          path: "/analytics",
          label: "Analytics",
          icon: BarChart3,
          badge: "New",
          gradient: "from-blue-500 to-cyan-500",
        },
        {
          path: "/overview",
          label: "Overview",
          icon: PieChart,
          badge: null,
          gradient: "from-green-500 to-emerald-500",
        },
      ],
    },
    {
      section: "centers",
      title: "Centers Management",
      icon: Building2,
      items: [
        {
          path: "/centers",
          label: "All Centers",
          icon: Globe,
          badge: "4",
          gradient: "from-indigo-500 to-purple-500",
        },
        {
          path: "/centers/performance",
          label: "Performance",
          icon: TrendingUp,
          badge: null,
          gradient: "from-orange-500 to-red-500",
        },
        {
          path: "/centers/comparison",
          label: "Comparison",
          icon: Activity,
          badge: null,
          gradient: "from-pink-500 to-rose-500",
        },
      ],
    },
    {
      section: "management",
      title: "Management",
      icon: Users,
      items: [
        {
          path: "/students",
          label: "Students",
          icon: GraduationCap,
          badge: "3,527",
          gradient: "from-blue-500 to-indigo-500",
        },
        {
          path: "/users-management",
          label: "Users",
          icon: Users,
          badge: null,
          gradient: "from-indigo-500 to-blue-500",
        },
        {
          path: "/user-activity",
          label: "User Activity",
          icon: Activity,
          badge: "Live",
          gradient: "from-violet-500 to-purple-500",
        },
        {
          path: "/contacts",
          label: "Contacts",
          icon: MessageSquare,
          badge: "New",
          gradient: "from-teal-500 to-cyan-500",
        },
        {
          path: "/staff",
          label: "Staff",
          icon: Briefcase,
          badge: "68",
          gradient: "from-purple-500 to-indigo-500",
        },
        {
          path: "/courses",
          label: "Courses",
          icon: BookOpen,
          badge: "16",
          gradient: "from-green-500 to-teal-500",
        },
        {
          path: "/batches",
          label: "Batches",
          icon: Layers,
          badge: "24",
          gradient: "from-yellow-500 to-orange-500",
        },
      ],
    },
    {
      section: "financial",
      title: "Financial",
      icon: DollarSign,
      items: [
        {
          path: "/revenue",
          label: "Revenue",
          icon: DollarSign,
          badge: "₹2.48L",
          gradient: "from-green-500 to-emerald-500",
        },
        {
          path: "/expenses",
          label: "Expenses",
          icon: FileText,
          badge: null,
          gradient: "from-red-500 to-orange-500",
        },
        {
          path: "/reports",
          label: "Reports",
          icon: BarChart3,
          badge: null,
          gradient: "from-blue-500 to-purple-500",
        },
      ],
    },
    {
      section: "backend",
      title: "Backend Integrated",
      icon: Database,
      items: [
        {
          path: "/backend/users",
          label: "Users Management",
          icon: Users,
          badge: "Live",
          gradient: "from-blue-500 to-indigo-500",
        },
        {
          path: "/backend/user-activity",
          label: "User Activity",
          icon: Activity,
          badge: "Live",
          gradient: "from-purple-500 to-pink-500",
        },
        {
          path: "/backend/contacts",
          label: "Contacts",
          icon: MessageSquare,
          badge: "Live",
          gradient: "from-teal-500 to-cyan-500",
        },
      ],
    },
    {
      section: "system",
      title: "System",
      icon: Settings,
      items: [
        {
          path: "/settings",
          label: "Settings",
          icon: Settings,
          badge: null,
          gradient: "from-slate-500 to-gray-500",
        },
        {
          path: "/database",
          label: "Database",
          icon: Database,
          badge: null,
          gradient: "from-cyan-500 to-blue-500",
        },
        {
          path: "/logs",
          label: "Activity Logs",
          icon: ClipboardList,
          badge: null,
          gradient: "from-orange-500 to-amber-500",
        },
      ],
    },
  ];

  // Center Admin Menu Items
  const centerAdminMenu = [
    {
      section: "main",
      title: "Main Menu",
      icon: LayoutDashboard,
      items: [
        {
          path: "/",
          label: "Dashboard",
          icon: LayoutDashboard,
          badge: null,
          gradient: "from-blue-500 to-cyan-500",
        },
        {
          path: "/analytics",
          label: "Analytics",
          icon: BarChart3,
          badge: null,
          gradient: "from-purple-500 to-pink-500",
        },
      ],
    },
    {
      section: "operations",
      title: "Operations",
      icon: Activity,
      items: [
        {
          path: "/students",
          label: "Student Management",
          icon: Users,
          badge: "450",
          gradient: "from-blue-500 to-indigo-500",
        },
        {
          path: "/contacts",
          label: "Contacts",
          icon: MessageSquare,
          badge: "New",
          gradient: "from-teal-500 to-cyan-500",
        },
        {
          path: "/batches",
          label: "Batch Management",
          icon: Layers,
          badge: "8",
          gradient: "from-green-500 to-emerald-500",
        },
        {
          path: "/attendance",
          label: "Attendance",
          icon: UserCheck,
          badge: "Today",
          gradient: "from-orange-500 to-red-500",
        },
        {
          path: "/schedule",
          label: "Schedule",
          icon: Calendar,
          badge: null,
          gradient: "from-purple-500 to-indigo-500",
        },
      ],
    },
    {
      section: "resources",
      title: "Resources",
      icon: Package,
      items: [
        {
          path: "/staff",
          label: "Staff Schedule",
          icon: Briefcase,
          badge: "12",
          gradient: "from-cyan-500 to-blue-500",
        },
        {
          path: "/classrooms",
          label: "Classrooms",
          icon: Building2,
          badge: "5",
          gradient: "from-pink-500 to-rose-500",
        },
        {
          path: "/inventory",
          label: "Inventory",
          icon: Package,
          badge: "3",
          gradient: "from-yellow-500 to-orange-500",
        },
        {
          path: "/materials",
          label: "Materials",
          icon: BookMarked,
          badge: null,
          gradient: "from-green-500 to-teal-500",
        },
      ],
    },
    {
      section: "reports",
      title: "Reports & Finance",
      icon: FileText,
      items: [
        {
          path: "/performance",
          label: "Performance",
          icon: TrendingUp,
          badge: null,
          gradient: "from-green-500 to-emerald-500",
        },
        {
          path: "/revenue",
          label: "Revenue",
          icon: DollarSign,
          badge: "₹45K",
          gradient: "from-blue-500 to-cyan-500",
        },
        {
          path: "/reports",
          label: "Reports",
          icon: FileText,
          badge: null,
          gradient: "from-purple-500 to-pink-500",
        },
      ],
    },
    {
      section: "backend",
      title: "Backend Integrated",
      icon: Database,
      items: [
        {
          path: "/backend/users",
          label: "Users Management",
          icon: Users,
          badge: "Live",
          gradient: "from-blue-500 to-indigo-500",
        },
        {
          path: "/backend/user-activity",
          label: "User Activity",
          icon: Activity,
          badge: "Live",
          gradient: "from-purple-500 to-pink-500",
        },
        {
          path: "/backend/contacts",
          label: "Contacts",
          icon: MessageSquare,
          badge: "Live",
          gradient: "from-teal-500 to-cyan-500",
        },
      ],
    },
    {
      section: "communication",
      title: "Communication",
      icon: MessageSquare,
      items: [
        {
          path: "/queries",
          label: "Student Queries",
          icon: MessageSquare,
          badge: "12",
          gradient: "from-orange-500 to-red-500",
        },
        {
          path: "/announcements",
          label: "Announcements",
          icon: Bell,
          badge: null,
          gradient: "from-indigo-500 to-purple-500",
        },
      ],
    },
  ];

  // Staff Menu Items
  const staffMenu = [
    {
      section: "main",
      title: "Main Menu",
      icon: LayoutDashboard,
      items: [
        {
          path: "/",
          label: "My Dashboard",
          icon: LayoutDashboard,
          badge: null,
          gradient: "from-orange-500 to-red-500",
        },
        {
          path: "/profile",
          label: "My Profile",
          icon: Users,
          badge: null,
          gradient: "from-purple-500 to-pink-500",
        },
      ],
    },
    {
      section: "teaching",
      title: "Teaching",
      icon: GraduationCap,
      items: [
        {
          path: "/classes",
          label: "My Classes",
          icon: Video,
          badge: "3 Today",
          gradient: "from-blue-500 to-cyan-500",
        },
        {
          path: "/students",
          label: "My Students",
          icon: Users,
          badge: "156",
          gradient: "from-green-500 to-emerald-500",
        },
        {
          path: "/schedule",
          label: "Schedule",
          icon: Calendar,
          badge: null,
          gradient: "from-purple-500 to-indigo-500",
        },
        {
          path: "/attendance",
          label: "Attendance",
          icon: CheckCircle,
          badge: "100%",
          gradient: "from-green-500 to-teal-500",
        },
      ],
    },
    {
      section: "academics",
      title: "Academics",
      icon: BookOpen,
      items: [
        {
          path: "/materials",
          label: "Materials",
          icon: BookMarked,
          badge: "24",
          gradient: "from-orange-500 to-amber-500",
        },
        {
          path: "/tests",
          label: "Tests & Grading",
          icon: ClipboardList,
          badge: "5",
          gradient: "from-red-500 to-pink-500",
        },
        {
          path: "/assignments",
          label: "Assignments",
          icon: FileText,
          badge: "8",
          gradient: "from-blue-500 to-indigo-500",
        },
      ],
    },
    {
      section: "performance",
      title: "Performance",
      icon: TrendingUp,
      items: [
        {
          path: "/rating",
          label: "My Rating",
          icon: Star,
          badge: "4.9/5",
          gradient: "from-yellow-500 to-orange-500",
        },
        {
          path: "/success",
          label: "Success Rate",
          icon: Target,
          badge: "82%",
          gradient: "from-green-500 to-emerald-500",
        },
        {
          path: "/analytics",
          label: "Analytics",
          icon: BarChart3,
          badge: null,
          gradient: "from-purple-500 to-pink-500",
        },
      ],
    },
    {
      section: "backend",
      title: "Backend Integrated",
      icon: Database,
      items: [
        {
          path: "/backend/users",
          label: "Users Management",
          icon: Users,
          badge: "Live",
          gradient: "from-blue-500 to-indigo-500",
        },
        {
          path: "/backend/user-activity",
          label: "User Activity",
          icon: Activity,
          badge: "Live",
          gradient: "from-purple-500 to-pink-500",
        },
        {
          path: "/backend/contacts",
          label: "Contacts",
          icon: MessageSquare,
          badge: "Live",
          gradient: "from-teal-500 to-cyan-500",
        },
      ],
    },
    {
      section: "support",
      title: "Support",
      icon: MessageSquare,
      items: [
        {
          path: "/queries",
          label: "Student Queries",
          icon: MessageSquare,
          badge: "7",
          gradient: "from-cyan-500 to-blue-500",
        },
        {
          path: "/tasks",
          label: "My Tasks",
          icon: CheckCircle,
          badge: "3",
          gradient: "from-orange-500 to-red-500",
        },
      ],
    },
    {
      section: "personal",
      title: "Personal",
      icon: Heart,
      items: [
        {
          path: "/salary",
          label: "Salary Info",
          icon: DollarSign,
          badge: null,
          gradient: "from-green-500 to-teal-500",
        },
        {
          path: "/leave",
          label: "Leave Balance",
          icon: Calendar,
          badge: "15 days",
          gradient: "from-blue-500 to-cyan-500",
        },
      ],
    },
  ];

  // Get menu based on role
  const getMenu = () => {
    switch (user?.role) {
      case "superadmin":
        return superAdminMenu;
      case "centeradmin":
        return centerAdminMenu;
      case "staff":
        return staffMenu;
      default:
        return [];
    }
  };

  const menu = getMenu();

  const toggleSection = (section) => {
    setExpandedSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section],
    );
  };

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logged out successfully");
    navigate("/login");
  };

  const handleCenterChange = (center) => {
    dispatch(setSelectedCenter(center));
    toast.success(`Switched to ${center}`);
  };

  // Filter menu items based on search
  const filteredMenu = searchQuery
    ? menu
        .map((section) => ({
          ...section,
          items: section.items.filter((item) =>
            item.label.toLowerCase().includes(searchQuery.toLowerCase()),
          ),
        }))
        .filter((section) => section.items.length > 0)
    : menu;

  // Handle menu item click
  const handleMenuClick = () => {
    if (isMobile) {
      onClose();
    }
  };

  // Desktop: Always show collapsed, expand on hover
  // Mobile: Show full sidebar only when isOpen is true
  const shouldExpand = isMobile ? isOpen : isHovered;
  const shouldShow = isMobile ? isOpen : true; // Always show on desktop

  // Auto-collapse/expand based on hover for desktop
  useEffect(() => {
    if (!isMobile) {
      setIsCollapsed(!isHovered);
    } else {
      setIsCollapsed(false); // Always expanded on mobile when open
    }
  }, [isHovered, isMobile]);

  return (
    <>
      {/* Overlay for mobile */}
      {isMobile && isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 z-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />
      )}

      <motion.aside
        className={`fixed left-0 top-0 h-full bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-900 border-r border-white/10 backdrop-blur-xl transition-all duration-300 z-40 ${
          shouldExpand ? "w-72" : "w-20"
        }`}
        initial={{ x: isMobile ? -300 : 0 }}
        animate={{
          x: shouldShow ? 0 : -300,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        onMouseEnter={() => !isMobile && setIsHovered(true)}
        onMouseLeave={() => !isMobile && setIsHovered(false)}
      >
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
            animate={{
              y: [0, 100, 0],
              x: [0, 50, 0],
            }}
            transition={{ duration: 20, repeat: Infinity }}
            style={{ top: "10%", left: "-20%" }}
          />
          <motion.div
            className="absolute w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
            animate={{
              y: [0, -100, 0],
              x: [0, -50, 0],
            }}
            transition={{ duration: 25, repeat: Infinity }}
            style={{ bottom: "10%", right: "-20%" }}
          />
        </div>

        <div className="relative h-full flex flex-col">
          {/* Header */}
          <div className="p-4 border-b border-white/10">
            <div className="flex items-center justify-between mb-4">
              {!isCollapsed && (
                <motion.div
                  className="flex items-center gap-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur-lg opacity-50" />
                    <div className="relative bg-white rounded-lg p-2 shadow-xl">
                      <img
                        src="/SriramIAS.png"
                        alt="Logo"
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">Sriram's</div>
                    <div className="text-slate-400 text-xs">Admin Panel</div>
                  </div>
                </motion.div>
              )}
              <motion.button
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  animate={{ rotate: isCollapsed ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronRight className="w-5 h-5 text-slate-400" />
                </motion.div>
              </motion.button>
            </div>

            {/* User Profile */}
            {!isCollapsed && (
              <motion.div
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-3"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="relative">
                    <div
                      className={`w-10 h-10 rounded-full bg-gradient-to-br ${
                        user?.role === "superadmin"
                          ? "from-purple-500 to-pink-500"
                          : user?.role === "centeradmin"
                            ? "from-blue-500 to-cyan-500"
                            : "from-orange-500 to-red-500"
                      } flex items-center justify-center text-white font-bold shadow-lg`}
                    >
                      {user?.avatar || "U"}
                    </div>
                    <motion.div
                      className={`absolute -bottom-1 -right-1 w-4 h-4 ${
                        onlineStatus ? "bg-green-400" : "bg-red-400"
                      } rounded-full border-2 border-slate-900`}
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-white font-semibold text-sm truncate">
                      {user?.name}
                    </div>
                    <div className="flex items-center gap-1 text-xs">
                      {user?.role === "superadmin" && (
                        <Crown className="w-3 h-3 text-yellow-400" />
                      )}
                      {user?.role === "centeradmin" && (
                        <Building2 className="w-3 h-3 text-blue-400" />
                      )}
                      {user?.role === "staff" && (
                        <GraduationCap className="w-3 h-3 text-orange-400" />
                      )}
                      <span className="text-slate-400 truncate">
                        {user?.role === "superadmin"
                          ? "Super Admin"
                          : user?.role === "centeradmin"
                            ? "Center Admin"
                            : user?.role === "staff"
                              ? "Staff"
                              : user?.role}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Center Selector for Center Admin */}
                {user?.role === "centeradmin" && user?.centerName && (
                  <div className="mt-2 pt-2 border-t border-white/10">
                    <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
                      <MapPin className="w-3 h-3" />
                      <span>Current Center</span>
                    </div>
                    <div className="text-white text-sm font-medium">
                      {user?.centerName || selectedCenter}
                    </div>
                  </div>
                )}

                {/* Stats for Super Admin */}
                {user?.role === "superadmin" && (
                  <div className="mt-2 pt-2 border-t border-white/10 grid grid-cols-3 gap-2">
                    <div className="text-center">
                      <div className="text-white font-bold text-sm">4</div>
                      <div className="text-slate-400 text-xs">Centers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-white font-bold text-sm">3.5K</div>
                      <div className="text-slate-400 text-xs">Students</div>
                    </div>
                    <div className="text-center">
                      <div className="text-white font-bold text-sm">68</div>
                      <div className="text-slate-400 text-xs">Staff</div>
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {/* Collapsed User Avatar */}
            {isCollapsed && (
              <motion.div
                className="flex justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="relative">
                  <div
                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${
                      user?.role === "superadmin"
                        ? "from-purple-500 to-pink-500"
                        : user?.role === "centeradmin"
                          ? "from-blue-500 to-cyan-500"
                          : "from-orange-500 to-red-500"
                    } flex items-center justify-center text-white font-bold shadow-lg`}
                  >
                    {user?.avatar || "U"}
                  </div>
                  <div
                    className={`absolute -bottom-1 -right-1 w-3 h-3 ${
                      onlineStatus ? "bg-green-400" : "bg-red-400"
                    } rounded-full border-2 border-slate-900`}
                  />
                </div>
              </motion.div>
            )}
          </div>

          {/* Search Bar */}
          {!isCollapsed && (
            <div className="p-4">
              <div className="relative group">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-purple-400 transition-colors" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search menu..."
                  className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-400/50 focus:bg-white/10 transition-all"
                />
                {searchQuery && (
                  <motion.button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                  >
                    ×
                  </motion.button>
                )}
              </div>
            </div>
          )}

          {/* Menu Items */}
          <div className="flex-1 overflow-y-auto custom-scrollbar px-3 py-2">
            <AnimatePresence>
              {filteredMenu.map((section, sectionIndex) => {
                const SectionIcon = section.icon;
                const isExpanded = expandedSections.includes(section.section);

                return (
                  <motion.div
                    key={section.section}
                    className="mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: sectionIndex * 0.1 }}
                  >
                    {/* Section Header */}
                    {!isCollapsed && (
                      <motion.button
                        onClick={() => toggleSection(section.section)}
                        className="w-full flex items-center justify-between px-3 py-2 text-slate-400 hover:text-white transition-colors group"
                        whileHover={{ x: 5 }}
                      >
                        <div className="flex items-center gap-2">
                          <SectionIcon className="w-4 h-4" />
                          <span className="text-xs font-semibold uppercase tracking-wider">
                            {section.title}
                          </span>
                        </div>
                        <motion.div
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </motion.div>
                      </motion.button>
                    )}

                    {/* Section Items */}
                    <AnimatePresence>
                      {(isExpanded || isCollapsed) && (
                        <motion.div
                          className="space-y-1 mt-1"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {section.items.map((item, itemIndex) => {
                            const Icon = item.icon;
                            const isActive = location.pathname === item.path;

                            return (
                              <motion.div
                                key={item.path}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: itemIndex * 0.05 }}
                              >
                                <Link to={item.path} onClick={handleMenuClick}>
                                  <motion.div
                                    className="relative group"
                                    whileHover={{ x: 5 }}
                                    whileTap={{ scale: 0.95 }}
                                  >
                                    {isActive && (
                                      <motion.div
                                        className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-lg opacity-20 blur-sm`}
                                        layoutId="activeTab"
                                        transition={{
                                          type: "spring",
                                          stiffness: 300,
                                          damping: 30,
                                        }}
                                      />
                                    )}
                                    <div
                                      className={`relative flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
                                        isActive
                                          ? "bg-white/10 text-white"
                                          : "text-slate-400 hover:bg-white/5 hover:text-white"
                                      } ${isCollapsed ? "justify-center" : ""}`}
                                    >
                                      <div
                                        className={`${isActive ? `bg-gradient-to-r ${item.gradient}` : ""} p-0.5 rounded-lg`}
                                      >
                                        <Icon
                                          className={`w-5 h-5 ${
                                            isActive ? "text-white" : ""
                                          }`}
                                        />
                                      </div>
                                      {!isCollapsed && (
                                        <>
                                          <span className="flex-1 font-medium text-sm">
                                            {item.label}
                                          </span>
                                          {item.badge && (
                                            <motion.div
                                              className={`px-2 py-0.5 text-xs font-semibold rounded-full ${
                                                item.badge === "New"
                                                  ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white"
                                                  : `bg-gradient-to-r ${item.gradient} bg-opacity-20 text-white`
                                              }`}
                                              initial={{ scale: 0 }}
                                              animate={{ scale: 1 }}
                                              whileHover={{ scale: 1.1 }}
                                            >
                                              {item.badge}
                                            </motion.div>
                                          )}
                                        </>
                                      )}
                                    </div>
                                  </motion.div>
                                </Link>
                              </motion.div>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Footer Actions */}
          <div className="p-4 border-t border-white/10 space-y-2">
            {/* Quick Actions */}
            {!isCollapsed && (
              <motion.div
                className="grid grid-cols-2 gap-2 mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <motion.button
                  className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg px-3 py-2 text-slate-300 hover:text-white transition-all text-xs"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Bell className="w-4 h-4" />
                  {notifications > 0 && (
                    <span className="bg-red-500 text-white text-xs px-1.5 rounded-full">
                      {notifications}
                    </span>
                  )}
                </motion.button>
                <motion.button
                  className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg px-3 py-2 text-slate-300 hover:text-white transition-all text-xs"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {onlineStatus ? (
                    <Wifi className="w-4 h-4" />
                  ) : (
                    <WifiOff className="w-4 h-4" />
                  )}
                </motion.button>
              </motion.div>
            )}

            {/* Logout Button */}
            <motion.button
              onClick={handleLogout}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 rounded-lg px-4 py-3 text-white font-semibold shadow-lg transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <LogOut className="w-5 h-5" />
              {!isCollapsed && <span>Logout</span>}
            </motion.button>

            {/* Status Bar */}
            {!isCollapsed && (
              <motion.div
                className="text-center text-xs text-slate-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="flex items-center justify-center gap-2">
                  <motion.div
                    className="w-2 h-2 bg-green-400 rounded-full"
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span>System Online</span>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </motion.aside>
    </>
  );
};

export default Sidebar;
