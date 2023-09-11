"use client";

import axios from "axios";
import { createContext, useContext, useState } from "react";

import setCookies from "@/lib/setCookies";
import verifyToken from "@/lib/verifyToken";
import { Order } from "@/lib/types";

type OrderContextProvider = {
  children: React.ReactNode;
};

type IOrderContext = {
  orders: Order[];
  currentOrder: Order | null;
  fetchOrders: () => void;
  getOrder: (orderId: number) => Promise<Order | undefined>;
};

const OrderContext = createContext({} as IOrderContext);

export function useOrder() {
  return useContext(OrderContext);
}

export function OrderProvider({ children }: OrderContextProvider) {
  const [orders, setOrders] = useState<Order[]>([]);
  const [currentOrder, setCurrentOrder] = useState<Order | null>(null);

  async function fetchOrders() {
    const token = await setCookies({ type: "GET", tag: "token", data: "" });

    const hasVerifiedToken = token && (await verifyToken(token as string));

    if (hasVerifiedToken) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;

      const orderData = await axios
        .get(process.env.NEXT_PUBLIC_API_URL + "/user/order")
        .then((response) => {
          return response.data;
        });

      setOrders(orderData);
    }
  }

  async function getOrder(orderId: number): Promise<Order | undefined> {
    const order = await orders.find((order) => order.orderID === orderId);

    if (order) {
      setCurrentOrder(order);
    } else {
      return undefined;
    }
  }

  return (
    <OrderContext.Provider
      value={{ currentOrder, orders, fetchOrders, getOrder }}
    >
      {children}
    </OrderContext.Provider>
  );
}
