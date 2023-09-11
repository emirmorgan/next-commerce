import { UserAddress } from "@/lib/types";
import {
  AiOutlineDelete,
  AiOutlineEdit,
  AiOutlineHome,
  AiOutlinePhone,
  AiOutlinePlus,
} from "react-icons/ai";

export default function UserAddress({
  title,
  contactNumber,
  details,
}: UserAddress) {
  if (title || contactNumber || details == null) {
    return (
      <div className="flex flex-col gap-1">
        <span className="font-semibold">Address</span>
        <div className="w-full border p-3">
          <div className="flex items-center gap-2 whitespace-break-spaces break-words">
            <p>We couldn&apos;t find any address.</p>
          </div>
          <div className="flex justify-end mt-2">
            <div className="border p-2 cursor-pointer hover:border-black">
              <AiOutlinePlus size={20} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-1">
      <span className="font-semibold">Address</span>
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
    </div>
  );
}
