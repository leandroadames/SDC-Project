import React from "react";
import PopularMovies from "./PopularMovies.jsx";
import TopRatedMovies from "./TopRatedMovies.jsx";
import UpcomingMovies from "./UpcomingMovies.jsx";
import TrendingMovies from "./TrendingMovies.jsx";
import HorrorMovies from "./HorrorMovies.jsx";
import TrendingShows from "./TrendingShows.jsx";

export default function Rows() {
  return (
    <div className="p-0 m-0 bg-[#141414]">
      <PopularMovies id={1} title={"Popular"} />
      <TopRatedMovies id={2} title={"Top Rated"} />
      <UpcomingMovies id={3} title={"Upcoming"} />
      <TrendingMovies id={4} title={"Trending"} />
      <HorrorMovies id={5} title={"Horror"} />
      <TrendingShows id={6} title={"Trending Shows"} />
    </div>
  );
}
