import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { GrLogout } from "react-icons/gr";

const NavBar = () => {
  const {
    authState: {
      user: { name },
    },
    logoutUser,
  } = useContext(AuthContext);

  return (
    <nav>
      <div className="">
        <div className="flex justify-between h-16 px-10 shadow-lg items-center">
          <div className="flex items-center space-x-8">
            <h1 className="text-xl lg:text-2xl font-bold">Restaurant</h1>
            <div className="hidden md:flex justify-around space-x-4">
              <Link to="/home">
                <div className="hover:text-blue-400">Home</div>
              </Link>
              <Link to="/restaurant">
                <div className="hover:text-blue-400">My Restaurants</div>
              </Link>
            </div>
          </div>
          <div className="flex space-x-4 items-center">
            <h2 className="mr-4 p-2 border rounded-3xl shadow-md ">{name}</h2>
            <button
              className="text-xl cursor-pointer border rounded-3xl shadow-md p-3"
              onClick={async () => logoutUser()}
            >
              <GrLogout />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
