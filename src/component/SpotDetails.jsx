import React from "react";
import { useLoaderData } from "react-router-dom";

const SpotDetails = () => {
  const place = useLoaderData();
  const {image , travelTime , spotName ,averageCost , Visitor, seasonality , description , _id  , countryName , locations} = place
  //console.log(place)
  return (
    <div className="p-5 mx-auto sm:p-10 md:p-16 bg-gray-100 text-gray-800">
      <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
        <img
          src={image}
          alt=""
          className="w-full h-60 sm:h-96 bg-gray-500"
        />
        <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-50">
          <div className="space-y-2">
            <a
              rel="noopener noreferrer"
              href="#"
              className="inline-block text-2xl font-semibold sm:text-3xl"
            > {spotName}&nbsp;
             
            </a>
            <p className="text-xs text-gray-600">
              
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-xs hover:underline"
              >
                {countryName} , {locations}
              </a>
            </p>
          </div>
          <section className="p-6 bg-gray-100 text-gray-800">
	<div className="container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-3">
		<div className="flex flex-col justify-start m-2 lg:m-6">
			<p className="text-2xl font-bold leading-none lg:text-3xl">{travelTime}+</p>
			<p className="text-sm sm:text-base uppercase">days</p>
		</div>
		<div className="flex flex-col justify-start m-2 lg:m-6">
			<p className="text-2xl font-bold leading-none lg:text-3xl">{averageCost}$</p>
			<p className="text-sm sm:text-base">Average Cost</p>
		</div>
		<div className="flex flex-col justify-start m-2 lg:m-6">
			<p className="text-2xl font-bold leading-none lg:text-3xl">{Visitor}+Visit</p>
			<p className="text-sm sm:text-base">IN : {seasonality}</p>
		</div>

	</div>
</section>
          <div className="text-gray-800">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpotDetails;
