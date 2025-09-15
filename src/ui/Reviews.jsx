import { useState, useEffect } from "react";
import Avatar from "./Avatar";
import { reviews, mainImage, sectionText } from "../data/Reviews_Data";

export default function ReviewSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(2);

  // Adjust items per page based on screen size
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1); // mobile
      } else {
        setItemsPerPage(2); // tablet & desktop
      }
    };

    updateItemsPerPage(); // run on mount
    window.addEventListener("resize", updateItemsPerPage);

    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const totalPages = Math.ceil(reviews.length / itemsPerPage);
  const paginatedReviews = reviews.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  return (
    <section className="py-12 px-4 sm:px-6 md:px-12 bg-white">
      {/* Header */}
      <header className="text-center mb-14">
        <div className="inline-flex items-center gap-2 text-blue-600 text-xl font-bold">
          <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
          Client Reviews
          <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
        </div>

        <h2 className="text-2xl  md:text-3xl lg:text-5xl font-bold text-gray-900 mt-4">
          Some of Our Happy<span className="block mx-auto"> Reviews About Our Products</span>
        </h2>
      </header>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-[35%_65%] gap-6 items-start">
        {/* Image Column */}
        <div className="flex justify-center  md:justify-end">
          <img
            src={mainImage}
            alt="Client"
            className="rounded-lg  w-[25rem] sm:w-[20rem] md:w-[22rem] lg:w-[22rem] md:h-[24rem] h-auto object-cover shadow-xl"
          />
        </div>

        {/* Right Column */}
        <div className="flex flex-col px-0 md:pr-24">
          {/* Section Text */}
          <p className="text-gray-900 text-sm sm:text-base md:text-sm leading-relaxed mb-2">
            {sectionText}
          </p>

          {/* Review Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {paginatedReviews.map((item, index) => (
              <div
                key={index}
                className="bg-[#F4F8FC] shadow-md rounded-lg p-5 my-8 sm:p-6 flex flex-col"
              >
                {/* Avatar + Info */}
                <div className="flex items-center mb-4">
                  <Avatar src={item.img} alt={item.name} />
                  <div className="ml-3">
                    <h3 className="font-bold text-sm sm:text-base text-gray-900">
                      {item.name}
                    </h3>
                    <p className="text-blue-500 text-xs sm:text-sm">
                      {item.role}
                    </p>
                  </div>
                </div>

                {/* Review */}
                <p className="relative text-gray-600 text-sm mb-4 before:content-['“'] after:content-['”'] before:text-gray-600 after:text-gray-600">
                  {item.review}
                </p>
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
        </div>
      </div>
    </section>
  );
}
