import "./Hero.css";
import { getMediaUrl } from "../api/mediaUrl";

function Hero({ heroData }) {
  return (
    <section className="hero">
      <div className="container hero-container">
        
        <div className="hero-left">
          <h4 className="hero-welcome">
            {heroData.welcomeText}
          </h4>

          <h1 className="hero-title">
            {heroData.name}
          </h1>

          <h2 className="hero-role">
            {heroData.title}
          </h2>

          <p className="hero-subtitle">
            {heroData.subtitle}
          </p>

          <div className="hero-buttons">
            <a
              href={heroData.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hero-btn"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="hero-right">
          <img
            src={getMediaUrl(heroData.image)}
            alt="profile"
            className="hero-image"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;