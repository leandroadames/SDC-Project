import React from "react";
import "../signup.css";
import { Link } from "react-router-dom";
import { useMovies } from "../context/MovieProvider";

export default function SignUpPlanPage2() {
  const { formik } = useMovies();

  const hasErrorStyle = formik.errors.email
    ? "border-netflix-red text-netflix-red placeholder-netflix-red"
    : "border-gray-400";

  const hasErrorStylePass = formik.errors.password
    ? "border-netflix-red text-netflix-red placeholder-netflix-red"
    : "border-gray-400";

  return (
    <div className="flex flex-col h-screen">
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
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col items-center justify-center mt-20 mb-20"
        >
          <p className="flex text-xs w-full justify-start">
            STEP&nbsp;
            <span className="font-bold">1&nbsp;</span>
            OF&nbsp;<span className="font-bold">3</span>
          </p>
          <h2 className="w-[70%] md:w-[480px] mt-2 mb-4 text-3xl text-center  font-bold whitespace-normal">
            Create a password to start your membership
          </h2>
          <p className="text-xl font-semibold text-center w-[80%] md:w-[380px]">
            Just a few more steps and you're done! We hate paperwork, too.
          </p>
          <div className={`${hasErrorStyle} flex flex-col w-3/4 md:w-full`}>
            <input
              id="inputSignup"
              name="email"
              className="w-full px-2 py-5 mt-2 placeholder-black transition-transform duration-1000 border border-black rounded p border-1 placeholder-move-up"
              placeholder={formik.values.email ? formik.values.email : "Email"}
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.email && formik.errors.email}
          </div>
          <div className={`${hasErrorStylePass} flex flex-col w-3/4 md:w-full`}>
            <input
              name="password"
              id="inputSignup"
              className="w-full px-2 py-5 mt-2 placeholder-black transition-transform duration-1000 border border-black rounded placeholder-move-up border-1"
              placeholder="Add a password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.password && formik.errors.password}
          </div>
          <button className="w-3/4 md:w-full rounded mt-6 h-16 md:h-[75px] text-3xl font-semibold text-white bg-netflix-red">
            Next
          </button>
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
