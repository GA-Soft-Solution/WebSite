import { useState } from 'react';
import NewsGrid from '../ui/NewsGrid';
import ArticleDetail from '../ui/ArticleDetail';

const Home = () => {
  const [selectedArticleId, setSelectedArticleId] = useState(null);

  // Called when a user clicks on a news item
  const handleArticleClick = (id) => {
    setSelectedArticleId(id);
  };

  // Go back to the news grid
  const handleBackClick = () => {
    setSelectedArticleId(null);
  };

  return (
    <div>
      {!selectedArticleId && (
        <NewsGrid onArticleClick={handleArticleClick} />
      )}

      {selectedArticleId && (
        <ArticleDetail
          articleId={selectedArticleId}
          onBackClick={handleBackClick}
        />
      )}
    </div>
  );
};

export default Home;
