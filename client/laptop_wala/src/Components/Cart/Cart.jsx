import styles from "./Cart.module.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartLength, delDataSuccess } from "../../Redux/cartReducer/action";
import { CartCard } from "./CartCard";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  Spinner,
  Text,
  useToast,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export const Cart = () => {
  const dispatch = useDispatch();
  const { carts } = useSelector((store) => store.cartReducer);
  const totalPrice = carts?.reduce((sum, el) => {
    return sum + el.cartProducts.prices[0].price;
  }, 0);
  const toast = useToast();
  const [loading, setloading] = useState(false);
  const deleteData = (id) => {
    return axios.delete(`https://rose-shiny-hen.cyclic.app/cart/${id}`);
  };
  const navigate = useNavigate();
  const handleCheckout = () => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
      navigate("/");
    }, 3000);

    carts?.map((el) => {
      return deleteData(el._id);
    });
    dispatch(cartLength());
    dispatch(delDataSuccess());

    toast({
      title: `Checkout Successfull, Have a great day`,
      status: "success",
      isClosable: true,
    });
  };
  useEffect(() => {
    dispatch(cartLength());
  }, []);
  if (carts.length == 0) {
    return (
      <div>
        <Heading
          fontWeight={600}
          textAlign="center"
          marginTop={"35px"}
          fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }}
          lineHeight={"110%"}
        >
          Your Cart is{" "}
          <Text as={"span"} color={"orange.400"}>
            Empty
          </Text>
        </Heading>
        <Image
          src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-3428238-2902697.png"
          alt="cart-empty-img"
          width={"60%"}
          margin="auto"
        />
      </div>
    );
  }
  if (loading) {
    return (
      <Flex alignItems={"center"} justifyContent="center" height={"100vh"}>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Flex>
    );
  }
  return (
    <div className={styles.cart_container}>
      <div>
        {carts?.map((el, i) => {
          return <CartCard {...el.cartProducts} key={i} id={el._id} />;
        })}
      </div>
      <div>
        <Text fontSize={"lg"} marginBottom="15px">
          Coupons
        </Text>
        <Input placeholder="Enter Coupon" borderRadius={"0"} />
        <Text width={"80%"} marginTop="10px">
          <span color="var(--primary-color-btn)">Chat with an agent</span> or
          Call <span color="var(--primary-color-btn)">1800-425-4002 </span> for
          additional help.
        </Text>
        <div className={styles.checkout}>
          <Text color={"red.700"} fontSize="lg" fontWeight={"bold"}>
            Savings upto 30%
          </Text>
          <Text fontSize={"lg"} fontWeight="400" color={"green.500"}>
            Total Money Saved {(totalPrice || 0) * 0.2}
          </Text>
          <div>
            <Text fontWeight={"500"}>Total Order Value</Text>
            <Text fontWeight={"500"}>
              EUR {(totalPrice || 0) - (totalPrice || 0) * 0.2}
            </Text>
          </div>
          <Button
            width={"100%"}
            marginBottom="10px"
            colorScheme={"green"}
            onClick={handleCheckout}
          >
            {" "}
            Checkout
          </Button>
          <Button width={"100%"} marginBottom="10px">
            <Link to="/">Continue Shopping</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
