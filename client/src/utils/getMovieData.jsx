import axios from "axios";

// API key
const key = "951a3aac6aa4a79cfb9e33017ac88be1";

// Request urls for movies
const requestsMovies = {
  // get all movies and shows
  requestAllMoviesAndShows: `/api/movies`,
  // 1
  requestPopularMovies: `/api/movies`,
  // 2
  requestTopRatedMovies: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  // 3
  requestUpcomingMovies: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
  // 4
  requestTrendingMovies: `https://api.themoviedb.org/3/trending/movie/day?api_key=${key}`,
  // 5
  requestHorrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27`,

  // 6
  requestTrendingShows: `https://api.themoviedb.org/3/trending/tv/day?api_key=${key}`,
};

// Functions for fetching data

export async function getPopularMovies() {
  const result = await axios.get(requestsMovies.requestPopularMovies);
  return result.data.results;
}

export async function getTopRatedMovies() {
  const result = await axios.get(requestsMovies.requestTopRatedMovies);
  return result.data.results;
}

export async function getUpcomingMovies() {
  const result = await axios.get(requestsMovies.requestUpcomingMovies);
  return result.data.results;
}

export async function getTrendingMovies() {
  const result = await axios.get(requestsMovies.requestTrendingMovies);
  return result.data.results;
}

export async function getHorrorMovies() {
  const result = await axios.get(requestsMovies.requestHorrorMovies);
  return result.data.results;
}

export async function getTrendingShows() {
  const result = await axios.get(requestsMovies.requestTrendingShows);
  return result.data.results;
}

export async function getAllMovieAndShows() {
  const result = await axios.get(requestsMovies.requestAllMoviesAndShows);
  return result.data.movies;
}

export default requestsMovies;
