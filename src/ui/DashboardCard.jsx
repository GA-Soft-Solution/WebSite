import PropTypes from "prop-types";

const DashboardCard = ({ icon: Icon, bgColor, textColor, label, value }) => {
  return (
    <div className={`p-4   ${textColor} `}>
      <div className="flex items-center  space-x-3">
        <div className={ `flex justify-center  items-center p-4  ${bgColor} rounded-full shadow-lg bg-opacity-10 h-14 w-14 xl:h-16 xl:w-16` }>
           {Icon && <Icon className="w-6 h-6 xl:h-8 xl:w-8  " />}
        </div>
        
        <div>
          <p className="text-sm xl:text-lg text-gray-500">{label}</p>
          <p className="text-lg xl:text-xl font-semibold">{value}</p>
        </div>
      </div>
    </div>
  );
};

// ✅ PropTypes validation
DashboardCard.propTypes = {
  icon: PropTypes.elementType, // expects a React component (like an icon)
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default DashboardCard;
