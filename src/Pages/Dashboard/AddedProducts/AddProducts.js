import React from "react";
import useTitle from "../../../Hooks/useTitle";

const AddProducts = () => {
  useTitle("Add Products");
  return (
    <div>
      <div>
        <form className="mb-10 p-10 rounded-xl">
          <div className="flex gap-2 my-6">
            <div className="w-3/4">
              <label
                className="font-medium text-slate-900"
                htmlFor="ProductName"
              >
                Product Name
              </label>
              <input
                type="text"
                name="productName"
                placeholder="Enter Product Name"
                className="input input-bordered border-slate-300 bg-slate-50 mb-3 text-secondary font-normal w-full"
              />
            </div>
            <div className="w-1/4">
              <label
                className="font-medium bg-slate-50 text-slate-900"
                htmlFor="ProductName"
              >
                Product Photo
              </label>
              <input
                type="file"
                className="file-input file-input-bordered file-input-secondary border-slate-300 bg-slate-50 text-secondary font-normal w-full"
              />
            </div>
          </div>
          <div className="flex gap-2 my-6">
            <div className="w-full">
              <label
                className="font-medium text-slate-900"
                htmlFor="ProductCategory"
              >
                Product Category
              </label>
              <select
                name="productCategory"
                className="select select-secondary text-secondary select-bordered border-slate-300 w-full bg-slate-50"
              >
                <option className="text-secondary">Guitars</option>
                <option className="text-secondary">Pedals</option>
                <option className="text-secondary">Processors</option>
              </select>
            </div>
          </div>
          <div className="flex gap-2 my-6">
            <div className="w-full">
              <label
                className="font-medium text-slate-900"
                htmlFor="SellingPrice"
              >
                Price
              </label>
              <input
                type="number"
                name="sellingPrice"
                placeholder="Enter Price"
                className="input input-bordered border-slate-300 bg-slate-50 mb-3 text-secondary font-normal w-full"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label
              className="font-medium text-slate-900"
              htmlFor="ProductDescription"
            >
              Product Description
            </label>
            <textarea
              name="productDescription"
              className="textarea textarea-secondary text-secondary textarea-bordered border-slate-300 bg-slate-50"
              placeholder="Product Description"
            ></textarea>
          </div>
          <button className="btn btn-secondary w-full my-6">ADD PRODUCT</button>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
