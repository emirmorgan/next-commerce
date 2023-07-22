import Link from "next/link";

import {
  AiOutlineHeart,
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineShopping,
  AiOutlineUser,
} from "react-icons/ai";

import Image from "next/image";
import { categories } from "@/app/constants/Index";

export default function Navbar() {
  return (
    <header className="bg-white border-b border-gray-200 mb-5">
      <div className="container mx-auto px-1">
        <div className="flex flex-col mx-3">
          <div className="flex items-center justify-end mt-1">
            <div className="flex gap-3 text-xs text-gray-500">
              <Link className="hover:text-gray-600" href="./">
                About us
              </Link>
              <Link className="hover:text-gray-700" href="./">
                Help & Support
              </Link>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between my-2">
            <div className="flex flex-row justify-between items-center my-1">
              <Link href="">
                <div className="flex md:hidden items-center justify-center">
                  <AiOutlineMenu size={28} />
                </div>
              </Link>
              <Link className="mx-3" href="./">
                <div className="relative w-36 h-8 my-2 sm:my-0">
                  <Image
                    fill
                    src="/assets/logo.png"
                    alt="Logo"
                    className="object-contain"
                  />
                </div>
              </Link>
              <Link href="">
                <div className="flex md:hidden items-center justify-center">
                  <AiOutlineShopping size={28} />
                </div>
              </Link>
            </div>
            <div className="flex items-center justify-center w-full md:max-w-[500px] bg-slate-50 border-2 border-gray-100 px-1 py-2 rounded-lg focus-within:border-gray-300 transition-all ease-linear group mt-1 md:mt-0">
              <AiOutlineSearch
                size={22}
                className="text-gray-500 mx-1 transition-all ease-linear"
              />
              <input
                className="w-full bg-slate-50 text-gray-600 focus:outline-none px-1"
                type="text"
                placeholder="Search..."
              />
            </div>
            <div className="hidden md:flex justify-center items-center gap-4 mt-3 md:mt-0">
              <div className="w-16 flex flex-col justify-center items-center text-center cursor-pointer hover:text-green-600">
                <AiOutlineUser size={24} />
                <b className="text-xs">Log in</b>
              </div>
              <div className="w-16 flex flex-col justify-center items-center text-center cursor-pointer hover:text-green-600">
                <AiOutlineHeart size={24} />
                <b className="text-xs">Favorites</b>
              </div>
              <div className="w-16 flex flex-col justify-center items-center text-center cursor-pointer hover:text-green-600">
                <AiOutlineShopping size={24} />
                <b className="text-xs">Shop Cart</b>
              </div>
            </div>
          </div>
          <nav>
            <ul className="flex justify-between overflow-x-auto">
              {categories.map((category, index) => {
                return (
                  <li
                    className="border-b-2 border-[transparent] text-gray-700 hover:border-green-600 hover:text-green-600 cursor-pointer p-2"
                    key={index}
                  >
                    <Link
                      className=" whitespace-nowrap text-sm font-semibold"
                      href={category}
                    >
                      {category}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
