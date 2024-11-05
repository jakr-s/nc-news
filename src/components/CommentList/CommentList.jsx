import { useEffect, useState } from "react";
import CommentCard from "../CommentCard/CommentCard";
import "./CommentList.css";
import { fetchCommentsByArticle } from "../../utils/api";

export default function CommentList({ article_id }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchCommentsByArticle(article_id).then((fetchedComments) => {
      setComments(fetchedComments);
    });
  }, []);

  return (
    <div className="comment-list">
      {comments.map((comment) => (
        <CommentCard key={comment.comment_id} comment={comment} />
      ))}
    </div>
  );
}
