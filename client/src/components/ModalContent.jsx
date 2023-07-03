import { React, useState, useEffect } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useMovies } from "../context/MovieProvider.jsx";
import { BsFillPlayFill } from "react-icons/bs";
import { RiVolumeMuteLine } from "react-icons/ri";
import { BsHandThumbsUp } from "react-icons/bs";
import { FaAudioDescription } from "react-icons/fa";
import { LuSubtitles } from "react-icons/lu";
import { MdOutlineHighQuality } from "react-icons/md";

import AddToList from "./AddToList.jsx";
import PlayButton from "./PlayButton.jsx";
import PlayVideo from "./Video.jsx";
import MuteButton from "./MuteButton.jsx";

function ModalContent({ closeModal, movie }) {
  console.log(movie);
  const { movies, setIsPlaying } = useMovies();
  const [showVideo, setShowVideo] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowVideo(false);
    }, 10000);

    return () => clearTimeout(timeoutId);
  }, []);

  const releaseYear = movie.release_date.substring(0, 4);
  const randomNumber = Math.floor(Math.random() * 21) + 80;

  return (
    <div className="relative flex flex-col w-full h-full overflow-hidden">
      <div className="relative flex flex-col flex-grow overflow-y-auto">
        <div className="relative">
          <div className="flex-grow">
            {showVideo ? (
              <PlayVideo movie={movie} />
            ) : (
              <img
                className="block rounded-sm w-full h-96"
                src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
                alt="Movie Thumbnail"
              />
            )}
          </div>

          <button className="absolute top-0 right-0 mr-2" onClick={closeModal}>
            <AiFillCloseCircle className="text-4xl text-[#141414] " />
          </button>
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#141414]  to-transparent" />
          <h2 className="absolute mt-2 ml-4 font-sans text-3xl font-medium top-60">
            {movie?.title || movie.name}
          </h2>
          <div className="z-10 hover:bg-blue-500 focus:ring-2 focus:ring-black">
            <PlayButton setIsPlaying={setIsPlaying} />
          </div>
          <AddToList movie={movie} handleCloseModal={closeModal} />
          <button className="absolute flex items-center justify-center w-10 h-12 mb-2 font-sans text-xl font-bold text-white top-80 left-60 ">
            <BsHandThumbsUp
              className="text-4xl hover:text-green-600 "
              filled={true}
            />
          </button>
          <MuteButton />
        </div>
        <div className="flex items-center p-5 ml-2 space-x-2">
          <div className="mr-2 font-sans font-bold text-green-400">
            {randomNumber}% Match
          </div>
          {releaseYear}
          <MdOutlineHighQuality className="font-sans text-2xl" />
          <FaAudioDescription className="font-sans text-xl" />
          <LuSubtitles className="font-sans text-lg" />
        </div>
        <div className="flex flex-row">
          <div className="ml-8 w-[200px]">{movie?.overview}</div>
          <div>
            <div className="flex flex-row ml-4">
              <div className="text-gray-500 underline">Cast:</div>
              <div className="ml-2">
                {" "}
                {movie?.cast_names?.slice(0, 3)?.join(",")}
              </div>
            </div>
            <div className="flex flex-row ml-4">
              <div className="text-gray-500 underline">Genres:</div>
              <div className="ml-2"> {movie?.genre_names?.join(",")} </div>
            </div>
            <div className="flex flex-row ml-4">
              <div className="text-gray-500 underline">Tags:</div>
              <div className="ml-2">
                {" "}
                {movie?.keywords?.slice(0, 5)?.join(",")
                  ? movie?.keywords?.slice(0, 5)?.join(",")
                  : "Fun to Watch!"}{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalContent;
