import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function FindProductById() {
  const router = useRouter();
  const pathname = usePathname();

  const [productId, setProductId] = useState<number | null>(null);

  const handleFindById = (id: number) => {
    if (!id || id === 0) {
      router.replace(pathname, {
        scroll: false,
      });
    } else {
      router.replace(pathname + "?pid=" + id, {
        scroll: false,
      });
    }
  };

  return (
    <div className="flex items-center border">
      <div className="flex-1 border-r p-2">
        <input
          type="number"
          min={0}
          placeholder="Find the product by id"
          value={productId as number}
          onChange={(e) => setProductId(Number(e.target.value))}
        />
      </div>
      <div
        onClick={() => handleFindById(productId as number)}
        className="cursor-pointer p-2 hover:bg-gray-100"
      >
        <AiOutlineSearch size={24} />
      </div>
    </div>
  );
}
