"use client";

import {
  AiFillEnvironment,
  AiOutlineAim,
  AiOutlineDelete,
  AiOutlineEdit,
  AiOutlinePhone,
  AiOutlinePlus,
} from "react-icons/ai";

import { UserAddress } from "@/lib/types";

import { useAuth } from "@/context/AuthContext";
import { useModal } from "@/context/ModalContext";

export default function UserAddress() {
  const { user, updateAddress } = useAuth();
  const { openModal, setAddressType } = useModal();

  if (
    user?.address?.fullName === (null || undefined) ||
    user?.address?.contactNumber === (null || undefined) ||
    user?.address?.addressLine === (null || undefined)
  ) {
    return (
      <div className="flex flex-col p-4 gap-1">
        <span className="font-semibold">Address</span>
        <div className="flex flex-col w-full bg-slate-50 rounded p-3 gap-2">
          <div className="flex items-center gap-2 whitespace-break-spaces break-words">
            <p>We couldn&apos;t find any address.</p>
          </div>
          <div className="flex justify-end mt-2">
            <div
              onClick={() => {
                openModal("address");
                setAddressType("add");
              }}
              className="commerce-button"
            >
              <AiOutlinePlus size={20} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col p-4 gap-1">
      <span className="text-lg font-semibold">Address</span>
      <div className="flex flex-col w-full bg-slate-50 rounded p-3 gap-2">
        <span className="font-semibold">{user?.address.fullName}</span>
        <div className="flex items-center gap-2 text-gray-700 whitespace-break-spaces break-words">
          <AiOutlineAim color="gray" size={22} />
          <p>
            {user?.address.addressLine +
              " " +
              user?.address.addressLineSecond ??
              user?.address.addressLineSecond}
          </p>
        </div>
        <div className="flex items-center gap-2 text-gray-700">
          <AiOutlinePhone color="gray" size={22} />
          <span>{user?.address.contactNumber}</span>
        </div>
        <div className="flex justify-end gap-2">
          <div
            onClick={() => {
              openModal("address");
              setAddressType("update");
            }}
            className="commerce-button"
          >
            <AiOutlineEdit size={20} />
          </div>
          <div
            onClick={() => updateAddress("delete", "")}
            className="commerce-button"
          >
            <AiOutlineDelete size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}
