import { useURLParams } from "@/context/ParamsContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

export default function SearchBar() {
  const router = useRouter();
  const { q } = useURLParams();
  const [searchParam, setSearchParam] = useState("");

  useEffect(() => {
    if (q) {
      setSearchParam(q);
    }
  }, [q]);

  const handleSearch = (e: any) => {
    if (
      (e.key === "Enter" || e.keyCode === 13) &&
      searchParam !== null &&
      searchParam.trim() !== ""
    ) {
      router.push("/products?q=" + searchParam);
    }
  };

  return (
    <div className="flex items-center justify-center w-full md:max-w-[500px] border border-gray-200 px-1 py-2 focus-within:border-gray-600 transition-all ease-linear group mt-1 md:mt-0">
      <AiOutlineSearch
        size={22}
        className="text-gray-500 mx-1 transition-all ease-linear"
      />
      <input
        className="w-full text-gray-600 focus:outline-none px-1"
        type="text"
        placeholder="Search..."
        value={searchParam}
        onChange={(e) => setSearchParam(e.target.value)}
        onKeyUp={handleSearch}
        maxLength={50}
      />
    </div>
  );
}
