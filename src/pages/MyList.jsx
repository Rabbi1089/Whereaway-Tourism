import React, { useEffect, useState } from "react";
import useHook from "../Hook/useHook";
import { Link } from "react-router-dom";

const MyList = () => {
  const listUrl = "http://localhost:5000/myList";

  const { user } = useHook();
  console.log(user);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user data when the component mounts
    if (user?.email) {
      fetch(`${listUrl}/${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("Fetched data:", data);
          setUserData(data);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
  }, [user]);
  console.log("UserData:", userData);

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>SpotName</th>
            <th>Country Name</th>
            <th>Location</th>
            <th>ACtion</th>
            <th>ACtion</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {userData?.map((item) => (
            <tr className="bg-base-200">
              <th>1</th>
              <td>{item.spotName}</td>
              <td>{item.countryName}</td>
              <td>{item.locations}</td>
              <td>
                {" "}
                <Link to={`update/${item._id}`}>
                  <button
                    className="btn text-sm font-medium"
                    type="button"
                  >
                    Update
                  </button>
                </Link>
              </td>
              <td><button onClick={() =>  {hanldeDelete(item._id)} } className="btn text-sm" type="button">Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyList;
