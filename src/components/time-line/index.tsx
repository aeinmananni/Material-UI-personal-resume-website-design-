import {
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  Timeline,
} from "@mui/lab";
import { timeLineItems } from "../../data";
import { useChangeLanguage } from "../../hooks/useChange-language";
import {
  InsertEmoticon,
  PersonOutlineOutlined as PersonIcon,
} from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
export default function TimeLineComponent() {
  const { i18n, t } = useChangeLanguage();
  const lang = i18n.language === "fa";
  return (
    <div
      style={{
        position: "absolute",
        height: "250px",
        bottom: 50,
        overflowY: "auto",
        overflowX: "hidden",
        borderRadius: "8px",
        width: "100%",
        paddingTop: "9px",
      }}
    >
      <Timeline
        position="right"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "start",
          ml: lang ? 0 : -3.5,
          mr: lang ? -3.5 : 0,
        }}
      >
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
        {timeLineItems.map((it, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot variant="outlined" color="primary" />
              {it.title !== timeLineItems[timeLineItems.length - 1].title && (
                <TimelineConnector />
              )}
            </TimelineSeparator>
            <Stack
              direction={"row"}
              spacing={2}
              alignItems={"center"}
              mt={-4}
              ml={lang ? 0 : 2}
              mr={lang ? 2 : 0}
            >
              <Typography variant="button">{t(it.title)}: </Typography>
              <Typography variant="body2"> {t(it.value)}</Typography>
            </Stack>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
}
