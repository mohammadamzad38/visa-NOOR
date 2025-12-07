import { useContext, useState } from "react";
import { Links, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider";

export default function Header() {
  const { user, logOut, loading } = useContext(AuthContext);
  const [hoverd, setHoverd] = useState(false);

  if (loading) {
    return <p className="text-[#E29198]">Loading.....</p>;
  }
  const links = (
    <>
      <li>
        <NavLink to="/home">Home</NavLink>
      </li>
      <li>
        <NavLink to="/all-visa">All visas</NavLink>
      </li>
      <li>
        <NavLink to="/add-visa">Add visa</NavLink>
      </li>
      <li>
        <NavLink to="/my-added-visa">My added visas</NavLink>
      </li>
      <li>
        <NavLink to="/my-visa-applications">My Visa applications</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
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
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      {user ? (
        <div>
          <div
            onMouseEnter={() => setHoverd(true)}
            onMouseLeave={() => setTimeout(() => setHoverd(false), 2000)}
            className="text-white max-w-[150px] overflow-hidden px-4 py-2 rounded-t-2xl  bg-[#8DB170] cursor-pointer"
          >
            {user.photoURL ? <>{user.photoURL}</> : "No Image"}
          </div>
          {hoverd ? (
            <div className="p-5 rounded-b-xl bg-[#86ADC4]">
              <p>{user.name}</p>
              <button onClick={() => logOut()} className="btn">
                Logout
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        <div className="navbar-end space-x-4 ">
          <a href="/signin" className="btn bg-[#476A49]">
            Sign-In
          </a>
          <a href="/signup" className="btn bg-[#2D4952]">
            Sign-Up
          </a>
        </div>
      )}
    </div>
  );
}
