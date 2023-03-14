import ClientMasterContainer from "../components/ClientMasterContainer";
import LoginModalContainer from "../components/LoginModalContainer";
import CompanyContainer from "../components/CompanyContainer";
import styles from "./AdminPanelclientMasteradd2.module.css";

const AdminPanelclientMasteradd2 = () => {
  return (
    <div className={styles.adminPanelclientMasteradd}>
      <div className={styles.stepsclientMasteraddClientParent}>
        <ClientMasterContainer />
        <div className={styles.frameParent}>
          <div className={styles.themeSetupParent}>
            <b className={styles.themeSetup}>Theme Setup</b>
            <div className={styles.addInformationAbout}>
              Add information about the client to give them a personalized
              experience.
            </div>
          </div>
          <div className={styles.textField}>
            <div className={styles.frame}>
              <div className={styles.inputField}>
                <img className={styles.iconSet} alt="" src="/icon-set61.svg" />
                <div className={styles.input}>#153AC7</div>
                <div className={styles.input1}>Input</div>
                <img
                  className={styles.iconSetinfo}
                  alt=""
                  src="/icon-setinfo.svg"
                />
              </div>
              <div className={styles.typeInputDescription}>Add Hex Value.</div>
              <div className={styles.iconSetParent}>
                <img className={styles.iconSet1} alt="" src="/icon-set62.svg" />
                <div className={styles.errorMessageHere}>
                  Error Message here
                </div>
              </div>
            </div>
            <div className={styles.label}>
              <div className={styles.standardBreadcrumb}>Primary Color</div>
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.loginThemeParent}>
              <b className={styles.loginTheme}>Login Theme</b>
              <div className={styles.selectTheLook}>
                Select the look and feel of the login page.
              </div>
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.radioButtonParent}>
                <div className={styles.radioButton}>
                  <div className={styles.radioBtn}>
                    <div className={styles.radioBtnChild} />
                  </div>
                  <div className={styles.title}>Use Color</div>
                </div>
                <div className={styles.textFieldWrapper}>
                  <div className={styles.textField1}>
                    <div className={styles.inputField}>
                      <img
                        className={styles.iconSet}
                        alt=""
                        src="/icon-set63.svg"
                      />
                      <div className={styles.input}>#F8F9FD</div>
                      <div className={styles.input1}>Input</div>
                      <img
                        className={styles.iconSetinfo}
                        alt=""
                        src="/icon-setinfo1.svg"
                      />
                    </div>
                    <div className={styles.typeInputDescription1}>
                      Add Hex Value.
                    </div>
                    <div className={styles.iconSetParent}>
                      <img
                        className={styles.iconSet1}
                        alt=""
                        src="/icon-set64.svg"
                      />
                      <div className={styles.errorMessageHere}>
                        Error Message here
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.whereShouldBeTheLoginModaParent}>
              <b className={styles.whereShouldBe}>
                Where Should be the login modal?
              </b>
              <div className={styles.frameDiv}>
                <LoginModalContainer directionText="Left" />
                <LoginModalContainer directionText="Right" propLeft="78px" />
                <div className={styles.frameParent1}>
                  <div className={styles.rectangleParent}>
                    <div className={styles.frameChild} />
                    <div className={styles.frameItem} />
                  </div>
                  <div className={styles.radioButton1}>
                    <div className={styles.radioBtn}>
                      <div className={styles.radioBtnChild} />
                    </div>
                    <div className={styles.title}>Center</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.loginPagePreviewParent}>
            <b className={styles.loginPagePreview}>Login Page Preview</b>
            <div className={styles.preview}>
              <img className={styles.login1Icon} alt="" src="/login-1@2x.png" />
            </div>
          </div>
          <div className={styles.buttonParent}>
            <div className={styles.button}>
              <img
                className={styles.prefixIcon}
                alt=""
                src="/prefix-icon7.svg"
              />
              <b className={styles.button1}>{`Save & Continue`}</b>
              <img
                className={styles.suffixIcon}
                alt=""
                src="/suffix-icon18.svg"
              />
            </div>
            <div className={styles.button2}>
              <img className={styles.suffixIcon} alt="" src="/icon-set53.svg" />
              <b className={styles.button1}>Reset</b>
              <img
                className={styles.prefixIcon}
                alt=""
                src="/suffix-icon17.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.header}>
        <div className={styles.right}>
          <div className={styles.pageTitle}>Add Client</div>
          <div className={styles.breadcrumbs}>
            <div className={styles.breadcrumb}>
              <div className={styles.standardBreadcrumb}>Client Master</div>
            </div>
            <div className={styles.breadcrumb1}>
              <div className={styles.standardBreadcrumb}>/</div>
              <div className={styles.standardBreadcrumb}>Add Client</div>
            </div>
            <div className={styles.currentPage}>
              <div className={styles.standardBreadcrumb}>/</div>
              <div className={styles.standardBreadcrumb}>Theme Setup</div>
            </div>
          </div>
        </div>
        <div className={styles.leftCtas}>
          <div className={styles.button4}>
            <img className={styles.suffixIcon} alt="" src="/icon-set65.svg" />
            <b className={styles.button1}>View Statistics</b>
            <img
              className={styles.prefixIcon}
              alt=""
              src="/suffix-icon21.svg"
            />
          </div>
          <div className={styles.button6}>
            <img className={styles.suffixIcon} alt="" src="/icon-set66.svg" />
            <b className={styles.button1}>Create New Ticket</b>
            <img
              className={styles.prefixIcon}
              alt=""
              src="/suffix-icon22.svg"
            />
          </div>
        </div>
        <div className={styles.leftSiteComplex}>
          <div className={styles.dropDownButton}>
            <div className={styles.menu}>
              <div className={styles.list}>
                <div className={styles.listItem}>
                  <div className={styles.radioButton2}>
                    <div className={styles.radioBtn2} />
                  </div>
                  <div className={styles.input}>Recently Added</div>
                </div>
                <div className={styles.listItem}>
                  <div className={styles.radioButton2}>
                    <div className={styles.radioBtn2} />
                  </div>
                  <div className={styles.input}>No Sites</div>
                </div>
                <div className={styles.listItem}>
                  <div className={styles.radioButton2}>
                    <div className={styles.radioBtn2} />
                  </div>
                  <div className={styles.input}>No Tenant Group</div>
                </div>
                <div className={styles.listItem}>
                  <div className={styles.radioButton2}>
                    <div className={styles.radioBtn2} />
                  </div>
                  <div className={styles.input}>No Tenant</div>
                </div>
                <div className={styles.listItem8}>
                  <div className={styles.radioButton2}>
                    <div className={styles.radioBtn2} />
                  </div>
                  <div className={styles.input}>List Item</div>
                </div>
              </div>
              <div className={styles.scroll}>
                <div className={styles.scrollBar} />
              </div>
            </div>
            <div className={styles.button8}>
              <div className={styles.input}>Complex</div>
              <img
                className={styles.suffixIcon4}
                alt=""
                src="/suffix-icon16.svg"
              />
            </div>
          </div>
          <div className={styles.dropDownButton1}>
            <div className={styles.menu}>
              <div className={styles.list}>
                <div className={styles.listItem}>
                  <div className={styles.radioButton2}>
                    <div className={styles.radioBtn2} />
                  </div>
                  <div className={styles.input}>Client</div>
                </div>
                <div className={styles.listItem}>
                  <div className={styles.radioButton2}>
                    <div className={styles.radioBtn2} />
                  </div>
                  <div className={styles.input}>Client</div>
                </div>
                <div className={styles.listItem}>
                  <div className={styles.radioButton2}>
                    <div className={styles.radioBtn2} />
                  </div>
                  <div className={styles.input}>Client</div>
                </div>
                <div className={styles.listItem}>
                  <div className={styles.radioButton2}>
                    <div className={styles.radioBtn2} />
                  </div>
                  <div className={styles.input}>Client</div>
                </div>
                <div className={styles.listItem8}>
                  <div className={styles.radioButton2}>
                    <div className={styles.radioBtn2} />
                  </div>
                  <div className={styles.input}>List Item</div>
                </div>
              </div>
              <div className={styles.scroll}>
                <div className={styles.scrollBar} />
              </div>
            </div>
            <div className={styles.button8}>
              <div className={styles.input}>Site</div>
              <img
                className={styles.suffixIcon4}
                alt=""
                src="/suffix-icon16.svg"
              />
            </div>
          </div>
          <div className={styles.button12}>
            <img className={styles.iconSetinfo} alt="" src="/icon-set67.svg" />
          </div>
        </div>
      </div>
      <CompanyContainer
        productId="/icon-set68.svg"
        productSize="/icon-set69.svg"
        productDimensions="/icon-set31.svg"
        productCode="/prefix-icon7.svg"
        productDimensionId="/icon-set70.svg"
        propBackgroundColor="unset"
        propBoxShadow="unset"
        propColor="#686687"
        propBackgroundColor1="#153ac7"
        propBoxShadow1="0px 4px 16px rgba(3, 0, 55, 0.08)"
        propColor1="#fff"
      />
    </div>
  );
};

export default AdminPanelclientMasteradd2;
