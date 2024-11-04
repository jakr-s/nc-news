import ArticleCard from "../ArticleCard/ArticleCard";

export default function ArticleList({ articles }) {
  return (
    <div>
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
}
