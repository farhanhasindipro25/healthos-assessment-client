import React, { useEffect, useState } from "react";
import useTitle from "../../../Hooks/useTitle";
import axios from "axios";

const AddedProducts = () => {
  useTitle("Added Products");
  const [addedProducts, setAddedProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`https://healthos-assessment-server.vercel.app/products`)
      .then((data) => {
        const loadedProducts = data.data;
        console.log(loadedProducts);
        setAddedProducts(loadedProducts);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <div>
        <div className="overflow-x-auto w-full mt-10">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th className="text-center">Product Photo</th>
                <th className="text-center">Product Name</th>
                <th className="text-center">Product Category</th>
                <th className="text-center">Product Price</th>
              </tr>
            </thead>
            <tbody>
              {addedProducts.map((product, i) => (
                <tr key={product._id}>
                  <td className="text-slate-900 text-center font-semibold bg-slate-50">
                    {i + 1}
                  </td>
                  <td className="bg-slate-50">
                    <div className="avatar">
                      <div className="w-24 flex justify-center rounded">
                        <img src={product.productImg} alt="Added Products" />
                      </div>
                    </div>
                  </td>
                  <td className="text-slate-900 text-center font-semibold bg-slate-50">
                    {product.productName}
                  </td>
                  <td className="text-slate-900 text-center font-semibold bg-slate-50">
                    {product.productCategory}
                  </td>
                  <td className="text-slate-900 text-center font-semibold bg-slate-50">
                    {product.productPrice}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AddedProducts;
