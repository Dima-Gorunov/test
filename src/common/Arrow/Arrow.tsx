import styles from "./style.module.css";

const Arrow = ({ active }) => {
  return (
    <div style={{ position: "relative" }}>
      <div className={styles.arrow + " " + (active && styles.open)}>
        <span className={styles["arrow-left"]}></span>
        <span className={styles["arrow-right"]}></span>
      </div>
    </div>
  );
};

export default Arrow;
