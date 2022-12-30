import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const ProductCategories = () => {
  const [productCategories, setProductCategories] = useState([]);
  useEffect(() => {
    axios
      .get(`https://healthos-assessment-server.vercel.app/product-categories`)
      .then((data) => {
        const loadedCategories = data.data;
        // console.log(loadedCategories);
        setProductCategories(loadedCategories);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      <ul>
        <li className="text-slate-900 font-semibold text-lg">
          Product Categories
        </li>
        <li className="text-slate-900 font-medium mb-14 text-sm">
          Select a category for filtering{" "}
        </li>
        {productCategories.map((category) => (
          <NavLink
            key={category.categoryId}
            to={`/product-categories/${category.categoryId}`}
            className={({ isActive }) =>
              isActive
                ? "text-slate-900 underline font-semibold flex text-sm justify-start my-2"
                : "text-slate-500 font-semibold text-sm flex justify-start my-2"
            }
          >
            {category.categoryName}
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default ProductCategories;
