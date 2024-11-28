import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import Home from "./home";
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}
