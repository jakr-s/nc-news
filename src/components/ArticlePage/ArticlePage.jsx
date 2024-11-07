import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchArticleById, fetchCommentsByArticle } from "../../utils/api";
import CommentList from "../CommentList/CommentList";
import CommentForm from "../CommentForm/CommentForm";
import "./ArticlePage.css";
import VoteButton from "../VoteButton/VoteButton";
import { updateArticleVotes } from "../../utils/api";

export default function ArticlePage() {
  const currentUser = "grumpy19"; // Hardcoded user
  const { article_id } = useParams();
  const [article, setArticle] = useState(null);
  const [loadingArticle, setLoadingArticle] = useState(true);
  const [errorArticle, setErrorArticle] = useState(null);
  const [comments, setComments] = useState([]);
  const [loadingComments, setLoadingComments] = useState(true);
  const [errorComments, setErrorComments] = useState(null);

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

  useEffect(() => {
    fetchCommentsByArticle(article_id)
      .then((fetchedComments) => {
        setComments(fetchedComments);
        setLoadingComments(false);
      })
      .catch(() => {
        setErrorComments("Failed to load comments.");
        setLoadingComments(false);
      });
  }, [article_id]);

  const addComment = (newComment) => {
    setComments((prevComments) => [newComment, ...prevComments]);
  };

  if (loadingArticle) return <div>Loading Article...</div>;
  if (errorArticle) return <div>{errorArticle}</div>;

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

      <CommentForm article_id={article_id} addComment={addComment} currentUser={currentUser} />
      {loadingComments && <div>Loading comments...</div>}
      {errorComments && <div>{errorComments}</div>}
      <CommentList
        comments={comments}
        currentUser={currentUser}
        setComments={setComments}
      />
    </div>
  );
}
