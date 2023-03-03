import { Close, Menu } from "@mui/icons-material";
import { AppBar, Box, IconButton, Link, Toolbar } from "@mui/material";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "redux/app/hooks";
import { BaseSyntheticEvent, useState } from "react";

export const Navbar = () => {
  const { isAuthorized } = useAppSelector((state) => state.auth);
  const { t, i18n } = useTranslation();

  const changeLang = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClose = (nativeElement: BaseSyntheticEvent) => {
    const element = nativeElement.target;

    // Check if target is link

    if (element.tagName.toLowerCase() === "a") {
      setIsOpen(false);
    }
  };

  return (
    <AppBar
      component="nav"
      variant="elevation"
      sx={{ bgcolor: "transparent", boxShadow: 0 }}
      position="absolute"
    >
      <Toolbar sx={{ display: "flex", position: "static", justifyContent: "space-between" }}>
        <NavLink to={"/"}>
          <Link
            variant="h4"
            color="primary.lightgray"
            underline="none"
            sx={{ cursor: "pointer", fontWeight: "bold" }}
          >
            AlterEGO
          </Link>
        </NavLink>
        <Box sx={{ display: ["none", "flex"] }}>
          <NavLink to={"/"}>
            <Link
              underline="hover"
              color="primary.lightgray"
              sx={{ cursor: "pointer", mx: 2 }}
              variant="button"
            >
              {t("home")}
            </Link>
          </NavLink>
          <NavLink to={"news"}>
            <Link
              underline="hover"
              color="primary.lightgray"
              sx={{ cursor: "pointer", mx: 2 }}
              variant="button"
            >
              {t("news")}
            </Link>
          </NavLink>
          {isAuthorized ? (
            <NavLink to={"/profile"}>
              <Link
                underline="hover"
                color="primary.lightgray"
                sx={{ cursor: "pointer", mx: 2 }}
                variant="button"
              >
                {t("profile")}
              </Link>
            </NavLink>
          ) : (
            <NavLink to={"/login"}>
              <Link
                underline="hover"
                color="primary.lightgray"
                sx={{ cursor: "pointer", mx: 2 }}
                variant="button"
              >
                {t("log_in")}
              </Link>
            </NavLink>
          )}
          <Box sx={{ mx: 2 }}>
            <Link
              underline="hover"
              color="primary.lightgray"
              sx={{ cursor: "pointer" }}
              variant="button"
              onClick={() => changeLang("ua")}
            >
              UA
            </Link>{" "}
            <Link
              underline="hover"
              color="primary.lightgray"
              sx={{ cursor: "pointer" }}
              variant="button"
              onClick={() => changeLang("en")}
            >
              EN
            </Link>
          </Box>
        </Box>
        <Box sx={{ display: ["block", "none"] }}>
          <IconButton onClick={() => setIsOpen(true)}>
            <Menu sx={{ color: "primary.lightgray" }} />
          </IconButton>
        </Box>
      </Toolbar>

      {/* Mobile burger */}
      <Box
        sx={{
          display: ["block", "none"],
          position: "fixed",
          width: "100vw",
          height: "100vh",
          transform: isOpen ? "translateY(0)" : "translateY(-100%)",
          bgcolor: "primary.lightgray",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", px: 2, py: 1.5 }}>
          <IconButton onClick={() => setIsOpen(false)}>
            <Close color="primary" />
          </IconButton>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "55%",
            justifyContent: "space-evenly",
          }}
          onClick={(e) => handleClose(e)}
        >
          <NavLink to={"/"}>
            <Link
              underline="hover"
              color="primary.dark"
              sx={{ cursor: "pointer", mx: 2, fontSize: "25px" }}
              variant="button"
            >
              {t("home")}
            </Link>
          </NavLink>
          <NavLink to={"news"}>
            <Link
              underline="hover"
              color="primary.dark"
              sx={{ cursor: "pointer", mx: 2, fontSize: "25px" }}
              variant="button"
            >
              {t("news")}
            </Link>
          </NavLink>
          {isAuthorized ? (
            <NavLink to={"/profile"}>
              <Link
                underline="hover"
                color="primary.dark"
                sx={{ cursor: "pointer", mx: 2, fontSize: "25px" }}
                variant="button"
              >
                {t("profile")}
              </Link>
            </NavLink>
          ) : (
            <NavLink to={"/login"}>
              <Link
                underline="hover"
                color="primary.dark"
                sx={{ cursor: "pointer", mx: 2, fontSize: "25px" }}
                variant="button"
              >
                {t("log_in")}
              </Link>
            </NavLink>
          )}
          <Box sx={{ mx: 2 }}>
            <Link
              underline="hover"
              color="primary.dark"
              sx={{ cursor: "pointer", mx: 2, fontSize: "25px" }}
              variant="button"
              onClick={() => changeLang("ua")}
            >
              UA
            </Link>{" "}
            <Link
              underline="hover"
              color="primary.dark"
              sx={{ cursor: "pointer", mx: 2, fontSize: "25px" }}
              variant="button"
              onClick={() => changeLang("en")}
            >
              EN
            </Link>
          </Box>
        </Box>
      </Box>
    </AppBar>
  );
};
