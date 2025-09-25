import JobContent from "./JobContent";
import PostedBy from "./PostedBy";
import InfoItem from "./InfoItem";
import { useNavigate } from "react-router-dom";

const JobDetail = ({ job }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white sm:mx-6 lg:mx-20 xl:mx-32 2xl:mx-64 flex flex-col mt-4">
      <button
        onClick={() => navigate(-1)}
        className="text-blue-600 hover:underline mb-4"
      >
        &larr; Back
      </button>

      <div className="flex flex-col lg:flex-row gap-8 px-4 pb-8 flex-1">
        {/* Main Job Content */}
        <div className="flex-[7] order-1">
          <JobContent job={job} />
        </div>

        {/* Sidebar */}
        <div className="flex-[3] flex flex-col space-y-12 order-2 sticky top-4">
          <div className="bg-blue-50 rounded-lg p-6 flex flex-col">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Job Information
            </h3>
            <div className="flex flex-col space-y-6">
              <InfoItem label="DATE POSTED" value={job.datePosted} />
              <InfoItem label="LOCATION" value={job.location} />
              <InfoItem label="JOB TITLE" value={job.title} />
              <InfoItem label="EXPERIENCE" value={job.experience} />
              <InfoItem label="QUALIFICATION" value={job.qualification} />
              <InfoItem label="GENDER" value={job.gender} />
              <InfoItem label="OFFERED SALARY" value={job.offeredSalary} />
            </div>
          </div>

          <PostedBy job={job} />
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
