import {
  Home as HomeIcons,
  Send as SendIcon,
  Translate as TranslateIcon,
} from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Paper,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";
import { tabs } from "../../models";
import { useChangeLanguage } from "../../hooks/useChange-language";
import { useStoreManager } from "../../store/store";
export default function Header() {
  const { t, changeLanguage } = useChangeLanguage();

  const { isTranslate, setIsTranslate } = useStoreManager();
  console.log(isTranslate);
  return (
    <Paper>
      <AppBar sx={{ backgroundColor: "background.paper" }}>
        <Toolbar disableGutters>
          <Box
            sx={{
              backgroundColor: "primary.main",
              cursor: "pointer",
              color: "text.primary",
              textDecoration: "none",
              borderTopLeftRadius: isTranslate === false ? "10px" : 0,
              borderTopRightRadius: isTranslate ? "10px" : 0,
              borderBottomLeftRadius: isTranslate === false ? "10px" : 0,
              borderBottomRightRadius: isTranslate ? "10px" : 0,
              display: { xs: "none", md: "flex" },
            }}
            p={2}
          >
            <HomeIcons />
          </Box>
          <Tabs
            sx={{ ml: 1, flexGrow: 1, disply: "flex" }}
            variant="scrollable"
            scrollButtons="auto"
          >
            {tabs.map((it, index) => (
              <Tab
                key={index}
                value={it.link}
                label={<Typography variant="button">{t(it.title)}</Typography>}
              />
            ))}
          </Tabs>

          <Button
            className="rounded-btn"
            variant="contained"
            endIcon={isTranslate === false && <SendIcon />}
            startIcon={isTranslate === true && <SendIcon sx={{ ml: 1 }} />}
            sx={{
              marginRight: 2,
              marginLeft: isTranslate ? 2 : 0,
              display: { xs: "none", md: "flex" },
            }}
          >
            <Typography variant="button">{t("HIREME")}</Typography>
          </Button>
          <Box
            onClick={() => {
              setIsTranslate((c) => !c).then(() => {
                changeLanguage(isTranslate === true ? "en" : "fa");
              });
            }}
            sx={{
              backgroundColor: "primary.main",
              cursor: "pointer",
              color: "text.primary",
              textDecoration: "none",
              borderTopLeftRadius: isTranslate ? "10px" : 0,
              borderTopRightRadius: isTranslate === false ? "10px" : 0,
              borderBottomLeftRadius: isTranslate ? "10px" : 0,
              borderBottomRightRadius: isTranslate === false ? "10px" : 0,

              display: { xs: "none", md: "flex" },
            }}
            p={2}
          >
            <TranslateIcon />
          </Box>
        </Toolbar>
      </AppBar>
    </Paper>
  );
}
