import React from "react";

const HeroSection = ({ img, content }) => {
  return (
    <section
      className="relative overflow-hidden pt-24 md:pt-18 lg:pt-32 pb-8 bg-cover bg-center"
      style={{ backgroundImage: `url(${img})` }}
    >
      {/* Blue overlay */}
      <div className="absolute inset-0 bg-blue-600/70"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center pt-4 md:pt-1 lg:pb-10 justify-center">
        <h1 className="text-4xl lg:text-6xl font-bold text-white text-center">
          {content}
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
