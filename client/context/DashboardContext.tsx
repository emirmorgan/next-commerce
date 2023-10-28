"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

import { useURLParams } from "./ParamsContext";

import setCookies from "@/lib/setCookies";

import { OrderProps, StatisticsProps } from "@/lib/types";

type DashboardContextProvider = {
  children: React.ReactNode;
};

type IDashboardContext = {
  orders: OrderProps | undefined;
  statistics: StatisticsProps | undefined;
};

export const DashboardContext = createContext({} as IDashboardContext);

export function useDashboard() {
  return useContext(DashboardContext);
}

export function DashboardProvider({ children }: DashboardContextProvider) {
  const { orderId, sort, pn } = useURLParams();

  const [statistics, setStatistics] = useState<StatisticsProps>();
  const [orders, setOrders] = useState<OrderProps>();

  useEffect(() => {
    fetchStatistics();

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    fetchOrders();

    // eslint-disable-next-line
  }, [orderId, sort, pn]);

  async function fetchOrders() {
    try {
      const token = await setCookies({ type: "GET", tag: "token", data: "" });

      const response = await axios.get(
        process.env.NEXT_PUBLIC_API_URL + "/dashboard/orders",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            orderId: orderId,
            sort: sort,
            pn: pn,
          },
        }
      );

      setOrders(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchStatistics() {
    try {
      const token = await setCookies({ type: "GET", tag: "token", data: "" });

      const response = await axios.get(
        process.env.NEXT_PUBLIC_API_URL + "/dashboard/statistics",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setStatistics(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <DashboardContext.Provider value={{ orders, statistics }}>
      {children}
    </DashboardContext.Provider>
  );
}
