import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

import { useProducts } from "@/context/ProductsContext";

import PaginationBox from "./PaginationBox";
import { useURLParams } from "@/context/ParamsContext";
import { usePathname, useRouter } from "next/navigation";

export default function PaginationBar() {
  const router = useRouter();
  const pathname = usePathname();

  const { pn, createQueryString } = useURLParams();
  const { productsResponse } = useProducts();

  const boxCount = Math.ceil(
    productsResponse.totalProducts / productsResponse.pageSize
  );

  const handlePrevious = () => {
    if (pn && Number(pn) > 1) {
      router.replace(
        pathname + "?" + createQueryString("pn", String(Number(pn) - 1))
      );
    }
  };

  const handleNext = () => {
    if (!pn) {
      router.replace(pathname + "?" + createQueryString("pn", String(2)));
    } else if (Number(pn) < boxCount) {
      router.replace(
        pathname + "?" + createQueryString("pn", String(Number(pn) + 1))
      );
    }
  };

  return (
    <div className="flex justify-center items-center my-3 gap-2">
      {pn && Number(pn) > 1 && (
        <div
          onClick={handlePrevious}
          className="flex justify-center items-center cursor-pointer gap-1 mr-2"
        >
          <AiFillCaretLeft />
          <span>Previous</span>
        </div>
      )}
      {Array.from({ length: boxCount }).map((_, index) => (
        <PaginationBox key={index} productNumber={String(index + 1)} />
      ))}
      {pn &&
        productsResponse.pageSize * productsResponse.pageNumber <
          productsResponse.totalProducts && (
          <div
            onClick={handleNext}
            className="flex justify-center items-center cursor-pointer gap-1 ml-2"
          >
            <span>Next</span>
            <AiFillCaretRight />
          </div>
        )}
    </div>
  );
}
