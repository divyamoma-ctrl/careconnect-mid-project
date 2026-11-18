import ExplorePathway from "../components/volunteer/ExplorePathway"
import VolunteerFAQ from "../components/volunteer/VolunteerFAQ"
// import VolunteerForm from "../components/volunteer/volunteerForm"
import VolunteerHero from "../components/volunteer/VolunteerHero"
// import VolunteerProcess from "../components/volunteer/VolunteerProcess"
// import VolunteerRoles from "../components/volunteer/VolunteerRoles"
// import VolunteerStats from "../components/volunteer/VolunteerStats"
import WhyVolunteer from "../components/volunteer/WhyVolunteer"


const Volunteer = () => {
  return (
  <>
  <VolunteerHero/>
  <WhyVolunteer/>
 
  <ExplorePathway/>
 
  {/* <VolunteerForm/> */}
  <VolunteerFAQ/>
  </>
  )
}

export default Volunteer