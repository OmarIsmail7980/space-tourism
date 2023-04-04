import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/shared/logo.svg";
const Navbar = () => {
  return (
    <nav className="absolute top-7 flex w-full text-white">
      <div className="ml-10">
        <img src={logo} alt="logo" />
      </div>
      {/* <div className="h-[1px] bg-gray-100 w-1/3"></div> */}
      <div className="absolute flex justify-center items-center right-0 top-0 pl-16 
      pr-48 py-4 backdrop-blur-lg">
        <ul className="flex">
          <li className="px-10">
            <Link to="/">00 HOME</Link>
          </li>
          <li className="px-10">
            <Link to="/destination">01 DESTINATION</Link>
          </li>
          <li className="px-10">
            <Link to="/crew">02 CREW</Link>
          </li>
          <li className="pl-10">
            <Link to="/technology">03 TECHNOLOGY</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
