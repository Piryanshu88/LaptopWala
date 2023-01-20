import styles from "./Home.module.css";
import React from "react";
import { Button, Text } from "@chakra-ui/react";

export const Home = () => {
  return (
    <div className={styles.home_container}>
      <div className={styles.home_box}>
        <div>
          <Text color={"#444444"}>REPBULIC DAY OFFERS</Text>
          <Text color={"#444444"}>Be Free to Be More</Text>
          <Text>
            Get 10% cashback up to ₹5,000 on Citi cards & 2 years onsite
            warranty at ₹1*
          </Text>
          <div className={styles.home_btn}>
            <Button>Shop Deals</Button>
            <Button>Monitor Deals</Button>
          </div>
        </div>
        <div>
          <img
            src="./client\laptop_wala\src\assets\Screenshot_20230120_052234.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
