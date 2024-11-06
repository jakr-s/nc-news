import VoteButton from "../VoteButton/VoteButton";
import { updateCommentVotes } from "../../utils/api";
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
        <VoteButton
          id={comment.comment_id}
          votes={comment.votes}
          updateVotes={updateCommentVotes}
        />
      </div>
    </div>
  );
}
