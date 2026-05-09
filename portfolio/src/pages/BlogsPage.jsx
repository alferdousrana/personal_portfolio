import { Link } from "react-router-dom";
import fallbackData from "../data/fallbackData";
import { getMediaUrl } from "../api/mediaUrl";

function BlogsPage() {
  const blogs = fallbackData.blogs || [];

  return (
    <section style={{ padding: "80px 0" }}>
      <div className="container">
        <h1 style={{ marginBottom: "35px" }}>All Blogs</h1>

        <div className="blog-side-grid">
          {blogs.map((blog) => (
            <Link to={`/blogs/${blog.slug}`} className="blog-small-card" key={blog.id}>
              <img src={getMediaUrl(blog.image)} alt={blog.title} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
              <div>
                <span>{blog.category} | {blog.tag}</span>
                <h4>{blog.title}</h4>
                <p style={{ color: "var(--muted-color)", marginTop: "10px" }}>
                  {blog.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogsPage;