import React from "react";
import Header from "../components/Header.jsx";
import NewAndPopularHero from "../components/NewAndPopularHero.jsx";
import PopularMovies from "../components/PopularMovies.jsx";
import TopRatedMovies from "../components/TopRatedMovies.jsx";
import UpcomingMovies from "../components/UpcomingMovies.jsx";
import TrendingMovies from "../components/TrendingMovies.jsx";

export default function NewAndPopularPage() {
  return (
    <>
      <Header />
      <NewAndPopularHero />
      <PopularMovies id={1} title={"Popular"} />
      <TopRatedMovies id={2} title={"Top Rated"} />
      <UpcomingMovies id={3} title={"Upcoming"} />
      <TrendingMovies id={4} title={"Trending"} />
    </>
  );
}
