import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Box,
  Badge,
} from "@mui/material";

import {
  BellRing,
  Menu,
  // Notifications,
} from "lucide-react";

interface NavbarProps {
  onMenuClick: () => void;
}

const Navbar = ({ onMenuClick }: NavbarProps) => {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      color="inherit"
      sx={{
        width: { md: `calc(100% - 260px)` },
        ml: { md: "260px" },
        borderBottom: 1,
        borderColor: "divider",
        bgcolor: "background.paper",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box sx={{display:"flex", alignItems:"center", gap:2}}>
          <IconButton
            onClick={onMenuClick}
            sx={{ display: { md: "none" } }}
          >
            <Menu size={22} />
          </IconButton>

          <Typography
            variant="h6"
    
            color="text.primary"
          >
            Admin Dashboard
          </Typography>
        </Box>

        <Box sx={{display:"flex", alignItems:"center", gap:2}}>
          <IconButton color="inherit">
            <Badge color="secondary" variant="dot">
              {/* <Notifications size={21} /> */}
              <BellRing strokeWidth={1.25} size={21} />
            </Badge>
          </IconButton>

          <Box sx={{display:"flex", alignItems:"center", gap:1}}>
            <Avatar
              sx={{
                bgcolor: "primary.main",
                color: "primary.contrastText",
                width: 36,
                height: 36,
              }}
            >
              A
            </Avatar>

            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Typography variant="body2" >
                Admin
              </Typography>

              <Typography variant="caption" color="text.secondary">
                Super Admin
              </Typography>
            </Box>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;