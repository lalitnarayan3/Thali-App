import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/menu");
  };
  return (
    <>
      <div className={styles.banner}>
        <h1>Never have a bad meal!</h1>
        <div className={styles.btn}>
          <button onClick={handleNavigate}>OUR MENU</button>
        </div>
      </div>
    </>
  );
};

export default Home;
