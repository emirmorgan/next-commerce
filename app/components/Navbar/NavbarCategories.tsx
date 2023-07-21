import Link from "next/link";

import { categories } from "@/app/constants/Index";

export default function NavbarCategories() {
  return (
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
  );
}
