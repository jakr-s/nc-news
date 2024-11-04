import axios from "axios";

const api = axios.create({
  baseURL: "https://be-nc-news-z0a0.onrender.com/api",
});

export default function fetchArticles() {
  return api
    .get(`/articles`)
    .then(({ data }) => {
      return data.articles;
    })
    .catch((error) => {
      console.error("Error fetching items", error);
    });
}
