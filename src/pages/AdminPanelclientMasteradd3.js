import AddClientContainer from "../components/AddClientContainer";
import PaymentSetupContainer from "../components/PaymentSetupContainer";
import CompanyContainer from "../components/CompanyContainer";
import styles from "./AdminPanelclientMasteradd3.module.css";

const AdminPanelclientMasteradd3 = () => {
  return (
    <div className={styles.adminPanelclientMasteradd}>
      <div className={styles.stepsclientMasteraddClientParent}>
        <AddClientContainer />
        <PaymentSetupContainer />
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
              <div className={styles.standardBreadcrumb}>Payment Setup</div>
            </div>
          </div>
        </div>
        <div className={styles.leftCtas}>
          <div className={styles.button}>
            <img className={styles.iconSet} alt="" src="/icon-set97.svg" />
            <b className={styles.button1}>View Statistics</b>
            <img
              className={styles.suffixIcon}
              alt=""
              src="/suffix-icon23.svg"
            />
          </div>
          <div className={styles.button2}>
            <img className={styles.iconSet} alt="" src="/icon-set98.svg" />
            <b className={styles.button1}>Create New Ticket</b>
            <img
              className={styles.suffixIcon}
              alt=""
              src="/suffix-icon24.svg"
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
            <div className={styles.button4}>
              <div className={styles.listItem1}>Complex</div>
              <img
                className={styles.suffixIcon2}
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
            <div className={styles.button4}>
              <div className={styles.listItem1}>Site</div>
              <img
                className={styles.suffixIcon2}
                alt=""
                src="/suffix-icon16.svg"
              />
            </div>
          </div>
          <div className={styles.button8}>
            <img className={styles.iconSet2} alt="" src="/icon-set99.svg" />
          </div>
        </div>
      </div>
      <CompanyContainer
        productId="/icon-set100.svg"
        productSize="/icon-set101.svg"
        productDimensions="/icon-set31.svg"
        productCode="/prefix-icon7.svg"
        productDimensionId="/icon-set102.svg"
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

export default AdminPanelclientMasteradd3;
