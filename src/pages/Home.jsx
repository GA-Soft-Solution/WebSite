import { useState } from "react";
import IndustryGrid from "../ui/IndustryGrid";
import JobList from "../ui/JobList";
import JobDetail from "../ui/JobDetail";
import jobData from "../data/jobsData";

const Home = () => {
  const [jobs] = useState(jobData || []); // ✅ Fixed
  const [selectedJob, setSelectedJob] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  const handleViewJob = (jobId) => {
    const job = jobs.find((j) => j.id === jobId);
    if (job) setSelectedJob(job);
  };

  const handleBack = () => setSelectedJob(null);

  const handleLoadMore = () => {
    // Example: Load more jobs
    setHasMore(false);
  };

  return (
    <div>
      <IndustryGrid />
      {selectedJob ? (
        <JobDetail job={selectedJob} onBack={handleBack} />
      ) : (
        <JobList
          jobs={jobs}
          onViewJob={handleViewJob}
          onLoadMore={handleLoadMore}
          hasMore={hasMore}
        />
      )}
    </div>
  );
};

export default Home;
