import PropTypes from "prop-types";

export const Tags = ({ article }) => {
  const tags = article?.tags || [];

  return (
    <div>
      <div className="mb-8 relative">
        <h3 className="text-lg font-bold text-gray-900">Tags</h3>
        <div className="absolute bottom-[-0.5rem] left-0 w-full border-b border-gray-300"></div>
        <div className="absolute bottom-[-0.5rem] left-0 w-10 border-b-2 border-blue-600 pb-2"></div>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {tags.map((tag, index) => (
          <div
            key={index}
            className="px-2 py-1 border border-dashed border-gray-300 rounded text-center flex items-center justify-center overflow-hidden"
          >
            <span
              className="block whitespace-nowrap"
              style={{
                fontSize: "clamp(10px, 2vw, 16px)", 
              }}
            >
              {tag}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

Tags.propTypes = {
  article: PropTypes.object.isRequired,
};
