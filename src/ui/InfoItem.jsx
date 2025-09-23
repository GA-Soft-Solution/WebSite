import PropTypes from "prop-types";

const InfoItem = ({ icon, label, value, textColor = "text-gray-900" }) => (
  <div className="flex items-start text-gray-600">
    {icon}
    <div>
      <p className="text-lg text-blue-500 uppercase tracking-wide">{label}</p>
      <p className={`text-lg font-medium ${textColor}`}>{value}</p>
    </div>
  </div>
);

InfoItem.propTypes = {
  icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  textColor: PropTypes.string,
};

export default InfoItem;