"use client";

import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import CheckoutFailed from "@/components/Checkout/CheckoutComplete/Failed";
import CheckoutCompleteSkeleton from "@/components/Checkout/CheckoutComplete/Skeleton";
import CheckoutSucceeded from "@/components/Checkout/CheckoutComplete/Succeeded";

export default function CheckoutComplete() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const paymentIntent = searchParams.get("payment_intent");
  const clientSecret = searchParams.get("payment_intent_client_secret");
  const paymentStatus = searchParams.get("redirect_status");

  const [status, setStatus] = useState("loading");
  const [order, setOrder] = useState();

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
          setStatus("succeeded");
        })
        .catch((err) => {
          setStatus("failed");
        });
    } else {
      setStatus("failed");
    }
  }, []);

  const payment = {
    loading: <CheckoutCompleteSkeleton />,
    succeeded: <CheckoutSucceeded />,
    failed: <CheckoutFailed />,
  }[status];

  return <div>{payment}</div>;
}
