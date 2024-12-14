import { Box, Paper } from "@mui/material";
import PageHeader from "../components/page-header";
import { InfoOutlined } from "@mui/icons-material";
import { useChangeLanguage } from "../hooks/useChange-language";
import React from "react";

type Props = {
  title: string;
  children?: React.ReactNode;
};

const Page = ({ title, children }: Props) => {
  const { t } = useChangeLanguage();
  return (
    <div
      style={{
        padding: "15px",
        height: "100%",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Paper
        sx={{
          background: "transparent",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          boxShadow: 2,
        }}
      >
        <Box sx={{ p: 2, display: "flex", justifyContent: "space-between" }}>
          <PageHeader>{t(`${title}`)}</PageHeader>
          <InfoOutlined />
        </Box>
        <Box
          sx={{
            height: 410,
            overflowY: "auto",
            padding: 1,
            display: "flex",
            flexDirection: "column",
            gap: 4,
            textWrap: "stable",
          }}
        >
          {children}
        </Box>
      </Paper>
    </div>
  );
};

export default Page;
