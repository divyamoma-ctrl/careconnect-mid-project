import { createBrowserRouter } from "react-router-dom";
import UserWrapper from "../layouts/userLayouts/UserWrapper";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import WhatWeDo from "../pages/WhatWeDo";

import NotFound from "../pages/NotFound";
import Campaigns from "../pages/Campaigns";
import Volunteer from "../pages/Volunteer";
import WomenSupport from "../pages/WomenSupport";
import ChildWelfare from "../pages/ChildWelfare";
import OurWork from "../pages/OurWork";
import Contact from "../pages/Contact";
import DonateNow from "../pages/DonateNow";
import CampaignDetails from "../pages/CampaignDetails";

import EmergencyHelp from "../pages/EmergencyHelp";
import AdminWrapper from "../layouts/adminLayouts/AdminWrapper";
import Dashboard from "../pages/admin/Dashboard";
import Users from "../pages/admin/Users";
import Volunteers from "../pages/admin/Volunteers";
import AdminCampaigns from "../pages/admin/AdminCampaigns";
import VolunteerApplicationPage from "../pages/VolunteerApplicationPage";

const Routes = createBrowserRouter([
  // -------- USER --------
  {
    path: "/",
    element: <UserWrapper />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "aboutus",
        element: <AboutUs />,
      },
      {
        path: "WhatWedo",
        element: <WhatWeDo />,
      },
      {
        path: "children-welfare",
        element: <ChildWelfare />,
      },
      {
        path: "women-support",
        element: <WomenSupport />,
      },
      {
        path: "our-work",
        element: <OurWork />,
      },

      {
        path: "campaigns",
        element: <Campaigns />,
      },
      {
        path: "campaigns/:id",
        element: <CampaignDetails />,
      },

      {
        path: "volunteer",
        element: <Volunteer />,
      },
      {
        path: "volunteerapplication/:id",
        element: <VolunteerApplicationPage/>,
      },
      {
        path: "/emergency-help",
        element: <EmergencyHelp />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "donateNow",
        element: <DonateNow />,
      },
    ],
  },

  // ======= ADMIN ========

  {
    path: "/admin",
    element: <AdminWrapper />,
    children: [
      // {
      //   index: true,
      //   element: <Navigate to="/admin/dashboard" replace />,
      // },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "users",
        element: <Users />,
      },
      // {
      //   path: "ngos",
      //   element: <NGOs />,
      // },
      {
        path: "volunteers",
        element: <Volunteers />,
      },
      {
        path: "campaigns",
        element: <AdminCampaigns />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default Routes;
