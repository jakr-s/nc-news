import "./CommentCard.css";

export default function CommentCard({ comment }) {
  return (
    <div className="comment">
      <div className="comment--info">
        <small>{comment.author}</small>
        <small>{comment.created_at}</small>
      </div>
      <div className="comment--body-votes">
        <p>{comment.body}</p>
        <div className="comment--vote-counter">
          <small>+</small>
          <h5>{comment.votes}</h5>
          <small>-</small>
        </div>
      </div>
    </div>
  );
}
