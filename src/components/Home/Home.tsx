import { Box, Typography } from "@mui/material";
import { Background } from "components/common/Background/Background";

export const Home = () => {
  return (
    <Background url="https://cdn.discordapp.com/attachments/1079309153685737603/1079720354123092049/MrJeleika_illustration_of_forest_without_text_for_website_uxui_13cdbf81-5edd-4824-87f2-24bf34ab671d.png">
      <Box sx={{ height: "100%", width: "100%", pt: 30, textAlign: "center" }}>
        <Typography variant="h1" sx={{ fontWeight: "bold" }} color="#E06900">
          Just forest
        </Typography>
      </Box>
    </Background>
  );
};
