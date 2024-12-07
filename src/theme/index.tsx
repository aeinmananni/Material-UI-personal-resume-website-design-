import { createTheme } from "@mui/material";
import { green, orange } from "@mui/material/colors";
declare module "@mui/material/styles" {
  interface Palette {
    custom: {
      main: string;
    };
  }
  interface PaletteOptions {
    custom?: {
      main: string;
    };
  }
}
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
    custom: {
      main: "#d1d6d2",
    },
  },
});
