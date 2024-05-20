import React, { useEffect, useState } from "react";
import useHook from "../Hook/useHook";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { data } from "autoprefixer";

//documents mongodb.com/docs/drivers/node/current/usage-examples/deleteOne/

const MyList = () => {
  const listUrl = "https://whereaway-server.vercel.app/myList";

  const { user } = useHook();
  //console.log(user);
  const [userData, setUserData] = useState(null);
  console.log(userData)

  useEffect(() => {
    if (user?.email) {
      fetch(`${listUrl}/${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          setUserData(data);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(id);
        fetch(`https://whereaway-server.vercel.app/spots/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount === 1) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaining = userData.filter(spot => spot._id !== id);
              setUserData(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Serial</th>
            <th>SpotName</th>
            <th>Country Name</th>
            <th>Location</th>
            <th>ACtion</th>
            <th>ACtion</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {userData?.map((item, idx) => (
            <tr className="bg-base-200" id={idx}>
              <th>{idx + 1}</th>
              <td>{item.spotName}</td>
              <td>{item.countryName}</td>
              <td>{item.locations}</td>
              <td>
                {" "}
                <Link to={`update/${item._id}`}>
                  <button className="btn text-sm font-medium" type="button">
                    Update
                  </button>
                </Link>
              </td>
              <td>
                <button
                  onClick={() => {
                    handleDelete(item._id);
                  }}
                  className="btn text-sm"
                  type="button"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyList;
