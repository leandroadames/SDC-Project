"use client";

import { Dropdown } from "flowbite-react";

export default function DefaultDropdown() {
  return (
    <Dropdown
      className="z-10 font-bold text-white bg-netflix-red"
      label="Browse"
    >
      <Dropdown.Item className="font-bold text-white border-b-2 border-white">
        Home
      </Dropdown.Item>
      <Dropdown.Item className="font-bold text-white border-b-2 border-white">
        TV Shows
      </Dropdown.Item>
      <Dropdown.Item className="font-bold text-white border-b-2 border-white">
        Movies
      </Dropdown.Item>
      <Dropdown.Item className="font-bold text-white border-b-2 border-white">
        News & Popular
      </Dropdown.Item>
      <Dropdown.Item className="font-bold text-white border-b-2 border-white">
        My List
      </Dropdown.Item>
      <Dropdown.Item className="font-bold text-white ">
        Browse By Languages
      </Dropdown.Item>
    </Dropdown>
  );
}
