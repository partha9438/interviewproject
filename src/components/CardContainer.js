import styles from "./CardContainer.module.css";

const CardContainer = ({
  clientLogoUrl,
  clientName,
  companyName,
  clientCount,
  clientId,
  addClientName,
  clientIds,
  clientIdsText,
  clientIdsText2,
}) => {
  return (
    <div className={styles.addCard}>
      <div className={styles.avatarsParent}>
        <div className={styles.avatars}>
          <img className={styles.userIcon} alt="" src={clientLogoUrl} />
          <img className={styles.avatarsChild} alt="" src={clientName} />
        </div>
        <div className={styles.issFacilityServicesParent}>
          <b className={styles.issFacilityServices}>{companyName}</b>
          <div className={styles.clients}>{clientCount}</div>
        </div>
      </div>
      <div className={styles.buttonParent}>
        <div className={styles.button}>
          <img className={styles.iconSet} alt="" src={clientId} />
          <b className={styles.button1}>{addClientName}</b>
          <img className={styles.iconSet} alt="" src={clientIds} />
        </div>
        <div className={styles.button2}>
          <img className={styles.iconSet} alt="" src={clientIdsText} />
          <b className={styles.button1}>View All</b>
          <img className={styles.iconSet} alt="" src={clientIdsText2} />
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
