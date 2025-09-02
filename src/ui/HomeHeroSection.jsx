import heroContent from "../data/HomeHeroSection.js"; 

export default function HomeHeroSection() {
  return (
    <div className="w-full md:min-h-screen flex items-start justify-center relative overflow-hidden"
      style={{  backgroundImage: "url('/Background.png')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
            }}>
     
    
      <div className="absolute inset-0 z-0"
        style={{
                background: "radial-gradient(circle at top left, #A8D3FF 0%, #136ECA 100%)",
                opacity: 0.59,
              }}>
      </div>


      <div className="container mx-auto flex flex-col md:flex-row items-start justify-between px-4 md:px-12 relative gap-7 lg:pt-40">
        
        <div className="flex-1 text-left max-w-xl">
         
          <h1 className="text-[clamp(2.9rem,6vw,5.5rem)] font-bold leading-[1.2] md:leading-tight lg:leading-[1.04] text-black">
            {heroContent.title.map((part, idx) => (
              <span key={idx} className={part.highlight ? "text-[#136ECA]" : "text-black"}>
                {part.text}{" "}
              </span>
            ))}
          </h1>

          <p className="mt-3 text-black text-base lg:text-lg">{heroContent.subtitle}</p>
          <button className="mt-5 px-8 py-3 bg-[#136ECA] text-white rounded-lg shadow-lg hover:bg-[#D7A022] transition">
            {heroContent.buttonText}
          </button>
        </div>

       
        <div className="flex-1 relative flex md:justify-center items-center w-full md:pt-16 lg:pt-0 justify-end">
          <div className="w-full max-w-[800px] aspect-[2/2] sm:aspect-[4/3] md:aspect-[13/10] lg:aspect-[12/9]"
            style={{  WebkitMaskImage: "url('/ImageMask.png')",
                      WebkitMaskRepeat: "no-repeat",
                      WebkitMaskSize: "contain",
                      WebkitMaskPosition: "center",
                      maskImage: "url('/ImageMask.png')",
                      maskRepeat: "no-repeat",
                      maskSize: "contain",
                      maskPosition: "center",
                      overflow: "hidden",
                  }}>
          
            <img
              src={heroContent.image}
              alt="Hero Image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
