import { useState } from "react";
import { useNavigate } from "react-router-dom";
import JobList from "../ui/JobList";
import jobData from "../data/jobsData";

const Careers = () => {
  const [jobs] = useState(jobData || []);
  const [hasMore, setHasMore] = useState(true);
  const navigate = useNavigate();

  const handleLoadMore = () => setHasMore(false);

  return (
    <div>
      <JobList
        jobs={jobs}
        hasMore={hasMore}
        onLoadMore={handleLoadMore}
        // JobList now internally uses navigate, no need to pass onViewJob
      />
    </div>
  );
};

export default Careers;
