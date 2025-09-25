import React from "react";
// import { HelpCircle, Newspaper, Briefcase } from "lucide-react";

const AdminHeader = () => {
  return (
    <header className="bg-white border rounded-lg ml-2 border-white p-4 flex justify-end items-center">
    
           <div className="flex items-center space-x-2">
              
        <div className="flex items-center">
          <span className="text-xl font-bold text-gray-800">Next Technology</span>
          <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center ml-2">
            <span className="text-white font-bold">N</span>
          </div>          
       
      </div>
      </div>
    
     
    </header>
  );
};

export default AdminHeader;