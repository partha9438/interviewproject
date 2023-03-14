import ClientsContainer from "../components/ClientsContainer";
import Paginator from "../components/Paginator";
import CompanyContainer from "../components/CompanyContainer";
import styles from "./AdminPanelclientMasterclie.module.css";

const AdminPanelclientMasterclie = () => {
  return (
    <div className={styles.adminPanelclientMasterclie}>
      <div className={styles.tabel}>
        <ClientsContainer />
        <div className={styles.tableheaderclientsList}>
          <div className={styles.hr} />
          <div className={styles.header}>
            <div className={styles.companyName}>Company Name</div>
            <div className={styles.emailAddressWrapper}>
              <div className={styles.companyName}>Email Address</div>
            </div>
            <div className={styles.phoneNoWrapper}>
              <div className={styles.companyName}>Phone No</div>
            </div>
            <div className={styles.contactPersonWrapper}>
              <div className={styles.companyName}>Contact Person</div>
            </div>
            <div className={styles.transactionStatusWrapper}>
              <div className={styles.companyName}>Transaction Status</div>
            </div>
            <div className={styles.contactPersonWrapper}>
              <div className={styles.companyName}>Facilitator</div>
            </div>
            <div className={styles.sitesWrapper}>
              <div className={styles.sites}>Sites</div>
            </div>
            <div className={styles.sitesWrapper}>
              <div className={styles.companyName}>Tenants</div>
            </div>
            <div className={styles.tenantGroupsWrapper}>
              <div className={styles.companyName}>Tenant Groups</div>
            </div>
            <div className={styles.actionsWrapper}>
              <div className={styles.sites}>Actions</div>
            </div>
          </div>
          <div className={styles.hr} />
        </div>
        <div className={styles.tablerowclientsList}>
          <div className={styles.rowSample}>
            <div className={styles.avatarsParent}>
              <div className={styles.avatars}>
                <img className={styles.userIcon} alt="" src="/user2@2x.png" />
                <img
                  className={styles.avatarsChild}
                  alt=""
                  src="/ellipse-15.svg"
                />
              </div>
              <div className={styles.phoneNumber}>Infosys</div>
            </div>
            <div className={styles.emailAddressWrapper}>
              <div className={styles.phoneNumber}>management@infosys.com</div>
            </div>
            <div className={styles.phoneNoWrapper}>
              <div className={styles.phoneNumber}>+91 9563214587</div>
            </div>
            <div className={styles.contactPersonWrapper}>
              <div className={styles.phoneNumber}>{`Vijayent Roy `}</div>
            </div>
            <div className={styles.transactionStatusContainer}>
              <div className={styles.transactionStatus1}>
                <div className={styles.pending}>Pending</div>
              </div>
            </div>
            <div className={styles.contactPersonWrapper}>
              <div className={styles.phoneNumber}>--</div>
            </div>
            <div className={styles.sitesWrapper}>
              <div className={styles.phoneNumber}>12</div>
            </div>
            <div className={styles.sitesWrapper}>
              <div className={styles.phoneNumber}>--</div>
            </div>
            <div className={styles.tenantGroupsWrapper}>
              <div className={styles.phoneNumber}>--</div>
            </div>
            <div className={styles.buttonWrapper}>
              <div className={styles.button}>
                <img className={styles.iconSet} alt="" src="/icon-set104.svg" />
              </div>
            </div>
          </div>
          <div className={styles.hr2} />
        </div>
        <div className={styles.tablerowclientsList}>
          <div className={styles.rowSample}>
            <div className={styles.avatarsParent}>
              <div className={styles.avatars}>
                <img className={styles.userIcon} alt="" src="/user3@2x.png" />
                <img
                  className={styles.avatarsChild}
                  alt=""
                  src="/ellipse-15.svg"
                />
              </div>
              <div className={styles.phoneNumber}>Wipro</div>
            </div>
            <div className={styles.emailAddressWrapper}>
              <div className={styles.phoneNumber}>management@wipro.com</div>
            </div>
            <div className={styles.phoneNoWrapper}>
              <div className={styles.phoneNumber}>+91 9834687423</div>
            </div>
            <div className={styles.contactPersonWrapper}>
              <div className={styles.phoneNumber}>{`Kalpit Soni `}</div>
            </div>
            <div className={styles.transactionStatusFrame}>
              <div className={styles.transactionStatus1}>
                <div className={styles.pending}>Paid</div>
              </div>
            </div>
            <div className={styles.contactPersonWrapper}>
              <div className={styles.phoneNumber}>--</div>
            </div>
            <div className={styles.sitesWrapper}>
              <div className={styles.phoneNumber}>8</div>
            </div>
            <div className={styles.sitesWrapper}>
              <div className={styles.phoneNumber}>--</div>
            </div>
            <div className={styles.tenantGroupsWrapper}>
              <div className={styles.phoneNumber}>--</div>
            </div>
            <div className={styles.buttonWrapper}>
              <div className={styles.button}>
                <img className={styles.iconSet} alt="" src="/icon-set104.svg" />
              </div>
            </div>
          </div>
          <div className={styles.hr2} />
        </div>
        <div className={styles.tablerowclientsList}>
          <div className={styles.rowSample}>
            <div className={styles.avatarsParent}>
              <div className={styles.avatars}>
                <img className={styles.userIcon} alt="" src="/user4@2x.png" />
                <img
                  className={styles.avatarsChild}
                  alt=""
                  src="/ellipse-15.svg"
                />
              </div>
              <div className={styles.phoneNumber}>{`Accenture `}</div>
            </div>
            <div className={styles.emailAddressWrapper}>
              <div className={styles.phoneNumber}>
                management@accenture .com
              </div>
            </div>
            <div className={styles.phoneNoWrapper}>
              <div className={styles.phoneNumber}>+91 8732654789</div>
            </div>
            <div className={styles.contactPersonWrapper}>
              <div className={styles.phoneNumber}>Drishti Sane</div>
            </div>
            <div className={styles.transactionStatusFrame}>
              <div className={styles.transactionStatus1}>
                <div className={styles.pending}>Paid</div>
              </div>
            </div>
            <div className={styles.contactPersonWrapper}>
              <div className={styles.phoneNumber}>--</div>
            </div>
            <div className={styles.sitesWrapper}>
              <div className={styles.phoneNumber}>4</div>
            </div>
            <div className={styles.sitesWrapper}>
              <div className={styles.phoneNumber}>--</div>
            </div>
            <div className={styles.tenantGroupsWrapper}>
              <div className={styles.phoneNumber}>--</div>
            </div>
            <div className={styles.buttonWrapper}>
              <div className={styles.button}>
                <img className={styles.iconSet} alt="" src="/icon-set104.svg" />
              </div>
            </div>
          </div>
          <div className={styles.hr2} />
        </div>
        <div className={styles.tablerowclientsList}>
          <div className={styles.rowSample}>
            <div className={styles.avatarsParent}>
              <div className={styles.avatars}>
                <img className={styles.userIcon} alt="" src="/user5@2x.png" />
                <img
                  className={styles.avatarsChild}
                  alt=""
                  src="/ellipse-15.svg"
                />
              </div>
              <div className={styles.phoneNumber}>{`Capgemini `}</div>
            </div>
            <div className={styles.emailAddressWrapper}>
              <div className={styles.phoneNumber}>
                management@capgemini .com
              </div>
            </div>
            <div className={styles.phoneNoWrapper}>
              <div className={styles.phoneNumber}>+91 8432657995</div>
            </div>
            <div className={styles.contactPersonWrapper}>
              <div className={styles.phoneNumber}>{`Aisha Keer `}</div>
            </div>
            <div className={styles.transactionStatusFrame}>
              <div className={styles.transactionStatus1}>
                <div className={styles.pending}>Paid</div>
              </div>
            </div>
            <div className={styles.contactPersonWrapper}>
              <div className={styles.phoneNumber}>--</div>
            </div>
            <div className={styles.sitesWrapper}>
              <div className={styles.phoneNumber}>6</div>
            </div>
            <div className={styles.sitesWrapper}>
              <div className={styles.phoneNumber}>--</div>
            </div>
            <div className={styles.tenantGroupsWrapper}>
              <div className={styles.phoneNumber}>--</div>
            </div>
            <div className={styles.buttonWrapper}>
              <div className={styles.button}>
                <img className={styles.iconSet} alt="" src="/icon-set104.svg" />
              </div>
            </div>
          </div>
          <div className={styles.hr2} />
        </div>
        <div className={styles.tablerowclientsList}>
          <div className={styles.rowSample}>
            <div className={styles.avatarsParent2}>
              <div className={styles.avatars}>
                <div className={styles.bg} />
                <img
                  className={styles.avatarsChild}
                  alt=""
                  src="/ellipse-15.svg"
                />
                <b className={styles.a}>L</b>
              </div>
              <div className={styles.companyName5}>Lodha</div>
            </div>
            <div className={styles.emailAddressWrapper}>
              <div className={styles.phoneNumber}>management@lodha.com</div>
            </div>
            <div className={styles.phoneNoWrapper}>
              <div className={styles.phoneNumber}>+91 9642357894</div>
            </div>
            <div className={styles.contactPersonWrapper}>
              <div className={styles.phoneNumber}>Kanika Khare</div>
            </div>
            <div className={styles.transactionStatusContainer}>
              <div className={styles.transactionStatus1}>
                <div className={styles.pending}>Pending</div>
              </div>
            </div>
            <div className={styles.contactPersonWrapper}>
              <div className={styles.phoneNumber}>--</div>
            </div>
            <div className={styles.sitesWrapper}>
              <div className={styles.phoneNumber}>24</div>
            </div>
            <div className={styles.sitesWrapper}>
              <div className={styles.phoneNumber}>16</div>
            </div>
            <div className={styles.tenantGroupsWrapper}>
              <div className={styles.phoneNumber}>8</div>
            </div>
            <div className={styles.buttonWrapper}>
              <div className={styles.button}>
                <img className={styles.iconSet} alt="" src="/icon-set104.svg" />
              </div>
            </div>
          </div>
          <div className={styles.hr2} />
        </div>
        <div className={styles.tablerowclientsList}>
          <div className={styles.rowSample}>
            <div className={styles.avatarsParent}>
              <div className={styles.avatars}>
                <img className={styles.userIcon} alt="" src="/user6@2x.png" />
                <img
                  className={styles.avatarsChild}
                  alt=""
                  src="/ellipse-15.svg"
                />
              </div>
              <div className={styles.phoneNumber}>
                Tata Consultancy Services
              </div>
            </div>
            <div className={styles.emailAddressWrapper}>
              <div className={styles.phoneNumber}>management@tcs.com</div>
            </div>
            <div className={styles.phoneNoWrapper}>
              <div className={styles.phoneNumber}>+91 9632457468</div>
            </div>
            <div className={styles.contactPersonWrapper}>
              <div className={styles.phoneNumber}>{`Prabhat Rao `}</div>
            </div>
            <div className={styles.transactionStatusContainer}>
              <div className={styles.transactionStatus1}>
                <div className={styles.pending}>Pending</div>
              </div>
            </div>
            <div className={styles.contactPersonWrapper}>
              <div className={styles.phoneNumber}>--</div>
            </div>
            <div className={styles.sitesWrapper}>
              <div className={styles.phoneNumber}>10</div>
            </div>
            <div className={styles.sitesWrapper}>
              <div className={styles.phoneNumber}>-</div>
            </div>
            <div className={styles.tenantGroupsWrapper}>
              <div className={styles.phoneNumber}>--</div>
            </div>
            <div className={styles.buttonWrapper}>
              <div className={styles.button}>
                <img className={styles.iconSet} alt="" src="/icon-set104.svg" />
              </div>
            </div>
          </div>
          <div className={styles.hr2} />
        </div>
        <div className={styles.tablerowclientsList}>
          <div className={styles.rowSample}>
            <div className={styles.avatarsParent}>
              <div className={styles.avatars}>
                <img className={styles.userIcon} alt="" src="/user7@2x.png" />
                <img
                  className={styles.avatarsChild}
                  alt=""
                  src="/ellipse-15.svg"
                />
              </div>
              <div className={styles.phoneNumber}>HCL</div>
            </div>
            <div className={styles.emailAddressWrapper}>
              <div className={styles.phoneNumber}>management@hcl.com</div>
            </div>
            <div className={styles.phoneNoWrapper}>
              <div className={styles.phoneNumber}>+91 9452136487</div>
            </div>
            <div className={styles.contactPersonWrapper}>
              <div className={styles.phoneNumber}>Venkat Pant</div>
            </div>
            <div className={styles.transactionStatusFrame}>
              <div className={styles.transactionStatus1}>
                <div className={styles.pending}>Paid</div>
              </div>
            </div>
            <div className={styles.contactPersonWrapper}>
              <div className={styles.phoneNumber}>--</div>
            </div>
            <div className={styles.sitesWrapper}>
              <div className={styles.phoneNumber}>5</div>
            </div>
            <div className={styles.sitesWrapper}>
              <div className={styles.phoneNumber}>2</div>
            </div>
            <div className={styles.tenantGroupsWrapper}>
              <div className={styles.phoneNumber}>1</div>
            </div>
            <div className={styles.buttonWrapper}>
              <div className={styles.button}>
                <img className={styles.iconSet} alt="" src="/icon-set104.svg" />
              </div>
            </div>
          </div>
          <div className={styles.hr2} />
        </div>
        <div className={styles.tablerowclientsList}>
          <div className={styles.rowSample}>
            <div className={styles.avatarsParent2}>
              <div className={styles.avatars}>
                <div className={styles.bg1} />
                <img
                  className={styles.avatarsChild4}
                  alt=""
                  src="/ellipse-14.svg"
                />
                <b className={styles.a}>R</b>
              </div>
              <div className={styles.companyName5}>{`Redington `}</div>
            </div>
            <div className={styles.emailAddressWrapper}>
              <div className={styles.phoneNumber}>management@redington.com</div>
            </div>
            <div className={styles.phoneNoWrapper}>
              <div className={styles.phoneNumber}>+91 9326571865</div>
            </div>
            <div className={styles.contactPersonWrapper}>
              <div className={styles.phoneNumber}>Samir Yadav</div>
            </div>
            <div className={styles.transactionStatusContainer}>
              <div className={styles.transactionStatus1}>
                <div className={styles.pending}>Pending</div>
              </div>
            </div>
            <div className={styles.contactPersonWrapper}>
              <div className={styles.phoneNumber}>--</div>
            </div>
            <div className={styles.sitesWrapper}>
              <div className={styles.phoneNumber}>1</div>
            </div>
            <div className={styles.sitesWrapper}>
              <div className={styles.phoneNumber}>1</div>
            </div>
            <div className={styles.tenantGroupsWrapper}>
              <div className={styles.phoneNumber}>--</div>
            </div>
            <div className={styles.buttonWrapper}>
              <div className={styles.button}>
                <img className={styles.iconSet} alt="" src="/icon-set104.svg" />
              </div>
            </div>
          </div>
          <div className={styles.hr2} />
        </div>
        <div className={styles.tablerowclientsList}>
          <div className={styles.rowSample}>
            <div className={styles.avatarsParent}>
              <div className={styles.avatars}>
                <img className={styles.userIcon} alt="" src="/user8@2x.png" />
                <img
                  className={styles.avatarsChild}
                  alt=""
                  src="/ellipse-15.svg"
                />
              </div>
              <div className={styles.phoneNumber}>{`Mphasis `}</div>
            </div>
            <div className={styles.emailAddressWrapper}>
              <div className={styles.phoneNumber}>management@mphasis.com</div>
            </div>
            <div className={styles.phoneNoWrapper}>
              <div className={styles.phoneNumber}>+91 9874621547</div>
            </div>
            <div className={styles.contactPersonWrapper}>
              <div className={styles.phoneNumber}>Sweta Chawla</div>
            </div>
            <div className={styles.transactionStatusFrame}>
              <div className={styles.transactionStatus1}>
                <div className={styles.pending}>Paid</div>
              </div>
            </div>
            <div className={styles.contactPersonWrapper}>
              <div className={styles.phoneNumber}>--</div>
            </div>
            <div className={styles.sitesWrapper}>
              <div className={styles.phoneNumber}>1</div>
            </div>
            <div className={styles.sitesWrapper}>
              <div className={styles.phoneNumber}>--</div>
            </div>
            <div className={styles.tenantGroupsWrapper}>
              <div className={styles.phoneNumber}>--</div>
            </div>
            <div className={styles.buttonWrapper}>
              <div className={styles.button}>
                <img className={styles.iconSet} alt="" src="/icon-set104.svg" />
              </div>
            </div>
          </div>
          <div className={styles.hr2} />
        </div>
        <div className={styles.tablerowclientsList}>
          <div className={styles.rowSample}>
            <div className={styles.avatarsParent}>
              <div className={styles.avatars}>
                <img className={styles.userIcon} alt="" src="/user9@2x.png" />
                <img
                  className={styles.avatarsChild}
                  alt=""
                  src="/ellipse-15.svg"
                />
              </div>
              <div className={styles.phoneNumber}>{`Larsen & Toubro`}</div>
            </div>
            <div className={styles.emailAddressWrapper}>
              <div className={styles.phoneNumber}>
                management@larsentoubro.com
              </div>
            </div>
            <div className={styles.phoneNoWrapper}>
              <div className={styles.phoneNumber}>+91 9547154964</div>
            </div>
            <div className={styles.contactPersonWrapper}>
              <div className={styles.phoneNumber}>Abhishek Kumar</div>
            </div>
            <div className={styles.transactionStatusFrame}>
              <div className={styles.transactionStatus1}>
                <div className={styles.pending}>Paid</div>
              </div>
            </div>
            <div className={styles.contactPersonWrapper}>
              <div className={styles.phoneNumber}>--</div>
            </div>
            <div className={styles.sitesWrapper}>
              <div className={styles.phoneNumber}>16</div>
            </div>
            <div className={styles.sitesWrapper}>
              <div className={styles.phoneNumber}>--</div>
            </div>
            <div className={styles.tenantGroupsWrapper}>
              <div className={styles.phoneNumber}>--</div>
            </div>
            <div className={styles.buttonWrapper}>
              <div className={styles.button}>
                <img className={styles.iconSet} alt="" src="/icon-set104.svg" />
              </div>
            </div>
          </div>
          <div className={styles.hr2} />
        </div>
        <div className={styles.tablerowclientsList10}>
          <div className={styles.rowSample}>
            <div className={styles.avatarsParent}>
              <div className={styles.avatars}>
                <img className={styles.userIcon} alt="" src="/user10@2x.png" />
                <img
                  className={styles.avatarsChild}
                  alt=""
                  src="/ellipse-15.svg"
                />
              </div>
              <div className={styles.phoneNumber}>Cognizant</div>
            </div>
            <div className={styles.emailAddressWrapper}>
              <div className={styles.phoneNumber}>management@cognizant.com</div>
            </div>
            <div className={styles.phoneNoWrapper}>
              <div className={styles.phoneNumber}>+91 8476632487</div>
            </div>
            <div className={styles.contactPersonWrapper}>
              <div className={styles.phoneNumber}>Sharad Khare</div>
            </div>
            <div className={styles.transactionStatusContainer}>
              <div className={styles.transactionStatus1}>
                <div className={styles.pending}>Pending</div>
              </div>
            </div>
            <div className={styles.contactPersonWrapper}>
              <div className={styles.phoneNumber}>--</div>
            </div>
            <div className={styles.sitesWrapper}>
              <div className={styles.phoneNumber}>14</div>
            </div>
            <div className={styles.sitesWrapper}>
              <div className={styles.phoneNumber}>--</div>
            </div>
            <div className={styles.tenantGroupsWrapper}>
              <div className={styles.phoneNumber}>--</div>
            </div>
            <div className={styles.buttonWrapper}>
              <div className={styles.button}>
                <img className={styles.iconSet} alt="" src="/icon-set105.svg" />
              </div>
            </div>
          </div>
          <div className={styles.hr2} />
        </div>
        <div className={styles.tablerowclientsList10}>
          <div className={styles.rowSample}>
            <div className={styles.avatarsParent}>
              <div className={styles.avatars}>
                <img className={styles.userIcon} alt="" src="/user10@2x.png" />
                <img
                  className={styles.avatarsChild}
                  alt=""
                  src="/ellipse-15.svg"
                />
              </div>
              <div className={styles.phoneNumber}>Deloitte</div>
            </div>
            <div className={styles.emailAddressWrapper}>
              <div className={styles.phoneNumber}>management@deloitte.com</div>
            </div>
            <div className={styles.phoneNoWrapper}>
              <div className={styles.phoneNumber}>+91 9874652154</div>
            </div>
            <div className={styles.contactPersonWrapper}>
              <div className={styles.phoneNumber}>Ramesh Bawa</div>
            </div>
            <div className={styles.transactionStatusContainer}>
              <div className={styles.transactionStatus1}>
                <div className={styles.pending}>Pending</div>
              </div>
            </div>
            <div className={styles.contactPersonWrapper}>
              <div className={styles.phoneNumber}>--</div>
            </div>
            <div className={styles.sitesWrapper}>
              <div className={styles.phoneNumber}>2</div>
            </div>
            <div className={styles.sitesWrapper}>
              <div className={styles.phoneNumber}>--</div>
            </div>
            <div className={styles.tenantGroupsWrapper}>
              <div className={styles.phoneNumber}>--</div>
            </div>
            <div className={styles.buttonWrapper}>
              <div className={styles.button}>
                <img className={styles.iconSet} alt="" src="/icon-set105.svg" />
              </div>
            </div>
          </div>
          <div className={styles.hr2} />
        </div>
        <Paginator />
      </div>
      <div className={styles.menu}>
        <div className={styles.listItem}>
          <img className={styles.iconSet12} alt="" src="/icon-set107.svg" />
          <div className={styles.listItem1}>View Details</div>
        </div>
        <div className={styles.listItem}>
          <img className={styles.iconSet12} alt="" src="/icon-set108.svg" />
          <div className={styles.listItem1}>Edit</div>
        </div>
        <div className={styles.listItem}>
          <img className={styles.iconSet12} alt="" src="/icon-set109.svg" />
          <div className={styles.listItem1}>Block Access</div>
        </div>
        <div className={styles.listItem}>
          <img className={styles.iconSet12} alt="" src="/icon-set110.svg" />
          <div className={styles.listItem1}>Delete</div>
        </div>
        <div className={styles.listItem8}>
          <img className={styles.iconSet12} alt="" src="/icon-set111.svg" />
          <div className={styles.phoneNumber}>List Item</div>
        </div>
      </div>
      <div className={styles.header1}>
        <div className={styles.right}>
          <div className={styles.pageTitle}>View Clients</div>
          <div className={styles.breadcrumbs}>
            <div className={styles.breadcrumb}>
              <div className={styles.sites}>Client Master</div>
            </div>
            <div className={styles.breadcrumb1}>
              <div className={styles.sites}>/</div>
              <div className={styles.sites}>Text with separator</div>
            </div>
            <div className={styles.currentPage}>
              <div className={styles.sites}>/</div>
              <div className={styles.sites}>View Clients</div>
            </div>
          </div>
        </div>
        <div className={styles.leftCtas}>
          <div className={styles.button12}>
            <img className={styles.iconSet17} alt="" src="/icon-set112.svg" />
            <b className={styles.button13}>View Statistics</b>
            <img
              className={styles.suffixIcon}
              alt=""
              src="/suffix-icon27.svg"
            />
          </div>
          <div className={styles.button14}>
            <img className={styles.iconSet17} alt="" src="/icon-set113.svg" />
            <b className={styles.button13}>Create New Ticket</b>
            <img
              className={styles.suffixIcon}
              alt=""
              src="/suffix-icon28.svg"
            />
          </div>
        </div>
        <div className={styles.leftSiteComplex}>
          <div className={styles.dropDownButton}>
            <div className={styles.menu1}>
              <div className={styles.list}>
                <div className={styles.listItem10}>
                  <div className={styles.radioButton}>
                    <div className={styles.radioBtn} />
                  </div>
                  <div className={styles.phoneNumber}>Recently Added</div>
                </div>
                <div className={styles.listItem10}>
                  <div className={styles.radioButton}>
                    <div className={styles.radioBtn} />
                  </div>
                  <div className={styles.phoneNumber}>No Sites</div>
                </div>
                <div className={styles.listItem10}>
                  <div className={styles.radioButton}>
                    <div className={styles.radioBtn} />
                  </div>
                  <div className={styles.phoneNumber}>No Tenant Group</div>
                </div>
                <div className={styles.listItem10}>
                  <div className={styles.radioButton}>
                    <div className={styles.radioBtn} />
                  </div>
                  <div className={styles.phoneNumber}>No Tenant</div>
                </div>
                <div className={styles.listItem18}>
                  <div className={styles.radioButton}>
                    <div className={styles.radioBtn} />
                  </div>
                  <div className={styles.phoneNumber}>List Item</div>
                </div>
              </div>
              <div className={styles.scroll}>
                <div className={styles.scrollBar} />
              </div>
            </div>
            <div className={styles.button16}>
              <div className={styles.phoneNumber}>Complex</div>
              <img
                className={styles.suffixIcon2}
                alt=""
                src="/suffix-icon16.svg"
              />
            </div>
          </div>
          <div className={styles.dropDownButton1}>
            <div className={styles.menu1}>
              <div className={styles.list}>
                <div className={styles.listItem10}>
                  <div className={styles.radioButton}>
                    <div className={styles.radioBtn} />
                  </div>
                  <div className={styles.phoneNumber}>Client</div>
                </div>
                <div className={styles.listItem10}>
                  <div className={styles.radioButton}>
                    <div className={styles.radioBtn} />
                  </div>
                  <div className={styles.phoneNumber}>Client</div>
                </div>
                <div className={styles.listItem10}>
                  <div className={styles.radioButton}>
                    <div className={styles.radioBtn} />
                  </div>
                  <div className={styles.phoneNumber}>Client</div>
                </div>
                <div className={styles.listItem10}>
                  <div className={styles.radioButton}>
                    <div className={styles.radioBtn} />
                  </div>
                  <div className={styles.phoneNumber}>Client</div>
                </div>
                <div className={styles.listItem18}>
                  <div className={styles.radioButton}>
                    <div className={styles.radioBtn} />
                  </div>
                  <div className={styles.phoneNumber}>List Item</div>
                </div>
              </div>
              <div className={styles.scroll}>
                <div className={styles.scrollBar} />
              </div>
            </div>
            <div className={styles.button16}>
              <div className={styles.phoneNumber}>Site</div>
              <img
                className={styles.suffixIcon2}
                alt=""
                src="/suffix-icon16.svg"
              />
            </div>
          </div>
          <div className={styles.button20}>
            <img className={styles.iconSet} alt="" src="/icon-set114.svg" />
          </div>
        </div>
      </div>
      <CompanyContainer
        productId="/icon-set115.svg"
        productSize="/icon-set116.svg"
        productDimensions="/prefix-icon7.svg"
        productCode="/icon-set31.svg"
        productDimensionId="/icon-set117.svg"
        propBackgroundColor="#153ac7"
        propBoxShadow="0px 4px 16px rgba(3, 0, 55, 0.08)"
        propColor="#fff"
        propBackgroundColor1="unset"
        propBoxShadow1="unset"
        propColor1="#686687"
      />
    </div>
  );
};

export default AdminPanelclientMasterclie;
