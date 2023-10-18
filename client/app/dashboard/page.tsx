import SalesChart from "@/components/Dashboard/Main/SalesChart";
import {
  AiOutlineAppstore,
  AiOutlineDollarCircle,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";

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
      <div className="flex flex-col justify-between xl:flex-row gap-3 mt-5">
        <div className="flex flex-col w-full border rounded p-3">
          <h1 className="text-lg font-semibold mb-3">Sales statistics</h1>
          <div className="max-w-[700px]">
            <SalesChart />
          </div>
        </div>
        <div className="flex flex-col w-full border rounded p-3">
          <h1 className="font-semibold mb-3">Visitors</h1>
          <div className="max-w-[700px]">
            <SalesChart />
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-5">Latest Orders</div>
    </div>
  );
}
