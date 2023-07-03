import React from "react";
import { useMovies } from "../context/MovieProvider.jsx";
import Movie from "./Movie.jsx";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

function TrendingShows({ title, id }) {
  const { movies } = useMovies();

  // Filter movies by type for popular movies
  const popularMovies = movies
    .filter((movie) => movie.type === 6)
    .map((movie, id) => {
      return (
        <>
          <Movie key={id + 6} movie={movie} />
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
          className="absolute left-0 z-10 hidden bg-white rounded-full opacity-50 cursor-pointer hover:opacity-100 group-hover:block"
          size={40}
        />
        <div
          id={"slider" + id}
          className="relative w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {popularMovies}
        </div>
        <MdChevronRight
          onClick={scrollRight}
          className="absolute right-0 z-10 hidden bg-white rounded-full opacity-50 cursor-pointer hover:opacity-100 group-hover:block"
          size={40}
        />
      </div>
    </>
  );
}

export default TrendingShows;
