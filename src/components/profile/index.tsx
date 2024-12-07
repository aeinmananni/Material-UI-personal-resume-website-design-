import { Box, Button, Paper, Typography } from "@mui/material";
import style from "./profile.module.css";
import { useChangeLanguage } from "../../hooks/useChange-language";
import Image from "../../custom/img";
import image1 from "../../assets/images/portfolio-image.png";
import { Download as DownloadIcon } from "@mui/icons-material";
import TimeLineComponent from "../time-line";
export default function Profile() {
  const { t, i18n } = useChangeLanguage();

  return (
    <Paper sx={{ height: "100%", position: "relative", overflow: "hidden" }}>
      <Box className={style.profileName}>
        <Typography className={style.fullName}>{t("fullName")}</Typography>
        <Typography className={style.title}>{t("title")}</Typography>
      </Box>
      <Image
        className={`${
          i18n.language === "fa" ? style.image_faStyle : style.image_enStyle
        }`}
        style={{ width: "100%" }}
        src={image1}
      />
      <TimeLineComponent />
      <Box display={"flex"} justifyContent={"center"}>
        <Button
          variant="contained"
          endIcon={<DownloadIcon />}
          sx={{ position: "absolute", bottom: 12 }}
        >
          <Typography>{t("download")}</Typography>
        </Button>
      </Box>
    </Paper>
  );
}
