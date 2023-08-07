import "./login.scss";
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import login from "../../Redux/apiCalls";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Login</h1>
        <form>
          <input
            type="text"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleChange}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
