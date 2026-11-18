import CounterMetricsBar from "../components/home/CounterMetricsBar";
import HeroSec from "../components/home/HeroSec";
import HomeAbout from "../components/home/HomeAbout";
import HomeCampaign from "../components/home/HomeCampaign";
import HomeEmergencySupport from "../components/home/HomeEmergencySupport";

import HomeWhatWeDo from "../components/home/HomeWhatWeDo";
import ImpactQuote from "../components/home/ImpactQuote";
import MakeDifference from "../components/home/MakeDifference";
import PartnerSwiper from "../components/home/PartnerSwiper";
import Story from "../components/home/Story";

import metrics from "../services/json/homeJson/counterMetric.json";

const Home = () => {
  return (
    <>
      <HeroSec />
      <PartnerSwiper />
      <HomeAbout />
      <HomeWhatWeDo />
      <CounterMetricsBar metrics={metrics} />
      <HomeCampaign />
       <MakeDifference/>
      <Story />
      <HomeEmergencySupport/>
      <ImpactQuote/>
    </>
  );
};

export default Home;
