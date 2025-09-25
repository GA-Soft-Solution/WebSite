// import React from "react";
// import { HelpCircle, Newspaper, Briefcase } from "lucide-react";
// // import dashboardData from "../../data/dashboard_table_Data";
// import dashboardData from "../../data/dashboard_table_Data.js";

// const Dashboard = () => {
//   return (
//     <div className="p:1  sm:px-6 ">
//       {/* Top Cards */}
      
//       <div className="flex justify-center   mx-4">

     
//       <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-4 lg:gap-x-24  mx-4">
//         <div className="flex items-center space-x-2  p-3 ">
//           <div className="flex justify-center items-center bg-[#007BFF] bg-opacity-10 h-14 w-14 rounded-full">
//              <HelpCircle className="h-5 w-5 text-gray-500" />
//           </div>
          
//           <div>
//             <div className="text-sm text-gray-500">Total FAQ</div>
//             <div className="text-lg font-semibold">62</div>
//           </div>
//         </div>
//         <div className="flex items-center space-x-2  p-3 ">
//            <div className="flex justify-center items-center bg-[#FF9800] bg-opacity-10 h-14 w-14 rounded-full">
//              <Newspaper className="h-5 w-5 text-yellow-500" />
//            </div>
          
//           <div>
//             <div className="text-sm text-gray-500">Total News</div>
//             <div className="text-lg font-semibold">62</div>
//           </div>
//         </div>
//         <div className="flex items-center space-x-2  p-3 ">
//           <div className="flex justify-center items-center bg-[#16A34A] bg-opacity-10 h-14 w-14 rounded-full">
//               <Briefcase className="h-5 w-5 text-green-500" />
//           </div>
          
//           <div>
//             <div className="text-sm text-gray-500">Total Job</div>
//             <div className="text-lg font-semibold">62</div>
//           </div>
//         </div>
//       </div> 
//        </div>

//       {/* Tables Section */}
//       {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-4"> */}
//         {/* News Table */}
//         {/* <div className="bg-white rounded-lg shadow p-3 sm:p-4">
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-sm sm:text-lg font-semibold text-gray-800">News</h2>
//             <button className="text-xs sm:text-sm text-gray-400 hover:text-gray-600">...</button>
//           </div>
//           <table className="w-full text-xs sm:text-sm text-gray-600">
//   <thead className="text-[10px] sm:text-xs uppercase bg-gray-50 text-gray-500">
//               <tr>
//                 <th className="px-3 py-2">No.</th>
//                 <th className="px-3 py-2">Title</th>
//                 <th className="px-3 py-2">Category</th>
//                 <th className="px-3 py-2"></th>
//               </tr>
//             </thead>
//             <tbody>
//               {[
//                 { id: "01", title: "Import & Supply", category: "Technology" },
//                 { id: "02", title: "Design and commission", category: "Technology" },
//                 { id: "03", title: "Plant and installation", category: "Technology" },
//                 { id: "04", title: "Software Products", category: "Technology" },
//               ].map((row) => (
//                 <tr key={row.id} className="border-b last:border-none">
//                   <td className="px-3 py-2">{row.id}</td>
//                   <td className="px-3 py-2">{row.title}</td>
//                   <td className="px-3 py-2">
//                     <span className="px-2 py-1 bg-gray-100 rounded text-xs">{row.category}</span>
//                   </td>
//                   <td className="px-3 py-2">
//                     <button className="px-3 py-1 bg-yellow-500 text-white text-xs rounded hover:bg-yellow-600">
//                       Details
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div> */}

//         {/* FAQ Table */}
//         {/* <div className="bg-white rounded-lg shadow p-3 sm:p-4">
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-sm sm:text-lg font-semibold text-gray-800">FAQ</h2>
//             <button className="text-xs sm:text-sm text-gray-400 hover:text-gray-600">...</button>
//           </div>
//           <table className="w-full text-xs sm:text-sm text-gray-600">
//   <thead className="text-[10px] sm:text-xs uppercase bg-gray-50 text-gray-500">
//               <tr>
//                 <th className="px-3 py-2">No.</th>
//                 <th className="px-3 py-2">Title</th>
//                 <th className="px-3 py-2">Status</th>
//                 <th className="px-3 py-2"></th>
//               </tr>
//             </thead>
//             <tbody>
//               {[
//                 { id: "01", title: "Import & Supply", status: "Active" },
//                 { id: "02", title: "Design and commission", status: "Active" },
//                 { id: "03", title: "Plant and installation", status: "Active" },
//                 { id: "04", title: "Software Products", status: "Active" },
//               ].map((row) => (
//                 <tr key={row.id} className="border-b last:border-none">
//                   <td className="px-3 py-2">{row.id}</td>
//                   <td className="px-3 py-2">{row.title}</td>
//                   <td className="px-3 py-2">
//                     <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded text-xs">
//                       {row.status}
//                     </span>
//                   </td>
//                   <td className="px-3 py-2">
//                     <button className="px-3 py-1 bg-yellow-500 text-white text-xs rounded hover:bg-yellow-600">
//                       Details
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div> */}
//       {/* </div> */}
//             {/* Tables Section */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-4">
//         {dashboardData.map((table, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-lg shadow p-3 sm:p-4"
//           >
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-sm sm:text-lg font-semibold text-gray-800">
//                 {table.title}
//               </h2>
//               <button className="text-xs sm:text-sm text-gray-400 hover:text-gray-600">...</button>
//             </div>

