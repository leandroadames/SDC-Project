import React, { useEffect, useState } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { useMovies } from "../context/MovieProvider.jsx";
import MoreInfoButton from "./MoreInfo.jsx";
import Modal from "react-modal";
import ModalContent from "./ModalContent";
import HeroInfoButton from "./HeroInfoButton.jsx";
import ReactPlayer from "react-player";
import MuteButton from "./MuteButton.jsx";
import { RiVolumeMuteLine, RiVolumeUpLine } from "react-icons/ri";
import { move } from "formik";

function Hero() {
  const { movies, isMuted, handleMute, setIsPlaying, isPlaying } = useMovies();
  const [heroLink, setHeroLink] = useState("");
  const [randomMovie, setRandomMovie] = useState(null);

  useEffect(() => {
    const filteredMovies = movies.filter((movie) => movie.type !== 6);
    const randomMovie =
      filteredMovies[Math.floor(Math.random() * filteredMovies.length)];

    setHeroLink(randomMovie?.video_key);
    setRandomMovie(randomMovie); // Set the randomMovie state
  }, [movies]);

  return (
    <div className="relative w-screen ">
      <div className="w-full h-[1000px]">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${heroLink}`}
          width="100%"
          height="100%"
          controls={false}
          playing={isPlaying}
          muted={isMuted}
          style={{
            objectFit: "cover",
            left: 0,
            top: 0,
            right: 0,
            marginTop: "80px",
          }}
          // light={true}
        />
      </div>
      <h2 className="absolute bottom-60 ml-12 font-sans font-bold text-5xl text-white">
        {randomMovie?.title}
      </h2>
      <div className="absolute flex-col items-center ml-12 bottom-10">
        <div className="flex">
          <div className="flex items-center justify-center w-full h-full">
            <button
              onClick={() =>
                setIsPlaying((prevIsPlaying) => {
                  console.log("prevIsPlaying", prevIsPlaying);
                  return !prevIsPlaying;
                })
              }
              className="flex items-center justify-center w-32 h-12 px-4 py-2 mr-2 text-xl font-bold text-black bg-white rounded "
            >
              <BsFillPlayFill className="text-5xl " />
              Play
            </button>

            {/* Pass the randomMovie as a prop */}
            <HeroInfoButton movie={randomMovie} />

            <div>
              <button
                onClick={handleMute}
                className="flex items-center justify-center w-32 h-12 mb-2 font-sans text-xl font-bold text-white top-80 right-2"
              >
                {!isMuted ? (
                  <RiVolumeUpLine size={35} />
                ) : (
                  <RiVolumeMuteLine className="text-4xl" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
