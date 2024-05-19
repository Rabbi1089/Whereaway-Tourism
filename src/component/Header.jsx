import { Link, NavLink } from "react-router-dom";
import useHook from "../Hook/useHook";

const Header = () => {
  const { user, logout } = useHook();
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/touristsSpots"> Tourists Spots</NavLink>
      </li>
      <li>
        <NavLink to="/addSpot">Add Spot</NavLink>
      </li>
      {!user && (
        <>
          {" "}
          <li>
            <NavLink to="/SignIn">Login</NavLink>
          </li>
          <li>
            <NavLink to="/signUp">Register</NavLink>
          </li>{" "}
        </>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar bg-gray-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Whereaway Trips</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    src={
                      user?.photoURL ||
                      "https://i.ibb.co/88cC8TK/Profile-Photo.jpg"
                    }
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <button className="btn btn-sm  btn-ghost">
                    {user?.displayName || "user name not found"}
                  </button>
                </li>
                <li>
                  <button onClick={logout} className="btn btn-sm  btn-ghost">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/SignIn">
              <button className="btn btn-sm  btn-ghost">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
