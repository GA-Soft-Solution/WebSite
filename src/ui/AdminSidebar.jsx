// import React, { useState } from "react";
// import GA_logo from "/Ga logo.png";
// import { NavLink } from "react-router-dom";
// import menuItems from "../data/admin_dashboard";

// import {
//   LayoutDashboard,
//   Hash,
//   Users,
//   HelpCircle,
//   MessageSquare,
//   UserCheck,
//   FolderOpen,
//   FileText,
//   Briefcase,
//   Settings,
//   DollarSign,
//   LogOut,
//   ChevronDown,
//   ChevronRight
// } from "lucide-react";

// const AdminSidebar = () => {
//   const [userManagementOpen, setUserManagementOpen] = useState(false);


//   const userManagementItems = [
//     { title: "Users", path: "/admin/users", icon: Users }, // Nested under /admin
//     { title: "Role", path: "/admin/role", icon: Settings } // Nested under /admin
//   ];

//   return (
//     <div className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col overflow-y-auto">
//       {/* <div className="p-4 border-b border-gray-200">
//         <div className="flex items-center">
//           <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-2">
//             <span className="text-white font-bold">G</span>
//           </div>
//           <span className="text-xl font-bold text-gray-800">Admin</span>
//         </div>
//       </div> */}
//       <div className="p-4 ">
//         <div className="flex items-center">
//           <img src={GA_logo} alt="GA_logo" className="2xl:h-24 2xl:w-28 xl:h-24 xl:w-28 lg:h-24 lg:w-28 md:h-20 md:w-24 sm:h-16 sm:w-20 h-14 w-16" />
//         </div>
//       </div>

//       <nav className="flex-1 px-2 py-4 space-y-1">
//         {menuItems.map((item) => (
//           <NavLink
//             key={item.title}
//             to={item.path}
//             end
//             className={({ isActive }) =>
//               `group flex items-center px-3 py-2.5 hover:bg-[#136ECA] rounded-lg text-sm font-medium transition-colors ${
//                 isActive 
//                   ? " bg-[#136ECA]"
//                   : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
//               }`
//             }
//           >
//              {({ isActive }) => (
//       <>
//         <img
//           src={item.icon}
//           alt={item.title}
//           className={`h-4 w-4 mr-3 object-contain transition filter
//             ${
//               item.title === "Counter"
//                 ? isActive
//                   ? "invert-0"
//                   : "invert group-hover:invert-0"
//                 : isActive
//                   ? "invert"
//                   : "invert-0 group-hover:invert"
//             }`}
//         />
//         {item.title}
//       </>
//     )}
//   </NavLink>
//         ))}
//         <div>
//           <button
//             onClick={() => setUserManagementOpen(!userManagementOpen)}
//             className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
//           >
//             <div className="flex items-center">
//               <Users className="h-4 w-4 mr-3" />
//               User Management
//             </div>
//             {userManagementOpen ? (
//               <ChevronDown className="h-4 w-4" />
//             ) : (
//               <ChevronRight className="h-4 w-4" />
//             )}
//           </button>
//           {userManagementOpen && (
//             <div className="ml-6 mt-1 space-y-1">
//               {userManagementItems.map((subItem) => (
//                 <NavLink
//                   key={subItem.title}
//                   to={subItem.path}
//                   className={({ isActive }) =>
//                     `flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
//                       isActive
//                         ? "text-blue-600 bg-blue-50"
//                         : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
//                     }`
//                   }
//                 >
//                   <subItem.icon className="h-4 w-4 mr-3" />
//                   {subItem.title}
//                 </NavLink>
//               ))}
//             </div>
//           )}
//         </div>
//         <NavLink
//           to="/admin/currency" // Updated to /admin/currency
//           className={({ isActive }) =>
//             `flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
//               isActive
//                 ? "bg-blue-50 text-blue-600 border-l-4 border-blue-600"
//                 : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
//             }`
//           }
//         >
//           <DollarSign className="h-4 w-4 mr-3" />
//           Currency
//         </NavLink>
//       </nav>
//       <div className="p-4 border-t border-gray-200">
//         <NavLink
//           to="/logout"
//           className="flex items-center px-3 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
//         >
//           <LogOut className="h-4 w-4 mr-3" />
//           Logout
//         </NavLink>
//       </div>
//     </div>
//   );
// };

