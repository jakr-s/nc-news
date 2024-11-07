import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ArticleList from "./components/ArticleList/ArticleList";
import ArticlePage from "./components/ArticlePage/ArticlePage";
import fetchArticles from "./utils/api";

export default function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchArticles()
      .then((fetchedArticles) => {
        setArticles(fetchedArticles);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching articles", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <Routes>
      <Route path="/" element={<ArticleList articles={articles} />} />
      <Route path="/articles/:article_id" element={<ArticlePage />} />
    </Routes>
  );
}
