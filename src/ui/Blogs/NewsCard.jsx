import PropTypes from 'prop-types';

import { FaRegCalendarAlt } from 'react-icons/fa';

export const NewsCard = ({ title, date, image, category, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group rounded-xl shadow-md overflow-hidden"
    >
      {/* Image + Overlay */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full"
        />

        {/* Category badge */}
        <span className="absolute top-0 right-0 w-32 h-8 flex items-center justify-center bg-blue-600 text-white text-sm font-semibold shadow-md rounded-md ">
          {category}
        </span>


        {/* Date badge */}
        <div className="absolute bottom-0 left-0 flex items-center bg-white text-gray-500 text-xs px-5 py-2  rounded ">
        
          <FaRegCalendarAlt className='w-3 h-3 text-blue-500 mr-2'/>
          <span>{date}</span>
        </div>
      </div>

      {/* Title */}
      <div className="group p-5">
        <h3 className="text-lg font-bold line-clamp-2 transition-colors group-hover:text-yellow-600">
          {title}
        </h3>
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};