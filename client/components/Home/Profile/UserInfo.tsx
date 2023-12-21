"use client";

import { AiOutlineUser } from "react-icons/ai";

import { useAuth } from "@/context/AuthContext";

export default function UserInfo() {
  const { user } = useAuth();

  return (
    <div className="flex flex-col p-4 mt-3 gap-1">
      <div className="w-16 h-16 flex items-center justify-center bg-gray-200 rounded-full">
        <AiOutlineUser color="gray" size={26} />
      </div>
      <div className="flex flex-col mt-3">
        <span className="font-semibold">E-mail</span>
        <span>{user?.email}</span>
      </div>
    </div>
  );
}
