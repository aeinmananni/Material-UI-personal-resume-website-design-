import { AppBar, Box, Grid2, Toolbar, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box mt={2} mb={2}>
      <AppBar sx={{ backgroundColor: "background.paper" }}>
        <Toolbar disableGutters>
          <Grid2
            container
            p={2}
            alignItems={"center"}
            justifyContent={"space-between"}
            direction={"row"}
            spacing={3}
            sx={{ width: "100%" }}
          >
            <Grid2>
              <Typography variant="button">my Git Hub</Typography>
            </Grid2>
            <Grid2>
              <Typography variant="body2">
                @ 2024 All rights reserved{" "}
              </Typography>
            </Grid2>
          </Grid2>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
