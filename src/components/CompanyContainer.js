import { useMemo } from "react";
import styles from "./CompanyContainer.module.css";

const CompanyContainer = ({
  productId,
  productSize,
  productDimensions,
  productCode,
  productDimensionId,
  propBackgroundColor,
  propBoxShadow,
  propColor,
  propBackgroundColor1,
  propBoxShadow1,
  propColor1,
}) => {
  const secondryNavMenuStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      boxShadow: propBoxShadow,
    };
  }, [propBackgroundColor, propBoxShadow]);

  const summaryStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const secondryNavMenu1Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
      boxShadow: propBoxShadow1,
    };
  }, [propBackgroundColor1, propBoxShadow1]);

  const summary1Style = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  return (
    <div className={styles.sideNavclientMastersuperA}>
      <div className={styles.vr} />
      <div className={styles.secondarynav}>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.punctualitiWrapper}>
              <b className={styles.punctualiti}>Company name</b>
            </div>
            <div className={styles.button}>
              <img className={styles.iconSet} alt="" src="/icon-set28.svg" />
            </div>
          </div>
          <div className={styles.searchInputParent}>
            <div className={styles.searchInput}>
              <div className={styles.inputField}>
                <img className={styles.iconSet1} alt="" src={productId} />
                <div className={styles.search}>Search modules</div>
                <div className={styles.input}>Input</div>
              </div>
            </div>
            <div className={styles.button}>
              <img className={styles.iconSet} alt="" src="/icon-set28.svg" />
            </div>
          </div>
          <div className={styles.secondryNavmenuParent}>
            <div className={styles.secondryNavmenu}>
              <img className={styles.iconSet3} alt="" src={productSize} />
              <div className={styles.clientMaster}>Client Master</div>
            </div>
            <div className={styles.menu}>
              <div
                className={styles.secondryNavmenu1}
                style={secondryNavMenuStyle}
              >
                <b className={styles.summary} style={summaryStyle}>
                  View Clients
                </b>
                <img
                  className={styles.iconSet4}
                  alt=""
                  src={productDimensions}
                />
              </div>
              <div
                className={styles.secondryNavmenu2}
                style={secondryNavMenu1Style}
              >
                <b className={styles.summary} style={summary1Style}>
                  Add Client
                </b>
                <img className={styles.iconSet4} alt="" src={productCode} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.hr} />
        <div className={styles.frameContainer}>
          <div className={styles.avatarsWrapper}>
            <div className={styles.avatars}>
              <img
                className={styles.unsplashgrymxaqdtp8Icon}
                alt=""
                src="/unsplashgrymxaqdtp8@2x.png"
              />
              <img
                className={styles.avatarsChild}
                alt=""
                src="/ellipse-14.svg"
              />
            </div>
          </div>
          <div className={styles.secondryNavmenu3}>
            <b className={styles.jamesBurton}>James Burton</b>
            <a
              className={styles.jamesthevouchdigital}
              href="mailto:james@thevouch.digital"
              target="_blank"
            >
              james@thevouch.digital
            </a>
          </div>
          <div className={styles.button2}>
            <img className={styles.iconSet} alt="" src={productDimensionId} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyContainer;
