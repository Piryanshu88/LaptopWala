import { Button, Image, Text, useToast } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Accordian } from "./Accordian";
import styles from "./SingleProduct.module.css";
const techcomp = [
  {
    name: "Processor",
    desc: [
      "11th Gen Intel® Core™ i3-1115G4 (6 MB cache, 2 cores, 4 threads, up to 4.10 GHz Turbo)",
      "11th Gen Intel® Core™ i5-1135G7 (8 MB cache, 4 cores, 8 threads, up to 4.20 GHz Turbo)",
    ],
  },
  {
    name: "Operating System",
    desc: ["Windows 11 Home Single Language, English"],
  },
  {
    name: "Graphics",
    desc: ["Intel® UHD Graphics"],
  },
  {
    name: "Memory",
    desc: ["8 GB, 1 x 8 GB, DDR4, 3200 MHz", "8 GB, 1 x 8 GB, DDR4, 2666 MHz"],
  },
  {
    name: "Hard Drive",
    desc: ["256 GB, M.2, PCIe NVMe, SSD", "512 GB, M.2, PCIe NVMe, SSD"],
  },
  {
    name: "LCD",
    desc: [
      "15.6, FHD 1920x1080, 60Hz, Non-Touch, AG, WVA, LED-Backlit, Narrow Border",
    ],
  },
  {
    name: "Color Choice",
    desc: ["Titan Grey"],
  },
  {
    name: "Keyboard",
    desc: [
      "English International Non-Backlit Keyboard with numeric Keypad",
      "English International Backlit Keyboard with numeric Keypad",
    ],
  },
];
export const SingleProducts = () => {
  const [data, setData] = useState([]);
  const toast = useToast();
  const p = data[0]?.prices[0].price || 2000;
  const { isAuth } = useSelector((store) => store.authReducer);
  const new_prices = p - p * 0.2;
  const { id } = useParams();
  const getData = () => {
    return axios
      .get(`https://rose-shiny-hen.cyclic.app/laptops/${id}`)
      .then((re) => setData(re.data))
      .catch((err) => console.log(err));
  };
  const handleCart = () => {
    if (!isAuth) {
      return toast({
        title: `Please login First`,
        position: "bottom-left",
        status: "error",
        isClosable: true,
        duration: 2000,
      });
    }
    toast({
      title: `Added to Cart`,
      position: "bottom-left",
      status: "success",
      isClosable: true,
      duration: 2000,
    });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className={styles.single_product}>
      <div className={styles.single_product_img}>
        <Text fontSize={"3xl"} fontWeight="500" marginBottom={"20px"}>
          {data[0]?.name}
        </Text>
        <Image
          src={data[0]?.images[0]?.url}
          alt="product-img"
          width={"85%"}
          margin="auto"
          transition={"all ease-in-out 600ms"}
        />
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
              {data[0]?.prices[0]?.currency} {data[0]?.prices[0]?.price}
            </Text>
          </Text>
          <Text
            fontWeight={"500"}
            fontSize="xl"
            display={"flex"}
            alignItems="center"
            gap={"10px"}
          >
            {data[0]?.prices[0]?.currency} {new_prices.toFixed(2)}
            <Text fontSize="lg" color="green.800">
              Save {data[0]?.prices[0]?.currency} {(p * 0.2).toFixed(2)} (20%)
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
        <Button
          bg={"green.700"}
          color="whiteAlpha.800"
          borderRadius={"0"}
          _hover={{ bg: "green.600", color: "whiteAlpha.900" }}
          onClick={handleCart}
        >
          Add to Cart
        </Button>
      </div>
      <div className={styles.single_pro_details}>
        {techcomp?.map((el, i) => {
          return <Accordian name={el.name} key={i} desc={el.desc} />;
        })}
      </div>
    </div>
  );
};
