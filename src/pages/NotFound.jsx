import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";
import not_found from "/navbar&footer/full_p_not_found.png";


const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col items-center justify-center bg-background  pt-20 sm:pt-20 md:pt-20 lg:pt-20 xl:py-20 2xl:py-20 ">   

          <div className="">
           <img 
  src={not_found} 
  alt="Page Not found img" 
  // className="h-[250px] w-[250px] 2xl:h-[550px] 2xl:w-[550px]  xl:h-[500px] xl:w-[500px] lg:h-[450px] lg:w-[450px] md:h-[350px] md:w-[350px] sm:h-[250px] sm:w-[250px]" 
  className=" flex justify-center h-[320px] w-[320px] 2xl:h-[750px] 2xl:w-[800px]  xl:h-[650px] xl:w-[700px] lg:h-[550px] lg:w-[550px] md:h-[500px] md:w-[500px] sm:h-[450px] sm:w-[450px] " 
/>
          </div>        

        
        {/* Go Home Button */}
   {/* Go Home Button */}
   <div className="py-10">
      <Link
      to="/"
      className="inline-flex items-center gap-2  bg-[#136ECA] text-white  px-4 py-2 sm:px-5 sm:py-2.5 lg:px-6 lg:py-3 rounded-lg text-sm sm:text-base lg:text-base font-medium hover:bg-[#D7A022] transition-all duration-300 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--brand-blue))] focus:ring-offset-2"
    >
      <Home className="w-4  h-4 sm:w-4.5 sm:h-4.5 lg:w-5 lg:h-5 " />
      Back To Home
    </Link>
   </div>
    
      </div>
    
  );
};

export default NotFound;
