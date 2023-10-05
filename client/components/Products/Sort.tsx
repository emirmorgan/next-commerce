import { AiFillCaretDown } from "react-icons/ai";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

import { sorts } from "@/lib/constants";

type SortProps = {
  sort: string;
  createQueryString: (name: string, value: string) => void;
};

export default function Sort({ sort, createQueryString }: SortProps) {
  const router = useRouter();
  const pathname = usePathname();

  const [isVisible, setVisible] = useState(false);

  return (
    <div
      onClick={() => setVisible(!isVisible)}
      className="relative flex flex-col select-none"
    >
      <div className="flex justify-between items-center w-52 min-w-52 border border-gray-300 gap-3 py-1 px-2 cursor-pointer">
        <div className="flex flex-col">
          <span className="text-xs text-gray-600">Sort by</span>
          <span>
            {sorts.find((item) => item.name === sort)?.value ||
              "Posted: newest first"}
          </span>
        </div>
        <AiFillCaretDown
          className={
            "transition-all ease-linear duration-[250ms] " +
            (isVisible ? " -rotate-180" : "")
          }
          size={20}
        />
      </div>
      <div
        className={
          "absolute z-10 top-[50px] w-full overflow-auto scrollbar-cart bg-white border-x border-gray-300 transition-all ease-linear " +
          (isVisible ? " h-[123px]" : " h-[0px]")
        }
      >
        <ul>
          {sorts.map((sort, index) => (
            <li
              key={index}
              onClick={() =>
                router.push(
                  pathname + "?" + createQueryString("sort", sort.name)
                )
              }
              className="cursor-pointer p-2 border-b hover:bg-black/5"
            >
              {sort.value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
