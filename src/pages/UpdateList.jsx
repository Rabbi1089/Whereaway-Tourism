import React from "react";
import { useLoaderData } from "react-router-dom";
import useHook from "../Hook/useHook";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

const UpdateList = () => {
  const updateData = useLoaderData();
  const {image , travelTime , spotName ,averageCost , Visitor, seasonality , description , _id ,countryName , locations} = updateData
  console.log(image)
  const { user } = useHook();

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const userEmail = user.email;
    const displayName = user.displayName;
    const spot = { ...data, userEmail, displayName };

    //send data to server
    fetch("http://localhost:5000/addSpot", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(spot),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Spot added successful");
      });
  };

  return (
    <div className="flex justify-center border mt-2">
      <div className="flex flex-col w-5/6 justify-center p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
        <div className="mb-2 text-center">
          <h1 className="my-3 text-4xl font-bold">Add Tourists Spot</h1>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate=""
          action=""
          className="space-y-12"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="image" className="block mb-2 text-sm">
                Image
              </label>
              <input
                type="text"
                id="image "
                defaultValue={image}
           
                className="w-full px-3 py-2 border rounded-md border-gray-200 bg-gray-100 text-gray-900"
                {...register("image", { required: true })}
              />
              {errors.image && (
                <span className=" text-red-500">This field is required</span>
              )}
            </div>
            <div>
              {/* Tourists spot name */}
              <div>
                <label
                  htmlFor="Tourists spot name"
                  className="block mb-2 text-sm"
                >
                  Tourists spot name
                </label>
                <input
                  type="text"
                  name="tourists_spot_name"
                  id="spotName"
               defaultValue={spotName}
                  className="w-full px-3 py-2 border rounded-md border-gray-200 bg-gray-100 text-gray-900"
                  {...register("spotName", { required: true })}
                />
                {errors.spotName && (
                  <span className=" text-red-500">This field is required</span>
                )}
              </div>
              {/* Tourists spot name */}

              {/* country and locations section */}
              <div className="md:flex md:justify-between mt-3">
                <div className="md:w-1/2 md:pr-3">
                  <label htmlFor="country_Name" className="block mb-2 text-sm">
                    Country Name
                  </label>
                  <input
                    type="text"
                    name="country_Name"
                    id="country_Name"
                    defaultValue={countryName}
                    className="w-full px-3 py-2 border rounded-md border-gray-200 bg-gray-100 text-gray-900"
                    {...register("countryName", { required: true })}
                  />
                  {errors.countryName && (
                    <span className=" text-red-500">
                      This field is required
                    </span>
                  )}
                </div>
                <div className="md:w-1/2 md:pl-3">
                  <label htmlFor="locations" className="block mb-2 text-sm">
                    locations
                  </label>
                  <input
                    type="text"
                    name="locations"
                    id="locations"
                    defaultValue={locations}
                    className="w-full px-3 py-2 border rounded-md border-gray-200 bg-gray-100 text-gray-900"
                    {...register("locations", { required: true })}
                  />
                  {errors.locations && (
                    <span className=" text-red-500">
                      This field is required
                    </span>
                  )}
                </div>
              </div>
              {/* country and locations section */}

              {/* short description */}
              <div className=" mt-3">
                <label
                  htmlFor="Tourists spot name"
                  className="block mb-2 text-sm"
                >
                  Spot description
                </label>
                <input
                  type="text"
                  name="description"
                  id="description"
                 defaultValue={description}
                  className="w-full px-3 py-2 border rounded-md border-gray-200 bg-gray-100 text-gray-900"
                  {...register("description", { required: true })}
                />
                {errors.description && (
                  <span className=" text-red-500">This field is required</span>
                )}
              </div>
              {/* short description end*/}

              {/* coast and seasonability*/}

              <div className="md:flex md:justify-between mt-3">
                <div className="md:w-1/2 md:pr-3">
                  <label htmlFor="average_cost" className="block mb-2 text-sm">
                    Average cost
                  </label>
                  <input
                    type="text"
                    name="average_cost"
                    id="average_cost"
                    defaultValue={averageCost}
                    className="w-full px-3 py-2 border rounded-md border-gray-200 bg-gray-100 text-gray-900"
                    {...register("averageCost")}
                  />
                </div>
                <div className="md:w-1/2 md:pl-3">
                  <label htmlFor="seasonality " className="block mb-2 text-sm">
                    Seasonality
                  </label>
                  <input
                    type="seasonality "
                    name="seasonality "
                    id="seasonality "
                    defaultValue={seasonality}
                    className="w-full px-3 py-2 border rounded-md border-gray-200 bg-gray-100 text-gray-900"
                    {...register("seasonality")}
                  />
                </div>
              </div>
              {/* cost and seasonability end */}
              {/* travel time and average visitor */}

              <div className="md:flex md:justify-between mt-3">
                <div className="md:w-1/2 md:pr-3">
                  <label htmlFor="travel_time " className="block mb-2 text-sm">
                    Travel time
                  </label>
                  <input
                    type="travel_time "
                    name="travel_time "
                    id="travel_time "
                    defaultValue={travelTime}
                    className="w-full px-3 py-2 border rounded-md border-gray-200 bg-gray-100 text-gray-900"
                    {...register("travelTime")}
                  />
                </div>
                <div className="md:w-1/2 md:pl-3">
                  <label
                    htmlFor="totalVisitorsPerYear  "
                    className="block mb-2 text-sm"
                  >
                    Total Visitors Per Year
                  </label>
                  <input
                    type="totalVisitorsPerYear  "
                    name="totalVisitorsPerYear  "
                    id="totalVisitorsPerYear  "
                    defaultValue={Visitor}
                    className="w-full px-3 py-2 border rounded-md border-gray-200 bg-gray-100 text-gray-900"
                    {...register("Visitor")}
                  />
                </div>
              </div>
              {/* travel time and average visitor end*/}
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="sub,it"
                className="w-full px-8 py-3 font-semibold rounded-md text-gray-900 bg-blue-400"
              >
                Add Details
              </button>
            </div>
          </div>
        </form>
      </div>
      <Toaster />
    </div>
  );
};

export default UpdateList;
