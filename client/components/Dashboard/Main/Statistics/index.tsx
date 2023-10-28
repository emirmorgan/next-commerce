"use client";

import {
  AiFillDollarCircle,
  AiFillShopping,
  AiOutlineAppstore,
  AiOutlineUser,
} from "react-icons/ai";

import { useDashboard } from "@/context/DashboardContext";

import StatisticsSkeleton from "./Skeleton";

export default function Statistics() {
  const { statistics } = useDashboard();

  if (!statistics) {
    return <StatisticsSkeleton />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 lg:flex-row gap-3 mt-4">
      <div className="flex items-center border rounded p-3">
        <div className="flex items-center justify-center bg-green-200 text-green-700 w-12 h-12 rounded-full">
          <AiFillDollarCircle size={28} />
        </div>
        <div className="flex flex-col font-semibold ml-4">
          <span className="text-sm text-gray-500">Total Sales</span>
          <span className="text-xl">{statistics.totalSales}$</span>
        </div>
      </div>
      <div className="flex items-center border rounded p-3">
        <div className="flex items-center justify-center bg-blue-200 text-blue-700 w-12 h-12 rounded-full">
          <AiFillShopping size={28} />
        </div>
        <div className="flex flex-col font-semibold ml-4">
          <span className="text-sm text-gray-500">Total Orders</span>
          <span className="text-xl">{statistics.totalOrders}</span>
        </div>
      </div>
      <div className="flex items-center border rounded p-3">
        <div className="flex items-center justify-center bg-orange-200 text-orange-700 w-12 h-12 rounded-full">
          <AiOutlineAppstore size={28} />
        </div>
        <div className="flex flex-col font-semibold ml-4">
          <span className="text-sm text-gray-500">Total Products</span>
          <span className="text-xl">{statistics.totalProducts}</span>
        </div>
      </div>
      <div className="flex items-center border rounded p-3">
        <div className="flex items-center justify-center bg-purple-200 text-purple-700 w-12 h-12 rounded-full">
          <AiOutlineUser size={28} />
        </div>
        <div className="flex flex-col font-semibold ml-4">
          <span className="text-sm text-gray-500">Total Customers</span>
          <span className="text-xl">{statistics.totalCustomer}</span>
        </div>
      </div>
    </div>
  );
}
