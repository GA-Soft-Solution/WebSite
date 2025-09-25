import PropTypes from "prop-types";
import { useState } from "react";

const JobContent = ({ job }) => {
  const [ setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(job.applyLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex-1 order-1 lg:order-1 space-y-20">
      {/* Hero Image */}
      <div className="w-full  rounded-lg relative">
        <img
          src={job.heroImage}
          alt="Job"
          className="w-full h-full object-cover"
        />
        <img
          src={job.logo}
          alt={job.postedBy} 
          className="w-24 h-24 rounded-lg object-cover absolute -bottom-16 left-4 shadow-lg border-2 border-white"
          style={{
            boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)", // blue glow with 50% opacity
          }}
        />

        {/* Copy Icon Button */}
        <button
          onClick={handleCopy}
          className="absolute bottom-4 right-4 bg-blue-600 p-3 rounded-lg hover:bg-yellow-400 transition-colors"
        >
          <img
            src="/job_img/copy.png" // your copy icon in public/job_img/
            alt="Copy"
            className="w-5 h-5"
          />
        </button>
      </div>

      {/* Job Header */}
      <div className="flex flex-col md:flex-row items-start md:items-end mb-4 justify-between">
        <div>
          <h1 className="text-2xl font-normal text-gray-900">{job.title}</h1>
          <p className="text-md text-gray-600">
            <a
              href={job.applyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-bold hover:underline"
            >
              Apply here
            </a>{" "}
             {job.salaryRange}<span className="text-yellow-500 text-md">/ {job.compensationperiod}</span>
          </p>
        </div>
        <div>
          <p className="text-md text-md  text-gray-600">
            Application ends:{"  "}
            <span className="text-yellow-500">{job.applicationDeadline}</span>
          </p>
        </div>
      </div>

      {/* Job Description */}
      <div className="p-6 rounded-lg leading-normal text-lg">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
          Job Description
        </h2>
        <div className="text-gray-700 space-y-4">
          <p>{job.description}</p>
          {/* Removed requirements and responsibilities mapping since they’re in description */}

          <div className="mt-6 space-y-2">
            <p>
              Role: <strong>{job.role}</strong>
            </p>
            <p>
              Industry Type: <strong>{job.industryType}</strong>
            </p>
            <p>
              Department:<strong>{job.department}</strong> 
            </p>
            <p>
              Employment Type: {job.employmentType}
            </p>
            <p>
              Role Category: {job.roleCategory}
            </p>
          </div>

          <div className="mt-6">
            <p>
              Education:
            </p>
            <p>UG: {job.education.ug}</p>
            <p>PG: {job.education.pg}</p>
          </div>

          <div className="mt-6">
            <p>
              Key Skills:
            </p>
            <strong><p>{job.keySkills}</p></strong>
          </div>
        </div>
      </div>
    </div>
  );
};

JobContent.propTypes = {
  job: PropTypes.shape({
    heroImage: PropTypes.string,
    logo: PropTypes.string,
    postedBy: PropTypes.string, // Changed from company to postedBy
    title: PropTypes.string,
    salaryRange: PropTypes.string,
    compensationperiod:PropTypes.string,
    applicationDeadline: PropTypes.string,
    applyLink: PropTypes.string,
    description: PropTypes.string,
    // Removed requirements and responsibilities from PropTypes
    role: PropTypes.string,
    industryType: PropTypes.string,
    department: PropTypes.string,
    employmentType: PropTypes.string,
    roleCategory: PropTypes.string,
    education: PropTypes.shape({
      ug: PropTypes.string,
      pg: PropTypes.string,
    }),
    keySkills: PropTypes.string,
  }).isRequired,
};

export default JobContent;