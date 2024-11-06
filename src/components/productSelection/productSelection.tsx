import React, { useState, useEffect } from "react";
import classNames from "classnames";
import styles from "./productSelectionStyle.module.scss";
import globalStyles from "../../global/styles/globalStyles.module.scss";

type ProductSelectionProps = {
  onSelectScreen: (screen: "drinks" | "cakes") => void;
};

const ProductSelection: React.FC<ProductSelectionProps> = ({
  onSelectScreen,
}) => {
  const [isDrinkHovered, setIsDrinkHovered] = useState<boolean>(false);
  const [isCakeHovered, setIsCakeHovered] = useState<boolean>(false);

  const handleItemMouseEnter = (item: string): void => {
    console.log("Item =>", item);
    if (item === "drinks") {
      setIsDrinkHovered(true);
    } else {
      setIsCakeHovered(true);
    }
  };

  const handleItemMouseLeave = (item: string): void => {
    if (item === "drinks") {
      setIsDrinkHovered(false);
    } else {
      setIsCakeHovered(false);
    }
    if (item === "container") {
      setIsCakeHovered(true);
      setIsDrinkHovered(true);
    }
  };

  return (
    <section
      className={styles.productSelectionContainer}
      onMouseLeave={() => handleItemMouseLeave("container")}
    >
      <div
        className={classNames(styles.drinkContainer, globalStyles.titleText, {
          [styles.blurEffect]: !isDrinkHovered,
        })}
        onClick={() => onSelectScreen("drinks")}
        onMouseEnter={() => handleItemMouseEnter("drinks")}
        onMouseLeave={() => handleItemMouseLeave("drinks")}
      >
        <div className={styles.backgroundImage}></div>
        <h1>Bebidas</h1>
      </div>
      <div className={classNames(styles.centerText, globalStyles.titleText)}>
        Escolha seu tipo de produto
      </div>
      <div
        className={classNames(styles.cakeContainer, globalStyles.titleText, {
          [styles.blurEffect]: !isCakeHovered,
        })}
        onClick={() => onSelectScreen("cakes")}
        onMouseEnter={() => handleItemMouseEnter("cakes")}
        onMouseLeave={() => handleItemMouseLeave("cakes")}
      >
        <div className={styles.backgroundImage}></div>
        <h1>Bolos</h1>
      </div>
    </section>
  );
};

export default ProductSelection;
