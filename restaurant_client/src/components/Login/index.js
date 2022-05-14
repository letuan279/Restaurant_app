import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });

  //   console.log("hehe");
  const handleLoginForm = (event) => {
    event.preventDefault();

    console.log(loginForm);
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
