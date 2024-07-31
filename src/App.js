import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import "./styles.scss"
import { ThemeProvider } from "@mui/material";
import { useMemo } from "react";
import { createMuiTheme } from "./theme/theme";

function App() {
  const theme = useMemo(() => {
    return createMuiTheme("light");
    
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
