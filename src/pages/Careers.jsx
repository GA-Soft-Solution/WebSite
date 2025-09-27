import { useState } from "react";

import JobList from "../ui/JobList/JobList.jsx";
import jobData from "../data/jobsData";

const Careers = () => {
  const [jobs] = useState(jobData || []);
  const [hasMore, setHasMore] = useState(true);
 

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
