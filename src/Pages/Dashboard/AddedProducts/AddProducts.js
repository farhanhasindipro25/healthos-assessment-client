import React from "react";

const AddProducts = () => {
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
                htmlFor="ProductName"
              >
                Product Name
              </label>
              <input
                type="text"
                // {...register("productName", {
                //   required: "Product Name is required",
                // })}
                name="productName"
                placeholder="Enter Product Name"
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
                htmlFor="ProductName"
              >
                Product Photo
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
              <label
                className="font-medium text-slate-900"
                htmlFor="ProductCategory"
              >
                Product Category
              </label>
              <select
                name="productCategory"
                // {...register("productCategory", {
                //   required: "Product Category is required",
                // })}
                className="select select-secondary text-secondary select-bordered border-slate-300 w-full bg-slate-50"
              >
                <option className="text-secondary">Guitars</option>
                <option className="text-secondary">Pedals</option>
                <option className="text-secondary">Amplifiers</option>
              </select>
              {/* {errors.productCategory && (
                <p className="text-red-400 ml-1 mt-3" role="alert">
                  {errors.productCategory?.message}
                </p>
              )} */}
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
                // {...register("sellingPrice", {
                //   required: "Selling Price is required",
                // })}
                name="sellingPrice"
                placeholder="Enter Price"
                className="input input-bordered border-slate-300 bg-slate-50 mb-3 text-secondary font-normal w-full"
              />
              {/* {errors.sellingPrice && (
                <p className="text-red-400 ml-1 mt-3" role="alert">
                  {errors.sellingPrice?.message}
                </p>
              )} */}
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
              //   {...register("productDescription", {
              //     required: "Product Description is required",
              //   })}
              className="textarea textarea-secondary text-secondary textarea-bordered border-slate-300 bg-slate-50"
              placeholder="Product Description"
            ></textarea>
            {/* {errors.productDescription && (
              <p className="text-red-400 ml-1 mt-3" role="alert">
                {errors.productDescription?.message}
              </p>
            )} */}
          </div>
          <button className="btn btn-secondary w-full my-6">ADD PRODUCT</button>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
