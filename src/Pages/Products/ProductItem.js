import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ product, handleAddToCart }) => {
  const { _id, productImg, productName, productCategory, productPrice } =
    product;

  return (
    <div>
      <div className="card bg-slate-50 shadow-xl">
        <figure>
          <img src={productImg} className="w-full" alt="Products" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-slate-900">{productName}</h2>
          <p className="text-slate-900 font-medium">
            <span className="font-medium">Category:</span> {productCategory}
          </p>
          <p className="text-success font-medium">
            <span className="font-medium text-slate-900">Price:</span>{" "}
            {productPrice} BDT
          </p>
          <div className="card-actions flex justify-center mt-2">
            <button className="btn btn-xs btn-primary ">
              <Link to={`/products/${_id}`}>VIEW DETAILS</Link>
            </button>
            <button
              className="btn btn-xs btn-primary"
              onClick={() => handleAddToCart(product)}
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
