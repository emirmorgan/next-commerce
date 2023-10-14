"use client";

import { useEffect, useState } from "react";

import { AiFillCaretUp, AiOutlineArrowUp } from "react-icons/ai";

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

  const handleTop = () => {
    window.scroll(0, 0);
  };

  return (
    <div
      onClick={handleTop}
      className={
        visible ? "z-50 fixed right-5 bottom-20 md:bottom-5" : "hidden"
      }
    >
      <div className="bg-white border-2 border-gray-300 cursor-pointer p-2 hover:border-black hover:shadow-md transition-all ease-linear">
        <AiFillCaretUp size={24} />
      </div>
    </div>
  );
}
