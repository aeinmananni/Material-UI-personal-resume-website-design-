import {
  Timeline,
  TimelineConnector,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";

import { useChangeLanguage } from "../hooks/useChange-language";
import React from "react";
import { Stack, Typography } from "@mui/material";

type ResumeTimeLineProps = {
  icons?: React.ReactNode;
  title?: string;
  date?: string;
  description?: string;
};

export default function ResumeTimeLine({
  date,
  description,
  title,
}: ResumeTimeLineProps) {
  const { i18n } = useChangeLanguage();
  const lang = i18n.language === "fa";
  return (
    <div
      style={{
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
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="primary" />
            <TimelineConnector sx={{ backgroundColor: "primary.main" }} />
          </TimelineSeparator>
          <Stack mt={1} ml={lang ? 0 : 2} mr={lang ? 2 : 0}>
            <Typography variant="button">{title} </Typography>
            <Typography variant="body2">{date}</Typography>
            <Typography sx={{ textJustify: "inter-word" }} variant="body1">
              {description}
            </Typography>
          </Stack>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
