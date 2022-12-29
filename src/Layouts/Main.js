import React from "react";
import Menubar from "../Pages/Shared/Menubar/Menubar";
import Footer from "../Pages/Shared/Footer/Footer";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Menubar></Menubar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
