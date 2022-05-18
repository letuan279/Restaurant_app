import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const Login = () => {
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });

  const { loginUser } = useContext(AuthContext);

  const handleLoginForm = async (event) => {
    event.preventDefault();

    //validate
    if (!loginForm.username || !loginForm.password) {
      alert("Incorrect username or password");
      return;
    }

    try {
      const loginData = await loginUser(loginForm);
      // console.log(loginData);
      if (loginData.status !== 200) {
        alert(loginData.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="h-screen bg-gray-100 flex justify-center">
      <div className="py-6 px-8 h-80 mt-40 bg-white rounded shadow-xl">
        <form action="">
          <div className="mb-6">
            <label htmlFor="username" className="block text-gray-800 font-bold">
              Username:
            </label>
            <input
              value={loginForm.username}
              type="text"
              name="username"
              id="username"
              placeholder="username"
              className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
              onChange={(e) =>
                setLoginForm({ ...loginForm, username: e.target.value })
              }
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-800 font-bold">
              Password:
            </label>
            <input
              value={loginForm.password}
              type="password"
              name="password"
              id="password"
              placeholder="password"
              className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
              onChange={(e) =>
                setLoginForm({ ...loginForm, password: e.target.value })
              }
            />
          </div>
          <button
            onClick={handleLoginForm}
            className="hover:bg-indigo-400 cursor-pointer py-2 px-4 block mt-6 bg-indigo-500 text-white font-bold w-full text-center rounded"
          >
            Login
          </button>
          <Link to="/register">
            <button className="hover:text-blue-400">
              Create a new account!
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
