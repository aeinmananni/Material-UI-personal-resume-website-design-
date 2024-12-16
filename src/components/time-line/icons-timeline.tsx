import {
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
} from "@mui/lab";

import { useChangeLanguage } from "../../hooks/useChange-language";

type PersonTimeLineProps = {
  icons?: React.ReactNode;
};
const IconTimeLines = ({ icons }: PersonTimeLineProps) => {
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
          {icons}
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
    </TimelineItem>
  );
};

export default IconTimeLines;
