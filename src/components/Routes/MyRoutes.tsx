import { Auth } from "components/Auth/Auth";
import { News } from "components/News/News";
import { Route, Routes } from "react-router-dom";
import { WithAuthRedirect } from "./WithAuthRedirect";
import { Profile } from "components/Profile/Profile";
import { Home } from "components/Home/Home";
import { NotFound } from "components/404/404";

export const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/news" element={<News />} />
      <Route path="/login" element={<Auth />} />
      <Route
        path="/profile"
        element={
          <WithAuthRedirect>
            <Profile />
          </WithAuthRedirect>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
