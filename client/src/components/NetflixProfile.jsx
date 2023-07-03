import React from "react";
import { Link } from "react-router-dom";
import ProfileIcon from "./ProfileIcon";
import AddProfileIcon from "../components/AddProfileIcon";
export default function NetflixProfile() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-600">
      <h2 className="text-2xl text-white font-semibold font-signInFont">
        Who's Watching?
      </h2>
      <div className="flex w-screen justify-center h-3/4">
        <ul
          className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-2 mb-8 profile-list"
          style={{ justifyContent: "center" }}
        >
          <ProfileIcon />

          <AddProfileIcon />

          {/* Add more <li> elements with <Link> and <a> as needed */}
        </ul>
      </div>
      <button className="block px-6 py-4 mx-auto text-2xl text-gray-500 transition duration-200 bg-transparent border border-gray-500 border-none cursor-pointer btn hover:border-white hover:text-white">
        Manage profiles
      </button>
    </div>
  );
}
