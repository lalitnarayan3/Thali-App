import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Error.module.css";
const Error = () => {
  const [timer, setTimer] = useState(5);
  const navigate = useNavigate();
  useEffect(() => {
    if (timer > 0) {
      setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);
    } else {
      navigate("/");
    }
  }, [navigate, timer]);

  return (
    <div className={styles.err}>
      <h1 className="text-danger">Error:404 Page Not Found!!</h1>
      <p>
        Please click the link to redirect to <Link to="/">Home</Link> page
      </p>
      <p>Or, you will auto redirect to Home page in {timer} sec.</p>
    </div>
  );
};

export default Error;
