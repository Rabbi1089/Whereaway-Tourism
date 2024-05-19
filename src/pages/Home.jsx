import React from "react";
import Slider from "../component/Slider";
import AllSpot from "../component/AllSpot";
import { useLoaderData } from "react-router-dom";
import Country from "../component/Country";
import CallToAction from "../component/CallToAction";
import AppStore from "../component/AppStore";

const Home = () => {
  const spot = useLoaderData();
  //console.log(spot.length)
  return (
    <div className="bg-gray-100">
      <Slider />
      <AllSpot spot={spot} />
      <AppStore />
      <Country />
      <CallToAction />
    </div>
  );
};

export default Home;
