import { useEffect, useState, useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useMovies } from "../context/MovieProvider.jsx";
import { Link, useNavigate } from "react-router-dom";
import { getAllMovieAndShows } from "../utils/getMovieData.jsx";
import DefaultDropdown from "./DefaultDropdown.jsx";

function Header() {
  const inputRef = useRef();
  const { handleGetList } = useMovies();
  const [show, setShow] = useState(window.innerWidth);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const { setMovies, currProfileData } = useMovies();
  const navigate = useNavigate();

  useEffect(() => {
    if (searchValue.length > 0) {
      getAllMovieAndShows().then((data) => {
        const filteredData = data.filter((movie) => {
          return (
            movie.title?.toLowerCase().includes(searchValue?.toLowerCase()) ||
            movie.name?.toLowerCase().includes(searchValue?.toLowerCase())
          );
        });
        console.log(filteredData);
        setMovies(filteredData);
      });
    } else {
      getAllMovieAndShows().then((data) => {
        setMovies(data);
      });
    }
  }, [searchValue]);

  function handleSearch(e) {
    setSearchValue(e.target.value);
  }

  function handleShowInputBar() {
    setIsSearchVisible((previsSearchVisible) => !previsSearchVisible);
  }

  useEffect(() => {
    if (isSearchVisible && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearchVisible]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setShow(window.innerWidth);
    });
  }, [window.innerWidth]);

  return (
    <div className="fixed top-0 z-20 w-screen bg-black ">
      <div className="flex items-center justify-between w-full h-20 text-lg text-white">
        <img
          className="w-10 h-4 ml-6 flex-2 md:w-12 xl:h-8 xl:w-32"
          src="https://upload.wikimedia.org/wikipedia/commons/6/67/NewNetflixLogo.png"
          alt="netflix-logo"
        />
        {show < 665 ? (
          <div className="flex items-center justify-start w-full h-full ml-2">
            <DefaultDropdown />
          </div>
        ) : (
          <ul className="flex w-full text-[8px] sm:text-[8px] md:text-[12px] font-semibold space-x-4 ml-6 flex-1 xl:text-[16px]">
            <Link to="/home" className="">
              Home
            </Link>
            <Link to="/tv-shows" className="">
              TV Shows
            </Link>
            <Link to="/movies" className="">
              Movies
            </Link>
            <Link to="/new-and-popular" className="">
              New & Popular
            </Link>
            <Link to="/my-list" onClick={handleGetList}>
              My List
            </Link>
            <Link to="/language" className="f">
              Browse by Languages
            </Link>
          </ul>
        )}
        <div className="flex items-center justify-end flex-2 h-1/2 ">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="relative h-full flex items-center "
          >
            <input
              ref={inputRef}
              onChange={handleSearch}
              value={searchValue}
              type="text"
              className={`px-2 py-4 bg-black border-2 border-white opacity-90 transition-all duration-500 ease-in-out absolute  h-full  transform ${
                isSearchVisible
                  ? "scale-x-100 top-[50px] right-[-22px] md:right-10 md:top-0"
                  : "scale-x-0  top-[50px] right-[-22px] md:right-10 md:top-0 opacity-0"
              }`}
              placeholder="Search..."
            />
            <AiOutlineSearch
              onClick={handleShowInputBar}
              className="w-6 xl:w-10 xl:h-6 cursor-pointer z-10"
            />
          </form>
          <ul className="flex text-[10px] md:text-[14px] xl:text-[16px]">
            <li className="ml-2 ">Kids</li>
            <li className="ml-2 ">DVD</li>
          </ul>

          <img
            className="w-6 ml-2 mr-4 md:w-8 xl:w-10 xl:mr-6"
            src={currProfileData?.icon}
            alt=""
          />
          <h2
            onClick={() => {
              sessionStorage.clear();
              navigate("/");
            }}
            className="hover:underline mr-4 cursor-pointer md:mr-10 bg-netflix-red px-2 py-1 rounded-md font-signInFont"
          >
            Logout
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Header;
