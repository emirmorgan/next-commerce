import {
  AiFillDollarCircle,
  AiFillShopping,
  AiOutlineAppstore,
  AiOutlineUser,
} from "react-icons/ai";

//Components
import SalesChart from "@/components/Dashboard/Main/SalesChart";
import VisitorChart from "@/components/Dashboard/Main/VisitorChart";
import LastOrders from "@/components/Dashboard/Main/LastOrders";

export default function DashboardPage() {
  return (
    <div className="flex flex-col h-full w-full">
      <h1 className="text-xl font-semibold mt-3">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 lg:flex-row gap-3 mt-4">
        <div className="flex items-center border rounded p-3">
          <div className="flex items-center justify-center bg-green-200 text-green-700 w-12 h-12 rounded-full">
            <AiFillDollarCircle size={28} />
          </div>
          <div className="flex flex-col font-semibold ml-4">
            <span className="text-sm text-gray-500">Total Sales</span>
            <span className="text-xl">34.855$</span>
          </div>
        </div>
        <div className="flex items-center border rounded p-3">
          <div className="flex items-center justify-center bg-blue-200 text-blue-700 w-12 h-12 rounded-full">
            <AiFillShopping size={28} />
          </div>
          <div className="flex flex-col font-semibold ml-4">
            <span className="text-sm text-gray-500">Total Orders</span>
            <span className="text-xl">211</span>
          </div>
        </div>
        <div className="flex items-center border rounded p-3">
          <div className="flex items-center justify-center bg-orange-200 text-orange-700 w-12 h-12 rounded-full">
            <AiOutlineAppstore size={28} />
          </div>
          <div className="flex flex-col font-semibold ml-4">
            <span className="text-sm text-gray-500">Total Products</span>
            <span className="text-xl">345</span>
          </div>
        </div>
        <div className="flex items-center border rounded p-3">
          <div className="flex items-center justify-center bg-purple-200 text-purple-700 w-12 h-12 rounded-full">
            <AiOutlineUser size={28} />
          </div>
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
        <div className="flex flex-col w-full justify-center items-center border overflow-hidden mt-3 p-3 xl:w-2/4">
          <h1 className="text-lg font-semibold mb-3">Visitor statistics</h1>
          <VisitorChart />
        </div>
      </div>
      <LastOrders />
    </div>
  );
}
