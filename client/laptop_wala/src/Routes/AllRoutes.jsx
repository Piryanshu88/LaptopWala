import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../Components/Login/Login";
import { SignIn } from "../Components/SignIn/SignIn";
import { WebCart } from "../Pages/Cart/WebCart";
import { Homes } from "../Pages/Home/Home";
import { Product } from "../Pages/Products/Product";
import { SingleProduct } from "../Pages/SingleProduct/SingleProduct";

export const AllRoutes = () => {
  return (
    <Routes>
      
      <Route path="/" element={<Homes />} />
      <Route path="/products/:name" element={<Product />} />
      <Route path="/singleproduct/:id" element={<SingleProduct />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={<WebCart />} />
      
    </Routes>
  );
};
