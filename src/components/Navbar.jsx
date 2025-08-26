import  { useState } from 'react';
import {  X} from 'lucide-react';
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
// import HamburgerIcon from "../images/Button - Toggle navigation (1).png";
import HamburgerIcon from "/navbar&footer/Button - Toggle navigation (1).png";
import GA_logo from "/Ga logo.png";
import mobile_x from "/navbar&footer/mobile_x.png";
import send_email from "/navbar&footer/send_email.png";
import visit from "/navbar&footer/visit.png";
import phone from "/navbar&footer/phone.png";
import navLinks from '../data/nav_Links';
import socialLinks from '../data/nav_socialLinks';


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const handleDemoClick = () => {
    navigate('/demo');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
<header className='mx-4 sm:mx-6 md:mx-8 lg:mx-16 xl:mx-36 2xl:mx-44 flex justify-between pt-3 items-center'>
  {/* Logo */}
  
           <NavLink to="/">
          {/* <div className="flex items-center px-6">
            <img src={GA_logo} alt="GA_logo" className="h-14 w-16 px-1" />
            <h1 className=" px-1 ml-2 text-center font-bold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl " style={{ color: "#136ECA" }} >
              GA-Soft </h1>
          </div> */}
          <div className="flex items-center">
             <img src={GA_logo} alt="GA_logo" className="2xl:h-24 2xl:w-28 xl:h-24 xl:w-28 lg:h-24 lg:w-28 md:h-20 md:w-24 sm:h-16 sm:w-20 h-14 w-16" />
                                <h1 className="font-Roboto mt-2 text-[#136ECA] hover:text-[#D7A022] text-center font-bold text-base sm:text-base md:text-base lg:text-base xl:text-lg 2xl:text-xl">
              GA-Soft
            </h1>
          </div>

          </NavLink>


                    {/* Desktop Navigation Links */}
          {/* <div className="hidden lg:flex items-center justify-center   text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 
  gap-0  lg:gap-8 xl:gap-16 2xl:gap-32  bg-white rounded-xl shadow-md" > */}
    {/* <div className="hidden md:flex mx-auto gap-0 md:gap-1 lg:gap-1 xl:gap-3 2xl:gap-12 h-[48.7px] items-center justify-center rounded-full px-3 bg-white  shadow-md" > */}
    <div className="hidden md:flex mx-auto gap-[clamp(0.25rem,1vw,3rem)] h-[48.7px] items-center justify-center rounded-full px-3 bg-white shadow-md">

            {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  className={({ isActive }) =>
                    `relative px-2 py-2 rounded-md font-semibold text-xs sm:text-xs md:text-xs lg:text-sm xl:text-base 2xl:text-lg transition-colors duration-300 ease-in-out ${
                      isActive
                        ? "text-[#D7A022]" // 🔥 active color
                        : "text-gray-800 hover:text-[#D7A022] hover:bg-gray-100"
                    }`
                  }
                >
                  {link.name}
                  <span
                    className="absolute bottom-0 left-0 h-0.5 bg-navbar-hover transition-all duration-300"
                  ></span>
                </NavLink>
                ))}
          </div>
       
             <button 
              className="hidden md:block bg-[#136ECA] text-white font-Roboto  px-6 py-3   
               rounded-full font-medium hover:bg-[#D7A022] transition-all duration-300 
              ease-in-out hover:shadow-lg hover:scale-105 
               text-xs sm:text-xs md:text-xs lg:text-sm xl:text-base 2xl:text-lg"
              type="button"
              onClick={handleDemoClick}
            >
              See Demo
          </button>
  

          {/* Mobile Menu Button */}
           <div className=" md:hidden 2xl:h-24 2xl:w-28 xl:h-20 xl:w-24 lg:h-16 lg:w-20 md:h-16 md:w-20 sm:h-16 sm:w-20 h-16 w-20 ">
            <button
              onClick={toggleMobileMenu}
              className=" text-navbar-text hover:text-navbar-hover p-2 rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-brand-blue "
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                // <X className="h-6 w-6" />
                <img src={mobile_x} alt="mobile_x" className="  h-4 w-4 hover:brightness-0 hover:invert hover:sepia hover:hue-rotate-[10deg] hover:saturate-[300%] hover:contrast-125"/>
              ) : (
                // <Menu className="h-6 w-6" />
                <img
                    src={HamburgerIcon}
                    alt="Hamburger Menu"
                    className="2xl:h-24 2xl:w-28 xl:h-24 xl:w-28 lg:h-24 lg:w-28 md:h-20 md:w-24 sm:h-16 sm:w-20 h-14 w-16 object-contain "
                    style={{ filter: "drop-shadow(1px 2px 2px grey)" }}
                  />
              )}
            </button>
          </div>
          
          {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
          role="presentation"
        />
      )}

      {/* Mobile Menu Slide-out */}
      <div 
        // className={`lg:hidden fixed top-0 right-0 h-full w-80 bg-[#F7F9FE] shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
        //   isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        // }`}
         className={`md:hidden fixed top-0 right-0 h-full w-80 bg-[#F7F9FE] shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
    isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
  } flex flex-col`}
        role="menu"
        aria-orientation="vertical"
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 flex-shrink-0">
          <div className="flex items-center">
            <img src={GA_logo} alt="GA_logo" className="2xl:h-24 2xl:w-28 xl:h-24 xl:w-28 lg:h-24 lg:w-28 md:h-20 md:w-24 sm:h-16 sm:w-20 h-14 w-16" />
                                <h1 className="font-Roboto mt-2 text-[#136ECA] hover:text-[#D7A022] text-center font-bold text-base sm:text-base md:text-base lg:text-base xl:text-lg 2xl:text-xl">
              GA-Soft
            </h1>
          </div>          
          <button
            onClick={toggleMobileMenu}
            className="text-navbar-text h-10 w-12 inline-flex items-center  justify-center hover:bg-[#D7A022]   bg-blue-100 hover:text-navbar-hover p-2 rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-brand-blue"
            aria-label="Close mobile menu"
          >
            <img src={mobile_x} alt="mobile_x" className="h-4 w-4 hover:brightness-0 hover:invert hover:sepia hover:hue-rotate-[10deg] hover:saturate-[300%] hover:contrast-125"/>
          </button>
        </div>
        {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto mb-5">
        {/* Mobile Navigation Links */}
        <div className="py-6 px-6 space-y-2">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-navbar-text hover:text-[#D7A022] text-[#136ECA] hover:text-navbar-hover hover:bg-gray-50 px-4 py-3 rounded-md font-medium transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 transform hover:translate-x-2"
              onClick={() => setIsMobileMenuOpen(false)}
              role="menuitem"
              tabIndex={0}
              style={{
                animationDelay: `${index * 50}ms`,
                animation: isMobileMenuOpen ? 'fade-in 0.3s ease-out forwards' : 'none'
              }}
            >
              {link.name}
            </a>
          ))}
        </div>

         {/* Contact Info Section */}
        <div className="flex justify-center mx-1 px-1 py-4 border-t border-gray-200">
          {/* <h3 className="text-navbar-text font-semibold mb-4 text-lg">Contact Info</h3> */}
          <div className="bg-blue-100 rounded-3xl px-14 py-4 space-y-4   ">
            <h3 className="text-navbar-text text-[#136ECA] font-bold mb-4 text-lg text-center">Contact Info</h3>

         <div className="flex items-start mb-3">
          {/* Icon */}
          <img 
            src={visit} 
            alt="Location Icon" 
            className="w-5 h-5 mr-2 mt-1 object-contain" 
          />

          {/* Text Block */}
          <div>
            {/* Title */}
            <p className="text-sm text-gray-500 mb-1">Visit Our Location</p>

            {/* Value */}
            <p className="text-base  text-black">Addis Ababa, Ethiopia</p>
          </div>
        </div>

            {/* Looking For Project */}
            <div className="flex items-start mb-3">
          {/* Icon */}
          <img 
              src={phone} 
              alt="Phone Icon"  
            className="w-5 h-5 mr-2 mt-1 object-contain" 
          />

          {/* Text Block */}
          <div>
            {/* Title */}
            <p className="text-sm text-gray-500 mb-1">Looking For Project</p>

            {/* Value */}
            <p className="text-base  text-black">+251 911 123 456</p>
          </div>
        </div>

                    
                      {/* send email */}

                          <div className="flex items-start mb-3">
          {/* Icon */}
          <img 
              src={send_email} 
              alt="Email Icon"  
            className="w-5 h-5 mr-2 mt-1 object-contain" 
          />

          {/* Text Block */}
          <div>
            {/* Title */}
            <p className="text-sm text-gray-500 mb-1">Send Us Email</p>

            {/* Value */}
            <p className="text-base  text-black">example@gmail.com</p>
          </div>
        </div>

        

            <div>


          <div className="flex items-center gap-2 ml-7">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="group w-[31.03px] h-[31.03px] rounded-full bg-white inline-flex items-center justify-center ring-1 ring-black/10 hover:ring-black/20 hover:bg-[#D7A022] transition"
                  aria-label={social.label}
                >
                  <img
                    src={social.icon}
                    alt={social.label}
                    className="w-[16px] h-[16px] object-contain pointer-events-none select-none transition group-hover:invert group-hover:brightness-0 group-hover:contrast-200"
                  />
                </a>
                
              ))}
</div>

            </div>

          </div>
        </div>


        {/* Mobile Demo Button */}
        <div className="px-6 py-4 border-t border-gray-200 ">
          <NavLink to="/demo">
            <button 
               className="w-half bg-[#136ECA] text-white px-6 py-3 rounded-md font-medium hover:bg-[#D7A022] transition-all duration-300 ease-in-out hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 mx-auto block "
                onClick={() => setIsMobileMenuOpen(false)}
              type="button"
            >
              See Demo
            </button>
          </NavLink>

        </div>
        </div>
      </div>
          
</header>




  );
};

export default Navbar;