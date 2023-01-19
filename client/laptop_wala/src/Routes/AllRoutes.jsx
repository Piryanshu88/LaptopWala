import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home/Home";
import { Product } from "../Pages/Products/Product";
import { SingleProduct } from "../Pages/SingleProduct/SingleProduct";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/:name" element={<Product />} />
      <Route path="/singleproduct/:id" element={<SingleProduct />} />
    </Routes>
  );
};
