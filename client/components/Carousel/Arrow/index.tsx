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
    "group absolute z-10 hidden md:flex justify-center items-center top-0 h-full cursor-pointer px-4";

  return (
    <div
      onClick={handleSlick}
      className={arrowStyle + (direction === "left" ? " left-0" : " right-0")}
    >
      <div className="bg-black/30 group-hover:bg-black/80 group-hover:shadow-xl rounded-full p-3 transition-all ease-linear">
        {direction === "left" ? (
          <AiOutlineLeft size={24} color="white" />
        ) : (
          <AiOutlineRight size={24} color="white" />
        )}
      </div>
    </div>
  );
};
