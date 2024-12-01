import { AppBar, Box, Grid2, Toolbar, Typography } from "@mui/material";
import { useChangeLanguage } from "../../hooks/useChange-language";

export default function Footer() {
  const { t } = useChangeLanguage();

  return (
    <Box mb={2}>
      <AppBar sx={{ backgroundColor: "background.paper" }}>
        <Toolbar disableGutters>
          <Grid2
            container
            p={2}
            alignItems={"center"}
            justifyContent={"space-between"}
            direction={"row"}
            spacing={3}
            sx={{ width: "100%" }}
          >
            <Grid2>
              <Typography variant="button">{t("GitHub")}</Typography>
            </Grid2>
            <Grid2>
              <Typography className="persian-numbers" variant="body2">
                {t("Reserved")}
              </Typography>
            </Grid2>
          </Grid2>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
