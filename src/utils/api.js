import axios from "axios";

const api = axios.create({
  baseURL: "https://be-nc-news-z0a0.onrender.com/api",
});

export function fetchArticles(topic, sort_by = "created_at", order = "desc") {
  let url = "/articles";
  const params = [];
  if (topic) {
    params.push(`topic=${topic}`);
  }
  if (sort_by) {
    params.push(`sort_by=${sort_by}`);
  }
  if (order) {
    params.push(`order=${order}`);
  }
  if (params.length) {
    url += `?${params.join("&")}`;
  }
  return api
    .get(url)
    .then(({ data }) => data.articles)
    .catch(() => {
      throw new Error("Failed to fetch articles.");
    });
}

export function fetchArticleById(article_id) {
  return api
    .get(`/articles/${article_id}`)
    .then(({ data }) => {
      if (!data.article) {
        throw new Error("Article not found");
      }
      return data.article;
    })
    .catch((error) => {
      throw error.response?.data?.msg || "Failed to fetch article";
    });
}

export function fetchCommentsByArticle(article_id) {
  return api
    .get(`/articles/${article_id}/comments`)
    .then(({ data }) => data.comments)
    .catch((error) => {
      throw error.response?.data?.msg || "Failed to fetch comments";
    });
}

export function updateArticleVotes(article_id, inc_votes) {
  return api
    .patch(`/articles/${article_id}`, { inc_votes })
    .then(({ data }) => data.article)
    .catch((error) => {
      console.error("Error updating article votes", error);
    });
}

export function updateCommentVotes(comment_id, inc_votes) {
  return api
    .patch(`/comments/${comment_id}`, { inc_votes })
    .then(({ data }) => data.comment)
    .catch((error) => {
      console.error("Error updating comment votes", error);
    });
}

export function postComment(article_id, username, body) {
  return api
    .post(`/articles/${article_id}/comments`, { username, body })
    .then(({ data }) => data.comment)
    .catch((error) => {
      throw error.response?.data?.msg || "Failed to post comment";
    });
}

export function deleteComment(comment_id) {
  return api.delete(`/comments/${comment_id}`);
}

export function fetchTopics() {
  return api
    .get("/topics")
    .then(({ data }) => data.topics)
    .catch(() => {
      throw new Error("Failed to fetch topics.");
    });
}
