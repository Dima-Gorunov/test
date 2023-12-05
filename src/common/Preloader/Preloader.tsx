import { useEffect, useState } from "react";
import styles from "./style.module.css";

const Preloader = () => {
  const [count, setCount] = useState(0);
  const [dot, setDot] = useState(". ");
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount < 3 ? prevCount + 1 : 0)); // Увеличиваем count на 1 или сбрасываем до 0 после 3 точек
    }, 200);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    console.log("qweqweddd");
    setDot(". ".repeat(count));
  }, [count]);

  return <div className={styles.container}>Loading{dot}</div>;
};

export default Preloader;
