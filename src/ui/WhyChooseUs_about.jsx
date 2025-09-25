import offerCards from "../data/whyus_stats"; // adjust the path as needed
import whychooseus from "/images/whychooseus_about.png";
import professional from "/images/professional.png";
import support from "/images/support.png";

const WhyChooseUs = () => {
  return (
    <section
      id="teams"
      className="mt-2 mb-6 bg-white text-center px-8  sm:px-6 md:px-10 lg:px-16 xl:px-20"
    >
      {/* Section Title */}
      <div className="flex justify-center items-center text-center mb-6">
        <span className="inline-block bg-[#136ECA] rounded-full w-2 h-2"></span>
        <h2 className="text-[clamp(1rem,2vw,2rem)] font-semibold text-[#136ECA] px-3">
          WHY CHOOSE US?
        </h2>
        <span className="inline-block bg-[#136ECA] rounded-full w-2 h-2"></span>
      </div>

      {/* Main Heading */}
      <h1 className="text-[clamp(1.5rem,3vw,3rem)] font-semibold mb-10 leading-snug">
        What we offer through our
        <br />
        software services.
      </h1>

<div
// md:grid-cols-2 md:gap-3 md:px-6
  className="grid grid-cols-1 gap-4 px-8
       msm:grid-cols-2 sm:gap-3 sm:px-6
       md:grid-cols-2 md:gap-3 md:px-6
       lg:grid-cols-4 lg:gap-8 lg:px-2
       xl:grid-cols-4 xl:gap-8 xl:px-8"
>
  {/* Image block */}
  <div
    className="sm:col-span-2 md:col-span-2 lg:order-none 
         lg:col-span-2 lg:row-span-3 lg:col-start-3 lg:row-start-1"
  >
    <div className="flex justify-center h-full">
      <img
        src={whychooseus}
        alt="Why Choose Us"
        className="w-full  object-cover rounded-xl "
      />
    </div>
  </div>

  {/* Top left text block */}
  <div className="sm:col-span-2 md:col-span-2 lg:order-none lg:col-span-2">
    <div className="p-6 bg-white rounded-xl">
      {/* <h3 className="text-[clamp(1.2rem,2vw,2.5rem)] font-semibold text-left leading-snug">
        IT Solutions Start with Us,<br /> Grow with You
      </h3> */}
      <h3 className="text-[clamp(1.2rem,2vw,2.5rem)] font-semibold text-left leading-snug">
  IT Solutions Start with Us,
  <span className="block sm:hidden"></span> {/* Only breaks on small screens */}
  Grow with You
</h3>
    </div>
  </div>

  {/* Blue + White cards from data */}
  
  {offerCards.map((card, index) => (
    <div
      key={index}
      className={`order-${index + 3} md:order-${index + 3} lg:order-none 
                 ${card.bg} hover:bg-[#D7A022] transition shadow-md rounded-xl p-6 
                 lg:row-span-2 md:col-start-${index + 1} lg:row-start-2`}
    >
      <h3
        className={`text-[clamp(2rem,5vw,4rem)] font-semibold mt-4 mb-4 text-right ${
          // force the 2nd card's number to be blue
          index === 1 ? "text-[#136ECA]" 
          : card.bg.includes("text-[#136ECA]")  ? "text-white" : ""
        }`}
      >
        {card.number}
      </h3>
      <h3
        className={`text-[clamp(1.2rem,2vw,2rem)] font-semibold mt-4 text-left ${
          card.bg.includes("text-white") ? "text-white" : ""
        }`}
      >
        {card.title}
      </h3>
      <p
        className={`text-[clamp(0.8rem,1.5vw,1rem)] text-left ${
          card.bg.includes("text-white") ? "text-white" : "text-[gray-600]"
        }`}
      >
        {card.description}
      </p>
    </div>
  ))}
</div>
    </section>
  );
};

export default WhyChooseUs;





