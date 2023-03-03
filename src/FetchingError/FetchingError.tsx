import { useAppDispatch } from "redux/app/hooks";
import { useState } from "react";
import { Snackbar, Alert } from "@mui/material";
import { setFetchingError } from "redux/slices/appSlice";

export const FetchingError = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(setFetchingError(false));
    setIsOpen(false);
  };

  return (
    <Snackbar open={isOpen} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
        Error occurred, please reload page
      </Alert>
    </Snackbar>
  );
};
