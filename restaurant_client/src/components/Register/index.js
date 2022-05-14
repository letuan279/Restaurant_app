import { useState } from "react";

const Register = () => {
  const [RegisterForm, setRegisterForm] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleRegisterForm = (event) => {
    event.preventDefault();

    console.log(RegisterForm);
  };

  return (
    <div>
      <h1>Register</h1>
      <form className="auth-form">
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
