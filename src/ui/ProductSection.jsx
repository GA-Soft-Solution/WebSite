import { Link } from "react-router-dom";
import products from "../data/productsData";

function Projects() {
  return (
    <section className="px-4 sm:px-2 md:px-8 lg:px-1 xl:px-3 2xl:px-2">
      {/* Section Header */}
      <header className="text-center mb-20">
        <div className="inline-flex items-center gap-2 text-blue-600 text-xl font-bold">
          <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
          Products
          <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
        </div>

        <h2 className="text-3xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-gray-900 mt-4">
          What we offer through our <span className="block mx-auto">software services.</span>
        </h2>
      </header>

      {/* Products  */}
      <div className=" mx-auto flex flex-wrap gap-8 xl:gap-9 2xl:gap-20 sm:p-5 justify-center 2xl:justify-start  items-center sm:px-6 md:px-8  xl:px-10 2xl:px-18   lg:px-14">
        {products.map(({ id, title, image, icon }) => (
          <article
            key={id}
            className="relative  rounded-xl overflow-hidden  sm:w-[calc(50%-1rem)] md:w-[calc(50%-1rem)] lg:max-w-[35rem] "
          >
            {/* Background Image */}
            <img src={image} alt={title} className="h-auto object-cover" />

            {/* Overlay */}
            <div className="absolute  bottom-0 justify-center items-center sm:gap-4 inset-x-0 h-[35%] sm:h-[40%] md:h-[40%] lg:h-[30%] rounded-xl bg-blue-600/70 text-white p-3 grid grid-cols-[80%_20%] grid-rows-2">
              {/* Title */}
              <h3 className="text-xl lg:text-2xl sm:mx-4 font-bold col-span-1 row-start-1 truncate">{title}</h3>

              {/* Icon */}
              <div className=" hidden md:flex justify-center items-center row-start-1">
                <img src={icon} alt={title} className="bg-blue-600 p-2 rounded-lg  size-14 shadow-md" />
              </div>

              {/* Read More Button */}
              <div className="row-start-2 sm:mx-4 col-start-1 flex items-end">
                <Link
                  to={`/projects/${id}`}
                  className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg shadow hover:bg-[#D7A022] transition"
                >
                  Read More
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;