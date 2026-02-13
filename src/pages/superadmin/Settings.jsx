import { useState } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import {
  Settings as SettingsIcon,
  User,
  Bell,
  Shield,
  Globe,
  Palette,
  Mail,
  Lock,
  Database,
  Server,
  Cloud,
  Smartphone,
  Monitor,
  Moon,
  Sun,
  Eye,
  EyeOff,
  Save,
  RefreshCw,
  Download,
  Upload,
  AlertCircle,
  CheckCircle,
  Info,
  Zap,
  Key,
  Clock,
  Calendar,
  Languages,
  DollarSign,
  Percent,
  FileText,
  Image,
  Video,
  Music,
  Code,
  ToggleLeft,
  ToggleRight,
  Sliders,
  Users,
  BarChart3,
} from "lucide-react";

const Settings = () => {
  const { user } = useSelector((state) => state.auth);
  const [activeTab, setActiveTab] = useState("general"); // general, security, notifications, appearance, integrations, advanced
  const [unsavedChanges, setUnsavedChanges] = useState(false);

  // Settings state
  const [settings, setSettings] = useState({
    // General
    companyName: "EduTech Learning Centers",
    companyEmail: "admin@edutech.com",
    companyPhone: "+91 98765 43210",
    companyAddress: "Connaught Place, New Delhi, India",
    businessHours: "9:00 AM - 6:00 PM",
    timezone: "Asia/Kolkata",
    dateFormat: "DD/MM/YYYY",
    currency: "INR",
    language: "English",

    // Security
    twoFactorAuth: true,
    sessionTimeout: 30,
    passwordExpiry: 90,
    minPasswordLength: 8,
    maxLoginAttempts: 5,
    ipWhitelisting: false,
    sslEnabled: true,

    // Notifications
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true,
    enrollmentAlerts: true,
    paymentAlerts: true,
    attendanceAlerts: true,
    systemAlerts: true,
    weeklyReports: true,
    monthlyReports: true,

    // Appearance
    theme: "light",
    primaryColor: "#3b82f6",
    secondaryColor: "#10b981",
    accentColor: "#a855f7",
    sidebarStyle: "expanded",
    fontSize: "medium",
    compactMode: false,
    animations: true,

    // Integrations
    googleClassroom: false,
    zoom: true,
    slack: true,
    teams: false,
    googleAnalytics: true,
    paymentGateway: "Razorpay",
    smsGateway: "Twilio",
    emailProvider: "SendGrid",

    // Advanced
    apiAccess: true,
    webhooks: true,
    autoBackup: true,
    backupFrequency: "daily",
    dataRetention: 365,
    debugMode: false,
    cacheEnabled: true,
    compressionEnabled: true,
    cdnEnabled: true,
    maintenanceMode: false,
  });

  const tabs = [
    { id: "general", label: "General", icon: SettingsIcon },
    { id: "security", label: "Security", icon: Shield },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "appearance", label: "Appearance", icon: Palette },
    { id: "integrations", label: "Integrations", icon: Zap },
    { id: "advanced", label: "Advanced", icon: Code },
  ];

  const handleInputChange = (key, value) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
    setUnsavedChanges(true);
  };

  const handleSave = () => {
    // Simulate save operation
    setTimeout(() => {
      setUnsavedChanges(false);
      // Show success message
    }, 1000);
  };

  return (
    <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 overflow-x-hidden w-full max-w-full">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between flex-wrap gap-4"
      >
        <div>
          <h1 className="text-3xl font-bold text-slate-800 dark:text-white mb-2">
            System Settings
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Configure system preferences, security, and integrations
          </p>
        </div>
        <div className="flex items-center gap-3">
          {unsavedChanges && (
            <div className="flex items-center gap-2 px-4 py-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 rounded-xl text-sm">
              <AlertCircle className="w-4 h-4" />
              <span>Unsaved changes</span>
            </div>
          )}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSave}
            disabled={!unsavedChanges}
            className={`px-4 py-2 rounded-xl flex items-center gap-2 ${
              unsavedChanges
                ? "bg-blue-500 text-white hover:bg-blue-600"
                : "bg-slate-200 dark:bg-slate-700 text-slate-400 cursor-not-allowed"
            }`}
          >
            <Save className="w-4 h-4" />
            Save Changes
          </motion.button>
        </div>
      </motion.div>

      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden"
      >
        <div className="flex items-center gap-2 p-2 border-b border-slate-200 dark:border-slate-700 overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 rounded-xl transition-all whitespace-nowrap text-sm sm:text-base ${
                activeTab === tab.id
                  ? "bg-blue-500 text-white shadow"
                  : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700"
              }`}
            >
              <tab.icon className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="font-medium">{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="p-4 sm:p-6 overflow-x-hidden">
          {/* General Settings */}
          {activeTab === "general" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4">
                  Company Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      value={settings.companyName}
                      onChange={(e) =>
                        handleInputChange("companyName", e.target.value)
                      }
                      className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={settings.companyEmail}
                      onChange={(e) =>
                        handleInputChange("companyEmail", e.target.value)
                      }
                      className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={settings.companyPhone}
                      onChange={(e) =>
                        handleInputChange("companyPhone", e.target.value)
                      }
                      className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Business Hours
                    </label>
                    <input
                      type="text"
                      value={settings.businessHours}
                      onChange={(e) =>
                        handleInputChange("businessHours", e.target.value)
                      }
                      className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Address
                    </label>
                    <textarea
                      value={settings.companyAddress}
                      onChange={(e) =>
                        handleInputChange("companyAddress", e.target.value)
                      }
                      rows="3"
                      className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4">
                  Regional Settings
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      <div className="flex items-center gap-2">
                        <Globe className="w-4 h-4" />
                        Timezone
                      </div>
                    </label>
                    <select
                      value={settings.timezone}
                      onChange={(e) =>
                        handleInputChange("timezone", e.target.value)
                      }
                      className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="Asia/Kolkata">Asia/Kolkata (IST)</option>
                      <option value="America/New_York">
                        America/New York (EST)
                      </option>
                      <option value="Europe/London">Europe/London (GMT)</option>
                      <option value="Asia/Tokyo">Asia/Tokyo (JST)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Date Format
                      </div>
                    </label>
                    <select
                      value={settings.dateFormat}
                      onChange={(e) =>
                        handleInputChange("dateFormat", e.target.value)
                      }
                      className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                      <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                      <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4" />
                        Currency
                      </div>
                    </label>
                    <select
                      value={settings.currency}
                      onChange={(e) =>
                        handleInputChange("currency", e.target.value)
                      }
                      className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="INR">INR (₹)</option>
                      <option value="USD">USD ($)</option>
                      <option value="EUR">EUR (€)</option>
                      <option value="GBP">GBP (£)</option>
                    </select>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Security Settings */}
          {activeTab === "security" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4">
                  Authentication
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      key: "twoFactorAuth",
                      label: "Two-Factor Authentication",
                      description: "Require 2FA for all users",
                      icon: Key,
                    },
                    {
                      key: "sslEnabled",
                      label: "SSL/TLS Encryption",
                      description: "Enable secure connections",
                      icon: Lock,
                    },
                    {
                      key: "ipWhitelisting",
                      label: "IP Whitelisting",
                      description: "Restrict access to specific IPs",
                      icon: Shield,
                    },
                  ].map((item) => (
                    <div
                      key={item.key}
                      className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-900 rounded-xl"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                          <item.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <div className="font-medium text-slate-800 dark:text-white">
                            {item.label}
                          </div>
                          <div className="text-sm text-slate-600 dark:text-slate-400">
                            {item.description}
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() =>
                          handleInputChange(item.key, !settings[item.key])
                        }
                        className={`relative w-14 h-7 rounded-full transition-colors ${
                          settings[item.key]
                            ? "bg-blue-500"
                            : "bg-slate-300 dark:bg-slate-700"
                        }`}
                      >
                        <div
                          className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${
                            settings[item.key]
                              ? "translate-x-8"
                              : "translate-x-1"
                          }`}
                        />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4">
                  Password Policy
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Minimum Password Length
                    </label>
                    <input
                      type="number"
                      value={settings.minPasswordLength}
                      onChange={(e) =>
                        handleInputChange(
                          "minPasswordLength",
                          parseInt(e.target.value),
                        )
                      }
                      className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Password Expiry (days)
                    </label>
                    <input
                      type="number"
                      value={settings.passwordExpiry}
                      onChange={(e) =>
                        handleInputChange(
                          "passwordExpiry",
                          parseInt(e.target.value),
                        )
                      }
                      className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Max Login Attempts
                    </label>
                    <input
                      type="number"
                      value={settings.maxLoginAttempts}
                      onChange={(e) =>
                        handleInputChange(
                          "maxLoginAttempts",
                          parseInt(e.target.value),
                        )
                      }
                      className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Session Timeout (minutes)
                    </label>
                    <input
                      type="number"
                      value={settings.sessionTimeout}
                      onChange={(e) =>
                        handleInputChange(
                          "sessionTimeout",
                          parseInt(e.target.value),
                        )
                      }
                      className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Notifications Settings */}
          {activeTab === "notifications" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4">
                  Notification Channels
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { key: "emailNotifications", label: "Email", icon: Mail },
                    { key: "smsNotifications", label: "SMS", icon: Smartphone },
                    { key: "pushNotifications", label: "Push", icon: Bell },
                  ].map((item) => (
                    <div
                      key={item.key}
                      className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <item.icon className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                          <span className="font-medium text-slate-800 dark:text-white">
                            {item.label}
                          </span>
                        </div>
                        <button
                          onClick={() =>
                            handleInputChange(item.key, !settings[item.key])
                          }
                          className={`relative w-12 h-6 rounded-full transition-colors ${
                            settings[item.key]
                              ? "bg-blue-500"
                              : "bg-slate-300 dark:bg-slate-700"
                          }`}
                        >
                          <div
                            className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                              settings[item.key]
                                ? "translate-x-6"
                                : "translate-x-0.5"
                            }`}
                          />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4">
                  Alert Types
                </h3>
                <div className="space-y-3">
                  {[
                    {
                      key: "enrollmentAlerts",
                      label: "Enrollment Alerts",
                      description: "New student enrollments",
                    },
                    {
                      key: "paymentAlerts",
                      label: "Payment Alerts",
                      description: "Payment confirmations and failures",
                    },
                    {
                      key: "attendanceAlerts",
                      label: "Attendance Alerts",
                      description: "Low attendance warnings",
                    },
                    {
                      key: "systemAlerts",
                      label: "System Alerts",
                      description: "System errors and warnings",
                    },
                    {
                      key: "weeklyReports",
                      label: "Weekly Reports",
                      description: "Automated weekly summaries",
                    },
                    {
                      key: "monthlyReports",
                      label: "Monthly Reports",
                      description: "Comprehensive monthly reports",
                    },
                  ].map((item) => (
                    <div
                      key={item.key}
                      className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-900 rounded-xl"
                    >
                      <div>
                        <div className="font-medium text-slate-800 dark:text-white">
                          {item.label}
                        </div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">
                          {item.description}
                        </div>
                      </div>
                      <button
                        onClick={() =>
                          handleInputChange(item.key, !settings[item.key])
                        }
                        className={`relative w-14 h-7 rounded-full transition-colors ${
                          settings[item.key]
                            ? "bg-blue-500"
                            : "bg-slate-300 dark:bg-slate-700"
                        }`}
                      >
                        <div
                          className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${
                            settings[item.key]
                              ? "translate-x-8"
                              : "translate-x-1"
                          }`}
                        />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Appearance Settings */}
          {activeTab === "appearance" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4">
                  Theme
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { value: "light", label: "Light", icon: Sun },
                    { value: "dark", label: "Dark", icon: Moon },
                    { value: "auto", label: "Auto", icon: Monitor },
                  ].map((theme) => (
                    <button
                      key={theme.value}
                      onClick={() => handleInputChange("theme", theme.value)}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        settings.theme === theme.value
                          ? "border-blue-500 bg-blue-50 dark:bg-blue-900/30"
                          : "border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900"
                      }`}
                    >
                      <theme.icon
                        className={`w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 ${
                          settings.theme === theme.value
                            ? "text-blue-600 dark:text-blue-400"
                            : "text-slate-600 dark:text-slate-400"
                        }`}
                      />
                      <div className="text-sm sm:text-base font-medium text-slate-800 dark:text-white">
                        {theme.label}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4">
                  Color Scheme
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    {
                      label: "Primary Color",
                      key: "primaryColor",
                      value: settings.primaryColor,
                    },
                    {
                      label: "Secondary Color",
                      key: "secondaryColor",
                      value: settings.secondaryColor,
                    },
                    {
                      label: "Accent Color",
                      key: "accentColor",
                      value: settings.accentColor,
                    },
                  ].map((color) => (
                    <div key={color.key}>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        {color.label}
                      </label>
                      <div className="flex items-center gap-2">
                        <input
                          type="color"
                          value={color.value}
                          onChange={(e) =>
                            handleInputChange(color.key, e.target.value)
                          }
                          className="w-12 h-12 rounded-lg cursor-pointer"
                        />
                        <input
                          type="text"
                          value={color.value}
                          onChange={(e) =>
                            handleInputChange(color.key, e.target.value)
                          }
                          className="flex-1 px-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4">
                  Display Options
                </h3>
                <div className="space-y-3">
                  {[
                    {
                      key: "animations",
                      label: "Enable Animations",
                      description: "Smooth transitions and effects",
                    },
                    {
                      key: "compactMode",
                      label: "Compact Mode",
                      description: "Reduce spacing and padding",
                    },
                  ].map((item) => (
                    <div
                      key={item.key}
                      className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-900 rounded-xl"
                    >
                      <div>
                        <div className="font-medium text-slate-800 dark:text-white">
                          {item.label}
                        </div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">
                          {item.description}
                        </div>
                      </div>
                      <button
                        onClick={() =>
                          handleInputChange(item.key, !settings[item.key])
                        }
                        className={`relative w-14 h-7 rounded-full transition-colors ${
                          settings[item.key]
                            ? "bg-blue-500"
                            : "bg-slate-300 dark:bg-slate-700"
                        }`}
                      >
                        <div
                          className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${
                            settings[item.key]
                              ? "translate-x-8"
                              : "translate-x-1"
                          }`}
                        />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Integrations Settings */}
          {activeTab === "integrations" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4">
                  Third-Party Services
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      key: "googleClassroom",
                      label: "Google Classroom",
                      description: "Sync with Google Classroom",
                      icon: Globe,
                    },
                    {
                      key: "zoom",
                      label: "Zoom",
                      description: "Video conferencing integration",
                      icon: Video,
                    },
                    {
                      key: "slack",
                      label: "Slack",
                      description: "Team communication",
                      icon: Bell,
                    },
                    {
                      key: "teams",
                      label: "Microsoft Teams",
                      description: "Collaboration platform",
                      icon: Users,
                    },
                    {
                      key: "googleAnalytics",
                      label: "Google Analytics",
                      description: "Track website analytics",
                      icon: BarChart3,
                    },
                  ].map((item) => (
                    <div
                      key={item.key}
                      className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                            <item.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div>
                            <div className="font-medium text-slate-800 dark:text-white">
                              {item.label}
                            </div>
                            <div className="text-xs text-slate-600 dark:text-slate-400">
                              {item.description}
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={() =>
                            handleInputChange(item.key, !settings[item.key])
                          }
                          className={`px-3 py-1 rounded-lg text-sm font-medium ${
                            settings[item.key]
                              ? "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
                              : "bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400"
                          }`}
                        >
                          {settings[item.key] ? "Connected" : "Connect"}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4">
                  Service Providers
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Payment Gateway
                    </label>
                    <select
                      value={settings.paymentGateway}
                      onChange={(e) =>
                        handleInputChange("paymentGateway", e.target.value)
                      }
                      className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="Razorpay">Razorpay</option>
                      <option value="Stripe">Stripe</option>
                      <option value="PayPal">PayPal</option>
                      <option value="Paytm">Paytm</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      SMS Gateway
                    </label>
                    <select
                      value={settings.smsGateway}
                      onChange={(e) =>
                        handleInputChange("smsGateway", e.target.value)
                      }
                      className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="Twilio">Twilio</option>
                      <option value="AWS SNS">AWS SNS</option>
                      <option value="MSG91">MSG91</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Email Provider
                    </label>
                    <select
                      value={settings.emailProvider}
                      onChange={(e) =>
                        handleInputChange("emailProvider", e.target.value)
                      }
                      className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="SendGrid">SendGrid</option>
                      <option value="Mailgun">Mailgun</option>
                      <option value="AWS SES">AWS SES</option>
                    </select>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Advanced Settings */}
          {activeTab === "advanced" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4">
                  Developer Options
                </h3>
                <div className="space-y-3">
                  {[
                    {
                      key: "apiAccess",
                      label: "API Access",
                      description: "Enable REST API access",
                      icon: Code,
                    },
                    {
                      key: "webhooks",
                      label: "Webhooks",
                      description: "Enable webhook notifications",
                      icon: Zap,
                    },
                    {
                      key: "debugMode",
                      label: "Debug Mode",
                      description: "Show detailed error messages",
                      icon: AlertCircle,
                    },
                  ].map((item) => (
                    <div
                      key={item.key}
                      className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-900 rounded-xl"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                          <item.icon className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                        </div>
                        <div>
                          <div className="font-medium text-slate-800 dark:text-white">
                            {item.label}
                          </div>
                          <div className="text-sm text-slate-600 dark:text-slate-400">
                            {item.description}
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() =>
                          handleInputChange(item.key, !settings[item.key])
                        }
                        className={`relative w-14 h-7 rounded-full transition-colors ${
                          settings[item.key]
                            ? "bg-blue-500"
                            : "bg-slate-300 dark:bg-slate-700"
                        }`}
                      >
                        <div
                          className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${
                            settings[item.key]
                              ? "translate-x-8"
                              : "translate-x-1"
                          }`}
                        />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4">
                  Performance
                </h3>
                <div className="space-y-3">
                  {[
                    {
                      key: "cacheEnabled",
                      label: "Enable Caching",
                      description: "Improve page load times",
                    },
                    {
                      key: "compressionEnabled",
                      label: "Enable Compression",
                      description: "Reduce bandwidth usage",
                    },
                    {
                      key: "cdnEnabled",
                      label: "CDN Integration",
                      description: "Serve static assets from CDN",
                    },
                  ].map((item) => (
                    <div
                      key={item.key}
                      className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-900 rounded-xl"
                    >
                      <div>
                        <div className="font-medium text-slate-800 dark:text-white">
                          {item.label}
                        </div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">
                          {item.description}
                        </div>
                      </div>
                      <button
                        onClick={() =>
                          handleInputChange(item.key, !settings[item.key])
                        }
                        className={`relative w-14 h-7 rounded-full transition-colors ${
                          settings[item.key]
                            ? "bg-blue-500"
                            : "bg-slate-300 dark:bg-slate-700"
                        }`}
                      >
                        <div
                          className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${
                            settings[item.key]
                              ? "translate-x-8"
                              : "translate-x-1"
                          }`}
                        />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4">
                  Backup & Maintenance
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Backup Frequency
                    </label>
                    <select
                      value={settings.backupFrequency}
                      onChange={(e) =>
                        handleInputChange("backupFrequency", e.target.value)
                      }
                      className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="hourly">Hourly</option>
                      <option value="daily">Daily</option>
                      <option value="weekly">Weekly</option>
                      <option value="monthly">Monthly</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Data Retention (days)
                    </label>
                    <input
                      type="number"
                      value={settings.dataRetention}
                      onChange={(e) =>
                        handleInputChange(
                          "dataRetention",
                          parseInt(e.target.value),
                        )
                      }
                      className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                    <div className="font-medium text-yellow-800 dark:text-yellow-300">
                      Maintenance Mode
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-yellow-700 dark:text-yellow-400">
                      Enable maintenance mode to perform system updates
                    </div>
                    <button
                      onClick={() =>
                        handleInputChange(
                          "maintenanceMode",
                          !settings.maintenanceMode,
                        )
                      }
                      className={`px-4 py-2 rounded-lg text-sm font-medium ${
                        settings.maintenanceMode
                          ? "bg-red-500 text-white"
                          : "bg-yellow-500 text-white"
                      }`}
                    >
                      {settings.maintenanceMode ? "Disable" : "Enable"}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Settings;
