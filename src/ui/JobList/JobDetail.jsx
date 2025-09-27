import PropTypes from "prop-types";
import JobContent from "./JobContent";
import PostedBy from "./PostedBy";
import InfoItem from "./InfoItem";

import { FaCalendarAlt} from 'react-icons/fa';
import { FaLocationDot, FaUserTie, FaBriefcase, FaVenusMars, FaMoneyBillWave } from 'react-icons/fa6';
import { MdAccessTimeFilled } from 'react-icons/md';



const JobDetail = ({ job }) => {

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Job not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white sm:mx-6 lg:mx-20 xl:mx-32 2xl:mx-64 flex flex-col mt-4">

      {/* Layout */}
      <div className="flex flex-col lg:flex-row gap-12 px-4 pb-8 flex-1">
        {/* Main Job Content */}
        <div className="flex-[7] order-1">
          <JobContent job={job} />
        </div>

        {/* Sidebar */}
        <div className="flex-[3] flex flex-col space-y-8 order-2 sticky top-4">
          {/* Job Information */}
          <div className="bg-blue-50 rounded-lg p-6 flex flex-col gap-6">
            <div className=" mb-6 relative" >
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Job Information
            </h3>
            <div className="absolute bottom-[-0.2rem] left-0 w-16 border-b-[0.2rem] border-[#136ECA] pb-2"></div>
            </div>
            <div className="flex flex-col space-y-6 text-sm">
              <InfoItem
                icon={
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 mr-3">
                    <FaCalendarAlt className="w-4 h-4 text-[#136ECA]"/>
                   
                  </div>
                }
                label="DATE POSTED"
                value={job.datePosted}
              />
              <InfoItem
                icon={
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 mr-3">
                    <FaLocationDot className="w-4 h-4 text-[#136ECA]"/>
                  </div>
                }
                label="LOCATION"
                value={job.location}
              />
              <InfoItem
                icon={
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 mr-3">
                    <FaUserTie className="w-4 h-4 text-[#136ECA]"/>
                  </div>
                }
                label="JOB TITLE"
                value={job.title}
              />
              <InfoItem
                icon={
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 mr-3">
                    <MdAccessTimeFilled  className="w-4 h-4 text-[#136ECA]"/>
                    
                  </div>
                }
                label="EXPERIENCE"
                value={job.experience}
              />
              <InfoItem
                icon={
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 mr-3">
                    <FaBriefcase  className="w-4 h-4 text-[#136ECA]"/>

                    
                  </div>
                }
                label="QUALIFICATION"
                value={job.qualification}
              />
              <InfoItem
                icon={
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 mr-3">
                    <FaVenusMars  className="w-4 h-4 text-[#136ECA]"/>
                  </div>
                }
                label="GENDER"
                value={job.gender}
              />
              <InfoItem
                icon={
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 mr-3">
                    <FaMoneyBillWave  className="w-4 h-4 text-[#136ECA]"/>
                  </div>
                }
                label="OFFERED SALARY"
                value={job.offeredSalary}
              />
            </div>
          </div>

          {/* Posted By */}
          <PostedBy job={job} />
        </div>
      </div>
    </div>
  );
};

// Define PropTypes for the job prop
JobDetail.propTypes = {
  job: PropTypes.shape({
    datePosted: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    experience: PropTypes.string.isRequired,
    qualification: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    offeredSalary: PropTypes.string.isRequired,
  }),
};

export default JobDetail;