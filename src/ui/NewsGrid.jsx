import { useState } from 'react';
import PropTypes from 'prop-types';
import { NewsCard } from './NewsCard';
import { Pagination } from './Pagination';
import { useNewsData } from '../hooks/useNewsData';

const NewsGrid = ({ onArticleClick }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { newsItems } = useNewsData();

  const itemsPerPage = 9;

  // ✅ Sort by date (newest first) before slicing for pagination
  const sortedItems = [...newsItems].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const paginatedItems = sortedItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );


  return (
    <div className="lg:mx-24 px-6 py-8">
      {/* Page Header */}
      <div className="text-center mb-12">
        <p className="text-blue-600 text-xs uppercase tracking-wider mb-2">
          • News Details•
        </p>
        <h1 className="text-4xl font-bold mb-4">
          News and Insights
        </h1>
      </div>

      {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-y-8 md:gap-y-20 gap-x-8">
          {paginatedItems.map((item) => (
          <NewsCard
            key={item.id}
            {...item}
            onClick={() => onArticleClick(item.id)}
          />
        ))}
      </div>
      {/* No results */}
      {newsItems.length === 0 && (
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

NewsGrid.propTypes = {
  onArticleClick: PropTypes.func.isRequired
};

export default NewsGrid;