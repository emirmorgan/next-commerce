"use client";

import { AiOutlineMinus, AiOutlinePlus, AiOutlineSearch } from "react-icons/ai";

import { useState } from "react";

import ProductManageTab from "./ProductManageTab";

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
        <div className="flex items-center border">
          <div className="flex-1 border-r p-2">
            <input type="text" placeholder="Search by product id" />
          </div>
          <div className="cursor-pointer p-2 hover:bg-gray-100">
            <AiOutlineSearch size={24} />
          </div>
        </div>
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
        <div
          onClick={() => handleOpenTab("delete")}
          className={
            "flex justify-center items-center gap-2 border cursor-pointer transition-all ease-linear whitespace-nowrap select-none p-2 hover:border-gray-500" +
            (currentType === "delete" && isTabVisible === true
              ? " border-black"
              : null)
          }
        >
          <AiOutlineMinus size={22} />
          <span>Delete Product</span>
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
