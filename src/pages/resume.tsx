import { Grid2 } from "@mui/material";
import Page from "../custom/page";
import ResumeTimeLine from "../custom/resume-time-line";
const Resume = () => {
  return (
    <Page title="Resume">
      <Grid2 container>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <ResumeTimeLine title="Working History1" />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <ResumeTimeLine title="Education History2" />
        </Grid2>
      </Grid2>
    </Page>
  );
};

export default Resume;
