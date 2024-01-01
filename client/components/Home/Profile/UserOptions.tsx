"use client";

import { useRouter } from "next/navigation";

import { useAuth } from "@/context/AuthContext";
import { useModal } from "@/context/ModalContext";

export default function UserOptions() {
  const router = useRouter();

  const { user, authLogout } = useAuth();
  const { openModal } = useModal();

  return (
    <div className="flex flex-wrap justify-center items-center border-t whitespace-nowrap p-3 gap-2">
      {user?.role === "ADMIN" && (
        <button
          onClick={() => router.push("/dashboard")}
          className="commerce-button"
        >
          Dashboard
        </button>
      )}
      <button onClick={() => openModal("password")} className="commerce-button">
        Change Password
      </button>
      <button onClick={authLogout} className="commerce-button">
        Log out
      </button>
    </div>
  );
}
