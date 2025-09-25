import whychooseus from "/images/whychooseus.png";
import client_centerd from "/images/client_centerd.png";
import professional from "/images/professional.png";
import innovative_scalable from "/images/innovative_scalable.png";
import support from "/images/support.png";

const WhyChooseUs = () => {
  return (
    <section
      id="teams"
      className="mt-2 mb-6 bg-white text-center "
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

      <div className="bg-[#f7f7f7]  ">
          {/* Main Grid Layout */}
      <div className="grid  grid-cols-1 xl:grid-cols-3  gap-y-6   py-4 lg:py-14 px-12  sm:px-20 md:px-32 lg:px-24  ">
        {/* Left Side Image */}
        <div className="flex justify-center items-stretch  sm:px-4 md:px-8 lg:px-20 xl:px-0  ">
          <img
            src={whychooseus}
            alt="Why Choose Us"
            className="w-full  object-cover rounded-3xl shadow-xl "
          />
        </div>

        {/* Right Side Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6  lg:col-span-2 lg:pl-6   ">
          {/* Card 1 */}
          <div className="flex flex-col bg-white shadow-sm  transition-all duration-300 hover:shadow-[inset_0px_20px_30px_-30px_rgba(0,0,0,0.5)] py-10 rounded-xl p-6">
            <div className=" flex justify-center items-center bg-[#faf8f8] h-14 w-14 rounded-xl " >
              <img
              src={client_centerd}
              alt="Client Centered"
              className="h-7 w-6 object-contain mx-auto sm:mx-0"
            />
            </div>
            
            <h3 className="text-[clamp(1.2rem,2vw,1.5rem)] font-semibold mt-4 mb-2 text-left sm:text-left">
              Client-Centered
            </h3>
            <p className="text-gray-600 pr-28 text-[clamp(0.8rem,1.5vw,1rem)] sm:pr-12 text-left sm:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col bg-white shadow-sm  transition-all duration-300 hover:shadow-[inset_0px_20px_30px_-30px_rgba(0,0,0,0.5)] py-10 rounded-xl p-6">
           <div className=" flex justify-center items-center bg-[#faf8f8] h-14 w-14 rounded-xl " >
            <img
              src={innovative_scalable}
              alt="Innovative"
              className="h-7 w-6 object-contain mx-auto sm:mx-0"
            />
            </div>
            <h3 className="text-[clamp(1.2rem,2vw,1.5rem)] font-semibold mt-4 mb-2 text-left sm:text-left">
              Innovative & Scalable
            </h3>
            <p className="text-gray-600 pr-28 text-[clamp(0.8rem,1.5vw,1rem)] sm:pr-12 text-left sm:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col bg-white shadow-sm  transition-all duration-300 hover:shadow-[inset_0px_20px_30px_-30px_rgba(0,0,0,0.5)] py-10 rounded-xl p-6">
            <div className=" flex justify-center items-center bg-[#faf8f8] h-14 w-14 rounded-xl " >
            <img
              src={support}
              alt="Support"
              className="h-7 w-6 object-contain mx-auto sm:mx-0"
            />
            </div>
            <h3 className="text-[clamp(1.2rem,2vw,1.5rem)] font-semibold mt-4 mb-2 text-left sm:text-left">
              24/7 Support
            </h3>
            <p className="text-gray-600 pr-28 text-[clamp(0.8rem,1.5vw,1rem)] sm:pr-12 text-left sm:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.
            </p>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col bg-white shadow-sm  transition-all duration-300 hover:shadow-[inset_0px_20px_30px_-30px_rgba(0,0,0,0.5)] py-10 rounded-xl p-6">
            <div className=" flex justify-center items-center bg-[#faf8f8] h-14 w-14 rounded-xl " >
            <img
              src={professional}
              alt="Professional"
              className="h-7 w-6 object-contain mx-auto sm:mx-0"
            />
            </div>
            <h3 className="text-[clamp(1.2rem,2vw,1.5rem)] font-semibold mt-4 mb-2 text-left sm:text-left">
              Professional Team
            </h3>
            <p className="text-gray-600 pr-28 text-[clamp(0.8rem,1.5vw,1rem)] sm:pr-16 text-left sm:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.
            </p>
          </div>
        </div>
      </div>
      </div>

      
    </section>
  );
};

export default WhyChooseUs;


