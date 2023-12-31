import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { usePathname, useRouter } from "next/navigation";

import { useURLParams } from "@/context/ParamsContext";

import PaginationBox from "./PaginationBox";

interface PaginationProps {
  totalItems: number;
  pageSize: number;
  pageNumber: number;
}

export default function PaginationBar({
  totalItems,
  pageSize,
  pageNumber,
}: PaginationProps) {
  const router = useRouter();
  const pathname = usePathname();

  const { pn, createQueryString } = useURLParams();

  const totalPageCount = Math.ceil(totalItems / pageSize);

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
    } else if (Number(pn) < totalPageCount) {
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
      {Array.from({ length: totalPageCount }).map((_, index) => (
        <PaginationBox key={index} pageNumber={String(index + 1)} />
      ))}
      {pn && pageSize * pageNumber < totalItems && (
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
