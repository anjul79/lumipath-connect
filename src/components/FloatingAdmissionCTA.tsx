import { Link } from "react-router-dom";

const FloatingAdmissionCTA = () => {
  return (
    <Link
      to="/contact"
      className="fixed top-1/2 right-0 -translate-y-1/2 z-50 bg-gradient-to-r from-primary to-secondary text-primary-foreground px-4 py-3 rounded-l-lg shadow-lg cursor-pointer hover:scale-105 transition-transform animate-pulse"
      style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
    >
      <span className="font-bold text-sm tracking-wide">
        🎓 Admission Open 2026-27
      </span>
    </Link>
  );
};

export default FloatingAdmissionCTA;
