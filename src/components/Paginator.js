import styles from "./Paginator.module.css";

const Paginator = () => {
  return (
    <div className={styles.pagination}>
      <div className={styles.pages}>
        <div className={styles.paginationBase}>
          <div className={styles.div}>1</div>
        </div>
        <div className={styles.paginationBase1}>
          <div className={styles.div}>2</div>
        </div>
        <div className={styles.paginationBase1}>
          <div className={styles.div}>3</div>
        </div>
        <div className={styles.paginationBase1}>
          <div className={styles.div}>...</div>
        </div>
        <div className={styles.paginationBase1}>
          <div className={styles.div}>48</div>
        </div>
        <div className={styles.paginationBase1}>
          <div className={styles.div}>49</div>
        </div>
        <div className={styles.paginationBase1}>
          <div className={styles.div}>50</div>
        </div>
      </div>
      <div className={styles.previousButtonParent}>
        <div className={styles.previousButton}>
          <img className={styles.iconSet} alt="" src="/icon-set106.svg" />
          <b className={styles.button}>Previous</b>
          <img className={styles.suffixIcon} alt="" src="/suffix-icon17.svg" />
        </div>
        <div className={styles.nextButton}>
          <img className={styles.suffixIcon} alt="" src="/prefix-icon11.svg" />
          <b className={styles.button}>Next</b>
          <img className={styles.iconSet} alt="" src="/suffix-icon26.svg" />
        </div>
      </div>
    </div>
  );
};

export default Paginator;
