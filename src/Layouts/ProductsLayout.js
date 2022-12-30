import React from "react";
import ProductCategories from "../Pages/Products/ProductCategories";
import Products from "../Pages/Products/Products";
import Cart from "../Pages/Cart/Cart";

const ProductsLayout = () => {
  return (
    <div>
      <div className="container mx-auto mt-24 min-h-screen">
        <div className="grid gap-4 lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 grid-cols-1">
          {/* Product Categories in the left side*/}
          <ProductCategories></ProductCategories>
          {/* Products in the middle*/}
          <div className="grid gap-2 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 col-span-3">
            <Products></Products>
          </div>
          {/* Cart in the right side*/}
          <div className="w-full bg-slate-500">
            <Cart></Cart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsLayout;
