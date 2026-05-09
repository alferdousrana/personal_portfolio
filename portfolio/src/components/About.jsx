import "./About.css";

function About({ aboutData, skills = [] }) {
  return (
    <section className="about" id="about">
      <div className="container about-container">
        <div className="about-left">
          <div className="about-card">
            <h3>Profile Info</h3>

            <p>
              <strong>Name:</strong> {aboutData.name}
            </p>
            <p>
              <strong>Role:</strong> {aboutData.role}
            </p>
            <p>
              <strong>Experience:</strong> {aboutData.experience}
            </p>
            <p>
              <strong>Address:</strong> {aboutData.address}
            </p>

            {aboutData.email && (
              <p>
                <strong>Email:</strong> {aboutData.email}
              </p>
            )}

            {aboutData.phone && (
              <p>
                <strong>Phone:</strong> {aboutData.phone}
              </p>
            )}

            <div className="skills-box">
              <h3>Skills</h3>

              {skills.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-top">
                    <span>{skill.name}</span>
                    <span>{skill.percentage}%</span>
                  </div>

                  <div className="skill-line">
                    <div
                      className="skill-progress"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="about-right">
          <h1 className="section-bg-title">About</h1>
          <h2 className="section-title">About Me</h2>

          <p className="about-description">{aboutData.description}</p>

          <ul className="about-list">
            {aboutData.details?.map((item, index) => (
              <li key={index}>
                <strong>{item.label}:</strong> {item.value}
              </li>
            ))}
          </ul>

          <div className="about-stats">
            {aboutData.stats?.map((stat, index) => (
              <div className="about-stat-card" key={index}>
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
