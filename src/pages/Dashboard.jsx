import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import {
  Users,
  BookOpen,
  DollarSign,
  MessageSquare,
  Video,
  TrendingUp,
  Award,
  AlertCircle,
} from "lucide-react";
import StatCard from "../components/StatCard";
import RevenueChart from "../components/RevenueChart";
import LiveClassCard from "../components/LiveClassCard";
import RecentEnquiries from "../components/RecentEnquiries";
import { dashboardStats, liveClasses } from "../data/staticData";

const Dashboard = () => {
  const { selectedCenter, user } = useSelector((state) => state.auth);
  const stats = dashboardStats[selectedCenter] || dashboardStats["All Centers"];

  // Format currency
  const formatCurrency = (amount) => {
    if (amount >= 10000000) return `₹${(amount / 10000000).toFixed(2)}Cr`;
    if (amount >= 100000) return `₹${(amount / 100000).toFixed(2)}L`;
    if (amount >= 1000) return `₹${(amount / 1000).toFixed(2)}K`;
    return `₹${amount}`;
  };

  // Filter live classes based on selected center
  const filteredLiveClasses =
    selectedCenter === "All Centers"
      ? liveClasses
      : liveClasses.filter((lc) => lc.center === selectedCenter);

  return (
    <div className="space-y-6 p-6">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-8 shadow-2xl text-white relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="relative z-10">
          <h1 className="text-3xl font-bold mb-2">
            Welcome back, {user?.name}! 👋
          </h1>
          <p className="text-indigo-100 text-lg">
            {selectedCenter === "All Centers"
              ? "Overview of all centers"
              : `${selectedCenter} Dashboard`}
          </p>
          <p className="text-indigo-200 text-sm mt-2">
            {user?.role} • Real-time insights and analytics
          </p>
        </div>
      </motion.div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Students"
          value={stats.totalUsers.toLocaleString()}
          icon={Users}
          color="indigo"
          trend={8.5}
          delay={0.1}
          subtitle={`${stats.activeStudents.toLocaleString()} active`}
        />
        <StatCard
          title="Active Courses"
          value={stats.activeCourses}
          icon={BookOpen}
          color="purple"
          trend={12}
          delay={0.15}
          subtitle="Published & running"
        />
        <StatCard
          title="Revenue Today"
          value={formatCurrency(stats.revenueToday)}
          icon={DollarSign}
          color="green"
          trend={15.3}
          delay={0.2}
          subtitle={`Total: ${formatCurrency(stats.totalRevenue)}`}
        />
        <StatCard
          title="New Enquiries"
          value={stats.newEnquiries}
          icon={MessageSquare}
          color="blue"
          trend={-2.4}
          delay={0.25}
          subtitle="Last 24 hours"
        />
      </div>

      {/* Secondary Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Live Classes"
          value={stats.liveClassesRunning}
          icon={Video}
          color="pink"
          delay={0.3}
          subtitle="Currently running"
        />
        <StatCard
          title="Total Revenue"
          value={formatCurrency(stats.totalRevenue)}
          icon={TrendingUp}
          color="orange"
          trend={18.7}
          delay={0.35}
          subtitle="All time earnings"
        />
        <StatCard
          title="Pending Fees"
          value={formatCurrency(stats.pendingFees)}
          icon={AlertCircle}
          color="red"
          delay={0.4}
          subtitle="Outstanding amount"
        />
        <StatCard
          title="Success Rate"
          value="94.5%"
          icon={Award}
          color="yellow"
          trend={3.2}
          delay={0.45}
          subtitle="Student performance"
        />
      </div>

      {/* Charts and Details Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RevenueChart />
        <RecentEnquiries />
      </div>

      {/* Live Classes Section */}
      {filteredLiveClasses.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                Live & Scheduled Classes
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {
                  filteredLiveClasses.filter((lc) => lc.status === "Live")
                    .length
                }{" "}
                live •{" "}
                {
                  filteredLiveClasses.filter((lc) => lc.status === "Scheduled")
                    .length
                }{" "}
                scheduled
              </p>
            </div>
            <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg">
              <Video className="w-5 h-5 text-white" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {filteredLiveClasses.map((liveClass, index) => (
              <LiveClassCard
                key={liveClass.id}
                liveClass={liveClass}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      )}

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {[
          { label: "Add Student", color: "from-blue-500 to-blue-600" },
          { label: "Create Course", color: "from-purple-500 to-purple-600" },
          { label: "Schedule Class", color: "from-pink-500 to-pink-600" },
          { label: "View Reports", color: "from-indigo-500 to-indigo-600" },
        ].map((action, index) => (
          <motion.button
            key={action.label}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
            className={`p-4 rounded-xl bg-gradient-to-br ${action.color} text-white font-semibold shadow-lg hover:shadow-xl transition-all`}
          >
            {action.label}
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
};

export default Dashboard;
