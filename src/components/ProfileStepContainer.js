import styles from "./ProfileStepContainer.module.css";

const ProfileStepContainer = ({
  profileId,
  profileName,
  profileActionText,
}) => {
  return (
    <div className={styles.step}>
      <div className={styles.step1}>
        <div className={styles.div}>
          <img className={styles.iconSet} alt="" src={profileId} />
          <b className={styles.b}>{profileName}</b>
        </div>
        <b className={styles.heading}>{profileActionText}</b>
      </div>
      <div className={styles.indicator} />
    </div>
  );
};

export default ProfileStepContainer;
