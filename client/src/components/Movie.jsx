import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import MoreInfoButton from "./MoreInfo.jsx";

const Movie = ({ movie, id }) => {
  const [like, setLike] = useState(false);

  return (
    <div className="w-[160px] sm:w-[200px] md:w-[250px] lg:w-[280px] inline-block cursor-pointer relative p-2">
      <img
        className="block w-full h-auto rounded-sm"
        src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
        alt={movie?.title}
      />

      <div className="absolute top-0 left-0 w-full h-full text-white rounded opacity-0 hover:bg-black/80 hover:opacity-100">
        <p className="flex items-center justify-center h-full text-xs font-bold text-center text-white whitespace-normal md:text-sm">
          {movie?.title || movie?.name}
          <p className="absolute bottom-0 right-2">
            <MoreInfoButton movie={movie} />
          </p>
        </p>

        {/* <p>
          {like ? (
            <AiFillHeart
              className="absolute text-gray-300 top-4 left-4"
              size={40}
            />
          ) : (
            <AiOutlineHeart
              className="absolute text-gray-300 top-4 left-4"
              size={40}
            />
          )}
        </p> */}
      </div>
    </div>
  );
};

export default Movie;
