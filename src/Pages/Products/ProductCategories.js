import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const ProductCategories = () => {
  const [productCategories, setProductCategories] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/product-categories`)
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
