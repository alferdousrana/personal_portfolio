import { useState } from "react";
import "./Experience.css";
import { getMediaUrl } from "../api/mediaUrl";

function TimelineCard({ item, side }) {
  const [activeTab, setActiveTab] = useState("responsibilities");

  return (
    <div className={`timeline-item ${side}`}>
      <div className="timeline-content">

        {/* ── Image ── */}
        <div className="timeline-image-box">
          <img
            src={getMediaUrl(item.image)}
            alt={item.company}
            className="timeline-image"
          />
          <div className="timeline-image-overlay">
            <span className="timeline-year">{item.year}</span>
            <span className="timeline-type-badge">{item.type}</span>
          </div>
        </div>

        {/* ── Body ── */}
        <div className="timeline-body">
          <h3>{item.title}</h3>
          <h4>{item.company}</h4>

          {/* ── Tabs ── */}
          <div className="timeline-tabs">
            <button
              className={`timeline-tab-btn ${activeTab === "responsibilities" ? "active" : ""}`}
              onClick={() => setActiveTab("responsibilities")}
            >
              Responsibilities
            </button>
            <button
              className={`timeline-tab-btn ${activeTab === "achievements" ? "active" : ""}`}
              onClick={() => setActiveTab("achievements")}
            >
              Achievements
            </button>
          </div>

          {/* ── Tab Content ── */}
          <div className="timeline-tab-content">
            <ul className="timeline-list">
              {(activeTab === "responsibilities"
                ? item.responsibilities
                : item.achievements
              ).map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="timeline-dot"></div>
    </div>
  );
}

function Experience({ experience = [] }) {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <div className="experience-header">
          <h1 className="section-bg-title center">Experience</h1>
          <h2 className="section-title">Work Experience</h2>
          <p>
            A journey of professional growth, leadership, and impactful
            contributions across healthcare, technology, and education.
          </p>
        </div>

        <div className="timeline">
          {experience.map((item, index) => (
            <TimelineCard
              key={item.id}
              item={item}
              side={index % 2 === 0 ? "left" : "right"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;