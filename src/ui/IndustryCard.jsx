import PropTypes from "prop-types";

const IndustryCard = ({ title, description, image}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col gap-3">
      {/* Image */}
      <div className="flex justify-center">
        <img src={image} alt={title} className="w-full object-cover rounded-t-md" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-4">
        {/* Title + Description */}
        <div className="flex flex-col gap-3 mb-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </div>

        {/* Buttons */}
        <div className="flex justify-between items-center w-full gap-4">
          <button className="bg-[#136ECA] hover:bg-[#D7A022] text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-500">
            See Demo
          </button>
          <button className="bg-[#D7A022] hover:bg-[#136ECA] text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-500">
            See Demo
          </button>
        </div>
      </div>
    </div>
  );
};

// ✅ Add PropTypes validation
IndustryCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default IndustryCard;
