"use client";

import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { Order } from "@/lib/types";
import { useShoppingCart } from "@/context/ShoppingCartContext";

import CheckoutFailed from "@/components/Checkout/CheckoutComplete/Failed";
import CheckoutCompleteSkeleton from "@/components/Checkout/CheckoutComplete/Skeleton";
import CheckoutSucceeded from "@/components/Checkout/CheckoutComplete/Succeeded";

export default function CheckoutComplete() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { removeAll } = useShoppingCart();

  const paymentIntent = searchParams.get("payment_intent");
  const clientSecret = searchParams.get("payment_intent_client_secret");
  const paymentStatus = searchParams.get("redirect_status");

  const [status, setStatus] = useState("loading");
  const [order, setOrder] = useState<Order>({} as Order);

  if (!paymentIntent || !clientSecret || !paymentStatus) {
    return router.push("/");
  }

  useEffect(() => {
    if (paymentStatus === "succeeded") {
      axios
        .post(process.env.NEXT_PUBLIC_API_URL + "/orders/add", paymentIntent, {
          headers: { "Content-type": "application/json" },
        })
        .then((res) => {
          setOrder(res.data);
          setStatus("succeeded");
          removeAll();
        })
        .catch((err) => {
          console.log(err);
          setStatus("failed");
        });
    } else {
      setStatus("failed");
    }
  }, []);

  const payment = {
    loading: <CheckoutCompleteSkeleton />,
    succeeded: <CheckoutSucceeded order={order} />,
    failed: <CheckoutFailed />,
  }[status];

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      {payment}
    </div>
  );
}
