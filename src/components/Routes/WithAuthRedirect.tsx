import { Auth } from "components/Auth/Auth";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "redux/app/hooks";

interface Props {
  children: React.ReactNode;
}

export const WithAuthRedirect = ({ children }: Props) => {
  const { currentUser } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  if (currentUser) return <> {children} </>;
  navigate("/login", { replace: true });
  return <Auth />;
};
