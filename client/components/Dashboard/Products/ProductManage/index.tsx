"use client";

import { AiOutlinePlus } from "react-icons/ai";

import { useState } from "react";

import ProductManageTab from "./ProductManageTab";
import FindProductById from "./FindProductById";

export default function ProductManage() {
  const [currentType, setCurrentType] = useState<string>();
  const [isTabVisible, setTabVisible] = useState<boolean>(false);

  const handleOpenTab = (type: string) => {
    setCurrentType(type);

    if (isTabVisible) {
      setTabVisible(false);
    } else {
      setTabVisible(true);
    }
  };

  const handleCloseTab = () => {
    setTabVisible(false);
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-2">
        <FindProductById />
        <div
          onClick={() => handleOpenTab("create")}
          className={
            "flex justify-center items-center gap-2 border cursor-pointer transition-all ease-linear whitespace-nowrap select-none p-2 hover:border-gray-500" +
            (currentType === "create" && isTabVisible === true
              ? " border-black"
              : null)
          }
        >
          <AiOutlinePlus size={22} />
          <span>Create Product</span>
        </div>
      </div>
      <ProductManageTab
        type={currentType as string}
        isVisible={isTabVisible}
        handleClose={handleCloseTab}
      />
    </>
  );
}
