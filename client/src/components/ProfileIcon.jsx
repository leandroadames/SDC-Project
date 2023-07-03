import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useMovies } from "../context/MovieProvider.jsx";

export default function ProfileIcon() {
  const { usersProfiles, setCurrProfileData } = useMovies();

  if (!usersProfiles) {
    return <></>;
  }

  function handleCurrUsersProfile(profile) {
    setCurrProfileData(profile);
  }

  const profileList = usersProfiles.map((profile) => {
    return (
      <>
        <li className=" text-center w-full h-full">
          <Link
            to="/home"
            onClick={() => handleCurrUsersProfile(profile)}
            className="w-full h-full overflow-hidden transition-all duration-200 ease-in rounded-md profile-link"
          >
            <a
              href="#"
              className="flex w-full  flex-col items-center gap-3 text-2xl text-white no-underline profile-link"
            >
              <img
                className="w-[100px] border-transparent profile-img border-3 hover:border-2 hover:border-white "
                src={profile.icon}
                alt="profile photo"
              />
              {profile.name}
            </a>
          </Link>
        </li>
      </>
    );
  });

  return <>{usersProfiles && profileList}</>;
}
