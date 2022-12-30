import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";
import ProductItem from "./ProductItem";
import ProductCategories from "./ProductCategories";
import Cart from "../Cart/Cart";

const Products = () => {
  useTitle("Products");
  const productsPerCategories = useLoaderData();
  // console.log(productsPerCategories);

  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    console.log(product, "Clicked");
    const newCart = [...cart, product];
    setCart(newCart);
  };
  return (
    <div className="container mx-auto mt-24 min-h-screen">
      <div className="grid gap-4 lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 grid-cols-1">
        {/* Product Categories in the left side*/}
        <ProductCategories></ProductCategories>
        {/* Products in the middle*/}
        <div className="grid gap-2 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 col-span-3">
          {productsPerCategories?.map((product) => (
            <ProductItem
              key={product._id}
              product={product}
              handleAddToCart={handleAddToCart}
            ></ProductItem>
          ))}
        </div>
        {/* Cart in the right side*/}
        <div className="w-full">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Products;
