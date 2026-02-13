import { motion } from "framer-motion";
import { Video, Users, Clock, ExternalLink } from "lucide-react";

const LiveClassCard = ({ liveClass, index }) => {
  const isLive = liveClass.status === "Live";

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative bg-white dark:bg-slate-800 rounded-xl p-4 shadow-md border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all group"
    >
      {/* Live indicator */}
      {isLive && (
        <div className="absolute top-4 right-4">
          <div className="flex items-center gap-2 px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-full">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-xs font-bold text-red-500">LIVE</span>
          </div>
        </div>
      )}

      <div className="flex items-start gap-4">
        <div className="p-3 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg">
          <Video className="w-5 h-5 text-white" />
        </div>

        <div className="flex-1">
          <h4 className="font-bold text-slate-800 dark:text-white mb-1 pr-20">
            {liveClass.title}
          </h4>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
            {liveClass.trainer} • {liveClass.course}
          </p>

          <div className="flex items-center gap-4 text-xs text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{liveClass.time}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-3.5 h-3.5" />
              <span>{liveClass.students}</span>
            </div>
          </div>

          {isLive && (
            <button className="mt-3 flex items-center gap-2 px-3 py-1.5 bg-indigo-500 hover:bg-indigo-600 text-white text-xs font-semibold rounded-lg transition-colors">
              <span>Join Class</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default LiveClassCard;
