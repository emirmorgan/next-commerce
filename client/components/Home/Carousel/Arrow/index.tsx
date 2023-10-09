import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

interface CarouselArrowProps {
  carousel: any;
  direction: string;
}

export const CarouselArrow = ({ carousel, direction }: CarouselArrowProps) => {
  const handleSlick = () => {
    if (direction === "left") {
      carousel?.current?.slickPrev();
    } else {
      carousel?.current?.slickNext();
    }
  };

  const arrowStyle =
    "group absolute z-10 hidden md:flex justify-center items-center top-0 h-full cursor-pointer px-0";

  return (
    <div
      onClick={handleSlick}
      className={arrowStyle + (direction === "left" ? " left-4" : " right-4")}
    >
      <div className="bg-white ring-1 group-hover:ring-black group-hover:bg-gray-100 group-hover:shadow-xl p-3 transition-all ease-linear">
        {direction === "left" ? <AiOutlineLeft /> : <AiOutlineRight />}
      </div>
    </div>
  );
};
