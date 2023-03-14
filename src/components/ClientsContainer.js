import styles from "./ClientsContainer.module.css";

const ClientsContainer = () => {
  return (
    <div className={styles.tabletopBarclientsList}>
      <div className={styles.headerleft}>
        <div className={styles.searchInput}>
          <div className={styles.inputField}>
            <img className={styles.iconSet} alt="" src="/icon-set103.svg" />
            <div className={styles.search}>Search</div>
            <div className={styles.input}>Input</div>
          </div>
        </div>
      </div>
      <div className={styles.headerright}>
        <div className={styles.dropDownButton}>
          <div className={styles.menu}>
            <div className={styles.list}>
              <div className={styles.listItem}>
                <div className={styles.radioButton}>
                  <div className={styles.radioBtn} />
                </div>
                <div className={styles.search}>List Item</div>
              </div>
              <div className={styles.listItem}>
                <div className={styles.radioButton}>
                  <div className={styles.radioBtn} />
                </div>
                <div className={styles.search}>List Item</div>
              </div>
              <div className={styles.listItem}>
                <div className={styles.radioButton}>
                  <div className={styles.radioBtn} />
                </div>
                <div className={styles.search}>List Item</div>
              </div>
              <div className={styles.listItem}>
                <div className={styles.radioButton}>
                  <div className={styles.radioBtn} />
                </div>
                <div className={styles.search}>List Item</div>
              </div>
              <div className={styles.listItem}>
                <div className={styles.radioButton}>
                  <div className={styles.radioBtn} />
                </div>
                <div className={styles.search}>List Item</div>
              </div>
            </div>
            <div className={styles.scroll}>
              <div className={styles.scrollBar} />
            </div>
          </div>
          <div className={styles.button}>
            <div className={styles.search}>Columns</div>
            <img
              className={styles.suffixIcon}
              alt=""
              src="/suffix-icon25.svg"
            />
          </div>
        </div>
        <div className={styles.button2}>
          <img className={styles.prefixIcon} alt="" src="/prefix-icon10.svg" />
          <b className={styles.button3}>Export</b>
          <img className={styles.suffixIcon1} alt="" src="/prefix-icon6.svg" />
        </div>
      </div>
    </div>
  );
};

export default ClientsContainer;
