import { Routes, Route } from "react-router-dom";
import ArticleList from "./components/Articles/ArticleList";
import ArticlePage from "./components/Articles/ArticlePage";
import TopicsList from "./components/Topics/TopicsList";

export default function App() {
  return (
    <>
      <TopicsList />
      <Routes>
        <Route path="/" element={<ArticleList />} />
        <Route path="/articles/:article_id" element={<ArticlePage />} />
        <Route path="/topics/:topic" element={<ArticleList />} />
      </Routes>
    </>
  );
}