import ClientInfoContainer from "../components/ClientInfoContainer";
import CompanyContainer from "../components/CompanyContainer";
import styles from "./AdminPanelclientMasteradd4.module.css";

const AdminPanelclientMasteradd4 = () => {
  return (
    <div className={styles.adminPanelclientMasteradd}>
      <div className={styles.stepsclientMasteraddClientParent}>
        <div className={styles.stepsclientMasteraddClient}>
          <div className={styles.step}>
            <div className={styles.step1}>
              <div className={styles.div}>
                <b className={styles.b}>01</b>
              </div>
              <b className={styles.b}>Create Profile</b>
            </div>
            <div className={styles.indicator} />
          </div>
          <div className={styles.step2}>
            <div className={styles.step1}>
              <div className={styles.div}>
                <b className={styles.b}>02</b>
              </div>
              <b className={styles.b}>Payment Setup</b>
            </div>
            <div className={styles.indicator1} />
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
        <div className={styles.frameParent}>
          <div className={styles.createClientProfileParent}>
            <b className={styles.createClientProfile}>Create Client Profile</b>
            <div className={styles.addSomeBasic}>
              Add some basic information related to the client.
            </div>
          </div>
          <ClientInfoContainer />
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
              <img className={styles.suffixIcon} alt="" src="/icon-set96.svg" />
              <b className={styles.button1}>Reset</b>
              <img
                className={styles.prefixIcon}
                alt=""
                src="/suffix-icon9.svg"
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
              <div className={styles.standardBreadcrumb}>Create Profile</div>
            </div>
          </div>
        </div>
        <div className={styles.leftCtas}>
          <div className={styles.button4}>
            <img className={styles.suffixIcon} alt="" src="/icon-set150.svg" />
            <b className={styles.button1}>View Statistics</b>
            <img
              className={styles.prefixIcon}
              alt=""
              src="/suffix-icon29.svg"
            />
          </div>
          <div className={styles.button6}>
            <img className={styles.suffixIcon} alt="" src="/icon-set151.svg" />
            <b className={styles.button1}>Create New Ticket</b>
            <img
              className={styles.prefixIcon}
              alt=""
              src="/suffix-icon30.svg"
            />
          </div>
        </div>
        <div className={styles.leftSiteComplex}>
          <div className={styles.dropDownButton}>
            <div className={styles.menu}>
              <div className={styles.list}>
                <div className={styles.listItem}>
                  <div className={styles.radioButton}>
                    <div className={styles.radioBtn} />
                  </div>
                  <div className={styles.listItem1}>Recently Added</div>
                </div>
                <div className={styles.listItem}>
                  <div className={styles.radioButton}>
                    <div className={styles.radioBtn} />
                  </div>
                  <div className={styles.listItem1}>No Sites</div>
                </div>
                <div className={styles.listItem}>
                  <div className={styles.radioButton}>
                    <div className={styles.radioBtn} />
                  </div>
                  <div className={styles.listItem1}>No Tenant Group</div>
                </div>
                <div className={styles.listItem}>
                  <div className={styles.radioButton}>
                    <div className={styles.radioBtn} />
                  </div>
                  <div className={styles.listItem1}>No Tenant</div>
                </div>
                <div className={styles.listItem8}>
                  <div className={styles.radioButton}>
                    <div className={styles.radioBtn} />
                  </div>
                  <div className={styles.listItem1}>List Item</div>
                </div>
              </div>
              <div className={styles.scroll}>
                <div className={styles.scrollBar} />
              </div>
            </div>
            <div className={styles.button8}>
              <div className={styles.listItem1}>Complex</div>
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
                  <div className={styles.radioButton}>
                    <div className={styles.radioBtn} />
                  </div>
                  <div className={styles.listItem1}>Client</div>
                </div>
                <div className={styles.listItem}>
                  <div className={styles.radioButton}>
                    <div className={styles.radioBtn} />
                  </div>
                  <div className={styles.listItem1}>Client</div>
                </div>
                <div className={styles.listItem}>
                  <div className={styles.radioButton}>
                    <div className={styles.radioBtn} />
                  </div>
                  <div className={styles.listItem1}>Client</div>
                </div>
                <div className={styles.listItem}>
                  <div className={styles.radioButton}>
                    <div className={styles.radioBtn} />
                  </div>
                  <div className={styles.listItem1}>Client</div>
                </div>
                <div className={styles.listItem8}>
                  <div className={styles.radioButton}>
                    <div className={styles.radioBtn} />
                  </div>
                  <div className={styles.listItem1}>List Item</div>
                </div>
              </div>
              <div className={styles.scroll}>
                <div className={styles.scrollBar} />
              </div>
            </div>
            <div className={styles.button8}>
              <div className={styles.listItem1}>Site</div>
              <img
                className={styles.suffixIcon4}
                alt=""
                src="/suffix-icon16.svg"
              />
            </div>
          </div>
          <div className={styles.button12}>
            <img className={styles.iconSet3} alt="" src="/icon-set152.svg" />
          </div>
        </div>
      </div>
      <CompanyContainer
        productId="/icon-set153.svg"
        productSize="/icon-set154.svg"
        productDimensions="/icon-set31.svg"
        productCode="/prefix-icon7.svg"
        productDimensionId="/icon-set155.svg"
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

export default AdminPanelclientMasteradd4;
