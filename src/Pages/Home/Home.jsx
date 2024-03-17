import CarouselHeader from "../../components/CarouselHeader/CarouselHeader";
import ContactSection from "../../components/ContactSection/ContactSection";
import ExtraInfoProperty from "../../components/ExtraInfoProperty/ExtraInfoProperty";
import FeaturesVillaSection from "../../components/FeaturesVillaSection/FeaturesVillaSection";
import PropertiesVilla from "../../components/PropertiesVilla/PropertiesVilla";
import VideoSection from "../../components/VideoSection/VideoSection";

const Home = () => {
  return (
    <>
      <CarouselHeader />
      <FeaturesVillaSection />
      <VideoSection />
      <ExtraInfoProperty />
      <PropertiesVilla />
      <ContactSection />
    </>
  );
};

export default Home;
