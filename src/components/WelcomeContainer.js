import styles from "./WelcomeContainer.module.css";

const WelcomeContainer = () => {
  return (
    <div className={styles.image1Parent}>
      <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
      <div className={styles.frameParent}>
        <div className={styles.welcomeParent}>
          <div className={styles.welcome}>Welcome</div>
          <div className={styles.enterYourUsername}>
            Enter your Username and Passoword.
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.textFieldParent}>
            <div className={styles.textField}>
              <div className={styles.inputField}>
                <img className={styles.iconSet} alt="" src="/icon-set.svg" />
                <div className={styles.label}>Username</div>
                <div className={styles.input}>Input</div>
                <img className={styles.iconSet1} alt="" src="/icon-set1.svg" />
              </div>
              <div className={styles.typeInputDescription}>
                Type input description here...
              </div>
              <div className={styles.error}>
                <img className={styles.iconSet2} alt="" src="/icon-set2.svg" />
                <div className={styles.errorMessageHere}>
                  Error Message here
                </div>
              </div>
            </div>
            <div className={styles.textField}>
              <div className={styles.inputField}>
                <img className={styles.iconSet} alt="" src="/icon-set3.svg" />
                <div className={styles.label}>Password</div>
                <div className={styles.input}>Input</div>
                <img className={styles.iconSet} alt="" src="/icon-set4.svg" />
              </div>
              <div className={styles.typeInputDescription}>
                Type input description here...
              </div>
              <div className={styles.error}>
                <img className={styles.iconSet2} alt="" src="/icon-set5.svg" />
                <div className={styles.errorMessageHere}>
                  Error Message here
                </div>
              </div>
            </div>
          </div>
          <div className={styles.buttonParent}>
            <div className={styles.button}>
              <img
                className={styles.prefixIcon}
                alt=""
                src="/prefix-icon.svg"
              />
              <b className={styles.button1}>Login</b>
              <img
                className={styles.prefixIcon}
                alt=""
                src="/suffix-icon.svg"
              />
            </div>
            <div className={styles.button2}>
              <img className={styles.iconSet1} alt="" src="/prefix-icon1.svg" />
              <b className={styles.button1}>Forgot Password?</b>
              <img className={styles.iconSet1} alt="" src="/suffix-icon1.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.welcomeParent}>
          <div className={styles.welcome}>Welcome</div>
          <div className={styles.enterYourUsername1}>
            Enter your Username and Passoword.
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.textFieldParent}>
            <div className={styles.textField}>
              <div className={styles.inputField2}>
                <img className={styles.iconSet6} alt="" src="/icon-set6.svg" />
                <div className={styles.label}>Username</div>
                <div className={styles.input2}>Input</div>
                <img className={styles.iconSet7} alt="" src="/icon-set7.svg" />
              </div>
              <div className={styles.typeInputDescription}>
                Type input description here...
              </div>
              <div className={styles.error}>
                <img className={styles.iconSet2} alt="" src="/icon-set8.svg" />
                <div className={styles.errorMessageHere}>
                  Error Message here
                </div>
              </div>
            </div>
            <div className={styles.textField}>
              <div className={styles.inputField2}>
                <img className={styles.iconSet6} alt="" src="/icon-set9.svg" />
                <div className={styles.label}>Password</div>
                <div className={styles.input2}>Input</div>
                <img className={styles.iconSet6} alt="" src="/icon-set10.svg" />
              </div>
              <div className={styles.typeInputDescription}>
                Type input description here...
              </div>
              <div className={styles.error}>
                <img className={styles.iconSet2} alt="" src="/icon-set11.svg" />
                <div className={styles.errorMessageHere}>
                  Error Message here
                </div>
              </div>
            </div>
          </div>
          <div className={styles.buttonParent}>
            <div className={styles.button4}>
              <img
                className={styles.prefixIcon}
                alt=""
                src="/prefix-icon2.svg"
              />
              <b className={styles.button1}>Login</b>
              <img
                className={styles.prefixIcon}
                alt=""
                src="/suffix-icon2.svg"
              />
            </div>
            <div className={styles.button2}>
              <img className={styles.iconSet1} alt="" src="/prefix-icon3.svg" />
              <b className={styles.button1}>Forgot Password?</b>
              <img className={styles.iconSet1} alt="" src="/suffix-icon3.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameParent1}>
        <div className={styles.frameParent2}>
          <div className={styles.termsOfUseWrapper}>
            <div className={styles.termsOfUse}>Terms of Use</div>
          </div>
          <div className={styles.termsOfUseWrapper}>
            <div className={styles.termsOfUse}>Privacy Policy</div>
          </div>
        </div>
        <div className={styles.punctualiti2022AllRightsRWrapper}>
          <div className={styles.punctualiti2022All}>
            © Punctualiti 2022. All rights reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeContainer;
