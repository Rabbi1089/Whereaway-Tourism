import React from "react";

const Spot = () => {
  return (
    <div>
      <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <a
          rel="noopener noreferrer"
          href="#"
          className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-50"
        >
          <img
            role="presentation"
            className="object-cover w-full rounded h-44 bg-gray-500"
            src="https://source.unsplash.com/random/480x360?1"
          />
          <div className="p-6 space-y-2">
            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            Maldives
            </h3>
            <div className="">
                <h1>Travel Essentials </h1>
                <div className="flex justify-between">
                <span className="text-sm text-gray-600">Travel Time : 7 days</span>
                <span className="text-sm text-gray-600">Average Cost: 300$</span>
                </div>
                <div className="flex justify-between">
                <span className="text-xs text-gray-600">Travel Time : 7 days</span>
                <span className="text-xs text-gray-600">Average Cost: 300$</span>
                </div>
            </div>
            <p>
              Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
              neglegentur, ex has tantas percipit perfecto. At per tempor
              albucius perfecto, ei probatus consulatu patrioque mea, ei vocent
              delicata indoctum pri.
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Spot;
