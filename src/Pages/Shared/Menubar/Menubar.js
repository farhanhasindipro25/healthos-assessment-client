import React from "react";
import { Link, NavLink } from "react-router-dom";

const Menubar = () => {
  const menuItems = (
    <React.Fragment>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-slate-100 bg-slate-900 rounded-none font-semibold text-sm"
              : "text-slate-500 font-semibold text-sm"
          }
        >
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive
              ? "text-slate-100 bg-slate-900 rounded-none font-semibold text-sm"
              : "text-slate-500 font-semibold text-sm"
          }
        >
          PRODUCTS
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/admin-dashboard"
          className={({ isActive }) =>
            isActive
              ? "text-slate-100 bg-slate-900 rounded-none font-semibold text-sm"
              : "text-slate-500 font-semibold text-sm"
          }
        >
          DASHBOARD
        </NavLink>
      </li>

      {/* {user?.uid && (
          <li className="sm: text-secondary md:text-secondary lg:text-accent">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? "bg-success text-secondary rounded-none font-semibold text-sm"
                9: "bg-slate-100 text-accent font-medium text-sm"
              }
            >
              DASHBOARD
            </NavLink>
          </li>
        )} */}
    </React.Fragment>
  );
  return (
    <div className="bg-slate-50">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#0f1119"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-50 rounded-none-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <Link className="normal-case text-slate-900 font-semibold text-xl">
            STRING SYMPHONY
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuItems}</ul>
        </div>
        <div className="navbar-end">
          <Link to="/login">
            <button className="btn btn-secondary btn-outline">LOGIN</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menubar;
