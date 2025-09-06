import { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import { technologies } from '../data/technologies';

const TechnologyStack = () => {
  const [isWideScreen, setIsWideScreen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)');
    setIsWideScreen(mediaQuery.matches);
    const handleChange = (e) => setIsWideScreen(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const groupTechnologies = () => {
    const rows = [];
    let currentIndex = 0;
    const rowSizes = [7, 9, 7, 9];
    let rowIndex = 0;

    while (currentIndex < technologies.length) {
      const itemsInRow = rowSizes[rowIndex % rowSizes.length];
      const row = technologies.slice(currentIndex, currentIndex + itemsInRow);
      if (row.length) rows.push(row);
      currentIndex += itemsInRow;
      rowIndex++;
    }

    return rows;
  };

  const totalPages = Math.ceil(technologies.length / itemsPerPage);

  // paginate only on small screens
  const paginatedTechs = !isWideScreen
    ? technologies.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
      )
    : technologies;

  const technologyRows = isWideScreen ? groupTechnologies() : [paginatedTechs];

  return (
    <section className="py-8 mx-[15px] md:py-12 lg:py-16 px-[15px] bg-white">
      {/* Heading */}
      <div className="w-full text-center mb-10">
        <div className="inline-flex items-center gap-1 text-blue-600 font-medium mb-4 text-xs md:text-sm">
          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
          <span className="font-bold">TECHNOLOGY STACK</span>
          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
        </div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-[2.5rem] font-bold text-gray-900 leading-snug">
          What Technology Stack <br />
          are We Utilizing
        </h2>
      </div>

      {/* Tech Grid */}
      <div className="w-full space-y-6 md:space-y-10">
        {isWideScreen ? (
          technologyRows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex flex-nowrap justify-center gap-6 lg:gap-6 xl:gap-8 2xl:gap-14"
            >
              {row.map((tech) => (
                <TechCard key={tech.id} tech={tech} />
              ))}
            </div>
          ))
        ) : (
          <>
            {/* Dot Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center gap-2 mt-6">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`w-3 h-3 rounded-full ${
                      currentPage === i + 1
                        ? "bg-blue-600"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            )}
            <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-6">
              {paginatedTechs.map((tech) => (
                <TechCard key={tech.id} tech={tech} />
              ))}
            </div>

        
          </>
        )}
      </div>
    </section>
  );
};

const TechCard = ({ tech }) => (
  <div className="flex flex-col items-center group cursor-pointer transition-all duration-300">
    <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-20 md:h-20 xl:w-24 xl:h-24 2xl:w-28 2xl:h-28 flex items-center justify-center mb-2">
      <img
        src={tech.icon}
        alt={tech.name}
        className="max-w-full max-h-full object-contain"
      />
    </div>
    <span className="text-xs sm:text-sm md:text-sm xl:text-base 2xl:text-lg font-semibold text-gray-800 text-center group-hover:text-blue-600 transition-colors duration-300">
      {tech.name}
    </span>
  </div>
);

TechCard.propTypes = {
  tech: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default TechnologyStack;
