// import React from 'react';
import { Eye, Rocket } from 'lucide-react';

const AboutSection = () => {
  return (
    <div className="min-h-screen lg:mx-[100px] flex items-center justify-center py-12">
      <section className="w-full rounded-none  overflow-hidden">
        <div className="px-[15px] py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-28">
          {/* Header */}
          <div className="text-center mb-10 md:mb-14 lg:mb-16 xl:mb-20">
            <p className="text-blue-600 font-semibold tracking-wider text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-xl uppercase mb-3 md:mb-4">
              • About Us •
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-5xl font-bold text-gray-900 leading-tight">
              What we offer through our
              <br className="hidden sm:block" />
              <span className="">
                software services.
              </span>
            </h2>
          </div>

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 md:gap-12 lg:gap-16 xl:gap-16 2xl:gap-16">
            {/* Image Section */}
            <div className="w-full lg:w-2/5 flex justify-center">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full h-[330px] md:h-[380px] lg:h-[400px] xl:h-[400px] 2xl:h-[400px]">
                <img
                  src="../About_pho.png"
                  alt="Professional team collaboration"
                  className="w-full h-full object-cover"
                />

                {/* Experience Badge */}
                <div className="absolute bottom-5 left-5 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl px-5 py-3 shadow-xl">
                  <div className="text-2xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-4xl font-bold leading-tight">
                    15-Yrs
                  </div>
                  <div className="text-sm md:text-base lg:text-lg xl:text-lg 2xl:text-lg font-medium leading-tight">
                    Of Experience
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-1/2 space-y-6 md:space-y-8 lg:space-y-4 xl:space-y-8 2xl:space-y-10">
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed text-base md:text-lg lg:text-lg xl:text-lg 2xl:text-lg">
                  We deliver comprehensive technology solutions designed to
                  transform your business operations. Our expert team combines
                  innovation with proven methodologies to create software that
                  drives real results and sustainable growth.
                </p>
              </div>

              {/* Vision */}
              <div className="flex items-start space-x-4 md:space-x-5 lg:space-x-5 xl:space-x-5 2xl:space-x-5">
                <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 lg:w-14 lg:h-14 xl:w-14 xl:h-14 2xl:w-14 2xl:h-14 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Eye className="w-6 h-6 md:w-7 md:h-7 lg:w-7 lg:h-7 xl:w-7 xl:h-7 2xl:w-7 2xl:h-7 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl font-semibold text-gray-900 mb-2 md:mb-3">
                    Vision
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base md:text-lg lg:text-lg xl:text-lg 2xl:text-lg">
                    To be the most trusted and innovative IT solutions provider,
                    empowering businesses to achieve their digital transformation
                    goals.
                  </p>
                </div>
              </div>

              {/* Mission */}
              <div className="flex items-start space-x-4 md:space-x-5 lg:space-x-5 xl:space-x-5 2xl:space-x-5">
                <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 lg:w-14 lg:h-14 xl:w-14 xl:h-14 2xl:w-14 2xl:h-14 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Rocket className="w-6 h-6 md:w-7 md:h-7 lg:w-7 lg:h-7 xl:w-7 xl:h-7 2xl:w-7 2xl:h-7 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl font-semibold text-gray-900 mb-2 md:mb-3">
                    Mission
                  </h3>
                  <ul className="text-gray-600 space-y-2 md:space-y-3 lg:space-y-3 xl:space-y-3 2xl:space-y-3 text-base md:text-lg lg:text-lg xl:text-lg 2xl:text-lg">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3">−</span>
                      Deliver high-quality technology solutions tailored to client needs
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3">−</span>
                      Enhance operational efficiency and security for all our partners
                    </li>
                  </ul>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4 md:pt-6 lg:pt-6 xl:pt-6 2xl:pt-6">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 md:px-10 md:py-4 lg:px-10 lg:py-4 xl:px-10 xl:py-4 2xl:px-10 2xl:py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-200 text-base md:text-lg lg:text-lg xl:text-lg 2xl:text-lg">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
