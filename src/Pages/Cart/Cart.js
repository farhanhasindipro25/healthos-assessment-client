import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ cart }) => {
  console.log(cart);
  let total = 0;
  for (const product of cart) {
    total += parseInt(product.productPrice);
  }
  return (
    <div className="p-10">
      <h2 className="text-lg font-semibold text-slate-900">
        Items Selected: {cart.length}
      </h2>
      {cart.map((item) => (
        <div className="my-2">
          <h2 className="text-slate-900 font-medium">
            <span className="font-semibold">Item: </span>
            {item.productName}
          </h2>
          <h2 className="text-slate-900 font-medium">
            <span className="font-semibold">Product Price: </span>{" "}
            {item.productPrice}
          </h2>
        </div>
      ))}
      <h2 className="text-slate-900 font-medium">
        <span className="font-semibold">Total Price: </span> {total}{" "}
      </h2>
      <button className="btn btn-secondary mt-10">
        <Link>PROCEED TO CHECKOUT</Link>
      </button>
    </div>
  );
};

export default Cart;
