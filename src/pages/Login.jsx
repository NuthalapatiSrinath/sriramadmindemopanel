import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../store/slices/authSlice";
import toast from "react-hot-toast";
import {
  User,
  Lock,
  Mail,
  ArrowRight,
  Eye,
  EyeOff,
  Shield,
  Zap,
  TrendingUp,
  Users,
  Award,
  BookOpen,
  GraduationCap,
  Building2,
  Globe,
  Star,
  CheckCircle,
  BarChart3,
  Crown,
  Sparkles,
  Target,
  Rocket,
  Lightbulb,
  Trophy,
  Heart,
  MessageSquare,
  Clock,
  Calendar,
  DollarSign,
  FileText,
  Settings,
  Database,
  Activity,
  TrendingDown,
  PieChart,
  Layers,
  Package,
} from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showCredentials, setShowCredentials] = useState(true);
  const [activeFeature, setActiveFeature] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [stats, setStats] = useState({
    students: 3527,
    centers: 4,
    courses: 16,
    successRate: 76,
  });

  // Demo users
  const demoUsers = [
    {
      id: 1,
      name: "Sriram Kumar",
      email: "superadmin@sriram.com",
      password: "super123",
      role: "Super Admin",
      avatar: "SK",
      color: "from-purple-500 to-pink-500",
      icon: Crown,
      description: "Full system access across all centers",
      centers: [
        "All Centers",
        "Delhi Center",
        "Mumbai Center",
        "Bangalore Center",
        "Chennai Center",
      ],
    },
    {
      id: 2,
      name: "Rajesh Sharma",
      email: "delhi@sriram.com",
      password: "delhi123",
      role: "Center Admin",
      center: "Delhi Center",
      avatar: "RS",
      color: "from-blue-500 to-cyan-500",
      icon: Building2,
      description: "Manage Delhi center operations",
      centers: ["Delhi Center"],
    },
    {
      id: 3,
      name: "Priya Patel",
      email: "mumbai@sriram.com",
      password: "mumbai123",
      role: "Center Admin",
      center: "Mumbai Center",
      avatar: "PP",
      color: "from-green-500 to-emerald-500",
      icon: Building2,
      description: "Manage Mumbai center operations",
      centers: ["Mumbai Center"],
    },
    {
      id: 4,
      name: "Amit Verma",
      email: "staff@sriram.com",
      password: "staff123",
      role: "Staff/Trainer",
      avatar: "AV",
      color: "from-orange-500 to-red-500",
      icon: GraduationCap,
      description: "Access personal teaching dashboard",
      centers: ["Delhi Center"],
    },
  ];

  // Features showcase
  const features = [
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description:
        "Real-time insights into student performance, revenue trends, and center operations",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      title: "Multi-Center Management",
      description:
        "Manage multiple educational centers from a single unified dashboard",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Trophy,
      title: "Performance Tracking",
      description:
        "Track student success rates, staff performance, and batch progress",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Shield,
      title: "Role-Based Access",
      description:
        "Secure access control with dedicated interfaces for each role",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Optimized performance with instant data loading and smooth animations",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Globe,
      title: "Cloud-Based",
      description:
        "Access your dashboard from anywhere, anytime, on any device",
      color: "from-indigo-500 to-purple-500",
    },
  ];

  // Testimonials
  const testimonials = [
    {
      name: "Dr. Ramesh Kumar",
      role: "Director, Delhi Center",
      content:
        "This admin panel has revolutionized how we manage our centers. The insights are incredible!",
      rating: 5,
      avatar: "RK",
    },
    {
      name: "Neha Gupta",
      role: "Senior Trainer",
      content:
        "I love how easy it is to track my students and manage my classes. Best platform ever!",
      rating: 5,
      avatar: "NG",
    },
    {
      name: "Vikram Singh",
      role: "Operations Manager",
      content:
        "The real-time analytics and reporting features have improved our decision-making significantly.",
      rating: 5,
      avatar: "VS",
    },
  ];

  // Achievements
  const achievements = [
    {
      icon: Users,
      value: "3,527+",
      label: "Active Students",
      color: "text-blue-400",
    },
    { icon: Building2, value: "4", label: "Centers", color: "text-purple-400" },
    {
      icon: Award,
      value: "76%",
      label: "Success Rate",
      color: "text-green-400",
    },
    {
      icon: BookOpen,
      value: "16",
      label: "Active Courses",
      color: "text-orange-400",
    },
  ];

  // Mouse move effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Auto-rotate features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Animate stats
  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prev) => ({
        students: prev.students + Math.floor(Math.random() * 3),
        centers: 4,
        courses: prev.courses + (Math.random() > 0.8 ? 1 : 0),
        successRate: Math.min(
          100,
          prev.successRate + (Math.random() > 0.5 ? 0.1 : 0),
        ),
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const user = demoUsers.find(
      (u) => u.email === email && u.password === password,
    );

    if (user) {
      dispatch(loginSuccess(user));
      toast.success(`Welcome back, ${user.name}!`);
      navigate("/");
    } else {
      toast.error("Invalid email or password");
    }

    setIsLoading(false);
  };

  const quickLogin = (user) => {
    setEmail(user.email);
    setPassword(user.password);
    setTimeout(() => {
      dispatch(loginSuccess(user));
      toast.success(`Logged in as ${user.name}`);
      navigate("/");
    }, 300);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          style={{ top: "10%", left: "10%" }}
        />
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 25, repeat: Infinity }}
          style={{ bottom: "10%", right: "10%" }}
        />
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 blur-3xl"
          animate={{
            x: [0, 80, 0],
            y: [0, -80, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 22, repeat: Infinity }}
          style={{ top: "50%", right: "20%" }}
        />

        {/* Floating Particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            animate={{
              y: [-20, -100],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              bottom: "0",
            }}
          />
        ))}

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:100px_100px]" />

        {/* Mouse Follow Gradient */}
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-3xl"
          animate={{
            x: mousePosition.x - 192,
            y: mousePosition.y - 192,
          }}
          transition={{ type: "spring", damping: 50, stiffness: 200 }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex">
        {/* Left Side - Branding & Features */}
        <motion.div
          className="hidden lg:flex lg:w-1/2 xl:w-3/5 flex-col justify-between p-12 xl:p-16"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo Section */}
          <div className="space-y-8">
            <motion.div
              className="flex items-center gap-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              {/* Innovative Logo Presentation */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-2xl blur-xl opacity-50 animate-pulse" />
                <motion.div
                  className="relative bg-white rounded-2xl p-4 shadow-2xl"
                  whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src="/SriramIAS.png"
                    alt="Sriram IAS"
                    className="w-20 h-20 object-contain"
                  />
                  <motion.div
                    className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Sparkles className="w-3 h-3 text-white" />
                  </motion.div>
                </motion.div>
              </div>

              <div>
                <motion.h1
                  className="text-4xl xl:text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent"
                  animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                  Sriram's Admin Panel
                </motion.h1>
                <p className="text-slate-400 text-lg mt-2">
                  Multi-Center Educational Excellence
                </p>
              </div>
            </motion.div>

            {/* Tagline */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-3xl xl:text-4xl font-bold text-white leading-tight">
                Manage Your Educational{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Empire
                </span>{" "}
                with Intelligence
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                Powerful analytics, seamless management, and intelligent
                insights for modern educational institutions.
              </p>
            </motion.div>
          </div>

          {/* Live Statistics */}
          <motion.div
            className="grid grid-cols-2 xl:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all">
                    <div className={`${achievement.color} mb-3`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <motion.div
                      className="text-2xl xl:text-3xl font-bold text-white mb-1"
                      key={achievement.value}
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                    >
                      {achievement.value}
                    </motion.div>
                    <div className="text-slate-400 text-sm">
                      {achievement.label}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Features Showcase */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white">Why Choose Us?</h3>
              <div className="flex gap-2">
                {features.map((_, index) => (
                  <motion.div
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                      index === activeFeature
                        ? "bg-purple-400 w-8"
                        : "bg-white/20"
                    } transition-all`}
                    animate={{ scale: index === activeFeature ? 1 : 0.8 }}
                  />
                ))}
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl blur-2xl" />
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${features[activeFeature].color} mb-4`}
                  >
                    {(() => {
                      const Icon = features[activeFeature].icon;
                      return <Icon className="w-8 h-8 text-white" />;
                    })()}
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-3">
                    {features[activeFeature].title}
                  </h4>
                  <p className="text-slate-300 text-lg leading-relaxed">
                    {features[activeFeature].description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Testimonials */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <h3 className="text-xl font-bold text-white">What Our Users Say</h3>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonials[activeTestimonial].rating)].map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ),
                  )}
                </div>
                <p className="text-slate-300 text-lg mb-4 italic">
                  "{testimonials[activeTestimonial].content}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white font-bold">
                    {testimonials[activeTestimonial].avatar}
                  </div>
                  <div>
                    <div className="text-white font-semibold">
                      {testimonials[activeTestimonial].name}
                    </div>
                    <div className="text-slate-400 text-sm">
                      {testimonials[activeTestimonial].role}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>

        {/* Right Side - Login Form */}
        <motion.div
          className="w-full lg:w-1/2 xl:w-2/5 flex items-center justify-center p-6 lg:p-12"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-full max-w-md space-y-8">
            {/* Mobile Logo */}
            <motion.div
              className="lg:hidden flex flex-col items-center space-y-4 mb-8"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-2xl blur-xl opacity-50 animate-pulse" />
                <div className="relative bg-white rounded-2xl p-4 shadow-2xl">
                  <img
                    src="/SriramIAS.png"
                    alt="Sriram IAS"
                    className="w-16 h-16 object-contain"
                  />
                </div>
              </div>
              <div className="text-center">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                  Sriram's Admin Panel
                </h1>
                <p className="text-slate-400 mt-1">Welcome back!</p>
              </div>
            </motion.div>

            {/* Login Card */}
            <motion.div
              className="relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl" />
              <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 shadow-2xl">
                {/* Header */}
                <div className="text-center mb-8">
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 mb-4 shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Shield className="w-8 h-8 text-white" />
                  </motion.div>
                  <h2 className="text-3xl font-bold text-white mb-2">
                    Welcome Back
                  </h2>
                  <p className="text-slate-300">
                    Sign in to access your dashboard
                  </p>
                </div>

                {/* Login Form */}
                <form onSubmit={handleLogin} className="space-y-6">
                  {/* Email Input */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <label className="text-sm font-medium text-slate-300 mb-2 block">
                      Email Address
                    </label>
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl opacity-0 group-focus-within:opacity-20 blur transition-opacity" />
                      <div className="relative flex items-center">
                        <Mail className="absolute left-4 w-5 h-5 text-slate-400 group-focus-within:text-purple-400 transition-colors" />
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email"
                          className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white placeholder-slate-500 focus:outline-none focus:border-purple-400/50 focus:bg-white/10 transition-all"
                          required
                        />
                      </div>
                    </div>
                  </motion.div>

                  {/* Password Input */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <label className="text-sm font-medium text-slate-300 mb-2 block">
                      Password
                    </label>
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl opacity-0 group-focus-within:opacity-20 blur transition-opacity" />
                      <div className="relative flex items-center">
                        <Lock className="absolute left-4 w-5 h-5 text-slate-400 group-focus-within:text-purple-400 transition-colors" />
                        <input
                          type={showPassword ? "text" : "password"}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Enter your password"
                          className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-12 py-4 text-white placeholder-slate-500 focus:outline-none focus:border-purple-400/50 focus:bg-white/10 transition-all"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-4 text-slate-400 hover:text-purple-400 transition-colors"
                        >
                          {showPassword ? (
                            <EyeOff className="w-5 h-5" />
                          ) : (
                            <Eye className="w-5 h-5" />
                          )}
                        </button>
                      </div>
                    </div>
                  </motion.div>

                  {/* Remember & Forgot */}
                  <motion.div
                    className="flex items-center justify-between text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <label className="flex items-center gap-2 text-slate-300 cursor-pointer group">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-white/20 bg-white/5 text-purple-500 focus:ring-purple-500 focus:ring-offset-0"
                      />
                      <span className="group-hover:text-white transition-colors">
                        Remember me
                      </span>
                    </label>
                    <button
                      type="button"
                      className="text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      Forgot password?
                    </button>
                  </motion.div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    className="w-full relative group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur group-hover:blur-lg transition-all" />
                    <div className="relative bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl px-6 py-4 flex items-center justify-center gap-2 text-white font-semibold shadow-lg">
                      {isLoading ? (
                        <>
                          <motion.div
                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                          />
                          <span>Signing in...</span>
                        </>
                      ) : (
                        <>
                          <span>Sign in to Dashboard</span>
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </div>
                  </motion.button>
                </form>

                {/* Demo Credentials Toggle */}
                <motion.button
                  onClick={() => setShowCredentials(!showCredentials)}
                  className="w-full mt-6 flex items-center justify-center gap-2 text-slate-400 hover:text-white transition-colors group"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <Sparkles className="w-4 h-4 group-hover:text-purple-400 transition-colors" />
                  <span className="text-sm">
                    {showCredentials ? "Hide" : "Show"} Demo Credentials
                  </span>
                  <motion.div animate={{ rotate: showCredentials ? 180 : 0 }}>
                    <ArrowRight className="w-4 h-4 rotate-90" />
                  </motion.div>
                </motion.button>
              </div>
            </motion.div>

            {/* Demo Credentials */}
            <AnimatePresence>
              {showCredentials && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-4"
                >
                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/30 rounded-full px-4 py-2">
                      <Info className="w-4 h-4 text-purple-400" />
                      <span className="text-sm text-purple-300">
                        Click any card to quick login
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {demoUsers.map((user, index) => {
                      const Icon = user.icon;
                      return (
                        <motion.button
                          key={index}
                          onClick={() => quickLogin(user)}
                          className="relative group text-left"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.9 + index * 0.1 }}
                          whileHover={{ scale: 1.05, y: -5 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <div
                            className={`absolute inset-0 bg-gradient-to-br ${user.color} rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity`}
                          />
                          <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 group-hover:border-white/30 rounded-xl p-4 transition-all">
                            <div className="flex items-start gap-3 mb-3">
                              <div
                                className={`w-12 h-12 rounded-lg bg-gradient-to-br ${user.color} flex items-center justify-center text-white font-bold shadow-lg`}
                              >
                                {user.avatar}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="text-white font-semibold truncate">
                                  {user.name}
                                </div>
                                <div className="text-slate-400 text-xs truncate">
                                  {user.role}
                                </div>
                                {user.center && (
                                  <div className="text-purple-400 text-xs truncate mt-0.5">
                                    {user.center}
                                  </div>
                                )}
                              </div>
                              <Icon
                                className={`w-5 h-5 ${user.color.split(" ")[0].replace("from-", "text-")} opacity-50 group-hover:opacity-100 transition-opacity`}
                              />
                            </div>
                            <div className="text-slate-400 text-xs line-clamp-2 mb-3">
                              {user.description}
                            </div>
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-slate-500">
                                {user.email}
                              </span>
                              <motion.div
                                className="bg-white/10 rounded-full p-1.5"
                                whileHover={{ rotate: -45, scale: 1.2 }}
                              >
                                <ArrowRight className="w-3 h-3 text-purple-400" />
                              </motion.div>
                            </div>
                          </div>
                        </motion.button>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Footer Links */}
            <motion.div
              className="text-center space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <div className="flex items-center justify-center gap-6 text-sm text-slate-400">
                <button className="hover:text-white transition-colors flex items-center gap-1">
                  <Shield className="w-4 h-4" />
                  <span>Privacy</span>
                </button>
                <button className="hover:text-white transition-colors flex items-center gap-1">
                  <FileText className="w-4 h-4" />
                  <span>Terms</span>
                </button>
                <button className="hover:text-white transition-colors flex items-center gap-1">
                  <MessageSquare className="w-4 h-4" />
                  <span>Support</span>
                </button>
              </div>
              <div className="text-xs text-slate-500">
                © 2026 Sriram's Admin Panel. All rights reserved.
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Floating Action Button */}
      <motion.button
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl group z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <MessageSquare className="w-6 h-6 text-white" />
        <motion.div
          className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-slate-900"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.button>
    </div>
  );
};

// Info icon for demo credentials
const Info = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

export default Login;
