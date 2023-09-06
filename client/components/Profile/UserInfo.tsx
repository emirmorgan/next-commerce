import { AiOutlineUser } from "react-icons/ai";

export default function UserInfo({ email }: { email: string }) {
  return (
    <div className="flex flex-col">
      <div className="inline-flex mx-auto border border-black rounded-full p-4 mt-3">
        <AiOutlineUser size={42} />
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <span className="font-semibold">E-mail</span>
        <div className="border p-2">
          <input
            className="w-full focus-within:outline-none"
            type="email"
            value={email}
            readOnly
          />
        </div>
      </div>
    </div>
  );
}
