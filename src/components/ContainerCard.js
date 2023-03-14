import styles from "./ContainerCard.module.css";

const ContainerCard = ({
  tenantGroupId,
  tenantId,
  tenantGroupName,
  tenantGroupImageId,
  addTenantGroupText,
  tenantImageId,
  tenantGroupImageUrl,
  tenantGroupImageUrl2,
}) => {
  return (
    <div className={styles.addCard}>
      <div className={styles.iconBlockParent}>
        <div className={styles.iconBlock}>
          <img className={styles.iconSet} alt="" src={tenantGroupId} />
        </div>
        <div className={styles.avatars}>
          <div className={styles.user} />
          <img className={styles.avatarsChild} alt="" src={tenantId} />
        </div>
        <div className={styles.clientsParent}>
          <b className={styles.clients}>{tenantGroupName}</b>
          <div className={styles.div}>--</div>
        </div>
      </div>
      <div className={styles.buttonParent}>
        <div className={styles.button}>
          <img className={styles.suffixIcon} alt="" src={tenantGroupImageId} />
          <b className={styles.button1}>{addTenantGroupText}</b>
          <img className={styles.suffixIcon} alt="" src={tenantImageId} />
        </div>
        <div className={styles.button2}>
          <img className={styles.suffixIcon} alt="" src={tenantGroupImageUrl} />
          <b className={styles.button1}>{`View All `}</b>
          <img
            className={styles.suffixIcon}
            alt=""
            src={tenantGroupImageUrl2}
          />
        </div>
      </div>
    </div>
  );
};

export default ContainerCard;
