import React from "react";
import SlidingBanner from "../SlidingBanner/SlidingBanner";
import useTitle from "../../../Hooks/useTitle";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <SlidingBanner></SlidingBanner>
    </div>
  );
};

export default Home;
