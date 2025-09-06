import PropTypes from "prop-types";
import { useMemo } from "react";

export const Categories = ({ allPosts }) => {
  const categories = useMemo(() => {
    const counts = {};
    allPosts.forEach((post) => {
      counts[post.category] = (counts[post.category] || 0) + 1;
    });
    return counts;
  }, [allPosts]);

  return (
    <div>
      <div className="mb-8 relative">
        <h3 className="text-lg font-bold text-gray-900">Categories</h3>
        <div className="absolute bottom-[-0.5rem] left-0 w-full border-b border-gray-300"></div>
        <div className="absolute bottom-[-0.5rem] left-0 w-10 border-b-2 border-blue-600 pb-2"></div>
      </div>
      <div className="space-y-3">
        {Object.entries(categories).map(([cat, count]) => (
          <div key={cat} className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="w-2 h-2 bg-blue-600 rounded-sm"></span>
              <span className="ml-2">{cat}</span>
            </div>
            <span className="text-xs">({count})</span>
          </div>
        ))}
      </div>
    </div>
  );
};

Categories.propTypes = {
  allPosts: PropTypes.array.isRequired,
};
