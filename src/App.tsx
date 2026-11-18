import { RouterProvider } from "react-router-dom";
import Routes from "./routes/Routes";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Toaster } from "sonner";
import theme from "./theme/theme";

const App = () => {
  return (
  <>
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={Routes} />
          <Toaster position="top-right" richColors />
      </ThemeProvider>
      </>
  );
};

export default App;
