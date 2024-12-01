import { createTheme } from "@mui/material";
import { green, orange } from "@mui/material/colors";

export const theme = createTheme({
  typography: {
    fontFamily: "Vazirmatn, Arial, sans-serif",
  },
  palette: {
    primary: {
      main: orange[400],
    },
    secondary: {
      main: green[400],
    },
  },
});
