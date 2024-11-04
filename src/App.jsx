import { useState, useEffect } from "react";
import ArticleList from "./components/ArticleList/ArticleList";
import fetchArticles from "./utils/api";

export default function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles().then((fetchedArticles) => {
      setArticles(fetchedArticles);
    });
  }, []);

  return (
    <>
      <ArticleList articles={articles} />
    </>
  );
}
