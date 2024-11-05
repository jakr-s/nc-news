import axios from "axios";

const api = axios.create({
  baseURL: "https://be-nc-news-z0a0.onrender.com/api",
});

export default function fetchArticles() {
  return api
    .get(`/articles`)
    .then(({ data }) => data.articles)
    .catch((error) => {
      console.error("Error fetching items", error);
    });
}

export function fetchArticleById(article_id) {
  return api
    .get(`/articles/${article_id}`)
    .then(({ data }) => data.article)
    .catch((error) => {
      console.error("Error fetching article", error);
    });
}
