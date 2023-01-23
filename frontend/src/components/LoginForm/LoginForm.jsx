import { useContext, useState } from "react";
import axios from "axios";
import { userContext } from "@services/context/userContext";
import { useNavigate } from "react-router-dom";
import "./style.scss";

export default function LoginForm() {
  const navigate = useNavigate();
  const { setUsers } = useContext(userContext);
  const [newConnect, setNewConnect] = useState({
    email: "",
    password: "",
  });
  const hChange = (evt) => {
    setNewConnect({ ...newConnect, [evt.target.name]: evt.target.value });
  };
  const hSubmit = (evt) => {
    evt.preventDefault();
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/login`, newConnect)
      .then(({ data }) => {
        const { user } = data;
        setUsers(user);
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <form className="loginForm" onSubmit={hSubmit}>
      <label className="inputLoginForm">
        <h1 className="loginTitle">LogIn</h1>
        <input
          className="inputLogin"
          type="text"
          name="email"
          value={newConnect.email}
          placeholder="Email"
          onChange={hChange}
        />
        <input
          className="inputLogin"
          type="password"
          name="password"
          value={newConnect.password}
          placeholder="Password"
          onChange={hChange}
        />
      </label>
      <button type="submit" className="loginSubmit">
        Connect
      </button>
    </form>
  );
}
