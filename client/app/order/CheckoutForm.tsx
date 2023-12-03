import { AiOutlineLoading } from "react-icons/ai";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";

import { type StripePaymentElementOptions } from "@stripe/stripe-js";
import {
  AddressElement,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent?.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message as string);
      toast.error(message);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  const paymentElementOptions: StripePaymentElementOptions = {
    layout: "tabs",
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2">
        <div className="flex justify-center items-center whitespace-nowrap text-gray-700 text-sm gap-2">
          <div className="w-full h-[1px] bg-gray-200" />
          <span>Shipping Information</span>
          <div className="w-full h-[1px] bg-gray-200" />
        </div>
        <AddressElement id="address-element" options={{ mode: "shipping" }} />
        <div className="flex justify-center items-center whitespace-nowrap text-gray-700 text-sm gap-2">
          <div className="w-full h-[1px] bg-gray-200" />
          <span>Payment Information</span>
          <div className="w-full h-[1px] bg-gray-200" />
        </div>
        <PaymentElement id="payment-element" options={paymentElementOptions} />
      </div>
      <button
        disabled={isLoading || !stripe || !elements}
        id="submit"
        className="flex items-center justify-center bg-black text-white w-full rounded p-2 mt-2"
      >
        {isLoading ? (
          <AiOutlineLoading color="white" className="animate-spin" />
        ) : (
          <span>Pay now</span>
        )}
      </button>
    </form>
  );
}
