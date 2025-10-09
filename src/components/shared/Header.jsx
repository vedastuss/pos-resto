import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaBell } from "react-icons/fa";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-8 bg-gray-900">
      <div className="flex items-center gap-2">
        <h1 className="ml-4 text-3xl font-semibold text-gray-100">Salor</h1>
      </div>

      {/* SEARCH */}
      <div className="flex items-center gap-2">
        <input
          id="search"
          name="search"
          placeholder="Search"
          className="bg-neutral-800 text-gray-100 px-2 py-1 rounded-md pr-8"
          type="text"
          autoComplete="off"
          aria-label="Search"
        />
        <FaSearch className="text-gray-100" />
      </div>
      {/* LOGGED USER DETAILS */}
      <div className="flex items-center gap-4">
        <div className="bg-neutral-800 rounded-[15px] p-3 cursor-pointer">
          <FaBell className="text-gray-100 text-xl" />
        </div>
        <div className="flex items-center gap-3 cursor-pointer">
          <FaUserCircle className="text-gray-100 text-xl" />
          <div className="flex flex-col items-start">
            <h1 className="text-xl text-gray-100 font-semibold">Lunette</h1>
            <p className="text-sm text-gray-400 font-medium">Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;