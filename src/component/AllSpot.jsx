import React from "react";
import Spot from "./Spot";

const AllSpot = ({ spot }) => {
  console.log(typeof spot);
  return (
    <div>
      <section className="text-gray-800 mt-4 max-w-[1400px]">
        <div className="container max-w-7xl p-6 mx-auto space-y-6 sm:space-y-12">
          <div
            rel="noopener noreferrer"
            href="#"
            className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-gray-50"
          >
            <img
              src="https://i.ibb.co/sQYj1tk/travel.jpg"
              alt=""
              className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500"
            />
            <div className="p-6 space-y-2 lg:col-span-5">
              <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                Travel Broadens The Mind
              </h3>

              <p>
                Traveling can open up a whole new world of possibilities and
                help us become better versions of ourselves. So if you’re
                looking for a way to enrich your life, then remember the world
                is your oyster! At Cultivating Connections Travel Planners, we
                help our clients follow their passions wherever in the world
                they may go. Contact us today for a complimentary travel
                consultation!
              </p>
            </div>
          </div>
          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {spot.map((place) => (
              <Spot place={place}></Spot>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllSpot;
