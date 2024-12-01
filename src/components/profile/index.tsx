import { Box, Button, Paper, Typography } from "@mui/material";
import style from "./profile.module.css";
import { useChangeLanguage } from "../../hooks/useChange-language";
import Image from "../../custom/img";
import image1 from "../../assets/images/portfolio-image.png";
import { Download as DownloadIcon } from "@mui/icons-material";
export default function Profile() {
  const { t } = useChangeLanguage();
  return (
    <Paper sx={{ height: "100%" }}>
      <Box className={style.profileName}>
        <Typography className={style.fullName}>{t("fullName")}</Typography>
        <Typography className={style.title}>{t("title")}</Typography>
      </Box>
      <Image
        className={style.imageProfile}
        style={{ width: "100%" }}
        src={image1}
      />
      <Box>Time line...</Box>
      <Box display={"flex"} justifyContent={"center"}>
        <Button variant="contained" endIcon={<DownloadIcon />}>
          <Typography>{t("download")}</Typography>
        </Button>
      </Box>
    </Paper>
  );
}
