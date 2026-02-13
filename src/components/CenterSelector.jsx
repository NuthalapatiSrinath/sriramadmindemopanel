import { useSelector, useDispatch } from "react-redux";
import { setSelectedCenter } from "../store/slices/authSlice";
import { motion } from "framer-motion";
import { MapPin, ChevronDown } from "lucide-react";

const CenterSelector = () => {
  const dispatch = useDispatch();
  const { user, selectedCenter } = useSelector((state) => state.auth);

  if (!user || user.role !== "Super Admin") {
    return null;
  }

  return (
    <div className="relative inline-block">
      <motion.div whileHover={{ scale: 1.02 }} className="relative">
        <select
          value={selectedCenter}
          onChange={(e) => dispatch(setSelectedCenter(e.target.value))}
          className="appearance-none bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2.5 pr-12 rounded-xl font-semibold text-sm border border-white/20 shadow-lg shadow-indigo-500/30 cursor-pointer hover:from-indigo-500 hover:to-purple-500 transition-all outline-none"
        >
          {user.centers.map((center) => (
            <option key={center} value={center} className="bg-slate-800">
              {center}
            </option>
          ))}
        </select>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none flex items-center gap-1">
          <MapPin className="w-4 h-4" />
          <ChevronDown className="w-4 h-4" />
        </div>
      </motion.div>
    </div>
  );
};

export default CenterSelector;
