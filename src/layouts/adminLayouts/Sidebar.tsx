// import {
//   Drawer,
//   Box,
//   Typography,
//   List,
//   ListItemButton,
//   ListItemIcon,
//   ListItemText,
// } from "@mui/material";

// import {
//   LayoutDashboard,
//   Users,
//   HeartHandshake,
//   HandHeart,
//   Megaphone,
//   Settings,
//   LogOut,
// } from "lucide-react";

// import { NavLink } from "react-router-dom";

// interface SideBarProps {
//   open: boolean;
//   onClose: () => void;
// }

// const menuItems = [
//   {
//     title: "Dashboard",
//     path: "/admin",
//     icon: LayoutDashboard,
//   },
//   {
//     title: "Users",
//     path: "/admin/users",
//     icon: Users,
//   },
//   {
//     title: "NGOs",
//     path: "/admin/ngos",
//     icon: HeartHandshake,
//   },
//   {
//     title: "Volunteers",
//     path: "/admin/volunteers",
//     icon: HandHeart,
//   },
//   {
//     title: "Campaigns",
//     path: "/admin/campaigns",
//     icon: Megaphone,
//   },
// ];

// const SideBar = ({ open, onClose }: SideBarProps) => {
//   const drawerContent = (
//     <Box sx={{ height: "100%", bgcolor: "primary.main", color: "primary.contrastText" }}>
//       <Box sx={{ p: 3 }}>
//         <Typography variant="h5" >
//           CareConnect
//         </Typography>

//         <Typography variant="caption" sx={{ opacity: 0.7 }}>
//           Admin Panel
//         </Typography>
//       </Box>

//       <List sx={{ px: 2 }}>
//         {menuItems.map((item) => {
//           const Icon = item.icon;

//           return (
//             <ListItemButton
//               key={item.title}
//               component={NavLink}
//               to={item.path}
//               onClick={onClose}
//               end={item.path === "/admin"}
//               sx={{
//                 borderRadius: 2,
//                 mb: 1,
//                 color: "inherit",
//                 "&.active": {
//                   bgcolor: "secondary.main",
//                   color: "secondary.contrastText",
//                 },
//                 "&:hover": {
//                   bgcolor: "action.hover",
//                 },
//               }}
//             >
//               <ListItemIcon sx={{ color: "inherit", minWidth: 40 }}>
//                 <Icon size={20} />
//               </ListItemIcon>

//              <ListItemText
//   primary={item.title}
//   slotProps={{
//     primary: {
//       sx: {
//         fontWeight: 500,
//       },
//     },
//   }}
// />
//             </ListItemButton>
//           );
//         })}
//       </List>

//       <Box sx={{ mt: "auto", px: 2, pb: 2 }}>
//         <ListItemButton sx={{ borderRadius: 2 }}>
//           <ListItemIcon sx={{ color: "inherit", minWidth: 40 }}>
//             <Settings size={20} />
//           </ListItemIcon>
//           <ListItemText primary="Settings" />
//         </ListItemButton>

//         <ListItemButton sx={{ borderRadius: 2 }}>
//           <ListItemIcon sx={{ color: "inherit", minWidth: 40 }}>
//             <LogOut size={20} />
//           </ListItemIcon>
//           <ListItemText primary="Logout" />
//         </ListItemButton>
//       </Box>
//     </Box>
//   );

//   return (
//     <>
//       <Drawer
//         variant="temporary"
//         open={open}
//         onClose={onClose}
//         sx={{
//           display: { xs: "block", md: "none" },
//           "& .MuiDrawer-paper": {
//             width: 260,
//             border: 0,
//           },
//         }}
//       >
//         {drawerContent}
//       </Drawer>

//       <Drawer
//         variant="permanent"
//         open
//         sx={{
//           display: { xs: "none", md: "block" },
//           "& .MuiDrawer-paper": {
//             width: 260,
//             border: 0,
//           },
//         }}
//       >
//         {drawerContent}
//       </Drawer>
//     </>
//   );
// };

// export default SideBar;

