import { useMemo } from "react";
import styles from "./ModuleSetupContainer.module.css";

const ModuleSetupContainer = ({
  logsheetText,
  dailyLogText,
  activitySummaryText,
  subModuleNameText,
  dateSummaryText,
  propDisplay,
  propDisplay1,
}) => {
  const checkBoxStyle = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  const checkBox1Style = useMemo(() => {
    return {
      display: propDisplay1,
    };
  }, [propDisplay1]);

  return (
    <div className={styles.moduleSetup}>
      <div className={styles.checkBox}>
        <div className={styles.checkBox1} />
        <div className={styles.title}>{logsheetText}</div>
      </div>
      <div className={styles.checkBoxParent}>
        <div className={styles.checkBox2}>
          <div className={styles.checkBox3} />
          <div className={styles.title}>{dailyLogText}</div>
        </div>
        <div className={styles.checkBox2}>
          <div className={styles.checkBox3} />
          <div className={styles.title}>{activitySummaryText}</div>
        </div>
        <div className={styles.checkBox6} style={checkBoxStyle}>
          <div className={styles.checkBox3} />
          <div className={styles.title}>{subModuleNameText}</div>
        </div>
        <div className={styles.checkBox6} style={checkBox1Style}>
          <div className={styles.checkBox3} />
          <div className={styles.title}>{dateSummaryText}</div>
        </div>
        <div className={styles.checkBox6}>
          <div className={styles.checkBox3} />
          <div className={styles.title}>Sub Module Name</div>
        </div>
        <div className={styles.checkBox12}>
          <div className={styles.checkBox3} />
          <div className={styles.title}>Sub Module Name</div>
        </div>
        <div className={styles.checkBox12}>
          <div className={styles.checkBox3} />
          <div className={styles.title}>Sub Module Name</div>
        </div>
        <div className={styles.checkBox12}>
          <div className={styles.checkBox3} />
          <div className={styles.title}>Sub Module Name</div>
        </div>
        <div className={styles.checkBox12}>
          <div className={styles.checkBox3} />
          <div className={styles.title}>Sub Module Name</div>
        </div>
        <div className={styles.checkBox12}>
          <div className={styles.checkBox3} />
          <div className={styles.title}>Sub Module Name</div>
        </div>
      </div>
    </div>
  );
};

export default ModuleSetupContainer;
