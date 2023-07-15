import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export const PrevArrow = ({ carousel }: any) => {
  return (
    <div
      onClick={() => carousel?.current?.slickPrev()}
      className="group absolute z-10 hidden md:flex justify-center items-center top-0 left-0 h-full cursor-pointer px-4"
    >
      <div className="bg-gray-100 group-hover:bg-gray-200 border-2 border-gray-400 shadow rounded-full p-3 transition-all ease-in">
        <AiOutlineLeft size={20} />
      </div>
    </div>
  );
};

export const NextArrow = ({ carousel }: any) => {
  return (
    <div
      onClick={() => carousel?.current?.slickNext()}
      className="group absolute z-10 hidden md:flex justify-center items-center top-0 right-0 h-full cursor-pointer px-4"
    >
      <div className="bg-gray-100 group-hover:bg-gray-200 border-2 border-gray-400 shadow rounded-full p-3 transition-all ease-in">
        <AiOutlineRight size={20} />
      </div>
    </div>
  );
};
