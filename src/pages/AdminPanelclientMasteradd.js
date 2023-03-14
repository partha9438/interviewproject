import ClientContainer from "../components/ClientContainer";
import ISSFacilityServicesContainer from "../components/ISSFacilityServicesContainer";
import CompanyContainer from "../components/CompanyContainer";
import styles from "./AdminPanelclientMasteradd.module.css";

const AdminPanelclientMasteradd = () => {
  return (
    <div className={styles.adminPanelclientMasteradd}>
      <div className={styles.alertsbanners}>
        <b className={styles.title}>
          You can create a form template and apply it next time you create a new
          client.
        </b>
        <div className={styles.button}>
          <img className={styles.prefixIcon} alt="" src="/prefix-icon4.svg" />
          <b className={styles.button1}>Create Template</b>
          <img className={styles.prefixIcon} alt="" src="/prefix-icon4.svg" />
        </div>
        <div className={styles.button2}>
          <img className={styles.iconSet} alt="" src="/prefix-icon5.svg" />
        </div>
      </div>
      <div className={styles.alertsbanners1}>
        <b className={styles.title}>
          Would you like to create site setup form tamplate?
        </b>
        <div className={styles.button}>
          <img className={styles.prefixIcon} alt="" src="/prefix-icon4.svg" />
          <b className={styles.button1}>Create Template</b>
          <img className={styles.prefixIcon} alt="" src="/prefix-icon4.svg" />
        </div>
        <div className={styles.button2}>
          <img className={styles.iconSet} alt="" src="/prefix-icon5.svg" />
        </div>
      </div>
      <ClientContainer />
      <ISSFacilityServicesContainer />
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
              <div className={styles.standardBreadcrumb}>Success</div>
            </div>
          </div>
        </div>
        <div className={styles.leftCtas}>
          <div className={styles.button6}>
            <img className={styles.iconSet} alt="" src="/icon-set25.svg" />
            <b className={styles.button7}>View Statistics</b>
            <img
              className={styles.suffixIcon2}
              alt=""
              src="/suffix-icon14.svg"
            />
          </div>
          <div className={styles.button8}>
            <img className={styles.iconSet} alt="" src="/icon-set26.svg" />
            <b className={styles.button7}>Create New Ticket</b>
            <img
              className={styles.suffixIcon2}
              alt=""
              src="/suffix-icon15.svg"
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
            <div className={styles.button10}>
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
            <div className={styles.button10}>
              <div className={styles.listItem1}>Site</div>
              <img
                className={styles.suffixIcon4}
                alt=""
                src="/suffix-icon16.svg"
              />
            </div>
          </div>
          <div className={styles.button14}>
            <img className={styles.iconSet2} alt="" src="/icon-set27.svg" />
          </div>
        </div>
      </div>
      <CompanyContainer
        productId="/icon-set29.svg"
        productSize="/icon-set30.svg"
        productDimensions="/icon-set31.svg"
        productCode="/prefix-icon7.svg"
        productDimensionId="/icon-set32.svg"
      />
    </div>
  );
};

export default AdminPanelclientMasteradd;
