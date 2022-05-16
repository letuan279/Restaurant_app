import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const {
    authState: { authLoading, isAuthenticated },
  } = useContext(AuthContext);

  const navigate = useNavigate();
  let bodyAuthForm;
  if (authLoading) {
    bodyAuthForm = <h1>Loading ...</h1>;
  } else if (isAuthenticated) {
    navigate("/home", { replace: true });
  } else {
    bodyAuthForm = <Outlet />;
  }

  return <div>{bodyAuthForm}</div>;
};

export default Auth;
