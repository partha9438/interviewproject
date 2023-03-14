import WelcomeContainer from "../components/WelcomeContainer";
import styles from "./ThemeSetuppreviewPage.module.css";

const ThemeSetuppreviewPage = () => {
  return (
    <div className={styles.themeSetuppreviewPage}>
      <WelcomeContainer />
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <img className={styles.frameItem} alt="" src="/group-2.svg" />
        <div className={styles.title}>
          <div className={styles.solutionForAsset}>
            360° Solution for Asset Management
          </div>
          <div className={styles.loremIpsumDolor}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSetuppreviewPage;
