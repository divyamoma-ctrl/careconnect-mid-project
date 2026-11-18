import Story from "../components/home/Story.tsx";
import HelpSupportSection from "../components/womentSupport/HelpSupport.tsx";
import WomenSupportHero from "../components/womentSupport/WomenSupportHero.tsx";
import { InitiativeSlider } from "../components/womentSupport/WomenSupportSlider";
import WomenSupportStats from "../components/womentSupport/WomenSupportStats.tsx";
import { womenSupports } from "../services/json/homeJson/womenChildSupports.json.ts";
import { womenSupportStories } from "../services/json/WomenChildSupportStory/womenSupportStory.json.ts";

const WomenSupport = () => {
  return (
    <>
      <WomenSupportHero />
      <InitiativeSlider
        titlePrefix="Our Key Initiatives To"
        highlightText="Empower & Uplift"
        titleSuffix="Women"
        description="When you support women empowerment programs, you help them gain vocational skills, digital literacy, and financial independence to lead confident lives."
        supports={womenSupports}
      />

     <WomenSupportStats/>

      {/* Stories Section */}
      <Story
        title="Stories of"
        titlespan="Resilience & Triumph"
        description="Every story proves that with the right support, education, and safe spaces, transformed lives create enduring community change."
        badgeText="Voices of courage"
        stories={womenSupportStories}
        sliderId="women-support-slider"
      />

       <HelpSupportSection supportArea="women" />
    </>
  );
};

export default WomenSupport;
