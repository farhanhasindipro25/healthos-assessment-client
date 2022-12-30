import React from "react";

const ProductItem = ({ product }) => {
  const { productImg, productName, productPrice } = product;
  return (
    <div>
      <div className="card bg-slate-50 shadow-xl">
        <figure>
          <img src={productImg} className="w-full" alt="Products" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-slate-900">{productName}</h2>
          <p className="text-slate-900">
            <span className="font-medium">Price:</span> {productPrice}
          </p>
          <div className="card-actions flex justify-center mt-2">
            <button className="btn btn-xs btn-primary ">VIEW DETAILS</button>
            <button className="btn btn-xs btn-primary">ADD TO CART</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
