import { useState, useEffect } from "react";
import { fetchTopics } from "../../utils/api";
import { Link } from "react-router-dom";
// import "./TopicsList.css";

export default function TopicsList() {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTopics()
      .then((fetchedTopics) => {
        setTopics(fetchedTopics);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch topics.");
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading topics...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="topics-list">
      {topics.map((topic) => (
        <Link key={topic.slug} to={`/topics/${topic.slug}`}>
          {topic.slug}
        </Link>
      ))}
    </div>
  );
}