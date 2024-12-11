import { Typography } from "@mui/material";

type PageHeaderProps = {
  children?: React.ReactNode;
};

const PageHeader = ({ children }: PageHeaderProps) => {
  return (
    <Typography variant="h6" sx={{ textDecoration: "underline" }}>
      {children}
    </Typography>
  );
};

export default PageHeader;
