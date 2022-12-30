import React from "react";
import useTitle from "../../Hooks/useTitle";
import { NavLink } from "react-router-dom";

const Products = () => {
  useTitle("Products");


  
  return (
    <div className="container mx-auto mt-24 min-h-screen">
      <div className="grid gap-4 lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 grid-cols-1">
        {/* Product Categories in the left side*/}
        <ul>
          <NavLink
            to="/products/"
            className={({ isActive }) =>
              isActive
                ? "text-slate-900 underline font-semibold flex text-sm justify-start my-2"
                : "text-slate-500 font-semibold text-sm flex justify-start my-2"
            }
          >
            GUITARS
          </NavLink>
          <NavLink
            to="/products/"
            className={({ isActive }) =>
              isActive
                ? "text-slate-900 underline font-semibold flex text-sm justify-start my-2"
                : "text-slate-500 font-semibold text-sm flex justify-start my-2"
            }
          >
            PEDALS
          </NavLink>
          <NavLink
            to="/products/"
            className={({ isActive }) =>
              isActive
                ? "text-slate-900 underline font-semibold flex text-sm justify-start"
                : "text-slate-500 font-semibold text-sm flex justify-start"
            }
          >
            PROCESSORS
          </NavLink>
        </ul>
        {/* Products in the middle*/}
        <div className="grid gap-2 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 col-span-3">
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        {/* Cart in the right side*/}
        <div className="w-full bg-slate-500"></div>
      </div>
    </div>
  );
};

export default Products;
