import { Box, Button, Container, Typography } from "@mui/material";
import { Background } from "components/common/Background/Background";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "redux/app/hooks";
import { setAuthorized, setCurrentUser } from "redux/slices/authSlice";
import { motion } from "framer-motion";

export const Profile = () => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const handleLogout = () => {
    localStorage.clear();
    dispatch(setAuthorized(false));
    dispatch(setCurrentUser(""));
  };

  return (
    <Background url="https://cdn.discordapp.com/attachments/1079309153685737603/1079812702307889315/MrJeleika_illustration_of_forest_without_text_for_website_uxui_5c5cfda6-d7bd-4bfb-ac97-1f0f43db3e00.png">
      <Container
        maxWidth="lg"
        sx={{ py: 3, mt: 4, bgcolor: "primary.lightgray", borderRadius: 1, minHeight: "85vh" }}
      >
        <motion.h1
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ ease: "easeOut", duration: 3 }}
        >
          <Typography variant="h2" color="primary.text" sx={{ fontWeight: 400 }}>
            {t("hello")}
          </Typography>
        </motion.h1>

        <motion.p
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ ease: "easeIn", duration: 2, delay: 1 }}
        >
          <Typography variant="h4" color="primary.text" sx={{ pr: 1 }}>
            {t("glad")}
          </Typography>
        </motion.p>
        <motion.p
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ ease: "easeIn", duration: 3, delay: 2.5 }}
        >
          <Typography variant="h4" color="primary.text">
            {t("appreciate")}
          </Typography>
        </motion.p>

        <motion.p
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ ease: "easeIn", duration: 3, delay: 4.5 }}
        >
          <Typography variant="h4" color="primary.text" sx={{ mb: 30 }}>
            {t("luck")}
          </Typography>
        </motion.p>

        <Box sx={{ display: "flex", justifyContent: "center", height: "100%", alignItems: "end" }}>
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ ease: "easeIn", duration: 0.5, delay: 4.5 }}
          >
            <Button onClick={handleLogout} variant="contained" sx={{ px: 5, py: 1.5 }}>
              {t("logout")}
            </Button>
          </motion.div>
        </Box>
      </Container>
    </Background>
  );
};
