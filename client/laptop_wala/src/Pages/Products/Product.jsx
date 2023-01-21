import React from "react";
import { Filter } from "../../Components/Filter/Filter";
import { Product as Pro } from "../../Components/Product/Product";
import styles from "./Product.module.css";
export const Product = () => {
  return (
    <div className={styles.product_container} >
      <Filter />
      <Pro />
    </div>
  );
};
