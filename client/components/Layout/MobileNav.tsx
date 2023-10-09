"use client";

import {
  AiOutlineFire,
  AiOutlineHeart,
  AiOutlineShopping,
  AiOutlineUser,
} from "react-icons/ai";

import Link from "next/link";

import { useShoppingCart } from "@/context/ShoppingCartContext";
import { useAuth } from "@/context/AuthContext";

export default function MobileNav() {
  const { openCart } = useShoppingCart();
  const { authenticated } = useAuth();

  return (
    <div className="z-20 fixed md:hidden bottom-0 w-full bg-white shadow-xl border-t-2 border-gray-300">
      <ul className="flex w-full justify-between whitespace-nowrap px-5 py-1">
        <li className="p-2 text-gray-800 hover:text-black">
          <Link
            href="/category?=best-seller"
            className="flex flex-col justify-center items-center text-center "
          >
            <AiOutlineFire size={22} />
            <span className="text-xs">Trending</span>
          </Link>
        </li>
        <li className="p-2 text-gray-800 hover:text-black">
          <Link
            href="/favorites"
            className="flex flex-col justify-center items-center text-center "
          >
            <AiOutlineHeart size={22} />
            <span className="text-xs">Favorites</span>
          </Link>
        </li>
        <li className="p-2 text-gray-800 hover:text-black">
          <div
            onClick={openCart}
            className="flex flex-col justify-center items-center text-center cursor-pointer"
          >
            <AiOutlineShopping size={22} />
            <span className="text-xs">Shop Cart</span>
          </div>
        </li>
        <li className="p-2 text-gray-800 hover:text-black">
          {authenticated ? (
            <Link
              href="/profile"
              className="flex flex-col justify-center items-center text-center "
            >
              <AiOutlineUser size={22} />
              <span className="text-xs">Profile</span>
            </Link>
          ) : (
            <Link
              href="/login"
              className="flex flex-col justify-center items-center text-center "
            >
              <AiOutlineUser size={22} />
              <span className="text-xs">Log in</span>
            </Link>
          )}
        </li>
      </ul>
    </div>
  );
}
