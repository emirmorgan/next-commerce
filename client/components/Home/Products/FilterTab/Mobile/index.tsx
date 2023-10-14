import { Dispatch, MutableRefObject, SetStateAction, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";

import useClickOutside from "@/hooks/useClickOutside";
import FilterTab from "..";

type MobileFilterTabProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export default function MobileFilterTab({
  isOpen,
  setIsOpen,
}: MobileFilterTabProps) {
  const elRef = useRef() as MutableRefObject<HTMLDivElement>;

  const handleClickOutside = () => {
    setIsOpen(false);
  };

  useClickOutside(elRef, handleClickOutside);

  return (
    <div
      ref={elRef}
      className={
        "fixed z-[100] top-0 left-0 w-full h-full max-w-[350px] bg-white shadow-lg border-r border-gray-300 overflow-auto" +
        (isOpen ? " flex flex-col md:hidden" : " hidden")
      }
    >
      <div className="flex justify-between items-center font-semibold w-full p-3">
        <span>Filters</span>
        <div
          onClick={() => setIsOpen(false)}
          className="border border-gray-400 cursor-pointer p-2 transition-all ease-linear hover:border-black"
        >
          <AiOutlineClose />
        </div>
      </div>
      <FilterTab />
    </div>
  );
}
