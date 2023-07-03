import { useState } from "react";
import "../signup.css";
import { Link, useNavigate } from "react-router-dom";
import { useMovies } from "../context/MovieProvider.jsx";

const SignUpPlanPage4 = () => {
  const { selectedPlan, setSelectedPlan } = useMovies();

  const navigate = useNavigate();
  console.log(selectedPlan);

  function handleSelectedPlan(e) {
    const plan = Number(e.target.id);

    if (plan > 0 && plan < 5) {
      setSelectedPlan(plan);
    } else {
      throw new Error("Invalid plan");
    }
  }

  return (
    <>
      <nav className="z-0 nav nav-3 bg-white">
        <img
          className="cursor-pointer logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/1600px-Logonetflix.png"
          alt=""
          onClick={() => navigate("/")}
        />

        <Link to="/signin" className="btn-logout text-underline">
          Sign In
        </Link>
      </nav>
      <div className=" w-screen bg-white ">
        <section className="container-table margin-inline  ">
          <div className="plan-head">
            <h2>step 2 of 3</h2>
            <h1>Choose the plan that’s right for you</h1>
          </div>
          <div className="plan-list">
            <div className="choose-plan">
              <i className="fas fa-check text-check"></i>
              <p>Watch all you want. Ad-free.</p>
            </div>
            <div className="choose-plan">
              <i className="fas fa-check text-check"></i>
              <p>Recommendations just for you.</p>
            </div>
            <div className="choose-plan">
              <i className="fas fa-check text-check"></i>
              <p>Change or cancel your plan anytime.</p>
            </div>
          </div>

          <div className="table-res">
            <div className="text-absolute">
              <p>Monthly price</p>
              <p>Video quality</p>
              <p>Resolution</p>
              <p>Devices you can use to watch</p>
            </div>

            <div className="tab-hidden hide">
              <input
                className="tab-input-none"
                type="radio"
                name="radiotab"
                id="tab-1"
              />

              <div className="label">
                <label className="tab-label text-table-head" htmlFor="tab-1">
                  None
                </label>
              </div>

              <div className="content-list hide">
                <p className="text-content-1">Monthly price</p>
                <p className="text-content-1">Video quality</p>
                <p className="text-content-1">Resolution</p>
                <p className="text-content-1">Devices you can use to watch</p>
              </div>
            </div>

            <div>
              <input
                className="tab-input"
                type="radio"
                name="radiotab"
                id="tab-2"
                checked={selectedPlan === 1}
              />

              <div onClick={handleSelectedPlan} className="label">
                <label
                  id={1}
                  className="tab-label text-table-head"
                  htmlFor="tab-2"
                >
                  Mobile
                </label>
              </div>

              <div className="content-list">
                <p className="text-content">IDR54,000</p>
                <p className="text-content">Good</p>
                <p className="text-content">480p</p>
                <div className="device-list">
                  <i className="fas fa-mobile-alt text-icon"></i>
                  <span className="text-icon-1">Phone</span>
                </div>
                <div className="device-list">
                  <i className="fas fa-tablet-alt text-icon"></i>
                  <span className="text-icon-1">Tablet</span>
                </div>
              </div>
            </div>

            <div>
              <input
                className="tab-input"
                type="radio"
                name="radiotab"
                id="tab-3"
                checked={selectedPlan === 2}
              />

              <div onClick={handleSelectedPlan} className="label">
                <label
                  id={2}
                  className="tab-label text-table-head"
                  htmlFor="tab-3"
                >
                  Basic
                </label>
              </div>

              <div className="content-list">
                <p className="text-content">IDR120,000</p>
                <p className="text-content">Good</p>
                <p className="text-content">720p</p>
                <div className="device-list">
                  <i className="fas fa-mobile-alt text-icon"></i>
                  <span className="text-icon-1">Phone</span>
                </div>
                <div className="device-list">
                  <i className="fas fa-tablet-alt text-icon"></i>
                  <span className="text-icon-1">Tablet</span>
                </div>
                <div className="device-list">
                  <i className="fas fa-computer text-icon"></i>
                  <span className="text-icon-1">Computer</span>
                </div>
                <div className="device-list">
                  <i className="fas fa-tv-alt text-icon"></i>
                  <span className="text-icon-1">TV</span>
                </div>
              </div>
            </div>

            <div>
              <input
                className="tab-input"
                type="radio"
                name="radiotab"
                id="tab-4"
                checked={selectedPlan === 3}
              />

              <div onClick={handleSelectedPlan} className="label">
                <label
                  id={3}
                  className="tab-label text-table-head"
                  htmlFor="tab-4"
                >
                  Standard
                </label>
              </div>

              <div className="content-list">
                <p className="text-content">IDR153,000</p>
                <p className="text-content">Better</p>
                <p className="text-content">1080p</p>
                <div className="device-list">
                  <i className="fas fa-mobile-alt text-icon"></i>
                  <span className="text-icon-1">Phone</span>
                </div>
                <div className="device-list">
                  <i className="fas fa-tablet-alt text-icon"></i>
                  <span className="text-icon-1">Tablet</span>
                </div>
                <div className="device-list">
                  <i className="fas fa-computer text-icon"></i>
                  <span className="text-icon-1">Computer</span>
                </div>
                <div className="device-list">
                  <i className="fas fa-tv-alt text-icon"></i>
                  <span className="text-icon-1">TV</span>
                </div>
              </div>
            </div>

            <div>
              <input
                className="tab-input"
                type="radio"
                name="radiotab"
                id="tab-5"
                checked={selectedPlan === 4}
              />

              <div onClick={handleSelectedPlan} className="label">
                <label
                  id={4}
                  className="tab-label text-table-head"
                  htmlFor="tab-5"
                >
                  Premium
                </label>
              </div>

              <div className="content-list">
                <p className="text-content">IDR186,000</p>
                <p className="text-content">Best</p>
                <p className="text-content">4K+HDR</p>
                <div className="device-list">
                  <i className="fas fa-mobile-alt text-icon"></i>
                  <span className="text-icon-1">Phone</span>
                </div>
                <div className="device-list">
                  <i className="fas fa-tablet-alt text-icon"></i>
                  <span className="text-icon-1">Tablet</span>
                </div>
                <div className="device-list">
                  <i className="fas fa-computer text-icon"></i>
                  <span className="text-icon-1">Computer</span>
                </div>
                <div className="device-list">
                  <i className="fas fa-tv-alt text-icon"></i>
                  <span className="text-icon-1">TV</span>
                </div>
              </div>
            </div>
          </div>

          <div className="line">
            <hr />
            <hr />
            <hr />
          </div>

          <div className="terms">
            <p className="text-terms">
              HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability
              subject to your internet service and device capabilities. Not all
              content is available in all resolutions. See our{" "}
              <span className="text-terms-1">Terms of Use</span> for more
              details.
            </p>
            <p className="text-terms margin-top">
              Only people who live with you may use your account. Watch on 4
              different devices at the same time with Premium, 2 with Standard,
              and 1 with Basic and Mobile.
            </p>
          </div>

          <form action="">
            <Link className="w-full" to="/payment">
              <button
                className="text-white btn-plan margin-inline margin-top-3 bg-netflix-red text-"
                type="submit"
                value="submit"
              >
                Next
              </button>
            </Link>
          </form>
        </section>
      </div>
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
    </>
  );
};

export default SignUpPlanPage4;
