import { Container, Grid2 } from "@mui/material";

export default function App() {
  return (
    <Container>
      <Grid2 container>
        <Grid2
          size={{ xs: 12, sm: 12, md: 4, lg: 3 }}
          style={{ backgroundColor: "blue" }}
        >
          ABC
        </Grid2>
        <Grid2
          size={{ xs: 12, sm: 12, md: 8, lg: 9 }}
          style={{ backgroundColor: "red" }}
        >
          DEF
        </Grid2>
      </Grid2>
    </Container>
  );
}
