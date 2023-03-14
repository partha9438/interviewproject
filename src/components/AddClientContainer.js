import ProfileStepContainer from "./ProfileStepContainer";
import styles from "./AddClientContainer.module.css";

const AddClientContainer = () => {
  return (
    <div className={styles.stepsclientMasteraddClient}>
      <ProfileStepContainer
        profileId="/icon-set33.svg"
        profileName="01"
        profileActionText="Create Profile"
      />
      <div className={styles.step}>
        <div className={styles.step1}>
          <div className={styles.div}>
            <b className={styles.b}>02</b>
          </div>
          <b className={styles.b}>Payment Setup</b>
        </div>
        <div className={styles.indicator} />
      </div>
      <div className={styles.step2}>
        <div className={styles.step1}>
          <div className={styles.div}>
            <b className={styles.b}>03</b>
          </div>
          <b className={styles.b}>Theme Setup</b>
        </div>
        <div className={styles.indicator1} />
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

export default AddClientContainer;
