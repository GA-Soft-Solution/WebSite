import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import products from "../data/productsData";

const ProjectDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  // Update itemsPerPage based on screen width
  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < 640 ? 1 : 2);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(product?.features.length / itemsPerPage) || 0;

  const paginatedFeatures = product?.features?.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  ) || [];

  return (
    <section className="pb-10 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-20 mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-5 xl:gap-10 2xl:gap-14 mt-8 sm:mt-10 md:mt-12 lg:mt-14 xl:mt-16 2xl:mt-20">
        
        {/* Main Content */}
        <main className="lg:col-span-2 p-2">
          <h1 className="text-4xl font-bold text-black mb-14">{product.mainTitle}</h1>
          <p className="text-gray-600 mb-8">{product.description}</p>

          {/* Sections */}
          {product.sections?.length > 0 && (
            <div className="mb-8 space-y-6">
              {product.sections.map(({ heading, text }, idx) => (
                <article key={idx}>
                  <h3 className="text-2xl font-bold text-black mb-4">{heading}</h3>
                  <p className="text-gray-600">{text}</p>
                </article>
              ))}
            </div>
          )}

          {/* Product Image */}
          <img
            src={product.image}
            alt={product.title}
            className="w-full md:h-[23rem] lg:h-[30rem] 2xl:h-auto rounded-lg my-8"
          />

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {paginatedFeatures.map(({ icon, title, text }, idx) => (
              <div key={idx} className="flex flex-col items-center bg-[#FBFBFF] rounded-lg lg:items-start text-center lg:text-left p-4">
                <div className="mb-4 flex justify-center lg:justify-start">
                  <img src={icon} alt={title} className="w-28 h-28" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">{title}</h3>
                <p className="text-gray-600">{text}</p>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-10">
            <div className="flex space-x-3">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  className={`w-2 h-2 lg:w-3 lg:h-3 rounded-full ${
                    currentPage === idx ? "bg-blue-600" : "bg-gray-300"
                  } hover:bg-blue-600 transition`}
                  onClick={() => setCurrentPage(idx)}
                />
              ))}
            </div>
          </div>
        </main>

        {/* Sidebar */}
        <aside className="lg:col-span-1 space-y-6">
          <div className="flex flex-col md:flex-row lg:flex-col md:space-x-6 lg:space-x-0 space-y-6 md:space-y-0 lg:space-y-6">
            
            {/* Product Info Box */}
            <div className="bg-sky-50 p-6 rounded-2xl flex-1">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-blue-600">{product.title}</h2>
                <img
                  src={product.icon}
                  alt={product.title}
                  className="hidden md:block bg-blue-600 p-3 ml-1 rounded-lg w-14 h-14"
                />
              </div>

              <div className="text-gray-600">
                {/* Project Info Results */}
                <div className="space-y-2">
                  {product.projectInfo.Results.map(({ label, value }, idx) => (
                    <p key={idx}>
                      <span className="font-semibold text-base">{label}:</span> {value}
                    </p>
                  ))}
                </div>

                {/* Features Results */}
                <div>
                  <h3 className="font-semibold mb-2">Description:</h3>
                  <ul className="list-disc pl-10 space-y-1 text-base lg:text-sm">
                    {product.featuresResults.map(({ label }, idx) => (
                      <li key={idx}>{label}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Project Info Box */}
            <div className="bg-blue-600 text-white p-8 rounded-2xl flex-1">
              <h2 className="text-3xl mb-4 ml-2 font-bold">Project Info</h2>
              <p className="text-lg lg:text-base mb-4 ml-2">{product.projectInfo.paragraph}</p>

              <ul className="space-y-5">
                {product.projectInfo.details.map(({ icon, heading, text }, idx) => (
                  <li key={idx} className="flex items-center space-x-4 p-1 rounded-lg">
                    <div className="w-1/5 flex justify-center">
                      <img
                        src={icon}
                        alt={heading}
                        className="bg-white rounded-lg p-2 w-14 h-14"
                      />
                    </div>
                    <div className="w-4/5 flex m-3 lg:m-0 flex-col">
                      <h3 className="text-lg font-bold">{heading}</h3>
                      <p className="text-sm">{text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </aside>
      </div>
    </section>
  );
};

export default ProjectDetail;
