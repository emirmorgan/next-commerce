import { useRouter, usePathname } from "next/navigation";

import { useURLParams } from "@/context/ParamsContext";

type PaginationBoxProps = {
  pageNumber: string;
};

export default function PaginationBox({ pageNumber }: PaginationBoxProps) {
  const router = useRouter();
  const pathname = usePathname();

  const { pn, createQueryString } = useURLParams();

  const isCurrentPage = pn === pageNumber;
  const isAdjacentPage =
    String(Number(pn) - 1) === pageNumber ||
    String(Number(pn) + 1) === pageNumber;

  const shouldRender = isAdjacentPage || isCurrentPage;

  const handlePN = () => {
    router.replace(pathname + "?" + createQueryString("pn", pageNumber));
  };

  if (shouldRender) {
    return (
      <div
        onClick={handlePN}
        className={"commerce-button " + (pn == pageNumber && " !bg-slate-50")}
      >
        {pageNumber}
      </div>
    );
  }
}
