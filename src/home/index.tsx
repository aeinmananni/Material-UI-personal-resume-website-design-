import { Container, Grid2 } from "@mui/material";
import Header from "../components/header";
import Footer from "../components/footer";
import { useChangeLanguage } from "../hooks/useChange-language";

export default function Home() {
  const { t } = useChangeLanguage();
  return (
    <Container className={"App"} maxWidth={"xl"}>
      <Grid2 container spacing={2}>
        <Grid2 size={{ xs: 12, md: 4, lg: 3 }}>{t("profile")}</Grid2>
        <Grid2 size={{ xs: 12, sm: 12, md: 8, lg: 9 }}>
          <Header />
          <Footer />
        </Grid2>
      </Grid2>
    </Container>
  );
}
