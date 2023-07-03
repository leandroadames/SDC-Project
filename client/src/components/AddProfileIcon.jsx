import { useState } from "react";
import { Link } from "react-router-dom";
import { FaPlusCircle } from "react-icons/fa";
import ProfileModal from "./ProfileModal";
export default function ProfileIcon() {
  const [isOpened, setIsOpened] = useState(false);

  function handleOpenModal() {
    setIsOpened((prevIsOpened) => !prevIsOpened);
  }
  function handleCloseModal() {
    setIsOpened(false);
    // location.reload();
  }

  return (
    <>
      <ProfileModal
        isOpened={isOpened}
        handleCloseModal={handleCloseModal}
        handleOpenModal={handleOpenModal}
      />

      {/* EDITED ADD BUTTON */}
      <li className=" text-center w-full h-full">
        <div className="w-full h-full overflow-hidden transition-all duration-200 ease-in rounded-md profile-link">
          <div className=" hover:bg-gray-900 cursor-pointer rounded border-transparent profile-img border-3 hover:border-2 hover:border-white flex w-full  flex-col items-center gap-3 text-2xl text-white no-underline profile-link">
            <FaPlusCircle
              onClick={handleOpenModal}
              className=" h-full w-[100px] text-gray-400 "
              size={40}
            />
            Add a profile
          </div>
        </div>
      </li>
    </>
  );
}
