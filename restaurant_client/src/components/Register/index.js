import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

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
    <div>
      <h1>Register</h1>
      <form className="auth-form">
        <input
          value={RegisterForm.name}
          type="text"
          name="name"
          placeholder="Name..."
          onChange={(e) =>
            setRegisterForm({ ...RegisterForm, name: e.target.value })
          }
        />
        <input
          value={RegisterForm.username}
          type="text"
          name="username"
          placeholder="Username..."
          onChange={(e) =>
            setRegisterForm({ ...RegisterForm, username: e.target.value })
          }
        />
        <input
          value={RegisterForm.password}
          type="password"
          name="password"
          placeholder="Password..."
          onChange={(e) =>
            setRegisterForm({ ...RegisterForm, password: e.target.value })
          }
        />

        <input
          value={RegisterForm.confirmPassword}
          type="password"
          name="password"
          placeholder="Password..."
          onChange={(e) =>
            setRegisterForm({
              ...RegisterForm,
              confirmPassword: e.target.value,
            })
          }
        />
        <button onClick={handleRegisterForm}>Register</button>
      </form>
    </div>
  );
};

export default Register;
