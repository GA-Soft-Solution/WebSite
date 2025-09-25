import Teams from "../components/HomePageComponents/Teams";
import WhyChooseUs from "../ui/WhyChooseUs_about"
function AboutUs() {
  return <div className='h-screen  overflow-y-scroll'>
    <WhyChooseUs/>
    <Teams />
  </div>;
}

export default AboutUs;
