import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import AuthContextProvider from "./contexts/AuthContext";
import Auth from "./components/Auth";
import RequireAuth from "./components/RequireAuth";
import Home from "./components/Home";
import MyRestaurant from "./components/MyRestaurant";
import "./App.css";

function App() {
  return (
    <AuthContextProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Auth />}>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
          <Route element={<RequireAuth />}>
            <Route path="/home" element={<Home />} />
            <Route path="/restaurant" element={<MyRestaurant />} />
          </Route>
        </Routes>
      </div>
    </AuthContextProvider>
  );
}

export default App;
