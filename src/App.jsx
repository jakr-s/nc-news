import { Routes, Route } from "react-router-dom";
import ArticleList from "./components/Articles/ArticleList";
import ArticlePage from "./components/Articles/ArticlePage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<ArticleList />} />
      <Route path="/articles/:article_id" element={<ArticlePage />} />
    </Routes>
  );
}
