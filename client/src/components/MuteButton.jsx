import React, { useState } from "react";
import { useMovies } from "../context/MovieProvider";
import { RiVolumeMuteLine, RiVolumeUpLine } from "react-icons/ri";

function MuteButton() {
  const { handleMute, isMuted } = useMovies();
  return (
    <div>
      <button
        onClick={handleMute}
        className="absolute flex items-center justify-center w-32 h-12 mb-2 font-sans text-xl font-bold text-white top-80 right-2"
      >
        {!isMuted ? (
          <RiVolumeUpLine size={35} />
        ) : (
          <RiVolumeMuteLine className="text-4xl" />
        )}
      </button>
    </div>
  );
}

export default MuteButton;
