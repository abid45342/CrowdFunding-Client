import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { IoMoon, IoSunny } from 'react-icons/io5';
import { FaHandsHelping, FaRegBuilding } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, handleLogout, setDark, dark } = useContext(AuthContext);

  return (
    <div className="navbar bg-base-100 sticky top-0 z-[10] ">
      <div className="navbar-start sticky flex items-center">

         <FaHandsHelping size={40} className="text-teal-500 ml-3" />
        <a className="btn btn-ghost text-xl">IgnitionDeck</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/campaigns">All Campaign</NavLink>
          </li>
          {user?.email && (
            <li>
              <NavLink to="/addCampaign">Add New Campaign</NavLink>
            </li>
          )}
          {user?.email && (
            <li>
              <NavLink to={`/myCampaign/${user?.email}`}>My Campaign</NavLink>
            </li>
          )}
          {user?.email && (
            <li>
              <NavLink to={`/myDonation/${user?.email}`}>My Donation</NavLink>
            </li>
          )}
          <li>
            <NavLink to="/about">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/support">Support</NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <button
          className="mr-20 text-xl btn rounded-2xl bg-gray-200"
          onClick={() => {
            setDark(!dark);
          }}
        >
          {dark ? <IoMoon /> : <IoSunny />}
        </button>

        {user?.email ? (
          <div className="flex items-center gap-4">
            <div className="relative group">
              <img
                src={user?.photoURL}
                alt="user"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="absolute bottom-0 top-12 left-4 text-center bg-opacity-60 text-gray rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity">
                <p>{user?.name}</p>
              </div>
            </div>
            <button 
              onClick={() => {
                handleLogout();
              }}
              className="btn  mr-10"
            >
              Log out
            </button>
          </div>
        ) : (
          <div className="flex gap-3 mx-5">
            <NavLink to="/login" className="btn">
              Login
            </NavLink>
            <NavLink to="/register" className="btn">
              Register
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
