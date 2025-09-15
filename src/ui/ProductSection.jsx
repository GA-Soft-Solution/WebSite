import { Link } from "react-router-dom";
import products from "../data/productsData";

function Projects() {
  return (
    <section className="px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 py-16">
      {/* Section Header */}
      <header className="text-center mb-20">
        <div className="inline-flex items-center gap-2 text-blue-600 text-xl font-bold">
          <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
          Products
          <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
        </div>

        <h2 className="text-3xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-gray-900 mt-4">
          What we offer through our{" "}
          <span className="block mx-auto">software services.</span>
        </h2>
      </header>

      {/* Cards Wrapper */}
      <div
        className="
          flex flex-wrap justify-center
          gap-6 sm:gap-8 md:gap-7 lg:gap-8 xl:gap-9 2xl:gap-8
          px-2  lg:px-2 xl:px-3 2xl:px-4
           mx-auto
        "
      >
        {products.map(({ id, title, image, icon }) => (
          <article
            key={id}
            className="
              relative rounded-xl overflow-hidden
              w-full sm:w-[calc(50%-1rem)] md:w-[calc(50%-1.25rem)]
              lg:w-[calc(50%-1.5rem)] xl:w-[calc(50%-1.75rem)] 2xl:w-[calc(50%-2rem)]
              max-w-[32rem] transition
            "
          >
            {/* Background Image */}
            <img src={image} alt={title} className="w-full h-auto object-cover" />

            {/* Overlay */}
            {/* <div className="absolute bottom-0 left-0 w-full bg-[#136ECA] bg-opacity-70 px-6 py-4 rounded-xl text-white grid grid-cols-[80%_20%] items-center"> */}
              <div className="absolute bottom-0  justify-center items-center gap-3 sm:gap-4 inset-x-0 h-[35%] sm:h-[40%] md:h-[40%] lg:h-[30%] rounded-xl bg-[#136ECA]/70 text-white p-3 grid grid-cols-[80%_20%] grid-rows-2">
              {/* Title */}
              <h3 className="text-lg font-semibold px-4 lg:mx-4  truncate">{title}</h3>

              {/* Icon */}
              {icon && (
                <div className="hidden md:flex justify-center items-center">
                  <img
                    src={icon}
                    alt={title}
                    className="bg-blue-600 p-2 rounded-lg size-12 shadow-md"
                  />
                </div>
              )}

              {/* Read More Button */} 
              <div className="row-start-2 mx-4 sm:mx-4 lg:mx-8  col-start-1 flex items-end"> 
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
