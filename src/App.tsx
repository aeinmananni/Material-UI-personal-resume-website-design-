import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import Home from "./home";
import { Route, Routes } from "react-router-dom";
import Content from "./components/content";
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="" element={<Content />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}
