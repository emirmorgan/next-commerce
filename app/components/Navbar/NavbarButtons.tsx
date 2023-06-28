import {
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineShopping,
} from "react-icons/ai";

export default function NavbarButtons() {
  return (
    <>
      <div className="flex justify-center items-center gap-4 mt-3 md:mt-0">
        <div className="w-16 flex flex-col justify-center items-center text-center cursor-pointer hover:text-green-600">
          <AiOutlineUser size={24} />
          <b className="text-xs">Log in</b>
        </div>
        <div className="w-16 flex flex-col justify-center items-center text-center cursor-pointer hover:text-green-600">
          <AiOutlineHeart size={24} />
          <b className="text-xs">Favorites</b>
        </div>
        <div className="w-16 flex flex-col justify-center items-center text-center cursor-pointer hover:text-green-600">
          <AiOutlineShopping size={24} />
          <b className="text-xs">Shop Cart</b>
        </div>
      </div>
    </>
  );
}
