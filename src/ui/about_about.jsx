import { useState } from "react";

const AboutSection = () => {
  const smallImages = [
    { id: 1, src: "/abt1.png", alt: "Software engineering team working" },
    { id: 2, src: "/abt2.png", alt: "Team collaboration" },
    { id: 3, src: "/abt3.png", alt: "Coding session" },
  ];

  const [selectedImage, setSelectedImage] = useState(smallImages[0].src);

  return (
    <section className="py-8 lg:mx-[100px] md:py-12 lg:py-16 xl:py-20">
      <div className="w-full px-[15px]">
        {/* Header */}
        <div className="text-center mb-6 md:mb-8 lg:mb-10 xl:mb-12">
          <p className="font-bold text-blue-600 text-xs md:text-sm lg:text-base xl:text-lg tracking-wider uppercase mb-2 md:mb-3 lg:mb-4">
            • ABOUT US •
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[2.5rem] 2xl:text-[2.75rem] font-bold text-gray-900 leading-snug md:leading-tight mx-auto">
            What we offer through our software services
          </h2>
        </div>

        {/* Desktop Layout */}
        <div className="lg:flex lg:items-start lg:gap-10 xl:gap-14 2xl:gap-16">
          {/* Images Section */}
          <div className="hidden lg:grid lg:grid-cols-[minmax(0,260px)_minmax(0,260px)] xl:grid-cols-[minmax(0,320px)_minmax(0,320px)] 2xl:grid-cols-[minmax(0,400px)_minmax(0,400px)] gap-5 xl:gap-6 items-start flex-shrink-0">
            <div className="row-span-2 rounded-xl overflow-hidden shadow-md">
              <img
                src="/abt1.png"
                alt="Software engineering team working"
                className="w-full h-[400px] xl:h-[460px] 2xl:h-[500px] object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-md">
              <img
                src="/abt2.png"
                alt="Team collaboration"
                className="w-full h-[190px] xl:h-[210px] 2xl:h-[230px] object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-md">
              <img
                src="/abt3.png"
                alt="Coding session"
                className="w-full h-[190px] xl:h-[210px] 2xl:h-[230px] object-cover"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="mt-6 lg:mt-0 lg:flex-1 space-y-5 md:space-y-6 lg:space-y-7 text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-[1.35rem] leading-relaxed">
            <p className="text-gray-700">
              We provide end-to-end software development services tailored to your business needs. 
              Our team specializes in web and mobile application development, ensuring high-quality and scalable solutions.
            </p>
            <p className="text-gray-700">
              Our expertise covers modern technologies such as React, Node.js, Python, and cloud platforms. 
              We focus on creating robust, maintainable, and efficient software that delivers real value to your organization.
            </p>
           
          </div>
        </div>

        {/* Mobile & Tablet Layout */}
        <div className="lg:hidden mt-6 md:mt-8 relative flex justify-center">
          <div className="w-full max-w-[335px] md:max-w-[500px] h-[260px] md:h-[350px] rounded-lg overflow-hidden">
            <img
              src={selectedImage}
              alt="Selected team activity"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 md:space-x-4">
            {smallImages.map((image) => (
              <div
                key={image.id}
                className={`w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 border-white shadow-md -translate-y-4 sm:-translate-y-6 md:-translate-y-8 cursor-pointer ${
                  selectedImage === image.src ? "ring-2 ring-blue-500" : ""
                }`}
                style={{ zIndex: smallImages.length - image.id }}
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
