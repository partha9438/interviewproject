import styles from "./ClientContainer.module.css";

const ClientContainer = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.iconBlockParent}>
        <div className={styles.iconBlock}>
          <img className={styles.iconSet} alt="" src="/icon-set12.svg" />
        </div>
        <b className={styles.youHaveSuccessfully}>
          You have successfully added Infosys.
        </b>
      </div>
      <div className={styles.buttonParent}>
        <div className={styles.button}>
          <img className={styles.prefixIcon} alt="" src="/prefix-icon6.svg" />
          <b className={styles.button1}>Go to Client Master</b>
          <img className={styles.prefixIcon} alt="" src="/prefix-icon6.svg" />
        </div>
        <div className={styles.button2}>
          <img className={styles.prefixIcon} alt="" src="/prefix-icon7.svg" />
          <b className={styles.button1}>Add More Clients</b>
          <img className={styles.prefixIcon} alt="" src="/prefix-icon7.svg" />
        </div>
      </div>
    </div>
  );
};

export default ClientContainer;
