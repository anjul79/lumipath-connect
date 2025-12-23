import { Link } from "react-router-dom";
import { GraduationCap } from "lucide-react";

const FloatingAdmissionCTA = () => {
  return (
    <Link
      to="/contact"
      className="floating-cta fixed top-1/2 right-0 -translate-y-1/2 z-50 text-white px-3 py-4 rounded-l-xl cursor-pointer hover:scale-110 transition-transform duration-300"
      style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
    >
      <div className="flex items-center gap-2">
        <GraduationCap className="h-5 w-5 rotate-180" />
        <span className="font-bold text-sm tracking-wider uppercase">
          Admission Open 2026-27
        </span>
        <span className="text-lg">→</span>
      </div>
    </Link>
  );
};

export default FloatingAdmissionCTA;
