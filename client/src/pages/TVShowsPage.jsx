import React from "react";
import Header from "../components/Header.jsx";
import TVShowsHero from "../components/TVShowsHero.jsx";
import TrendingShows from "../components/TrendingShows.jsx";
export default function TVShowsPage() {
  return (
    <>
      <Header />
      <TVShowsHero />
      <TrendingShows id={6} title={"Trending Shows"} />
    </>
  );
}
