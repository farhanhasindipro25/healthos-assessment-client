import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../Assets/Logo/logo.png";

const Menubar = () => {
  const menuItems = (
    <React.Fragment>
      <li className="sm: text-secondary md:text-secondary lg:text-accent">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-teal-400 rounded font-semibold text-sm"
              : "text-green-800 font-medium text-sm"
          }
        >
          HOME
        </NavLink>
      </li>
      <li className="sm: text-secondary md:text-secondary lg:text-accent">
        <NavLink
          to="/categories"
          className={({ isActive }) =>
            isActive
              ? "text-teal-400 rounded font-semibold text-sm"
              : "text-green-800 font-medium text-sm"
          }
        >
          PRODUCTS
        </NavLink>
      </li>
      {/* {user?.uid && (
          <li className="sm: text-secondary md:text-secondary lg:text-accent">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? "bg-success text-secondary rounded font-semibold text-sm"
                  : "bg-secondary text-accent font-medium text-sm"
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
      <div className="navbar container mx-auto py-6">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-50 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <Link className="normal-case text-xl text-slate-900">
            <img src={logo} className="w-40 h-18" alt="" />
            <div className="flex items-center"></div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuItems}</ul>
        </div>
        <div className="navbar-end">
          <button className="bg-teal-400 text-slate-900 py-4 px-6 rounded-md font-semibold text-sm">
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menubar;
