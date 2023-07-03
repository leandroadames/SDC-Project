import React from "react";
import checkMarkImg from "../assets/checkmark.webp";
import { IoMdCheckmark } from "react-icons/io";
import { Link } from "react-router-dom";

export default function SignUpPlanPage3() {
  return (
    <div className="flex flex-col h-screen ">
      <nav className="nav nav-3 bg-white">
        <Link to="/">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/1600px-Logonetflix.png"
            alt=""
          />
        </Link>
        <Link to="/signin" className="btn-logout text-underline">
          Sign In
        </Link>
      </nav>
      <section className="flex items-start bg-white justify-center h-full">
        <form className="flex flex-col items-center justify-center mt-20 mb-20">
          <img src={checkMarkImg} className="mb-8 w-14" />
          <p className="flex text-md ">
            STEP&nbsp;<p className="font-bold">2&nbsp;</p>OF&nbsp;{" "}
            <p className="font-bold">3</p>
          </p>
          <h2 className=" w-[480px] mt-2 mb-4 text-3xl text-center font-bold whitespace-normal">
            Choose your plan.
          </h2>
          <div className="flex items-center justify-center w-full h-full mt-6 mb-6 mr-6">
            <IoMdCheckmark className="mr-4 text-netflix-red" size={40} />
            <p className="text-xl font-semibold w-[300px] ">
              No commitments, cancel anytime.
            </p>
          </div>
          <div className="flex items-center justify-center w-full h-full mb-6 mr-6">
            <IoMdCheckmark className="mr-4 text-netflix-red" size={40} />
            <p className="text-xl font-semibold w-[300px] ">
              Endless entertainment for one low price.
            </p>
          </div>
          <div className="flex items-center justify-center w-full h-full mb-6 mr-6">
            <IoMdCheckmark className="mr-4 text-netflix-red" size={40} />
            <p className="text-xl font-semibold w-[300px] ">
              Enjoy Netflix on all your devices.
            </p>
          </div>
          <Link className="w-3/4 h-full" to="/signup4">
            <button className="w-full rounded mt-6 h-[75px] text-3xl font-semibold text-white bg-netflix-red">
              Next
            </button>
          </Link>
        </form>
      </section>
      <footer className="footer footer-gray ">
        <div className="footer-container margin-inline">
          <p>
            Questions? <br />
            Call 007-803-321-2130
          </p>
          <div className="links">
            <ul className="">
              <li>
                <a className="text-terms text-underline" href="">
                  FAQ
                </a>
              </li>
              <li>
                <a className="text-terms text-underline" href="">
                  Cookie Preferences
                </a>
              </li>
            </ul>

            <ul>
              <li>
                <a className="text-terms text-underline" href="">
                  Help Center
                </a>
              </li>
              <li>
                <a className="text-terms text-underline" href="">
                  Corporate Information
                </a>
              </li>
            </ul>

            <a className="text-terms text-underline" href="">
              Terms of Use
            </a>

            <a className="text-terms text-underline" href="">
              Privacy
            </a>
          </div>

          <div className="language">
            <select className="language-select" onChange="location=this.value;">
              <option value="english" selected>
                English
              </option>
              <option value="">Bahasa Indonesia</option>
            </select>
            <div className="language-icon">
              <i className="fas fa-globe globe"></i>
              <i className="fas fa-chevron-down chevron"></i>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
