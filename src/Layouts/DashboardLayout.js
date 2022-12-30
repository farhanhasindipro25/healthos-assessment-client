import React from "react";
import Footer from "../Pages/Shared/Footer/Footer";
import { Link, NavLink, Outlet } from "react-router-dom";
import Menubar from "../Pages/Shared/Menubar/Menubar";

const DashboardLayout = () => {
  const adminActionItems = (
    <React.Fragment>
      <li>
        <NavLink
          to="/admin-dashboard/add-products"
          className={({ isActive }) =>
            isActive
              ? "bg-slate-900 text-slate-50 font-medium flex justify-center text-sm"
              : "text-slate-500 font-semibold text-sm flex justify-center"
          }
        >
          ADD PRODUCTS
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/admin-dashboard/added-products"
          className={({ isActive }) =>
            isActive
              ? "bg-slate-900 text-slate-50 font-medium flex text-sm justify-center"
              : "text-slate-500 font-semibold text-sm flex justify-center"
          }
        >
          ADDED PRODUCTS
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/admin-dashboard/customer-lists"
          className={({ isActive }) =>
            isActive
              ? "bg-slate-900 text-slate-50 font-medium flex text-sm justify-center"
              : "text-slate-500 font-semibold text-sm flex justify-center"
          }
        >
          CUSTOMER LISTS
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/admin-dashboard/add-customers"
          className={({ isActive }) =>
            isActive
              ? "bg-slate-900 text-slate-50 font-medium flex text-sm justify-center"
              : "text-slate-500 font-semibold text-sm flex justify-center"
          }
        >
          ADD CUSTOMERS
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/admin-dashboard/orders"
          className={({ isActive }) =>
            isActive
              ? "bg-slate-900 text-slate-50 font-medium flex text-sm justify-center"
              : "text-slate-500 font-semibold text-sm flex justify-center"
          }
        >
          ORDERS
        </NavLink>
      </li>
    </React.Fragment>
  );
  return (
    <div>
      <Menubar></Menubar>
      <div className="drawer container mx-auto mt-14">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <div className="w-full navbar bg-slate-50 text-slate-900 font-medium">
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2">
              <Link className="font-semibold" to="/admin-dashboard">
                ADMIN ACTIONS
              </Link>
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">{adminActionItems}</ul>
            </div>
          </div>

          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100">{adminActionItems}</ul>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default DashboardLayout;
