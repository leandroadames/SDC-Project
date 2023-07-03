import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { useMovies } from "../context/MovieProvider";
export default function FrequentlyAskedButton() {
  const { formik } = useMovies();

  const hasErrorStyle = formik.errors.email
    ? "border-netflix-red text-netflix-red placeholder-netflix-red"
    : "border-gray-400";
  return (
    <div className="flex flex-col items-center justify-center mb-10 w-full h-full">
      <h2 className="flex w-[360px] text-center mt-10 text-lg font-bold">
        Ready to watch? Enter your email to create or restart your membership.
      </h2>
      <form className="flex flex-col w-3/4 xl:w-2/4 sm:flex-row items-center sm:items-start justify-center sm:w-3/4 mx-auto mt-8 h-1/2">
        <div
          className={`flex flex-col  justify-center items-center w-full ${hasErrorStyle}`}
        >
          <input
            id="inputSignup"
            type="text"
            className="w-full h-14 px-2 py-4 placeholder-white transition-transform duration-1000 bg-gray-600 border-2 border-white rounded opacity-80 placeholder-move-up mr-4"
            placeholder="Email address"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <p className="flex h-full items-start w-full">
            {formik.errors.email && formik.errors.email}
          </p>
        </div>
        <Link to="/signup">
          <button className="flex items-center justify-center w-[150px] xl:w-[200px]  h-14 text-xl mt-4 sm:mt-0 font-bold bg-red-600 rounded">
            Get Started
            <IoIosArrowForward className="mt-1" size={25} />
          </button>
        </Link>
      </form>
    </div>
  );
}
