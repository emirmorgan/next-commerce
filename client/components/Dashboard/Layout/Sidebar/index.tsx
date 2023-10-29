"use client";

import {
  AiOutlineApartment,
  AiOutlineAppstoreAdd,
  AiOutlineArrowLeft,
  AiOutlineBorder,
  AiOutlineCreditCard,
  AiOutlineHome,
  AiOutlineMail,
  AiOutlineMenuFold,
  AiOutlineMenuUnfold,
} from "react-icons/ai";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Sidebar() {
  const router = useRouter();

  const [toggleSidebar, setToggleSidebar] = useState(true);

  return (
    <div
      className={
        "flex flex-col border-r w-full transition-all ease-linear" +
        (toggleSidebar ? " max-w-[50px] md:max-w-[230px]" : " max-w-[50px]")
      }
    >
      <div className="flex justify-between items-center font-semibold w-full h-[50px] border-b px-3 gap-3">
        <div
          onClick={() => router.push("/")}
          className={
            "relative cursor-pointer w-8 h-8 min-w-8" +
            (toggleSidebar ? " hidden md:block" : " hidden")
          }
        >
          <Image fill src="/assets/logo.png" alt="Logo" />
        </div>
        <div
          onClick={() => router.push("/")}
          className="block cursor-pointer md:hidden"
        >
          <AiOutlineArrowLeft size={24} />
        </div>
        <div
          onClick={() => setToggleSidebar(!toggleSidebar)}
          className="hidden md:flex items-center justify-center rounded-full cursor-pointer"
        >
          {toggleSidebar ? (
            <AiOutlineMenuFold size={24} />
          ) : (
            <AiOutlineMenuUnfold size={24} />
          )}
        </div>
      </div>
      <ul className="flex flex-col font-semibold gap-1">
        <Link href="/dashboard">
          <li className="flex items-center w-full h-[42px] cursor-pointer select-none px-3 gap-2 hover:bg-neutral-100 ">
            <div className="min-w-[24px]">
              <AiOutlineHome size={24} />
            </div>
            <span className={toggleSidebar ? " hidden md:block" : " hidden"}>
              Dashboard
            </span>
          </li>
        </Link>
        <Link href="/dashboard/products">
          <li className="flex items-center w-full h-[42px] cursor-pointer select-none px-3 gap-2 hover:bg-neutral-100 ">
            <div className="min-w-[24px]">
              <AiOutlineAppstoreAdd size={24} />
            </div>
            <span className={toggleSidebar ? " hidden md:block" : " hidden"}>
              Products
            </span>
          </li>
        </Link>
        <Link href="/dashboard/orders">
          <li className="flex items-center w-full h-[42px] cursor-pointer select-none px-3 gap-2 hover:bg-neutral-100 ">
            <div className="min-w-[24px]">
              <AiOutlineApartment size={24} />
            </div>
            <span className={toggleSidebar ? " hidden md:block" : " hidden"}>
              Orders
            </span>
          </li>
        </Link>
        <Link href="/dashboard/payments">
          <li className="flex items-center w-full h-[42px] cursor-pointer select-none px-3 gap-2 hover:bg-neutral-100 ">
            <div className="min-w-[24px]">
              <AiOutlineCreditCard size={24} />
            </div>
            <span className={toggleSidebar ? " hidden md:block" : " hidden"}>
              Payments
            </span>
          </li>
        </Link>
      </ul>
    </div>
  );
}
