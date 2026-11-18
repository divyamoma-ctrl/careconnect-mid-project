import AboutAwardsSection from "../components/aboutUs/AboutAwardsSection";
import AboutHero from "../components/aboutUs/AboutHero";
import AboutVideoSection from "../components/aboutUs/AboutVideoSection";
import OurTeam from "../components/aboutUs/OurTeam";
import VisionMission from "../components/aboutUs/VisionMission";

const AboutUs = () => {
  return (
    <>
      <AboutHero />
      <VisionMission />
      <AboutAwardsSection />
      <AboutVideoSection />
      <OurTeam />
    </>
  );
};

export default AboutUs;
