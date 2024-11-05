import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchArticleById } from "../../utils/api";
import CommentList from "../CommentList/CommentList";
import "./ArticlePage.css";


export default function ArticlePage() {
  const { article_id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    fetchArticleById(article_id).then((fetchedArticle) => {
      setArticle(fetchedArticle);
    });
  }, [article_id]);

  if (!article) return <div>Loading...</div>;

  return (
    <div className="page-container">
      <div className="article--container">
        <h1 className="article--title">{article.title}</h1>
        <p className="article--body">{article.body}</p>
      </div>
      <CommentList article_id={article_id} className="comment-list" />
    </div>
  );
}
