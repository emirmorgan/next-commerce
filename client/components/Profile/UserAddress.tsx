import { UserAddress } from "@/lib/types";
import {
  AiOutlineDelete,
  AiOutlineEdit,
  AiOutlineHome,
  AiOutlinePhone,
} from "react-icons/ai";

export default function UserAddress({
  title,
  contactNumber,
  details,
}: UserAddress) {
  return (
    <div className="w-full border p-3">
      <span className="font-semibold">{title}</span>
      <div className="flex items-center gap-2 whitespace-break-spaces break-words">
        <AiOutlineHome size={22} />
        <p>{details}</p>
      </div>
      <div className="flex items-center gap-2">
        <AiOutlinePhone size={22} min={22} />
        <span>{contactNumber}</span>
      </div>
      <div className="flex justify-end gap-2">
        <div className="border p-2 cursor-pointer hover:border-black">
          <AiOutlineEdit size={20} />
        </div>
        <div className="border p-2 cursor-pointer hover:border-red-500 hover:text-red-500">
          <AiOutlineDelete size={20} />
        </div>
      </div>
    </div>
  );
}
