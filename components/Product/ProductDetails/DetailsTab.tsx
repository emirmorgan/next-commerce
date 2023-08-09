"use client";

import { useState } from "react";

import { Product } from "@/lib/types";

type DetailsTabProps = {
  product: Product;
};

export default function DetailsTab({ product }: DetailsTabProps) {
  const [activeMenu, setActiveMenu] = useState("details");

  const handleMenuNav = (menu: string) => {
    if (menu === "details") return setActiveMenu("details");

    setActiveMenu("shipment");
  };

  return (
    <div className="w-full min-h-[225px]">
      <ul className="flex w-full h-12 text-sm font-semibold">
        <li
          onClick={() => handleMenuNav("details")}
          className={
            "flex justify-center items-center flex-1 select-none cursor-pointer border-b-2 " +
            (activeMenu === "details"
              ? " border-black"
              : " hover:border-b-gray-300")
          }
        >
          <span className={activeMenu !== "details" ? "text-gray-400" : ""}>
            Product Details
          </span>
        </li>
        <li
          onClick={() => handleMenuNav("shipment")}
          className={
            "flex justify-center items-center flex-1 select-none cursor-pointer border-b-2 " +
            (activeMenu === "shipment"
              ? " border-black"
              : " hover:border-b-gray-300")
          }
        >
          <span className={activeMenu !== "shipment" ? "text-gray-400" : ""}>
            Shipment
          </span>
        </li>
      </ul>
      <div className="w-full h-full p-2">
        {activeMenu === "details" && (
          <div className="flex flex-col text-sm">
            <span>Brand: {product?.brand}</span>
            <span>Product: {product?.name}</span>
            <p className="mt-2">{product?.desc}</p>
          </div>
        )}
        {activeMenu === "shipment" && (
          <div className="flex flex-col text-sm">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              eros nibh, sagittis nec libero et, efficitur vestibulum erat.
              Phasellus non elit vulputate, imperdiet ante quis, convallis nisl.
              Duis eros justo, tincidunt eget magna ut, vestibulum dictum magna.
              Nunc ante nulla, ullamcorper nec rutrum ut, lobortis eget nisi.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Ut non tortor risus.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
