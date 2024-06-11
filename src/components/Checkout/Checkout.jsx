import { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import styles from "./Checkout.module.css";

const Checkout = () => {
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
  }, [timer, navigate]);

  const { isAuth } = useContext(AuthContext);
  return isAuth ? (
    <>
      <div className={styles.container}>
        <div className={styles.msg}>
          <h3>
            Your <span className="text-danger">MealMate</span> order is placed
            successfully{" "}
            <i className="bi bi-check-circle-fill text-primary"></i>
          </h3>
          <h6>You will receive your order in 10-20 min</h6>
          <h2 className="text-success">HAPPY EATING</h2>
          <h3 className="text-success">ORDER AGAIN...!</h3>
        </div>
        <p>you will be redirected to Home page after {timer} sec</p>
      </div>
    </>
  ) : (
    <Navigate to={"/login"} />
  );
};

export default Checkout;
