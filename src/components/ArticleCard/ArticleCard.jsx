import './ArticleCard.css';

export default function ArticleCard({ articles }) {
  return (
    <div>
      {articles.map((article) => (
        <div key={article.id} className="article">
          <img src={article.article_img_url} />
          <div className="article--info">
            <small>{article.topic}</small>
            <small>{article.author}</small>
          </div>
          <h2 className="article--title">{article.title}</h2>
        </div>
      ))}
    </div>
  );
}