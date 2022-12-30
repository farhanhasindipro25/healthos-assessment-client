import React from "react";
import useTitle from "../../../Hooks/useTitle";

const AddCustomers = () => {
  useTitle("Add Customers");
  return (
    <div>
      <div>
        <form
          className="mb-10 p-10 rounded-xl"
          //   onSubmit={handleSubmit(handleAddProduct)}
        >
          <div className="flex gap-2 my-6">
            <div className="w-3/4">
              <label
                className="font-medium text-slate-900"
                htmlFor="CustomerName"
              >
                Customer Name
              </label>
              <input
                type="text"
                // {...register("productName", {
                //   required: "Product Name is required",
                // })}
                name="customerName"
                placeholder="Enter Customer Name"
                className="input input-bordered border-slate-300 bg-slate-50 mb-3 text-secondary font-normal w-full"
              />
              {/* {errors.productName && (
                <p className="text-red-400 ml-1 mt-3" role="alert">
                  {errors.productName?.message}
                </p>
              )} */}
            </div>
            <div className="w-1/4">
              <label
                className="font-medium bg-slate-50 text-slate-900"
                htmlFor="CustomerPhoto"
              >
                Customer Photo
              </label>
              <input
                type="file"
                // {...register("productPhoto", {
                //   required: "Product Photo is required",
                // })}
                className="file-input file-input-bordered file-input-secondary border-slate-300 bg-slate-50 text-secondary font-normal w-full"
              />
              {/* {errors.productPhoto && (
                <p className="text-red-400 ml-1 mt-3" role="alert">
                  {errors.productPhoto?.message}
                </p>
              )} */}
            </div>
          </div>

          <div className="flex gap-2 my-6">
            <div className="w-full">
              <label className="font-medium text-slate-900" htmlFor="Email ID">
                Customer Email ID
              </label>
              <input
                type="number"
                // {...register("sellingPrice", {
                //   required: "Selling Price is required",
                // })}
                name="customerEmailID"
                placeholder="Enter Customer Email ID"
                className="input input-bordered border-slate-300 bg-slate-50 mb-3 text-secondary font-normal w-full"
              />
              {/* {errors.sellingPrice && (
                <p className="text-red-400 ml-1 mt-3" role="alert">
                  {errors.sellingPrice?.message}
                </p>
              )} */}
            </div>
          </div>

          <div className="flex gap-2 my-6">
            <div className="w-full">
              <label className="font-medium text-slate-900" htmlFor="Phone">
                Customer Phone Number
              </label>
              <input
                type="number"
                // {...register("sellingPrice", {
                //   required: "Selling Price is required",
                // })}
                name="customerPhone"
                placeholder="Enter Customer Phone Number"
                className="input input-bordered border-slate-300 bg-slate-50 mb-3 text-secondary font-normal w-full"
              />
              {/* {errors.sellingPrice && (
                <p className="text-red-400 ml-1 mt-3" role="alert">
                  {errors.sellingPrice?.message}
                </p>
              )} */}
            </div>
          </div>
          <button className="btn btn-secondary w-full">ADD CUSTOMER</button>
        </form>
      </div>
    </div>
  );
};

export default AddCustomers;
