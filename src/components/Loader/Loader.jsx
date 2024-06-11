import loader2 from "./loader2.gif";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.container}>
      <img src={loader2} alt="Loading..." />
    </div>
  );
};

export default Loader;
