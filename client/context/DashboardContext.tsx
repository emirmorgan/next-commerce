"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

import setCookies from "@/lib/setCookies";

import { useAuth } from "./AuthContext";
import { useURLParams } from "./ParamsContext";
import { OrderListProps } from "@/lib/types";

export const DashboardContext = createContext({} as IDashboardContext);

export function useDashboard() {
  return useContext(DashboardContext);
}

type DashboardResponseProps = {
  totalOrders: number;
  pageSize: number;
  pageNumber: number;
  orders: OrderListProps[];
};

type DashboardContextProvider = {
  children: React.ReactNode;
};

type IDashboardContext = {
  ordersResponse: DashboardResponseProps;
  isLoading: boolean;
};

export function DashboardProvider({ children }: DashboardContextProvider) {
  const { orderId, sort, pn } = useURLParams();

  const [isLoading, setIsLoading] = useState(false);
  const [ordersResponse, setOrdersResponse] = useState<DashboardResponseProps>({
    totalOrders: 0,
    pageSize: 10,
    pageNumber: 1,
    orders: [],
  });

  useEffect(() => {
    fetchOrders();

    // eslint-disable-next-line
  }, [orderId, sort, pn]);

  async function fetchOrders() {
    try {
      const token = await setCookies({ type: "GET", tag: "token", data: "" });

      await axios
        .get(process.env.NEXT_PUBLIC_API_URL + "/dashboard/orders", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            orderId: orderId,
            sort: sort,
            pn: pn,
          },
        })
        .then((response) => {
          setOrdersResponse(response.data);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <DashboardContext.Provider value={{ ordersResponse, isLoading }}>
      {children}
    </DashboardContext.Provider>
  );
}
