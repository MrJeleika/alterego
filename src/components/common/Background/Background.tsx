import { Box } from "@mui/material";
import { theme } from "theme";

interface Props {
  children: React.ReactNode;
  url: string;
}

export const Background = ({ children, url }: Props) => {
  return (
    <Box
      sx={{
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${url})`,
        backgroundPosition: "top",
        pt: 5,
        minHeight: `calc(100vh - ${theme.spacing(5)})`,
      }}
    >
      {children}
    </Box>
  );
};
