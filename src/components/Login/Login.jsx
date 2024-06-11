import { Button } from "react-bootstrap";
import styles from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const navigate = useNavigate();

  const { loginHandler } = useContext(AuthContext);

  const user = JSON.parse(localStorage.getItem("user"));

  const errorMsgHandler = (msg) => {
    setError(msg);
    setTimeout(() => {
      setError("");
    }, [3000]);
  };

  const successMsgHandler = (msg) => {
    setSuccessMsg(msg);
    setTimeout(() => {
      navigate("/menu");
    }, [3000]);
  };

  const loginBtnHandler = (e) => {
    e.preventDefault();
    console.log("click");
    if (userName === user.name && userPassword === user.password) {
      loginHandler();
      successMsgHandler("Login successful!");
    } else {
      errorMsgHandler("Invalid username & password");
    }
  };

  return (
    <div className={styles.container}>
      <h2 className="mb-4">Login</h2>
      <label htmlFor="name">Name</label>

      <input
        type="text"
        id="name"
        onChange={(e) => setUserName(e.target.value)}
        value={userName}
      />

      <label htmlFor="pass">Password</label>

      <input
        type="password"
        id="pass"
        onChange={(e) => setUserPassword(e.target.value)}
        value={userPassword}
      />

      <div className={styles.btn}>
        <Button variant="primary" onClick={loginBtnHandler}>
          LOGIN
        </Button>
        <Link to="/signup">
          <Button variant="link">Create account</Button>
        </Link>
      </div>

      <p className="text-danger fw-bold text-center mt-3">{error}</p>
      <p className="text-success fw-bold text-center mt-3">{successMsg}</p>
    </div>
  );
};

export default Login;
