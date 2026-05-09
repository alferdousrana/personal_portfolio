import { useMemo, useState } from "react";
import "./BlogSection.css";
import { Link } from "react-router-dom";
import { getMediaUrl } from "../api/mediaUrl";

function BlogSection({ projects = [] }) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // SAFE DATA
  const safeProjects = useMemo(() => {
    return projects.map((project) => ({
      id: project.id,
      title: project.title || "Untitled Project",
      slug:
        project.slug ||
        project.title
          ?.toLowerCase()
          .replace(/[^a-z0-9]+/g, "-"),

      category: project.category || "Design",
      tag: project.tag || "UI/UX",

      excerpt:
        project.excerpt ||
        project.description ||
        "Project details coming soon.",

      description: project.description || "",

      image: project.image || "/images/project1.jpg",

      featured: project.featured !== false,
    }));
  }, [projects]);

  // FILTER FEATURED
  const featuredProjects = safeProjects.filter(
    (project) => project.featured
  );

  // CATEGORY LIST
  const categories = [
    ...new Set(featuredProjects.map((project) => project.category)),
  ];

  // TAG LIST
  const tags = [
    ...new Set(featuredProjects.map((project) => project.tag)),
  ];

  // FILTER
  const filteredProjects = useMemo(() => {
    return featuredProjects.filter((project) => {
      const matchCategory = selectedCategory
        ? project.category === selectedCategory
        : true;

      const matchTag = selectedTag
        ? project.tag === selectedTag
        : true;

      const matchSearch = searchTerm
        ? project.title
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
        : true;

      return matchCategory && matchTag && matchSearch;
    });
  }, [
    featuredProjects,
    selectedCategory,
    selectedTag,
    searchTerm,
  ]);

  const mainProject = filteredProjects[0];
  const sideProjects = filteredProjects.slice(1, 5);

  return (
    <section className="blog-section" id="projects">
      <div className="container">

        <div className="blog-header">
          <h1 className="section-bg-title center">Projects</h1>
          <h2 className="section-title">Recent Works</h2>

          <p>
            UI/UX design projects, research, and achievements.
            Explore my latest work and insights in design and
            technology.
          </p>
        </div>

        {/* FILTER */}
        <div className="blog-filter-bar">

          <select
            value={selectedCategory}
            onChange={(e) =>
              setSelectedCategory(e.target.value)
            }
          >
            <option value="">Categories</option>

            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>

          <select
            value={selectedTag}
            onChange={(e) =>
              setSelectedTag(e.target.value)
            }
          >
            <option value="">Tags</option>

            {tags.map((tag, index) => (
              <option key={index} value={tag}>
                {tag}
              </option>
            ))}
          </select>

          <input
            type="text"
            placeholder="Enter a search term..."
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(e.target.value)
            }
          />

          <button
            onClick={() => {
              setSelectedCategory("");
              setSelectedTag("");
              setSearchTerm("");
            }}
          >
            Reset
          </button>
        </div>

        {/* PROJECTS */}
        {filteredProjects.length > 0 ? (
          <>

            {/* MAIN */}
            <div className="blog-grid">

              <Link
                to={`/projects/${mainProject.slug}`}
                className="blog-main-card"
              >
                <img
                  src={getMediaUrl(mainProject.image)}
                  alt={mainProject.title}
                />

                <div className="blog-card-content">

                  <span>
                    {mainProject.category} |{" "}
                    {mainProject.tag}
                  </span>

                  <h3>{mainProject.title}</h3>

                  <p>{mainProject.excerpt}</p>
                </div>
              </Link>

              {/* SIDE */}
              <div className="blog-side-grid">

                {sideProjects.map((project) => (
                  <Link
                    key={project.id}
                    to={`/projects/${project.slug}`}
                    className="blog-small-card"
                  >
                    <img
                      src={getMediaUrl(project.image)}
                      alt={project.title}
                    />

                    <div>

                      <span>
                        {project.category} |{" "}
                        {project.tag}
                      </span>

                      <h4>{project.title}</h4>

                    </div>
                  </Link>
                ))}

              </div>

            </div>

          </>
        ) : (
          <div className="blog-empty">
            <h3>No project found</h3>
            <p>
              Try another category, tag, or search term.
            </p>
          </div>
        )}

        <div className="blog-explore">
          <Link to="/projects">Explore More</Link>
        </div>

      </div>
    </section>
  );
}

export default BlogSection;