

// import {
//   Box,
//   Card,
//   CardContent,
//   Chip,
//   Container,
//   Grid,
//   LinearProgress,
//   Stack,
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableRow,
//   Typography,
// } from "@mui/material";

// import {
//   Users,
//   HeartHandshake,
//   Megaphone,
//   IndianRupee,
//   ArrowUpRight,
// } from "lucide-react";

// // ---------------- SAMPLE DATA ----------------

// interface UserData {
//   id: number;
//   name: string;
//   email: string;
//   status: string;
// }

// interface VolunteerData {
//   id: number;
//   name: string;
//   email: string;
//   role: string;
//   appliedDate: string;
//   status: string;
// }

// interface CampaignData {
//   id: number;
//   name: string;
//   target: number;
//   raised: number;
//   status: string;
// }

// interface DonationData {
//   id: number;
//   donorName: string;
//   campaign: string;
//   amount: number;
//   date: string;
//   paymentStatus: string;
// }

// const users: UserData[] = [
//   { id: 1, name: "Ananya Sharma", email: "ananya@gmail.com", status: "Active" },
//   { id: 2, name: "Priya Das", email: "priya@gmail.com", status: "Active" },
//   { id: 3, name: "Rahul Roy", email: "rahul@gmail.com", status: "Active" },
//   { id: 4, name: "Sneha Sen", email: "sneha@gmail.com", status: "Inactive" },
// ];

// const volunteerApplications: VolunteerData[] = [
//   {
//     id: 1,
//     name: "Ananya Sharma",
//     email: "ananya@gmail.com",
//     role: "Weekend Child Tutor",
//     appliedDate: "14 Nov 2026",
//     status: "Pending",
//   },
//   {
//     id: 2,
//     name: "Priya Das",
//     email: "priya@gmail.com",
//     role: "Digital Storyteller",
//     appliedDate: "15 Nov 2026",
//     status: "Approved",
//   },
//   {
//     id: 3,
//     name: "Riya Sen",
//     email: "riya@gmail.com",
//     role: "Pro-Bono Legal Counsel",
//     appliedDate: "16 Nov 2026",
//     status: "Pending",
//   },
//   {
//     id: 4,
//     name: "Rahul Roy",
//     email: "rahul@gmail.com",
//     role: "Emergency Shelter Caretaker",
//     appliedDate: "16 Nov 2026",
//     status: "Rejected",
//   },
// ];

// const campaigns: CampaignData[] = [
//   {
//     id: 1,
//     name: "Education for Every Child",
//     target: 100000,
//     raised: 65000,
//     status: "Active",
//   },
//   {
//     id: 2,
//     name: "Women Restart Program",
//     target: 150000,
//     raised: 90000,
//     status: "Active",
//   },
//   {
//     id: 3,
//     name: "Healthy Childhood",
//     target: 120000,
//     raised: 70000,
//     status: "Active",
//   },
// ];

// const donations: DonationData[] = [
//   {
//     id: 1,
//     donorName: "Amit Sharma",
//     campaign: "Education for Every Child",
//     amount: 5000,
//     date: "16 Nov 2026",
//     paymentStatus: "Completed",
//   },
//   {
//     id: 2,
//     donorName: "Sneha Das",
//     campaign: "Women Restart Program",
//     amount: 2500,
//     date: "15 Nov 2026",
//     paymentStatus: "Completed",
//   },
//   {
//     id: 3,
//     donorName: "Rahul Sen",
//     campaign: "Healthy Childhood",
//     amount: 1000,
//     date: "14 Nov 2026",
//     paymentStatus: "Pending",
//   },
//   {
//     id: 4,
//     donorName: "Priya Roy",
//     campaign: "Education for Every Child",
//     amount: 3000,
//     date: "13 Nov 2026",
//     paymentStatus: "Completed",
//   },
// ];

// // ---------------- DASHBOARD COMPONENT ----------------

// const Dashboard = () => {
//   // Calculate dashboard figures from sample data

//   const totalUsers = users.length;

//   const totalVolunteerApplications = volunteerApplications.length;

//   const activeCampaigns = campaigns.filter(
//     (campaign) => campaign.status === "Active"
//   ).length;

