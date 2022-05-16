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
    <div>
      <h1>Login</h1>
      <form className="auth-form">
        <input
          value={loginForm.username}
          type="text"
          name="username"
          placeholder="Username..."
          onChange={(e) =>
            setLoginForm({ ...loginForm, username: e.target.value })
          }
        />
        <input
          value={loginForm.password}
          type="password"
          name="password"
          placeholder="Password..."
          onChange={(e) =>
            setLoginForm({ ...loginForm, password: e.target.value })
          }
        />
        <button onClick={handleLoginForm}>Login</button>
        <Link to="/register">
          <button>Create a new account!</button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
