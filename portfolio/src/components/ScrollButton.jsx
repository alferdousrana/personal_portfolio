import { useRef } from "react";
import { useScrollProgress } from "../hooks/useScrollProgress";
import "./ScrollButton.css";

function ScrollButton({ footerRef }) {
  const { progress, atFooter } = useScrollProgress(footerRef);
  const circumference = 2 * Math.PI * 22; // r=22

  const handleClick = () => {
    if (atFooter) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <button
      className={`scroll-btn ${atFooter ? "at-footer" : ""}`}
      onClick={handleClick}
      title={atFooter ? "Go to top" : `${progress}% scrolled`}
    >
      <svg className="progress-ring" width="52" height="52">
        <circle cx="26" cy="26" r="22" fill="none"
          stroke="#e0e0e0" strokeWidth="2" />
        <circle cx="26" cy="26" r="22" fill="none"
          stroke={atFooter ? "#1D9E75" : "#7F77DD"}
          strokeWidth="2.5"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - (progress / 100) * circumference}
          strokeLinecap="round"
          style={{ transform: "rotate(-90deg)", transformOrigin: "center", transition: "stroke-dashoffset 0.2s" }}
        />
      </svg>
      <span className="btn-label">
        {atFooter ? "↑" : `${progress}%`}
      </span>
    </button>
  );
}

export default ScrollButton;