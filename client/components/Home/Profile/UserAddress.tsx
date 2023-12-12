import {
  AiOutlineDelete,
  AiOutlineEdit,
  AiOutlineHome,
  AiOutlinePhone,
  AiOutlinePlus,
} from "react-icons/ai";

import { UserAddress } from "@/lib/types";

import { useAuth } from "@/context/AuthContext";
import { useModal } from "@/context/ModalContext";

export default function UserAddress({
  fullName,
  contactNumber,
  country,
  city,
  addressLine,
  addressLineSecond,
}: UserAddress) {
  const { updateAddress } = useAuth();
  const { openModal, setAddressType } = useModal();

  if (
    fullName === (null || undefined) ||
    contactNumber === (null || undefined) ||
    addressLine === (null || undefined)
  ) {
    return (
      <div className="flex flex-col gap-1">
        <span className="font-semibold">Address</span>
        <div className="w-full border p-3">
          <div className="flex items-center gap-2 whitespace-break-spaces break-words">
            <p>We couldn&apos;t find any address.</p>
          </div>
          <div className="flex justify-end mt-2">
            <div
              onClick={() => {
                openModal("address");
                setAddressType("add");
              }}
              className="border p-2 cursor-pointer hover:border-black"
            >
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
        <span className="font-semibold">{fullName}</span>
        <div className="flex items-center gap-2 whitespace-break-spaces break-words">
          <AiOutlineHome size={22} />
          <p>{addressLine + " " + addressLineSecond ?? addressLineSecond}</p>
        </div>
        <div className="flex items-center gap-2">
          <AiOutlinePhone size={22} min={22} />
          <span>{contactNumber}</span>
        </div>
        <div className="flex justify-end gap-2">
          <div
            onClick={() => {
              openModal("address");
              setAddressType("update");
            }}
            className="border p-2 cursor-pointer hover:border-black"
          >
            <AiOutlineEdit size={20} />
          </div>
          <div
            onClick={() => updateAddress("delete", "")}
            className="border p-2 cursor-pointer hover:border-red-500 hover:text-red-500"
          >
            <AiOutlineDelete size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}
