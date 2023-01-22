import React from "react";
import styles from "./CartCard.module.css";
import { IconButton, Image, Skeleton, Text } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import axios from "axios";
import { useDispatch } from "react-redux";
import { cartLength } from "../../Redux/cartReducer/action";
import { useState } from "react";
export const CartCard = ({ name, images, mpn, data, prices, id }) => {
  const dispatch = useDispatch();
  const p = prices[0].price || 2000;
  const [loading, setloading] = useState(false);
  const new_prices = p - p * 0.2;
  const deleteData = () => {
    setloading(true);
    return axios
      .delete(`https://rose-shiny-hen.cyclic.app/cart/${id}`)
      .then(() => dispatch(cartLength()))
      .then(() =>
        setTimeout(() => {
          setloading(false);
        }, 2000)
      );
  };
  if (loading) {
    return <Skeleton height={"300px"}></Skeleton>;
  }
  return (
    <div className={styles.product_card}>
      <div className={styles.hover_switch}>
        <Image
          verticalAlign={"center"}
          src={images[0]?.url}
          alt="product-img"
          width={"80%"}
          margin="auto"
        />
      </div>
      <div>
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
        <div className={styles.product_delete}>
          <IconButton
            colorScheme={"red"}
            icon={<DeleteIcon />}
            onClick={deleteData}
          ></IconButton>
        </div>
      </div>
    </div>
  );
};
