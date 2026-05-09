import { Link, useParams } from "react-router-dom";
import fallbackData from "../data/fallbackData";
import { getMediaUrl } from "../api/mediaUrl";

function BlogDetails() {
  const { slug } = useParams();

  const blog = fallbackData.blogs.find((item) => item.slug === slug);

  if (!blog) {
    return (
      <section style={{ padding: "80px 0" }}>
        <div className="container">
          <h1>Blog not found</h1>
          <Link to="/blogs" style={{ color: "orange" }}>Back to Blogs</Link>
        </div>
      </section>
    );
  }

  return (
    <section style={{ padding: "80px 0" }}>
      <div className="container" style={{ maxWidth: "900px" }}>
        <Link to="/blogs" style={{ color: "orange" }}>
          ← Back to Blogs
        </Link>

        <img
          src={getMediaUrl(blog.image)}
          alt={blog.title}
          style={{
            width: "100%",
            height: "420px",
            objectFit: "cover",
            borderRadius: "12px",
            marginTop: "30px",
          }}
        />

        <p style={{ marginTop: "25px", color: "var(--muted-color)" }}>
          {blog.category} | {blog.tag} | {blog.date}
        </p>

        <h1 style={{ marginTop: "15px", fontSize: "42px" }}>
          {blog.title}
        </h1>

        <p
          style={{
            marginTop: "20px",
            color: "var(--muted-color)",
            lineHeight: "1.8",
            fontSize: "18px",
          }}
        >
          {blog.excerpt}
        </p>
      </div>
    </section>
  );
}

export default BlogDetails;