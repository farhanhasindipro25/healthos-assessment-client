import React, { useEffect, useState } from "react";
import ProductCategories from "./ProductCategories";
import axios from "axios";
import Cart from "../Cart/Cart";
import ProductItem from "./ProductItem";
import useTitle from "../../Hooks/useTitle";

const AllProducts = () => {
  useTitle("Products");
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`https://healthos-assessment-server.vercel.app/products`)
      .then((data) => {
        const loadedProducts = data.data;
        // console.log(loadedProducts);
        setAllProducts(loadedProducts);
      })
      .catch((error) => console.error(error));
  }, []);

  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    console.log(product, "Clicked");
    const newCart = [...cart, product];
    setCart(newCart);
  };
  return (
    <div>
      <div className="container mx-auto mt-24 min-h-screen">
        <div className="grid gap-4 lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 grid-cols-1">
          {/* Product Categories in the left side*/}
          <ProductCategories></ProductCategories>
          {/* Products in the middle*/}
          <div className="grid gap-2 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 col-span-3">
            {allProducts?.map((product) => (
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
    </div>
  );
};

export default AllProducts;
