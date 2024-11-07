import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchArticleById } from "../../utils/api";
import CommentList from "../CommentList/CommentList";
import "./ArticlePage.css";
import VoteButton from "../VoteButton/VoteButton";
import { updateArticleVotes } from "../../utils/api";

export default function ArticlePage() {
  const { article_id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchArticleById(article_id)
      .then((fetchedArticle) => {
        setArticle(fetchedArticle);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching article", error);
        setLoading(false);
      });
  }, [article_id]);

  if (loading) return <div>Loading Article...</div>;

  return (
    <div className="page-container">

      <div className="article--container">
        <h1 className="article--title">{article.title}</h1>
        <VoteButton
          id={article_id}
          votes={article.votes}
          updateVotes={updateArticleVotes}
        />
      </div>
      <p className="article--body">{article.body}</p>
      <CommentList article_id={article_id} className="comment-list" />
    </div>
  );
}