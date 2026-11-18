
import AdoptionInfo from "../components/childWelfare/AdoptionInfo";
import ChildWelfareHero from "../components/childWelfare/ChildWelfareHero";
import { ChildWelfareStats } from "../components/childWelfare/ChildWelfareStats";
import Story from "../components/home/Story";
import { InitiativeSlider } from "../components/womentSupport/WomenSupportSlider";
import { childSupports } from "../services/json/homeJson/womenChildSupports.json";
import { childWelfareStories } from "../services/json/WomenChildSupportStory/childWelfareStory.json";

const ChildWelfare = () => {
  return (
    <>
      <ChildWelfareHero />
      <InitiativeSlider
        titlePrefix="Our Key Initiatives To"
        highlightText="Health, Study and Protection"
        titleSuffix="For Children"
        description="When you support child health initiatives, you ensure proper health and nutrition essential for children's physical, psychological, and cognitive development."
        supports={childSupports}
      />

      <ChildWelfareStats/>
          {/* <AdoptionInfo/> */}

       {/* ChildWelfare Story-- */}

      <Story
        title="Nurturing Young Dreams,"
        titlespan="Building Safe Futures"
        description="Discover how quality education, healthcare, and protective environments help vulnerable children unlock their true potential."
        badgeText="Every Child Matters"
        stories={childWelfareStories}
        sliderId="child-welfare-slider"
      />

      <AdoptionInfo/>
    </>
  );
};

export default ChildWelfare;
