import React from "react";
import computerImg from "../assets/devices-img.webp";
import { Link } from "react-router-dom";

export default function SignUpPlanPage1() {
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
      <section className="flex items-start justify-center h-full bg-white">
        <form className="flex flex-col items-center justify-center mt-20 mb-20">
          <img src={computerImg} className="w-[50%]" alt="Computer" />
          <p className="text-xs">
            STEP <span className="font-bold">1</span> OF{" "}
            <span className="font-bold">3</span>
          </p>
          <h2 className="whitespace-normal mt-2 mb-4 text-3xl font-bold text-center w-96">
            Finish setting up your account
          </h2>
          <p className="text-xl font-semibold max-w-[330px] text-center">
            Netflix is personalized for you. Create a password to start watching
            Netflix.
          </p>
          <Link className="w-full flex justify-center" to="/signup2">
            <button className="w-3/4 rounded mt-6 h-[75px] text-3xl font-semibold text-white bg-netflix-red">
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
