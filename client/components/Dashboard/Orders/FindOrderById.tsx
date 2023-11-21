"use client";

import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function FindOrderById() {
  const router = useRouter();
  const pathname = usePathname();

  const [orderId, setOrderId] = useState<number>();

  const handleFindById = (id: number) => {
    if (!id || id === 0) {
      router.replace(pathname, {
        scroll: false,
      });
    } else {
      router.replace(pathname + "?orderId=" + id, {
        scroll: false,
      });
    }
  };

  return (
    <div className="flex items-center border w-56">
      <div className="flex-1 border-r p-2">
        <input
          className="w-full"
          type="number"
          min={0}
          placeholder="Find the order by id"
          onChange={(e) => setOrderId(Number(e.target.value))}
        />
      </div>
      <div
        onClick={() => handleFindById(orderId as number)}
        className="cursor-pointer p-2 hover:bg-gray-100"
      >
        <AiOutlineSearch size={24} />
      </div>
    </div>
  );
}
