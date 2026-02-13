import { motion } from "framer-motion";
import { Mail, Phone, Calendar, TrendingUp } from "lucide-react";
import { enquiries } from "../data/staticData";

const RecentEnquiries = () => {
  const recentEnquiries = enquiries.slice(0, 5);

  const getStatusColor = (status) => {
    switch (status) {
      case "New":
        return "bg-blue-500/10 text-blue-500 border-blue-500/20";
      case "Contacted":
        return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
      case "Converted":
        return "bg-green-500/10 text-green-500 border-green-500/20";
      default:
        return "bg-gray-500/10 text-gray-500 border-gray-500/20";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold text-slate-800 dark:text-white">
            Recent Enquiries
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Latest leads from website
          </p>
        </div>
        <div className="p-2 rounded-lg bg-indigo-500/10">
          <TrendingUp className="w-5 h-5 text-indigo-500" />
        </div>
      </div>

      <div className="space-y-3">
        {recentEnquiries.map((enquiry, index) => (
          <motion.div
            key={enquiry.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
            className="p-4 rounded-xl bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 hover:shadow-md transition-all"
          >
            <div className="flex items-start justify-between mb-2">
              <div>
                <h4 className="font-bold text-slate-800 dark:text-white text-sm">
                  {enquiry.name}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {enquiry.course}
                </p>
              </div>
              <span
                className={`px-2 py-1 text-xs font-semibold rounded-lg border ${getStatusColor(enquiry.status)}`}
              >
                {enquiry.status}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-1">
                <Mail className="w-3 h-3" />
                <span className="truncate">{enquiry.email}</span>
              </div>
              <div className="flex items-center gap-1">
                <Phone className="w-3 h-3" />
                <span>{enquiry.phone}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                <span>{enquiry.date}</span>
              </div>
              <div className="text-right font-medium text-slate-700 dark:text-slate-300">
                {enquiry.source}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default RecentEnquiries;
