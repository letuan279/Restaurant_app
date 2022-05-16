import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const RequireAuth = () => {
  const {
    authState: { authLoading, isAuthenticated },
  } = useContext(AuthContext);

  if (authLoading) {
    return <h1>Loading ...</h1>;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default RequireAuth;
