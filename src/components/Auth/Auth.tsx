import { Box, Paper, Typography } from "@mui/material";
import { Background } from "components/common/Background/Background";
import { AuthForm } from "./AuthForm";
import { useTranslation } from "react-i18next";

export const Auth = () => {
  const { t } = useTranslation();

  return (
    <Background url="https://cdn.discordapp.com/attachments/1079309153685737603/1079731897174863893/MrJeleika_illustration_of_forest_without_text_for_website_uxui_88cf9b52-c5fa-4d43-901d-e97c2c43504e.png">
      <Box sx={{ display: "flex", justifyContent: "center", pt: [20, 30] }}>
        <Paper
          sx={{ bgcolor: "primary.lightgray", p: 5, pb: 7, minWidth: "320px", maxWidth: "500px" }}
        >
          <Typography
            variant="h3"
            color="primary.darkgray"
            sx={{ fontWeight: "600", textAlign: "center", mb: 3 }}
          >
            {t("login")}
          </Typography>
          <Typography
            variant="h6"
            color="primary.darkgray"
            sx={{ fontWeight: "500", textAlign: "center", mb: 2 }}
          >
            {t("detail")}
          </Typography>
          <AuthForm />
        </Paper>
      </Box>
    </Background>
  );
};
