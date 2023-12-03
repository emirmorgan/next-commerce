"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { Elements } from "@stripe/react-stripe-js";
import { type StripeElementsOptions } from "@stripe/stripe-js";

import { useShoppingCart } from "@/context/ShoppingCartContext";
import getStripe from "@/lib/getStripe";

import CheckoutForm from "./CheckoutForm";
import CheckoutInfo from "./CheckoutInfo";

export default function OrderPage() {
  const router = useRouter();
  const stripePromise = getStripe();

  const { cartItems, getSubtotal } = useShoppingCart();
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    if (cartItems.length === 0) {
      return router.push("/");
    }

    const productsData = cartItems.map(({ id, price, quantity }) => ({
      id,
      price,
      quantity,
    }));

    axios
      .post(
        process.env.NEXT_PUBLIC_API_URL + "/payment",
        {
          products: productsData,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((res) => {
        setClientSecret(res.data.clientSecret);
      })
      .catch((error) => {
        console.log(error);
        router.push("/");
      });
  }, []);

  const options: StripeElementsOptions = {
    clientSecret,
    appearance: {
      theme: "stripe",
    },
  };

  return (
    <div className="flex flex-col sm:flex-row container h-[100vh] min-h-[600px] mx-auto">
      <div className="flex flex-1 justify-center items-center p-4">
        <CheckoutInfo products={cartItems} subtotal={getSubtotal} />
      </div>
      <div className="flex flex-1 justify-center items-center p-4">
        {clientSecret && (
          <Elements options={options} stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        )}
      </div>
    </div>
  );
}
