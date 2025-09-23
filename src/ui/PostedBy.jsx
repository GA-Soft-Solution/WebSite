import PropTypes from "prop-types";
import InfoItem from "./InfoItem";

const PostedBy = ({ job }) => {
  return (
    <div className="rounded-lg shadow-lg p-4">
      <img
        src={job.logo}
        alt={job.company}
        className="rounded-lg object-cover w-24 h-24 -translate-y-4 translate-x-4"style={{
    boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)", // blue glow with 50% opacity
  }}
      />
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Posted By</h3>
      <div className="flex items-center mb-4">
        <p className="font-semibold text-gray-900">{job.companyInfo.name}</p>
      </div>
      <div className="space-y-3">
        <InfoItem
          icon={
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 mr-3">
              <img src="/job_img/company.png" alt="Company" className="w-4 h-4" />
            </div>
          }
          label="COMPANY"
          value={job.companyInfo.name}
        />
        <InfoItem
          icon={
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 mr-3">
              <img src="/job_img/phone.png" alt="Phone" className="w-4 h-4" />
            </div>
          }
          label="PHONE"
          value={job.companyInfo.phone}
        />
        <InfoItem
          icon={
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 mr-3">
              <img src="/job_img/email.png" alt="Email" className="w-4 h-4" />
            </div>
          }
          label="EMAIL"
          value={job.companyInfo.email}
        />
        <InfoItem
          icon={
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 mr-3">
              <img src="/job_img/website.png" alt="Website" className="w-4 h-4" />
            </div>
          }
          label="WEBSITE" className="text-blue-500 text-md "
          value={
            <a
              href={job.companyInfo.website}
              className="text-blue-600 hover:text-blue-700"
            >
              {job.companyInfo.website}
            </a>
          }
        />
        <InfoItem
          icon={
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 mr-3">
              <img src="/job_img/location.png" alt="Address" className="w-4 h-4" />
            </div>
          }
          label="ADDRESS"
          value={job.companyInfo.address}
        />
      </div>
    </div>
  );
};

PostedBy.propTypes = {
  job: PropTypes.object.isRequired,
};

export default PostedBy;
