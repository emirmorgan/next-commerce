import { AiOutlineSearch } from "react-icons/ai";

export default function NavbarSearch() {
  return (
    <div className="flex items-center justify-center w-full max-w-[350px] md:max-w-[500px] bg-slate-50 border-2 border-gray-100 px-1 py-2 rounded-lg focus-within:border-gray-300 transition-all ease-linear group mt-1 md:mt-0">
      <AiOutlineSearch
        size={22}
        className="text-gray-500 mx-1 transition-all ease-linear"
      />
      <input
        className="w-full bg-slate-50 text-gray-600 focus:outline-none px-1"
        type="text"
        placeholder="Search..."
      />
    </div>
  );
}
