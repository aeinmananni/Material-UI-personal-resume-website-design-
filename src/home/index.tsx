import { Container, Grid2 } from "@mui/material";
import Header from "../components/header";
import Footer from "../components/footer";
import { Outlet } from "react-router-dom";
import Profile from "../components/profile";
export default function Home() {
  return (
    <Container
      className={"App"}
      maxWidth={"xl"}
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100%",
        overflow: "hidden",
      }}
    >
      <Grid2 container spacing={2} display={"flex"} sx={{ flex: 1 }}>
        <Grid2
          size={{ xs: 12, md: 4, lg: 3 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            paddingBottom: "1.4%",
          }}
        >
          <Profile />
        </Grid2>
        <Grid2
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: "space-between", // This ensures header and footer are spaced out
          }}
          size={{ xs: 12, sm: 12, md: 8, lg: 9 }}
        >
          <Header />
          <Grid2
            sx={{
              width: "100%",
              height: "100%",
              position: "relative",
              borderRadius: "2%",
              border: "3px solid",
              borderColor: "primary.main",
            }}
          >
            <img
              src="https://media.giphy.com/media/doXBzUFJRxpaUbuaqz/giphy.gif"
              alt="Programming gif"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                pointerEvents: "none",
                position: "absolute",
                borderRadius: "2%",
                opacity: "10%",
              }}
            />
            <Outlet />
          </Grid2>
          <Footer />
        </Grid2>
      </Grid2>
    </Container>
  );
}
