import PropTypes from "prop-types";
import { useState } from "react";
import { MdContentCopy, MdCheck } from 'react-icons/md';

const JobContent = ({ job }) => {
  // Use state for visual feedback on copying
  const [copied, setCopied] = useState(false);

 
  const linkToCopy = job.applylink || job.companyInfo?.website;

  const handleCopy = () => {
   
    navigator.clipboard.writeText(linkToCopy);
    setCopied(true);
  
    setTimeout(() => setCopied(false), 2000);
  };

 
  const applyUrl = job.applylink || job.companyInfo?.website;
  const isDirectLinkAvailable = !!job.applylink;

  return (
    <div className="flex-1 order-1 lg:order-1 space-y-2">
      {/* Hero Image */}
      <div className="w-full  rounded-lg relative">
        <img
          src={job.heroImage}
          alt="Job Hero"
          className="w-full h-[360px] object-cover rounded-sm"
        />
      
        <img
          src={job.logo}
          alt={job.postedBy} 
          className="w-24 h-24 rounded-lg object-cover absolute -bottom-16 left-4 shadow-lg"
          style={{
            boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)", // blue glow with 50% opacity
          }}
        />
        

        {/* Copy Icon Button - Added visual feedback */}
        <button
          onClick={handleCopy}
          // Change color and icon based on the 'copied' state
          className={`absolute bottom-4 right-4 p-3 rounded-lg transition-all text-white w-12 h-12 ${
            copied ? 'bg-green-500 hover:bg-green-600' : 'bg-blue-600 hover:bg-yellow-400'
          }`}
          title={copied ? "Link Copied!" : "Copy Application Link"}
        >
          {/* Change icon based on the 'copied' state */}
          {copied ? (
            <MdCheck className="w-6 h-6 mx-auto" />
          ) : (
            <MdContentCopy className="w-6 h-6 mx-auto"/>
          )}
        </button>
      </div>

      {/* Job Header */}
      <div className="flex flex-col md:flex-row items-start md:items-end mb-4 justify-between pt-20 md:pt-16">
        <div>
          <h1 className="text-3xl text-gray-900 font-bold mb-4">{job.title}</h1>
          <p className="text-md text-gray-900 ">
            {/* Display the link using the best available URL */}
            {applyUrl ? (
              <a
                href={applyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-bold hover:underline"
              >
                Apply here {isDirectLinkAvailable}
              </a>
            ) : (
              <span className="text-blue-600 font-bold">Application Instructions Below</span>
            )}{" "}
             {job.salaryRange}<span className="text-yellow-500 text-md">/ {job.compensationperiod}</span>
          </p>
        </div>
        <div>
          <p className="text-md text-md  text-gray-600">
            Application ends:{"  "}
            <span className="text-yellow-500 font-medium">{job.applicationDeadline}</span>
          </p>
        </div>
      </div>

      {/* Job Description */}
      <div className=" rounded-lg leading-normal text-lg">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4 lg:mt-12">
          Job Description
        </h2>
        <div className="text-gray-600 space-y-4">
          <p>{job.description}</p>
          
          {/* Removed the red warning message here */}

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

// ---
// Prop Types
// ---

JobContent.propTypes = {
  job: PropTypes.shape({
    heroImage: PropTypes.string,
    logo: PropTypes.string,
    postedBy: PropTypes.string,
    title: PropTypes.string,
    salaryRange: PropTypes.string,
    compensationperiod:PropTypes.string,
    applicationDeadline: PropTypes.string,
    applylink: PropTypes.string, 
    description: PropTypes.string,
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
    companyInfo: PropTypes.shape({
      website: PropTypes.string,
    }),
  }).isRequired,
};

export default JobContent;