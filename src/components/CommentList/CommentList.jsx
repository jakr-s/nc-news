import { useEffect, useState } from "react";
import CommentCard from "../CommentCard/CommentCard";
import "./CommentList.css";
import { fetchCommentsByArticle } from "../../utils/api";

export default function CommentList({ article_id }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCommentsByArticle(article_id)
      .then((fetchedComments) => {
        setComments(fetchedComments);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching comments", error);
        setLoading(false);
      });
  }, [article_id]);

  // if (loading) return <div>Loading comments...</div>;

  return (
    <div className="comment-list">
      {loading && <div>Loading comments...</div>}
      {comments.map((comment) => (
        <CommentCard key={comment.comment_id} comment={comment} />
      ))}
    </div>
  );
}