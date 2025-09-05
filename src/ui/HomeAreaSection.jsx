import { useState, useEffect } from "react";
import solutionsData from "../data/HomeAreaSection";

export default function HomeAreaSection() {
  const [activeCategory, setActiveCategory] = useState(solutionsData[0].category);
  const [activeSlide, setActiveSlide] = useState(0);

  const [tabIndex, setTabIndex] = useState(0);
  const activeContent = solutionsData.find(
    (item) => item.category === activeCategory
  );

 
  useEffect(() => {
    const interval = setInterval(() => {
      if (activeContent) {
        setActiveSlide((prev) => (prev + 1) % activeContent.slides.length);
      }
    }, 5000); 
    return () => clearInterval(interval);
  }, [activeContent]);


  const handleNextTabs = () => {
    const newIndex = tabIndex + 2;

    if (newIndex >= solutionsData.length) {
      setTabIndex(0);
    } else {
      setTabIndex(newIndex);
    }
  };

  return (
    <div className="bg-[url('/BackgroundColor.png')] bg-cover bg-center bg-no-repeat min-h-screen w-full pl-1">
      {/* Title Section */}
      <div className="flex flex-col items-center text-center space-y-3 px-3">
        <div className="flex items-center space-x-3">
          <span className="w-2 h-2 bg-[#136ECA] rounded-full"></span>
          <h1 className="md:text-2xl text-[#136ECA] font-bold text-xl">AREAS</h1>
          <span className="w-2 h-2 bg-[#136ECA] rounded-full"></span>
        </div>
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold text-gray-900">
          Industries We Proudly Serve <br /> Here are some of them
        </p>
      </div>

      {/* Category Tabs */}
      <div className="container">
        <div className="relative mt-10 flex items-center">
         
          <div className="flex md:hidden bg-white rounded-lg border-b-2 border-[#E1E1E1] w-full md:h-[90px] h-[60px]">
            {solutionsData
              .slice(tabIndex, tabIndex + 2)
              .map((item, index) => (
                <button
                  key={`${item.category}-${tabIndex + index}`}
                  onClick={() => {
                    setActiveCategory(item.category);
                    setActiveSlide(0);
                  }}
                  className={`relative w-1/2 text-center px-3 py-3 text-lg
                    border-r-2 border-dotted border-[#E1E1E1]
                    ${
                      activeCategory === item.category
                        ? "text-[#D7A022]"
                        : "text-[#136ECA]"
                    }`} >
               
                  {item.category}
                  {activeCategory === item.category && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D7A022]"></span>
                  )}
                </button>
              ))}
          </div>

          {/* ✅ Next Button for Mobile */}
          {solutionsData.length > 2 && (
            <button onClick={handleNextTabs} className="md:hidden absolute right-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#136ECA]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          )}

          {/* ✅ Desktop Tabs (Hidden on small screens) */}
          <div className="hidden md:flex bg-white rounded-lg border-b-2 border-[#E1E1E1] w-full h-[90px]">
            {solutionsData.map((item, index) => (
              <button
                key={`${item.category}-${index}`}
                onClick={() => {
                  setActiveCategory(item.category);
                  setActiveSlide(0);
                }}
                className={`relative flex-1 text-center px-3 py-3 sm:py-4 text-sm sm:text-base md:text-lg lg:text-2xl
                  border-r-2 border-dotted border-[#E1E1E1]
                  ${
                    activeCategory === item.category
                      ? "text-[#D7A022]"
                      : "text-[#136ECA]"
                  }`}>
              
                {item.category}
                {activeCategory === item.category && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D7A022]"></span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Content Section */}
<div className="px-3">
  {activeContent && (
    <div className="flex flex-col md:flex-row items-center md:items-stretch min-h-[450px] space-x-9 md:space-x-4">
      {/* Left Image */}
      <div className="w-full md:w-1/2 lg:w-1/2 mb-6 md:mb-0 flex justify-center items-center">
        <img
          src={activeContent.image}
          alt={activeContent.category}
          className="rounded-lg h-auto max-h-[350px] w-full object-contain"
        />
      </div>

      {/* Right Content */}
      <div className="w-full lg:w-5/12 flex flex-col justify-between pt-6 ">
        {/* Top Section */}
        <div>
          <h2 className="text-base sm:text-lg md:text-xl mb-4 text-gray-600">
            {activeContent.slides[activeSlide].discription}
          </h2>
          <ul className="space-y-3">
            {activeContent.slides[activeSlide].bullets.map((bullet, index) => (
              <li key={index} className="flex items-start">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 shrink-0"
                >
                  <path
                    d="M9.40625 18.6953C9.31736 18.6953 9.22847 18.6509 9.13958 18.562L1.53958 10.2953C1.40625 10.2064 1.37292 10.0842 1.43958 9.92865C1.50625 9.77309 1.62847 9.69531 1.80625 9.69531H5.47292C5.60625 9.69531 5.71736 9.73976 5.80625 9.82865L8.33958 12.762C8.73958 11.8731 9.31736 10.9398 10.0729 9.96198C10.9174 8.89531 11.9396 7.85087 13.1396 6.82864C14.6507 5.53976 16.4063 4.36198 18.4062 3.29531C18.4951 3.25087 18.584 3.23976 18.6729 3.26198C18.7618 3.2842 18.8396 3.33976 18.9062 3.42865C18.9729 3.51753 18.9951 3.60642 18.9729 3.69531C18.9507 3.7842 18.8951 3.85087 18.8063 3.89531C18.5396 4.11753 18.184 4.45087 17.7396 4.89531C16.8507 5.73976 15.984 6.67309 15.1396 7.69531C14.0729 9.07309 13.1174 10.5398 12.2729 12.0953C11.1618 14.1398 10.3396 16.2286 9.80625 18.362C9.76181 18.5842 9.62847 18.6953 9.40625 18.6953Z"
                    fill="#136ECA"
                  />
                </svg>
                <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
                  {bullet}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom Section (Dots stay fixed at bottom) */}
        <div className="flex space-x-2 mt-6 justify-center md:justify-end">
          {activeContent.slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`w-2 h-2 rounded-full md:w-3 md:h-3 ${
                activeSlide === index ? "bg-[#136ECA]" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )}
</div>

      </div>
    </div>
  );
}