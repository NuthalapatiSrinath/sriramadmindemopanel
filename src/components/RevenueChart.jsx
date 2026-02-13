import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { revenueChartData } from "../data/staticData";

const RevenueChart = () => {
  const maxRevenue = Math.max(...revenueChartData.map((d) => d.revenue));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold text-slate-800 dark:text-white">
            Revenue Overview
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Last 6 months performance
          </p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-green-500/10 border border-green-500/20 rounded-lg">
          <TrendingUp className="w-4 h-4 text-green-500" />
          <span className="text-sm font-semibold text-green-500">+12.5%</span>
        </div>
      </div>

      <div className="space-y-4">
        {revenueChartData.map((data, index) => {
          const percentage = (data.revenue / maxRevenue) * 100;
          return (
            <div key={data.month} className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-slate-600 dark:text-slate-300">
                  {data.month}
                </span>
                <span className="font-bold text-slate-800 dark:text-white">
                  ₹{(data.revenue / 100000).toFixed(1)}L
                </span>
              </div>
              <div className="relative h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${percentage}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                />
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default RevenueChart;
