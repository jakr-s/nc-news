import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ArticleList from "./components/ArticleList/ArticleList";
import ArticlePage from "./components/ArticlePage/ArticlePage";
import fetchArticles from "./utils/api";

export default function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles().then((fetchedArticles) => {
      setArticles(fetchedArticles);
    });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<ArticleList articles={articles} />} />
      <Route path="/articles/:article_id" element={<ArticlePage />} />
    </Routes>
  );
}
