"use client";

import { AiOutlineSearch } from "react-icons/ai";

import { useState } from "react";

import { useAuth } from "@/context/AuthContext";

export default function Topbar() {
  const { authLogout } = useAuth();
  const [searchParam, setSearchParam] = useState("");

  const handleSearch = (e: any) => {
    if (
      (e.key === "Enter" || e.keyCode === 13) &&
      searchParam !== null &&
      searchParam.trim() !== ""
    ) {
      //...
    }
  };

  return (
    <div className="flex justify-between items-center w-full px-4 pt-3">
      <div className="flex items-center justify-center w-full md:max-w-[350px] border border-gray-200 px-1 py-2 focus-within:border-gray-600 transition-all ease-linear group mt-1 md:mt-0">
        <AiOutlineSearch
          size={22}
          className="text-gray-500 mx-1 transition-all ease-linear"
        />
        <input
          className="w-full text-gray-600 focus:outline-none px-1"
          type="text"
          placeholder="Search..."
          value={searchParam}
          onChange={(e) => setSearchParam(e.target.value)}
          onKeyUp={handleSearch}
          maxLength={50}
        />
      </div>
      <div
        onClick={authLogout}
        className="flex items-center border font-semibold text-gray-700 cursor-pointer transition-all ease-linear py-2 px-3 hover:border-red-500 hover:bg-red-500/5 hover:text-black"
      >
        Log out
      </div>
    </div>
  );
}
