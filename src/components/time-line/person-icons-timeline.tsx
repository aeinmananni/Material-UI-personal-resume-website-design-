import {
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
} from "@mui/lab";
import { PersonOutlineOutlined as PersonIcon } from "@mui/icons-material";
import { useChangeLanguage } from "../../hooks/useChange-language";
const PersonIconTimeLine = () => {
  const { i18n } = useChangeLanguage();
  const lang = i18n.language === "fa";
  return (
    <TimelineItem
      sx={{
        ml: lang ? 0 : -1.4,
        mr: lang ? -1.4 : 0,
        mt: -2,
      }}
    >
      <TimelineSeparator>
        <TimelineDot
          sx={{ backgroundColor: "primary.main", color: "text.primary" }}
        >
          <PersonIcon />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
    </TimelineItem>
  );
};

export default PersonIconTimeLine;
