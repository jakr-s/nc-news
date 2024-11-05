import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchArticleById } from "../../utils/api";
import CommentList from "../CommentList/CommentList";

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
    <div className="">
      <div>
        <h1>{article.title}</h1>
        <p>{article.body}</p>
      </div>
      <CommentList article_id={article_id} />
    </div>
  );
}
