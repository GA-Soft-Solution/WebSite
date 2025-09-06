import PropTypes from "prop-types";
import { useMemo } from "react";

export const RecentPosts = ({ allPosts, onArticleClick }) => {
  const recentPosts = useMemo(() => {
    return allPosts
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 3);
  }, [allPosts]);

  return (
    <div>
      <div className="mb-8 relative">
        <h3 className="text-lg font-bold">Recent Posts</h3>
        <div className="absolute bottom-[-0.5rem] left-0 w-full border-b border-gray-300"></div>
        <div className="absolute bottom-[-0.5rem] left-0 w-10 border-b-2 border-blue-600 pb-2"></div>
      </div>
      <div className="space-y-4">
        {recentPosts.map((post) => (
          <button
            key={post.id}
            onClick={() => onArticleClick(post.id)}
            className="flex space-x-3 p-2 text-left"
          >
            <img
              src={post.image}
              alt={post.title}
              className="h-20 w-20 object-cover"
            />
            <div className="flex-1">
              <div className="text-xs text-gray-500 mb-1">{post.date}</div>
              <h4 className="text-sm font-semibold text-gray-900 line-clamp-2 leading-snug">
                {post.title}
              </h4>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

RecentPosts.propTypes = {
  allPosts: PropTypes.array.isRequired,
  onArticleClick: PropTypes.func.isRequired,
};
