import ArticleCard from '../ArticleCard/ArticleCard';
import './ArticleList.css';

export default function ArticleList({ articles }) {
  return (
    <div className="article-list">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
}