//   const totalDonations = donations.reduce(
//     (total, donation) => total + donation.amount,
//     0
//   );

//   const completedDonations = donations
//     .filter((donation) => donation.paymentStatus === "Completed")
//     .reduce((total, donation) => total + donation.amount, 0);

//   const pendingApplications = volunteerApplications.filter(
//     (application) => application.status === "Pending"
//   ).length;

//   const formatINR = (amount: number) => {
//     return new Intl.NumberFormat("en-IN", {
//       style: "currency",
//       currency: "INR",
//       maximumFractionDigits: 0,
//     }).format(amount);
//   };

//   const getStatusColor = (status: string) => {
//     if (status === "Approved" || status === "Completed" || status === "Active") {
//       return "success";
//     }

//     if (status === "Pending") {
//       return "warning";
//     }

//     if (status === "Rejected" || status === "Inactive") {
//       return "error";
//     }

//     return "default";
//   };

//   const stats = [
//     {
//       title: "Total Users",
//       value: totalUsers,
//       subtitle: "Registered users",
//       icon: Users,
//       color: "#2563EB",
//       background: "#EFF6FF",
//     },
//     {
//       title: "Volunteer Applications",
//       value: totalVolunteerApplications,
//       subtitle: `${pendingApplications} applications pending`,
//       icon: HeartHandshake,
//       color: "#D97706",
//       background: "#FEF3C7",
//     },
//     {
//       title: "Active Campaigns",
//       value: activeCampaigns,
//       subtitle: "Currently running",
//       icon: Megaphone,
//       color: "#7C3AED",
//       background: "#F3E8FF",
//     },
//     {
//       title: "Total Donations",
//       value: formatINR(completedDonations),
//       subtitle: "Successfully collected",
//       icon: IndianRupee,
//       color: "#059669",
//       background: "#D1FAE5",
//     },
//   ];

//   return (
//     <Box sx={{ bgcolor: "#F8FAFC", minHeight: "100vh", py: 3 }}>
//       <Container maxWidth="xl">

//         {/* PAGE HEADER */}

//         <Box sx={{ mb: 4 }}>
//           <Typography
//             variant="h4"
//             sx={{ fontWeight: 700, color: "#292524", mb: 0.5 }}
//           >
//             Dashboard
//           </Typography>

//           <Typography sx={{ color: "#78716C", fontSize: 14 }}>
//             Welcome back! Here's what's happening with CareConnect.
//           </Typography>
//         </Box>

//         {/* STATISTICS CARDS */}

//         <Grid container spacing={2.5} sx={{ mb: 4 }}>
//           {stats.map((item) => {
//             const Icon = item.icon;

//             return (
//               <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={item.title}>
//                 <Card
//                   elevation={0}
//                   sx={{
//                     border: "1px solid #E7E5E4",
//                     borderRadius: 3,
//                     height: "100%",
//                   }}
//                 >
//                   <CardContent sx={{ p: 2.5 }}>
//                     <Stack
//                       sx={{direction:"row",
//                       justifyContent:"space-between",
//                       alignItems:"center"}}
//                     >
//                       <Box>
//                         <Typography
//                           sx={{ color: "#78716C", fontSize: 14, mb: 1 }}
//                         >
//                           {item.title}
//                         </Typography>

//                         <Typography
//                           variant="h5"
//                           sx={{
//                             fontWeight: 700,
//                             color: "#292524",
//                             mb: 0.5,
//                           }}
//                         >
//                           {item.value}
//                         </Typography>

//                         <Typography sx={{ fontSize: 12, color: "#A8A29E" }}>
//                           {item.subtitle}
//                         </Typography>
//                       </Box>

//                       <Box
//                         sx={{
//                           width: 48,
//                           height: 48,
//                           borderRadius: 2,
//                           bgcolor: item.background,
//                           display: "flex",
//                           alignItems: "center",
//                           justifyContent: "center",
//                         }}
//                       >
//                         <Icon size={23} color={item.color} />
//                       </Box>
//                     </Stack>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             );
//           })}
//         </Grid>

//         {/* CAMPAIGN PROGRESS */}

