import { AiOutlineClose } from "react-icons/ai";

import { useRouter } from "next/navigation";

export default function CheckoutFailed() {
  const router = useRouter();

  return (
    <>
      <div className="inline-flex flex-col justify-center items-center rounded-lg border p-6 gap-4">
        <div className="flex bg-red-500 p-1 rounded-full">
          <AiOutlineClose size={32} color="white" />
        </div>
        <div className="max-w-[300px] text-center">
          <p className="font-semibold text-red-500">
            There was an error while processing your payment. Please try again
            or contact us.
          </p>
        </div>
      </div>
      <div
        onClick={() => router.push("/")}
        className="flex border border-gray-300 rounded-lg font-semibold cursor-pointer px-4 py-2 mt-4 hover:bg-gray-50"
      >
        Go back
      </div>
    </>
  );
}
