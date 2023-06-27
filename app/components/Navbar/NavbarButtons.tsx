import {
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineShopping,
} from "react-icons/ai";

export default function NavbarButtons() {
  return (
    <div className="flex justify-center items-center gap-4">
      <div className="flex flex-col justify-center items-center cursor-pointer hover:text-green-600">
        <AiOutlineUser size={24} />
        <b className="text-xs">Log in</b>
      </div>
      <div className="flex flex-col justify-center items-center cursor-pointer hover:text-green-600">
        <AiOutlineHeart size={24} />
        <b className="text-xs">Favorites</b>
      </div>
      <div className="flex flex-col justify-center items-center cursor-pointer hover:text-green-600">
        <AiOutlineShopping size={24} />
        <b className="text-xs">Shop Cart</b>
      </div>
    </div>
  );
}
