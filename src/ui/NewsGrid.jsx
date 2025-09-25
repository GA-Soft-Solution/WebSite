import { useState, useEffect } from 'react';
import { NewsCard } from './NewsCard';
import { Pagination } from './Pagination';
import { useNewsData } from '../hooks/useNewsData';
import { useNavigate } from 'react-router-dom';

const NewsGrid = () => {
  const { newsItems = [], loading, error } = useNewsData();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const navigate = useNavigate();

  // Sort by date (newest first)
  const sortedItems = [...newsItems].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  // Paginate sorted items
  const paginatedItems = sortedItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle article click
  const handleArticleClick = (id) => {
    navigate(`/blogs/${id}`);
  };

  // Reset page if newsItems changes
  useEffect(() => {
    setCurrentPage(1);
  }, [newsItems]);

  // --- Render ---
  if (loading) {
    return (
      <div className="text-center py-12 text-gray-500">
        Loading articles...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12 text-red-600 font-semibold">
        {error}
      </div>
    );
  }

  return (
    <div className="lg:mx-24 px-6 py-8">
      {/* Page Header */}
      <div className="text-center mb-12">
        <p className="text-blue-600 text-xs uppercase tracking-wider mb-2">
          • News Details•
        </p>
        <h1 className="text-4xl font-bold mb-4">News and Insights</h1>
      </div>

      {/* News Grid */}
      {paginatedItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-y-8 md:gap-y-20 gap-x-8">
          {paginatedItems.map((item) => (
            <NewsCard
              key={item.id}
              {...item}
              onClick={() => handleArticleClick(item.id)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-xl text-gray-500 mb-4">No articles found</p>
        </div>
      )}

      {/* Pagination */}
      {newsItems.length > itemsPerPage && (
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(newsItems.length / itemsPerPage)}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
};

export default NewsGrid;
