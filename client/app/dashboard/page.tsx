import {
  AiOutlineAppstore,
  AiOutlineDollarCircle,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";

import SalesChart from "@/components/Dashboard/Main/SalesChart";
import { VisitorChart } from "@/components/Dashboard/Main/VisitorChart";

export default function DashboardPage() {
  return (
    <div className="flex flex-col h-full w-full">
      <h1 className="text-xl font-semibold mt-3">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 lg:flex-row gap-3 mt-4">
        <div className="flex items-center border rounded p-3">
          <AiOutlineDollarCircle size={48} />
          <div className="flex flex-col font-semibold ml-4">
            <span className="text-sm text-gray-500">Total Sales</span>
            <span className="text-xl">34.855$</span>
          </div>
        </div>
        <div className="flex items-center border rounded p-3">
          <AiOutlineShoppingCart size={48} />
          <div className="flex flex-col font-semibold ml-4">
            <span className="text-sm text-gray-500">Total Orders</span>
            <span className="text-xl">211</span>
          </div>
        </div>
        <div className="flex items-center border rounded p-3">
          <AiOutlineAppstore size={48} />
          <div className="flex flex-col font-semibold ml-4">
            <span className="text-sm text-gray-500">Total Products</span>
            <span className="text-xl">345</span>
          </div>
        </div>
        <div className="flex items-center border rounded p-3">
          <AiOutlineUser size={48} />
          <div className="flex flex-col font-semibold ml-4">
            <span className="text-sm text-gray-500">Total Customers</span>
            <span className="text-xl">4551</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 xl:flex-row">
        <div className="flex flex-col w-full border mt-3 p-3 xl:w-2/4">
          <h1 className="text-lg font-semibold mb-3">Sales statistics</h1>
          <SalesChart />
        </div>
        <div className="flex flex-col w-full justify-center items-center border mt-3 p-3 xl:w-2/4">
          <h1 className="text-lg font-semibold mb-3">Visitor statistics</h1>
          <VisitorChart />
        </div>
      </div>
    </div>
  );
}
