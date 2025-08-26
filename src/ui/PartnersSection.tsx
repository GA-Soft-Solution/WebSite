import React from "react";
import partnersData from "../data/partners-data";

const PartnersSection = () => {
  const numPartners = partnersData.length;

  return (
    <section className="pb-24">
      <style>{`
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }

        /* Marquee keyframes for different screen sizes */
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-15% * ${numPartners})); }
        }
        @media (max-width: 639px) {
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-45% * ${numPartners})); }
          }
        }
        @media (min-width: 640px) and (max-width: 767px) {
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-30% * ${numPartners})); }
          }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-22% * ${numPartners})); }
          }
        }
        @media (max-width: 1300px) {
          .custom-container {
            width: 100% !important;
            max-width: 1301px;
          }
        }
      `}</style>

      <div
        className="custom-container px-12 sm:px-12 lg:px-20 w-[65%] sm:w-[65%] md:w-[62%] lg:w-[100%] mx-auto"
        style={{ maxWidth: "1301px", minHeight: "112px" }}
      >
        {/* Section Header */}
        <div className="text-center mb-8 lg:mb-12">
          <div className="inline-flex items-center gap-2 text-blue-600 text-xl font-bold mb-4">
            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
            Our Partners
            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
          </div>
        </div>

        {/* Partners Marquee */}
        <div className="overflow-hidden px-[20.2%] sm:px-[1.5%] md:px-[1%] lg:px-[0.2%]">
          <div className="flex flex-nowrap animate-marquee items-center">
            {[...partnersData, ...partnersData].map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className="
                  flex-shrink-0 mx-2 h-16
                  w-[75%] sm:w-[30%] md:w-[22%] lg:w-[15%]
                  flex items-center justify-center
                  group transition-all duration-300 hover:shadow-lg
                "
                title={partner.name}
              >
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="
                    w-[80%] sm:w-[50%] md:w-[50%] lg:w-[45%]
                    h-full object-contain
                  "
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
