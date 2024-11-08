import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import { fetchArticles } from "../../utils/api";
import "./ArticleList.css";

export default function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchArticles()
      .then((fetchedArticles) => {
        setArticles(fetchedArticles);
        setLoading(false);
      })
      .catch((error) => {
        setError("Failed to fetch articles.");
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading articles...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="article-list">
      {articles.map((article) => (
        <ArticleCard key={article.article_id} article={article} />
      ))}
    </div>
  );
}
