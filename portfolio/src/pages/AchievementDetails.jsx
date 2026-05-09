import { useParams, Link } from "react-router-dom";

function AchievementDetails() {
  const { id } = useParams();

  return (
    <section style={{ padding: "80px 0" }}>
      <div className="container">
        <Link to="/" style={{ color: "orange" }}>
          ← Back to Home
        </Link>

        <h1 style={{ marginTop: "30px" }}>
          Achievement Details Page
        </h1>

        <p style={{ marginTop: "15px" }}>
          Achievement ID: {id}
        </p>

        <p style={{ marginTop: "15px", color: "var(--muted-color)" }}>
          Details design will be added later. For now this page is ready for dynamic API data.
        </p>
      </div>
    </section>
  );
}

export default AchievementDetails;