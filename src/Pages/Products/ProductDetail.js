import React from "react";
import { useLoaderData } from "react-router-dom";

const ProductDetail = () => {
  const productDetails = useLoaderData();
  console.log(productDetails);
  const {
    _id,
    productImg,
    productName,
    productCategory,
    productPrice,
    productDescription,
    specifications,
  } = productDetails;
  return (
    <div className="min-h-screen pb-32">
      <div className="container flex justify-center flex-col mx-auto mt-20">
        <div className="mt-10">
          <img src={productImg} alt="" className="rounded-lg w-1/2 mx-auto" />
          <h2 className="text-slate-900 text-2xl mt-16 mb-4 font-bold">
            {productName}
          </h2>
          <h2 className="text-slate-900 mt-4 font-semibold">
            Product Category: {productCategory}
          </h2>
          <h2 className="text-success mt-4 font-semibold">
            <span className="text-slate-900">Price: </span>
            {productPrice} BDT
          </h2>
        </div>
      </div>
      <div className="container mx-auto my-10">
        <h2 className="font-bold text-2xl text-slate-900">Description</h2>
        <h3 className="text-slate-900 font-medium">{productDescription}</h3>
      </div>
      <div className="container mx-auto my-10">
        <h2 className="font-bold text-2xl text-slate-900">Specifications</h2>
        {specifications.map((item) => (
          <h3 key={_id} className="text-slate-900 font-medium">
            {item}
          </h3>
        ))}
      </div>
      <div className="container mx-auto">
        <button className="btn btn-secondary">ADD TO CART</button>
      </div>
    </div>
  );
};

export default ProductDetail;
