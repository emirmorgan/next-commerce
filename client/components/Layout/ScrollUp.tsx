"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

import { AiOutlineArrowUp } from "react-icons/ai";

export default function ScrollUp() {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrolled = document.documentElement.scrollTop;

      if (scrolled > 600) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  }, []);

  return (
    <Link href="#">
      <div
        className={
          visible ? "z-50 fixed right-5 bottom-20 md:bottom-5" : "hidden"
        }
      >
        <div className="bg-white border-2 border-gray-300 rounded-full cursor-pointer p-2 hover:border-green-400 hover:shadow-md transition-all ease-linear">
          <AiOutlineArrowUp size={24} />
        </div>
      </div>
    </Link>
  );
}
