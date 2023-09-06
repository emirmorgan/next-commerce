import { AiOutlineFileText } from "react-icons/ai";

export default function UserOrders() {
  return (
    <ul className="flex flex-col gap-2">
      <li className="flex items-center gap-1">
        <div className="w-full border p-2">
          <span>Order Id: 5514141 - 07/09/2023</span>
        </div>
        <div className="border p-2 cursor-pointer hover:border-black transition-all ease-linear">
          <AiOutlineFileText size={24} />
        </div>
      </li>
    </ul>
  );
}
