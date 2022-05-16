import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const NavBar = () => {
  const {
    authState: {
      user: { username },
    },
    logoutUser,
  } = useContext(AuthContext);

  return (
    <nav className="nav-bar">
      <Link to="/home">
        <div>Home</div>
      </Link>

      <Link to="/restaurant">
        <div>My Restaurants</div>
      </Link>

      <h2>{username}</h2>
      <button onClick={async () => logoutUser()}>Logout</button>
    </nav>
  );
};

export default NavBar;
