import { useState, useEffect } from "react";
import { fetchArticleById } from "../../utils/api";
import VoteButton from "../Common/VoteButton";
import { updateArticleVotes } from "../../utils/api";
// import "./ArticleContent.css";

export default function ArticleContent({ article_id }) {
  const [article, setArticle] = useState(null);
  const [loadingArticle, setLoadingArticle] = useState(true);
  const [errorArticle, setErrorArticle] = useState(null);

  useEffect(() => {
    fetchArticleById(article_id)
      .then((fetchedArticle) => {
        setArticle(fetchedArticle);
        setLoadingArticle(false);
      })
      .catch((error) => {
        setErrorArticle(error);
        setLoadingArticle(false);
      });
  }, [article_id]);

  if (loadingArticle) return <p>Loading article...</p>;
  if (errorArticle) return <p>Error loading article: {errorArticle.message}</p>;

  return (
    <div className="article-content">
      <h2>{article.title}</h2>
      <p>By {article.author}</p>
      <p>{article.body}</p>
      <VoteButton
        id={article.article_id}
        votes={article.votes}
        updateVotes={updateArticleVotes}
      />
    </div>
  );
}
