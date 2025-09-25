import PropTypes from "prop-types";

const JobCard = ({ job, onViewJob }) => {
  const { id, title, company, location, jobType, salaryRange , logo, compensationperiod } = job;

  const handleViewJob = () => {
    if (onViewJob) onViewJob(id);
  };

  return (
    <div className="rounded-lg shadow-md border  relative pr-4" style={{
  boxShadow: "0 18px 20px -10px rgba(54, 113, 209, 0.6)",
}}
      >
      {/* Mobile Layout (sm-) */}
       <div className="grid grid-cols-5 gap-0 md:hidden relative p-2">
        {/* 1. Logo */}
        <div className="col-span-2">
          <img
            src={logo}
            alt={`${company} logo`}
            className="rounded-lg object-cover w-24 -translate-y-4 translate-x-4"
          />
        </div>

        {/* 6. Title + Location */}
        <div className="col-start-1 row-start-2 col-span-5 p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
          <p className="text-gray-600 text-sm">{location}</p>
        </div>

        {/* 7. Salary */}
        <div className="row-start-3 col-span-5 p-4">
          <p className="text-sm font-medium text-blue-600">{salaryRange} <span className="text-yellow-600">  / {compensationperiod}</span></p>
        </div>

        {/* 8. Button */}
        <div className="row-start-4 col-span-5 text-right pb-2">
          <button
            onClick={handleViewJob}
            className="text-blue-600 font-medium hover:underline"
          >
            Browse Job
          </button>
        </div>

        {/* Job Type Badge */}
        <span className="absolute top-2 right-2 rounded font-medium bg-blue-500 text-white text-xs px-2 py-1">
          {jobType}
        </span>
      </div>

      {/* Desktop Layout (md+) */}
  <div className="hidden md:grid grid-cols-6 h-full gap-x-8">
  {/* Logo */}
  <div className="col-span-1 row-span-2">
    <img
      src={logo}
      alt={`${company} logo`}
      className="rounded-lg object-cover  max-h-40  translate-y-4 translate-x-4"
    />
  </div>

  {/* Title + Location */}
  <div className="col-span-4 pt-4">
    <h3 className="text-xl font-semibold mb-3">
      {title}
    </h3>
    <p className="text-gray-600 text-md">{location}</p>
  </div>

  {/* Button + Salary */}
 <div className="col-start-5 col-span-2 row-start-2 flex flex-col h-full items-end">
  <p className="text-sm  mb-3">
    {salaryRange} <span className="text-yellow-600"> /{compensationperiod}</span>
  </p>
  <button
    onClick={handleViewJob}
    className="text-blue-600 font-normal hover:underline"
  >
    Browse Job
  </button>
</div>

  {/* Job Type Badge */}
  <span className="absolute top-2 right-2 rounded font-medium bg-blue-500 text-white text-sm px-2 py-1">
    {jobType}
  </span>
</div>

    </div>
  );
};

JobCard.propTypes = {
  job: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    jobType: PropTypes.string.isRequired,
    salaryRange: PropTypes.string.isRequired,
    compensationperiod: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
  }).isRequired,
  onViewJob: PropTypes.func.isRequired,
};

export default JobCard; 