import { motion } from "framer-motion";
import {
  DollarSign,
  TrendingUp,
  Receipt,
  CreditCard,
  Download,
  FileText,
} from "lucide-react";
import { payments, coupons, expenses } from "../data/staticData";
import { useSelector } from "react-redux";

const Finance = () => {
  const { selectedCenter } = useSelector((state) => state.auth);
  const centerExpenses = expenses[selectedCenter] || expenses["All Centers"];

  const filteredPayments =
    selectedCenter === "All Centers"
      ? payments
      : payments.filter((p) => p.center === selectedCenter);

  const totalRevenue = filteredPayments.reduce(
    (sum, p) => sum + (p.status === "Paid" ? p.amount : 0),
    0,
  );
  const pendingRevenue = filteredPayments.reduce(
    (sum, p) => sum + (p.status === "Pending" ? p.amount : 0),
    0,
  );
  const totalExpenses = centerExpenses.reduce((sum, e) => sum + e.amount, 0);

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold text-slate-800 dark:text-white mb-2">
          Finance & Revenue
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          Manage payments, expenses and financial reports
        </p>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          {
            label: "Total Revenue",
            value: `₹${(totalRevenue / 100000).toFixed(2)}L`,
            icon: DollarSign,
            color: "from-green-500 to-green-600",
          },
          {
            label: "Pending Amount",
            value: `₹${(pendingRevenue / 100000).toFixed(2)}L`,
            icon: CreditCard,
            color: "from-yellow-500 to-yellow-600",
          },
          {
            label: "Total Expenses",
            value: `₹${(totalExpenses / 100000).toFixed(2)}L`,
            icon: Receipt,
            color: "from-red-500 to-red-600",
          },
          {
            label: "Net Profit",
            value: `₹${((totalRevenue - totalExpenses) / 100000).toFixed(2)}L`,
            icon: TrendingUp,
            color: "from-blue-500 to-blue-600",
          },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700"
          >
            <div className="flex items-center justify-between mb-3">
              <div
                className={`p-3 rounded-xl bg-gradient-to-br ${stat.color} shadow-lg`}
              >
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
              {stat.label}
            </p>
            <p className="text-2xl font-bold text-slate-800 dark:text-white">
              {stat.value}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Payments */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-slate-800 dark:text-white">
              Recent Payments
            </h3>
            <button className="text-indigo-500 hover:text-indigo-600 text-sm font-semibold">
              View All
            </button>
          </div>

          <div className="space-y-3">
            {filteredPayments.slice(0, 5).map((payment, index) => (
              <motion.div
                key={payment.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="p-4 bg-slate-50 dark:bg-slate-700 rounded-lg"
              >
                <div className="flex items-center justify-between mb-2">
                  <p className="font-semibold text-slate-800 dark:text-white">
                    {payment.student}
                  </p>
                  <span
                    className={`px-2 py-1 text-xs font-semibold rounded-lg ${
                      payment.status === "Paid"
                        ? "bg-green-500/10 text-green-500"
                        : payment.status === "Pending"
                          ? "bg-yellow-500/10 text-yellow-500"
                          : "bg-red-500/10 text-red-500"
                    }`}
                  >
                    {payment.status}
                  </span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                  {payment.course}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">{payment.method}</span>
                  <span className="font-bold text-slate-800 dark:text-white">
                    ₹{payment.amount.toLocaleString()}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Expenses */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-slate-800 dark:text-white">
              Expenses Breakdown
            </h3>
            <button className="text-indigo-500 hover:text-indigo-600 text-sm font-semibold">
              Add Expense
            </button>
          </div>

          <div className="space-y-3">
            {centerExpenses.map((expense, index) => (
              <motion.div
                key={expense.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="p-4 bg-slate-50 dark:bg-slate-700 rounded-lg"
              >
                <div className="flex items-center justify-between mb-2">
                  <p className="font-semibold text-slate-800 dark:text-white">
                    {expense.category}
                  </p>
                  <span className="font-bold text-red-600 dark:text-red-400">
                    -₹{(expense.amount / 1000).toFixed(0)}K
                  </span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                  {expense.description}
                </p>
                <p className="text-xs text-slate-500">{expense.date}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Active Coupons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-bold text-slate-800 dark:text-white">
              Active Coupons
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Manage discount codes
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg"
          >
            Create Coupon
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {coupons.map((coupon, index) => (
            <motion.div
              key={coupon.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="p-4 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-slate-700 dark:to-slate-600 rounded-xl border-2 border-dashed border-indigo-300 dark:border-indigo-500"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-1">
                    {coupon.code}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    {coupon.type === "Percentage"
                      ? `${coupon.discount}% OFF`
                      : `₹${coupon.discount} OFF`}
                  </p>
                </div>
                <span
                  className={`px-2 py-1 text-xs font-semibold rounded-lg ${
                    coupon.status === "Active"
                      ? "bg-green-500/10 text-green-600"
                      : "bg-gray-500/10 text-gray-600"
                  }`}
                >
                  {coupon.status}
                </span>
              </div>
              <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
                <span>
                  Used: {coupon.used}/{coupon.usageLimit}
                </span>
                <span>Expires: {coupon.expiryDate}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Finance;
