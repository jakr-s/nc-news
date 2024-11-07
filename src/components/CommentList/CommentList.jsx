import CommentCard from "../CommentCard/CommentCard";
import "./CommentList.css";

export default function CommentList({ comments }) {
  if (comments.length === 0) return <div>No comments yet.</div>;

  return (
    <div className="comment-list">
      {comments.map((comment) => (
        <CommentCard key={comment.comment_id} comment={comment} />
      ))}
    </div>
  );
}