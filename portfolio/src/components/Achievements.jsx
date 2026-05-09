import { useRef, useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import "./Achievements.css";
import { getMediaUrl } from "../api/mediaUrl";

function Achievements({ achievements = [] }) {
  const trackRef = useRef(null);
  const [paused, setPaused] = useState(false);
  const offsetRef = useRef(0);
  const rafRef = useRef(null);
  const lastTimeRef = useRef(null);

  const SPEED = 0.05; // px per ms

  // JS-driven scroll so we can jump on button press
  const animate = useCallback((timestamp) => {
    if (!trackRef.current) return;

    if (lastTimeRef.current !== null && !paused) {
      const delta = timestamp - lastTimeRef.current;
      offsetRef.current += SPEED * delta;

      // total width = half (we duplicated array)
      const halfWidth = trackRef.current.scrollWidth / 2;
      if (offsetRef.current >= halfWidth) {
        offsetRef.current -= halfWidth;
      }

      trackRef.current.style.transform = `translateX(-${offsetRef.current}px)`;
    }

    lastTimeRef.current = timestamp;
    rafRef.current = requestAnimationFrame(animate);
  }, [paused]);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [animate]);

  const CARD_WIDTH = 320 + 28; // width + gap

  const handlePrev = () => {
    offsetRef.current = Math.max(0, offsetRef.current - CARD_WIDTH);
  };

  const handleNext = () => {
    offsetRef.current += CARD_WIDTH;
  };

  const doubled = [...achievements, ...achievements];

  return (
    <section className="achievements" id="achievements">
      <div className="container">
        <div className="achievement-header">
          <h1 className="section-bg-title center">Awards</h1>
          <h2 className="section-title">Awards & Honors</h2>
          <p>
            Recognitions, achievements, and milestones from national and
            international platforms.
          </p>
        </div>

        <div
          className="achievement-scroll-wrapper"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="achievement-track"
            ref={trackRef}
            style={{ animation: "none" }}
          >
            {doubled.map((item, index) => (
              <div className="achievement-card" key={index}>

                <div className="achievement-image-box">
                  <img
                    src={getMediaUrl(item.image)}
                    alt={item.title}
                    className="achievement-image"
                    draggable={false}
                  />
                  <div className="achievement-overlay" />

                  <span className="achievement-type">{item.type}</span>

                  <Link
                    to={`/achievements/${item.id || index + 1}`}
                    className="achievement-arrow"
                    aria-label="View achievement"
                  >
                    ↗
                  </Link>

                  <div className="achievement-trophy-stripe">
                    <span className="achievement-trophy-icon">🏆</span>
                    <span className="achievement-year-badge">{item.year}</span>
                  </div>
                </div>

                <div className="achievement-body">
                  <h3>{item.title}</h3>
                  <div className="achievement-meta">
                    <p>{item.organization}</p>
                    <span className="achievement-meta-dot" />
                    <span>{item.year}</span>
                  </div>
                  <p className="achievement-description">{item.description}</p>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* ── Controls ── */}
        <div className="achievement-controls">
          <button onClick={handlePrev} aria-label="Previous">←</button>
          <button onClick={handleNext} aria-label="Next">→</button>
        </div>
      </div>
    </section>
  );
}

export default Achievements;