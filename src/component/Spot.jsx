import React from "react";
import { Link } from "react-router-dom";

const Spot = ({place}) => {

    const {image , travelTime , spotName ,averageCost , Visitor, seasonality , description , _id} = place


  return (
    <div>
    <a
      rel="noopener noreferrer"
      href="#"
      className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-50"
    >
      <img
        role="presentation"
        className="object-cover w-full rounded h-44 bg-gray-500"
        src={image}
      />
      <div className="p-0 space-y-2">
        <h3 className="text-2xl font-semibold uppercase">
        {spotName}
        </h3>
        <div className=" bg-blue-100 border shadow-md p-3 items-center">
            <h1 className=" text-sm text-black text-center mb-2">Travel Essential</h1>
            <div className="flex justify-between">
            <span className="text-sm text-gray-600">Travel Time : {travelTime} days</span>
            <span className="text-sm text-gray-600">Average Cost: {averageCost}$</span>
            </div>
            <div className="flex justify-between">
            <span className="text-sm text-gray-600">People Travel/years : {Visitor}</span>
            <span className="text-sm text-gray-600">Seasonability:{seasonality}</span>
            </div>
        </div>
        <div className=" max-h-56">
        <p className="text-wrap">
{description.slice(0, 250)}...
        </p>
        </div>
        <Link to={`SpotDetails/${_id}`}>
        <button className="btn border border-r-4 w-full">Show Details</button>
        </Link>
 
      </div>
    </a>
  </div>
  );
};

export default Spot;
