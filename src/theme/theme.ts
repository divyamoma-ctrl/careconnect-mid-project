




import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",

    primary: {
      main: "#FACC15",
      light: "#FEF08A",
      dark: "#CA8A04",
      contrastText: "#171717",
    },

    secondary: {
      main: "#171717",
      light: "#404040",
      dark: "#000000",
      contrastText: "#FFFFFF",
    },

    info: {
      main: "#2563EB",
      light: "#DBEAFE",
      dark: "#1D4ED8",
    },

    success: {
      main: "#15803D",
      light: "#DCFCE7",
      dark: "#166534",
    },

    error: {
      main: "#DC2626",
      light: "#FEE2E2",
      dark: "#B91C1C",
    },

    warning: {
      main: "#D97706",
      light: "#FEF3C7",
      dark: "#92400E",
    },

    background: {
      default: "#F8FAFC",
      paper: "#FFFFFF",
    },

    text: {
      primary: "#171717",
      secondary: "#525252",
    },

    divider: "#E5E7EB",
  },

  typography: {
    fontFamily: '"Inter", "Roboto", "Arial", sans-serif',

    h1: {
      fontWeight: 700,
      color: "#171717",
    },

    h2: {
      fontWeight: 700,
      color: "#171717",
    },

    h3: {
      fontWeight: 700,
      color: "#171717",
    },

    h4: {
      fontWeight: 700,
      color: "#171717",
    },

    h5: {
      fontWeight: 700,
      color: "#171717",
    },

    h6: {
      fontWeight: 600,
      color: "#171717",
    },

    body1: {
      fontSize: "0.95rem",
      lineHeight: 1.7,
    },

    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.6,
    },

    button: {
      fontWeight: 600,
      textTransform: "none",
    },
  },

  shape: {
    borderRadius: 12,
  },

  components: {
    // Global form input styling
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
        fullWidth: true,
        size: "medium",
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          backgroundColor: "#FFFFFF",
          transition: "all 0.2s ease",

          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#D1D5DB",
          },

          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#CA8A04",
          },

          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#CA8A04",
            borderWidth: 2,
          },

          "&.Mui-error .MuiOutlinedInput-notchedOutline": {
            borderColor: "#DC2626",
          },
        },

        input: {
          padding: "14px 14px",
          fontSize: "0.95rem",

          "&::placeholder": {
            color: "#9CA3AF",
            opacity: 1,
          },
        },
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#525252",

          "&.Mui-focused": {
            color: "#A16207",
          },
        },
      },
    },

    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginLeft: 2,
          fontSize: "0.78rem",
        },
      },
    },

    // Buttons
 MuiButton: {
  defaultProps: {
    disableElevation: true,
  },

  styleOverrides: {
    root: {
      borderRadius: 10,
      padding: "10px 20px",
      fontWeight: 600,
      textTransform: "none",
      transition: "all 0.2s ease",
    },

    contained: {
      "&.MuiButton-containedPrimary": {
        backgroundColor: "#FACC15",
        color: "#171717",

        "&:hover": {
          backgroundColor: "#EAB308",
        },

        "&.Mui-disabled": {
          backgroundColor: "#FDE68A",
          color: "#737373",
        },
      },

      "&.MuiButton-containedSecondary": {
        backgroundColor: "#171717",
        color: "#FFFFFF",

        "&:hover": {
          backgroundColor: "#404040",
        },
      },
    },

    outlined: {
      "&.MuiButton-outlinedPrimary": {
        borderColor: "#EAB308",
        color: "#171717",

        "&:hover": {
          backgroundColor: "#FEF9C3",
          borderColor: "#CA8A04",
        },
      },
    },
  },
},

    // Cards and form containers
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },

        rounded: {
          borderRadius: 16,
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          border: "1px solid #E5E7EB",
          borderRadius: 16,
          boxShadow: "0 4px 20px rgba(23, 23, 23, 0.04)",
        },
      },
    },

    // Admin tables
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: "#FEF9C3",

          "& .MuiTableCell-head": {
            color: "#171717",
            fontWeight: 700,
          },
        },
      },
    },

    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: "1px solid #E5E7EB",
          padding: "14px 16px",
        },
      },
    },

    // Dropdowns
    MuiMenuItem: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          margin: "2px 6px",

          "&.Mui-selected": {
            backgroundColor: "#FEF3C7",
          },

          "&.Mui-selected:hover": {
            backgroundColor: "#FEF08A",
          },
        },
      },
    },

    // Checkboxes, switches and radio buttons
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: "#737373",

          "&.Mui-checked": {
            color: "#CA8A04",
          },
        },
      },
    },

    MuiRadio: {
      styleOverrides: {
        root: {
          "&.Mui-checked": {
            color: "#CA8A04",
          },
        },
      },
    },

    MuiSwitch: {
      styleOverrides: {
        switchBase: {
          "&.Mui-checked": {
            color: "#CA8A04",
          },

          "&.Mui-checked + .MuiSwitch-track": {
            backgroundColor: "#FACC15",
            opacity: 1,
          },
        },

        track: {
          backgroundColor: "#9CA3AF",
        },
      },
    },

    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 600,
        },
      },
    },

    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 18,
        },
      },
    },
  },
});

export default theme;
