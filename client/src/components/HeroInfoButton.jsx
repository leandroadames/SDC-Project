import { React, useState } from "react";
import ReactModal from "react-modal";
import ModalContent from "./ModalContent";

import { IoMdInformationCircleOutline } from "react-icons/io";
import { IoIosArrowDropdown } from "react-icons/io";
import { useMovies } from "../context/MovieProvider.jsx";

function HeroInfoButton({ movie }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { movies } = useMovies();
  const blackMirror = movies[0];

  const openModal = () => {
    setModalIsOpen(true);
    console.log(movie.title);
    console.log("rando", movie);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <button
        onClick={openModal}
        className="flex items-center justify-center h-12 px-4 py-2 text-lg text-white bg-gray-600 rounded bg-opacity-70 w-42"
      >
        <IoMdInformationCircleOutline className="mr-2 text-4xl" />
        <span className="font-bold opacity-100">More Info</span>
      </button>
      <ReactModal
        ariaHideApp={false}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        overlayClassName="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center"
        className="p-0 flex bg-[#141414] rounded-lg  h-full text-white overflow-auto justify-center "
        contentClassName="flex flex-col "
      >
        <div>
          <ModalContent closeModal={closeModal} movie={movie} />
        </div>
      </ReactModal>
    </>
  );
}

export default HeroInfoButton;
