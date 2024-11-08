import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import ArticleCard from "./ArticleCard";
import { fetchArticles } from "../../utils/api";
import "./ArticleList.css";

export default function ArticleList() {
  const { topic } = useParams();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const sort_by = searchParams.get("sort_by") || "created_at";
  const order = searchParams.get("order") || "desc";

  useEffect(() => {
    fetchArticles(topic, sort_by, order)
      .then((fetchedArticles) => {
        setArticles(fetchedArticles);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [topic, sort_by, order]);

  if (loading) return <div>Loading articles...</div>;
  if (error)
    return (
      <div>
        <h2>Error</h2>
        <p>{error}</p>
      </div>
    );

  return (
    <div className="article-list">
      <div className="sorting-controls">
        <label>
          Sort by:
          <select
            value={sort_by}
            onChange={(e) => {
              searchParams.set("sort_by", e.target.value);
              setSearchParams(searchParams);
            }}
          >
            <option value="created_at">Date</option>
            <option value="comment_count">Comment Count</option>
            <option value="votes">Votes</option>
          </select>
        </label>
        <label>
          Order:
          <select
            value={order}
            onChange={(e) => {
              searchParams.set("order", e.target.value);
              setSearchParams(searchParams);
            }}
          >
            <option value="desc">Descending</option>
            <option value="asc">Ascending</option>
          </select>
        </label>
      </div>

      {articles.map((article) => (
        <ArticleCard key={article.article_id} article={article} />
      ))}
    </div>
  );
}
