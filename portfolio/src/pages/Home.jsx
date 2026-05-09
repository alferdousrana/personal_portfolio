import { useEffect, useState } from "react";
import { useRef } from "react";
import ScrollButton from "../components/ScrollButton";
import { getPortfolioData } from "../api/portfolioApi";
import Hero from "../components/Hero";
import About from "../components/About";
import Research from "../components/Research";
import Experience from "../components/Experience";
import Achievements from "../components/Achievements";
import Gallery from "../components/Gallery";
import BlogSection from "../components/BlogSection";

function Home() {

  const [portfolio, setPortfolio] = useState(null);
  const footerRef = useRef(null);

  useEffect(() => {

    const loadData = async () => {
      const data = await getPortfolioData();
      setPortfolio(data);
    };

    loadData();

  }, []);

  if (!portfolio) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <Hero heroData={portfolio.hero} />
      <About aboutData={portfolio.about} skills={portfolio.skills} />
      <BlogSection projects={portfolio.projects} />
      <Research research={portfolio.research} education={portfolio.education} />
      <Experience experience={portfolio.experience} />
      <Achievements achievements={portfolio.achievements} />
      <Gallery gallery={portfolio.gallery} />
      <div ref={footerRef}>
        <ScrollButton footerRef={footerRef} />
      </div>

      
    </>
  );
}

export default Home;