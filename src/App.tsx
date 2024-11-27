import { Container, Grid2, ThemeProvider } from "@mui/material";
import Header from "./components/header";
import { theme } from "./theme";
import { useChangeLanguage } from "./hooks/useChange-language";
export default function App() {
  const { t } = useChangeLanguage();
  return (
    <ThemeProvider theme={theme}>
      <Container className={"App"} maxWidth={"xl"}>
        <Grid2 container spacing={2}>
          <Grid2 size={{ xs: 12, md: 4, lg: 3 }}>{t("profile")}</Grid2>
          <Grid2 size={{ xs: 12, sm: 12, md: 8, lg: 9 }}>
            <Header />
          </Grid2>
        </Grid2>
      </Container>
    </ThemeProvider>
  );
}
