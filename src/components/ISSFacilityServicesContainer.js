import CardContainer from "./CardContainer";
import ContainerCard from "./ContainerCard";
import styles from "./ISSFacilityServicesContainer.module.css";

const ISSFacilityServicesContainer = () => {
  return (
    <div className={styles.addCardParent}>
      <CardContainer
        clientLogoUrl="/user@2x.png"
        clientName="/ellipse-1.svg"
        companyName="ISS Facility Services"
        clientCount="4 Clients"
        clientId="/icon-set13.svg"
        addClientName="Add FCM"
        clientIds="/suffix-icon4.svg"
        clientIdsText="/icon-set14.svg"
        clientIdsText2="/suffix-icon5.svg"
      />
      <CardContainer
        clientLogoUrl="/user1@2x.png"
        clientName="/ellipse-11.svg"
        companyName="Infosys"
        clientCount="--"
        clientId="/icon-set15.svg"
        addClientName="Add Client "
        clientIds="/suffix-icon6.svg"
        clientIdsText="/icon-set16.svg"
        clientIdsText2="/suffix-icon7.svg"
      />
      <div className={styles.addCard}>
        <div className={styles.iconBlockParent}>
          <div className={styles.iconBlock}>
            <img className={styles.iconSet} alt="" src="/icon-set17.svg" />
          </div>
          <div className={styles.clientsParent}>
            <b className={styles.clients}>Sites</b>
            <div className={styles.div}>--</div>
          </div>
        </div>
        <div className={styles.buttonParent}>
          <div className={styles.button}>
            <img className={styles.prefixIcon} alt="" src="/prefix-icon8.svg" />
            <b className={styles.button1}>Go to Config</b>
            <img className={styles.prefixIcon} alt="" src="/suffix-icon8.svg" />
          </div>
          <div className={styles.button2}>
            <img className={styles.prefixIcon} alt="" src="/icon-set18.svg" />
            <b className={styles.button1}>View All</b>
            <img className={styles.prefixIcon} alt="" src="/suffix-icon9.svg" />
          </div>
        </div>
      </div>
      <ContainerCard
        tenantGroupId="/icon-set19.svg"
        tenantId="/ellipse-12.svg"
        tenantGroupName="Tenant Groups"
        tenantGroupImageId="/icon-set20.svg"
        addTenantGroupText="Add Tenant Group"
        tenantImageId="/suffix-icon10.svg"
        tenantGroupImageUrl="/icon-set21.svg"
        tenantGroupImageUrl2="/suffix-icon11.svg"
      />
      <ContainerCard
        tenantGroupId="/icon-set22.svg"
        tenantId="/ellipse-13.svg"
        tenantGroupName="Tenants"
        tenantGroupImageId="/icon-set23.svg"
        addTenantGroupText="Add Tenant"
        tenantImageId="/suffix-icon12.svg"
        tenantGroupImageUrl="/icon-set24.svg"
        tenantGroupImageUrl2="/suffix-icon13.svg"
      />
    </div>
  );
};

export default ISSFacilityServicesContainer;
