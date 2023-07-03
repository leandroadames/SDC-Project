import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import { useMovies } from "../context/MovieProvider";

function PlayVideo({ movie }) {
  const { isPlaying } = useMovies();
  const [shouldPlay, setShouldPlay] = useState(true);
  const playerRef = useRef(null);
  const { isMuted } = useMovies();
  useEffect(() => {
    if (isPlaying) {
      setShouldPlay(true);
    }
  }, [isPlaying]);

  useEffect(() => {
    if (shouldPlay) {
      playerRef.current.seekTo(0);
    }
  }, [shouldPlay]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldPlay(false);
    }, 10000);

    return () => {
      clearTimeout(timer);
    };
  }, [shouldPlay]);

  return (
    <div className="w-full h-96">
      <ReactPlayer
        ref={playerRef}
        url={`https://www.youtube.com/watch?v=${movie?.video_key}`}
        width="100%"
        height="100%"
        controls={false}
        playing={isPlaying}
        muted={isMuted}
        // light={true}
      />
    </div>
  );
}

export default PlayVideo;
