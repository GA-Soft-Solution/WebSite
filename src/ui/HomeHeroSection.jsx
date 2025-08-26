 import heroImg from "/HomePageHeroImage.png";

export default function HomeHeroSection() {
  return (
    <div className="w-full min-h-screen flex items-start justify-center  
        bg-gradient-to-r from-[#A8D3FF] via-[#4BA9F0] to-[#136ECA] relative overflow-hidden"
      style={{
        backgroundImage: "url('/Background.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(circle at top left, #A8D3FF 0%, #136ECA 100%)",
          opacity: 0.59,
        }}
      ></div>

      {/* Content wrapper */}
      <div className="container mx-auto flex flex-col md:flex-row items-start justify-between px-4 md:px-12 relative gap-10  lg:pt-40">
        {/* LEFT SIDE */}
        <div className="flex-1 text-left max-w-xl">
         <h1 className="text-[clamp(2.7rem,6vw,5.5rem)] font-bold leading-[1.2] md:leading-tight lg:leading-[1.04] text-black">
            Modern
            <div className="text-[#136ECA]">
              Software <span className="text-black">For</span>
            </div>
            <span className="text-black">Business</span>
          </h1>
          <p className="mt-3 text-black text-base lg:text-lg">
            Integrating and automating workflows simplifies operations, reduces
            manual effort, and boosts efficiency. Seamless integration connects
            various tools and systems. manual effort, and boosts efficiency. 
            various tools and systems.
          </p>
          <button className="mt-5 px-8 py-3 bg-[#136ECA] text-white rounded-lg shadow-lg hover:bg-[#D7A022] transition">
            Read More
          </button>
        </div>

        {/* RIGHT SIDE - IMAGE WITH POLYGON CLIP */}
        <div className="flex-1 relative flex justify-center items-center w-full md:pt-16 lg:pt-0 font-">
  <div
    className="w-full max-w-[800px] aspect-[2/2] sm:aspect-[4/3] md:aspect-[13/10] lg:aspect-[12/9] "
    style={{
      WebkitMaskImage: "url('/ImageMask.png')",
      WebkitMaskRepeat: "no-repeat",
      WebkitMaskSize: "contain",  // important: use contain so mask keeps ratio
      WebkitMaskPosition: "center",
      maskImage: "url('/ImageMask.png')", 
      maskRepeat: "no-repeat",
      maskSize: "contain",
      maskPosition: "center",
      overflow: "hidden",
    }}
  >
    <img
      src={heroImg}
      alt="Hero Image"
      className="w-full h-full object-cover"
    />
  </div>
       </div>





      </div>
    </div>

  );
}














