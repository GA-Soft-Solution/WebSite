import PropTypes from "prop-types";
import JobContent from "./JobContent";
import PostedBy from "./PostedBy";
import InfoItem from "./InfoItem";

const JobDetail = ({ job }) => {
  return (
    <div className="min-h-screen bg-white sm:mx-6 lg:mx-20 xl:mx-32 2xl:mx-64 flex flex-col mt-4">
      

      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row gap-8 px-4 pb-8 flex-1">
        {/* Main Job Content (60%) */}
        <div className="flex-[7] order-1">
          <JobContent job={job} />
        </div>

        {/* Sidebar (40%) */}
        <div className="flex-[3] flex flex-col space-y-12 order-2 sticky top-4">
          {/* Job Information */}
          <div className="bg-blue-50 rounded-lg p-6 flex flex-col">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Job Information
            </h3>
            <div className="flex flex-col space-y-6">
              <InfoItem
                icon={
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 mr-3">
                    <img src="/job_img/date.png" alt="Calendar" className="w-4 h-4" />
                  </div>
                }
                label="DATE POSTED"
                value={job.datePosted}
              />

              <InfoItem
                icon={
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 mr-3">
                    <img src="/job_img/location.png" alt="Location" className="w-4 h-4" />
                  </div>
                }
                label="LOCATION"
                value={job.location}
              />

              <InfoItem
                icon={
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 mr-3">
                    <img src="/job_img/job.png" alt="Job Title" className="w-4 h-4" />
                  </div>
                }
                label="JOB TITLE"
                value={job.title}
              />

              <InfoItem
                icon={
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 mr-3">
                    <img src="/job_img/exprience.png" alt="Experience" className="w-4 h-4" />
                  </div>
                }
                label="EXPERIENCE"
                value={job.experience}
              />

              <InfoItem
                icon={
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 mr-3">
                    <img src="/job_img/qualification.png" alt="Qualification" className="w-4 h-4" />
                  </div>
                }
                label="QUALIFICATION"
                value={job.qualification}
              />

              <InfoItem
                icon={
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 mr-3">
                    <img src="/job_img/gender.png" alt="Gender" className="w-4 h-4" />
                  </div>
                }
                label="GENDER"
                value={job.gender}
              />

              <InfoItem
                icon={
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 mr-3">
                    <img src="/job_img/salary.png" alt="Salary" className="w-4 h-4" />
                  </div>
                }
                label="OFFERED SALARY"
                value={job.offeredSalary}
                
              />
            </div>
          </div>
          <div>
          {/* Posted By */}
          <PostedBy job={job} />
          </div>
        </div>
      </div>
    </div>
  );
};

JobDetail.propTypes = {
  job: PropTypes.object.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default JobDetail;
