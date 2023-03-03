import { useForm, Controller } from "react-hook-form";
import { Alert, Box, Button, IconButton, TextField, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "redux/app/hooks";
import { setAuthorized, setCurrentUser } from "redux/slices/authSlice";
import { useState } from "react";
import { Close } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface FormInputs {
  username: string;
  password: string;
}

export const AuthForm = () => {
  const { users } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [authError, setAuthError] = useState<boolean>(false);
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    control,
  } = useForm<FormInputs>();
  const onSubmit = (data: FormInputs) => {
    if (users.find((user) => user.username === data.username && user.password === data.password)) {
      setAuthError(false);
      sessionStorage.setItem("username", data.username);
      navigate("/profile", { replace: true });
      dispatch(setCurrentUser(data.username));
      dispatch(setAuthorized(true));
    } else {
      setAuthError(true);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="username"
        control={control}
        render={({ field }) => (
          <Box sx={{ mb: 3 }}>
            <TextField
              {...register("username", { required: t("required_error")! })}
              {...field}
              label="Username"
              variant="standard"
              color={errors.password ? "error" : "primary"}
              type="username"
              sx={{ width: " 100%", bgcolor: "primary.lightgray", mb: 1 }}
            ></TextField>
            {errors.username && (
              <Alert severity="error" variant="outlined" sx={{ py: 0 }}>
                {errors.username.message}
              </Alert>
            )}
          </Box>
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <Box sx={{ mb: 3 }}>
            <TextField
              {...register("password", { required: t("required_error")! })}
              {...field}
              label="Password"
              variant="standard"
              color={errors.password ? "error" : "primary"}
              type="password"
              sx={{ width: " 100%", bgcolor: "primary.lightgray", mb: 1 }}
            ></TextField>
            {errors.password && (
              <Alert severity="error" variant="outlined" sx={{ py: 0 }}>
                {errors.password.message}
              </Alert>
            )}
          </Box>
        )}
      />
      {authError ? (
        <Alert
          severity="error"
          variant="outlined"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setAuthError(false);
              }}
            >
              <Close fontSize="inherit" />
            </IconButton>
          }
          sx={{ py: 0, mb: 2 }}
        >
          Invalid username or password, try again
        </Alert>
      ) : null}
      <Button type="submit" variant="outlined" sx={{ width: "100%", py: 1.5 }}>
        {t("sign_in")}
      </Button>
    </form>
  );
};
