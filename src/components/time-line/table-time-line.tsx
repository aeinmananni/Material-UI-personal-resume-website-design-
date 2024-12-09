import {
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
} from "@mui/lab";
import { Stack, Typography } from "@mui/material";

import { timeLineItems } from "../../data";
import { TimeLineType } from "../../models";
import { useChangeLanguage } from "../../hooks/useChange-language";

type TableTimeLineProps = {
  it: TimeLineType;
  key: number;
};

const TableTimeLine = ({ it, key }: TableTimeLineProps) => {
  const { i18n, t } = useChangeLanguage();
  const lang = i18n.language === "fa";
  return (
    <TimelineItem key={key}>
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
  );
};

export default TableTimeLine;
