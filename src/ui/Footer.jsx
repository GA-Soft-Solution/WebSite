import GA_logo from "/Ga logo.png";
import navLinks from '../data/foot_nav_Links';
import socialLinks from '../data/foot_socialLinks';

const Footer = () => {


 

  return (
    <footer className="relative w-full bg-[hsl(var(--footer-bg))] text-white">
      {/* Main Footer Container */}
      <div className="max-w-[1295px] mx-auto px-4 py-8 flex flex-col items-center">     

        {/* Main Content */}
        {/* <div className=" mx-auto "> */}
          {/* Main Footer Container */}
        <div className="w-full max-w-[1400px] mx-auto  ">
          {/* Logo and Social Section */}
          <div className="mb-4 lg:mb-6">
            {/* Logo */}
             <a href="/">
                   <div className="flex flex-col items-center">                    
                    <img src={GA_logo} alt="GA_logo" className="2xl:h-24 2xl:w-28 xl:h-24 xl:w-28 lg:h-24 lg:w-28 md:h-20 md:w-24 sm:h-16 sm:w-20 h-14 w-16" />
                                                    <h1 className="font-Roboto mt-5 text-white hover:text-[#D7A022] text-center font-bold text-base sm:text-base md:text-base lg:text-base xl:text-lg 2xl:text-xl">
                      GA-Soft
                    </h1>
                  </div>
             </a>

            {/* Social Media Icons */}
            <div className="flex flex-wrap gap-2 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-5 2xl:gap-6 justify-center lg:justify-center py-4 ">
               {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="group w-6 h-6 2xl:h-12 2xl:w-12 xl:h-11 xl:w-11 lg:h-10 lg:w-10 md:h-9 md:w-9 sm:h-8 sm:w-8  rounded-full bg-[#3D4354]  inline-flex items-center justify-center ring-1 ring-black/10 hover:ring-black/20 hover:bg-[#D7A022] transition"
                  aria-label={social.label}
                >
                 <img
                  src={social.icon}
                  alt={social.label}
                  className={`w-3 h-3 2xl:h-5 2xl:w-5 xl:h-5 xl:w-5 lg:h-4 lg:w-4 md:h-4 md:w-4 sm:h-3 sm:w-3 
                              flex justify-center object-contain pointer-events-none select-none 
                              transition filter 
                              ${["Github", "Messenger"].includes(social.label) 
                                ? "invert-0 group-hover:invert" 
                                : "invert group-hover:invert-0"}`}
                  />
                </a>
                
              ))}
            </div>
          </div>


        {/* <div className="mb-4 border-t  border-gray-600 pt-2 w-full sm:w-4/6 md:w-5/6 lg:w-10/12 xl:w-11/12 2xl:w-full mx-auto">
          <nav className="flex flex-wrap justify-center hover:text-[#D7A022]  gap-0 sm:gap-2 md:gap-4 lg:gap-6 xl:gap-8 2xl:gap-10 text-xs sm:text-xs md:text-xs lg:text-sm xl:text-base 2xl:text-lg">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className=" py-2 w-1/3 sm:w-auto text-center text-white hover:text-[hsl(var(--brand-gold))] transition-colors duration-300 font-medium focus:outline-none focus:underline"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div> */}
        <div className="mb-5 border-t-0  sm:border-t md:border-t lg:border-t xl:border-t 2xl:border-t   sm:pt-8 md:pt-8 lg:pt-8 xl:pt-8 2xl:pt-8  sm:border-gray-600 md:border-gray-600 lg:border-gray-600 xl:border-gray-600 2xl:border-gray-600  w-3/6 sm:w-11/12 md:w-11/12 lg:w-11/12 xl:w-11/12 2xl:w-full mx-auto">
          <nav className="flex flex-wrap justify-center hover:text-[#D7A022]  gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-14 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className=" sm:w-auto text-center text-white hover:text-[hsl(var(--brand-gold))] transition-colors duration-300 font-medium focus:outline-none focus:underline"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>


          {/* Copyright */}
          <div >
            <p className="text-center py-4 text-[#B0B2B9] text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl">
              Copyright © 2025 
              <span className="text-white px-2">GA-Soft. </span>
              All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;