import { useState, useEffect } from 'react';
import ArticleCard from './components/ArticleCard/ArticleCard';
import fetchArticles from './utils/api';

export default function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles().then((fetchedArticles) => {
      setArticles(fetchedArticles);
    });
  }, []);

  return (
    <>
      <ArticleCard articles={articles} />
    </>
  );
}