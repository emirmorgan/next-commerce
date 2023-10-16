"use client";

import {
  AiOutlineApartment,
  AiOutlineAppstoreAdd,
  AiOutlineCreditCard,
  AiOutlineHome,
  AiOutlineMail,
  AiOutlineMenuFold,
  AiOutlineMenuUnfold,
} from "react-icons/ai";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Sidebar() {
  const router = useRouter();

  const [toggleSidebar, setToggleSidebar] = useState(true);

  return (
    <div
      className={
        "flex flex-col border-r w-full transition-all ease-linear" +
        (toggleSidebar ? " max-w-[230px]" : " max-w-[50px]")
      }
    >
      <div className="flex justify-between items-center font-semibold w-full h-[50px] px-3 gap-3">
        <div
          onClick={() => router.push("/")}
          className={
            "relative cursor-pointer w-8 h-8 min-w-8" +
            (toggleSidebar ? " block" : " hidden")
          }
        >
          <Image fill src="/assets/logo.png" alt="Logo" />
        </div>
        <div
          onClick={() => setToggleSidebar(!toggleSidebar)}
          className="flex items-center justify-center rounded-full cursor-pointer"
        >
          {toggleSidebar ? (
            <AiOutlineMenuFold size={24} />
          ) : (
            <AiOutlineMenuUnfold size={24} />
          )}
        </div>
      </div>
      <ul className="flex flex-col font-semibold border-t gap-1">
        <li className="flex items-center w-full h-[42px] cursor-pointer select-none px-3 gap-2 hover:bg-neutral-100 ">
          <div className="min-w-[24px]">
            <AiOutlineHome size={24} />
          </div>
          <span className={toggleSidebar ? " block" : " hidden"}>
            Dashboard
          </span>
        </li>
        <li className="flex items-center w-full h-[42px] cursor-pointer select-none px-3 gap-2 hover:bg-neutral-100 ">
          <div className="min-w-[24px]">
            <AiOutlineAppstoreAdd size={24} />
          </div>
          <span className={toggleSidebar ? " block" : " hidden"}>Products</span>
        </li>
        <li className="flex items-center w-full h-[42px] cursor-pointer select-none px-3 gap-2 hover:bg-neutral-100 ">
          <div className="min-w-[24px]">
            <AiOutlineApartment size={24} />
          </div>
          <span className={toggleSidebar ? " block" : " hidden"}>Orders</span>
        </li>
        <li className="flex items-center w-full h-[42px] cursor-pointer select-none px-3 gap-2 hover:bg-neutral-100 ">
          <div className="min-w-[24px]">
            <AiOutlineCreditCard size={24} />
          </div>
          <span className={toggleSidebar ? " block" : " hidden"}>Payments</span>
        </li>
        <li className="flex items-center w-full h-[42px] cursor-pointer select-none px-3 gap-2 hover:bg-neutral-100 ">
          <div className="min-w-[24px]">
            <AiOutlineMail size={24} />
          </div>
          <span className={toggleSidebar ? " block" : " hidden"}>Tickets</span>
        </li>
      </ul>
    </div>
  );
}
