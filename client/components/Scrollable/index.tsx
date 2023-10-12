"use client";

import { MutableRefObject, useRef, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import { ScrollableProps, ScrollablePropsDefault } from "./scrollableProps";

export default function Scrollable(userProps: ScrollableProps) {
  const props: Required<ScrollableProps> = {
    ...ScrollablePropsDefault,
    ...userProps,
  };

  const listRef = useRef() as MutableRefObject<HTMLDivElement>;

  const [isDragging, setDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);

  const [isLeftArrowVisible, setLeftArrowVisible] = useState<boolean>(false);
  const [isRightArrowVisible, setRightArrowVisible] = useState<boolean>(true);

  const mouseMove = (e: React.MouseEvent) => {
    arrowVisibilityControl();
    if (isDragging) {
      const x = e.pageX - listRef.current.offsetLeft;

      const scroll = x - startX;

      listRef.current.scrollLeft = scrollLeft - scroll;
    }
  };

  const startDragging = (e: React.MouseEvent) => {
    if (props.dragging !== false) {
      setDragging(true);

      setStartX(e.pageX - listRef.current.offsetLeft);
      setScrollLeft(listRef.current.scrollLeft);
    }
  };

  const stopDragging = () => {
    if (props.dragging !== false) {
      setDragging(false);
    }
  };

  const arrowVisibilityControl = () => {
    // Both control arrow has 20px deviation

    //Left Arrow Visibility
    if (listRef.current.scrollLeft <= 20) {
      setLeftArrowVisible(false);
    } else {
      setLeftArrowVisible(true);
    }

    //Right Arrow Visibility
    if (
      Math.round(listRef.current.scrollLeft) >=
      listRef.current.scrollWidth - listRef.current.clientWidth - 20
    ) {
      setRightArrowVisible(false);
    } else {
      setRightArrowVisible(true);
    }
  };

  const arrowMovementControl = (position: string) => {
    arrowVisibilityControl();

    if (position === "left") {
      listRef.current.scrollLeft -= listRef.current.clientWidth;
    } else {
      listRef.current.scrollLeft += listRef.current.clientWidth;
    }
  };

  return (
    <div className="relative rounded-md border-2 border-gray-100 bg-slate-50 py-4 px-3">
      {isLeftArrowVisible && (
        <div
          onClick={() => arrowMovementControl("left")}
          className="absolute z-10 flex items-center justify-center my-auto w-10 h-10 left-[-14px] top-2/4 bottom-2/4 border-2 border-gray-300 bg-gray-100 text-black rounded-full cursor-pointer transition-all ease-linear hover:bg-gray-200 hover:border-gray-400 hover:shadow"
        >
          <AiOutlineLeft />
        </div>
      )}
      <div
        ref={listRef}
        onMouseMove={mouseMove}
        onMouseUp={stopDragging}
        onMouseDown={startDragging}
        onScroll={arrowVisibilityControl}
        onMouseLeave={() => setDragging(false)}
        className={
          "flex gap-3 overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] select-none" +
          (isDragging ? " scroll-auto" : " scroll-smooth")
        }
      >
        {props.children}
      </div>
      {isRightArrowVisible && (
        <div
          onClick={() => arrowMovementControl("right")}
          className="absolute z-10 flex items-center justify-center my-auto w-10 h-10 right-[-14px] top-2/4 bottom-2/4 border-2 border-gray-300 bg-gray-100 text-black rounded-full cursor-pointer transition-all ease-linear hover:bg-gray-200 hover:border-gray-400 hover:shadow"
        >
          <AiOutlineRight />
        </div>
      )}
    </div>
  );
}
