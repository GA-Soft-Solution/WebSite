import { Link } from "react-router-dom";
import teamMembers from "../../data/teamMembers";
const Teams = () => {
  return (
    <section id="teams" className="mt-2 bg-white mb-2 h-screen overflow-y-scroll px-14 sm:px-14 md:px-16 lg:px-20 xl:px-24 2xl:px-36 text-center">
        <div className=" flex justify-center items-center  text-center">
                <span className="inline-block  bg-[#136ECA] rounded-full w-2 h-2"></span>
              <h2 className="text-[clamp(1rem,2vw,2rem)] lg:text-[clamp(1.5rem,2vw,2rem)] font-bold text-[#136ECA] px-3">Our Team</h2>
              <span className="inline-block bg-[#136ECA] rounded-full w-2 h-2"></span>
        </div>    
               <h1 className="   text-[clamp(1.5rem,2vw,2rem)] sm:text-[clamp(2rem,2vw,2rem)] md:text-[clamp(2rem,2vw,2rem)] lg:text-[clamp(3rem,2vw,2rem)] xl:text-[clamp(3rem,2vw,2rem)] 2xl:text-[clamp(3.5rem,2vw,2rem)] text-center font-extrabold mb-8">What we offer through our <br/>
               software services.</h1>   
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-y-8   sm:gap-x-10 md:gap-x-6 lg:gap-x-8 xl:gap-x-10 2xl:gap-x-[2vw] max-w-[1536px] mx-auto justify-items-center">

          {teamMembers.slice(0, 4).map((member) => (
            <Link
              to={`/teams/${member.id}`}
              key={member.id}
              className="relative  gap-8 bg-white  rounded-2xl  overflow-hidden   transition block group" >
              {/* Image fills card */}
              <img
                src={member.image}
                alt={member.name}
                className=" object-cover"
              />
              {/* Name + Role overlay */}
              <div className="absolute py-[clamp(3rem,4vh,3rem)] bottom-0 left-0 w-full 
                bg-gradient-to-t  from-slate-800/100  via-slate-800/95 to-transparent text-white  
                transition duration-500  group-hover:opacity-0">
                <h3 className="text-[clamp(1.5rem,2vw,2rem)] sm:text-[clamp(1.5rem,2vw,2rem)] md:text-[clamp(1.5rem,2vw,2rem)] lg:text-[clamp(1.5rem,2vw,2rem)] xl:text-[clamp(1.5rem,2vw,2rem)] 2xl:text-[clamp(1.5rem,2vw,2rem)] font-bold">
                  {member.name}
                </h3>
                <p className="text-[clamp(1rem,1.5vw,1.125rem)]  sm:text-[clamp(1rem,1vw,1rem)] md:text-[clamp(1rem,1vw,1rem)] lg:text-[clamp(1rem,1vw,1rem)] xl:text-[clamp(1rem,1vw,1rem)] 2xl:text-[clamp(1rem,1vw,1rem)]    font-light">
                  {member.role}
                </p>
              </div>
              {/* Social icons (original placement preserved) */}
              <div className="absolute bottom-0 w-[25%] h-[70%] left-0 flex flex-col  rounded-bl-none rounded-tr-2xl  rounded-br-none bg-white px-3 py-7 gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                {member.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/social w-[85%] h-[100%]  rounded-full bg-[#ecf1fb] inline-flex items-center justify-center   hover:bg-[#D7A022] transition" > 
                    <img
                      src={social.icon}
                      alt={social.label}                    
                      className="invert-0 group-hover/social:invert w-[50%] h-[55%] object-contain" />                                                   
                  </a>
                ))}
              </div>
            </Link>
          ))}
        </div>   
    </section>
  );
};
export default Teams;
