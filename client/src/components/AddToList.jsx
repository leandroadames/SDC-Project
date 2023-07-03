import React, { useState } from "react";
import { useMovies } from "../context/MovieProvider.jsx";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";
import axios from "axios";
function AddToList({ movie, handleCloseModal }) {
  const { movies, handleAddToList, setMyList } = useMovies();

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  async function handleDeleteMovie(movie) {
    const token = JSON.parse(sessionStorage.getItem("token"));
    const result = await axios.delete(`/api/my-list/${movie.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const userListMovieIds = result.data.newList;

    const myListMovies = userListMovieIds.flatMap((listId) =>
      movies.filter((movie) => movie.id === listId.api_data_id)
    );

    setMyList(myListMovies);
    handleCloseModal(false);
  }

  return (
    <div className="absolute flex items-center justify-center w-10 h-12 mb-2 font-sans text-xl font-bold text-white top-80 left-44 hover:text-green-600 ">
      {!movie.added && !isHovered && (
        <AiOutlinePlusCircle
          onClick={() => handleAddToList(movie.id)}
          className="text-4xl rounded-full hover:bg-black hover:bg-opacity-50 cursor-pointer"
        />
      )}
      {movie.added && isHovered ? (
        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <ImCancelCircle
            onClick={() => handleDeleteMovie(movie)}
            size={40}
            className="text-netflix-red cursor-pointer"
          />
        </div>
      ) : (
        movie.added && (
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <AiOutlineCheckCircle className="cursor-pointer" size={40} />
          </div>
        )
      )}
    </div>
  );
}
export default AddToList;
