import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./layout/Main.jsx";
import SignUp from "./pages/SignUp.jsx";
import AuthProvider from "./provider/AuthProvider.jsx";
import SignIn from "./pages/SignIn.jsx";
import Home from "./pages/Home.jsx";
import AddSpots from "./AddSpots.jsx";
import SpotDetails from "./component/SpotDetails.jsx";
import AllTouristSpot from "./pages/AllTouristSpot.jsx";
import PrivateRoute from "./PrivateRoute/PrivateRoute.jsx";
import MyList from "./pages/MyList.jsx";
import UpdateList from "./pages/UpdateList.jsx";
import Error from "./pages/Error.jsx";

const url = "https://whereaway-server.vercel.app/spots";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement:<Error/>,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () => fetch(url),
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/touristsSpots",
        element: (
          <PrivateRoute>
            <AllTouristSpot />
          </PrivateRoute>
        ),
        loader: async () => fetch(url),
      },
      {
        path: "/SignIn",
        element: <SignIn />,
      },
      {
        path: "/myList",
        element: (
          <PrivateRoute>
            <MyList />
          </PrivateRoute>
        ),
      },
      {
        path: "/addSpot",
        element: (
          <PrivateRoute>
            <AddSpots />
          </PrivateRoute>
        ),
      },
      {
        path: "touristsSpots/SpotDetails/:id",
        element: <SpotDetails />,
        loader: async ({ params }) => fetch(`${url}/${params.id}`),
      },
      {
        path: "myList/update/:id",
        element: <UpdateList />,
        loader: async ({ params }) => fetch(`${url}/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
