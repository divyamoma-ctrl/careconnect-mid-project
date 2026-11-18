// import { useState } from "react";

// import {
//   Dialog,
//   DialogContent,
//   DialogTitle,
//   IconButton,
//   Typography,
//   Box,
// } from "@mui/material";

// import { X } from "lucide-react";

// import RegisterForm from "../components/RegisterForm";
// import LoginForm from "../components/LoginForm";

// interface AuthDialogProps {
//   open: boolean;
//   onClose: () => void;
// }

// type AuthMode = "LOGIN" | "SIGNUP";

// const AuthDialog = ({ open, onClose }: AuthDialogProps) => {
//   const [authMode, setAuthMode] = useState<AuthMode>("LOGIN");

//   const handleAuthModeChange = () => {
//     setAuthMode((prev) =>
//       prev === "LOGIN" ? "SIGNUP" : "LOGIN"
//     );
//   };

//   const handleClose = () => {
//     onClose();
//     setAuthMode("LOGIN");
//   };

//   return (
//     <Dialog
//       open={open}
//       onClose={handleClose}
//       fullWidth
//       maxWidth="sm"
//       slotProps={{
//         paper: {
//           sx: {
//             borderRadius: 3,
//             overflow: "visible",
//           },
//         },
//       }}
//     >
//       {/* Close Button */}
//       <IconButton
//         onClick={handleClose}
//         sx={{
//           position: "absolute",
//           right: 12,
//           top: 12,
//           color: "text.secondary",
//         }}
//       >
//         <X size={20} />
//       </IconButton>

//       {/* Dialog Header */}
//       <DialogTitle sx={{ textAlign: "center", pt: 4, pb: 1 }}>
//         <Typography
//           variant="h5"
//           sx={{ fontFamily: "Fredoka" }}
//         >
//           {authMode === "LOGIN"
//             ? "Welcome Back!"
//             : "Join CareConnect"}
//         </Typography>

//         <Typography
//           variant="body2"
//           color="text.secondary"
//           sx={{ mt: 1 }}
//         >
//           {authMode === "LOGIN"
//             ? "Login to continue your journey."
//             : "Create an account and make a difference."}
//         </Typography>
//       </DialogTitle>

//       {/* Auth Forms */}
//       <DialogContent sx={{ px: { xs: 2, sm: 4 }, pb: 3 }}>
//         {authMode === "LOGIN" ? (
//           <LoginForm onRegisterClick={handleAuthModeChange} />
//         ) : (
//           <RegisterForm />
//         )}

//         {/* Switch Auth Mode */}
//         <Box sx={{ textAlign: "center", mt: 2 }}>
//           <Typography variant="body2" color="text.secondary">
//             {authMode === "LOGIN"
//               ? "Don't have an account?"
//               : "Already have an account?"}

//             <Box
//               component="span"
//               onClick={handleAuthModeChange}
//               sx={{
//                 ml: 0.7,
//                 color: "#CA8A04",
//                 fontWeight: 700,
//                 cursor: "pointer",
//                 "&:hover": {
//                   textDecoration: "underline",
//                 },
//               }}
//             >
//               {authMode === "LOGIN" ? "Sign Up" : "Login"}
//             </Box>
//           </Typography>
//         </Box>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default AuthDialog;


import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
  Box,
} from "@mui/material";

import { X } from "lucide-react";

import RegisterForm from "../components/RegisterForm";
import LoginForm from "../components/LoginForm";

interface AuthDialogProps {
  open: boolean;
  onClose: () => void;
}

type AuthMode = "LOGIN" | "SIGNUP";

const AuthDialog = ({ open, onClose }: AuthDialogProps) => {
  const [authMode, setAuthMode] = useState<AuthMode>("LOGIN");

  const handleAuthModeChange = () => {
    setAuthMode((prev) =>
      prev === "LOGIN" ? "SIGNUP" : "LOGIN"
    );
  };

  const handleClose = () => {
    onClose();
    setAuthMode("LOGIN");
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="xs"
      slotProps={{
        paper: {
          sx: {
            borderRadius: 3,
            overflow: "visible",
          },
        },
      }}
    >
      <IconButton
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: 12,
          top: 12,
          color: "text.secondary",
        }}
      >
        <X size={20} />
      </IconButton>

      <DialogTitle sx={{ textAlign: "center", pt: 4, pb: 1 }}>
        <Typography variant="h5" sx={{ fontFamily: "Fredoka" }}>
          {authMode === "LOGIN"
            ? "Welcome Back!"
            : "Join CareConnect"}
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          {authMode === "LOGIN"
            ? "Login to continue your journey."
            : "Create an account and make a difference."}
        </Typography>
      </DialogTitle>

      <DialogContent sx={{ px: { xs: 2, sm: 4 }, pb: 3 }}>
        {authMode === "LOGIN" ? <LoginForm /> : <RegisterForm />}

        <Box sx={{ textAlign: "center", mt: 2 }}>
          <Typography variant="body2" color="text.secondary">
            {authMode === "LOGIN"
              ? "Don't have an account?"
              : "Already have an account?"}

            <Box
              component="span"
              onClick={handleAuthModeChange}
              sx={{
                ml: 0.7,
                color: "#CA8A04",
                fontWeight: 700,
                cursor: "pointer",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              {authMode === "LOGIN" ? "Sign Up" : "Login"}
            </Box>
          </Typography>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default AuthDialog;