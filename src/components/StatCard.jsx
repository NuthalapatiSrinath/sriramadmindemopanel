import { motion } from "framer-motion";
import { TrendingUp, TrendingDown } from "lucide-react";

const StatCard = ({
  title,
  value,
  icon: Icon,
  color = "indigo",
  trend,
  delay = 0,
  subtitle,
}) => {
  const colorClasses = {
    indigo: "from-indigo-500 to-indigo-600 shadow-indigo-500/20",
    purple: "from-purple-500 to-purple-600 shadow-purple-500/20",
    pink: "from-pink-500 to-pink-600 shadow-pink-500/20",
    blue: "from-blue-500 to-blue-600 shadow-blue-500/20",
    green: "from-green-500 to-green-600 shadow-green-500/20",
    yellow: "from-yellow-500 to-yellow-600 shadow-yellow-500/20",
    red: "from-red-500 to-red-600 shadow-red-500/20",
    orange: "from-orange-500 to-orange-600 shadow-orange-500/20",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="relative group"
    >
      <div
        className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl"
        style={{
          background: `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
        }}
      />

      <div className="relative bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300">
        {/* Icon */}
        <div className="flex items-start justify-between mb-4">
          <div
            className={`p-3 rounded-xl bg-gradient-to-br ${colorClasses[color]} shadow-lg`}
          >
            <Icon className="w-6 h-6 text-white" />
          </div>
          {trend && (
            <div
              className={`flex items-center gap-1 text-sm font-semibold ${trend > 0 ? "text-green-500" : "text-red-500"}`}
            >
              {trend > 0 ? (
                <TrendingUp className="w-4 h-4" />
              ) : (
                <TrendingDown className="w-4 h-4" />
              )}
              <span>{Math.abs(trend)}%</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">
            {title}
          </p>
          <p className="text-3xl font-bold text-slate-800 dark:text-white mb-1">
            {value}
          </p>
          {subtitle && (
            <p className="text-xs text-slate-400 dark:text-slate-500">
              {subtitle}
            </p>
          )}
        </div>

        {/* Decorative gradient line */}
        <div
          className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${colorClasses[color]} rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
        />
      </div>
    </motion.div>
  );
};

export default StatCard;
