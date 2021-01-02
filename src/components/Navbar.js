import React from "react";
import { ReactComponent as YourSvg } from "../assets/logo.svg";

function Navbar() {
  return (
    <nav className="font-sans items-center flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-white shadow sm:items-baseline w-full">
      <div
        className="flex flex-row
  "
      >
        <div className="container h-8">
          <YourSvg className="h-10" />
        </div>
        <div className="pt-1">
          <a className="text-base no-underline  text-grey-darkest font-sans font-bold">
            Intugine
          </a>
        </div>
      </div>
      <div className="flex p-4">
        <div className="sm:mb-0 self-center">
          {/* <!-- <div className="h-10" style="display: table-cell, vertical-align: middle;"> --> */}
          <a
            href="#"
            className="text-sm font-semibold no-underline text-black hover:text-blue-dark ml-2 px-1"
          >
            Home
          </a>
          <a
            href="#"
            className="text-sm font-semibold no-underline text-grey-darker hover:text-blue-dark ml-2 px-1"
          >
            Brands
          </a>
          {/* <!-- <a href="/two" className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">About Us</a> --> */}
          <a
            href="#"
            className="text-sm font-semibold no-underline text-grey-darker hover:text-blue-dark ml-2 px-1"
          >
            Transporters
          </a>
          {/* <!-- </div> --> */}
        </div>
        <div className="bg-gray-400 rounded-full p-1">
          <svg
            className="h-5"
            xmlns="http://www.w3.org/2000/svg"
            width="27.346"
            height="26.044"
            viewBox="0 0 27.346 26.044"
          >
            <g id="profile" transform="translate(0 -13.415)">
              <path
                id="Path_27"
                data-name="Path 27"
                d="M137.306,28.031a7.308,7.308,0,1,0-7.319-7.319A7.321,7.321,0,0,0,137.306,28.031Zm0-12.708a5.388,5.388,0,1,1-5.388,5.388A5.4,5.4,0,0,1,137.306,15.323Z"
                transform="translate(-123.678 0)"
                fill="#2e384d"
              />
              <path
                id="Path_28"
                data-name="Path 28"
                d="M.965,351.074H26.381a.958.958,0,0,0,.965-.965,9.194,9.194,0,0,0-9.183-9.183H9.183A9.194,9.194,0,0,0,0,350.109.958.958,0,0,0,.965,351.074Zm8.217-8.217h8.981a7.247,7.247,0,0,1,7.185,6.286H2A7.267,7.267,0,0,1,9.183,342.857Z"
                transform="translate(0 -311.615)"
                fill="#2e384d"
              />
            </g>
          </svg>
        </div>
        <div className="pt-3 p-2">
          <svg
            width="14"
            height="8"
            viewBox="0 0 14 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L7 7L13 1"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