import {
  Drawer,
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import {
  LayoutDashboard,
  Users,
  HeartHandshake,
  HandHeart,
  Megaphone,
  Settings,
  LogOut,
  IndianRupee,
} from "lucide-react";

import { NavLink } from "react-router-dom";

interface SideBarProps {
  open: boolean;
  onClose: () => void;
}

const SideBar = ({ open, onClose }: SideBarProps) => {
  const drawerContent = (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        bgcolor: "primary.main",
        color: "primary.contrastText",
      }}
    >
      {/* Logo */}
      <Box sx={{ p: 3 }}>
        <Typography variant="h5">CareConnect</Typography>

        <Typography variant="caption" sx={{ opacity: 0.7 }}>
          Admin Panel
        </Typography>
      </Box>

      {/* Navigation Links */}
      <List sx={{ px: 2 }}>
        <ListItemButton
          component={NavLink}
          to="/admin/dashboard"
          onClick={onClose}
          sx={menuStyle}
        >
          <ListItemIcon sx={iconStyle}>
            <LayoutDashboard size={20} />
          </ListItemIcon>
          <ListItemText
            primary="Dashboard"
            slotProps={{ primary: { sx: { fontWeight: 500 } } }}
          />
        </ListItemButton>

        <ListItemButton
          component={NavLink}
          to="/admin/users"
          onClick={onClose}
          sx={menuStyle}
        >
          <ListItemIcon sx={iconStyle}>
            <Users size={20} />
          </ListItemIcon>
          <ListItemText
            primary="Users"
            slotProps={{ primary: { sx: { fontWeight: 500 } } }}
          />
        </ListItemButton>

        <ListItemButton
          component={NavLink}
          to="/admin/volunteers"
          onClick={onClose}
          sx={menuStyle}
        >
          <ListItemIcon sx={iconStyle}>
            <HandHeart size={20} />
          </ListItemIcon>
          <ListItemText
            primary="Volunteers"
            slotProps={{ primary: { sx: { fontWeight: 500 } } }}
          />
        </ListItemButton>

        <ListItemButton
          component={NavLink}
          to="/admin/campaigns"
          onClick={onClose}
          sx={menuStyle}
        >
          <ListItemIcon sx={iconStyle}>
            <Megaphone size={20} />
          </ListItemIcon>
          <ListItemText
            primary="Campaigns"
            slotProps={{ primary: { sx: { fontWeight: 500 } } }}
          />
        </ListItemButton>

        <ListItemButton
          component={NavLink}
          to="/admin/donations"
          onClick={onClose}
          sx={menuStyle}
        >
          <ListItemIcon sx={iconStyle}>
            <IndianRupee size={20} />
          </ListItemIcon>
          <ListItemText
            primary="Donations"
            slotProps={{
              primary: { sx: { fontWeight: 500 } },
            }}
          />
        </ListItemButton>

        <ListItemButton
          component={NavLink}
          to="/admin/contacts"
          onClick={onClose}
          sx={menuStyle}
        >
          <ListItemIcon sx={iconStyle}>
            <HeartHandshake size={20} />
          </ListItemIcon>
          <ListItemText
            primary="Contacts"
            slotProps={{ primary: { sx: { fontWeight: 500 } } }}
          />
        </ListItemButton>
      </List>

      {/* Bottom Menu */}
      <Box sx={{ mt: "auto", px: 2, pb: 2 }}>
        <ListItemButton sx={menuStyle}>
          <ListItemIcon sx={iconStyle}>
            <Settings size={20} />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItemButton>

        <ListItemButton sx={menuStyle}>
          <ListItemIcon sx={iconStyle}>
            <LogOut size={20} />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItemButton>
      </Box>
    </Box>
  );

  return (
    <>
      {/* Mobile Sidebar */}
      <Drawer
        variant="temporary"
        open={open}
        onClose={onClose}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            width: 260,
            border: 0,
          },
        }}
      >
        {drawerContent}
      </Drawer>

      {/* Desktop Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", md: "block" },
          "& .MuiDrawer-paper": {
            width: 260,
            border: 0,
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
};

// Common styles
const menuStyle = {
  borderRadius: 2,
  mb: 1,
  color: "inherit",

  "&.active": {
    bgcolor: "secondary.main",
    color: "secondary.contrastText",
  },

  "&:hover": {
    bgcolor: "action.hover",
  },
};

const iconStyle = {
  color: "inherit",
  minWidth: 40,
};

export default SideBar;
