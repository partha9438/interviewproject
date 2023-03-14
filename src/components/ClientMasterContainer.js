import ProfileStepContainer from "./ProfileStepContainer";
import styles from "./ClientMasterContainer.module.css";

const ClientMasterContainer = () => {
  return (
    <div className={styles.stepsclientMasteraddClient}>
      <ProfileStepContainer
        profileId="/icon-set33.svg"
        profileName="01"
        profileActionText="Create Profile"
      />
      <ProfileStepContainer
        profileId="/icon-set60.svg"
        profileName="03"
        profileActionText="Payment Setup"
      />
      <div className={styles.step}>
        <div className={styles.step1}>
          <div className={styles.div}>
            <b className={styles.b}>03</b>
          </div>
          <b className={styles.b}>Theme Setup</b>
        </div>
        <div className={styles.indicator} />
      </div>
      <div className={styles.step2}>
        <div className={styles.step1}>
          <div className={styles.div}>
            <b className={styles.b}>04</b>
          </div>
          <b className={styles.b}>modules Setup</b>
        </div>
        <div className={styles.indicator1} />
      </div>
    </div>
  );
};

export default ClientMasterContainer;
