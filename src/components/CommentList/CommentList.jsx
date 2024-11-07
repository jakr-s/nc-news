import { useEffect, useState } from "react";
import CommentCard from "../CommentCard/CommentCard";
import "./CommentList.css";
import { fetchCommentsByArticle } from "../../utils/api";

export default function CommentList({ article_id }) {
  const [comments, setComments] = useState([]);
  const [loadingComments, setLoadingComments] = useState(true);
  const [errorComments, setErrorComments] = useState(null);

  useEffect(() => {
    fetchCommentsByArticle(article_id)
      .then((fetchedComments) => {
        setComments(fetchedComments);
        setLoadingComments(false);
      })
      .catch((error) => {
        setErrorComments(error);
        setLoadingComments(false);
      });
  }, [article_id]);

  if (loadingComments) return <div>Loading comments...</div>;
  if (errorComments) return <div>{errorComments}</div>;
  if (comments.length === 0) return <div>No comments yet.</div>;

  return (
    <div className="comment-list">
      {comments.map((comment) => (
        <CommentCard key={comment.comment_id} comment={comment} />
      ))}
    </div>
  );
}