import PropTypes from "prop-types";
import JobCard from "./JobCard";

const JobList = ({ jobs, onViewJob, onLoadMore, hasMore }) => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="mx-4 sm:mx-6 lg:mx-32 xl:mx-56 2xl:mx-64">
        <div className="space-y-12">
          {Array.isArray(jobs) && jobs.length > 0 ? (
            jobs.map((job) => (
              <JobCard key={job.id} job={job} onViewJob={onViewJob} />
            ))
          ) : (
            <p className="text-center text-gray-500">No jobs available.</p>
          )}
        </div>

        {hasMore && (
          <div className="flex justify-center mt-8">
            <button
              onClick={onLoadMore}
              className="bg-[#136ECA] hover:bg-[#D7A022] text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-500"
            >
              Load More Listing
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

JobList.propTypes = {
  jobs: PropTypes.array.isRequired,
  onViewJob: PropTypes.func.isRequired,
  onLoadMore: PropTypes.func.isRequired,
  hasMore: PropTypes.bool.isRequired,
};

export default JobList;