import React from "react";
import Footer from "../Pages/Shared/Footer/Footer";
import { NavLink, Outlet } from "react-router-dom";
import Menubar from "../Pages/Shared/Menubar/Menubar";

const DashboardLayout = () => {
  return (
    <div>
      <Menubar></Menubar>
      <div className="container mx-auto mt-16">
        <div className="drawer drawer-mobile bg-slate-50">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col">
            <label
              htmlFor="my-drawer-2"
              className="btn btn-secondary lg:mx-0 md:mx-0 sm:mx-4 mx-24 md:mt-0 sm:mt-6 mt-6 drawer-button lg:hidden"
            >
              See Options
            </label>
            <div className="mx-4">
              <Outlet></Outlet>
            </div>
          </div>
          <div className="drawer-side bg-slate-50">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80">
              <li className="my-1">
                <NavLink
                  to="/admin-dashboard/add-products"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-slate-900 text-slate-50 rounded font-medium flex justify-center text-sm"
                      : "btn btn-outline btn-secondary flex justify-center"
                  }
                >
                  ADD PRODUCTS
                </NavLink>
              </li>
              <li className="my-1">
                <NavLink
                  to="/admin-dashboard/added-products"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-slate-900 text-slate-50 rounded font-medium flex text-sm justify-center"
                      : "btn btn-outline btn-secondary flex justify-center"
                  }
                >
                  ADDED PRODUCTS
                </NavLink>
              </li>
              <li className="my-1">
                <NavLink
                  to="/admin-dashboard/customer-lists"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-slate-900 text-slate-50 rounded font-medium flex text-sm justify-center"
                      : "btn btn-outline btn-secondary flex justify-center"
                  }
                >
                  CUSTOMER LISTS
                </NavLink>
              </li>
              <li className="my-1">
                <NavLink
                  to="/admin-dashboard/add-customers"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-slate-900 text-slate-50 rounded font-medium flex text-sm justify-center"
                      : "btn btn-outline btn-secondary flex justify-center"
                  }
                >
                  ADD CUSTOMER
                </NavLink>
              </li>
              <li className="my-1">
                <NavLink
                  to="/admin-dashboard/orders"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-slate-900 text-slate-50 rounded font-medium flex text-sm justify-center"
                      : "btn btn-outline btn-secondary flex justify-center"
                  }
                >
                  ORDERS
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DashboardLayout;
