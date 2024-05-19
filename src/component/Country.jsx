import React from "react";

const Country = () => {
  return (
    <div>
      <section className="py-6 bg-gray-100 text-gray-900">
      <div className="text-center font-extrabold text-2xl my-8">
      Find your desired country
      </div>
   
        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
          <img
            src="https://i.ibb.co/4Z1xy24/country-3.jpg"
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 bg-gray-500 aspect-square"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src="https://i.ibb.co/cxFY1sz/country-1.jpg"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src="https://i.ibb.co/mDmtRrf/country-1.jpg"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src="https://i.ibb.co/VN28357/country-2.jpg"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src="https://i.ibb.co/dJWP9MX/country-2.png"
          />

        </div>
      </section>
    </div>
  );
};

export default Country;
