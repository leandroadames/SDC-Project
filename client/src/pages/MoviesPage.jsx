import React from "react";
import Header from "../components/Header.jsx";
import MoviesHero from "../components/MoviesHero.jsx";
import PopularMovies from "../components/PopularMovies.jsx";
import TopRatedMovies from "../components/TopRatedMovies.jsx";
import UpcomingMovies from "../components/UpcomingMovies.jsx";
import TrendingMovies from "../components/TrendingMovies.jsx";
import HorrorMovies from "../components/HorrorMovies.jsx";
export default function MoviesPage() {
  return (
    <>
      <Header />
      <MoviesHero />
      <PopularMovies id={1} title={"Popular"} />
      <TopRatedMovies id={2} title={"Top Rated"} />
      <UpcomingMovies id={3} title={"Upcoming"} />
      <TrendingMovies id={4} title={"Trending"} />
      <HorrorMovies id={5} title={"Horror"} />
    </>
  );
}
