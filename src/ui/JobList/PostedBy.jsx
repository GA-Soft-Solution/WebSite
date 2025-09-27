import PropTypes from "prop-types";
import InfoItem from "./InfoItem";

import { FaBuilding } from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { FaDesktop } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';



const PostedBy = ({ job }) => {
  return (
    <div className="rounded-lg shadow-md p-4">
      <img
        src={job.logo}
        alt={job.company}
        className="rounded-lg object-cover w-24 h-24 -translate-y-8 translate-x-4"style={{
    boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)", // blue glow with 50% opacity
  }}
      />
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Posted By:</h3>
      <div className="space-y-3">
        <InfoItem
          icon={
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 mr-3">
              <FaBuilding className="w-4 h-4 text-[#136ECA]"/>
            </div>
          }
          label="COMPANY"
          value={job.companyInfo.name}
        />
        <InfoItem
          icon={
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 mr-3">
              <MdPhoneIphone className="w-5 h-5 text-[#136ECA]"/>
            </div>
          }
          label="PHONE"
          value={job.companyInfo.phone}
        />
        <InfoItem
          icon={
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 mr-3">
              <MdOutlineAlternateEmail className="w-4 h-4 text-[#136ECA]"/>
            </div>
          }
          label="EMAIL"
          value={job.companyInfo.email}
        />
        <InfoItem
          icon={
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 mr-3">     
              <FaDesktop className="w-4 h-4 text-[#136ECA]"/>
            </div>
          }
          label="WEBSITE" 
          value={
            <a
              href={job.companyInfo.website}
             
            >
              {job.companyInfo.website}
            </a>
          }
        />
        <InfoItem
          icon={
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 mr-3">
              <FaLocationDot className="w-4 h-4 text-[#136ECA]"/>
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