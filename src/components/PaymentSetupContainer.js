import styles from "./PaymentSetupContainer.module.css";

const PaymentSetupContainer = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.paymentSetupParent}>
        <b className={styles.paymentSetup}>Payment Setup</b>
        <div
          className={styles.setUpPayments}
        >{`Set up payments for the client. `}</div>
      </div>
      <div className={styles.textFieldParent}>
        <div className={styles.textField}>
          <div className={styles.inputField}>
            <img className={styles.iconSet} alt="" src="/icon-set71.svg" />
            <div className={styles.label}>
              <span>{`Billing Address `}</span>
              <span className={styles.span}>*</span>
            </div>
            <div className={styles.input}>Input</div>
            <img className={styles.iconSet} alt="" src="/icon-set72.svg" />
          </div>
          <div className={styles.typeInputDescription}>
            Type input description here...
          </div>
          <div className={styles.error}>
            <img className={styles.iconSet2} alt="" src="/icon-set73.svg" />
            <div className={styles.errorMessageHere}>Error Message here</div>
          </div>
        </div>
        <div className={styles.dropDownInputParent}>
          <div className={styles.dropDownInput}>
            <div className={styles.inputField}>
              <img className={styles.iconSet3} alt="" src="/icon-set74.svg" />
              <div className={styles.label}>
                <span>{`Select State `}</span>
                <span className={styles.span}>*</span>
              </div>
              <div className={styles.input1}>Input</div>
              <img className={styles.iconSet4} alt="" src="/icon-set75.svg" />
            </div>
            <div className={styles.typeInputDescription}>
              Type input description here...
            </div>
            <div className={styles.error}>
              <img className={styles.iconSet2} alt="" src="/icon-set76.svg" />
              <div className={styles.errorMessageHere}>Error Message here</div>
            </div>
            <div className={styles.menu}>
              <div className={styles.list}>
                <div className={styles.listItem}>
                  <div className={styles.radioButton}>
                    <div className={styles.radioBtn} />
                  </div>
                  <div className={styles.label}>List Item</div>
                </div>
                <div className={styles.listItem}>
                  <div className={styles.radioButton}>
                    <div className={styles.radioBtn} />
                  </div>
                  <div className={styles.label}>List Item</div>
                </div>
                <div className={styles.listItem}>
                  <div className={styles.radioButton}>
                    <div className={styles.radioBtn} />
                  </div>
                  <div className={styles.label}>List Item</div>
                </div>
                <div className={styles.listItem}>
                  <div className={styles.radioButton}>
                    <div className={styles.radioBtn} />
                  </div>
                  <div className={styles.label}>List Item</div>
                </div>
                <div className={styles.listItem}>
                  <div className={styles.radioButton}>
                    <div className={styles.radioBtn} />
                  </div>
                  <div className={styles.label}>List Item</div>
                </div>
              </div>
              <div className={styles.scroll}>
                <div className={styles.scrollBar} />
              </div>
            </div>
          </div>
          <div className={styles.dropDownInput1}>
            <div className={styles.inputField}>
              <img className={styles.iconSet3} alt="" src="/icon-set77.svg" />
              <div className={styles.label}>
                <span>{`Select City `}</span>
                <span className={styles.span}>*</span>
              </div>
              <div className={styles.input1}>Input</div>
              <img className={styles.iconSet4} alt="" src="/icon-set75.svg" />
            </div>
            <div className={styles.typeInputDescription}>
              Type input description here...
            </div>
            <div className={styles.error}>
              <img className={styles.iconSet2} alt="" src="/icon-set78.svg" />
              <div className={styles.errorMessageHere}>Error Message here</div>
            </div>
            <div className={styles.menu}>
              <div className={styles.list}>
                <div className={styles.listItem}>
                  <div className={styles.radioButton}>
                    <div className={styles.radioBtn} />
                  </div>
                  <div className={styles.label}>List Item</div>
                </div>
                <div className={styles.listItem}>
                  <div className={styles.radioButton}>
                    <div className={styles.radioBtn} />
                  </div>
                  <div className={styles.label}>List Item</div>
                </div>
                <div className={styles.listItem}>
                  <div className={styles.radioButton}>
                    <div className={styles.radioBtn} />
                  </div>
                  <div className={styles.label}>List Item</div>
                </div>
                <div className={styles.listItem}>
                  <div className={styles.radioButton}>
                    <div className={styles.radioBtn} />
                  </div>
                  <div className={styles.label}>List Item</div>
                </div>
                <div className={styles.listItem}>
                  <div className={styles.radioButton}>
                    <div className={styles.radioBtn} />
                  </div>
                  <div className={styles.label}>List Item</div>
                </div>
              </div>
              <div className={styles.scroll}>
                <div className={styles.scrollBar} />
              </div>
            </div>
          </div>
          <div className={styles.textField1}>
            <div className={styles.inputField}>
              <img className={styles.iconSet} alt="" src="/icon-set79.svg" />
              <div className={styles.label}>
                <span>{`Pincode `}</span>
                <span className={styles.span}>*</span>
              </div>
              <div className={styles.input}>Input</div>
              <img className={styles.iconSet} alt="" src="/icon-set80.svg" />
            </div>
            <div className={styles.typeInputDescription}>
              Type input description here...
            </div>
            <div className={styles.error}>
              <img className={styles.iconSet2} alt="" src="/icon-set81.svg" />
              <div className={styles.errorMessageHere}>Error Message here</div>
            </div>
          </div>
        </div>
        <div className={styles.dropDownInputGroup}>
          <div className={styles.dropDownInput1}>
            <div className={styles.inputField}>
              <img className={styles.iconSet3} alt="" src="/icon-set82.svg" />
              <div className={styles.label}>
                <span>{`Select Number of Site Access `}</span>
                <span className={styles.span}>*</span>
              </div>
              <div className={styles.input1}>Input</div>
              <img className={styles.iconSet4} alt="" src="/icon-set83.svg" />
            </div>
            <div className={styles.typeInputDescription}>
              Type input description here...
            </div>
            <div className={styles.error}>
              <img className={styles.iconSet2} alt="" src="/icon-set84.svg" />
              <div className={styles.errorMessageHere}>Error Message here</div>
            </div>
            <div className={styles.menu}>
              <div className={styles.list}>
                <div className={styles.listItem}>
                  <div className={styles.radioButton}>
                    <div className={styles.radioBtn} />
                  </div>
                  <div className={styles.label}>List Item</div>
                </div>
                <div className={styles.listItem}>
                  <div className={styles.radioButton}>
                    <div className={styles.radioBtn} />
                  </div>
                  <div className={styles.label}>List Item</div>
                </div>
                <div className={styles.listItem}>
                  <div className={styles.radioButton}>
                    <div className={styles.radioBtn} />
                  </div>
                  <div className={styles.label}>List Item</div>
                </div>
                <div className={styles.listItem}>
                  <div className={styles.radioButton}>
                    <div className={styles.radioBtn} />
                  </div>
                  <div className={styles.label}>List Item</div>
                </div>
                <div className={styles.listItem}>
                  <div className={styles.radioButton}>
                    <div className={styles.radioBtn} />
                  </div>
                  <div className={styles.label}>List Item</div>
                </div>
              </div>
              <div className={styles.scroll}>
                <div className={styles.scrollBar} />
              </div>
            </div>
          </div>
          <div className={styles.textField2}>
            <div className={styles.inputField5}>
              <img className={styles.iconSet3} alt="" src="/icon-set85.svg" />
              <div className={styles.label}>
                <span>Rs.</span>
                <span
                  className={styles.payableAmountPer}
                >{` Payable Amount per Site `}</span>
                <span className={styles.span}>*</span>
              </div>
              <div className={styles.inputFieldChild} />
              <div className={styles.total}>Total:</div>
              <div className={styles.title}>
                <span>Rs.</span>
                <span className={styles.payableAmountPer}> 000000</span>
              </div>
              <div className={styles.input5}>Input</div>
              <img className={styles.iconSet3} alt="" src="/icon-set86.svg" />
            </div>
            <div className={styles.typeInputDescription}>
              Type input description here...
            </div>
            <div className={styles.error}>
              <img className={styles.iconSet2} alt="" src="/icon-set87.svg" />
              <div className={styles.errorMessageHere}>Error Message here</div>
            </div>
          </div>
        </div>
        <div className={styles.textFieldGroup}>
          <div className={styles.textField3}>
            <div className={styles.inputField}>
              <img className={styles.iconSet} alt="" src="/icon-set88.svg" />
              <div className={styles.label}>
                <span>Rs.</span>
                <span
                  className={styles.payableAmountPer}
                >{` Payable Amount per Site `}</span>
                <span className={styles.span}>*</span>
              </div>
              <div className={styles.input6}>Input</div>
              <img className={styles.iconSet} alt="" src="/icon-set89.svg" />
            </div>
            <div className={styles.typeInputDescription}>
              Type input description here...
            </div>
            <div className={styles.error}>
              <img className={styles.iconSet2} alt="" src="/icon-set90.svg" />
              <div className={styles.errorMessageHere}>Error Message here</div>
            </div>
          </div>
          <div className={styles.textField4}>
            <div className={styles.inputField5}>
              <div className={styles.totalPayableAmount}>
                Total Payable Amount:
              </div>
              <div className={styles.rs0000001}>
                <span>{`Rs. `}</span>
                <span className={styles.payableAmountPer}>000000</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.dropDownInputGroup}>
          <div className={styles.dropDownInput1}>
            <div className={styles.inputField}>
              <img className={styles.iconSet} alt="" src="/icon-set91.svg" />
              <div className={styles.label}>
                <span>{`Discount (%) `}</span>
                <span className={styles.span}>*</span>
              </div>
              <div className={styles.input}>Input</div>
              <img className={styles.iconSet} alt="" src="/icon-set92.svg" />
            </div>
            <div className={styles.typeInputDescription}>
              Type input description here...
            </div>
            <div className={styles.error}>
              <img className={styles.iconSet2} alt="" src="/icon-set93.svg" />
              <div className={styles.errorMessageHere}>Error Message here</div>
            </div>
          </div>
          <div className={styles.dropDownInput1}>
            <div className={styles.inputField}>
              <img className={styles.iconSet} alt="" src="/icon-set94.svg" />
              <div className={styles.label}>
                <span>{`Reason `}</span>
                <span className={styles.span}>*</span>
              </div>
              <div className={styles.input}>Input</div>
              <img className={styles.iconSet} alt="" src="/icon-set92.svg" />
            </div>
            <div className={styles.typeInputDescription}>
              Type input description here...
            </div>
            <div className={styles.error}>
              <img className={styles.iconSet2} alt="" src="/icon-set95.svg" />
              <div className={styles.errorMessageHere}>Error Message here</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.dropDownInputGroup}>
        <div className={styles.paymentModeParent}>
          <b className={styles.paymentMode}>Payment Mode</b>
          <div className={styles.checkBoxParent}>
            <div className={styles.checkBox}>
              <div className={styles.checkBox1} />
              <div className={styles.title}>UPI</div>
            </div>
            <div className={styles.checkBox}>
              <div className={styles.checkBox1} />
              <div className={styles.title}>Net Banking</div>
            </div>
            <div className={styles.checkBox}>
              <div className={styles.checkBox1} />
              <div className={styles.title}>Cash</div>
            </div>
            <div className={styles.checkBox}>
              <div className={styles.checkBox1} />
              <div className={styles.title}>Cheque</div>
            </div>
            <div className={styles.checkBox}>
              <div className={styles.checkBox1} />
              <div className={styles.title}>Other</div>
            </div>
          </div>
        </div>
        <div className={styles.paymentModeParent}>
          <b className={styles.paymentMode}>Payment Status</b>
          <div className={styles.radioButtonParent}>
            <div className={styles.checkBox}>
              <div className={styles.radioBtn} />
              <div className={styles.title}>Paid</div>
            </div>
            <div className={styles.checkBox}>
              <div className={styles.radioBtn} />
              <div className={styles.title}>Pending</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.buttonParent}>
        <div className={styles.button}>
          <img className={styles.prefixIcon} alt="" src="/prefix-icon7.svg" />
          <b className={styles.button1}>{`Save & Continue`}</b>
          <img className={styles.suffixIcon} alt="" src="/suffix-icon18.svg" />
        </div>
        <div className={styles.button2}>
          <img className={styles.suffixIcon} alt="" src="/icon-set96.svg" />
          <b className={styles.button1}>Reset</b>
          <img className={styles.prefixIcon} alt="" src="/suffix-icon9.svg" />
        </div>
      </div>
    </div>
  );
};

export default PaymentSetupContainer;
