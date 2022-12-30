import React from "react";
import useTitle from "../../../Hooks/useTitle";

const AddCustomers = () => {
  useTitle("Add Customers");
  return (
    <div>
      <div>
        <form className="mb-10 p-10 rounded-xl">
          <div className="flex gap-2 my-6">
            <div className="w-full">
              <label
                className="font-medium text-slate-900"
                htmlFor="CustomerName"
              >
                Customer Name
              </label>
              <input
                type="text"
                name="customerName"
                placeholder="Enter Customer Name"
                className="input input-bordered border-slate-300 bg-slate-50 mb-3 text-secondary font-normal w-full"
              />
            </div>
          </div>

          <div className="flex gap-2 my-6">
            <div className="w-full">
              <label className="font-medium text-slate-900" htmlFor="Email ID">
                Customer Email ID
              </label>
              <input
                type="number"
                name="customerEmailID"
                placeholder="Enter Customer Email ID"
                className="input input-bordered border-slate-300 bg-slate-50 mb-3 text-secondary font-normal w-full"
              />
            </div>
          </div>

          <div className="flex gap-2 my-6">
            <div className="w-full">
              <label className="font-medium text-slate-900" htmlFor="Phone">
                Customer Phone Number
              </label>
              <input
                type="number"
                name="customerPhone"
                placeholder="Enter Customer Phone Number"
                className="input input-bordered border-slate-300 bg-slate-50 mb-3 text-secondary font-normal w-full"
              />
            </div>
          </div>
          <button className="btn btn-secondary w-full">ADD CUSTOMER</button>
        </form>
      </div>
    </div>
  );
};

export default AddCustomers;
