import { Timeline } from "@mui/lab";
import { timeLineItems } from "../../data";
import { useChangeLanguage } from "../../hooks/useChange-language";
import PersonIconTimeLine from "./person-icons-timeline";
import TableTimeLine from "./table-time-line";

export default function TimeLineComponent() {
  const { i18n } = useChangeLanguage();
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
        <PersonIconTimeLine />

        {timeLineItems?.map((it, index) => (
          <TableTimeLine it={it} key={index} />
        ))}
      </Timeline>
    </div>
  );
}
