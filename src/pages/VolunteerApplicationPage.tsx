
// import { useParams, useNavigate } from "react-router-dom";
// import { Box, Container, Grid, Button, Typography } from "@mui/material";
// import { ArrowLeft } from "lucide-react";

// import { volunteerRoles } from "../services/json/volunteeerRole.json";
// import VolunteerApplicationDetails from "../components/volunteer/VolunteerApplicationDetails";
// import VolunteerApplicationForm from "../components/volunteer/VolunteerApplicationForm";

// const VolunteerApplicationPage = () => {
// //  
// const { id } = useParams();
//   const navigate = useNavigate();

//   const selectedRole = volunteerRoles.find(
//     // (role) => role.id === Number(roleId)
//      (role) => role.id === Number(id)
//   );

//   if (!selectedRole) {
//     return (
//       <Container sx={{ py: 3, textAlign: "center" }}>
//         <Typography variant="h5" sx={{mb:1}} >
//           Volunteer opportunity not found
//         </Typography>
//         <Button onClick={() => navigate("/volunteer")}>
//           Back to Volunteer Page
//         </Button>
//       </Container>
//     );
//   }

//   return (
//     <Box sx={{ py: { xs: 2, md: 4 }, bgcolor: "#F9FAFB", minHeight: "100vh" }}>
//       <Container maxWidth="lg">
//         <Button
//           startIcon={<ArrowLeft size={18} />}
//           onClick={() => navigate("/volunteer")}
//           sx={{ mb: 2, color: "#5141A4", textTransform: "none" }}
//         >
//           Back to Volunteer Opportunities
//         </Button>

//         <Typography variant="h4" sx={{mb:1}} >
//           Apply for a Volunteer Role
//         </Typography>

//         <Typography color="text.secondary" sx={{mb:1}}>
//           Complete the form below to become a part of our mission.
//         </Typography>

//         <Grid container spacing={4}>
//   <Grid size={{ xs: 12, md: 5 }}>
//     <VolunteerApplicationDetails role={selectedRole} />
//   </Grid>

//   <Grid size={{ xs: 12, md: 7 }}>
//     <VolunteerApplicationForm />
//   </Grid>
// </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default VolunteerApplicationPage;




// import { useParams, useNavigate } from "react-router-dom";
// import { Box, Container, Grid, Button, Typography } from "@mui/material";
// import { ArrowLeft } from "lucide-react";

// import { volunteerRoles } from "../services/json/volunteeerRole.json";
// import VolunteerApplicationDetails from "../components/volunteer/VolunteerApplicationDetails";
// import VolunteerApplicationForm from "../components/volunteer/VolunteerApplicationForm";

// const VolunteerApplicationPage = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const selectedRole = volunteerRoles.find(
//     (role) => role.id === Number(id)
//   );

//   if (!selectedRole) {
//     return (
//       <Container sx={{ py: 3, textAlign: "center" }}>
//         <Typography variant="h5" sx={{ mb: 1 }}>
//           Volunteer opportunity not found
//         </Typography>

//         <Button onClick={() => navigate("/volunteer")}>
//           Back to Volunteer Page
//         </Button>
//       </Container>
//     );
//   }

//   return (
//     <Box
//       sx={{
//         py: { xs: 2, md: 3 },
//         bgcolor: "#FFFEF7",
//         minHeight: "100vh",
//       }}
//     >
//       <Container maxWidth="lg">

//         {/* Back Button */}

//         <Button
//           startIcon={<ArrowLeft size={18} />}
//           onClick={() => navigate("/volunteer")}
//           sx={{
//             mb: 2,
//             color: "#92400E",
//             textTransform: "none",
//             fontWeight: 600,
//           }}
//         >
//           Back to Volunteer Opportunities
//         </Button>

//         {/* Page Heading */}

//         <Box sx={{ mb: 3 }}>
//           <Typography
//             variant="h4"
//             sx={{
//               fontWeight: 700,
//               color: "#292524",
//               mb: 0.5,
//             }}
//           >
//             Apply for a Volunteer Role
//           </Typography>

//           <Typography color="text.secondary">
//             Complete the form below to become a part of our mission.
//           </Typography>
//         </Box>

//         {/* Application Content */}

//         <Grid container spacing={3} alignItems="flex-start">

//           <Grid size={{ xs: 12, md: 5 }}>
//             <VolunteerApplicationDetails role={selectedRole} />
//           </Grid>

//           <Grid size={{ xs: 12, md: 7 }}>
//             <VolunteerApplicationForm />
//           </Grid>

//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default VolunteerApplicationPage;





import { useParams, useNavigate } from "react-router-dom";
import { Box, Container, Grid, Button, Typography } from "@mui/material";
import { ArrowLeft } from "lucide-react";

import { volunteerRoles } from "../services/json/volunteeerRole.json";
import VolunteerApplicationDetails from "../components/volunteer/VolunteerApplicationDetails";
import VolunteerApplicationForm from "../components/volunteer/VolunteerApplicationForm";

const VolunteerApplicationPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const selectedRole = volunteerRoles.find(
    (role) => role.id === Number(id)
  );

  if (!selectedRole) {
    return (
      <Container sx={{ py: 3, textAlign: "center" }}>
        <Typography variant="h5" sx={{ mb: 1 }}>
          Volunteer opportunity not found
        </Typography>

        <Button onClick={() => navigate("/volunteer")}>
          Back to Volunteer Page
        </Button>
      </Container>
    );
  }

  return (
    <Box
      sx={{
        py: { xs: 2, md: 3 },
        bgcolor: "#FFFEF7",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="lg">

        {/* Back Button */}
        <Button
          startIcon={<ArrowLeft size={18} />}
          onClick={() => navigate("/volunteer")}
          sx={{
            mb: 1,
            color: "#92400E",
            textTransform: "none",
            fontWeight: 600,
          }}
        >
          Back to Volunteer Opportunities
        </Button>

        {/* Page Heading */}
 <Box
  sx={{
    textAlign: "left",
    mb: 1,
  }}
>
  <Typography
    variant="h4"
    component="span"
    sx={{
      fontWeight: 700,
      color: "#292524",
      display: "inline",
      textAlign: "left",
      mr: 1,
    }}
  >
    Apply for a Volunteer Role
  </Typography>
{/* 
  <Typography
    component="span"
    color="text.secondary"
    sx={{
      display: "inline",
      fontSize: "1rem",
    }}
  >
    Complete the form below to become a part of our mission.
  </Typography> */}
</Box>
        {/* Application Content */}
        <Grid
          container
          columnSpacing={3}
          rowSpacing={0}
         
          sx={{ mt: 0,  alignItems:"flex-start" }}
        >
          <Grid size={{ xs: 12, md: 5 }}>
            <VolunteerApplicationDetails role={selectedRole} />
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <VolunteerApplicationForm />
          </Grid>
        </Grid>

      </Container>
    </Box>
  );
};

export default VolunteerApplicationPage;
