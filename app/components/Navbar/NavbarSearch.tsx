import { AiOutlineSearch } from "react-icons/ai";

export default function NavbarSearch() {
  return (
    <div className="flex items-center justify-center w-full max-w-[400px] bg-slate-50 border-2 border-gray-100 px-1 py-2 rounded-lg focus-within:shadow focus-within:border-green-500 focus-within:bg-white transition-all ease-linear group">
      <AiOutlineSearch
        size={22}
        className="text-gray-500 group-focus-within:text-green-600 mx-1 transition-all ease-linear"
      />
      <input
        className="w-full bg-slate-50 text-gray-600 focus:outline-none focus-within:bg-white px-1"
        type="text"
        placeholder="Search..."
      />
    </div>
  );
}
