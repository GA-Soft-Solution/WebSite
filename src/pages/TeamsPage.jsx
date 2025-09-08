import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import teamMembers from "../data/teamMembers";
import HeroSection from "../ui/HeroSection";
import ban_img from "/images/banner_image.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GROUPS = [
  { key: "higher", title: "Higher Level Management" },
  { key: "mid", title: "Mid Level Management" },
  { key: "professional", title: "Professionals" },
];
const TeamsPage = () => {
  const { id } = useParams();  
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [groupSlides, setGroupSlides] = useState({});  
  const [autoplay, setAutoplay] = useState(true);
  const visibleDots = 3; // only 3 dots visible at a time
  const [activeGroup, setActiveGroup] = useState(null);
 
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!id) return;
    const groupKeys = new Set(GROUPS.map((g) => g.key));
    // If param is a group, scroll to that group's title (vertical)
    if (groupKeys.has(id)) {
      const groupTitle = document.getElementById(`group-title-${id}`);
      if (groupTitle) {
        groupTitle.scrollIntoView({ behavior: "smooth", block: "center" });
        groupTitle.classList.add("ring-4", "ring-blue-500");
        setTimeout(() => groupTitle.classList.remove("ring-4", "ring-blue-500"), 1400);
      }
      return;
    }
    // Otherwise treat as a member id: scroll it into view inside the horizontal row
    const memberEl = document.getElementById(id);
    if (memberEl) {
      // This will center the element horizontally inside its nearest scrollable ancestor
      memberEl.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      // highlight the card briefly
      memberEl.classList.add("ring-4", "ring-blue-500");
      setTimeout(() => memberEl.classList.remove("ring-4", "ring-blue-500"), 1400);
    }
  }, [id]);

const getSlidesToShow = () => {
  const width = window.innerWidth;
  if (width < 640) return 1;       // base (mobile)
  if (width < 1024) return 2;      // sm & md (640px – 1023px)
  if (width < 1280) return 3;     
  return 4;                        
};

useEffect(() => {
  const observers = [];
  GROUPS.forEach(({ key }) => {
    const el = document.getElementById(`group-${key}`);
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveGroup(key);
          }
        });
      },
      { threshold: 0.6 } // 60% visible
    );
    observer.observe(el);
    observers.push(observer);
  });
  return () => observers.forEach((obs) => obs.disconnect());
}, []);

const getSliderSettings = (groupKey) => {
    const slidesToShow = getSlidesToShow();
    const currentSlide = groupSlides[groupKey] || 0;
    return {
      dots: true,
      infinite: true,
      speed: 250,
      slidesToShow,
      slidesToScroll: 1,
      autoplay: autoplay && activeGroup === groupKey, 
      autoplaySpeed: 2500,
      afterChange: (current) =>
        setGroupSlides((prev) => ({ ...prev, [groupKey]: current })), // only update this group
      customPaging: (i) => (
        <div
          className={`w-2 h-2 rounded-full ${
            i === currentSlide ? "bg-blue-500" : "bg-gray-300"
          }`}
        />
      ),
      dotsClass: "slick-dots custom-dots",
      appendDots: (dots) => {
        const startIndex =
          Math.floor(currentSlide / visibleDots) * visibleDots;
        const endIndex = startIndex + visibleDots;
        return (
          <div
            style={{
              position: "absolute",
              bottom: "-4rem",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              gap: "0",
            }}
          >
            {dots.slice(startIndex, endIndex)}
          </div>
        );
      },
    };
  };
  
  return (    
    <section className=" h-screen overflow-y-scroll ">
       <HeroSection
        img={ban_img } 
        content={"Teams"}
        />
      <div className="max-w-sm sm:max-w-screen-sm  md:max-w-screen-md lg:max-w-screen-lg  xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-0 sm:px-2 md:px-4 lg:px-6 xl:px-8 2xl:px-0 py-6 ">       
        {GROUPS.map(({ key, title }) => {
          const members = teamMembers.filter(
            (m) => (m.level || "professional") === key // default -> professional
          );
          return (
            <div key={key} id={`group-${key}`}  className="mb-12  "> 
              {/* Centered, non-scrolling title */}     
               <div className="flex items-center justify-center  gap-1   py-8">
                <span className="inline-block bg-[#136ECA] rounded-full  h-2 w-2"></span>
                <h1
                  id={`group-title-${key}`}
                  className=" text-2xl  text-center font-bold text-[#136ECA]"
                >
                  {title}
                </h1>
                <span className="inline-block bg-[#136ECA] rounded-full  h-2 w-2"></span>
              </div>
                
                 {/* Slider */}
              <div className="team-slider "> 
                <Slider key={activeGroup === key ? "active" : "inactive"}  {...getSliderSettings(key)} >               
                  {members.length === 0 ? (
                    <div className="py-2 px-4 text-center text-gray-500 overflow-visible">
                      No members in this group yet.
                    </div>
                  ) : (
                    members.map((member, idx) => (
                                            
                      <article
                            key={`${member.id}-${idx}`}
                            id={member.id}
                            className="flex flex-col justify-center text-center w-2/12 h-full sm:w-1/12  md:w-2/12  lg:w-2/12  xl:w-3/12  2xl:w-4/12  bg-[#F7F9FE] rounded-lg rounded-tr-[5rem] relative px-8 2xl:px-12  py-8 sm:py-5 md:py-5 lg:py-4 xl:py-3 2xl:py-2 transition"
                          >
                              <div className="flex flex-col  items-center ">
                                  <div className=" absolute -top-10 overflow-hidden flex rounded-full ring-4 ring-[#FFFFFF] drop-shadow-2xl w-24 h-24 2xl:w-28 2xl:h-28">
                                              <img
                                              src={member.image}
                                              alt={member.name}
                                              className="flex  w-full h-full justify  scale-[1.8] object-top translate-y-6 shadow-lg  object-cover  mb-4 "
                                            />                          
                                  </div>
                                  <div className="  mt-14 lg:mt-16 xl:mt-20 2xl:mt-24  w-48">
                                      <h3 className="text-xl font-bold ">{member.name}</h3>
                                      <p className="text-sm text-gray-600">{member.role}</p>
                                      <p className="text-gray-600 mt-3 text-xs py-4  space-x-10">
                                        {member.description}
                                        </p>
                                  </div>
                                  <div className="flex items-center justify-center gap-6  mt-4 mb-4">
                                    {member.socials?.map((social) => (
                                      <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className=" group w-6 h-6 flex rounded-full items-center justify-center  hover:bg-[#D7A022] transition"
                                      >
                                        <img
                                          src={social.icon}
                                          alt={social.label}className="w-3 h-4 object-contain pointer-events-none select-none transition group-hover:invert group-hover:brightness-0 group-hover:contrast-200"
                                        />
                                      </a>
                                    ))}
                                  </div>
                            </div>
                      </article>
                    ))
                  )}
                </Slider>
                </div>            
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default TeamsPage;
