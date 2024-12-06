import { useContext } from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const navigate = useNavigate();
  const { user , setUser } = useContext(AuthContext);
  return (
    <div className="navbar bg-base-100">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/all-campaign">All Campaign</NavLink>
            </li>
            <li>
              <NavLink to="/addCampaign">Add New Campaign</NavLink>
            </li>
            <li>
              <NavLink to="/my-donation">My Donation</NavLink>
            </li>

          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Crowd Funding</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/all-campaign">All Campaign</NavLink>
          </li>
          <li>
            <NavLink to="/addCampaign">Add New Campaign</NavLink>
          </li>
          <li>
            <NavLink to="/my-donation">My Donation</NavLink>
          </li>

        </ul>
      </div>
      <div className="navbar-end">
       {
        user&&user?.email?(
          <div className="flex items-center gap-4">
              {/* User Photo with Hover Effect */}
              <div className="relative group">
                <img
                  src={user?.photoURL}
                  alt="user"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="absolute bottom-0  top-12 left-4 text-center  bg-opacity-60 text-gray rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  <p>{user?.displayName}</p>
                </div>
              </div>

              {/* Log Out Button */}
              <button
                onClick={() => {
                  setUser(null); // Log out by clearing user state
                }}
                className="btn"
              >
                Log out
              </button>
            </div>
        ):(

          <div className="flex gap-3">
          <NavLink to='/login'  className="btn">Login</NavLink>
          <NavLink to='/register' className="btn" >Register</NavLink>
          </div>
        )
       }
      </div>
    </div>
  );
};

export default Navbar;