//         <Card
//           elevation={0}
//           sx={{
//             border: "1px solid #E7E5E4",
//             borderRadius: 3,
//             mb: 4,
//           }}
//         >
//           <CardContent sx={{ p: 3 }}>
//             <Stack
             
//               sx={{ mb: 3, direction:"row",
//               justifyContent:"space-between",
//               alignItems:"center" }}
//             >
//               <Box>
//                 <Typography variant="h6" sx={{ fontWeight: 700 }}>
//                   Campaign Progress
//                 </Typography>

//                 <Typography sx={{ color: "#78716C", fontSize: 13 }}>
//                   Track donations collected for each campaign
//                 </Typography>
//               </Box>

//               <Megaphone size={22} color="#D97706" />
//             </Stack>

//             <Stack spacing={3}>
//               {campaigns.map((campaign) => {
//                 const progress = Math.min(
//                   (campaign.raised / campaign.target) * 100,
//                   100
//                 );

//                 return (
//                   <Box key={campaign.id}>
//                     <Stack
                    
//                       sx={{ mb: 1,  direction:"row",
//                       justifyContent:"space-between",
//                       alignItems:"center" }}
//                     >
//                       <Typography sx={{ fontWeight: 600, fontSize: 14 }}>
//                         {campaign.name}
//                       </Typography>

//                       <Typography
//                         sx={{ fontSize: 13, color: "#78716C" }}
//                       >
//                         {Math.round(progress)}%
//                       </Typography>
//                     </Stack>

//                     <LinearProgress
//                       variant="determinate"
//                       value={progress}
//                       sx={{
//                         height: 9,
//                         borderRadius: 5,
//                         bgcolor: "#F5F5F4",
//                         "& .MuiLinearProgress-bar": {
//                           borderRadius: 5,
//                           bgcolor: "#D97706",
//                         },
//                       }}
//                     />

//                     <Stack
               
//                       sx={{ mt: 1 ,       direction:"row",
//                       justifyContent:"space-between"}}
//                     >
//                       <Typography sx={{ fontSize: 12, color: "#78716C" }}>
//                         Raised: {formatINR(campaign.raised)}
//                       </Typography>

//                       <Typography sx={{ fontSize: 12, color: "#78716C" }}>
//                         Goal: {formatINR(campaign.target)}
//                       </Typography>
//                     </Stack>
//                   </Box>
//                 );
//               })}
//             </Stack>
//           </CardContent>
//         </Card>

//         {/* VOLUNTEER APPLICATIONS */}

//         <Card
//           elevation={0}
//           sx={{
//             border: "1px solid #E7E5E4",
//             borderRadius: 3,
//             mb: 4,
//           }}
//         >
//           <CardContent sx={{ p: 0 }}>
//             <Box
//               sx={{
//                 p: 2.5,
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "center",
//               }}
//             >
//               <Box>
//                 <Typography variant="h6" sx={{ fontWeight: 700 }}>
//                   Recent Volunteer Applications
//                 </Typography>

//                 <Typography sx={{ color: "#78716C", fontSize: 13 }}>
//                   Latest applications received
//                 </Typography>
//               </Box>

//               <ArrowUpRight size={20} color="#78716C" />
//             </Box>

//             <Box sx={{ overflowX: "auto" }}>
//               <Table>
//                 <TableHead sx={{ bgcolor: "#FAFAF9" }}>
//                   <TableRow>
//                     <TableCell sx={{ fontWeight: 600 }}>Applicant</TableCell>
//                     <TableCell sx={{ fontWeight: 600 }}>Volunteer Role</TableCell>
//                     <TableCell sx={{ fontWeight: 600 }}>Applied Date</TableCell>
//                     <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
//                   </TableRow>
//                 </TableHead>

//                 <TableBody>
//                   {volunteerApplications.map((application) => (
//                     <TableRow key={application.id}>
//                       <TableCell>
//                         <Typography sx={{ fontWeight: 600, fontSize: 14 }}>
//                           {application.name}
//                         </Typography>

//                         <Typography sx={{ fontSize: 12, color: "#78716C" }}>
//                           {application.email}
//                         </Typography>
//                       </TableCell>

//                       <TableCell>{application.role}</TableCell>

//                       <TableCell>{application.appliedDate}</TableCell>

