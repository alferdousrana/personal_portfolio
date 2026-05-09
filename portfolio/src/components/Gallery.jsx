import { useState, useEffect, useRef, useCallback } from "react";
import "./Gallery.css";
import { getMediaUrl } from "../api/mediaUrl";

const POSITIONS = [
  { offset: -2, x: -620, rotateY: 45,  scale: 0.58, opacity: 0.55, zIndex: 1 },
  { offset: -1, x: -310, rotateY: 35,  scale: 0.75, opacity: 0.80, zIndex: 2 },
  { offset:  0, x:    0, rotateY:  0,  scale: 1.00, opacity: 1.00, zIndex: 10 },
  { offset:  1, x:  310, rotateY: -35, scale: 0.75, opacity: 0.80, zIndex: 2 },
  { offset:  2, x:  620, rotateY: -45, scale: 0.58, opacity: 0.55, zIndex: 1 },
];

function getStyle(offset) {
  const abs = Math.abs(offset);

  if (abs > 2) {
    return {
      transform: `translateX(${offset > 0 ? 900 : -900}px) scale(0.4)`,
      opacity: 0,
      zIndex: 0,
      pointerEvents: "none",
    };
  }

  const pos = POSITIONS.find((p) => p.offset === offset);
  return {
    transform: `translateX(${pos.x}px) rotateY(${pos.rotateY}deg) scale(${pos.scale})`,
    opacity: pos.opacity,
    zIndex: pos.zIndex,
    pointerEvents: "auto",
  };
}

function Gallery({ gallery = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);

  const next = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % gallery.length);
  }, [gallery.length]);

  const prev = useCallback(() => {
    setActiveIndex((prev) =>
      prev === 0 ? gallery.length - 1 : prev - 1
    );
  }, [gallery.length]);

  // auto scroll
  const startAuto = useCallback(() => {
    intervalRef.current = setInterval(next, 3000);
  }, [next]);

  const stopAuto = useCallback(() => {
    clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    startAuto();
    return () => stopAuto();
  }, [startAuto, stopAuto]);

  const handlePrev = () => { stopAuto(); prev(); startAuto(); };
  const handleNext = () => { stopAuto(); next(); startAuto(); };

  return (
    <section className="gallery-section" id="gallery">
      <div className="container">
        <div className="gallery-header">
          <h1 className="section-bg-title center">Gallery</h1>
          <h2 className="section-title">Gallery</h2>
          <p>
            A visual collection of events, achievements, and professional moments.
          </p>
        </div>

        <div
          className="coverflow-gallery"
          onMouseEnter={stopAuto}
          onMouseLeave={startAuto}
        >
          {gallery.map((item, index) => {
            const total = gallery.length;
            let offset = index - activeIndex;

            // wrap offset for circular loop
            if (offset > total / 2)  offset -= total;
            if (offset < -total / 2) offset += total;

            return (
              <div
                key={item.id || index}
                className={`gallery-card ${index === activeIndex ? "active" : ""}`}
                style={getStyle(offset)}
                onClick={() => {
                  stopAuto();
                  setActiveIndex(index);
                  startAuto();
                }}
              >
                <img
                  src={getMediaUrl(item.image)}
                  alt={item.alt || `Gallery ${index + 1}`}
                  draggable={false}
                />
              </div>
            );
          })}
        </div>

        <div className="gallery-controls">
          <button onClick={handlePrev} aria-label="Previous">←</button>
          <button onClick={handleNext} aria-label="Next">→</button>
        </div>
      </div>
    </section>
  );
}

export default Gallery;