// export default AdminSidebar;
import React, { useState } from "react";
import GA_logo from "/Ga logo.png";
import Logout from "/images/Logout.png";
import currency from "/images/Currency.png"
import { NavLink } from "react-router-dom";
import menuItems from "../data/admin_dashboard";
import {
  LayoutDashboard,
  Users,
  Settings,
  DollarSign,
  LogOut,
  ChevronDown,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";

const AdminSidebar = () => {
  const [userManagementOpen, setUserManagementOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false); // ✅ mobile drawer state

  const userManagementItems = [
    { title: "Users", path: "/admin/users", icon: Users },
    { title: "Role", path: "/admin/role", icon: Settings },
  ];

  return (
    <>
      {/* 🔹 Mobile top bar with hamburger */}
     <div className="lg:hidden fixed top-0 left-0  z-50 flex h-20 items-start justify-between p-4  ">
        <img src={GA_logo} alt="GA_logo" className="h-10 w-12" />
        <button
          onClick={() => setMobileOpen(true)}
          className="text-gray-700 focus:outline-none"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* 🔹 Sidebar for desktop + drawer for mobile */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 flex flex-col overflow-y-auto transform transition-transform duration-300 
          ${mobileOpen ? "translate-x-0" : "-translate-x-full "} 
          lg:translate-x-0 lg:static lg:inset-0`}
      >
        {/* Logo + close button (mobile only) */}
        <div className="p-4 flex items-center justify-between  border-gray-200">
          <img
            src={GA_logo}
            alt="GA_logo"
            className="2xl:h-24 2xl:w-28 xl:h-24 xl:w-28 lg:h-20 lg:w-24 md:h-16 md:w-20 h-14 w-16"
          />
          <button
            className="lg:hidden text-gray-700"
            onClick={() => setMobileOpen(false)}
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Navigation items */}
        <nav className="flex-1 px-2 py-4 space-y-1">
          {menuItems.map((item) => (
            <NavLink
              key={item.title}
              to={item.path}
              end
              className={({ isActive }) =>
                `group flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-[#136ECA] text-white"
                    : "text-gray-600 hover:bg-[#136ECA] hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <img
                    src={item.icon}
                    alt={item.title}
                    className={`h-4 w-4 mr-3 object-contain transition filter
                      ${
                        item.title === "Counter"
                          ? isActive
                            ? "invert-0"
                            : "invert group-hover:invert-0"
                          : isActive
                          ? "invert"
                          : "invert-0 group-hover:invert"
                      }`}
                  />
                  {item.title}
                </>
              )}
            </NavLink>
          ))}

          {/* User Management dropdown */}
          <div>
            <button
              onClick={() => setUserManagementOpen(!userManagementOpen)}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
            >
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-3" />
                User Management
              </div>
              {userManagementOpen ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
            </button>
            {userManagementOpen && (
              <div className="ml-6 mt-1 space-y-1">
                {userManagementItems.map((subItem) => (
                  <NavLink
                    key={subItem.title}
                    to={subItem.path}
                    className={({ isActive }) =>
                      `flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        isActive
                          ? "text-white bg-[#136ECA]"
                          : "text-gray-600 hover:bg-[#136ECA] hover:text-white"
                      }`
                    }
                  >
                    <subItem.icon className="h-4 w-4 mr-3" />
                    {subItem.title}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          {/* Extra nav */}
          <NavLink
            to="/admin/currency">
           {({ isActive }) => (
            <div
              className={`group flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? "bg-[#136ECA] text-white"
                  : "text-gray-600 hover:bg-[#136ECA] hover:text-white"
              }`}
            >
          <img
            src={currency}
            alt="Currency"
            className={`h-4 w-4 mr-3 object-contain transition filter ${
              isActive ? "invert" : "invert-0 group-hover:invert"
                      }`}
                    />
                Currency
              </div>
            )}
          </NavLink>
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-gray-200">
          <NavLink to="/logout">
          {({ isActive }) => (
            <div
              className={`group flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? "bg-[#136ECA] text-white"
                  : "text-gray-600 hover:bg-[#136ECA] hover:text-white"
              }`}
            >
          <img
            src={Logout}
            alt="Logout"
            className={`h-4 w-4 mr-3 object-contain transition filter ${
              isActive ? "invert" : "invert-0 group-hover:invert"
                      }`}
                    />
                Logout
              </div>
            )}
          </NavLink>

        </div>
      </div>

      {/* 🔹 Background overlay for mobile */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  );
};

export default AdminSidebar;
