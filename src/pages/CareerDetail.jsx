import { useParams, useNavigate } from "react-router-dom";
import JobDetail from "../ui/JobDetail";
import jobData from "../data/jobsData";

const CareerDetail = () => {
  const { id } = useParams(); // URL param
  const navigate = useNavigate();

  // Find job by ID from jobData
  const job = jobData.find((j) => j.id.toString() === id);

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Job not found.</p>
      </div>
    );
  }

  return <JobDetail job={job} />;
};

export default CareerDetail;
