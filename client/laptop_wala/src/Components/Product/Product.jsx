import { Select, Skeleton, Text } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getData } from "../../Redux/dataReducer/action";
import styles from "./Product.module.css";
import { ProductCard } from "./ProductCard";
export const Product = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const [loading, setloading] = useState(true);
  const { products, isloading } = useSelector((store) => store.dataReducer);
  const handleSort = (e) => {
    console.log(e.target.value);
  };
  useEffect(() => {
    dispatch(getData(name));
    setTimeout(() => {
      setloading(false);
    }, 3000);
  }, [dispatch]);

  return (
    <div className={styles.products_container}>
      <Text fontSize={"2xl"} textAlign="center" padding={"10px"}>
        {name} Laptops
      </Text>
      <div className={styles.sort_pro}>
        <Text fontSize={"lg"}>{products?.length} Results</Text>
        <Select placeholder="Sort By Price" onChange={handleSort}>
          <option value="asc">low to high</option>
          <option value="desc">high to low</option>
        </Select>
      </div>
      <div className={styles.products}>
        {products?.map((el, i) => {
          return !loading ? (
            <Link to={`/singleproduct/${el._id}`}>
              <ProductCard {...el} key={i} />
            </Link>
          ) : (
            <Skeleton height="300px" marginBottom={"20px"} />
          );
        })}
      </div>
    </div>
  );
};
