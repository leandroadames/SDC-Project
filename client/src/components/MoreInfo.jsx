import React, { useState } from "react";
import ReactModal from "react-modal";
import ModalContent from "./ModalContent";

import { IoMdInformationCircleOutline } from "react-icons/io";
import { IoIosArrowDropdown } from "react-icons/io";
import { useMovies } from "../context/MovieProvider.jsx";

function MoreInfoButton({ movie }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { movies } = useMovies();

  const openModal = () => {
    setModalIsOpen(true);
    console.log(movie);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>
        <IoIosArrowDropdown className="ml-2 text-4xl" />
      </button>
      <ReactModal
        ariaHideApp={false}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        overlayClassName="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center"
        className="p-0 z-30 flex bg-[#141414] rounded-lg h-5/6 text-white justify-center "
        contentLabel="Modal"
      >
        <div className="flex flex-col">
          <ModalContent closeModal={closeModal} movie={movie} />
        </div>
      </ReactModal>
    </div>
  );
}

export default MoreInfoButton;
