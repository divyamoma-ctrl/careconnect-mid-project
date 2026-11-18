
// import { useState } from "react";
// import { Box, Toolbar } from "@mui/material";
// import { Outlet } from "react-router-dom";
// import Navbar from "./Navbar";
// import Sidebar from "./Sidebar";




// const AdminWrapper = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const handleSidebarOpen = () => {
//     setSidebarOpen(true);
//   };

//   const handleSidebarClose = () => {
//     setSidebarOpen(false);
//   };

//   return (
//     <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "background.default" }}>
//       <Navbar onMenuClick={handleSidebarOpen} />

//       <Sidebar
//         open={sidebarOpen}
//         onClose={handleSidebarClose}
//       />

//       <Box
//         component="main"
//         sx={{
//           flexGrow: 1,
//           width: { md: "calc(100% - 260px)" },
//           minHeight: "100vh",
//           p: { xs: 2, md: 3 },
//         }}
//       >
//         <Toolbar />

//         <Outlet />
//       </Box>
//     </Box>
//   );
// };

// export default AdminWrapper;



import { useState } from "react";
import { Box, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const AdminWrapper = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarOpen = () => {
    setSidebarOpen(true);
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        bgcolor: "background.default",
      }}
    >
      <Navbar onMenuClick={handleSidebarOpen} />

      <Sidebar
        open={sidebarOpen}
        onClose={handleSidebarClose}
      />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { xs: "100%", md: "calc(100% - 260px)" },
          ml: { xs: 0, md: "260px" },
          minWidth: 0,
          minHeight: "100vh",
          p: { xs: 2, md: 3 },
        }}
      >
        <Toolbar />

        <Outlet />
      </Box>
    </Box>
  );
};

export default AdminWrapper;