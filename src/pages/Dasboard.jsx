import {useState} from "react";

import { HelpCircle, Newspaper, Briefcase } from "lucide-react";
import dashboardData from "../data/dashboard_table_Data.js"; // your JS data file
import DashboardCard from "../ui/DashboardCard.jsx";
import DashboardTable from "../ui/DashboardTable.jsx";

const Dashboard = () => {
  const [sortConfig, setSortConfig] = useState({});
  const [openMenu, setOpenMenu] = useState(null); // track which table menu is open

  const handleSort = (index, key) => {
  setSortConfig((prev) => {
    const prevConfig = prev[index] || {};
    const newDirection =
      prevConfig.key === key && prevConfig.direction === "asc" ? "desc" : "asc";
    return { ...prev, [index]: { key, direction: newDirection } };
    });
    setOpenMenu(null); // close menu after selecting
  };
  const getSortedRows = (rows, index) => {
  const config = sortConfig[index];
  if (!config) return rows;

  return [...rows].sort((a, b) => {
    let valA = a[config.key];
    let valB = b[config.key];

    if (config.key === "date") {
      valA = new Date(valA);
      valB = new Date(valB);
    }

    if (valA < valB) return config.direction === "asc" ? -1 : 1;
    if (valA > valB) return config.direction === "asc" ? 1 : -1;
    return 0;
      });
    };

  return (
    <div className="p-1 sm:px-6">
      {/* Top Cards */}
       {/* <div className="flex justify-center mx-4 mb-6"> */}
      <div className="grid grid-cols-1 sm:grid-cols-3 justify-self-center sm:justify-self-stretch gap-x-4 lg:gap-x-24  lg:mb-28 mx-4">
        <DashboardCard icon={HelpCircle } bgColor="bg-[#007BFF]" textColor="text-gray-500" label="Total FAQ" value="62" />
        <DashboardCard icon={Newspaper } bgColor="bg-[#FF9800]" textColor="text-yellow-500" label="Total News" value="62" />
        <DashboardCard icon={Briefcase } bgColor="bg-[#16A34A]" textColor="text-green-500" label="Total Job" value="62" />
      </div>
      {/* </div> */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-14 items-self-center">
        {dashboardData.map((table, index) => (
          <DashboardTable
            key={index}
            title={table.title}
            columns={table.columns}
            rows={table.rows}
            type={table.type}
            index={index}
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
            handleSort={handleSort}
            getSortedRows={getSortedRows}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

