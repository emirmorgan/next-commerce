import { useRouter, usePathname } from "next/navigation";

import { useURLParams } from "@/context/ParamsContext";
import { useProducts } from "@/context/ProductsContext";

type PaginationBoxProps = {
  productNumber: string;
};

export default function PaginationBox({ productNumber }: PaginationBoxProps) {
  const router = useRouter();
  const pathname = usePathname();

  const { productsResponse } = useProducts();
  const { pn, createQueryString } = useURLParams();

  const lastBox = Math.ceil(
    productsResponse.totalProducts / productsResponse.pageSize
  );

  let boxClass =
    "border text-lg font-semibold cursor-pointer transition-all ease-linear w-10 h-10 flex justify-center items-center";

  if (!pn && productNumber === "1") {
    boxClass += " border-black";
  } else if (pn === productNumber) {
    boxClass += " border-black";
  } else if (productNumber === String(lastBox)) {
    boxClass +=
      " ml-[20px] before:content-['-'] before:pr-[70px] before:absolute before:pointer-events-none";
  } else if (productNumber === "1") {
    boxClass +=
      " mr-[20px] after:content-['-'] after:pl-[70px] after:absolute after:pointer-events-none";
  } else {
    boxClass += " border-gray-200";
  }

  const handlePN = () => {
    router.replace(pathname + "?" + createQueryString("pn", productNumber));
  };

  if (
    (!pn && (productNumber === "2" || productNumber === "3")) ||
    (pn === "1" && (productNumber === "2" || productNumber === "3")) ||
    String(Number(pn) - 1) === productNumber ||
    String(Number(pn) + 1) === productNumber ||
    pn === productNumber ||
    productNumber === String(lastBox) ||
    productNumber === "1"
  ) {
    return (
      <div onClick={handlePN} className={boxClass}>
        {productNumber}
      </div>
    );
  }
}
