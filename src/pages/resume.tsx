import { Grid2 } from "@mui/material";
import Page from "../custom/page";
import ResumeTimeLine from "../custom/resume-time-line";
import { resumeItems } from "../data";
import IconTimeLines from "../components/time-line/icons-timeline";

const Resume = () => {
  return (
    <Page title="Resume">
      <Grid2 container>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <div
            style={{ width: "100%", display: "flex", justifyContent: "start" }}
          >
            <IconTimeLines icons={<span>ddd</span>} />
          </div>
          {resumeItems.map((item, index) => (
            <ResumeTimeLine
              key={index}
              title={item.title}
              date={item.date}
              description={item.description}
            />
          ))}
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <ResumeTimeLine />
        </Grid2>
      </Grid2>
    </Page>
  );
};

export default Resume;
