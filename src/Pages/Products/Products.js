import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";
import ProductItem from "./ProductItem";

const Products = () => {
  useTitle("Products");
  const productsPerCategories = useLoaderData();
  // console.log(productsPerCategories);

  return (
    <div className="grid gap-2 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 col-span-3">
      {productsPerCategories?.map((product) => (
        <ProductItem key={product._id} product={product}></ProductItem>
      ))}
    </div>
  );
};

export default Products;
