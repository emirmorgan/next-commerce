"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

import { useURLParams } from "./ParamsContext";

import { OrderProps, ProductRequest, StatisticsProps } from "@/lib/types";
import { toast } from "react-toastify";
import { useProducts } from "./ProductsContext";

type DashboardContextProvider = {
  children: React.ReactNode;
};

type IDashboardContext = {
  orders: OrderProps | undefined;
  statistics: StatisticsProps | undefined;
  createProduct: (data: ProductRequest, formData: FormData) => void;
  deleteProduct: (productId: number) => void;
};

export const DashboardContext = createContext({} as IDashboardContext);

export function useDashboard() {
  return useContext(DashboardContext);
}

export function DashboardProvider({ children }: DashboardContextProvider) {
  const { fetchProducts } = useProducts();
  const { orderId, sort, pn } = useURLParams();

  const [statistics, setStatistics] = useState<StatisticsProps>();
  const [orders, setOrders] = useState<OrderProps>();

  useEffect(() => {
    fetchStatistics();
  }, []);

  useEffect(() => {
    fetchOrders();

    // eslint-disable-next-line
  }, [orderId, sort, pn]);

  async function fetchOrders() {
    await axios
      .get(process.env.NEXT_PUBLIC_API_URL + "/orders", {
        params: {
          orderId: orderId,
          sort: sort,
          pn: pn,
        },
      })
      .then((response) => {
        setOrders(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function fetchStatistics() {
    await axios
      .get(process.env.NEXT_PUBLIC_API_URL + "/dashboard/statistics")
      .then((response) => {
        setStatistics(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function createProduct(data: ProductRequest, formData: FormData) {
    await axios
      .post(process.env.NEXT_PUBLIC_API_URL + "/products/create", data)
      .then((res) => {
        const product = res.data;

        formData.append("productId", product.id);
        formData.append("productName", product.name);

        createProductImage(formData);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Something went wrong when creating the product.");
      });
  }

  async function createProductImage(data: FormData) {
    await axios
      .post(process.env.NEXT_PUBLIC_API_URL + "/products/image/upload", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        toast.success(res.data);
        fetchProducts();
      })
      .catch((err) => toast.error(err.data));
  }

  async function deleteProduct(productId: number) {
    await axios
      .post(process.env.NEXT_PUBLIC_API_URL + "/products/delete", { productId })
      .then((res) => {
        toast.success(res.data);
        fetchProducts();
      })
      .catch((err) => toast.error("Something went wrong, try again."));
  }

  return (
    <DashboardContext.Provider
      value={{ orders, statistics, createProduct, deleteProduct }}
    >
      {children}
    </DashboardContext.Provider>
  );
}
