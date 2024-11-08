import React from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import styles from "./cardStyle.module.scss";
import classNames from "classnames";
import cappucino from "../../assets/images/cappucino_bg.jpeg";
import globalStyles from "../../global/styles/globalStyles.module.scss";

const CardOld: React.FC = () => {
  return (
    <div className={styles.cardContainer}>
      <img src={cappucino} alt="cafe" />
      <div className={styles.blackOverlay}></div>
      <div className={styles.textInformationsContainer}>
        <div className={styles.icons}>
            <span id={styles.edit}><EditOutlined /></span>
            <span id={styles.remove}><DeleteOutlined /></span>
        </div>
        <h1 className={classNames(globalStyles.titleText)}>
          Cappucino{" "}
          <span className={classNames(globalStyles.bodyText)} id={styles.price}>- R$ 15,00</span>
        </h1>
        <div className={styles.row}></div>
        <div className={styles.description}>
          <p className={classNames(globalStyles.bodyText)}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut
            dui faucibus Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Quisque ut dui faucibus Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Quisque ut dui faucibus
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardOld;
