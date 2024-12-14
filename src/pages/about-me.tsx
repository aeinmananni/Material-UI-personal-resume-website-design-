import { Typography } from "@mui/material";

import { useChangeLanguage } from "../hooks/useChange-language";
import Page from "../custom/page";
const AboutMe = () => {
  const { t } = useChangeLanguage();
  return (
    <Page title="aboueMe">
      <Typography sx={{ textAlign: "justify" }}>{t("description")}</Typography>
      <Typography sx={{ textAlign: "justify" }}>{t("description")}</Typography>
      <Typography sx={{ textAlign: "justify" }}>{t("description")}</Typography>
      <Typography sx={{ textAlign: "justify" }}>{t("description")}</Typography>
      <Typography sx={{ textAlign: "justify" }}>{t("description")}</Typography>
    </Page>
  );
};

export default AboutMe;
