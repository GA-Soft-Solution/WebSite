import  { useState, useEffect } from "react";
import Avatar from "./Avatar";
import Client_Reviews_Data from "../data/Client_Reviews_Data";

export default function Client_Reviews() {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  // Update itemsPerPage based on screen width
  useEffect(() => {
  const handleResize = () => {
    const width = window.innerWidth;
    if (width < 640) setItemsPerPage(1);          // Mobile
    else if (width >= 640 && width < 768) setItemsPerPage(1); // Small screens
    else if (width >= 768 && width < 1024) setItemsPerPage(2); // md / Tablet
    else if (width >= 1024 && width < 1536) setItemsPerPage(3); // lg / Desktop
    else setItemsPerPage(4);                       // 2xl
  };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(Client_Reviews_Data.length / itemsPerPage);

  const paginatedReviews = Client_Reviews_Data.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  return (
    <section className="py-12 px-6 bg-white">
      <header className="text-center mb-14">
        <div className="inline-flex items-center gap-2 text-blue-600 text-xl font-bold">
          <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
          Client Reviews
          <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
        </div>

        <h2 className="text-3xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-gray-900 mt-4">
          Happy Reviews About Our<span className="block mx-auto"> Products</span>
        </h2>
      </header>

      {/* Cards */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:mx-20">
        {paginatedReviews.map((item, index) => (
          <div
              key={index}
              className={`w-full ${itemsPerPage === 2 ? 'md:w-1/2' : itemsPerPage === 3 ? 'lg:w-1/3' : itemsPerPage === 4 ? '2xl:w-1/4' : ''} bg-[#F4F8FC] shadow-md rounded-2xl p-8 flex flex-col`}
            >

            {/* Avatar + Name/Role */}
            <div className="flex items-center mb-4">
              <Avatar src={item.img} alt={item.name} />
              <div className="ml-3">
                <h3 className="font-bold text-base text-gray-900">
                  {item.name}
                </h3>
                <p className="text-blue-500 text-xs">{item.role}</p>
              </div>
            </div>

            {/* Review */}
            <p className="relative text-gray-600 text-lg md:text-sm md:leading-5 mb-4 before:content-['“'] after:content-['”'] before:text-gray-600 after:text-gray-600">
              {item.review}
            </p>

            {/* Support */}
            <span className="font-bold text-sm hidden md:flex text-gray-800">
              {item.support}
            </span>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-3">
        <div className="flex space-x-3">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${
                currentPage === idx ? "bg-blue-600" : "bg-gray-300"
              } hover:bg-blue-600 transition`}
              onClick={() => setCurrentPage(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
