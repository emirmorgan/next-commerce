import { AiOutlineMinus, AiOutlinePlus, AiOutlineSearch } from "react-icons/ai";

import ProductsList from "@/components/Dashboard/Products/ProductList";

export default function DashboardProducts() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <div className="flex flex-col md:flex-row gap-2">
        <div className="flex items-center border">
          <div className="flex-1 border-r p-2">
            <input type="text" placeholder="Search by product id" />
          </div>
          <div className="cursor-pointer p-2 hover:bg-gray-100">
            <AiOutlineSearch size={24} />
          </div>
        </div>
        <div className="flex justify-center items-center gap-2 border cursor-pointer transition-all ease-linear whitespace-nowrap p-2 hover:border-gray-500">
          <AiOutlinePlus size={22} />
          <span>Create Product</span>
        </div>
        <div className="flex justify-center items-center gap-2 border cursor-pointer transition-all ease-linear whitespace-nowrap p-2 hover:border-gray-500">
          <AiOutlineMinus size={22} />
          <span>Delete Product</span>
        </div>
      </div>
      <ProductsList />
    </div>
  );
}
