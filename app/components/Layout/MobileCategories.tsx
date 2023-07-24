"use client";

import { categories } from "@/app/constants/Index";
import Image from "next/image";
import {
  useEffect,
  useRef,
  Dispatch,
  SetStateAction,
  MutableRefObject,
} from "react";
import { AiOutlineClose } from "react-icons/ai";

interface MobileCategoriesProps {
  isCategoriesVisible: boolean;
  setCategoriesVisible: Dispatch<SetStateAction<boolean>>;
}

export default function MobileCategories({
  isCategoriesVisible,
  setCategoriesVisible,
}: MobileCategoriesProps) {
  const ref = useRef() as MutableRefObject<HTMLDivElement>;

  const handleClickOutside = (e: any) => {
    if (ref.current && !ref.current.contains(e.target)) {
      document.body.classList.remove("overflow-hidden");
      setCategoriesVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (isCategoriesVisible) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }

  return (
    <>
      <div
        className={
          "fixed z-[998] top-0 left-0 w-full h-full bg-black/50 backdrop-blur-md" +
          (isCategoriesVisible ? " block md:hidden" : " hidden")
        }
      ></div>
      <div
        ref={ref}
        className={
          "absolute z-[999] top-0 left-0 h-full max-w-[350px] bg-white shadow-lg transition-all ease-linear" +
          (isCategoriesVisible ? " flex flex-col w-[85%] md:hidden " : " w-[0]")
        }
      >
        <div
          className={
            "flex flex-col justify-start items-start w-full h-full" +
            (isCategoriesVisible ? "   " : " hidden")
          }
        >
          <div className="flex w-full justify-between items-center p-3">
            <div className="relative w-40 h-10">
              <Image
                fill
                src="/assets/logo.png"
                alt="Logo"
                className="object-contain"
              />
            </div>
            <div
              onClick={() => setCategoriesVisible(false)}
              className="border-2 p-2  rounded-full cursor-pointer hover:bg-gray-200"
            >
              <AiOutlineClose size={22} />
            </div>
          </div>
          <ul className="flex flex-col w-full h-full">
            {categories.map((category, index) => (
              <li
                key={index}
                className="hover:bg-gray-200 border-t p-2 cursor-pointer"
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
