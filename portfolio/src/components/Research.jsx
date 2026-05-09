import "./Research.css";
import { FaGraduationCap } from "react-icons/fa";

function Research({ research = [], education = [] }) {
  return (
    <section className="research-education" id="research">
      <div className="container">
        <div className="section-heading">
          <h1 className="section-bg-title center">Research</h1>
          <h2 className="section-title">Thesis & Research</h2>
          <p>
            Academic research works and thesis projects focused on public
            health, hospital management, and clinical health awareness.
          </p>
        </div>

        <div className="research-slider-layout">
          <div className="research-label-card">
            <h3>
              RE
              <br />
              SEARCH
            </h3>
          </div>

          <div className="research-cards">
            {research.map((item, index) => (
              <div className="research-card" key={index}>
                <div className="research-icon">↗</div>

                <h3>{item.title}</h3>
                <h4>{item.institute}</h4>

                <p>{item.description}</p>

                <a
                  href={item.link || "#"}
                  target="_blank"
                  rel="noreferrer"
                  className="read-more-btn"
                >
                  Read More
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="section-heading education-heading">
          <h1 className="section-bg-title center">Education</h1>
          <h2 className="education-title">Education</h2>
        </div>

        <div className="education-grid">
          {education.map((item, index) => (
            <div className="education-card" key={index}>
              <div className="education-icon">
                <FaGraduationCap />
              </div>

              <span>{item.date}</span>
              <h3>{item.title}</h3>
              <h4>{item.institute}</h4>

              {item.grade && <p>{item.grade}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Research;
