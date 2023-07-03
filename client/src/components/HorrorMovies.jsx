import React from "react";
import { useMovies } from "../context/MovieProvider.jsx";
import Movie from "./Movie.jsx";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

function HorrorMovies({ title, id }) {
  const { movies } = useMovies();

  // Filter movies by type for popular movies
  const popularMovies = movies
    .filter((movie) => movie.type === 5)
    .map((movie, id) => {
      return (
        <>
          <Movie key={id} movie={movie} />
        </>
      );
    });

  function scrollLeft() {
    const slider = document.getElementById("slider" + id);
    slider.scrollLeft -= 500;
  }

  function scrollRight() {
    const slider = document.getElementById("slider" + id);
    slider.scrollLeft += 500;
  }

  return (
    <>
      {popularMovies.length > 0 && (
        <h2 className="p-4 font-bold text-white md:text-xl">{title}</h2>
      )}
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={scrollLeft}
          className="bg-white rounded-full left-0 absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
        <div
          id={"slider" + id}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {popularMovies}
        </div>
        <MdChevronRight
          onClick={scrollRight}
          className="bg-white  right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
      </div>
    </>
  );
}

export default HorrorMovies;
