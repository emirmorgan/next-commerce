import Link from "next/link";
import { useRouter } from "next/navigation";

import { categories } from "@/lib/constants";

export default function Categories() {
  const router = useRouter();

  const handleRoute = (category: string) => {
    router.push(`/products?category=${category}`);
  };

  return (
    <nav>
      <ul className="hidden md:flex justify-between overflow-x-auto">
        {categories.map((category, index) => {
          return (
            <li
              onClick={() => handleRoute(category as string)}
              className="border-b-2 border-[transparent] text-gray-600 hover:border-black hover:text-black cursor-pointer p-2"
              key={index}
            >
              <Link
                className=" whitespace-nowrap text-sm font-semibold"
                href={category as string}
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
