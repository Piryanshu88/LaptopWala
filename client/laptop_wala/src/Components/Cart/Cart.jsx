import styles from "./Cart.module.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartLength } from "../../Redux/cartReducer/action";
import { CartCard } from "./CartCard";

export const Cart = () => {
  const dispatch = useDispatch();
  const { carts } = useSelector((store) => store.cartReducer);

  useEffect(() => {
    dispatch(cartLength());
  }, []);
  return (
    <div className={styles.cart_container}>
      <div>
        {carts?.map((el, i) => {
          return <CartCard {...el.cartProducts} key={i} id={el._id} />;
        })}
      </div>
      <div></div>
    </div>
  );
};
