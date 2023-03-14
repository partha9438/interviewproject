import { useMemo } from "react";
import styles from "./LoginModalContainer.module.css";

const LoginModalContainer = ({ directionText, propLeft }) => {
  const rectangleDivStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div className={styles.frameParent}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameItem} style={rectangleDivStyle} />
      </div>
      <div className={styles.radioButton}>
        <div className={styles.radioBtn} />
        <div className={styles.title}>{directionText}</div>
      </div>
    </div>
  );
};

export default LoginModalContainer;
