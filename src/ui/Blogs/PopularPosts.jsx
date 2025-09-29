import PropTypes from "prop-types";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

export const RecentPosts = ({ allPosts }) => {
  const navigate = useNavigate();

  const recentPosts = useMemo(() => {
    return [...allPosts] // copy so we don't mutate original
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 3);
  }, [allPosts]);

  const handleClick = (id) => {
    navigate(`/blogs/${id}`);

  };

  return (
    <div>
      <div className="mb-6 relative ">
        <h3 className="text-lg font-bold">Popular Posts</h3>
        <div className="absolute bottom-[-0.5rem] left-0 w-full border-b border-gray-300"></div>
        <div className="absolute bottom-[-0.5rem] left-0 w-14 border-b-[1.7px] border-blue-600 "></div>
      </div>
      <div className="">
        {recentPosts.map((post) => (
          <button
            key={post.id}
            onClick={() => handleClick(post.id)}
            className="flex space-x-3 p-2 text-left"
          >
            <img
              src={post.image}
              alt={post.title}
              className="h-16 w-16 object-cover"
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
};