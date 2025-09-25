import { Search } from "lucide-react";
import PropTypes from "prop-types";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

export const SearchBox = ({ searchTerm, setSearchTerm, allPosts }) => {
  const navigate = useNavigate();

  const searchResults = useMemo(() => {
    if (searchTerm.length < 3) return [];
    return allPosts.filter(
      (p) =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.tags?.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [searchTerm, allPosts]);

  const handleClick = (id) => {
    navigate(`/blogs/${id}`); // navigate to blog detail page
    setSearchTerm("");
  };

  return (
    <div className="mb-4 bg-white shadow-sm p-4 relative">
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="w-full h-12 pl-3 pr-12 py-2 border border-gray-300 rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="absolute right-0 top-0 h-full w-10 flex items-center justify-center bg-blue-700 rounded-r">
          <Search className="w-4 h-4 text-white" />
        </div>
      </div>

      {searchTerm.length >= 3 && (
        <div className="absolute left-0 right-0 mt-2 bg-white border border-gray-200 shadow-lg rounded-md max-h-60 overflow-y-auto z-50">
          {searchResults.length > 0 ? (
            searchResults.map((post) => (
              <button
                key={post.id}
                onClick={() => handleClick(post.id)}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                {post.title}
              </button>
            ))
          ) : (
            <p className="px-4 py-2 text-sm text-gray-500">No results found</p>
          )}
        </div>
      )}
    </div>
  );
};

SearchBox.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
  allPosts: PropTypes.array.isRequired,
};
