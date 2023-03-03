import "./App.css";
import { Container, Box } from "@mui/material";
import { Navbar } from "./components/Navbar/Navbar";
import { useAppSelector } from "redux/app/hooks";
import { FetchingError } from "FetchingError/FetchingError";

import { MyRoutes } from "components/Routes/MyRoutes";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setAuthorized, setCurrentUser } from "redux/slices/authSlice";

function App() {
  const { isFetchingError } = useAppSelector((state) => state.app);
  const dispatch = useDispatch();

  // get data from local storage
  useEffect(() => {
    const username = localStorage.getItem("username");
    if (username) {
      dispatch(setAuthorized(true));
      dispatch(setCurrentUser(username));
    }
  }, []);

  return (
    <div className="App">
      <Navbar />
      <MyRoutes />
      {isFetchingError && <FetchingError />}
    </div>
  );
}

export default App;
