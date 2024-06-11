import { Button } from "react-bootstrap";
import styles from "./Signup.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const alphaNumericRegex = /^[A-Za-z]+/;

const SignUp = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const navigate = useNavigate();

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const successMsgHandler = () => {
    setSuccessMsg("User successfully registered!!");
    setTimeout(() => {
      setSuccessMsg("");
    }, [3000]);
  };
  const errorMsgHandler = (msg) => {
    setError(msg);
    setTimeout(() => {
      setError("");
    }, [3000]);
  };

  const singupValidation = () => {
    const validation = [
      {
        isValid: !input.name,
        error: "Username is required",
        ref: nameRef,
      },
      {
        isValid: !alphaNumericRegex.test(input.name),
        error: "Invalid Username",
        ref: nameRef,
      },
      {
        isValid: input.name.length < 3,
        error: "Username should be atleast 3 charectors",
        ref: nameRef,
      },
      {
        isValid: !input.email,
        error: "Email is required",
        ref: emailRef,
      },
      {
        isValid: !emailRegex.test(input.email),
        error: "Invalid email id",
        ref: emailRef,
      },
      {
        isValid: !input.password,
        error: "Password is required",
        ref: passwordRef,
      },
      {
        isValid: input.password.length < 8,
        error: "Password atleast 8 charector",
        ref: passwordRef,
      },
    ];

    for (let valid of validation) {
      if (valid.isValid) {
        errorMsgHandler(valid.error);
        valid.ref.current.focus();
        return false;
      }
    }
    return true;
  };

  const registerHandler = (e) => {
    e.preventDefault();
    if (!singupValidation()) {
      return;
    }

    localStorage.setItem("user", JSON.stringify(input));
    successMsgHandler();
    setTimeout(() => {
      navigate("/login");
    }, 4000);
  };

  return (
    <>
      <div className={styles.container}>
        <h2 className="mb-4">Sign up</h2>
        <label htmlFor="name">Userame</label>

        <input
          ref={nameRef}
          type="text"
          id="name"
          onChange={(e) => setInput({ ...input, name: e.target.value })}
          value={input.name}
        />

        <label htmlFor="email">Email</label>

        <input
          ref={emailRef}
          type="email"
          id="email"
          onChange={(e) => setInput({ ...input, email: e.target.value })}
          value={input.email}
        />

        <label htmlFor="pass">Password</label>

        <input
          ref={passwordRef}
          type="password"
          id="pass"
          onChange={(e) => setInput({ ...input, password: e.target.value })}
          value={input.password}
        />

        <Button variant="primary" onClick={registerHandler}>
          REGISTER
        </Button>
        <div className={styles.btn}>
          <p>Alredy have an account?</p>
          <Link to="/login">
            <Button variant="link">Login</Button>
          </Link>
        </div>
        <p className="text-danger fw-bold text-center mt-3">{error}</p>
        <p className="text-success fw-bold text-center mt-3">{successMsg}</p>
      </div>
    </>
  );
};

export default SignUp;
