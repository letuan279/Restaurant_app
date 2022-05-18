import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Register = () => {
  const [RegisterForm, setRegisterForm] = useState({
    name: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const { registerUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleRegisterForm = async (event) => {
    event.preventDefault();

    const { name, username, password, confirmPassword } = RegisterForm;
    //validate
    if (
      !name ||
      !username ||
      !password ||
      !confirmPassword ||
      password !== confirmPassword
    ) {
      alert("Invalid register form");
    } else {
      const response = await registerUser(RegisterForm);
      alert(response.message);
      if (response.status === 200) {
        navigate("/login", { replace: true });
      }
    }
  };

  return (
    <div className="h-screen bg-gray-100 flex justify-center">
      <div className="py-6 px-8 h-max mt-40 bg-white rounded shadow-xl">
        <form action="">
          <div>
            <label htmlFor="name" className="block text-gray-800 font-bold">
              Name:
            </label>
            <input
              value={RegisterForm.name}
              type="text"
              name="name"
              id="name"
              placeholder="username"
              className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
              onChange={(e) =>
                setRegisterForm({ ...RegisterForm, name: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="username" className="block text-gray-800 font-bold">
              Username:
            </label>
            <input
              value={RegisterForm.username}
              type="text"
              name="username"
              id="username"
              placeholder="username"
              className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
              onChange={(e) =>
                setRegisterForm({ ...RegisterForm, username: e.target.value })
              }
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-800 font-bold">
              Password:
            </label>
            <input
              value={RegisterForm.password}
              type="password"
              name="password"
              id="password"
              placeholder="password"
              className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
              onChange={(e) =>
                setRegisterForm({ ...RegisterForm, password: e.target.value })
              }
            />
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-gray-800 font-bold"
            >
              Confirm password:
            </label>
            <input
              value={RegisterForm.confirmPassword}
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="confirm password"
              className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
              onChange={(e) =>
                setRegisterForm({
                  ...RegisterForm,
                  confirmPassword: e.target.value,
                })
              }
            />
          </div>
          <button
            onClick={handleRegisterForm}
            className="hover:bg-indigo-400 cursor-pointer py-2 px-4 block mt-6 bg-indigo-500 text-white font-bold w-full text-center rounded"
          >
            Register
          </button>
          <Link to="/login">
            <button className="hover:text-blue-400">Move to login</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
