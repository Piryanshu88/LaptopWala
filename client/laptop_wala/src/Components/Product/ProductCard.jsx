import styles from "./ProductCard.module.css";
import React from "react";
import { Text } from "@chakra-ui/react";

export const ProductCard = ({ name, images, mpn, data, prices }) => {
  const p = prices[0].price || 2000;
  const new_prices = p - p * 0.2;
  return (
    <div className={styles.product_card}>
      <div className={styles.hover_switch}>
        <img src={images[0]?.url} alt="product-img" width={"100%"} />
      </div>
      <div>
        <div className={styles.product_desc}>
          <Text fontSize="lg" color="var(--primary-btn-color)">
            {name}
          </Text>
          <Text color={"GrayText"} fontSize={"sm"}>
            {mpn}
          </Text>
          <div className={styles.desc}>
            <Text
              fontWeight={"500"}
              paddingBottom="10px"
              paddingTop={"10px"}
              borderBottom=" 1px solid rgb(230, 230, 230)"
            >
              Specs
            </Text>
            <div>
              <Text color={"GrayText"}>Processor</Text>
              <Text>{data?.cpu?.type}</Text>
            </div>
            <div>
              <Text color={"GrayText"}>Implementation</Text>
              <Text>{data?.cpu?.implementation}</Text>
            </div>
            <div>
              <Text color={"GrayText"}>Generation</Text>
              <Text>{data?.cpu?.generation}</Text>
            </div>
            <div>
              <Text color={"GrayText"}>Video Card</Text>
              <Text>{data?.video?.internal_video_card_type}</Text>
            </div>
            <div>
              <Text color={"GrayText"}>Brand</Text>
              <Text>{data?.general?.brand}</Text>
            </div>
            <div>
              <Text color={"GrayText"}>Memory Type</Text>
              <Text>{data?.memory?.type}</Text>
            </div>
          </div>
        </div>
        <div className={styles.product_price}>
          <div className={styles.cashback_div}>
            <Text fontSize={"sm"} display="inline-block">
              Get 5% Cashback on Citi Cards
            </Text>
          </div>
          <Text
            fontSize={"sm"}
            color="GrayText"
            display={"flex"}
            margin="4px 0px"
          >
            Online Price :-{" "}
            <Text textDecoration="line-through">
              {prices[0]?.currency} {prices[0]?.price}
            </Text>
          </Text>
          <Text
            fontWeight={"500"}
            fontSize="xl"
            display={"flex"}
            alignItems="center"
            gap={"10px"}
          >
            {prices[0]?.currency} {new_prices.toFixed(2)}
            <Text fontSize="lg" color="green.800">
              Save {prices[0]?.currency} {(p * 0.2).toFixed(2)} (20%)
            </Text>
          </Text>
          <Text>Price inclusive of GST. Free Delivery.</Text>
          <Text _hover={{ textDecoration: "underline" }} cursor="pointer">
            In Stock for Fast Delivery
          </Text>
          <Text fontWeight={"400"} fontSize={"lg"}>
            Special Offers
          </Text>
          <Text fontWeight={"500"}>Financing</Text>
          <Text color={"var(--primary-btn-color)"}>No cost EMI</Text>
        </div>
      </div>
    </div>
  );
};
