import { useState } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import {
  DollarSign,
  TrendingUp,
  TrendingDown,
  Building2,
  Users,
  Briefcase,
  Zap,
  Wifi,
  BookOpen,
  Coffee,
  Car,
  Home,
  Wrench,
  ShoppingBag,
  CreditCard,
  Calendar,
  PieChart,
  BarChart3,
  Download,
  Upload,
  Filter,
  Search,
  Plus,
  Edit,
  Trash2,
  MoreVertical,
  AlertCircle,
  CheckCircle,
  Clock,
  Receipt,
  FileText,
  ArrowUpRight,
  ArrowDownRight,
  Package,
  Truck,
  Phone,
  Globe,
  Eye,
} from "lucide-react";

const Expenses = () => {
  const { selectedCenter } = useSelector((state) => state.auth);
  const [viewMode, setViewMode] = useState("overview"); // overview, category, timeline
  const [timeRange, setTimeRange] = useState("month"); // week, month, quarter, year
  const [filterCategory, setFilterCategory] = useState("all");

  // Monthly expense data
  const monthlyExpenses = [
    {
      month: "Jan",
      total: 125000,
      budget: 140000,
      salaries: 85000,
      rent: 20000,
      utilities: 8000,
      supplies: 7000,
      marketing: 3000,
      other: 2000,
    },
    {
      month: "Feb",
      total: 132000,
      budget: 140000,
      salaries: 88000,
      rent: 20000,
      utilities: 8500,
      supplies: 8000,
      marketing: 5000,
      other: 2500,
    },
    {
      month: "Mar",
      total: 145000,
      budget: 150000,
      salaries: 92000,
      rent: 22000,
      utilities: 9000,
      supplies: 10000,
      marketing: 8000,
      other: 4000,
    },
    {
      month: "Apr",
      total: 138000,
      budget: 150000,
      salaries: 90000,
      rent: 22000,
      utilities: 8500,
      supplies: 9000,
      marketing: 6000,
      other: 2500,
    },
    {
      month: "May",
      total: 152000,
      budget: 160000,
      salaries: 95000,
      rent: 22000,
      utilities: 10000,
      supplies: 12000,
      marketing: 10000,
      other: 3000,
    },
    {
      month: "Jun",
      total: 165000,
      budget: 170000,
      salaries: 98000,
      rent: 24000,
      utilities: 11000,
      supplies: 15000,
      marketing: 12000,
      other: 5000,
    },
    {
      month: "Jul",
      total: 158000,
      budget: 170000,
      salaries: 96000,
      rent: 24000,
      utilities: 10500,
      supplies: 13000,
      marketing: 11000,
      other: 3500,
    },
    {
      month: "Aug",
      total: 172000,
      budget: 180000,
      salaries: 102000,
      rent: 24000,
      utilities: 12000,
      supplies: 16000,
      marketing: 14000,
      other: 4000,
    },
    {
      month: "Sep",
      total: 168000,
      budget: 180000,
      salaries: 100000,
      rent: 24000,
      utilities: 11500,
      supplies: 15000,
      marketing: 13000,
      other: 4500,
    },
    {
      month: "Oct",
      total: 185000,
      budget: 190000,
      salaries: 108000,
      rent: 26000,
      utilities: 13000,
      supplies: 18000,
      marketing: 15000,
      other: 5000,
    },
    {
      month: "Nov",
      total: 192000,
      budget: 200000,
      salaries: 112000,
      rent: 26000,
      utilities: 13500,
      supplies: 19000,
      marketing: 16000,
      other: 5500,
    },
    {
      month: "Dec",
      total: 205000,
      budget: 210000,
      salaries: 118000,
      rent: 28000,
      utilities: 14000,
      supplies: 20000,
      marketing: 18000,
      other: 7000,
    },
  ];

  // Expense categories
  const expenseCategories = [
    {
      name: "Staff Salaries",
      icon: Briefcase,
      amount: 1184000,
      budget: 1200000,
      percentage: 57.8,
      trend: 8.5,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      transactions: 156,
      avgTransaction: 7590,
      subcategories: [
        { name: "Teaching Staff", amount: 850000, percentage: 71.8 },
        { name: "Administrative", amount: 220000, percentage: 18.6 },
        { name: "Support Staff", amount: 114000, percentage: 9.6 },
      ],
    },
    {
      name: "Rent & Facilities",
      icon: Building2,
      amount: 288000,
      budget: 300000,
      percentage: 14.1,
      trend: 12.0,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      transactions: 12,
      avgTransaction: 24000,
      subcategories: [
        { name: "Rent", amount: 240000, percentage: 83.3 },
        { name: "Maintenance", amount: 35000, percentage: 12.2 },
        { name: "Security", amount: 13000, percentage: 4.5 },
      ],
    },
    {
      name: "Utilities",
      icon: Zap,
      amount: 126000,
      budget: 130000,
      percentage: 6.1,
      trend: 5.2,
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
      transactions: 36,
      avgTransaction: 3500,
      subcategories: [
        { name: "Electricity", amount: 72000, percentage: 57.1 },
        { name: "Water", amount: 28000, percentage: 22.2 },
        { name: "Internet", amount: 26000, percentage: 20.7 },
      ],
    },
    {
      name: "Supplies & Materials",
      icon: Package,
      amount: 157000,
      budget: 160000,
      percentage: 7.7,
      trend: 15.8,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      transactions: 248,
      avgTransaction: 633,
      subcategories: [
        { name: "Study Materials", amount: 85000, percentage: 54.1 },
        { name: "Office Supplies", amount: 42000, percentage: 26.8 },
        { name: "Equipment", amount: 30000, percentage: 19.1 },
      ],
    },
    {
      name: "Marketing",
      icon: TrendingUp,
      amount: 126000,
      budget: 140000,
      percentage: 6.2,
      trend: 22.5,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
      transactions: 45,
      avgTransaction: 2800,
      subcategories: [
        { name: "Digital Marketing", amount: 68000, percentage: 54.0 },
        { name: "Print Media", amount: 35000, percentage: 27.8 },
        { name: "Events", amount: 23000, percentage: 18.2 },
      ],
    },
    {
      name: "Technology",
      icon: Wifi,
      amount: 98000,
      budget: 100000,
      percentage: 4.8,
      trend: 18.2,
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
      transactions: 32,
      avgTransaction: 3063,
      subcategories: [
        { name: "Software Licenses", amount: 52000, percentage: 53.1 },
        { name: "Hardware", amount: 32000, percentage: 32.7 },
        { name: "IT Support", amount: 14000, percentage: 14.2 },
      ],
    },
    {
      name: "Transportation",
      icon: Truck,
      amount: 45000,
      budget: 50000,
      percentage: 2.2,
      trend: 5.8,
      color: "from-teal-500 to-cyan-500",
      bgColor: "bg-teal-50 dark:bg-teal-900/20",
      transactions: 68,
      avgTransaction: 662,
      subcategories: [
        { name: "Staff Transport", amount: 28000, percentage: 62.2 },
        { name: "Logistics", amount: 12000, percentage: 26.7 },
        { name: "Fuel", amount: 5000, percentage: 11.1 },
      ],
    },
    {
      name: "Miscellaneous",
      icon: MoreVertical,
      amount: 23000,
      budget: 30000,
      percentage: 1.1,
      trend: -8.5,
      color: "from-slate-500 to-gray-500",
      bgColor: "bg-slate-50 dark:bg-slate-900/20",
      transactions: 52,
      avgTransaction: 442,
      subcategories: [
        { name: "Legal & Compliance", amount: 12000, percentage: 52.2 },
        { name: "Insurance", amount: 8000, percentage: 34.8 },
        { name: "Other", amount: 3000, percentage: 13.0 },
      ],
    },
  ];

  // Recent transactions
  const recentTransactions = [
    {
      id: "TXN001",
      date: "2024-06-08",
      category: "Staff Salaries",
      vendor: "Payroll System",
      amount: 118000,
      status: "completed",
      center: "All Centers",
    },
    {
      id: "TXN002",
      date: "2024-06-07",
      category: "Rent & Facilities",
      vendor: "Property Management",
      amount: 28000,
      status: "completed",
      center: "Delhi Center",
    },
    {
      id: "TXN003",
      date: "2024-06-07",
      category: "Supplies & Materials",
      vendor: "Office Depot",
      amount: 5600,
      status: "completed",
      center: "Mumbai Center",
    },
    {
      id: "TXN004",
      date: "2024-06-06",
      category: "Marketing",
      vendor: "Google Ads",
      amount: 12000,
      status: "pending",
      center: "All Centers",
    },
    {
      id: "TXN005",
      date: "2024-06-06",
      category: "Utilities",
      vendor: "Power Company",
      amount: 14000,
      status: "completed",
      center: "All Centers",
    },
    {
      id: "TXN006",
      date: "2024-06-05",
      category: "Technology",
      vendor: "Microsoft",
      amount: 8500,
      status: "completed",
      center: "All Centers",
    },
    {
      id: "TXN007",
      date: "2024-06-05",
      category: "Transportation",
      vendor: "Fuel Station",
      amount: 2800,
      status: "completed",
      center: "Bangalore Center",
    },
    {
      id: "TXN008",
      date: "2024-06-04",
      category: "Supplies & Materials",
      vendor: "Study Materials Inc",
      amount: 15000,
      status: "completed",
      center: "Chennai Center",
    },
  ];

  // Calculate totals
  const totalExpenses = monthlyExpenses.reduce(
    (sum, month) => sum + month.total,
    0,
  );
  const totalBudget = monthlyExpenses.reduce(
    (sum, month) => sum + month.budget,
    0,
  );
  const avgMonthly = totalExpenses / monthlyExpenses.length;
  const budgetUtilization = (totalExpenses / totalBudget) * 100;
  const maxExpense = Math.max(...monthlyExpenses.map((m) => m.total));

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
            Expense Tracking
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Comprehensive expense management and budget monitoring
          </p>
        </div>
        <div className="flex items-center gap-3 flex-wrap">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="week">Last Week</option>
            <option value="month">Last Month</option>
            <option value="quarter">Last Quarter</option>
            <option value="year">Last Year</option>
          </select>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Add Expense
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-green-500 text-white rounded-xl hover:bg-green-600 flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Export
          </motion.button>
        </div>
      </motion.div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            label: "Total Expenses",
            value: `₹${(totalExpenses / 100000).toFixed(2)}L`,
            change: "+12.5%",
            icon: DollarSign,
            color: "from-red-500 to-orange-500",
            isPositive: false,
            subtitle: "vs last year",
          },
          {
            label: "Monthly Average",
            value: `₹${(avgMonthly / 1000).toFixed(0)}K`,
            change: "+8.2%",
            icon: BarChart3,
            color: "from-blue-500 to-cyan-500",
            isPositive: false,
            subtitle: "per month",
          },
          {
            label: "Budget Utilization",
            value: `${budgetUtilization.toFixed(1)}%`,
            change: `₹${((totalBudget - totalExpenses) / 1000).toFixed(0)}K saved`,
            icon: PieChart,
            color: "from-green-500 to-emerald-500",
            isPositive: true,
            subtitle: "remaining",
          },
          {
            label: "Categories",
            value: expenseCategories.length,
            change: "3 over budget",
            icon: Package,
            color: "from-purple-500 to-pink-500",
            isPositive: false,
            subtitle: "expense types",
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
              <div className="text-3xl font-bold text-slate-800 dark:text-white mb-2">
                {stat.value}
              </div>
              <div className="flex items-center justify-between">
                <div
                  className={`flex items-center gap-1 text-sm font-medium ${stat.isPositive ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}
                >
                  {stat.isPositive ? (
                    <ArrowDownRight className="w-4 h-4" />
                  ) : (
                    <ArrowUpRight className="w-4 h-4" />
                  )}
                  <span>{stat.change}</span>
                </div>
                <span className="text-xs text-slate-500 dark:text-slate-500">
                  {stat.subtitle}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Monthly Expense Trend */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700"
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-slate-800 dark:text-white">
              Monthly Expense Trend
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              Expenses vs Budget over 12 months
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <span className="text-sm text-slate-600 dark:text-slate-400">
                Expenses
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              <span className="text-sm text-slate-600 dark:text-slate-400">
                Budget
              </span>
            </div>
          </div>
        </div>

        {/* Bar Chart */}
        <div className="relative h-80">
          <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-xs text-slate-600 dark:text-slate-400 pr-2">
            <span>₹{(maxExpense / 1000).toFixed(0)}K</span>
            <span>₹{((maxExpense / 1000) * 0.75).toFixed(0)}K</span>
            <span>₹{((maxExpense / 1000) * 0.5).toFixed(0)}K</span>
            <span>₹{((maxExpense / 1000) * 0.25).toFixed(0)}K</span>
            <span>₹0</span>
          </div>

          <div className="absolute left-12 right-0 top-0 bottom-8">
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="absolute w-full border-t border-slate-200 dark:border-slate-700"
                style={{ top: `${i * 25}%` }}
              />
            ))}

            <div className="h-full flex items-end justify-between gap-2">
              {monthlyExpenses.map((data, index) => (
                <div
                  key={index}
                  className="flex-1 flex flex-col items-center gap-1 h-full justify-end"
                >
                  {/* Budget bar (background) */}
                  <motion.div
                    className="w-full bg-blue-200 dark:bg-blue-900/30 rounded-t-lg relative group"
                    style={{ height: `${(data.budget / maxExpense) * 100}%` }}
                    initial={{ height: 0 }}
                    animate={{ height: `${(data.budget / maxExpense) * 100}%` }}
                    transition={{ delay: 0.5 + index * 0.05, duration: 0.5 }}
                  >
                    {/* Expense bar (foreground) */}
                    <motion.div
                      className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-red-500 to-orange-500 rounded-t-lg"
                      style={{ height: `${(data.total / data.budget) * 100}%` }}
                      initial={{ height: 0 }}
                      animate={{
                        height: `${(data.total / data.budget) * 100}%`,
                      }}
                      transition={{ delay: 0.7 + index * 0.05, duration: 0.5 }}
                    />

                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                      <div className="bg-slate-900 dark:bg-slate-700 text-white text-xs rounded-lg px-3 py-2 whitespace-nowrap">
                        <div className="font-semibold mb-1">{data.month}</div>
                        <div>Expense: ₹{(data.total / 1000).toFixed(0)}K</div>
                        <div>Budget: ₹{(data.budget / 1000).toFixed(0)}K</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>

            {/* X-axis labels */}
            <div className="absolute -bottom-6 left-0 right-0 flex justify-between text-xs text-slate-600 dark:text-slate-400">
              {monthlyExpenses.map((data, i) => (
                <span key={i} className="flex-1 text-center">
                  {data.month}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Expense Categories - Pie Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700"
      >
        <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-6">
          Expense by Category
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Donut Chart */}
          <div className="flex items-center justify-center">
            <div className="relative w-80 h-80">
              <svg className="w-full h-full transform -rotate-90">
                {(() => {
                  let cumulativePercentage = 0;
                  return expenseCategories.map((category, index) => {
                    const startAngle = (cumulativePercentage / 100) * 360;
                    cumulativePercentage += category.percentage;
                    const endAngle = (cumulativePercentage / 100) * 360;

                    const startRad = (startAngle * Math.PI) / 180;
                    const endRad = (endAngle * Math.PI) / 180;

                    const x1 = 160 + 120 * Math.cos(startRad);
                    const y1 = 160 + 120 * Math.sin(startRad);
                    const x2 = 160 + 120 * Math.cos(endRad);
                    const y2 = 160 + 120 * Math.sin(endRad);

                    const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;

                    const pathData = [
                      `M 160 160`,
                      `L ${x1} ${y1}`,
                      `A 120 120 0 ${largeArcFlag} 1 ${x2} ${y2}`,
                      `Z`,
                    ].join(" ");

                    const colors = {
                      "from-blue-500 to-cyan-500": "#3b82f6",
                      "from-green-500 to-emerald-500": "#10b981",
                      "from-yellow-500 to-orange-500": "#f59e0b",
                      "from-purple-500 to-pink-500": "#a855f7",
                      "from-orange-500 to-red-500": "#f97316",
                      "from-indigo-500 to-purple-500": "#6366f1",
                      "from-teal-500 to-cyan-500": "#14b8a6",
                      "from-slate-500 to-gray-500": "#64748b",
                    };

                    return (
                      <motion.path
                        key={index}
                        d={pathData}
                        fill={colors[category.color]}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                      />
                    );
                  });
                })()}

                {/* Center circle */}
                <circle
                  cx="160"
                  cy="160"
                  r="80"
                  fill="currentColor"
                  className="text-white dark:text-slate-800"
                />
              </svg>

              <div className="absolute inset-0 flex items-center justify-center flex-col">
                <div className="text-3xl font-bold text-slate-800 dark:text-white">
                  ₹
                  {(
                    expenseCategories.reduce((sum, c) => sum + c.amount, 0) /
                    100000
                  ).toFixed(1)}
                  L
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Total Expenses
                </div>
              </div>
            </div>
          </div>

          {/* Category List */}
          <div className="space-y-3">
            {expenseCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.05 }}
                className={`p-4 rounded-xl ${category.bgColor} border-l-4 border-${category.color.split(" ")[0].replace("from-", "")}`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center`}
                    >
                      <category.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-800 dark:text-white">
                        {category.name}
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-400">
                        {category.transactions} transactions
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-slate-800 dark:text-white">
                      ₹{(category.amount / 1000).toFixed(0)}K
                    </div>
                    <div
                      className={`text-xs ${category.trend >= 0 ? "text-red-600 dark:text-red-400" : "text-green-600 dark:text-green-400"}`}
                    >
                      {category.trend >= 0 ? "+" : ""}
                      {category.trend}%
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600 dark:text-slate-400">
                    Budget: ₹{(category.budget / 1000).toFixed(0)}K
                  </span>
                  <span
                    className={`font-medium ${category.amount <= category.budget ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}
                  >
                    {category.amount <= category.budget
                      ? "Within Budget"
                      : "Over Budget"}
                  </span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 mt-2 overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                    initial={{ width: 0 }}
                    animate={{
                      width: `${Math.min((category.amount / category.budget) * 100, 100)}%`,
                    }}
                    transition={{ delay: 0.9 + index * 0.05, duration: 0.5 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Recent Transactions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0 }}
        className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-slate-800 dark:text-white">
            Recent Transactions
          </h2>
          <button className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">
            View All
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-700">
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-600 dark:text-slate-400">
                  ID
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-600 dark:text-slate-400">
                  Date
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-600 dark:text-slate-400">
                  Category
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-600 dark:text-slate-400">
                  Vendor
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-600 dark:text-slate-400">
                  Center
                </th>
                <th className="px-4 py-3 text-right text-sm font-semibold text-slate-600 dark:text-slate-400">
                  Amount
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
              {recentTransactions.map((transaction, index) => (
                <motion.tr
                  key={transaction.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 + index * 0.05 }}
                  className="border-b border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                >
                  <td className="px-4 py-4 text-sm font-medium text-slate-800 dark:text-white">
                    {transaction.id}
                  </td>
                  <td className="px-4 py-4 text-sm text-slate-600 dark:text-slate-400">
                    {transaction.date}
                  </td>
                  <td className="px-4 py-4 text-sm text-slate-800 dark:text-white">
                    {transaction.category}
                  </td>
                  <td className="px-4 py-4 text-sm text-slate-600 dark:text-slate-400">
                    {transaction.vendor}
                  </td>
                  <td className="px-4 py-4 text-sm text-slate-600 dark:text-slate-400">
                    {transaction.center}
                  </td>
                  <td className="px-4 py-4 text-sm font-bold text-red-600 dark:text-red-400 text-right">
                    -₹{transaction.amount.toLocaleString()}
                  </td>
                  <td className="px-4 py-4 text-center">
                    <span
                      className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                        transaction.status === "completed"
                          ? "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
                          : "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400"
                      }`}
                    >
                      {transaction.status === "completed" ? (
                        <CheckCircle className="w-3 h-3" />
                      ) : (
                        <Clock className="w-3 h-3" />
                      )}
                      {transaction.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <button className="p-1 hover:bg-slate-200 dark:hover:bg-slate-600 rounded transition-colors">
                        <Eye className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                      </button>
                      <button className="p-1 hover:bg-slate-200 dark:hover:bg-slate-600 rounded transition-colors">
                        <Edit className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};

export default Expenses;
