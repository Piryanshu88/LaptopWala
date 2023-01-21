import { Select, Text } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getData } from "../../Redux/dataReducer/action";
import styles from "./Product.module.css";
import { ProductCard } from "./ProductCard";
export const Product = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.dataReducer);
  useEffect(() => {
    dispatch(getData(name));
  }, [dispatch]);
  return (
    <div className={styles.products_container}>
      <Text fontSize={"2xl"} textAlign="center" padding={"10px"}>
        {name} Laptops{" "}
      </Text>
      <div className={styles.sort_pro}>
        <Text fontSize={"lg"}>{products?.length} Results</Text>
        <Select placeholder="Sort By Price">
          <option value="asc">low to high</option>
          <option value="desc">high to low</option>
        </Select>
      </div>
      <div className={styles.products}>
        {products?.map((el, i) => {
          return <ProductCard {...el} key={i} />;
        })}
      </div>
    </div>
  );
};