//                       <TableCell>
//                         <Chip
//                           label={application.status}
//                           color={getStatusColor(application.status)}
//                           size="small"
//                         />
//                       </TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </Box>
//           </CardContent>
//         </Card>

//         {/* USERS AND DONATIONS */}

//         <Grid container spacing={2.5}>

//           {/* RECENT USERS */}

//           <Grid size={{ xs: 12, lg: 6 }}>
//             <Card
//               elevation={0}
//               sx={{
//                 border: "1px solid #E7E5E4",
//                 borderRadius: 3,
//                 height: "100%",
//               }}
//             >
//               <CardContent sx={{ p: 0 }}>
//                 <Box sx={{ p: 2.5 }}>
//                   <Typography variant="h6" sx={{ fontWeight: 700 }}>
//                     Recent Users
//                   </Typography>

//                   <Typography sx={{ color: "#78716C", fontSize: 13 }}>
//                     Recently registered users
//                   </Typography>
//                 </Box>

//                 <Box sx={{ overflowX: "auto" }}>
//                   <Table>
//                     <TableHead sx={{ bgcolor: "#FAFAF9" }}>
//                       <TableRow>
//                         <TableCell sx={{ fontWeight: 600 }}>Name</TableCell>
//                         <TableCell sx={{ fontWeight: 600 }}>Email</TableCell>
//                         <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
//                       </TableRow>
//                     </TableHead>

//                     <TableBody>
//                       {users.map((user) => (
//                         <TableRow key={user.id}>
//                           <TableCell sx={{ fontWeight: 500 }}>
//                             {user.name}
//                           </TableCell>

//                           <TableCell>{user.email}</TableCell>

//                           <TableCell>
//                             <Chip
//                               label={user.status}
//                               color={getStatusColor(user.status)}
//                               size="small"
//                             />
//                           </TableCell>
//                         </TableRow>
//                       ))}
//                     </TableBody>
//                   </Table>
//                 </Box>
//               </CardContent>
//             </Card>
//           </Grid>

//           {/* RECENT DONATIONS */}

//           <Grid size={{ xs: 12, lg: 6 }}>
//             <Card
//               elevation={0}
//               sx={{
//                 border: "1px solid #E7E5E4",
//                 borderRadius: 3,
//                 height: "100%",
//               }}
//             >
//               <CardContent sx={{ p: 0 }}>
//                 <Box sx={{ p: 2.5 }}>
//                   <Typography variant="h6" sx={{ fontWeight: 700 }}>
//                     Recent Donations
//                   </Typography>

//                   <Typography sx={{ color: "#78716C", fontSize: 13 }}>
//                     Latest donation transactions
//                   </Typography>
//                 </Box>

//                 <Box sx={{ overflowX: "auto" }}>
//                   <Table>
//                     <TableHead sx={{ bgcolor: "#FAFAF9" }}>
//                       <TableRow>
//                         <TableCell sx={{ fontWeight: 600 }}>Donor</TableCell>
//                         <TableCell sx={{ fontWeight: 600 }}>Amount</TableCell>
//                         <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
//                       </TableRow>
//                     </TableHead>

//                     <TableBody>
//                       {donations.map((donation) => (
//                         <TableRow key={donation.id}>
//                           <TableCell>
//                             <Typography sx={{ fontWeight: 600, fontSize: 14 }}>
//                               {donation.donorName}
//                             </Typography>

//                             <Typography sx={{ fontSize: 12, color: "#78716C" }}>
//                               {donation.date}
//                             </Typography>
//                           </TableCell>

//                           <TableCell sx={{ fontWeight: 600 }}>
//                             {formatINR(donation.amount)}
//                           </TableCell>

//                           <TableCell>
//                             <Chip
//                               label={donation.paymentStatus}
//                               color={getStatusColor(donation.paymentStatus)}
//                               size="small"
//                             />
//                           </TableCell>
//                         </TableRow>
//                       ))}
//                     </TableBody>
//                   </Table>
//                 </Box>
//               </CardContent>
//             </Card>
//           </Grid>
//         </Grid>

//       </Container>
//     </Box>
//   );
// };

// export default Dashboard;




const Dashboard = () => {
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard