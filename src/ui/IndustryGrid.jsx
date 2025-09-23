import IndustryCard from './IndustryCard';
import industryData from '../data/industryData.js';

const IndustryGrid = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm text-blue-600 font-medium uppercase tracking-wide mb-2">
            . INDUSTRY SPECIFIC DETAIL .
          </p>
          <h1 className="text-4xl font-bold">
            Industry Specific
          </h1>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-x-6 gap-y-16 lg:mx-14">
          {industryData.map((item) => (
            <IndustryCard
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              image={item.image}
              buttonText={item.buttonText}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustryGrid;