//             <table className="w-full text-xs sm:text-sm text-gray-600">
//               <thead className="text-[10px] sm:text-xs uppercase bg-gray-50 text-gray-500">
//                 <tr>
//                   {table.columns.map((col, i) => (
//                     <th key={i} className="px-3 py-2">{col}</th>
//                   ))}
//                   <th className="px-3 py-2"></th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {table.rows.map((row) => (
//                   <tr key={row.id} className="border-b last:border-none">
//                     {table.rowRender(row)}
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         ))}
//       </div>

//     </div>
//   );
// };

// export default Dashboard;
import React from "react";
import { HelpCircle, Newspaper, Briefcase } from "lucide-react";
import dashboardData from "../../data/dashboard_table_Data.js"; // your JS data file

const Dashboard = () => {
  return (
    <div className="p-1 sm:px-6">
      {/* Top Cards */}
      <div className="flex justify-center mx-4 mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-4 lg:gap-x-24 mx-4">
          <div className="flex items-center space-x-2 p-3">
            <div className="flex justify-center items-center bg-[#007BFF] bg-opacity-10 h-14 w-14 rounded-full">
              <HelpCircle className="h-5 w-5 text-gray-500" />
            </div>
            <div>
              <div className="text-sm text-gray-500">Total FAQ</div>
              <div className="text-lg font-semibold">62</div>
            </div>
          </div>
          <div className="flex items-center space-x-2 p-3">
            <div className="flex justify-center items-center bg-[#FF9800] bg-opacity-10 h-14 w-14 rounded-full">
              <Newspaper className="h-5 w-5 text-yellow-500" />
            </div>
            <div>
              <div className="text-sm text-gray-500">Total News</div>
              <div className="text-lg font-semibold">62</div>
            </div>
          </div>
          <div className="flex items-center space-x-2 p-3">
            <div className="flex justify-center items-center bg-[#16A34A] bg-opacity-10 h-14 w-14 rounded-full">
              <Briefcase className="h-5 w-5 text-green-500" />
            </div>
            <div>
              <div className="text-sm text-gray-500">Total Job</div>
              <div className="text-lg font-semibold">62</div>
            </div>
          </div>
        </div>
      </div>

      {/* Tables Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-4">
        {dashboardData.map((table, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-3 sm:p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-sm sm:text-lg font-semibold text-gray-800">
                {table.title}
              </h2>
              <button className="text-xs sm:text-sm text-gray-400 hover:text-gray-600">
                ...
              </button>
            </div>

            <table className="w-full text-xs sm:text-sm text-gray-600">
              <thead className="text-[10px] sm:text-xs uppercase bg-gray-50 text-gray-500">
                <tr>
                  {table.columns.map((col, i) => (
                    <th key={i} className="px-3 py-2">{col}</th>
                  ))}
                  <th className="px-3 py-2"></th>
                </tr>
              </thead>
              <tbody>
                {table.rows.map((row) => (
                  <tr key={row.id} className="border-b last:border-none">
                    <td className="px-3 py-2">{row.id}</td>
                    <td className="px-3 py-2">{row.title}</td>

                    {table.type === "news" && (
                      <td className="px-3 py-2">
                        <span className="px-2 py-1 bg-gray-100 rounded text-xs">
                          {row.category}
                        </span>
                      </td>
                    )}

                    {table.type === "faq" && (
                      <td className="px-3 py-2">
                        <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded text-xs">
                          {row.status}
                        </span>
                      </td>
                    )}

                    <td className="px-3 py-2">
                      <button className="px-3 py-1 bg-yellow-500 text-white text-xs rounded hover:bg-yellow-600">
                        Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

