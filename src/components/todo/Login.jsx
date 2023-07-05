import { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const Login = () => {
  const authContext = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showErrorMessage, setErrorMessage] = useState(false);

  const onChangeUsername = (cur) => setUsername(cur.target.value);
  const onChangePassword = (cur) => setPassword(cur.target.value);
  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
    if (authContext.login(username, password)) navigate(`/home/${username}`);
    else setErrorMessage(true);
    setUsername("");
    setPassword("");
  };

  return (
    <>
      <h1>Login Page</h1>
      {showErrorMessage && <div>Login Error</div>}
      <form onSubmit={onSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={onChangeUsername}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChangePassword}
          />
        </div>
        <input type="submit" />
      </form>
    </>
  );
};

export default Login;
