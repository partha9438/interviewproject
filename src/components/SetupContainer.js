import ProfileStepContainer from "./ProfileStepContainer";
import styles from "./SetupContainer.module.css";

const SetupContainer = () => {
  return (
    <div className={styles.stepsclientMasteraddClient}>
      <ProfileStepContainer
        profileId="/icon-set33.svg"
        profileName="01"
        profileActionText="Create Profile"
      />
      <ProfileStepContainer
        profileId="/icon-set34.svg"
        profileName="03"
        profileActionText="Payment Setup"
      />
      <ProfileStepContainer
        profileId="/icon-set35.svg"
        profileName="04"
        profileActionText="Theme Setup"
      />
      <div className={styles.step}>
        <div className={styles.step1}>
          <div className={styles.div}>
            <b className={styles.b}>04</b>
          </div>
          <b className={styles.b}>modules Setup</b>
        </div>
        <div className={styles.indicator} />
      </div>
    </div>
  );
};

export default SetupContainer;
