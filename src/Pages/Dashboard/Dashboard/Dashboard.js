import React from "react";
import useTitle from "../../../Hooks/useTitle";

const Dashboard = () => {
  useTitle("Dashboard");
  return (
    <div className="container mx-auto mt-20">
      <h2 className="text-slate-900 text-center font-bold mb-4 text-2xl">
        Welcome to your Admin Dashboard
      </h2>
      <p className="text-center text-slate-900 font-medium">
        You may add products, customers, and view all added products, orders,
        and customers.
      </p>
    </div>
  );
};

export default Dashboard;
