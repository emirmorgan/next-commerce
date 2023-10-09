"use client";

import { createContext, useContext, useCallback } from "react";

import { useSearchParams } from "next/navigation";

type ParamsContextProvider = {
  children: React.ReactNode;
};

type IParamsContext = {
  currentCategory: string;
  currentSubcategory: string;
  currentBrand: string;
  currentColor: string;
  priceFrom: string;
  priceTo: string;
  sort: string;
  createQueryString: (name: string, value: string) => void;
};

const ParamsContext = createContext({} as IParamsContext);

export function useURLParams() {
  return useContext(ParamsContext);
}

export function ParamsProvider({ children }: ParamsContextProvider) {
  const searchParams = useSearchParams();

  const currentCategory = searchParams.get("category") as string;
  const currentSubcategory = searchParams.get("subcategory") as string;
  const currentBrand = searchParams.get("brand") as string;
  const currentColor = searchParams.get("color") as string;
  const priceFrom = searchParams.get("priceFrom") as string;
  const priceTo = searchParams.get("priceTo") as string;
  const sort = searchParams.get("sort") as string;

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <ParamsContext.Provider
      value={{
        currentCategory,
        currentSubcategory,
        currentBrand,
        currentColor,
        priceFrom,
        priceTo,
        sort,
        createQueryString,
      }}
    >
      {children}
    </ParamsContext.Provider>
  );
}
